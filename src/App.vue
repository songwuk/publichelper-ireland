<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import {
  agencies as baseAgencies,
  categories as baseCategories,
  guideDocumentGuides as baseGuideDocumentGuides,
  guides as baseGuides,
  heroImage,
  services as baseServices,
  sourceNotes as baseSourceNotes,
} from "./data/content";
import updateStatus from "./data/update-status.json";
import { formatMessage, locales, textTranslations, uiTranslations } from "./i18n/translations";

const currentView = ref("home");
const selectedGuideId = ref("");
const search = ref("");
const serviceSearch = ref("");
const activeCategory = ref("All");
const onlyOnline = ref(false);
const onlyMyGovId = ref(false);
const language = ref(loadLanguage());
const mobileMenuOpen = ref(false);
const installPrompt = ref(null);
const progress = ref(loadProgress());
const systemUpdateStatus = ref(updateStatus);
const routeViews = new Set(["guides", "services", "agencies", "about"]);
const appBasePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname.replace(/\/$/, "");
const dateLocales = {
  en: "en-IE",
  zh: "zh-CN",
  pt: "pt-PT",
  it: "it-IT",
};

const messages = computed(() => uiTranslations[language.value] || uiTranslations.en);
const textMap = computed(() => textTranslations[language.value] || {});
const agencies = computed(() =>
  baseAgencies.map((agency) => ({
    ...agency,
    name: tr(agency.name),
    short: tr(agency.short),
    summary: tr(agency.summary),
    tags: agency.tags.map(tr),
  })),
);

const categories = computed(() =>
  baseCategories.map((category) => ({
    key: category,
    label: tr(category),
  })),
);

const services = computed(() =>
  baseServices.map((service) => ({
    ...service,
    title: tr(service.title),
    description: tr(service.description),
    categoryKey: service.category,
    category: tr(service.category),
    flags: service.flags.map(tr),
    searchText: `${service.title} ${service.description} ${tr(service.title)} ${tr(service.description)} ${service.category} ${tr(service.category)}`,
  })),
);

const guides = computed(() =>
  baseGuides.map((guide) => ({
    ...guide,
    title: tr(guide.title),
    category: tr(guide.category),
    intro: tr(guide.intro),
    time: tr(guide.time),
    searchText: `${guide.title} ${guide.intro} ${guide.category} ${tr(guide.title)} ${tr(guide.intro)} ${tr(guide.category)}`,
    documentGuide: localizeDocumentGuide(baseGuideDocumentGuides[guide.id]),
    steps: guide.steps.map((step) => ({
      ...step,
      title: tr(step.title),
      detail: tr(step.detail),
    })),
  })),
);

const sourceNotes = computed(() =>
  baseSourceNotes.map((source) => ({
    ...source,
    label: tr(source.label),
  })),
);

const selectedGuide = computed(() => guides.value.find((guide) => guide.id === selectedGuideId.value));

const heroStyle = computed(() => ({
  backgroundImage: `linear-gradient(90deg, rgba(10, 42, 32, 0.92), rgba(18, 74, 58, 0.76) 48%, rgba(15, 33, 45, 0.42)), url("${heroImage}")`,
}));
const formattedSystemUpdate = computed(() => {
  const date = new Date(systemUpdateStatus.value?.lastSystemUpdateAt || updateStatus.lastSystemUpdateAt);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(dateLocales[language.value] || "en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
});

const popularGuides = computed(() => guides.value.slice(0, 4));
const highlightedServices = computed(() => services.value.filter((service) => service.highlight).slice(0, 8));

const filteredServices = computed(() => {
  const needle = serviceSearch.value.trim().toLowerCase();

  return services.value.filter((service) => {
    const agency = getAgency(service.agency);
    const haystack = `${service.searchText} ${agency?.name || ""} ${agency?.summary || ""}`.toLowerCase();
    const matchesSearch = !needle || haystack.includes(needle);
    const matchesCategory = activeCategory.value === "All" || service.categoryKey === activeCategory.value;
    const matchesOnline = !onlyOnline.value || service.flags.includes("Online");
    const matchesMyGovId =
      !onlyMyGovId.value ||
      service.flags.includes("MyGovID") ||
      service.flags.includes("MyWelfare") ||
      service.flags.includes("PSC");

    return matchesSearch && matchesCategory && matchesOnline && matchesMyGovId;
  });
});

const globalResults = computed(() => {
  const needle = search.value.trim().toLowerCase();
  if (!needle) return [];

  const guideResults = guides.value
    .filter((guide) => guide.searchText.toLowerCase().includes(needle))
    .slice(0, 3)
    .map((guide) => ({
      kind: "guide",
      type: t("resultGuide"),
      title: guide.title,
      summary: guide.intro,
      id: guide.id,
    }));

  const serviceResults = services.value
    .filter((service) => service.searchText.toLowerCase().includes(needle))
    .slice(0, 5)
    .map((service) => ({
      kind: "service",
      type: t("resultService"),
      title: service.title,
      summary: service.description,
      url: service.url,
    }));

  return [...guideResults, ...serviceResults];
});

function t(key, params) {
  return formatMessage(messages.value[key] || uiTranslations.en[key] || key, params);
}

function tr(text) {
  return textMap.value[text] || text;
}

function l10n(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language.value] || value.en || "";
  }

  return tr(value);
}

function localizeDocumentGuide(documentGuide) {
  if (!documentGuide) return null;

  return {
    estimate: l10n(documentGuide.estimate),
    note: l10n(documentGuide.note),
    items: documentGuide.items.map((item) => ({
      label: l10n(item.label),
      detail: l10n(item.detail),
    })),
    sources: documentGuide.sources.map((source) => ({
      ...source,
      label: l10n(source.label),
    })),
  };
}

function loadLanguage() {
  try {
    const saved = localStorage.getItem("publichelper-ie-language");
    if (locales.some((locale) => locale.code === saved)) return saved;
  } catch {
    // Fall through to browser language detection.
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const detected = browserLanguages.map(normalizeLanguage).find(Boolean);
  return detected || "en";
}

function normalizeLanguage(value) {
  const lower = String(value || "").toLowerCase();
  if (lower.startsWith("zh")) return "zh";
  if (lower.startsWith("pt")) return "pt";
  if (lower.startsWith("it")) return "it";
  if (lower.startsWith("en")) return "en";
  return "";
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("publichelper-ie-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem("publichelper-ie-progress", JSON.stringify(progress.value));
}

function getAgency(id) {
  return agencies.value.find((agency) => agency.id === id);
}

function guideProgress(guide) {
  const completed = progress.value[guide.id]?.length || 0;
  return {
    completed,
    total: guide.steps.length,
    percentage: Math.round((completed / guide.steps.length) * 100),
  };
}

function isStepDone(guideId, index) {
  return (progress.value[guideId] || []).includes(index);
}

function toggleStep(guideId, index) {
  const current = new Set(progress.value[guideId] || []);
  if (current.has(index)) {
    current.delete(index);
  } else {
    current.add(index);
  }

  progress.value = {
    ...progress.value,
    [guideId]: [...current].sort((a, b) => a - b),
  };
  saveProgress();
}

function openGuide(id) {
  selectedGuideId.value = id;
  currentView.value = "guide";
  mobileMenuOpen.value = false;
  updateBrowserRoute({ view: "guide", guideId: id });
  resetScroll(true);
}

function go(view) {
  currentView.value = view;
  if (view !== "guide") selectedGuideId.value = "";
  mobileMenuOpen.value = false;
  updateBrowserRoute({ view });
  resetScroll(true);
}

function selectGlobalResult(result) {
  if (result.kind === "guide") {
    openGuide(result.id);
  } else {
    window.open(result.url, "_blank", "noopener,noreferrer");
  }
}

async function installApp() {
  if (!installPrompt.value) return;
  installPrompt.value.prompt();
  await installPrompt.value.userChoice;
  installPrompt.value = null;
}

async function loadRemoteUpdateStatus() {
  try {
    const response = await fetch("/api/status", {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) return;

    const status = await response.json();
    if (status?.lastSystemUpdateAt) {
      systemUpdateStatus.value = status;
    }
  } catch {
    systemUpdateStatus.value = updateStatus;
  }
}

function routeToPath({ view, guideId }) {
  if (view === "guide" && guideId) return withBasePath(`/guide/${encodeURIComponent(guideId)}`);
  if (view && view !== "home") return withBasePath(`/${view}`);
  return withBasePath("/");
}

function withBasePath(path) {
  return appBasePath ? `${appBasePath}${path}` : path;
}

function currentAppPath() {
  let path = window.location.pathname;
  if (appBasePath && path.startsWith(appBasePath)) {
    path = path.slice(appBasePath.length) || "/";
  }
  return path.replace(/\/+$/, "") || "/";
}

function parseRoute() {
  const legacyHash = window.location.hash.replace(/^#/, "");
  if (legacyHash.startsWith("guide/")) {
    return { view: "guide", guideId: legacyHash.replace("guide/", ""), legacyHash: true };
  }
  if (routeViews.has(legacyHash)) {
    return { view: legacyHash, legacyHash: true };
  }

  const parts = currentAppPath().split("/").filter(Boolean);
  if (parts[0] === "guide" && parts[1]) {
    return { view: "guide", guideId: decodeURIComponent(parts[1]) };
  }
  if (routeViews.has(parts[0])) {
    return { view: parts[0] };
  }
  return { view: "home" };
}

function applyRoute(route) {
  if (route.view === "guide" && guides.value.some((guide) => guide.id === route.guideId)) {
    selectedGuideId.value = route.guideId;
    currentView.value = "guide";
    return { view: "guide", guideId: route.guideId };
  }

  selectedGuideId.value = "";
  currentView.value = routeViews.has(route.view) ? route.view : "home";
  return { view: currentView.value };
}

function updateBrowserRoute(route, replace = false) {
  const path = routeToPath(route);
  if (window.location.pathname === path && !window.location.hash) return;
  window.history[replace ? "replaceState" : "pushState"](null, "", path);
}

function syncFromLocation() {
  const route = parseRoute();
  const activeRoute = applyRoute(route);
  if (route.legacyHash) updateBrowserRoute(activeRoute, true);
  nextTick(resetScroll);
}

function resetScroll(smooth = false) {
  const behavior = smooth ? "smooth" : "auto";
  window.scrollTo({ top: 0, left: 0, behavior });
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior }));
  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior }), 80);
}

onMounted(() => {
  syncFromLocation();
  loadRemoteUpdateStatus();
  document.documentElement.lang = language.value;
  window.addEventListener("popstate", syncFromLocation);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt.value = event;
  });
});

watch(language, (value) => {
  localStorage.setItem("publichelper-ie-language", value);
  document.documentElement.lang = value;
});
</script>

<template>
  <a class="skip-link" href="#content">{{ t("skip") }}</a>

  <header class="site-header">
    <div class="header-brand-row">
      <button class="brand" type="button" @click="go('home')" :aria-label="t('navHome')">
        <img class="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
        <span>
          <strong>{{ t("brandTitle") }}</strong>
          <small>{{ t("country") }}</small>
        </span>
      </button>

      <nav class="top-nav" :class="{ open: mobileMenuOpen }" :aria-label="t('primaryNavigation')">
        <button type="button" :class="{ active: currentView === 'home' }" @click="go('home')">{{ t("navHome") }}</button>
        <button type="button" :class="{ active: currentView === 'guides' || currentView === 'guide' }" @click="go('guides')">
          {{ t("navGuides") }}
        </button>
        <button type="button" :class="{ active: currentView === 'services' }" @click="go('services')">{{ t("navServices") }}</button>
        <button type="button" :class="{ active: currentView === 'agencies' }" @click="go('agencies')">{{ t("navAgencies") }}</button>
        <button type="button" :class="{ active: currentView === 'about' }" @click="go('about')">{{ t("navAbout") }}</button>
      </nav>

      <div class="header-actions">
        <div class="language-switcher" role="group" :aria-label="t('language')">
          <span>{{ t("language") }}</span>
          <div class="language-options">
            <button
              v-for="locale in locales"
              :key="locale.code"
              type="button"
              :class="{ active: language === locale.code }"
              :aria-pressed="language === locale.code"
              @click="language = locale.code"
            >
              {{ locale.short }}
            </button>
          </div>
        </div>

        <button class="menu-toggle" type="button" @click="mobileMenuOpen = !mobileMenuOpen">
          {{ t("menu") }}
        </button>
      </div>
    </div>
  </header>

  <main id="content">
    <section v-if="currentView === 'home'" class="hero" :style="heroStyle">
      <div class="hero-inner">
        <p class="eyebrow">{{ t("heroEyebrow") }}</p>
        <h1>{{ t("heroTitle") }}</h1>
        <p class="hero-copy">{{ t("heroCopy") }}</p>

        <div class="search-panel">
          <label>
            <span>{{ t("searchQuestion") }}</span>
            <input
              v-model="search"
              type="search"
              :placeholder="t('searchPlaceholder')"
            />
          </label>

          <div v-if="globalResults.length" class="search-results" :aria-label="t('searchResults')">
            <button
              v-for="result in globalResults"
              :key="`${result.type}-${result.title}`"
              type="button"
              @click="selectGlobalResult(result)"
            >
              <span>{{ result.type }}</span>
              <strong>{{ result.title }}</strong>
              <small>{{ result.summary }}</small>
            </button>
          </div>
        </div>

        <div class="hero-facts" :aria-label="t('keyFacts')">
          <span><strong>{{ services.length }}</strong> {{ t("officialServiceLinks") }}</span>
          <span><strong>{{ guides.length }}</strong> {{ t("stepByStepGuides") }}</span>
          <span><strong>{{ formattedSystemUpdate }}</strong> {{ t("systemUpdate") }}</span>
        </div>
      </div>
    </section>

    <template v-if="currentView === 'home'">
      <section class="section section-tight">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ t("popularGuides") }}</p>
            <h2>{{ t("startLifeEvent") }}</h2>
          </div>
          <button class="text-button" type="button" @click="go('guides')">{{ t("viewAllGuides") }}</button>
        </div>

        <div class="guide-strip">
          <button v-for="guide in guides" :key="guide.id" type="button" @click="openGuide(guide.id)">
            <strong>{{ guide.title }}</strong>
            <span>{{ guide.steps.length }} {{ t("steps") }}</span>
          </button>
        </div>
      </section>

      <section class="section muted-band">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ t("stepGuidesEyebrow") }}</p>
            <h2>{{ t("checklistsSaved") }}</h2>
          </div>
        </div>

        <div class="card-grid four">
          <article v-for="guide in popularGuides" :key="guide.id" class="guide-card">
            <div class="card-meta">
              <span>{{ guide.category }}</span>
              <span>{{ guide.steps.length }} {{ t("steps") }}</span>
            </div>
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.intro }}</p>
            <div class="progress-line" aria-hidden="true">
              <span :style="{ width: `${guideProgress(guide).percentage}%` }"></span>
            </div>
            <footer>
              <small>{{ guideProgress(guide).completed }} / {{ guide.steps.length }} {{ t("completed") }}</small>
              <button type="button" @click="openGuide(guide.id)">{{ t("start") }}</button>
            </footer>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ t("quickAccess") }}</p>
            <h2>{{ t("frequentlyNeededServices") }}</h2>
          </div>
          <button class="text-button" type="button" @click="go('services')">{{ t("viewAllServices") }}</button>
        </div>

        <div class="service-list compact">
          <article v-for="service in highlightedServices" :key="service.title" class="service-card">
            <div>
              <span class="category-dot">{{ service.category }}</span>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <div class="tags">
                <span v-for="flag in service.flags" :key="flag">{{ flag }}</span>
                <span>{{ getAgency(service.agency)?.short }}</span>
              </div>
            </div>
            <a :href="service.url" target="_blank" rel="noreferrer">{{ t("visitService") }}</a>
          </article>
        </div>
      </section>

      <section class="section muted-band">
        <div class="section-heading">
          <div>
            <p class="eyebrow">{{ t("governmentAgencies") }}</p>
            <h2>{{ t("whoDoesWhat") }}</h2>
          </div>
          <button class="text-button" type="button" @click="go('agencies')">{{ t("viewAll") }}</button>
        </div>

        <div class="agency-row">
          <a v-for="agency in agencies.slice(0, 7)" :key="agency.id" :href="agency.url" target="_blank" rel="noreferrer">
            <strong>{{ agency.short }}</strong>
            <span>{{ agency.domain }}</span>
          </a>
        </div>
      </section>

      <section class="install-band">
        <div>
          <p class="eyebrow">{{ t("installAsApp") }}</p>
          <h2>{{ t("addToHome") }}</h2>
          <p>{{ t("installCopy") }}</p>
        </div>
        <button type="button" :disabled="!installPrompt" @click="installApp">
          {{ installPrompt ? t("installApp") : t("installUnavailable") }}
        </button>
      </section>
    </template>

    <section v-else-if="currentView === 'guides'" class="section page-section">
      <div class="page-title">
        <p class="eyebrow">{{ t("navGuides") }}</p>
        <h1>{{ t("guidesTitle") }}</h1>
        <p>{{ t("guidesCopy") }}</p>
      </div>

      <div class="guide-groups">
        <article v-for="guide in guides" :key="guide.id" class="wide-guide-card">
          <div>
            <span class="category-dot">{{ guide.category }}</span>
            <h2>{{ guide.title }}</h2>
            <p>{{ guide.intro }}</p>
            <small>{{ guide.steps.length }} {{ t("steps") }} - {{ guide.time }}</small>
          </div>
          <button type="button" @click="openGuide(guide.id)">{{ t("start") }}</button>
        </article>
      </div>

      <aside class="tips">
        <article>
          <span>1</span>
          <h3>{{ t("tipOneTitle") }}</h3>
          <p>{{ t("tipOneCopy") }}</p>
        </article>
        <article>
          <span>2</span>
          <h3>{{ t("tipTwoTitle") }}</h3>
          <p>{{ t("tipTwoCopy") }}</p>
        </article>
        <article>
          <span>3</span>
          <h3>{{ t("tipThreeTitle") }}</h3>
          <p>{{ t("tipThreeCopy") }}</p>
        </article>
      </aside>
    </section>

    <section v-else-if="currentView === 'guide' && selectedGuide" class="section page-section">
      <button class="back-button" type="button" @click="go('guides')">{{ t("backToGuides") }}</button>

      <div class="guide-detail">
        <div class="page-title">
          <p class="eyebrow">{{ selectedGuide.category }}</p>
          <h1>{{ selectedGuide.title }}</h1>
          <p>{{ selectedGuide.intro }}</p>
          <div class="detail-meta">
            <span>{{ selectedGuide.steps.length }} {{ t("steps") }}</span>
            <span>{{ t("estimatedTime") }} {{ selectedGuide.time }}</span>
            <span>{{ guideProgress(selectedGuide).completed }} {{ t("completed") }}</span>
          </div>
          <div class="progress-line large" :aria-label="t('guideProgress')">
            <span :style="{ width: `${guideProgress(selectedGuide).percentage}%` }"></span>
          </div>
        </div>

        <div class="guide-main">
          <article v-if="selectedGuide.documentGuide" class="document-guide-card">
            <div class="document-guide-head">
              <div>
                <p class="eyebrow">{{ t("documentGuideEyebrow") }}</p>
                <h2>{{ t("documentGuideTitle") }}</h2>
              </div>
              <span>{{ t("officialTiming") }}</span>
            </div>

            <p>{{ selectedGuide.documentGuide.note }}</p>

            <div class="document-estimate">
              <span>{{ t("approxCompletion") }}</span>
              <strong>{{ selectedGuide.documentGuide.estimate }}</strong>
            </div>

            <div>
              <h3>{{ t("documentsToPrepare") }}</h3>
              <ul class="document-list">
                <li v-for="item in selectedGuide.documentGuide.items" :key="item.label">
                  <strong>{{ item.label }}</strong>
                  <span>{{ item.detail }}</span>
                </li>
              </ul>
            </div>

            <div class="document-sources">
              <span>{{ t("officialSources") }}</span>
              <a
                v-for="source in selectedGuide.documentGuide.sources"
                :key="source.url"
                :href="source.url"
                target="_blank"
                rel="noreferrer"
              >
                {{ source.label }}
              </a>
            </div>
          </article>

          <ol class="step-list">
            <li v-for="(step, index) in selectedGuide.steps" :key="step.title" class="step-card">
              <label class="step-check">
                <input
                  type="checkbox"
                  :checked="isStepDone(selectedGuide.id, index)"
                  @change="toggleStep(selectedGuide.id, index)"
                />
                <span>{{ index + 1 }}</span>
              </label>

              <div class="step-content">
                <div class="step-heading">
                  <div>
                    <h2>{{ step.title }}</h2>
                    <p>{{ step.detail }}</p>
                  </div>
                  <span v-if="step.important" class="important">{{ t("important") }}</span>
                </div>

                <div class="step-footer">
                  <span>{{ getAgency(step.agency)?.short }}</span>
                  <a v-if="step.service" :href="step.service" target="_blank" rel="noreferrer">{{ t("goToService") }}</a>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section v-else-if="currentView === 'services'" class="section page-section">
      <div class="page-title">
        <p class="eyebrow">{{ t("navServices") }}</p>
        <h1>{{ t("servicesTitle") }}</h1>
        <p>{{ t("servicesCopy") }}</p>
      </div>

      <div class="filters">
        <label class="search-field">
          <span>{{ t("searchServices") }}</span>
          <input v-model="serviceSearch" type="search" :placeholder="t('servicesSearchPlaceholder')" />
        </label>

        <div class="toggle-group">
          <label>
            <input v-model="onlyOnline" type="checkbox" />
            <span>{{ t("onlineOnly") }}</span>
          </label>
          <label>
            <input v-model="onlyMyGovId" type="checkbox" />
            <span>{{ t("mygovIdPsc") }}</span>
          </label>
        </div>
      </div>

      <div class="category-tabs" :aria-label="t('serviceCategories')">
        <button
          v-for="category in categories"
          :key="category.key"
          type="button"
          :class="{ active: activeCategory === category.key }"
          @click="activeCategory = category.key"
        >
          {{ category.label }}
        </button>
      </div>

      <p class="result-count">{{ t("showingServices", { count: filteredServices.length }) }}</p>

      <div class="service-list">
        <article v-for="service in filteredServices" :key="service.title" class="service-card">
          <div>
            <span class="category-dot">{{ service.category }}</span>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <div class="tags">
              <span v-for="flag in service.flags" :key="flag">{{ flag }}</span>
              <span>{{ getAgency(service.agency)?.short }}</span>
            </div>
          </div>
          <a :href="service.url" target="_blank" rel="noreferrer">{{ t("visitService") }}</a>
        </article>
      </div>
    </section>

    <section v-else-if="currentView === 'agencies'" class="section page-section">
      <div class="page-title">
        <p class="eyebrow">{{ t("governmentAgencies") }}</p>
        <h1>{{ t("agenciesTitle") }}</h1>
        <p>{{ t("agenciesCopy") }}</p>
      </div>

      <div class="card-grid three">
        <article v-for="agency in agencies" :key="agency.id" class="agency-card">
          <span class="agency-domain">{{ agency.domain }}</span>
          <h2>{{ agency.name }}</h2>
          <p>{{ agency.summary }}</p>
          <div class="tags">
            <span v-for="tag in agency.tags" :key="tag">{{ tag }}</span>
          </div>
          <footer>
            <span>{{ agency.phone }}</span>
            <a :href="agency.url" target="_blank" rel="noreferrer">{{ t("openSite") }}</a>
          </footer>
        </article>
      </div>
    </section>

    <section v-else-if="currentView === 'about'" class="section page-section prose">
      <div class="page-title">
        <p class="eyebrow">{{ t("navAbout") }}</p>
        <h1>{{ t("aboutTitle") }}</h1>
        <p>{{ t("aboutCopy") }}</p>
      </div>

      <div class="about-grid">
        <article>
          <h2>{{ t("includesTitle") }}</h2>
          <p>{{ t("includesCopy") }}</p>
        </article>
        <article>
          <h2>{{ t("privacyTitle") }}</h2>
          <p>{{ t("privacyCopy") }}</p>
        </article>
        <article>
          <h2>{{ t("disclaimerTitle") }}</h2>
          <p>{{ t("disclaimerCopy") }}</p>
        </article>
      </div>

      <section class="sources">
        <h2>{{ t("sourcesTitle") }}</h2>
        <p>{{ t("systemUpdateLabel") }} {{ formattedSystemUpdate }}</p>
        <ul>
          <li v-for="source in sourceNotes" :key="source.url">
            <a :href="source.url" target="_blank" rel="noreferrer">{{ source.label }}</a>
          </li>
        </ul>
      </section>
    </section>
  </main>

  <footer class="site-footer">
    <div>
      <strong>{{ t("heroTitle") }}</strong>
      <p>{{ t("footerCopy") }}</p>
    </div>
    <nav :aria-label="t('primaryNavigation')">
      <button type="button" @click="go('guides')">{{ t("navGuides") }}</button>
      <button type="button" @click="go('services')">{{ t("navServices") }}</button>
      <button type="button" @click="go('about')">{{ t("navAbout") }}</button>
    </nav>
    <p class="credit">{{ t("footerCredit") }}</p>
  </footer>
</template>

# CLAUDE.md — jdccmobile.github.io

Portfolio de apps móviles de JDMobile con landing pages SEO por app. GitHub Pages **user site**: se sirve desde la **raíz de este repo** en `https://jdccmobile.github.io/`. Sitio 100% estático (HTML + CSS + JS vanilla), **sin build system**: lo que hay en el repo es exactamente lo que se sirve.

## Reglas críticas

1. **`app-ads.txt` es intocable.** Debe existir siempre en la raíz y servirse en `https://jdccmobile.github.io/app-ads.txt`. AdMob lo verifica ahí; moverlo o borrarlo corta los anuncios de todas las apps.
2. **`privacy.html` y `terms.html` tienen URLs congeladas.** Están referenciadas desde las fichas de App Store/Google Play y desde fastlane. Se puede editar su contenido, nunca su ruta ni su nombre.
3. **No hacer commit sin que el usuario lo pida explícitamente.**
4. **`research/` está en `.gitignore`** (estrategia SEO/keyword research local). No quitarlo del gitignore ni publicar su contenido.

## Estructura

```
/
├── index.html                  Página principal (tabs + cards). Multilingüe vía JS (assets/js/i18n.js, 6 idiomas)
├── <slug>/index.html           Landing EN de cada app (x-default)
├── <slug>/es/index.html        Landing ES
├── <slug>/guides/*.html        Guías SEO EN
├── <slug>/es/guias/*.html      Guías SEO ES (slugs traducidos)
├── privacy.html · terms.html   Políticas globales (inglés, URLs congeladas)
├── sitemap.xml · robots.txt · 404.html · .nojekyll
├── assets/css/site.css         CSS compartido de todo el sitio (tabs, landings, guías, cards)
├── assets/css/i18n.css + assets/js/i18n.js   Selector de idioma SOLO del index
└── assets/images/<slug>/       icon-192.webp, screenshot-{1..5}.jpg, og.jpg por app
```

Apps con landing (orden por descargas, el mismo de las cards y tabs): `world-cup-2026-predictor`, `kawaii-sushi-counter`, `chinchon-score-counter`, `realms-counter`.

## Convenciones SEO (obligatorias en toda página nueva)

- `<title>` ~55 chars con la keyword primaria, `<meta name="description">` ~155 chars.
- `<link rel="canonical">` absoluto.
- hreflang triple (en, es, x-default apuntando a la EN) recíproco entre el par EN/ES.
- Open Graph + Twitter card con `og.jpg` de la app.
- JSON-LD: `MobileApplication` + `FAQPage` + `BreadcrumbList` en landings; `Article` + `BreadcrumbList` en guías. **Nunca inventar `aggregateRating`**: solo si el dato es real y visible en la página.
- Imágenes siempre con `alt`, `width`/`height` y `loading="lazy"` (salvo la primera above the fold).
- Los idiomas de landings/guías son **páginas estáticas EN/ES**, no i18n client-side (Google no indexa el JS i18n). El i18n JS de 6 idiomas es solo para `index.html`.

## Checklist: añadir una app nueva con landing

1. Assets: descargar icono y ≤5 screenshots del store listing → `assets/images/<slug>/` (icon-192.webp, screenshots JPEG ~480px <110KB, og.jpg ≤800px).
2. Copiar una landing existente (p. ej. `world-cup-2026-predictor/index.html`) como plantilla → adaptar contenido EN y ES.
3. Guías: 4 por idioma en `<slug>/guides/` y `<slug>/es/guias/`; cada FAQ de la landing enlaza a su guía con "Learn more".
4. Añadir card en `index.html` (posición según descargas) y claves nuevas en `assets/js/i18n.js` **en los 6 idiomas** (es, en, fr, de, it, pt).
5. Añadir tab en la tab-bar de **todas** las páginas (index + landings + guías) si la app entra en el top.
6. Actualizar `sitemap.xml` (pares EN/ES con `xhtml:link` hreflang).
7. Verificar en local antes de terminar (ver abajo).

## Verificación local

```bash
python3 -m http.server 8000   # desde la raíz del repo
```
- Navegar index (probar los 6 idiomas del selector), landings y guías.
- `curl -s localhost:8000/app-ads.txt` debe devolver exactamente `google.com, pub-3255710437982101, DIRECT, f08c47fec0942fa0`.
- `curl -I localhost:8000/privacy.html` y `/terms.html` → 200.
- `xmllint --noout sitemap.xml`.
- Validar los bloques JSON-LD (son JSON: extraer y parsear).

## Limitaciones GitHub Pages

Sin código de servidor ni base de datos: todo client-side. Sin redirects de servidor (usar meta refresh o JS solo si es imprescindible). `.nojekyll` presente para servir los ficheros tal cual.

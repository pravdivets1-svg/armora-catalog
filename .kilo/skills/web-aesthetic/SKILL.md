---
name: web-aesthetic
description: Premium-визуал для веб-интерфейсов. Используй когда задача связана с улучшением внешнего вида страницы, карточек, секций, типографики, hover-эффектов, градиентов, glassmorphism, dark UI, premium/luxury стиля. Применять когда пользователь говорит «сделай красиво», «дорого», «премиум», «улучши визуал», «сделай как Apple/Linear/Stripe».
---

# Web Aesthetic — premium визуал для UI

Скилл для построения «дорогого» веб-интерфейса. Применять при работе с лендингами, каталогами, карточками товаров, модалками, hero-секциями.

## Главные принципы (читать перед каждой задачей)

1. **Меньше = дороже.** Премиум = много воздуха, мало элементов. Если сомневаешься — убери.
2. **Иерархия через контраст**, не через размер. Тонкая строка `12px / 60% opacity` рядом с `20px / 100%` работает лучше, чем `14 + 24`.
3. **Один акцентный цвет на экран.** Остальное — оттенки серого/чёрного/беж.
4. **Радиусы консистентны.** 8/12/16/24 — выбери шкалу и держись её. Нельзя 7px на кнопке, 14 на карточке, 20 на инпуте.
5. **Тени мягкие, многослойные.** Не `0 4px 8px black`, а `0 1px 0 rgba(255,255,255,.04) inset, 0 4px 18px -4px rgba(0,0,0,.5)`.
6. **Анимации 200–400ms, easing `cubic-bezier(.4,0,.2,1)`** или `(.2,.7,.2,1)`. Никаких линейных, никаких 1+ секунд.
7. **Шрифты:** заголовки — отдельная гарнитура (Manrope, Playfair, Cormorant), основной — Inter / SF Pro / system-ui. `letter-spacing: -.02em` на крупных, `+.04em` на caps.
8. **Никаких эмодзи в продакшен UI** (если не явный gaming/casual бренд). Иконки — outline 1.5px stroke, единый набор (Lucide / Heroicons).

## Палитры (готовые, проверенные)

### Luxury Dark (для каталогов, премиум)
```css
--bg: #0a0a0a;
--panel: #141416;
--panel-2: #1a1a1d;
--ink: #f5f5f4;
--ink-soft: #d6d3d1;
--ink-faint: #78716c;
--bdr: rgba(255,255,255,.07);
--bdr-strong: rgba(255,255,255,.14);
--gold: #a3e635;          /* акцент-яд / lime */
/* альтернативы акцента: #d4af37 (gold), #06b6d4 (cyan), #f97316 (orange) */
```

### Editorial Light (для блогов, лендингов)
```css
--bg: #fafaf9;
--panel: #fff;
--ink: #1c1917;
--ink-soft: #44403c;
--ink-faint: #a8a29e;
--bdr: #e7e5e4;
--accent: #18181b;        /* почти чёрный — main accent */
--accent-2: #b91c1c;      /* красный для линков/кнопок */
```

### Apple-Style (нейтральный, универсальный)
```css
--bg: #000;
--panel: rgba(29,29,31,.72);   /* glass */
--ink: #f5f5f7;
--ink-soft: #a1a1a6;
--bdr: rgba(255,255,255,.1);
--accent: #2997ff;             /* Apple blue */
```

## Шрифтовые пары

| Стиль | Заголовки | Текст |
|---|---|---|
| Modern luxury | Manrope 700 / -.02em | Inter 400 |
| Editorial | Playfair Display 600 | Source Serif Pro 400 |
| Tech / SaaS | Geist Sans 700 | Geist Sans 400 |
| Apple-style | SF Pro Display | SF Pro Text |
| Boutique | Cormorant Garamond 500 italic | Inter 400 |

Подключение:
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap">
```

## Сниппеты — копировать и адаптировать

### Glass card (без тяжёлого backdrop-filter)
```css
.card{
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 1px 2px rgba(0,0,0,.3),
    0 8px 24px -8px rgba(0,0,0,.5);
  transition: transform .35s cubic-bezier(.2,.7,.2,1),
              border-color .25s,
              box-shadow .35s;
}
.card:hover{
  transform: translateY(-3px);
  border-color: rgba(255,255,255,.16);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    0 2px 4px rgba(0,0,0,.3),
    0 20px 40px -12px rgba(0,0,0,.6),
    0 0 0 1px rgba(163,230,53,.15);
}
```
Используй **только если backdrop-filter недоступен / тяжёлый**. Эффект «стекла» через градиент дешевле в 10 раз.

### Premium-кнопка (CTA)
```css
.cta{
  --c: #a3e635;
  position: relative;
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 22px;
  background: var(--c);
  color: #0a0a0a;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  letter-spacing: -.005em;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--c) 60%, transparent),
              0 6px 16px -4px color-mix(in srgb, var(--c) 40%, transparent);
  transition: transform .25s cubic-bezier(.4,0,.2,1), box-shadow .25s;
}
.cta:hover{
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px var(--c),
              0 10px 24px -4px color-mix(in srgb, var(--c) 50%, transparent);
}
.cta:active{ transform: translateY(0) }
```

### Gradient mesh background (на hero)
```css
.hero-bg{
  position: absolute; inset: 0; z-index: -1;
  background:
    radial-gradient(60% 80% at 20% 10%, rgba(163,230,53,.18), transparent 60%),
    radial-gradient(50% 70% at 80% 30%, rgba(6,182,212,.14), transparent 65%),
    radial-gradient(40% 60% at 50% 100%, rgba(184,92,62,.12), transparent 70%),
    #0a0a0a;
}
```

### Текст-градиент (заголовок)
```css
.h-grad{
  background: linear-gradient(180deg, #fff 0%, #a8a29e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -.025em;
}
```

### Микро-shimmer (тонкая анимация на акценте)
```css
@keyframes shimmer { to { background-position: -200% 0 } }
.shine{
  background: linear-gradient(90deg, var(--ink) 0%, var(--ink-soft) 40%, var(--ink) 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 6s linear infinite;
}
```

### Hairline divider
```css
.hr{ height:1px; background: linear-gradient(90deg, transparent, var(--bdr-strong), transparent); border:0 }
```

### Scroll-revealed элементы
```css
.reveal{ opacity:0; transform: translateY(12px); transition: opacity .6s, transform .6s cubic-bezier(.2,.7,.2,1) }
.reveal.in{ opacity:1; transform:none }
```
JS:
```js
const io = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
```

## Чек-лист «что убрать чтобы не выглядело дёшево»

- [ ] Drop-shadow с большим blur и непрозрачностью (`0 10px 30px black` → замени на многослойную мягкую тень)
- [ ] Жирные бордеры (>1px) — должны быть hairline
- [ ] Чистый `#000` на `#fff` — слишком резко, используй `#0a0a0a` / `#fafaf9`
- [ ] Радиусы 4-6px (выглядит как Bootstrap 2015) — минимум 8, лучше 12-16
- [ ] Градиенты «через всю радугу» — только два соседних оттенка
- [ ] `text-shadow` (никогда)
- [ ] Подчёркивания на кнопках/ссылках в премиум-UI (используй цвет/border-bottom 1px)
- [ ] Иконки разных стилей в одном интерфейсе (filled + outline вперемешку)
- [ ] Эмодзи (если бренд не casual)
- [ ] Длинные шрифтовые анимации > 600ms
- [ ] Курсив с serif в кнопках/UI-элементах (только в заголовках)
- [ ] Плотные тексты без `line-height` (минимум 1.5 для body, 1.1-1.2 для заголовков)

## Принципы микро-взаимодействий

- **Hover = тонкое поднятие** (translateY -2..-4px) + усиление тени + лёгкий glow в акценте.
- **Active = вернуть в исходную** (transform:none) с длительностью 80ms.
- **Focus = 2px ring акцентного цвета** с offset 2px, никогда не убирай focus полностью.
- **Loading = skeleton с shimmer**, не спиннер (если возможно).
- **Empty state = иллюстрация SVG + 1 строка + 1 CTA.**

## Производительность premium-эффектов

| Эффект | Цена | Рекомендация |
|---|---|---|
| `backdrop-filter: blur()` | очень дорого | максимум 1-2 элемента на экране (хедер, модалка) |
| `filter: drop-shadow()` | дорого | заменяй на `box-shadow` где возможно |
| `mix-blend-mode` | средне-дорого | только на статике, не в скроллящихся списках |
| `feTurbulence` SVG-noise | очень дорого | `display:none` на мобилке, не использовать вместе с blur |
| Большие `box-shadow` (blur > 40px) | средне | ок, но не на 50+ элементах одновременно |
| `transform: translateY/scale` | дёшево | используй смело |
| `opacity` transition | дёшево | используй смело |

## Workflow при задаче «сделай красивее»

1. **Открой страницу, найди ВСЁ что выглядит «дёшево»** по чек-листу выше.
2. **Спроси у пользователя стиль**, если не очевиден: luxury dark / editorial / apple / boutique / tech.
3. **Выбери палитру и шрифтовую пару** из этого SKILL.
4. **Применяй сниппеты** из секции выше — они проверены на производительность.
5. **Перед сдачей — пройди чек-лист «что убрать»**.
6. **Проверь скролл и hover** — они должны быть плавными (60 FPS).

## Когда сомневаешься

Открой как референс:
- **apple.com** — типографика, отступы, иерархия
- **linear.app** — dark UI, микроанимации
- **stripe.com** — gradient mesh, hero
- **vercel.com** — minimal premium
- **arc.net** — bold typography

НЕ копируй дизайн один-к-одному — копируй принципы (плотность, контраст, шкалы).

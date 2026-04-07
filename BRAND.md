# Altasmiras — Colores Corporativos

## Paleta Principal

| Nombre               | Hex       | Uso                              |
|----------------------|-----------|----------------------------------|
| Verde principal      | `#5F8F3A` | Color primario de marca, CTAs, énfasis |
| Verde claro          | `#6FA24A` | Hover states, variaciones del primario |
| Azul oscuro          | `#2F3563` | Fondos, encabezados, texto sobre fondos claros |
| Azul profundo        | `#262B55` | Fondos oscuros, footer, contraste máximo |

## Referencia Visual

```
Verde principal  ████  #5F8F3A
Verde claro      ████  #6FA24A
Azul oscuro      ████  #2F3563
Azul profundo    ████  #262B55
```

## Notas de Uso

- El **verde principal** (`#5F8F3A`) es el color de acción: botones, links activos, íconos destacados.
- El **verde claro** (`#6FA24A`) se usa como variación en hover o para dar profundidad al verde principal.
- El **azul oscuro** (`#2F3563`) funciona como color de fondo de secciones oscuras y texto de encabezados sobre fondos blancos.
- El **azul profundo** (`#262B55`) aplica para fondos de contraste máximo (footer, hero oscuro).
- Sobre fondos azules usar texto blanco (`#FFFFFF`). Sobre fondos verdes verificar contraste WCAG AA (ratio mínimo 4.5:1 para texto normal).

## Tema CSS (referencia para `src/styles/`)

```css
/* Variables sugeridas para el tema Altasmiras */
--color-primary: #5F8F3A;
--color-primary-light: #6FA24A;
--color-secondary: #2F3563;
--color-secondary-deep: #262B55;
```

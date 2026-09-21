# Sauce Demo - Automatización QA Frontend

Suite de pruebas automatizadas para [Sauce Demo](https://www.saucedemo.com/) usando **Playwright** con **Cucumber** y el patrón **Page Object Model**.

## Requisitos

- Node.js v18 o superior
- npm

## Instalación

```bash
git clone <url-del-repositorio>
cd sauce-demo-automation
npm install
npx playwright install chromium
```

## Ejecución de tests

Ejecutar todos los tests:

```bash
npm test
```

Ejecutar solo tests de login:

```bash
npm run test:login
```

Ejecutar solo tests de compra:

```bash
npm run test:shopping
```

## Estructura del proyecto

```
sauce-demo-automation/
├── features/           # Archivos .feature escritos en Gherkin
│   ├── login.feature
│   └── shopping.feature
├── pages/              # Page Objects (patrón POM)
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── steps/              # Step definitions de Cucumber
│   ├── login.steps.js
│   └── shopping.steps.js
├── support/            # Configuración de Cucumber
│   ├── hooks.js        # Before/After hooks
│   └── world.js        # World con Playwright
├── cucumber.js         # Configuración de Cucumber
└── package.json
```

## Estrategia de automatización

### Patrón de diseño: Page Object Model (POM)

Cada página de la aplicación tiene su propia clase que encapsula:
- Los **selectores** de los elementos de la página
- Las **acciones** que se pueden realizar en esa página

Esto facilita el mantenimiento: si cambia un selector en la UI, solo se modifica en un lugar.

### Escenarios cubiertos

**Login (3 escenarios):**
- Login exitoso con `standard_user`
- Login fallido con `locked_out_user` (usuario bloqueado)
- Login fallido con credenciales inválidas

**Proceso de compra (3 escenarios):**
- Agregar producto al carrito
- Ver productos en el carrito
- Flujo completo de compra hasta confirmación

### Tecnologías

| Herramienta | Uso |
|-------------|-----|
| Playwright | Automatización del navegador |
| Cucumber | Framework BDD |
| Gherkin | Lenguaje para escribir escenarios |
| Page Object Model | Patrón de diseño para organizar el código |

## Reporte

Después de ejecutar los tests, se genera un reporte HTML en `reports/cucumber-report.html`.

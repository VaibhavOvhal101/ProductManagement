# Product Management Application

This is a Product Management application built with Angular and PrimeNG. The application allows you to add, edit, and view products.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- Add new products with name, category, and price.
- Display a list of products.
- Edit existing products.
- Validate product details with proper form validations.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/product-management.git
    cd product-management
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run JSON Server**:
    ```bash
    npx json-server --watch db.json
    ```

4. **Start the application**:
    ```bash
    ng serve
    ```

## Usage

1. Open your browser and navigate to `http://localhost:4200`.

2. Use the form to add new products. Ensure to select a category from the dropdown (Furniture, Accessories, Electronics).

3. View the list of products on the main page.

4. Edit products by clicking on the edit button next to each product.

## Dependencies

- Angular
- PrimeNG
- JSON Server

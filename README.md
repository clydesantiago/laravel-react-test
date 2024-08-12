# Laravel + React Scraping Test

A Laravel + React project.

## Installation

Follow the installation guide below.

```bash
  npm install
  npm run dev
```

```
  cp .env.example .env
  composer install
  php artisan migrate
  php artisan key:generate
  php artisan serve
```

## Tasks

-   When the "Fetch" button is clicked, [disable the text field](https://polaris.shopify.com/components/selection-and-input/text-field) and show the [loading animation](https://polaris.shopify.com/components/actions/button) in the button.
-   When the "Fetch" button is clicked, scrape the product reviews from the provided [AliExpress link](https://www.aliexpress.com/item/1005006419613086.html) (60 reviews only).
-   After scraping the AliExpress reviews, display the result in the frontend.
-   After scraping the AliExpress reviews, remove the disabled state of the text field and remove the loading animation in the button.

## Submitting the test

Once done, please record the result, upload it to Google Drive, and send it to hello@clydesantiago.com. There's no time limit for this test, but I recommend submitting it within 3 days.

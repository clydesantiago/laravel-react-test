<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScrapeReviews;

Route::post('/reviews/scrape', ScrapeReviews::class);
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ScrapeReviews extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // TODO: Add scraping logic here. (First 60 reviews only)

        return response()->json([
            'message' => 'TODO: Add scraping logic here',
            'ratings' => [],
        ], 422);
    }
}

import {
    AppProvider,
    Button,
    LegacyCard,
    LegacyStack,
    Page,
    TextField,
} from "@shopify/polaris";
import axios from "axios";
import { useCallback, useState } from "react";

export default function App() {
    const [url, setUrl] = useState(
        "https://www.aliexpress.com/item/1005006419613086.html"
    );

    const fetchReviews = useCallback(() => {
        axios
            .post("/api/reviews/scrape", { url })
            .then((response) => {
                console.log(response.data);
            })
            .catch(() => {
                alert("TODO: Add logic for scraping reviews in the backend");
            })
            .finally(() => {});
    }, [url]);

    return (
        <AppProvider>
            <Page>
                <LegacyStack vertical>
                    <LegacyCard sectioned>
                        <TextField
                            label="Shopee URL"
                            value={url}
                            onChange={(value) => setUrl(value)}
                            connectedRight={
                                <Button onClick={fetchReviews}>Fetch</Button>
                            }
                        />
                    </LegacyCard>
                    <LegacyCard title="Result" sectioned>
                        <p>
                            TODO: Show the reviews here. (First 60 reviews only)
                        </p>
                    </LegacyCard>
                </LegacyStack>
            </Page>
        </AppProvider>
    );
}

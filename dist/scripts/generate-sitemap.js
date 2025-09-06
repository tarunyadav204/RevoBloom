import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { bankIds } from "../../src/data/bank-ids.js";  // ✅ import only ids

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: "https://revobloom.in" });

    // Static routes
    sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
    sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
    sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });

    // Dynamic bank pages
    bankIds.forEach((bank) => {
        sitemap.write({
            url: `/bank/${bank.id}`,
            changefreq: "weekly",
            priority: 0.7,
        });
    });

    sitemap.end();

    const xml = await streamToPromise(sitemap).then((data) => data.toString());

    writeFileSync("./public/sitemap.xml", xml);
    console.log("✅ Sitemap generated at /public/sitemap.xml");
}

generateSitemap();

import { colors } from "../tokens.js";
const badgeColor = colors.decisions.badge.normal;

export default {
    name: "Workspace",
    items: [
        {
            link: "https://code.visualstudio.com/",
            alt: "Visual Studio Code",
            name: "Vscode",
            color: badgeColor,
            logo: "visualstudio"
        },
        {
            link: "https://google.com/chrome",
            alt: "Chrome",
            name: "Chrome",
            color: badgeColor,
            logo: "chrome"
        },
        {
            link: "https://ubuntu.com",
            alt: "Ubuntu",
            name: "Ubuntu",
            color: badgeColor,
            logo: "ubuntu"
        },
        {
            link: "https://android.com",
            alt: "Android",
            name: "Android",
            color: badgeColor,
            logo: "android"
        },
        {
            link: "https://apps.google.com",
            alt: "Google Apps",
            name: "Google Apps",
            color: badgeColor,
            logo: "google"
        }
    ]
};
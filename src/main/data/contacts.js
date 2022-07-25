import { colors } from "../tokens.js";
const badgeColor = colors.decisions.badge.normal;

export default {
    name: "Socials",
    items: [
        {
            link: "https://twitter.com/luisfloat",
            name: "Twitter",
            color: badgeColor,
            logo: "twitter",
            alt: "Twitter",
        },
        {
            link: "https://github.com/luisfloat",
            name: "Github",
            color: badgeColor,
            logo: "github",
            alt: "Github",
        },
        {
            link: "https://instagram.com/luisfloat",
            name: "Instagram",
            color: badgeColor,
            logo: "instagram",
            alt: "Instagram",
        },
        {
            link: "mailto:contact@luisfloat.com",
            name: "Gmail",
            color: badgeColor,
            logo: "gmail",
            alt: "Gmail",
        }
    ]
};
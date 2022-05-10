export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    PRIMARY_COLOR: "#5550f2",
    SECONDARY_COLOR: "#f1f1f1",
    ACCENT_COLOR: "#5550f2",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 3",
            model: "blueline",
        },
        {
            name: "Pixel 3 XL",
            model: "crosshatch",
        },

    ],
    RELEASE_VARIANTS: {
        minimal: {
            description: "Minimal version without Google apps or services.",
            suffix: "",
        },
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
        test: {
            description: "Experimental version for testing only.",
            suffix: "experimental",
        },
        beta: {
            description: "Beta version for testing only.",
            suffix: "beta",
        },
    },
    DONATION_LINKS: [
        {
            title: "EthOS website",
            description:
                "For more information regarding ethOS visit our website!",
            highlight: true,
            url: "https://www.ethereumphone.org/",
            icon: "patreon",
        },
        {
            title: "EthOS Discord",
            description:
                "Join our discord for early access to updates, community calls, questions and much more.",
            highlight: false,
            url: "https://discord.com/invite/FtVvK7B2KT",
            icon: "discord",
        },
        {
            title: "EthOS Twitter",
            description:
                "Follow us on twitter for the latest news regarding the ethOS",
            highlight: false,
            url: "https://twitter.com/EthereumPhone",
            icon: "twitter",
        },
    ],
};

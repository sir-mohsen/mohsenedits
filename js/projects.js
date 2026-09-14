const projects = [
    {
        id: 1,

        title: {
            en: "Podcast Short Video Edit",
            fa: "ادیت شورت ویدیو از پادکست"
        },

        category: "talking-head",

        categoryLabel: {
            en: "TALKING HEAD",
            fa: "تاکینگ هد"
        },

        description: {
            en: "This video is an example of short-form editing from a long-form podcast video.",
            fa: "این ویدیو یک نمونه از ادیت shot-form از یک ویدیو بلند پادکست است"
        },

        video: "assets/videos/01-baziya.mp4",

        image: "assets/images/01-baziya.webp",

        services: {
            en: "Editing · Motion Graphics · Color Grading · Text Graphy ",
            fa: "تدوین · موشن گرافیک · اصلاح رنگ · تکست گرافی"
        }
    },

    {
        id: 2,

        title: {
            en: "Talking-Head Form Edit",
            fa: "ادیت ویدیوهای Talking head"
        },

        category: "talking-head",

        categoryLabel: {
            en: "TALKING HEAD",
            fa: "تاکینگ هد"
        },

        description: {
            en: "For this project, the client requested an Instagram Reel edit. The video also features AI-generated footage, all of which was created by me.",
            fa: "در اینجا مشتری درخواست ادیت یک ریل اینستاگرامی را داشت. همچنین در این ویدیو از ویدیوهای ساخته شده با هوش مصنوعی نیز استفاده شده است که همگی توسط خودم ساخته شده اند."
        },

        video: "assets/videos/02-drEhsan.mp4",

        image: "assets/images/02-drEhsan.webp",

        services: {
            en: "Editing · Motion Graphics · AI Video Generating",
            fa: "ساخت ویدو با هوش مصنوعی وشن گرافیک · طراحی صدا"
        }
    },

    {
        id: 3,

        title: {
            en: "Educational Video Editing",
            fa: "ادیت ویدیوهای آموزشی"
        },

        category: "educational",

        categoryLabel: {
            en: "EDUCATIONAL",
            fa: "آموزشی"
        },

        description: {
            en: "This educational video features various motion graphics techniques and dynamic camera movements. Most of the editing and motion design were done using Adobe After Effects.",
            fa: "در این ویدیو آموزشی از تکنیک های مختلف موشن گرافی و حرکات دوربین استفاده شده است. اغلب ادیت این ویدیو توسط نرم افزار Adobe After effects انجام شده."
        },

        video: "assets/videos/03-3dObject.mp4",

        image: "assets/images/03-3dObjects.webp",

        services: {
            en: "Editing · Motion Graphics · Visual Storytelling",
            fa: "تدوین · موشن گرافیک · داستان‌گویی بصری"
        }
    },

    {
        id: 4,

        title: {
            en: "Videography + Editing",
            fa: "ویدیوگرافی + ادیت"
        },

        category: "educational",

        categoryLabel: {
            en: "EDUCATIONAL",
            fa: "آموزشی"
        },

        description: {
            en: "For this project, I handled both the videography and video editing. The footage was filmed on location at the client’s desired venue, followed by post-production using various techniques including color grading, text graphics, motion graphics, and more.",
            fa: "در این ویدیو همزمان کار فیلمبرداری و ادیت ویدیو توسط بنده انجام شده است. فیلمبرداری در محل مورد نظر مشتری و ادیت ویدیو پس از آن با استفاده از تکنیک های مختلف اصلاح رنگ، تکست گرافی، موشن گرافی و ... صورت گرفته."
        },

        video: "assets/videos/04-bashgahAbbas.mp4",

        image: "assets/images/04-bashgahAbbas.webp",

        services: {
            en: "Videography · Editing · Motion Graphics · Color Grading",
            fa: "تدوین · موشن گرافیک · اصلاح رنگ"
        }
    },

    {
        id: 5,

        title: {
            en: "Promotional Reel",
            fa: " کلینیک زیبایی"
        },

        category: "commercial",

        categoryLabel: {
            en: "commercial",
            fa: "تبلیغاتی"
        },

        description: {
            en: "This promotional reel for a beauty clinic involved scriptwriting, videography, photography, and final editing. I personally designed and executed every stage of the project, from developing the concept and shooting the content to the final post-production.",
            fa: "ساخت این ریل تبلیغاتی برای کلینیک زیبایی، شامل سناریونویسی، ویدیوگرافی، عکاسی و در نهایت ادیت بوده است. همه این مراحل توسط بنده طراحی و اجرا شده است."
        },

        video: "assets/videos/05-almaClinic.mp4",

        image: "assets/images/05-almaClinic.webp",

        services: {
            en: "Filmmaking · Editing · Color Grading",
            fa: "فیلمبرداری · تدوین · اصلاح رنگ"
        }
    },

    {
        id: 6,

        title: {
            en: "Personal Branding Video",
            fa: "ویدیو برند شخصی"
        },

        category: "commercial",

        categoryLabel: {
            en: "commercial",
            fa: "تبلیغاتی"
        },

        description: {
            en: "This video is a personal branding project in which I handled all three stages of production: videography, photography, and video editing. The entire process, from capturing the footage and photographs to the final edit, was carried out by me.",
            fa: "در این ویدیو که یک ویدیو در زمینه Personal Branding محصوب میشود هر سه مرحله فیلم برداری، عکاسی و ادیت ویدیو توسط بنده انجام گرفته است."
        },

        video: "assets/videos/06-bashgahAdel.mp4",

        image: "assets/images/06-bashgahAdel.webp",

        services: {
            en: "Filmmaking · Editing · Post-Production",
            fa: "فیلمبرداری · تدوین · پس‌تولید"
        }
    },

    {
        id: 7,

        title: {
            en: "Local Business — Promotional Video",
            fa: "تبلیغات کسب‌وکار محلی  "
        },

        category: "commercial",

        categoryLabel: {
            en: "commercial",
            fa: "تبلیغاتی"
        },

        description: {
            en: "This project involved the videography and editing of a promotional video for a local men’s barbershop. Beyond showcasing the business, special attention was given to the artistic direction, editing rhythm, and synchronization between the visuals and music, creating a distinctive and engaging final piece.",
            fa: "در این پروژه، فیلمبرداری و تدوین یک ویدیوی تبلیغاتی برای یک آرایشگاه مردانه انجام شده است. در اجرای این پروژه، علاوه بر معرفی فضای کسب‌وکار، توجه ویژه‌ای به جنبه‌های هنری، ریتم تدوین و هماهنگی تصاویر با موسیقی شده تا ویدیو حال‌وهوایی متفاوت و جذاب داشته باشد."
        },

        video: "assets/videos/07-salmuni.mp4",

        image: "assets/images/07-salmuni.webp",

        services: {
            en: "Filmmaking · Editing · Color Grading",
            fa: "فیلمبرداری · تدوین · اصلاح رنگ"
        }
    },
	
	{
		id: 8,
		title: {
			en: "Corporate Promotional Video",
			fa: "ویدئوی تبلیغاتی سازمانی"
		},
		category: "corporate",
		categoryLabel: {
			en: "CORPORATE",
			fa: "سازمانی"
		},
		description: {
			en: "This project is a promotional video for the Iranian Blood Transfusion Organization, created to commemorate World Blood Donor Day. Our team handled the entire production process, including scriptwriting, dialogue writing, videography, and video editing, with a focus on delivering the campaign’s message through an engaging, story-driven, and professional approach.",
			fa: "این پروژه یک ویدئوی تبلیغاتی برای سازمان انتقال خون ایران است که به مناسبت روز جهانی اهداکنندگان خون تهیه شده است. در این پروژه، سناریونویسی، دیالوگ‌نویسی، فیلمبرداری و تدوین به‌صورت کامل توسط تیم ما انجام شده و تلاش شده است پیام اصلی کمپین در قالبی داستانی، تأثیرگذار و حرفه‌ای ارائه شود."
		},
		video: "assets/videos/08-enteghalKhun.mp4",
		image: "assets/images/08-enteghalKhun.webp",
		services: {
			en: "Videography · Editing · Color Grading",
			fa: "فیلمبرداری · تدوین · اصلاح رنگ"
		}
	}
	
	
];
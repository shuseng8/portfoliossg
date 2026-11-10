import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MapPin, d as ExternalLink, f as ChevronDown, i as Trophy, l as Mail, n as Wrench, o as PenLine, p as Briefcase, r as Users, s as Menu, t as X, u as FolderOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CHUmiAea.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		href: "#experience",
		label: "Experience",
		icon: Briefcase
	},
	{
		href: "#highlights",
		label: "Highlights",
		icon: Trophy
	},
	{
		href: "#skills",
		label: "Skills",
		icon: Wrench
	}
];
var MORE = [
	{
		href: "#projects",
		label: "Projects",
		icon: FolderOpen
	},
	{
		href: "#writing",
		label: "Writing",
		icon: PenLine
	},
	{
		href: "#contact",
		label: "Contact",
		icon: Mail
	}
];
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [more, setMore] = (0, import_react.useState)(false);
	const close = () => {
		setOpen(false);
		setMore(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "nav-wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "logo",
						href: "#top",
						onClick: close,
						children: "Shubham Sen Gupta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "menu-btn",
						type: "button",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: open ? "nav-links open" : "nav-links",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							onClick: close,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								size: 14,
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
						}) }, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: more ? "more open" : "more",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "more-toggle",
								type: "button",
								"aria-expanded": more,
								onClick: () => setMore((v) => !v),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "More" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									className: "chevron",
									size: 14,
									"aria-hidden": true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "more-menu",
								children: MORE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: item.href,
									onClick: close,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										size: 14,
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
								}) }, item.href))
							})]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page greeting",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Hi, I'm Shubham Sen Gupta" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "lede",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Software development engineer in Bengaluru." }), " I write in public about tech, life, and the occasional bit of gibberish — the same line I use on X."]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "portrait-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "portrait",
							src: "/portrait.jpg",
							alt: "Portrait of Shubham Sen Gupta"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page section",
					id: "experience",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Work experience" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "subhead",
							children: "LinkedIn hides the full timeline unless you are signed in, so this page only uses what is public: the headline, the city, and the profiles themselves. No employers or dates were invented."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "exp-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "company-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mark",
									"aria-hidden": true,
									children: "SS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "company-name",
									children: "Software development"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "meta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 14,
										"aria-hidden": true
									}), " Bengaluru, Karnataka, India"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
										size: 14,
										"aria-hidden": true
									}), " 2K followers · 500+ connections"] })]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "role",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "role-title",
										children: "Software Development Engineer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "bullets",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Public title on X is SDE, based in Bengaluru. The detailed role history sits behind LinkedIn’s login wall." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keeps a public notebook of tech and everyday life under @shuseng8." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Previously spent time around HAL Old Airport Road — a part of the city he has written about living near." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "links",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://www.linkedin.com/in/shuseng8/",
											target: "_blank",
											rel: "noreferrer",
											children: "LinkedIn profile"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://x.com/shuseng8",
											target: "_blank",
											rel: "noreferrer",
											children: "X profile"
										})]
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page section",
					id: "highlights",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Highlights" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "subhead",
							children: "The reference site leads with contest medals. Yours leads with what can actually be verified from the open web."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-grid",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "spotlight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "spot-visual",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 42 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "spot-kicker",
										children: "Public profile"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "card-title",
										children: "SDE in Bengaluru"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clamp, { text: "Shubham Sen Gupta is listed in Bengaluru with a software development engineer headline. The open LinkedIn card shows about 2,000 followers and more than 500 connections. The longer employment story is not visible without signing in, so it is not guessed here." })
								] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "highlight-grid",
							style: { marginTop: 18 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "mini-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
											size: 20,
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "2K followers" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clamp, { text: "The public LinkedIn card shows roughly two thousand people following the profile, which is the clearest reach number available without a login." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "mini-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
											size: 20,
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "500+ connections" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clamp, { text: "LinkedIn shows 500+ connections on the same public card. Mutual connections and the experience list stay hidden." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "mini-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
											size: 20,
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Writes in public" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clamp, { text: "On X the bio is short on purpose: tech, life, gibberish. Posts are mostly replies and day-to-day notes rather than a polished essay archive." })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stat-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stat",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2K" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LinkedIn followers" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stat",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "500+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Connections" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stat",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "BLR" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Based in Bengaluru" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "extra",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Also on the record" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "extra-list",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 16,
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Has written about living near HAL Old Airport Road and still noticing that stretch of the city." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dot",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
										size: 16,
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Public voice stays casual: short replies, not a second resume." })] })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page section",
					id: "skills",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Skills" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "subhead",
							children: "No language list is published on the open profile, so these chips describe the work that is visible — not a guessed tech stack."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "skill-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "skill-column",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "skill-block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Engineering" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "chips",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Software development"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Shipping"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Debugging"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Code review"
												})
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "skill-column",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "skill-block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "In public" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "chips",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Writing"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Tech notes"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Everyday observation"
												})
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "skill-column",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "skill-block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Where to find him" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "chips",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "LinkedIn"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "X"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip",
													children: "Bengaluru"
												})
											]
										})]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page section",
					id: "projects",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Projects" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "subhead",
							children: "Selected public surfaces, not invented product case studies."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "project-card",
									href: "#top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "kicker",
											children: "Site"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "This portfolio" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A single-page portfolio laid out the way you asked: signature name, experience card, highlight grid, skill columns, and a direct contact row." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "goto",
											children: "On this page"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "project-card",
									href: "https://www.linkedin.com/in/shuseng8/",
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "kicker",
											children: "Profile"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "LinkedIn" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The professional profile: Bengaluru, software work, and the network count. Full roles open after sign-in." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "goto",
											children: ["Open profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
												size: 14,
												"aria-hidden": true
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "project-card",
									href: "https://x.com/shuseng8",
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "kicker",
											children: "Writing"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "@shuseng8" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Short public notes filed under tech, life, and gibberish." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "goto",
											children: ["Open X ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
												size: 14,
												"aria-hidden": true
											})]
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page section",
					id: "writing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Writing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mini-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "spot-kicker",
								children: "From the bio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "tech . life . gibberish"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-subtitle",
								children: "There isn’t a separate essay site on the public record. The writing that exists is on X, mostly in the replies, in the same voice as the bio."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "links",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://x.com/shuseng8",
									target: "_blank",
									rel: "noreferrer",
									children: "Read on X"
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "page section",
					id: "contact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Contact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-panel",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "spot-kicker",
								children: "Say hello"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "Bengaluru"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The fastest public routes are LinkedIn and X. An email address is not listed on the open profile, so it is not shown here." })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.linkedin.com/in/shuseng8/",
								target: "_blank",
								rel: "noreferrer",
								children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									size: 16,
									"aria-hidden": true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://x.com/shuseng8",
								target: "_blank",
								rel: "noreferrer",
								children: ["X / @shuseng8 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									size: 16,
									"aria-hidden": true
								})]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "page foot",
					children: "Shubham Sen Gupta · Bengaluru"
				})
			]
		})]
	});
}
function Clamp({ text }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const long = text.length > 120;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: long && !open ? "card-subtitle clamp" : "card-subtitle",
		children: text
	}), long ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "expand",
		type: "button",
		onClick: () => setOpen((v) => !v),
		children: open ? "Show less" : "Read more"
	}) : null] });
}
//#endregion
export { Home as component };

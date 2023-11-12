function Util() {}

function Device() {}

function ApiClient(e, t) {
	function i(e, t, i, a, s, r) {
		void 0 === i && (i = {}), void 0 === r && (r = {}), i["auth-key"] = l.uniqueKey;
		var o = {
			url: t,
			data: i,
			timeout: 3e4,
			type: e,
			success: a["200"],
			crossDomain: !0,
			error: function (e) {
				"Service Unavailable" === e.responseText && (e.status = 503), void 0 !== a[e.status] ? a[e.status](s, e.status) : l.generic_ajax_error(s, e.status)
			}
		};
		r.ignoreHeaders && (o.headers = null), $.ajax(o)
	}

	function a(e, t, a, s) {
		"/status" === e ? i("get", p.root + e.substr(1), t, a, s) : i("get", p.root + p.version + e, t, a, s)
	}

	function s(e, t, a, s) {
		i("post", p.root + p.version + e, t, a, s)
	}

	function r(e, t, i) {
		for (var a = 0, s = t.length; s > a; ++a)
			if (void 0 === e[t[a]]) return console.error("Missing method for " + i + " statusCode: " + t[a]), !1;
		return e
	}

	function o(e, t, i) {
		for (var a = $.extend({}, d), s = Object.keys(e), o = 0, n = s.length; n > o; ++o) a[s[o]] = e[s[o]];
		return void 0 !== t ? r(a, t, i) : void 0
	}

	function n(e) {
		return "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]), JSON.stringify(e)
	}
	var l = this,
		h = {},
		d = {};
	this.generic_ajax_error = function () {}, this.uniqueKey = void 0, this.userID = void 0, this.socket = void 0;
	var p = {
		version: "v1",
		autoping: !0,
		url: {
			leaderboard: void 0,
			chat: void 0,
			game: void 0,
			multiplayer: void 0,
			worlds: void 0
		},
		ajax_timeout: 3e4,
		root: void 0
	};
	switch (window.location.host) {
	case "dev.prodigygame.org":
		p.root = "http://dev.prodigygame.org/game-api/", p.url.leaderboard = "http://dev.prodigygame.org/leaderboard-api/", p.url.account = "http://dev.prodigygame.org/account-api/", p.url.worlds = "https://multiplayer.prodigygame.org/", p.url.multiplayer = "https://multiplayer.prodigygame.org/", p.url.messages = "http://dev.prodigygame.org/message-api/", p.url.matchmaking = "http://dev.prodigygame.org/matchmaking-api/";
		break;
	case "www.prodigygame.org":
	case "prodigygame.org":
		p.root = "https://game-api.prodigygame.org/", p.url.leaderboard = "https://leaderboard-api.prodigygame.org/leaderboard-api", p.url.account = "https://account-api.prodigygame.org/", p.url.worlds = "https://multiplayer.prodigygame.org/", p.url.multiplayer = "https://multiplayer.prodigygame.org/", p.url.messages = "https://www.prodigygame.org/message-api/", p.url.matchmaking = "https://matchmaking-api.prodigygame.org/matchmaking-api/";
		break;
	case "www.prodigygame.com":
	case "prodigygame.com":
		p.root = "https://game-api.prodigygame.com/", p.url.leaderboard = "https://www.prodigygame.com/leaderboard-api", p.url.account = "https://account-api.prodigygame.com/", p.url.worlds = "https://multiplayer-api.prodigygame.com/", p.url.multiplayer = "https://multiplayer-api.prodigygame.com/", p.url.messages = "https://www.prodigygame.com/message-api/", p.url.matchmaking = "https://www.prodigygame.com/matchmaking-api/";
		break;
	default:
		p.root = "https://dev.prodigygame.org/account-api/", p.url.leaderboard = "http://dev.prodigygame.org/leaderboard-api/", p.url.account = "http://dev.prodigygame.org/account-api/", p.url.worlds = "https://multiplayer.prodigygame.org/", p.url.multiplayer = "https://multiplayer.prodigygame.org/", p.url.messages = "http://dev.prodigygame.org/message-api/", p.url.matchmaking = "http://dev.prodigygame.org/matchmaking-api/"
	}
	var c = window.location.search;
	if (c.indexOf("env=dev") >= 0 ? (p.root = "http://dev.prodigygame.org/game-api/", p.url.leaderboard = "http://dev.prodigygame.org/leaderboard-api/", p.url.account = "http://dev.prodigygame.org/account-api/", p.url.worlds = "https://multiplayer.prodigygame.org/", p.url.multiplayer = "https://multiplayer.prodigygame.org/", p.url.messages = "http://dev.prodigygame.org/message-api/", p.url.matchmaking = "http://dev.prodigygame.org/matchmaking-api/") : c.indexOf("env=staging") >= 0 ? (p.root = "https://game-api.prodigygame.org/", p.url.leaderboard = "https://leaderboard-api.prodigygame.org/leaderboard-api", p.url.account = "https://account-api.prodigygame.org/", p.url.worlds = "https://multiplayer.prodigygame.org/", p.url.multiplayer = "https://multiplayer.prodigygame.org/", p.url.messages = "https://www.prodigygame.org/message-api/", p.url.matchmaking = "https://matchmaking-api.prodigygame.org/matchmaking-api/") : (c.indexOf("env=production") >= 0 || c.indexOf("env=prod") >= 0) && (p.root = "https://game-api.prodigygame.com/", p.url.leaderboard = "https://www.prodigygame.com/leaderboard-api", p.url.account = "https://account-api.prodigygame.com/", p.url.worlds = "https://multiplayer-api.prodigygame.com/", p.url.multiplayer = "https://multiplayer-api.prodigygame.com/", p.url.messages = "https://www.prodigygame.com/message-api/", p.url.matchmaking = "https://www.prodigygame.com/matchmaking-api/"), e)
		for (var u = Object.keys(p), g = 0, m = u.length; m > g; ++g) void 0 !== e[u[g]] && (p[u[g]] = e[u[g]]);
	if (h = p, d["500"] = function () {
			console.error("Something happened with the webservice...")
		}, d["404"] = function () {
			console.log("The data you are attempting to access does not exist.")
		}, t)
		for (var y = Object.keys(t), g = 0, m = y.length; m > g; ++g) void 0 !== t[y[g]] && (d[y[g]] = t[y[g]]);
	this.joinMultiplayerServer = function (e, t, i, a, s, r, n, h) {
		var d = o(i, ["200", "503"], "Join multiplayer Server");
		if (d) {
			var c = this.userID,
				u = this.uniqueKey;
			if (void 0 == c || void 0 == u) return console.log("missing user id or token"), !1;
			var g = !1,
				m = p.url.multiplayer;
			/^https:\/\//.test(m) && (g = !0);
			var y = {
				"force new connection": !0,
				reconnection: !1,
				transports: ["websocket", "xhr-polling", "jsonp-polling", "htmlfile"],
				secure: g,
				query: "userId=" + c + "&worldId=" + e + "&userToken=" + u + "&zone=" + t
			};
			l.socket = io.connect(p.url.multiplayer, y), l.socket.on("connect", function () {
				console.log("client connected")
			}), l.socket.on("connect", d["200"]), l.socket.on("connect_error", function (e) {
				console.log("connect_error"), console.log(e)
			}), l.socket.on("error", function (e) {
				console.log("error"), e && console.log(e), e.code && d[e.code] && d[e.code]()
			}), l.socket.on("connect_error", d["503"]), l.socket.on("message", function (e) {
				console.log("message received"), a(e)
			}), l.socket.on("playerJoined", function (e) {
				console.log("player Joined - playerId: " + e), n(e)
			}), l.socket.on("playerLeft", function (e) {
				console.log("player Left - playerId: " + e), h(e)
			}), l.socket.on("playerList", function (e) {
				console.log("player list received"), s(e)
			}), l.socket.on("disconnect", function () {
				console.log("Disconnected from multiplayer server"), r()
			})
		}
	}, this.emitMessage = function (e, t) {
		var i = o(t, ["200"], "emit message");
		return i && l.socket ? (l.socket.emit("message", e), !0) : !1
	}, this.getWorldList = function (e) {
		var t = o(e, ["200"], "get world list");
		if (t) {
			var a = "multiplayer/service/worlds",
				s = p.url.worlds + a;
			return i("get", s, {}, t, "getWorldList", {
				ignoreHeaders: !0
			}), !0
		}
		return !1
	}, this.login = function (e, t, i) {
		var a = o(i, ["200", "401"], "login");
		if (!l.uniqueKey || !l.userID) {
			if (a) {
				var r = a["200"];
				if (a["200"] = function (e) {
						l.uniqueKey = e.authToken, l.userID = e.userID, console.log("SET!", l.userID, l.uniqueKey), r(e)
					}, "string" == typeof t) {
					var n = t;
					t = {
						username: e,
						password: n
					}, e = "prodigy"
				}
				return s("/login/" + e, t, a, "login"), !0
			}
			return !1
		}
	}, this.verifyClassCode = function (e, t) {
		var a = o(t, ["200", "400", "500"], "verifyClassCode");
		if (a) {
			var s = p.url.account + "v1";
			return i("get", s + "/class/class_code/" + e, {
				key: "Gh5u7pLHIpm2P7G"
			}, a, "verify-class-code"), !0
		}
		return !1
	}, this.attachStudentUsingClassCode = function (e, t) {
		var a = o(t, ["200"], "attachStudentUsingClassCode");
		if (a) {
			var s = p.root + "v1/users/" + l.userID + "/teacher";
			return i("post", s, {
				classCode: e
			}, a, "attachStudentUsingCassCode"), !0
		}
		return !1
	}, this.create = function (e, t, a, s) {
		a.first_name = e, a.last_name = t;
		var r = o(s, ["200", "400", "500"], "create");
		if (r) {
			var n = p.root + "v1";
			return i("post", n + "/users", a, r, "create"), !0
		}
		return !1
	}, this.createCharacter = function (e, t, a) {
		var s = o(a, ["200"], "createCharacter");
		if (s) {
			var r = p.root + "v1";
			return i("post", r + "/characters/" + e, t, s, "createCharacter"), !0
		}
		return !1
	}, this.updateUser = function (e, t) {
		var a = o(t, ["200", "401"], "update user properties");
		if (a) {
			var s = p.root + "v1/users/" + l.userID;
			return i("post", s, e, a, "update"), !0
		}
		return !1
	}, this.logout = function (e) {
		l.uniqueKey = void 0, l.userID = void 0, void 0 !== l.socket && (l.socket.disconnect(), l.socket = void 0), e["200"] && e["200"]()
	}, this.updateCharacter = function (e, t) {
		var a = o(t, ["200", "401"], "update property");
		if (a) {
			var s = p.root + "v1/characters/" + l.userID;
			return i("post", s, e, a, "update"), !0
		}
		return !1
	}, this.selectInstance = function (e, t, i) {
		i["200"] && i["200"]()
	}, this.switchZones = function (e, t) {
		return void 0 !== l.socket && l.socket.emit("switchZone", e), t["200"] && t["200"](), !0
	}, this.loadSkills = function (e, t, a) {
		var s = o(a, ["200"], "get user ability");
		if (s) {
			var r = p.root + "v1";
			return i("get", r + "/users/" + e + "/education", {
				classIDs: t.join(",")
			}, s, "load_skills"), !0
		}
		return !1
	}, this.updatePlacementTest = function (e, t, a) {
		var s = o(a, ["200"], "update placement test");
		if (s) {
			var r = p.root + "v1/users/" + l.userID + "/education/" + e + "/placement-test";
			return i("post", r, {
				ownerIDs: t
			}, s, "upgradePlacementTest"), !0
		}
		return !1
	}, this.updateUserAbility = function (e, t) {
		var a = o(t, ["200"], "bulk update user ability");
		if (a) {
			e = n(e);
			var s = p.root + "v1/users/" + l.userID + "/ability";
			return i("post", s, {
				userAbilityData: e
			}, a, "bulkUpdateUserAbility"), !0
		}
		return !1
	}, this.saveAnswer = function (e, t) {
		var a = o(t, ["200"], "save answer");
		if (a) {
			var s = p.root + "v1/users/" + l.userID + "/answers";
			return i("post", s, e, a, "saveAnswer"), !0
		}
		return !1
	}, this.getLeaderboard = function (e, t, a, s) {
		var r = o(s, ["200"], "get leaderboard");
		if (r) {
			var n = p.url.leaderboard + "/v1";
			return i("get", n + "/class/" + e, {
				sort: t,
				limit: a
			}, r, "leaderboard", {
				ignoreHeaders: !0
			}), !0
		}
		return !1
	}, this.getPvpLeaderboard = function (e, t, a, s, r) {
		var n = o(r, ["200"], "get pvp leaderboard");
		if (n) {
			var h = p.url.leaderboard + "/v1";
			return i("get", h + "/pvp/" + e.min + "/" + e.max, {
				page: a || 0,
				limit: s || 30,
				player_score: t.arenaScore,
				player_stars: t.stars,
				userID: l.userID
			}, n, "leaderboard", {
				ignoreHeaders: !0
			}), !0
		}
		return !1
	}, this.sendMessage = function (e, t, a, s) {
		var r = o(s, ["200"], "send message"),
			n = {
				to_user: e,
				from_user: l.userID,
				message: t,
				attachments: a
			};
		if (r) {
			var h = p.url.messages + "messages";
			return i("post", h, n, r, "sendMessage"), !0
		}
		return !1
	}, this.getMessage = function (e, t) {
		var a = o(t, ["200"], "get message"),
			s = {
				userID: l.userID
			};
		if (a) {
			var r = p.url.messages + "messages/" + e;
			return i("get", r, s, a, "getMessage"), !0
		}
		return !1
	}, this.deleteMessage = function (e, t) {
		var a = o(t, ["200"], "get message"),
			s = {
				message_id: e,
				userID: l.userID
			};
		if (a) {
			var r = p.url.messages + "messages/" + e;
			return i("del", r, s, a, "deleteMessage"), !0
		}
		return !1
	}, this.getUserMessages = function (e, t, a) {
		var s = o(a, ["200"], "get user messages"),
			r = {
				offset: e,
				items: t
			};
		if (s) {
			var n = p.url.messages + "messages/";
			return i("get", n, r, s, "getUserMessages"), !0
		}
		return !1
	}, this.getNumberOfMessagesSince = function (e, t) {
		var a = o(t, ["200"], "get number since");
		if (a) {
			var s = p.url.messages + "messages/since/" + e;
			return i("get", s, {
				userID: l.userID
			}, a, "getNumberOfMessagesSince"), !0
		}
		return !1
	}, this.markMessageAsRead = function (e, t) {
		var a = o(t, ["200"], "Mark Message As Read");
		if (a) {
			var s = p.url.messages + "messages/" + e;
			return i("post", s, {
				userID: l.userID
			}, a, "markMessageAsRead"), !0
		}
		return !1
	}, this.markAttachmentAsRedeemed = function (e, t, a) {
		var s = o(a, ["200"], "Mark attachment As redeemed");
		if (s) {
			var r = p.url.messages + "messages/" + e + "/attachments/" + t;
			return i("post", r, {}, s, "markAttachmentAsRedeemed"), !0
		}
		return !1
	}, this.getUser = function (e, t, a) {
		var s = p.root + "v1/characters/" + e;
		3 === arguments.length ? s += "?fields=" + t.join(",") : a = t;
		var r = o(a, ["200"], "getUserData");
		return r ? (i("get", s, {}, r, "getUser", {
			ignoreHeaders: !0
		}), !0) : !1
	}, this.startMatchmaking = function (e, t, a, s) {
		var r = o(s, ["200"], "startMatchmaking");
		if (r) {
			var n = p.url.matchmaking + "begin";
			return i("post", n, {
				userID: l.userID,
				level: e,
				score: t,
				playerData: a,
				token: l.uniqueKey
			}, r, "startMatchmaking"), !0
		}
		return !1
	}, this.quitMatchmaking = function (e) {
		var t = o(e, ["200"], "quitMatchmaking");
		if (t) {
			var a = p.url.matchmaking + "end";
			return i("post", a, {
				userID: l.userID,
				token: l.uniqueKey
			}, t, "quitMatchmaking"), !0
		}
		return !1
	}, this.log = function (e, t, i) {
		var a = ["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"];
		return e = e.toLowerCase(), a.indexOf(e) >= 0 ? (i.message && (i.attr_message = i.message), i.message = t, s("/log/" + e, i, {
			200: function () {}
		}, "log"), !0) : !1
	}, this.completeAssignment = function (e, t) {
		var a = o(t, ["200"], "completeAssignment");
		if (a) {
			var s = p.root + "v1/users/" + l.userID + "/assignments/" + e;
			return i("post", s, {}, a, "completeAssignment"), !1
		}
		return !1
	}, this.status = function (e) {
		var t = o(e, ["200", "503"], "status check");
		return t ? (a("/status", {
			flook: +new Date
		}, t, "status"), !0) : !1
	}
}
var Prodigy = {};
Prodigy.extends = function (e, t, i) {
	e.prototype = Object.create(t.prototype);
	for (var a in i) e.prototype[a] = i[a]
}, Prodigy.Control = {}, Prodigy.Container = {}, Prodigy.Controller = {}, Prodigy.Factory = {}, Prodigy.Listener = {}, Prodigy.Menu = {}, Prodigy.Utility = {}, Util.setCookie = function (e, t, i) {
	var a = new Date;
	a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
	var s = "expires=" + a.toUTCString();
	document.cookie = e + "=" + t + "; " + s
}, Util.getCookie = function (e) {
	e += "=";
	for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
		for (var a = t[i];
			" " == a.charAt(0);) a = a.substring(1);
		if (0 == a.indexOf(e)) return a.substring(e.length, a.length)
	}
	return ""
}, Util.convertItemToIcon = function (e) {
	return "gold" === e.type ? "item/26" : "pet" === e.type ? "pets/" + e.ID.toString() : "spell" === e.type ? e.element : "boss" === e.type ? "boss" : "player" === e.type ? "player" : Util.isDefined(e.type) && Util.isDefined(e.ID) ? e.type + "/" + e.ID : Util.isDefined(e.tag) ? e.tag : "empty"
}, Util.numberToString = function (e) {
	e = "" + e;
	for (var t = "", i = 1, a = e.length - 1; a >= 0; a--) t = e.charAt(a) + t, i % 3 === 0 && i > 0 && a > 0 && (t = "," + t), i++;
	return t
}, Util.isSchoolHours = function () {
	var e = new Date,
		t = e.getHours();
	return t >= 8 && 15 >= t ? !0 : !1
}, Util.isDefined = function (e) {
	return !("undefined" == typeof e || null === e || "null" === e)
}, Util.isString = function (e) {
	return "string" == typeof e || e instanceof String
}, Util.getDateSeed = function () {
	var e = new Date,
		t = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDay()),
		i = t.getTime();
	return i
}, Util.highlightAll = function (e, t, i, a) {
	for (var s = 0; s < e.length; s++) Util.isDefined(e[s].highlight) && e[s].highlight(t, i, a)
}, Util.getObject = function (e) {
	return "null" === e ? null : Util.isString(e) ? JSON.parse(e) : e
}, Util.copyObject = function (e) {
	var t = {};
	if (null == e || "object" != typeof e) return e;
	if (e instanceof Array) {
		t = [];
		for (var i = 0, a = e.length; a > i; i++) t[i] = Util.copyObject(e[i])
	}
	if (e instanceof Object)
		for (var s in e) e.hasOwnProperty(s) && (t[s] = Util.copyObject(e[s]));
	return t
}, Util.pseudoRandomNumber = function (e) {
	return (9301 * e + 49297) % 233280 / 233280
}, Util.randomArrayElement = function (e, t) {
	return Util.isDefined(t) ? e[Math.floor(this.pseudoRandomNumber(t) * e.length)] : e[Math.floor(Math.random() * e.length)]
}, Util.weightedArrayElement = function (e) {
	for (var t = 0, i = [], a = 0; a < e.length; a++) Util.isDefined(e[a].weight) && e[a].weight > 0 && (t += e[a].weight), i.push(t);
	for (var s = Math.random() * t, a = 0; a < e.length; a++)
		if (s < i[a]) return e[a];
	return null
}, Util.shuffleArray = function (e, t) {
	for (var i, a = e.length; 0 !== a;) {
		i = Math.floor(Util.pseudoRandomNumber(t + a) * a), a--;
		var s = e[i];
		e[i] = e[a], e[a] = s
	}
}, Util.isEmptyObject = function (e) {
	if (!Util.isDefined(e)) return !0;
	for (var t in e)
		if (e.hasOwnProperty(t)) return !1;
	return !0
}, Util.inArray = function (e, t) {
	for (var i = 0; i < e.length; i++)
		if (e[i] === t) return !0;
	return !1
}, Util.removeDuplicates = function (e) {
	for (var t = [], i = 0; i < e.length; i++) Util.inArray(t, e[i]) || t.push(e[i]);
	return t
}, Util.equalArrays = function (e, t) {
	if (e === t) return !0;
	if (null == e || null == t) return !1;
	if (e.length != t.length) return !1;
	for (var i = 0; i < e.length; ++i)
		if (e[i] !== t[i]) return !1;
	return !0
}, Util.getUrlVariable = function (e) {
	{
		var t = {};
		window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, i, a) {
			t[i] = a
		})
	}
	return t[e]
}, Util.removeFromArray = function (e, t) {
	for (var i = 0; i < t.length; i++)
		if (t[i] === e) {
			t.splice(i, 1);
			break
		}
}, Util.processTime = function (e) {
	if (0 >= e) return "00:00";
	var t = Math.floor(e / 36e5),
		i = Math.floor((e - 36e5 * t) / 6e4),
		a = Math.floor((e - 36e5 * t - 6e4 * i) / 1e3);
	return 0 === t ? t = "00" : 10 > t && (t = "0" + t), 0 === i ? i = "00" : 10 > i && (i = "0" + i), 0 === a ? a = "00" : 10 > a && (a = "0" + a), "00" === t ? i + ":" + a : 24 > t ? t + ":" + i + ":" + a : Math.floor(t / 24) + " days"
}, Prodigy.Assets = function () {
	var e = "https://cdn.prodigygame.com/game/assets/images/player/reduced/outfits/male/",
		t = "https://cdn.prodigygame.com/game/assets/images/player/reduced/outfits/female/",
		i = "https://cdn.prodigygame.com/game/assets/images/player/reduced/hair/male/",
		a = "https://cdn.prodigygame.com/game/assets/images/player/reduced/hair/female/",
		s = "https://cdn.prodigygame.com/game/assets/images/player/reduced/hats/",
		r = "https://cdn.prodigygame.com/game/assets/images/player/normal/outfits/male/",
		o = "https://cdn.prodigygame.com/game/assets/images/player/normal/outfits/female/",
		n = "https://cdn.prodigygame.com/game/assets/images/player/normal/hair/male/",
		l = "https://cdn.prodigygame.com/game/assets/images/player/normal/hair/female/",
		h = "https://cdn.prodigygame.com/game/assets/images/player/normal/hats/",
		d = "https://cdn.prodigygame.com/game/assets/images/player/normal/weapons/",
		p = "https://cdn.prodigygame.com/game/assets/images/player/",
		c = "https://cdn.prodigygame.com/game/assets/fonts/",
		u = "https://cdn.prodigygame.com/game/assets/audio/bgm/",
		g = "https://cdn.prodigygame.com/game/assets/audio/sfx/",
		m = "https://cdn.prodigygame.com/game/assets/audio/voice/",
		y = "https://cdn.prodigygame.com/game/assets/images/popups/",
		f = "https://cdn.prodigygame.com/game/assets/images/tilesets/",
		D = "https://cdn.prodigygame.com/game/assets/data/maps/",
		b = "https://cdn.prodigygame.com/game/assets/images/battle/",
		I = "https://cdn.prodigygame.com/game/assets/images/stores/",
		v = "https://cdn.prodigygame.com/game/assets/images/backgrounds/",
		q = "https://cdn.prodigygame.com/game/assets/images/zones/",
		w = "https://cdn.prodigygame.com/game/assets/images/games/",
		x = "https://cdn.prodigygame.com/game/assets/images/npc/",
		P = "https://cdn.prodigygame.com/game/assets/images/icons/",
		k = "https://cdn.prodigygame.com/game/assets/images/attacks/",
		M = "https://cdn.prodigygame.com/game/assets/images/monsters/",
		C = "https://cdn.prodigygame.com/game/assets/images/events/",
		S = "https://cdn.prodigygame.com/game/assets/images/monsters/reduced/",
		A = "https://cdn.prodigygame.com/game/assets/images/monsters/small/",
		T = "https://cdn.prodigygame.com/game/assets/images/boss/",
		E = "https://cdn.prodigygame.com/game/assets/images/boss/small/",
		N = "https://cdn.prodigygame.com/game/assets/images/prompts/",
		B = "https://cdn.prodigygame.com/game/assets/images/scenes/";
	this._assets = {
		"tmp-13": {
			type: "atlas",
			base: "https://cdn.prodigygame.com/game/assets/images/pets/",
			url: "13.png",
			json: "13.json"
		},
		"battle-skill": {
			type: "json",
			base: "",
			url: ""
		},
		attacks: {
			type: "atlas",
			base: k,
			url: "attacks.png",
			json: "attacks.json"
		},
		battle: {
			type: "atlas",
			base: b,
			url: "battle.png",
			json: "battle.json"
		},
		"font-general": {
			type: "atlas",
			base: c,
			url: "font-general.png",
			json: "font-general.json"
		},
		"font-button": {
			type: "atlas",
			base: c,
			url: "font-button.png",
			json: "font-button.json"
		},
		"font-black": {
			type: "atlas",
			base: c,
			url: "font-black.png",
			json: "font-black.json"
		},
		"popup-member": {
			type: "atlas",
			base: y,
			url: "popup-member.png",
			json: "popup-member.json"
		},
		"tileset-collisions": {
			type: "spritesheet",
			base: f,
			url: "tileset-collisions.png",
			w: 40,
			h: 40
		},
		"tileset-core": {
			type: "atlas",
			base: f,
			url: "tileset-core.png",
			json: "tileset-core.json"
		},
		"tileset-forest": {
			type: "spritesheet",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/images/tilesets/",
			url: "tileset-forest.png",
			w: 40,
			h: 40
		},
		"tileset-generic": {
			type: "spritesheet",
			base: f,
			url: "tileset-generic.png",
			w: 40,
			h: 40
		},
		"tileset-outside": {
			type: "spritesheet",
			base: f,
			url: "tileset-outside.png",
			w: 40,
			h: 40
		},
		"tileset-outsidesnow": {
			type: "spritesheet",
			base: f,
			url: "tileset-outsidesnow.png",
			w: 40,
			h: 40
		},
		"tileset-icecave": {
			type: "spritesheet",
			base: f,
			url: "tileset-icecave.png",
			w: 40,
			h: 40
		},
		"tileset-railruins": {
			type: "spritesheet",
			base: f,
			url: "tileset-railruins.png",
			w: 40,
			h: 40
		},
		"tileset-town": {
			type: "spritesheet",
			base: f,
			url: "tileset-town.png",
			w: 40,
			h: 40
		},
		"map-pathing": {
			type: "json",
			base: D,
			url: "map-pathing.json"
		},
		"map-tutorial-b9": {
			type: "json",
			base: D,
			url: "map-tutorial-b9.json"
		},
		"map-tutorial-c9": {
			type: "json",
			base: D,
			url: "map-tutorial-c9.json"
		},
		"map-tutorial-d8": {
			type: "json",
			base: D,
			url: "map-tutorial-d8.json"
		},
		"map-tutorial-d9": {
			type: "json",
			base: D,
			url: "map-tutorial-d9.json"
		},
		"map-forest-a3": {
			type: "json",
			base: D,
			url: "map-forest-a3.json"
		},
		"map-forest-a4": {
			type: "json",
			base: D,
			url: "map-forest-a4.json"
		},
		"map-forest-a5": {
			type: "json",
			base: D,
			url: "map-forest-a5.json"
		},
		"map-forest-b5": {
			type: "json",
			base: D,
			url: "map-forest-b5.json"
		},
		"map-forest-b6": {
			type: "json",
			base: D,
			url: "map-forest-b6.json"
		},
		"map-forest-b7": {
			type: "json",
			base: D,
			url: "map-forest-b7.json"
		},
		"map-forest-b8": {
			type: "json",
			base: D,
			url: "map-forest-b8.json"
		},
		"map-forest-c4": {
			type: "json",
			base: D,
			url: "map-forest-c4.json"
		},
		"map-forest-c7": {
			type: "json",
			base: D,
			url: "map-forest-c7.json"
		},
		"map-forest-c8": {
			type: "json",
			base: D,
			url: "map-forest-c8.json"
		},
		"map-forest-d3": {
			type: "json",
			base: D,
			url: "map-forest-d3.json"
		},
		"map-shiverchill-a5": {
			type: "json",
			base: D,
			url: "map-shiverchill-a5.json"
		},
		"map-shiverchill-a6": {
			type: "json",
			base: D,
			url: "map-shiverchill-a6.json"
		},
		"map-shiverchill-a7": {
			type: "json",
			base: D,
			url: "map-shiverchill-a7.json"
		},
		"map-shiverchill-a11": {
			type: "json",
			base: D,
			url: "map-shiverchill-a11.json"
		},
		"map-shiverchill-a10": {
			type: "json",
			base: D,
			url: "map-shiverchill-a10.json"
		},
		"map-shiverchill-a9": {
			type: "json",
			base: D,
			url: "map-shiverchill-a9.json"
		},
		"map-shiverchill-b3": {
			type: "json",
			base: D,
			url: "map-shiverchill-b3.json"
		},
		"map-shiverchill-b6": {
			type: "json",
			base: D,
			url: "map-shiverchill-b6.json"
		},
		"map-shiverchill-b7": {
			type: "json",
			base: D,
			url: "map-shiverchill-b7.json"
		},
		"map-shiverchill-b1": {
			type: "json",
			base: D,
			url: "map-shiverchill-b1.json"
		},
		"map-shiverchill-b10": {
			type: "json",
			base: D,
			url: "map-shiverchill-b10.json"
		},
		"map-shiverchill-a4": {
			type: "json",
			base: D,
			url: "map-shiverchill-a4.json"
		},
		"map-shiverchill-a3": {
			type: "json",
			base: D,
			url: "map-shiverchill-a3.json"
		},
		"map-shiverchill-a2": {
			type: "json",
			base: D,
			url: "map-shiverchill-a2.json"
		},
		"map-shiverchill-b2": {
			type: "json",
			base: D,
			url: "map-shiverchill-b2.json"
		},
		"map-shiverchill-b8": {
			type: "json",
			base: D,
			url: "map-shiverchill-b8.json"
		},
		"map-shiverchill-b9": {
			type: "json",
			base: D,
			url: "map-shiverchill-b9.json"
		},
		"map-lamplight-a1": {
			type: "json",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/data/",
			url: "map-lamplight-a1.json"
		},
		"map-lamplight-b1": {
			type: "json",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/data/",
			url: "map-lamplight-b1.json"
		},
		"map-lamplight-b2": {
			type: "json",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/data/",
			url: "map-lamplight-b2.json"
		},
		"map-lamplight-b3": {
			type: "json",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/data/",
			url: "map-lamplight-b3.json"
		},
		"map-lamplight-c1": {
			type: "json",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/data/",
			url: "map-lamplight-c1.json"
		},
		"scene-intro": {
			type: "atlas",
			base: B,
			url: "scene-intro.png",
			json: "scene-intro.json"
		},
		"scene-intro-bg1": {
			type: "sprite",
			base: B,
			url: "scene-intro-bg1.jpg"
		},
		"scene-intro-bg2": {
			type: "sprite",
			base: B,
			url: "scene-intro-bg2.jpg"
		},
		"scene-intro-bg3": {
			type: "sprite",
			base: B,
			url: "scene-intro-bg3.jpg"
		},
		"npc-face-bok": {
			type: "atlas",
			base: x,
			url: "npc-face-bok.png",
			json: "npc-face-bok.json"
		},
		"npc-sprite-bok": {
			type: "atlas",
			base: x,
			url: "npc-sprite-bok.png",
			json: "npc-sprite-bok.json"
		},
		"npc-face-clankboot": {
			type: "atlas",
			base: x,
			url: "npc-face-clankboot.png",
			json: "npc-face-clankboot.json"
		},
		"npc-sprite-clankboot": {
			type: "atlas",
			base: x,
			url: "npc-sprite-clankboot.png",
			json: "npc-sprite-clankboot.json"
		},
		"npc-face-cumulo": {
			type: "atlas",
			base: x,
			url: "npc-face-cumulo.png",
			json: "npc-face-cumulo.json"
		},
		"npc-sprite-cumulo": {
			type: "atlas",
			base: x,
			url: "npc-sprite-cumulo.png",
			json: "npc-sprite-cumulo.json"
		},
		"npc-face-eve": {
			type: "atlas",
			base: x,
			url: "npc-face-eve.png",
			json: "npc-face-eve.json"
		},
		"npc-sprite-eve": {
			type: "atlas",
			base: x,
			url: "npc-sprite-eve.png",
			json: "npc-sprite-eve.json"
		},
		"npc-face-flora": {
			type: "atlas",
			base: x,
			url: "npc-face-flora.png",
			json: "npc-face-flora.json"
		},
		"npc-sprite-flora": {
			type: "atlas",
			base: x,
			url: "npc-sprite-flora.png",
			json: "npc-sprite-flora.json"
		},
		"npc-face-merchant": {
			type: "atlas",
			base: x,
			url: "npc-face-merchant.png",
			json: "npc-face-merchant.json"
		},
		"npc-sprite-merchant": {
			type: "atlas",
			base: x,
			url: "npc-sprite-merchant.png",
			json: "npc-sprite-merchant.json"
		},
		"npc-face-mira": {
			type: "atlas",
			base: x,
			url: "npc-face-mira.png",
			json: "npc-face-mira.json"
		},
		"npc-sprite-mira": {
			type: "atlas",
			base: x,
			url: "npc-sprite-mira.png",
			json: "npc-sprite-mira.json"
		},
		"npc-face-mugs": {
			type: "atlas",
			base: x,
			url: "npc-face-mugs.png",
			json: "npc-face-mugs.json"
		},
		"npc-sprite-mugs": {
			type: "atlas",
			base: x,
			url: "npc-sprite-mugs.png",
			json: "npc-sprite-mugs.json"
		},
		"npc-face-noot": {
			type: "atlas",
			base: x,
			url: "npc-face-noot.png",
			json: "npc-face-noot.json"
		},
		"npc-sprite-noot": {
			type: "atlas",
			base: x,
			url: "npc-sprite-noot.png",
			json: "npc-sprite-noot.json"
		},
		"npc-face-scoog": {
			type: "atlas",
			base: x,
			url: "npc-face-scoog.png",
			json: "npc-face-scoog.json"
		},
		"npc-sprite-scoog": {
			type: "atlas",
			base: x,
			url: "npc-sprite-scoog.png",
			json: "npc-sprite-scoog.json"
		},
		"npc-face-stache": {
			type: "atlas",
			base: x,
			url: "npc-face-stache.png",
			json: "npc-face-stache.json"
		},
		"npc-sprite-stache": {
			type: "atlas",
			base: x,
			url: "npc-sprite-stache.png",
			json: "npc-sprite-stache.json"
		},
		"npc-face-boombox": {
			type: "atlas",
			base: x,
			url: "npc-face-boombox.png",
			json: "npc-face-boombox.json"
		},
		"npc-sprite-boombox": {
			type: "atlas",
			base: x,
			url: "npc-sprite-boombox.png",
			json: "npc-sprite-boombox.json"
		},
		"npc-face-wizard": {
			type: "atlas",
			base: x,
			url: "npc-face-wizard.png",
			json: "npc-face-wizard.json"
		},
		"npc-sprite-wizard": {
			type: "atlas",
			base: x,
			url: "npc-sprite-wizard.png",
			json: "npc-sprite-wizard.json"
		},
		"npc-face-guard": {
			type: "atlas",
			base: x,
			url: "npc-face-guard.png",
			json: "npc-face-guard.json"
		},
		"npc-sprite-guard": {
			type: "atlas",
			base: x,
			url: "npc-sprite-guard.png",
			json: "npc-sprite-guard.json"
		},
		"npc-sprite-gnome": {
			type: "atlas",
			base: x,
			url: "npc-sprite-gnome.png",
			json: "npc-sprite-gnome.json"
		},
		"zone-forest": {
			type: "atlas",
			base: q,
			url: "zone-forest.png",
			json: "zone-forest.json"
		},
		"zone-shiverchill": {
			type: "atlas",
			base: q,
			url: "zone-shiverchill.png",
			json: "zone-shiverchill.json"
		},
		"zone-volcano": {
			type: "atlas",
			base: q,
			url: "zone-volcano.png",
			json: "zone-volcano.json"
		},
		"zone-lamplight": {
			type: "atlas",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/images/zones/",
			url: "zone-lamplight.png",
			json: "zone-lamplight.json"
		},
		"zone-pirate": {
			type: "atlas",
			base: q,
			url: "zone-pirate.png",
			json: "zone-pirate.json"
		},
		"zone-arena": {
			type: "atlas",
			base: q,
			url: "zone-arena.png",
			json: "zone-arena.json"
		},
		"zone-academy": {
			type: "atlas",
			base: q,
			url: "zone-academy.png",
			json: "zone-academy.json"
		},
		"zone-tower": {
			type: "atlas",
			base: q,
			url: "zone-tower.png",
			json: "zone-tower.json"
		},
		"zone-towerbase": {
			type: "atlas",
			base: q,
			url: "zone-towerbase.png",
			json: "zone-towerbase.json"
		},
		"zone-plains": {
			type: "atlas",
			base: q,
			url: "zone-plains.png",
			json: "zone-plains.json"
		},
		"zone-cloud": {
			type: "atlas",
			base: q,
			url: "zone-cloud.png",
			json: "zone-cloud.json"
		},
		"zone-house": {
			type: "atlas",
			base: q,
			url: "zone-house.png",
			json: "zone-house.json"
		},
		"zone-dino": {
			type: "atlas",
			base: q,
			url: "zone-dino.png",
			json: "zone-dino.json"
		},
		"zone-museum": {
			type: "atlas",
			base: q,
			url: "zone-museum.png",
			json: "zone-museum.json"
		},
		"zone-tech": {
			type: "atlas",
			base: q,
			url: "zone-tech.png",
			json: "zone-tech.json"
		},
		"zone-docks": {
			type: "atlas",
			base: q,
			url: "zone-docks.png",
			json: "zone-docks.json"
		},
		"event-october": {
			type: "atlas",
			base: C,
			url: "event-october.png",
			json: "event-october.json"
		},
		"event-winterfest": {
			type: "atlas",
			base: C,
			url: "event-winterfest.png",
			json: "event-winterfest.json"
		},
		"game-dinodig": {
			type: "atlas",
			base: w,
			url: "game-dinodig.png",
			json: "game-dinodig.json"
		},
		"game-dancedance": {
			type: "atlas",
			base: w,
			url: "game-dancedance.png",
			json: "game-dancedance.json"
		},
		core: {
			type: "atlas",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/images/",
			url: "core.png",
			json: "core.json"
		},
		login: {
			type: "atlas",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/images/",
			url: "login.png",
			json: "login.json"
		},
		map: {
			type: "atlas",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/images/",
			url: "map.png",
			json: "map.json"
		},
		manipulatives: {
			type: "atlas",
			base: "https://cdn.prodigygame.com/game/assets/images/education/",
			url: "manipulatives.png",
			json: "manipulatives.json"
		},
		"prompt-more-gold": {
			type: "sprite",
			base: N,
			url: "prompt-more-gold.png"
		},
		"prompt-more-exp": {
			type: "sprite",
			base: N,
			url: "prompt-more-exp.png"
		},
		"prompt-premium-item": {
			type: "sprite",
			base: N,
			url: "prompt-premium-item.png"
		},
		"prompt-wheel-spin": {
			type: "sprite",
			base: N,
			url: "prompt-wheel-spin.png"
		},
		"prompt-bigger-team": {
			type: "sprite",
			base: N,
			url: "prompt-bigger-team.png"
		},
		"prompt-bigger-roster": {
			type: "sprite",
			base: N,
			url: "prompt-bigger-roster.png"
		},
		"store-pirate": {
			type: "atlas",
			base: I,
			url: "store-pirate.png",
			json: "store-pirate.json"
		},
		"store-forest": {
			type: "atlas",
			base: I,
			url: "store-forest.png",
			json: "store-forest.json"
		},
		"store-mountain": {
			type: "atlas",
			base: I,
			url: "store-mountain.png",
			json: "store-mountain.json"
		},
		"store-volcano": {
			type: "atlas",
			base: I,
			url: "store-volcano.png",
			json: "store-volcano.json"
		},
		"store-cloud": {
			type: "atlas",
			base: I,
			url: "store-cloud.png",
			json: "store-cloud.json"
		},
		"store-dorm": {
			type: "atlas",
			base: I,
			url: "store-dorm.png",
			json: "store-dorm.json"
		},
		"store-tech": {
			type: "atlas",
			base: I,
			url: "store-tech.png",
			json: "store-tech.json"
		},
		"voice-0": {
			type: "sfx",
			base: m,
			url: "voice-0.mp3"
		},
		"voice-2": {
			type: "sfx",
			base: m,
			url: "voice-2.mp3"
		},
		"voice-3": {
			type: "sfx",
			base: m,
			url: "voice-3.mp3"
		},
		"voice-4": {
			type: "sfx",
			base: m,
			url: "voice-4.mp3"
		},
		"voice-5": {
			type: "sfx",
			base: m,
			url: "voice-5.mp3"
		},
		"voice-6": {
			type: "sfx",
			base: m,
			url: "voice-6.mp3"
		},
		"voice-7": {
			type: "sfx",
			base: m,
			url: "voice-7.mp3"
		},
		"voice-8-1": {
			type: "sfx",
			base: m,
			url: "voice-8-1.mp3"
		},
		"voice-8-2": {
			type: "sfx",
			base: m,
			url: "voice-8-2.mp3"
		},
		"voice-8-3": {
			type: "sfx",
			base: m,
			url: "voice-8-3.mp3"
		},
		"voice-8-4": {
			type: "sfx",
			base: m,
			url: "voice-8-4.mp3"
		},
		"voice-8-5": {
			type: "sfx",
			base: m,
			url: "voice-8-5.mp3"
		},
		"voice-8-6": {
			type: "sfx",
			base: m,
			url: "voice-8-6.mp3"
		},
		"voice-8-7": {
			type: "sfx",
			base: m,
			url: "voice-8-7.mp3"
		},
		"voice-8-8": {
			type: "sfx",
			base: m,
			url: "voice-8-8.mp3"
		},
		"voice-8-9": {
			type: "sfx",
			base: m,
			url: "voice-8-9.mp3"
		},
		"voice-8-10": {
			type: "sfx",
			base: m,
			url: "voice-8-10.mp3"
		},
		"voice-8-11": {
			type: "sfx",
			base: m,
			url: "voice-8-11.mp3"
		},
		"voice-8-12": {
			type: "sfx",
			base: m,
			url: "voice-8-12.mp3"
		},
		"voice-8-13": {
			type: "sfx",
			base: m,
			url: "voice-8-13.mp3"
		},
		"voice-8-14": {
			type: "sfx",
			base: m,
			url: "voice-8-14.mp3"
		},
		"voice-9": {
			type: "sfx",
			base: m,
			url: "voice-9.mp3"
		},
		"voice-10-1": {
			type: "sfx",
			base: m,
			url: "voice-10-1.mp3"
		},
		"voice-10-2": {
			type: "sfx",
			base: m,
			url: "voice-10-2.mp3"
		},
		"voice-10-3": {
			type: "sfx",
			base: m,
			url: "voice-10-3.mp3"
		},
		"voice-10-4": {
			type: "sfx",
			base: m,
			url: "voice-10-4.mp3"
		},
		"voice-10-5": {
			type: "sfx",
			base: m,
			url: "voice-10-5.mp3"
		},
		"voice-10-6": {
			type: "sfx",
			base: m,
			url: "voice-10-6.mp3"
		},
		"voice-10-7": {
			type: "sfx",
			base: m,
			url: "voice-10-7.mp3"
		},
		"voice-10-8": {
			type: "sfx",
			base: m,
			url: "voice-10-8.mp3"
		},
		"voice-10-9": {
			type: "sfx",
			base: m,
			url: "voice-10-9.mp3"
		},
		"voice-10-10": {
			type: "sfx",
			base: m,
			url: "voice-10-10.mp3"
		},
		"voice-10-11": {
			type: "sfx",
			base: m,
			url: "voice-10-11.mp3"
		},
		"voice-10-12": {
			type: "sfx",
			base: m,
			url: "voice-10-12.mp3"
		},
		"voice-10-13": {
			type: "sfx",
			base: m,
			url: "voice-10-13.mp3"
		},
		"voice-10-14": {
			type: "sfx",
			base: m,
			url: "voice-10-14.mp3"
		},
		"voice-10-15": {
			type: "sfx",
			base: m,
			url: "voice-10-15.mp3"
		},
		"voice-10-16": {
			type: "sfx",
			base: m,
			url: "voice-10-16.mp3"
		},
		"voice-10-17": {
			type: "sfx",
			base: m,
			url: "voice-10-17.mp3"
		},
		"voice-10-18": {
			type: "sfx",
			base: m,
			url: "voice-10-18.mp3"
		},
		"voice-10-19": {
			type: "sfx",
			base: m,
			url: "voice-10-19.mp3"
		},
		"voice-10-20": {
			type: "sfx",
			base: m,
			url: "voice-10-20.mp3"
		},
		"voice-10-21": {
			type: "sfx",
			base: m,
			url: "voice-10-21.mp3"
		},
		"voice-10-22": {
			type: "sfx",
			base: m,
			url: "voice-10-22.mp3"
		},
		"voice-10-23": {
			type: "sfx",
			base: m,
			url: "voice-10-23.mp3"
		},
		"voice-10-24": {
			type: "sfx",
			base: m,
			url: "voice-10-24.mp3"
		},
		"voice-10-25": {
			type: "sfx",
			base: m,
			url: "voice-10-25.mp3"
		},
		"voice-10-26": {
			type: "sfx",
			base: m,
			url: "voice-10-26.mp3"
		},
		"voice-10-27": {
			type: "sfx",
			base: m,
			url: "voice-10-27.mp3"
		},
		"voice-10-28": {
			type: "sfx",
			base: m,
			url: "voice-10-28.mp3"
		},
		"voice-11": {
			type: "sfx",
			base: m,
			url: "voice-11.mp3"
		},
		"voice-11-1": {
			type: "sfx",
			base: m,
			url: "voice-11-1.mp3"
		},
		"voice-11-2": {
			type: "sfx",
			base: m,
			url: "voice-11-2.mp3"
		},
		"voice-10-29": {
			type: "sfx",
			base: m,
			url: "voice-10-29.mp3"
		},
		"voice-10-30": {
			type: "sfx",
			base: m,
			url: "voice-10-30.mp3"
		},
		"voice-10-31": {
			type: "sfx",
			base: m,
			url: "voice-10-31.mp3"
		},
		"voice-10-32": {
			type: "sfx",
			base: m,
			url: "voice-10-32.mp3"
		},
		"voice-10-33": {
			type: "sfx",
			base: m,
			url: "voice-10-33.mp3"
		},
		"voice-10-34": {
			type: "sfx",
			base: m,
			url: "voice-10-34.mp3"
		},
		"voice-10-35": {
			type: "sfx",
			base: m,
			url: "voice-10-35.mp3"
		},
		"voice-10-36": {
			type: "sfx",
			base: m,
			url: "voice-10-36.mp3"
		},
		"voice-10-37": {
			type: "sfx",
			base: m,
			url: "voice-10-37.mp3"
		},
		"voice-10-38": {
			type: "sfx",
			base: m,
			url: "voice-10-38.mp3"
		},
		"voice-10-39": {
			type: "sfx",
			base: m,
			url: "voice-10-39.mp3"
		},
		"voice-10-40": {
			type: "sfx",
			base: m,
			url: "voice-10-40.mp3"
		},
		"voice-10-41": {
			type: "sfx",
			base: m,
			url: "voice-10-41.mp3"
		},
		"voice-1-1": {
			type: "sfx",
			base: m,
			url: "voice-1-1.mp3"
		},
		"voice-1-2": {
			type: "sfx",
			base: m,
			url: "voice-1-2.mp3"
		},
		"voice-1-3": {
			type: "sfx",
			base: m,
			url: "voice-1-3.mp3"
		},
		"voice-1-4": {
			type: "sfx",
			base: m,
			url: "voice-1-4.mp3"
		},
		"voice-1-5": {
			type: "sfx",
			base: m,
			url: "voice-1-5.mp3"
		},
		"voice-1-6": {
			type: "sfx",
			base: m,
			url: "voice-1-6.mp3"
		},
		"voice-1-7": {
			type: "sfx",
			base: m,
			url: "voice-1-7.mp3"
		},
		"voice-1-8": {
			type: "sfx",
			base: m,
			url: "voice-1-8.mp3"
		},
		"voice-1-9": {
			type: "sfx",
			base: m,
			url: "voice-1-9.mp3"
		},
		"voice-1-10": {
			type: "sfx",
			base: m,
			url: "voice-1-10.mp3"
		},
		"voice-1-11": {
			type: "sfx",
			base: m,
			url: "voice-1-11.mp3"
		},
		"voice-1-12": {
			type: "sfx",
			base: m,
			url: "voice-1-12.mp3"
		},
		"voice-1-13": {
			type: "sfx",
			base: m,
			url: "voice-1-13.mp3"
		},
		"voice-1-14": {
			type: "sfx",
			base: m,
			url: "voice-1-14.mp3"
		},
		"voice-1-15": {
			type: "sfx",
			base: m,
			url: "voice-1-15.mp3"
		},
		"bgm-victory": {
			type: "bgm",
			base: u,
			url: "bgm-victory.mp3"
		},
		"bgm-battle": {
			type: "bgm",
			base: u,
			url: "bgm-battle.mp3"
		},
		"bgm-intro": {
			type: "bgm",
			base: u,
			url: "bgm-intro.mp3"
		},
		"bgm-space": {
			type: "bgm",
			base: u,
			url: "bgm-space.mp3"
		},
		"bgm-game": {
			type: "bgm",
			base: u,
			url: "bgm-game.mp3"
		},
		"bgm-dance1": {
			type: "bgm",
			base: u,
			url: "bgm-dance1.mp3"
		},
		"bgm-dance2": {
			type: "bgm",
			base: u,
			url: "bgm-dance2.mp3"
		},
		"bgm-intro-1": {
			type: "bgm",
			base: u,
			url: "bgm-intro-1.mp3"
		},
		"sfx-main": {
			type: "sfx",
			base: g,
			url: "sfx-main.mp3"
		},
		"bg-battle-forest": {
			type: "sprite",
			base: v,
			url: "bg-battle-forest.png"
		},
		"bg-battle-mountain": {
			type: "sprite",
			base: v,
			url: "bg-battle-mountain.png"
		},
		"bg-battle-volcano": {
			type: "sprite",
			base: v,
			url: "bg-battle-volcano.png"
		},
		"bg-battle-pirate": {
			type: "sprite",
			base: v,
			url: "bg-battle-pirate.png"
		},
		"bg-battle-arena": {
			type: "sprite",
			base: v,
			url: "bg-battle-arena.png"
		},
		"bg-battle-academy": {
			type: "sprite",
			base: v,
			url: "bg-battle-academy.png"
		},
		"bg-battle-cloud": {
			type: "sprite",
			base: v,
			url: "bg-battle-cloud.png"
		},
		"bg-battle-tower": {
			type: "sprite",
			base: v,
			url: "bg-battle-tower.png"
		},
		"bg-battle-dino": {
			type: "sprite",
			base: v,
			url: "bg-battle-dino.png"
		},
		"bg-battle-tech": {
			type: "sprite",
			base: v,
			url: "bg-battle-tech.png"
		},
		"bg-dorm-house": {
			type: "sprite",
			base: v,
			url: "bg-dorm-house.png"
		},
		"bg-dorm-cave": {
			type: "sprite",
			base: v,
			url: "bg-dorm-cave.png"
		},
		"bg-dorm-tree": {
			type: "sprite",
			base: v,
			url: "bg-dorm-tree.png"
		},
		icons: {
			type: "atlas",
			base: "https://daboss7173.github.io/oldprodigy/1-24-0/assets/images/",
			url: "icons.png",
			json: "icons.json"
		},
		"icons-membership": {
			type: "spritesheet",
			base: P,
			url: "icons-membership.png",
			w: 60,
			h: 70
		},
		"boss-small-1": {
			type: "sprite",
			base: E,
			url: "1.png",
			x: 390
		},
		"boss-1": {
			type: "spritesheet",
			base: T,
			url: "1.png",
			x: 390,
			w: 717,
			h: 634
		},
		"boss-small-10": {
			type: "sprite",
			base: E,
			url: "10.png",
			x: 256
		},
		"boss-10": {
			type: "spritesheet",
			base: T,
			url: "10.png",
			x: 256,
			w: 344,
			h: 351
		},
		"boss-small-11": {
			type: "sprite",
			base: E,
			url: "11.png",
			x: 145
		},
		"boss-11": {
			type: "spritesheet",
			base: T,
			url: "11.png",
			x: 145,
			w: 363,
			h: 438
		},
		"boss-small-2": {
			type: "sprite",
			base: E,
			url: "2.png",
			x: 450
		},
		"boss-2": {
			type: "spritesheet",
			base: T,
			url: "2.png",
			x: 450,
			w: 853,
			h: 785
		},
		"boss-small-3": {
			type: "sprite",
			base: E,
			url: "3.png",
			x: 178
		},
		"boss-3": {
			type: "spritesheet",
			base: T,
			url: "3.png",
			x: 178,
			w: 440,
			h: 410
		},
		"boss-small-4": {
			type: "sprite",
			base: E,
			url: "4.png",
			x: 270
		},
		"boss-4": {
			type: "spritesheet",
			base: T,
			url: "4.png",
			x: 270,
			w: 664,
			h: 640
		},
		"boss-small-5": {
			type: "sprite",
			base: E,
			url: "5.png",
			x: 366
		},
		"boss-5": {
			type: "spritesheet",
			base: T,
			url: "5.png",
			x: 366,
			w: 745,
			h: 712
		},
		"boss-small-6": {
			type: "sprite",
			base: E,
			url: "6.png",
			x: 280
		},
		"boss-6": {
			type: "spritesheet",
			base: T,
			url: "6.png",
			x: 280,
			w: 634,
			h: 621
		},
		"boss-small-7": {
			type: "sprite",
			base: E,
			url: "7.png",
			x: 250
		},
		"boss-7": {
			type: "spritesheet",
			base: T,
			url: "7.png",
			x: 250,
			w: 712,
			h: 638
		},
		"boss-small-8": {
			type: "sprite",
			base: E,
			url: "8.png",
			x: 267
		},
		"boss-8": {
			type: "spritesheet",
			base: T,
			url: "8.png",
			x: 267,
			w: 599,
			h: 572
		},
		"boss-small-9": {
			type: "sprite",
			base: E,
			url: "9.png",
			x: 128
		},
		"boss-9": {
			type: "spritesheet",
			base: T,
			url: "9.png",
			x: 128,
			w: 133,
			h: 175
		},
		"monster-small-1": {
			type: "sprite",
			base: A,
			url: "1.png",
			x: 45
		},
		"monster-normal-1": {
			type: "spritesheet",
			base: M,
			url: "1.png",
			x: 45,
			w: 74,
			h: 91
		},
		"monster-reduced-1": {
			type: "spritesheet",
			base: S,
			url: "1.png",
			x: 22,
			w: 37,
			h: 46
		},
		"monster-small-10": {
			type: "sprite",
			base: A,
			url: "10.png",
			x: 55
		},
		"monster-normal-10": {
			type: "spritesheet",
			base: M,
			url: "10.png",
			x: 55,
			w: 113,
			h: 107
		},
		"monster-reduced-10": {
			type: "spritesheet",
			base: S,
			url: "10.png",
			x: 27,
			w: 54,
			h: 42
		},
		"monster-small-100": {
			type: "sprite",
			base: A,
			url: "100.png",
			x: 110
		},
		"monster-normal-100": {
			type: "spritesheet",
			base: M,
			url: "100.png",
			x: 110,
			w: 216,
			h: 185
		},
		"monster-reduced-100": {
			type: "spritesheet",
			base: S,
			url: "100.png",
			x: 55,
			w: 107,
			h: 93
		},
		"monster-small-101": {
			type: "sprite",
			base: A,
			url: "101.png",
			x: 260
		},
		"monster-normal-101": {
			type: "spritesheet",
			base: M,
			url: "101.png",
			x: 260,
			w: 460,
			h: 270
		},
		"monster-reduced-101": {
			type: "spritesheet",
			base: S,
			url: "101.png",
			x: 130,
			w: 190,
			h: 116
		},
		"monster-small-102": {
			type: "sprite",
			base: A,
			url: "102.png",
			x: 40
		},
		"monster-normal-102": {
			type: "spritesheet",
			base: M,
			url: "102.png",
			x: 40,
			w: 81,
			h: 111
		},
		"monster-reduced-102": {
			type: "spritesheet",
			base: S,
			url: "102.png",
			x: 20,
			w: 35,
			h: 47
		},
		"monster-small-103": {
			type: "sprite",
			base: A,
			url: "103.png",
			x: 58
		},
		"monster-normal-103": {
			type: "spritesheet",
			base: M,
			url: "103.png",
			x: 58,
			w: 163,
			h: 179
		},
		"monster-reduced-103": {
			type: "spritesheet",
			base: S,
			url: "103.png",
			x: 29,
			w: 65,
			h: 59
		},
		"monster-small-104": {
			type: "sprite",
			base: A,
			url: "104.png",
			x: 113
		},
		"monster-normal-104": {
			type: "spritesheet",
			base: M,
			url: "104.png",
			x: 113,
			w: 214,
			h: 249
		},
		"monster-reduced-104": {
			type: "spritesheet",
			base: S,
			url: "104.png",
			x: 56,
			w: 96,
			h: 87
		},
		"monster-small-105": {
			type: "sprite",
			base: A,
			url: "105.png",
			x: 120
		},
		"monster-normal-105": {
			type: "spritesheet",
			base: M,
			url: "105.png",
			x: 120,
			w: 246,
			h: 212
		},
		"monster-reduced-105": {
			type: "spritesheet",
			base: S,
			url: "105.png",
			x: 60,
			w: 102,
			h: 99
		},
		"monster-small-106": {
			type: "sprite",
			base: A,
			url: "106.png",
			x: 130
		},
		"monster-normal-106": {
			type: "spritesheet",
			base: M,
			url: "106.png",
			x: 130,
			w: 392,
			h: 224
		},
		"monster-reduced-106": {
			type: "spritesheet",
			base: S,
			url: "106.png",
			x: 65,
			w: 127,
			h: 101
		},
		"monster-small-107": {
			type: "sprite",
			base: A,
			url: "107.png",
			x: 90
		},
		"monster-normal-107": {
			type: "spritesheet",
			base: M,
			url: "107.png",
			x: 90,
			w: 193,
			h: 150
		},
		"monster-reduced-107": {
			type: "spritesheet",
			base: S,
			url: "107.png",
			x: 45,
			w: 85,
			h: 64
		},
		"monster-small-108": {
			type: "sprite",
			base: A,
			url: "108.png",
			x: 90
		},
		"monster-normal-108": {
			type: "spritesheet",
			base: M,
			url: "108.png",
			x: 90,
			w: 252,
			h: 187
		},
		"monster-reduced-108": {
			type: "spritesheet",
			base: S,
			url: "108.png",
			x: 45,
			w: 93,
			h: 94
		},
		"monster-small-109": {
			type: "sprite",
			base: A,
			url: "109.png",
			x: 110
		},
		"monster-normal-109": {
			type: "spritesheet",
			base: M,
			url: "109.png",
			x: 110,
			w: 208,
			h: 176
		},
		"monster-reduced-109": {
			type: "spritesheet",
			base: S,
			url: "109.png",
			x: 55,
			w: 105,
			h: 88
		},
		"monster-small-11": {
			type: "sprite",
			base: A,
			url: "11.png",
			x: 100
		},
		"monster-normal-11": {
			type: "spritesheet",
			base: M,
			url: "11.png",
			x: 100,
			w: 196,
			h: 174
		},
		"monster-reduced-11": {
			type: "spritesheet",
			base: S,
			url: "11.png",
			x: 50,
			w: 76,
			h: 75
		},
		"monster-small-110": {
			type: "sprite",
			base: A,
			url: "110.png",
			x: 160
		},
		"monster-normal-110": {
			type: "spritesheet",
			base: M,
			url: "110.png",
			x: 160,
			w: 254,
			h: 239
		},
		"monster-reduced-110": {
			type: "spritesheet",
			base: S,
			url: "110.png",
			x: 80,
			w: 128,
			h: 120
		},
		"monster-small-111": {
			type: "sprite",
			base: A,
			url: "111.png",
			x: 105
		},
		"monster-normal-111": {
			type: "spritesheet",
			base: M,
			url: "111.png",
			x: 105,
			w: 175,
			h: 180
		},
		"monster-reduced-111": {
			type: "spritesheet",
			base: S,
			url: "111.png",
			x: 52,
			w: 82,
			h: 86
		},
		"monster-small-112": {
			type: "sprite",
			base: A,
			url: "112.png",
			x: 180
		},
		"monster-normal-112": {
			type: "spritesheet",
			base: M,
			url: "112.png",
			x: 180,
			w: 436,
			h: 352
		},
		"monster-reduced-112": {
			type: "spritesheet",
			base: S,
			url: "112.png",
			x: 90,
			w: 157,
			h: 143
		},
		"monster-small-113": {
			type: "sprite",
			base: A,
			url: "113.png",
			x: 124
		},
		"monster-normal-113": {
			type: "spritesheet",
			base: M,
			url: "113.png",
			x: 124,
			w: 246,
			h: 142
		},
		"monster-reduced-113": {
			type: "spritesheet",
			base: S,
			url: "113.png",
			x: 62,
			w: 35,
			h: 59
		},
		"monster-small-114": {
			type: "sprite",
			base: A,
			url: "114.png",
			x: 126
		},
		"monster-normal-114": {
			type: "spritesheet",
			base: M,
			url: "114.png",
			x: 126,
			w: 252,
			h: 207
		},
		"monster-reduced-114": {
			type: "spritesheet",
			base: S,
			url: "114.png",
			x: 63,
			w: 63,
			h: 78
		},
		"monster-small-115": {
			type: "sprite",
			base: A,
			url: "115.png",
			x: 65
		},
		"monster-normal-115": {
			type: "spritesheet",
			base: M,
			url: "115.png",
			x: 65,
			w: 150,
			h: 220
		},
		"monster-reduced-115": {
			type: "spritesheet",
			base: S,
			url: "115.png",
			x: 32,
			w: 42,
			h: 53
		},
		"monster-small-116": {
			type: "sprite",
			base: A,
			url: "116.png",
			x: 116
		},
		"monster-normal-116": {
			type: "spritesheet",
			base: M,
			url: "116.png",
			x: 116,
			w: 239,
			h: 173
		},
		"monster-reduced-116": {
			type: "spritesheet",
			base: S,
			url: "116.png",
			x: 58,
			w: 108,
			h: 76
		},
		"monster-small-117": {
			type: "sprite",
			base: A,
			url: "117.png",
			x: 147
		},
		"monster-normal-117": {
			type: "spritesheet",
			base: M,
			url: "117.png",
			x: 147,
			w: 474,
			h: 421
		},
		"monster-reduced-117": {
			type: "spritesheet",
			base: S,
			url: "117.png",
			x: 73,
			w: 134,
			h: 149
		},
		"monster-small-118": {
			type: "sprite",
			base: A,
			url: "118.png",
			x: 120
		},
		"monster-normal-118": {
			type: "spritesheet",
			base: M,
			url: "118.png",
			x: 120,
			w: 254,
			h: 209
		},
		"monster-reduced-118": {
			type: "spritesheet",
			base: S,
			url: "118.png",
			x: 60,
			w: 73,
			h: 69
		},
		"monster-small-119": {
			type: "sprite",
			base: A,
			url: "119.png",
			x: 100
		},
		"monster-normal-119": {
			type: "spritesheet",
			base: M,
			url: "119.png",
			x: 100,
			w: 241,
			h: 163
		},
		"monster-reduced-119": {
			type: "spritesheet",
			base: S,
			url: "119.png",
			x: 50,
			w: 105,
			h: 82
		},
		"monster-small-12": {
			type: "sprite",
			base: A,
			url: "12.png",
			x: 64
		},
		"monster-normal-12": {
			type: "spritesheet",
			base: M,
			url: "12.png",
			x: 64,
			w: 191,
			h: 150
		},
		"monster-reduced-12": {
			type: "spritesheet",
			base: S,
			url: "12.png",
			x: 32,
			w: 61,
			h: 73
		},
		"monster-small-120": {
			type: "sprite",
			base: A,
			url: "120.png",
			x: 118
		},
		"monster-normal-120": {
			type: "spritesheet",
			base: M,
			url: "120.png",
			x: 118,
			w: 256,
			h: 256
		},
		"monster-reduced-120": {
			type: "spritesheet",
			base: S,
			url: "120.png",
			x: 59,
			w: 128,
			h: 128
		},
		"monster-small-121": {
			type: "sprite",
			base: A,
			url: "121.png",
			x: 132
		},
		"monster-normal-121": {
			type: "spritesheet",
			base: M,
			url: "121.png",
			x: 132,
			w: 256,
			h: 256
		},
		"monster-reduced-121": {
			type: "spritesheet",
			base: S,
			url: "121.png",
			x: 66,
			w: 128,
			h: 128
		},
		"monster-small-122": {
			type: "sprite",
			base: A,
			url: "122.png",
			x: 63
		},
		"monster-normal-122": {
			type: "spritesheet",
			base: M,
			url: "122.png",
			x: 63,
			w: 211,
			h: 150
		},
		"monster-reduced-122": {
			type: "spritesheet",
			base: S,
			url: "122.png",
			x: 31,
			w: 84,
			h: 76
		},
		"monster-small-123": {
			type: "sprite",
			base: A,
			url: "123.png",
			x: 112
		},
		"monster-normal-123": {
			type: "spritesheet",
			base: M,
			url: "123.png",
			x: 112,
			w: 301,
			h: 224
		},
		"monster-reduced-123": {
			type: "spritesheet",
			base: S,
			url: "123.png",
			x: 56,
			w: 98,
			h: 93
		},
		"monster-small-124": {
			type: "sprite",
			base: A,
			url: "124.png",
			x: 132
		},
		"monster-normal-124": {
			type: "spritesheet",
			base: M,
			url: "124.png",
			x: 132,
			w: 330,
			h: 236
		},
		"monster-reduced-124": {
			type: "spritesheet",
			base: S,
			url: "124.png",
			x: 66,
			w: 107,
			h: 117
		},
		"monster-small-13": {
			type: "sprite",
			base: A,
			url: "13.png",
			x: 65
		},
		"monster-normal-13": {
			type: "spritesheet",
			base: M,
			url: "13.png",
			x: 65,
			w: 170,
			h: 170
		},
		"monster-reduced-13": {
			type: "spritesheet",
			base: S,
			url: "13.png",
			x: 32,
			w: 79,
			h: 81
		},
		"monster-small-14": {
			type: "sprite",
			base: A,
			url: "14.png",
			x: 65
		},
		"monster-normal-14": {
			type: "spritesheet",
			base: M,
			url: "14.png",
			x: 65,
			w: 170,
			h: 168
		},
		"monster-reduced-14": {
			type: "spritesheet",
			base: S,
			url: "14.png",
			x: 32,
			w: 79,
			h: 81
		},
		"monster-small-15": {
			type: "sprite",
			base: A,
			url: "15.png",
			x: 134
		},
		"monster-normal-15": {
			type: "spritesheet",
			base: M,
			url: "15.png",
			x: 134,
			w: 247,
			h: 200
		},
		"monster-reduced-15": {
			type: "spritesheet",
			base: S,
			url: "15.png",
			x: 67,
			w: 124,
			h: 87
		},
		"monster-small-16": {
			type: "sprite",
			base: A,
			url: "16.png",
			x: 60
		},
		"monster-normal-16": {
			type: "spritesheet",
			base: M,
			url: "16.png",
			x: 60,
			w: 185,
			h: 158
		},
		"monster-reduced-16": {
			type: "spritesheet",
			base: S,
			url: "16.png",
			x: 30,
			w: 66,
			h: 74
		},
		"monster-small-17": {
			type: "sprite",
			base: A,
			url: "17.png",
			x: 127
		},
		"monster-normal-17": {
			type: "spritesheet",
			base: M,
			url: "17.png",
			x: 127,
			w: 252,
			h: 186
		},
		"monster-reduced-17": {
			type: "spritesheet",
			base: S,
			url: "17.png",
			x: 63,
			w: 104,
			h: 91
		},
		"monster-small-18": {
			type: "sprite",
			base: A,
			url: "18.png",
			x: 25
		},
		"monster-normal-18": {
			type: "spritesheet",
			base: M,
			url: "18.png",
			x: 25,
			w: 92,
			h: 75
		},
		"monster-reduced-18": {
			type: "spritesheet",
			base: S,
			url: "18.png",
			x: 12,
			w: 27,
			h: 24
		},
		"monster-small-19": {
			type: "sprite",
			base: A,
			url: "19.png",
			x: 78
		},
		"monster-normal-19": {
			type: "spritesheet",
			base: M,
			url: "19.png",
			x: 78,
			w: 203,
			h: 162
		},
		"monster-reduced-19": {
			type: "spritesheet",
			base: S,
			url: "19.png",
			x: 39,
			w: 82,
			h: 80
		},
		"monster-small-2": {
			type: "sprite",
			base: A,
			url: "2.png",
			x: 63
		},
		"monster-normal-2": {
			type: "spritesheet",
			base: M,
			url: "2.png",
			x: 63,
			w: 135,
			h: 103
		},
		"monster-reduced-2": {
			type: "spritesheet",
			base: S,
			url: "2.png",
			x: 31,
			w: 63,
			h: 52
		},
		"monster-small-20": {
			type: "sprite",
			base: A,
			url: "20.png",
			x: 80
		},
		"monster-normal-20": {
			type: "spritesheet",
			base: M,
			url: "20.png",
			x: 80,
			w: 137,
			h: 132
		},
		"monster-reduced-20": {
			type: "spritesheet",
			base: S,
			url: "20.png",
			x: 40,
			w: 69,
			h: 50
		},
		"monster-small-21": {
			type: "sprite",
			base: A,
			url: "21.png",
			x: 110
		},
		"monster-normal-21": {
			type: "spritesheet",
			base: M,
			url: "21.png",
			x: 110,
			w: 240,
			h: 193
		},
		"monster-reduced-21": {
			type: "spritesheet",
			base: S,
			url: "21.png",
			x: 55,
			w: 120,
			h: 97
		},
		"monster-small-22": {
			type: "sprite",
			base: A,
			url: "22.png",
			x: 120
		},
		"monster-normal-22": {
			type: "spritesheet",
			base: M,
			url: "22.png",
			x: 120,
			w: 254,
			h: 213
		},
		"monster-reduced-22": {
			type: "spritesheet",
			base: S,
			url: "22.png",
			x: 60,
			w: 128,
			h: 106
		},
		"monster-small-23": {
			type: "sprite",
			base: A,
			url: "23.png",
			x: 95
		},
		"monster-normal-23": {
			type: "spritesheet",
			base: M,
			url: "23.png",
			x: 95,
			w: 202,
			h: 140
		},
		"monster-reduced-23": {
			type: "spritesheet",
			base: S,
			url: "23.png",
			x: 47,
			w: 75,
			h: 64
		},
		"monster-small-24": {
			type: "sprite",
			base: A,
			url: "24.png",
			x: 92
		},
		"monster-normal-24": {
			type: "spritesheet",
			base: M,
			url: "24.png",
			x: 92,
			w: 188,
			h: 150
		},
		"monster-reduced-24": {
			type: "spritesheet",
			base: S,
			url: "24.png",
			x: 46,
			w: 88,
			h: 75
		},
		"monster-small-25": {
			type: "sprite",
			base: A,
			url: "25.png",
			x: 30
		},
		"monster-normal-25": {
			type: "spritesheet",
			base: M,
			url: "25.png",
			x: 30,
			w: 77,
			h: 78
		},
		"monster-reduced-25": {
			type: "spritesheet",
			base: S,
			url: "25.png",
			x: 15,
			w: 31,
			h: 34
		},
		"monster-small-26": {
			type: "sprite",
			base: A,
			url: "26.png",
			x: 75
		},
		"monster-normal-26": {
			type: "spritesheet",
			base: M,
			url: "26.png",
			x: 75,
			w: 132,
			h: 117
		},
		"monster-reduced-26": {
			type: "spritesheet",
			base: S,
			url: "26.png",
			x: 37,
			w: 57,
			h: 52
		},
		"monster-small-27": {
			type: "sprite",
			base: A,
			url: "27.png",
			x: 35
		},
		"monster-normal-27": {
			type: "spritesheet",
			base: M,
			url: "27.png",
			x: 35,
			w: 112,
			h: 111
		},
		"monster-reduced-27": {
			type: "spritesheet",
			base: S,
			url: "27.png",
			x: 17,
			w: 35,
			h: 45
		},
		"monster-small-28": {
			type: "sprite",
			base: A,
			url: "28.png",
			x: 70
		},
		"monster-normal-28": {
			type: "spritesheet",
			base: M,
			url: "28.png",
			x: 70,
			w: 122,
			h: 133
		},
		"monster-reduced-28": {
			type: "spritesheet",
			base: S,
			url: "28.png",
			x: 35,
			w: 58,
			h: 55
		},
		"monster-small-29": {
			type: "sprite",
			base: A,
			url: "29.png",
			x: 50
		},
		"monster-normal-29": {
			type: "spritesheet",
			base: M,
			url: "29.png",
			x: 50,
			w: 104,
			h: 98
		},
		"monster-reduced-29": {
			type: "spritesheet",
			base: S,
			url: "29.png",
			x: 25,
			w: 49,
			h: 47
		},
		"monster-small-3": {
			type: "sprite",
			base: A,
			url: "3.png",
			x: 109
		},
		"monster-normal-3": {
			type: "spritesheet",
			base: M,
			url: "3.png",
			x: 109,
			w: 246,
			h: 185
		},
		"monster-reduced-3": {
			type: "spritesheet",
			base: S,
			url: "3.png",
			x: 54,
			w: 109,
			h: 93
		},
		"monster-small-30": {
			type: "sprite",
			base: A,
			url: "30.png",
			x: 105
		},
		"monster-normal-30": {
			type: "spritesheet",
			base: M,
			url: "30.png",
			x: 105,
			w: 216,
			h: 145
		},
		"monster-reduced-30": {
			type: "spritesheet",
			base: S,
			url: "30.png",
			x: 52,
			w: 68,
			h: 73
		},
		"monster-small-31": {
			type: "sprite",
			base: A,
			url: "31.png",
			x: 80
		},
		"monster-normal-31": {
			type: "spritesheet",
			base: M,
			url: "31.png",
			x: 80,
			w: 183,
			h: 137
		},
		"monster-reduced-31": {
			type: "spritesheet",
			base: S,
			url: "31.png",
			x: 40,
			w: 75,
			h: 56
		},
		"monster-small-32": {
			type: "sprite",
			base: A,
			url: "32.png",
			x: 72
		},
		"monster-normal-32": {
			type: "spritesheet",
			base: M,
			url: "32.png",
			x: 72,
			w: 207,
			h: 238
		},
		"monster-reduced-32": {
			type: "spritesheet",
			base: S,
			url: "32.png",
			x: 36,
			w: 61,
			h: 64
		},
		"monster-small-33": {
			type: "sprite",
			base: A,
			url: "33.png",
			x: 80
		},
		"monster-normal-33": {
			type: "spritesheet",
			base: M,
			url: "33.png",
			x: 80,
			w: 206,
			h: 136
		},
		"monster-reduced-33": {
			type: "spritesheet",
			base: S,
			url: "33.png",
			x: 40,
			w: 80,
			h: 51
		},
		"monster-small-34": {
			type: "sprite",
			base: A,
			url: "34.png",
			x: 112
		},
		"monster-normal-34": {
			type: "spritesheet",
			base: M,
			url: "34.png",
			x: 112,
			w: 230,
			h: 214
		},
		"monster-reduced-34": {
			type: "spritesheet",
			base: S,
			url: "34.png",
			x: 56,
			w: 99,
			h: 103
		},
		"monster-small-35": {
			type: "sprite",
			base: A,
			url: "35.png",
			x: 115
		},
		"monster-normal-35": {
			type: "spritesheet",
			base: M,
			url: "35.png",
			x: 115,
			w: 215,
			h: 167
		},
		"monster-reduced-35": {
			type: "spritesheet",
			base: S,
			url: "35.png",
			x: 57,
			w: 103,
			h: 81
		},
		"monster-small-36": {
			type: "sprite",
			base: A,
			url: "36.png",
			x: 115
		},
		"monster-normal-36": {
			type: "spritesheet",
			base: M,
			url: "36.png",
			x: 115,
			w: 212,
			h: 182
		},
		"monster-reduced-36": {
			type: "spritesheet",
			base: S,
			url: "36.png",
			x: 57,
			w: 102,
			h: 89
		},
		"monster-small-37": {
			type: "sprite",
			base: A,
			url: "37.png",
			x: 105
		},
		"monster-normal-37": {
			type: "spritesheet",
			base: M,
			url: "37.png",
			x: 105,
			w: 201,
			h: 190
		},
		"monster-reduced-37": {
			type: "spritesheet",
			base: S,
			url: "37.png",
			x: 52,
			w: 98,
			h: 92
		},
		"monster-small-38": {
			type: "sprite",
			base: A,
			url: "38.png",
			x: 105
		},
		"monster-normal-38": {
			type: "spritesheet",
			base: M,
			url: "38.png",
			x: 105,
			w: 201,
			h: 155
		},
		"monster-reduced-38": {
			type: "spritesheet",
			base: S,
			url: "38.png",
			x: 52,
			w: 91,
			h: 71
		},
		"monster-small-39": {
			type: "sprite",
			base: A,
			url: "39.png",
			x: 125
		},
		"monster-normal-39": {
			type: "spritesheet",
			base: M,
			url: "39.png",
			x: 125,
			w: 239,
			h: 181
		},
		"monster-reduced-39": {
			type: "spritesheet",
			base: S,
			url: "39.png",
			x: 62,
			w: 103,
			h: 88
		},
		"monster-small-4": {
			type: "sprite",
			base: A,
			url: "4.png",
			x: 65
		},
		"monster-normal-4": {
			type: "spritesheet",
			base: M,
			url: "4.png",
			x: 65,
			w: 100,
			h: 74
		},
		"monster-reduced-4": {
			type: "spritesheet",
			base: S,
			url: "4.png",
			x: 32,
			w: 51,
			h: 38
		},
		"monster-small-40": {
			type: "sprite",
			base: A,
			url: "40.png",
			x: 90
		},
		"monster-normal-40": {
			type: "spritesheet",
			base: M,
			url: "40.png",
			x: 90,
			w: 150,
			h: 185
		},
		"monster-reduced-40": {
			type: "spritesheet",
			base: S,
			url: "40.png",
			x: 45,
			w: 67,
			h: 80
		},
		"monster-small-41": {
			type: "sprite",
			base: A,
			url: "41.png",
			x: 120
		},
		"monster-normal-41": {
			type: "spritesheet",
			base: M,
			url: "41.png",
			x: 120,
			w: 240,
			h: 239
		},
		"monster-reduced-41": {
			type: "spritesheet",
			base: S,
			url: "41.png",
			x: 60,
			w: 110,
			h: 78
		},
		"monster-small-42": {
			type: "sprite",
			base: A,
			url: "42.png",
			x: 115
		},
		"monster-normal-42": {
			type: "spritesheet",
			base: M,
			url: "42.png",
			x: 115,
			w: 240,
			h: 239
		},
		"monster-reduced-42": {
			type: "spritesheet",
			base: S,
			url: "42.png",
			x: 57,
			w: 110,
			h: 78
		},
		"monster-small-43": {
			type: "sprite",
			base: A,
			url: "43.png",
			x: 90
		},
		"monster-normal-43": {
			type: "spritesheet",
			base: M,
			url: "43.png",
			x: 90,
			w: 167,
			h: 183
		},
		"monster-reduced-43": {
			type: "spritesheet",
			base: S,
			url: "43.png",
			x: 45,
			w: 84,
			h: 87
		},
		"monster-small-44": {
			type: "sprite",
			base: A,
			url: "44.png",
			x: 90
		},
		"monster-normal-44": {
			type: "spritesheet",
			base: M,
			url: "44.png",
			x: 90,
			w: 167,
			h: 183
		},
		"monster-reduced-44": {
			type: "spritesheet",
			base: S,
			url: "44.png",
			x: 45,
			w: 84,
			h: 87
		},
		"monster-small-45": {
			type: "sprite",
			base: A,
			url: "45.png",
			x: 95
		},
		"monster-normal-45": {
			type: "spritesheet",
			base: M,
			url: "45.png",
			x: 95,
			w: 222,
			h: 167
		},
		"monster-reduced-45": {
			type: "spritesheet",
			base: S,
			url: "45.png",
			x: 47,
			w: 102,
			h: 84
		},
		"monster-small-46": {
			type: "sprite",
			base: A,
			url: "46.png",
			x: 60
		},
		"monster-normal-46": {
			type: "spritesheet",
			base: M,
			url: "46.png",
			x: 60,
			w: 180,
			h: 140
		},
		"monster-reduced-46": {
			type: "spritesheet",
			base: S,
			url: "46.png",
			x: 30,
			w: 58,
			h: 59
		},
		"monster-small-47": {
			type: "sprite",
			base: A,
			url: "47.png",
			x: 86
		},
		"monster-normal-47": {
			type: "spritesheet",
			base: M,
			url: "47.png",
			x: 86,
			w: 208,
			h: 167
		},
		"monster-reduced-47": {
			type: "spritesheet",
			base: S,
			url: "47.png",
			x: 43,
			w: 77,
			h: 78
		},
		"monster-small-48": {
			type: "sprite",
			base: A,
			url: "48.png",
			x: 85
		},
		"monster-normal-48": {
			type: "spritesheet",
			base: M,
			url: "48.png",
			x: 85,
			w: 175,
			h: 223
		},
		"monster-reduced-48": {
			type: "spritesheet",
			base: S,
			url: "48.png",
			x: 42,
			w: 88,
			h: 101
		},
		"monster-small-49": {
			type: "sprite",
			base: A,
			url: "49.png",
			x: 120
		},
		"monster-normal-49": {
			type: "spritesheet",
			base: M,
			url: "49.png",
			x: 120,
			w: 221,
			h: 245
		},
		"monster-reduced-49": {
			type: "spritesheet",
			base: S,
			url: "49.png",
			x: 60,
			w: 104,
			h: 118
		},
		"monster-small-5": {
			type: "sprite",
			base: A,
			url: "5.png",
			x: 85
		},
		"monster-normal-5": {
			type: "spritesheet",
			base: M,
			url: "5.png",
			x: 85,
			w: 185,
			h: 204
		},
		"monster-reduced-5": {
			type: "spritesheet",
			base: S,
			url: "5.png",
			x: 42,
			w: 93,
			h: 101
		},
		"monster-small-50": {
			type: "sprite",
			base: A,
			url: "50.png",
			x: 115
		},
		"monster-normal-50": {
			type: "spritesheet",
			base: M,
			url: "50.png",
			x: 115,
			w: 227,
			h: 169
		},
		"monster-reduced-50": {
			type: "spritesheet",
			base: S,
			url: "50.png",
			x: 57,
			w: 96,
			h: 83
		},
		"monster-small-51": {
			type: "sprite",
			base: A,
			url: "51.png",
			x: 122
		},
		"monster-normal-51": {
			type: "spritesheet",
			base: M,
			url: "51.png",
			x: 122,
			w: 235,
			h: 174
		},
		"monster-reduced-51": {
			type: "spritesheet",
			base: S,
			url: "51.png",
			x: 61,
			w: 104,
			h: 85
		},
		"monster-small-52": {
			type: "sprite",
			base: A,
			url: "52.png",
			x: 55
		},
		"monster-normal-52": {
			type: "spritesheet",
			base: M,
			url: "52.png",
			x: 55,
			w: 107,
			h: 163
		},
		"monster-reduced-52": {
			type: "spritesheet",
			base: S,
			url: "52.png",
			x: 27,
			w: 54,
			h: 79
		},
		"monster-small-53": {
			type: "sprite",
			base: A,
			url: "53.png",
			x: 90
		},
		"monster-normal-53": {
			type: "spritesheet",
			base: M,
			url: "53.png",
			x: 90,
			w: 166,
			h: 240
		},
		"monster-reduced-53": {
			type: "spritesheet",
			base: S,
			url: "53.png",
			x: 45,
			w: 84,
			h: 117
		},
		"monster-small-54": {
			type: "sprite",
			base: A,
			url: "54.png",
			x: 150
		},
		"monster-normal-54": {
			type: "spritesheet",
			base: M,
			url: "54.png",
			x: 150,
			w: 344,
			h: 333
		},
		"monster-reduced-54": {
			type: "spritesheet",
			base: S,
			url: "54.png",
			x: 75,
			w: 143,
			h: 161
		},
		"monster-small-55": {
			type: "sprite",
			base: A,
			url: "55.png",
			x: 80
		},
		"monster-normal-55": {
			type: "spritesheet",
			base: M,
			url: "55.png",
			x: 80,
			w: 157,
			h: 194
		},
		"monster-reduced-55": {
			type: "spritesheet",
			base: S,
			url: "55.png",
			x: 40,
			w: 79,
			h: 98
		},
		"monster-small-56": {
			type: "sprite",
			base: A,
			url: "56.png",
			x: 82
		},
		"monster-normal-56": {
			type: "spritesheet",
			base: M,
			url: "56.png",
			x: 82,
			w: 160,
			h: 140
		},
		"monster-reduced-56": {
			type: "spritesheet",
			base: S,
			url: "56.png",
			x: 41,
			w: 69,
			h: 54
		},
		"monster-small-57": {
			type: "sprite",
			base: A,
			url: "57.png",
			x: 100
		},
		"monster-normal-57": {
			type: "spritesheet",
			base: M,
			url: "57.png",
			x: 100,
			w: 182,
			h: 136
		},
		"monster-reduced-57": {
			type: "spritesheet",
			base: S,
			url: "57.png",
			x: 50,
			w: 91,
			h: 65
		},
		"monster-small-58": {
			type: "sprite",
			base: A,
			url: "58.png",
			x: 80
		},
		"monster-normal-58": {
			type: "spritesheet",
			base: M,
			url: "58.png",
			x: 80,
			w: 157,
			h: 194
		},
		"monster-reduced-58": {
			type: "spritesheet",
			base: S,
			url: "58.png",
			x: 40,
			w: 78,
			h: 98
		},
		"monster-small-59": {
			type: "sprite",
			base: A,
			url: "59.png",
			x: 80
		},
		"monster-normal-59": {
			type: "spritesheet",
			base: M,
			url: "59.png",
			x: 80,
			w: 197,
			h: 177
		},
		"monster-reduced-59": {
			type: "spritesheet",
			base: S,
			url: "59.png",
			x: 40,
			w: 85,
			h: 87
		},
		"monster-small-6": {
			type: "sprite",
			base: A,
			url: "6.png",
			x: 90
		},
		"monster-normal-6": {
			type: "spritesheet",
			base: M,
			url: "6.png",
			x: 90,
			w: 235,
			h: 215
		},
		"monster-reduced-6": {
			type: "spritesheet",
			base: S,
			url: "6.png",
			x: 45,
			w: 91,
			h: 107
		},
		"monster-small-60": {
			type: "sprite",
			base: A,
			url: "60.png",
			x: 82
		},
		"monster-normal-60": {
			type: "spritesheet",
			base: M,
			url: "60.png",
			x: 82,
			w: 253,
			h: 235
		},
		"monster-reduced-60": {
			type: "spritesheet",
			base: S,
			url: "60.png",
			x: 41,
			w: 97,
			h: 110
		},
		"monster-small-61": {
			type: "sprite",
			base: A,
			url: "61.png",
			x: 102
		},
		"monster-normal-61": {
			type: "spritesheet",
			base: M,
			url: "61.png",
			x: 102,
			w: 233,
			h: 208
		},
		"monster-reduced-61": {
			type: "spritesheet",
			base: S,
			url: "61.png",
			x: 51,
			w: 99,
			h: 99
		},
		"monster-small-62": {
			type: "sprite",
			base: A,
			url: "62.png",
			x: 80
		},
		"monster-normal-62": {
			type: "spritesheet",
			base: M,
			url: "62.png",
			x: 80,
			w: 201,
			h: 193
		},
		"monster-reduced-62": {
			type: "spritesheet",
			base: S,
			url: "62.png",
			x: 40,
			w: 89,
			h: 96
		},
		"monster-small-63": {
			type: "sprite",
			base: A,
			url: "63.png",
			x: 60
		},
		"monster-normal-63": {
			type: "spritesheet",
			base: M,
			url: "63.png",
			x: 60,
			w: 197,
			h: 150
		},
		"monster-reduced-63": {
			type: "spritesheet",
			base: S,
			url: "63.png",
			x: 30,
			w: 81,
			h: 76
		},
		"monster-small-64": {
			type: "sprite",
			base: A,
			url: "64.png",
			x: 122
		},
		"monster-normal-64": {
			type: "spritesheet",
			base: M,
			url: "64.png",
			x: 122,
			w: 295,
			h: 212
		},
		"monster-reduced-64": {
			type: "spritesheet",
			base: S,
			url: "64.png",
			x: 61,
			w: 97,
			h: 102
		},
		"monster-small-65": {
			type: "sprite",
			base: A,
			url: "65.png",
			x: 134
		},
		"monster-normal-65": {
			type: "spritesheet",
			base: M,
			url: "65.png",
			x: 134,
			w: 343,
			h: 249
		},
		"monster-reduced-65": {
			type: "spritesheet",
			base: S,
			url: "65.png",
			x: 67,
			w: 107,
			h: 125
		},
		"monster-small-66": {
			type: "sprite",
			base: A,
			url: "66.png",
			x: 60
		},
		"monster-normal-66": {
			type: "spritesheet",
			base: M,
			url: "66.png",
			x: 60,
			w: 197,
			h: 144
		},
		"monster-reduced-66": {
			type: "spritesheet",
			base: S,
			url: "66.png",
			x: 30,
			w: 82,
			h: 73
		},
		"monster-small-67": {
			type: "sprite",
			base: A,
			url: "67.png",
			x: 122
		},
		"monster-normal-67": {
			type: "spritesheet",
			base: M,
			url: "67.png",
			x: 122,
			w: 297,
			h: 222
		},
		"monster-reduced-67": {
			type: "spritesheet",
			base: S,
			url: "67.png",
			x: 61,
			w: 96,
			h: 90
		},
		"monster-small-68": {
			type: "sprite",
			base: A,
			url: "68.png",
			x: 134
		},
		"monster-normal-68": {
			type: "spritesheet",
			base: M,
			url: "68.png",
			x: 134,
			w: 330,
			h: 233
		},
		"monster-reduced-68": {
			type: "spritesheet",
			base: S,
			url: "68.png",
			x: 67,
			w: 107,
			h: 114
		},
		"monster-small-69": {
			type: "sprite",
			base: A,
			url: "69.png",
			x: 60
		},
		"monster-normal-69": {
			type: "spritesheet",
			base: M,
			url: "69.png",
			x: 60,
			w: 196,
			h: 137
		},
		"monster-reduced-69": {
			type: "spritesheet",
			base: S,
			url: "69.png",
			x: 30,
			w: 83,
			h: 69
		},
		"monster-small-7": {
			type: "sprite",
			base: A,
			url: "7.png",
			x: 55
		},
		"monster-normal-7": {
			type: "spritesheet",
			base: M,
			url: "7.png",
			x: 55,
			w: 108,
			h: 75
		},
		"monster-reduced-7": {
			type: "spritesheet",
			base: S,
			url: "7.png",
			x: 27,
			w: 55,
			h: 38
		},
		"monster-small-70": {
			type: "sprite",
			base: A,
			url: "70.png",
			x: 122
		},
		"monster-normal-70": {
			type: "spritesheet",
			base: M,
			url: "70.png",
			x: 122,
			w: 303,
			h: 234
		},
		"monster-reduced-70": {
			type: "spritesheet",
			base: S,
			url: "70.png",
			x: 61,
			w: 97,
			h: 99
		},
		"monster-small-71": {
			type: "sprite",
			base: A,
			url: "71.png",
			x: 134
		},
		"monster-normal-71": {
			type: "spritesheet",
			base: M,
			url: "71.png",
			x: 134,
			w: 343,
			h: 247
		},
		"monster-reduced-71": {
			type: "spritesheet",
			base: S,
			url: "71.png",
			x: 67,
			w: 107,
			h: 124
		},
		"monster-small-72": {
			type: "sprite",
			base: A,
			url: "72.png",
			x: 60
		},
		"monster-normal-72": {
			type: "spritesheet",
			base: M,
			url: "72.png",
			x: 60,
			w: 196,
			h: 144
		},
		"monster-reduced-72": {
			type: "spritesheet",
			base: S,
			url: "72.png",
			x: 30,
			w: 80,
			h: 73
		},
		"monster-small-73": {
			type: "sprite",
			base: A,
			url: "73.png",
			x: 122
		},
		"monster-normal-73": {
			type: "spritesheet",
			base: M,
			url: "73.png",
			x: 122,
			w: 292,
			h: 212
		},
		"monster-reduced-73": {
			type: "spritesheet",
			base: S,
			url: "73.png",
			x: 61,
			w: 98,
			h: 100
		},
		"monster-small-74": {
			type: "sprite",
			base: A,
			url: "74.png",
			x: 134
		},
		"monster-normal-74": {
			type: "spritesheet",
			base: M,
			url: "74.png",
			x: 134,
			w: 343,
			h: 242
		},
		"monster-reduced-74": {
			type: "spritesheet",
			base: S,
			url: "74.png",
			x: 67,
			w: 107,
			h: 122
		},
		"monster-small-75": {
			type: "sprite",
			base: A,
			url: "75.png",
			x: 95
		},
		"monster-normal-75": {
			type: "spritesheet",
			base: M,
			url: "75.png",
			x: 95,
			w: 154,
			h: 168
		},
		"monster-reduced-75": {
			type: "spritesheet",
			base: S,
			url: "75.png",
			x: 47,
			w: 75,
			h: 85
		},
		"monster-small-76": {
			type: "sprite",
			base: A,
			url: "76.png",
			x: 95
		},
		"monster-normal-76": {
			type: "spritesheet",
			base: M,
			url: "76.png",
			x: 95,
			w: 201,
			h: 217
		},
		"monster-reduced-76": {
			type: "spritesheet",
			base: S,
			url: "76.png",
			x: 47,
			w: 93,
			h: 108
		},
		"monster-small-78": {
			type: "sprite",
			base: A,
			url: "78.png",
			x: 93
		},
		"monster-normal-78": {
			type: "spritesheet",
			base: M,
			url: "78.png",
			x: 93,
			w: 156,
			h: 185
		},
		"monster-reduced-78": {
			type: "spritesheet",
			base: S,
			url: "78.png",
			x: 46,
			w: 75,
			h: 91
		},
		"monster-small-79": {
			type: "sprite",
			base: A,
			url: "79.png",
			x: 88
		},
		"monster-normal-79": {
			type: "spritesheet",
			base: M,
			url: "79.png",
			x: 88,
			w: 213,
			h: 194
		},
		"monster-reduced-79": {
			type: "spritesheet",
			base: S,
			url: "79.png",
			x: 44,
			w: 93,
			h: 97
		},
		"monster-small-8": {
			type: "sprite",
			base: A,
			url: "8.png",
			x: 55
		},
		"monster-normal-8": {
			type: "spritesheet",
			base: M,
			url: "8.png",
			x: 55,
			w: 162,
			h: 117
		},
		"monster-reduced-8": {
			type: "spritesheet",
			base: S,
			url: "8.png",
			x: 27,
			w: 56,
			h: 59
		},
		"monster-small-80": {
			type: "sprite",
			base: A,
			url: "80.png",
			x: 100
		},
		"monster-normal-80": {
			type: "spritesheet",
			base: M,
			url: "80.png",
			x: 100,
			w: 229,
			h: 225
		},
		"monster-reduced-80": {
			type: "spritesheet",
			base: S,
			url: "80.png",
			x: 50,
			w: 82,
			h: 112
		},
		"monster-small-81": {
			type: "sprite",
			base: A,
			url: "81.png",
			x: 95
		},
		"monster-normal-81": {
			type: "spritesheet",
			base: M,
			url: "81.png",
			x: 95,
			w: 157,
			h: 162
		},
		"monster-reduced-81": {
			type: "spritesheet",
			base: S,
			url: "81.png",
			x: 47,
			w: 74,
			h: 80
		},
		"monster-small-82": {
			type: "sprite",
			base: A,
			url: "82.png",
			x: 102
		},
		"monster-normal-82": {
			type: "spritesheet",
			base: M,
			url: "82.png",
			x: 102,
			w: 212,
			h: 187
		},
		"monster-reduced-82": {
			type: "spritesheet",
			base: S,
			url: "82.png",
			x: 51,
			w: 93,
			h: 94
		},
		"monster-small-83": {
			type: "sprite",
			base: A,
			url: "83.png",
			x: 85
		},
		"monster-normal-83": {
			type: "spritesheet",
			base: M,
			url: "83.png",
			x: 85,
			w: 217,
			h: 223
		},
		"monster-reduced-83": {
			type: "spritesheet",
			base: S,
			url: "83.png",
			x: 42,
			w: 75,
			h: 108
		},
		"monster-small-84": {
			type: "sprite",
			base: A,
			url: "84.png",
			x: 90
		},
		"monster-normal-84": {
			type: "spritesheet",
			base: M,
			url: "84.png",
			x: 90,
			w: 156,
			h: 171
		},
		"monster-reduced-84": {
			type: "spritesheet",
			base: S,
			url: "84.png",
			x: 45,
			w: 79,
			h: 85
		},
		"monster-small-85": {
			type: "sprite",
			base: A,
			url: "85.png",
			x: 88
		},
		"monster-normal-85": {
			type: "spritesheet",
			base: M,
			url: "85.png",
			x: 88,
			w: 200,
			h: 190
		},
		"monster-reduced-85": {
			type: "spritesheet",
			base: S,
			url: "85.png",
			x: 44,
			w: 93,
			h: 95
		},
		"monster-small-86": {
			type: "sprite",
			base: A,
			url: "86.png",
			x: 115
		},
		"monster-normal-86": {
			type: "spritesheet",
			base: M,
			url: "86.png",
			x: 115,
			w: 242,
			h: 242
		},
		"monster-reduced-86": {
			type: "spritesheet",
			base: S,
			url: "86.png",
			x: 57,
			w: 84,
			h: 115
		},
		"monster-small-87": {
			type: "sprite",
			base: A,
			url: "87.png",
			x: 65
		},
		"monster-normal-87": {
			type: "spritesheet",
			base: M,
			url: "87.png",
			x: 65,
			w: 189,
			h: 120
		},
		"monster-reduced-87": {
			type: "spritesheet",
			base: S,
			url: "87.png",
			x: 32,
			w: 65,
			h: 54
		},
		"monster-small-88": {
			type: "sprite",
			base: A,
			url: "88.png",
			x: 115
		},
		"monster-normal-88": {
			type: "spritesheet",
			base: M,
			url: "88.png",
			x: 115,
			w: 252,
			h: 212
		},
		"monster-reduced-88": {
			type: "spritesheet",
			base: S,
			url: "88.png",
			x: 57,
			w: 113,
			h: 93
		},
		"monster-small-89": {
			type: "sprite",
			base: A,
			url: "89.png",
			x: 120
		},
		"monster-normal-89": {
			type: "spritesheet",
			base: M,
			url: "89.png",
			x: 120,
			w: 253,
			h: 254
		},
		"monster-reduced-89": {
			type: "spritesheet",
			base: S,
			url: "89.png",
			x: 60,
			w: 123,
			h: 127
		},
		"monster-small-9": {
			type: "sprite",
			base: A,
			url: "9.png",
			x: 120
		},
		"monster-normal-9": {
			type: "spritesheet",
			base: M,
			url: "9.png",
			x: 120,
			w: 250,
			h: 224
		},
		"monster-reduced-9": {
			type: "spritesheet",
			base: S,
			url: "9.png",
			x: 60,
			w: 126,
			h: 111
		},
		"monster-small-90": {
			type: "sprite",
			base: A,
			url: "90.png",
			x: 80
		},
		"monster-normal-90": {
			type: "spritesheet",
			base: M,
			url: "90.png",
			x: 80,
			w: 155,
			h: 128
		},
		"monster-reduced-90": {
			type: "spritesheet",
			base: S,
			url: "90.png",
			x: 40,
			w: 78,
			h: 63
		},
		"monster-small-91": {
			type: "sprite",
			base: A,
			url: "91.png",
			x: 85
		},
		"monster-normal-91": {
			type: "spritesheet",
			base: M,
			url: "91.png",
			x: 85,
			w: 219,
			h: 204
		},
		"monster-reduced-91": {
			type: "spritesheet",
			base: S,
			url: "91.png",
			x: 42,
			w: 88,
			h: 98
		},
		"monster-small-92": {
			type: "sprite",
			base: A,
			url: "92.png",
			x: 80
		},
		"monster-normal-92": {
			type: "spritesheet",
			base: M,
			url: "92.png",
			x: 80,
			w: 155,
			h: 128
		},
		"monster-reduced-92": {
			type: "spritesheet",
			base: S,
			url: "92.png",
			x: 40,
			w: 78,
			h: 63
		},
		"monster-small-93": {
			type: "sprite",
			base: A,
			url: "93.png",
			x: 65
		},
		"monster-normal-93": {
			type: "spritesheet",
			base: M,
			url: "93.png",
			x: 65,
			w: 171,
			h: 150
		},
		"monster-reduced-93": {
			type: "spritesheet",
			base: S,
			url: "93.png",
			x: 32,
			w: 84,
			h: 73
		},
		"monster-small-94": {
			type: "sprite",
			base: A,
			url: "94.png",
			x: 80
		},
		"monster-normal-94": {
			type: "spritesheet",
			base: M,
			url: "94.png",
			x: 80,
			w: 176,
			h: 187
		},
		"monster-reduced-94": {
			type: "spritesheet",
			base: S,
			url: "94.png",
			x: 40,
			w: 88,
			h: 53
		},
		"monster-small-95": {
			type: "sprite",
			base: A,
			url: "95.png",
			x: 115
		},
		"monster-normal-95": {
			type: "spritesheet",
			base: M,
			url: "95.png",
			x: 115,
			w: 203,
			h: 196
		},
		"monster-reduced-95": {
			type: "spritesheet",
			base: S,
			url: "95.png",
			x: 57,
			w: 101,
			h: 67
		},
		"monster-small-96": {
			type: "sprite",
			base: A,
			url: "96.png",
			x: 130
		},
		"monster-normal-96": {
			type: "spritesheet",
			base: M,
			url: "96.png",
			x: 130,
			w: 233,
			h: 206
		},
		"monster-reduced-96": {
			type: "spritesheet",
			base: S,
			url: "96.png",
			x: 65,
			w: 117,
			h: 79
		},
		"monster-small-97": {
			type: "sprite",
			base: A,
			url: "97.png",
			x: 135
		},
		"monster-normal-97": {
			type: "spritesheet",
			base: M,
			url: "97.png",
			x: 135,
			w: 488,
			h: 245
		},
		"monster-reduced-97": {
			type: "spritesheet",
			base: S,
			url: "97.png",
			x: 67,
			w: 135,
			h: 123
		},
		"monster-small-98": {
			type: "sprite",
			base: A,
			url: "98.png",
			x: 70
		},
		"monster-normal-98": {
			type: "spritesheet",
			base: M,
			url: "98.png",
			x: 70,
			w: 183,
			h: 178
		},
		"monster-reduced-98": {
			type: "spritesheet",
			base: S,
			url: "98.png",
			x: 35,
			w: 74,
			h: 69
		},
		"monster-small-99": {
			type: "sprite",
			base: A,
			url: "99.png",
			x: 130
		},
		"monster-normal-99": {
			type: "spritesheet",
			base: M,
			url: "99.png",
			x: 130,
			w: 254,
			h: 171
		},
		"monster-reduced-99": {
			type: "spritesheet",
			base: S,
			url: "99.png",
			x: 65,
			w: 76,
			h: 86
		},
		heads: {
			type: "atlas",
			base: p,
			url: "head.png",
			json: "head.json"
		},
		"normal-outfit-male-1": {
			type: "spritesheet",
			base: r,
			url: "1.png",
			x: 91,
			y: 144,
			w: 75,
			h: 91
		},
		"normal-outfit-male-10": {
			type: "spritesheet",
			base: r,
			url: "10.png",
			x: 91,
			y: 129,
			w: 75,
			h: 106
		},
		"normal-outfit-male-11": {
			type: "spritesheet",
			base: r,
			url: "11.png",
			x: 91,
			y: 150,
			w: 75,
			h: 85
		},
		"normal-outfit-male-12": {
			type: "spritesheet",
			base: r,
			url: "12.png",
			x: 91,
			y: 138,
			w: 75,
			h: 97
		},
		"normal-outfit-male-13": {
			type: "spritesheet",
			base: r,
			url: "13.png",
			x: 91,
			y: 155,
			w: 75,
			h: 80
		},
		"normal-outfit-male-14": {
			type: "spritesheet",
			base: r,
			url: "14.png",
			x: 91,
			y: 155,
			w: 75,
			h: 80
		},
		"normal-outfit-male-15": {
			type: "spritesheet",
			base: r,
			url: "15.png",
			x: 91,
			y: 155,
			w: 75,
			h: 80
		},
		"normal-outfit-male-16": {
			type: "spritesheet",
			base: r,
			url: "16.png",
			x: 91,
			y: 153,
			w: 75,
			h: 82
		},
		"normal-outfit-male-17": {
			type: "spritesheet",
			base: r,
			url: "17.png",
			x: 61,
			y: 144,
			w: 120,
			h: 91
		},
		"normal-outfit-male-18": {
			type: "spritesheet",
			base: r,
			url: "18.png",
			x: 91,
			y: 156,
			w: 75,
			h: 79
		},
		"normal-outfit-male-19": {
			type: "spritesheet",
			base: r,
			url: "19.png",
			x: 91,
			y: 154,
			w: 75,
			h: 81
		},
		"normal-outfit-male-2": {
			type: "spritesheet",
			base: r,
			url: "2.png",
			x: 68,
			y: 152,
			w: 98,
			h: 83
		},
		"normal-outfit-male-20": {
			type: "spritesheet",
			base: r,
			url: "20.png",
			x: 91,
			y: 154,
			w: 75,
			h: 81
		},
		"normal-outfit-male-21": {
			type: "spritesheet",
			base: r,
			url: "21.png",
			x: 91,
			y: 156,
			w: 75,
			h: 79
		},
		"normal-outfit-male-22": {
			type: "spritesheet",
			base: r,
			url: "22.png",
			x: 91,
			y: 153,
			w: 75,
			h: 82
		},
		"normal-outfit-male-23": {
			type: "spritesheet",
			base: r,
			url: "23.png",
			x: 91,
			y: 153,
			w: 75,
			h: 82
		},
		"normal-outfit-male-24": {
			type: "spritesheet",
			base: r,
			url: "24.png",
			x: 54,
			y: 141,
			w: 112,
			h: 94
		},
		"normal-outfit-male-25": {
			type: "spritesheet",
			base: r,
			url: "25.png",
			x: 91,
			y: 155,
			w: 75,
			h: 80
		},
		"normal-outfit-male-26": {
			type: "spritesheet",
			base: r,
			url: "26.png",
			x: 91,
			y: 153,
			w: 75,
			h: 82
		},
		"normal-outfit-male-27": {
			type: "spritesheet",
			base: r,
			url: "27.png",
			x: 91,
			y: 140,
			w: 75,
			h: 95
		},
		"normal-outfit-male-28": {
			type: "spritesheet",
			base: r,
			url: "28.png",
			x: 86,
			y: 154,
			w: 80,
			h: 81
		},
		"normal-outfit-male-29": {
			type: "spritesheet",
			base: r,
			url: "29.png",
			x: 91,
			y: 155,
			w: 75,
			h: 80
		},
		"normal-outfit-male-3": {
			type: "spritesheet",
			base: r,
			url: "3.png",
			x: 91,
			y: 153,
			w: 75,
			h: 82
		},
		"normal-outfit-male-30": {
			type: "spritesheet",
			base: r,
			url: "30.png",
			x: 91,
			y: 153,
			w: 75,
			h: 82
		},
		"normal-outfit-male-31": {
			type: "spritesheet",
			base: r,
			url: "31.png",
			x: 72,
			y: 144,
			w: 94,
			h: 91
		},
		"normal-outfit-male-32": {
			type: "spritesheet",
			base: r,
			url: "32.png",
			x: 88,
			y: 68,
			w: 78,
			h: 167
		},
		"normal-outfit-male-33": {
			type: "spritesheet",
			base: r,
			url: "33.png",
			x: 74,
			y: 150,
			w: 92,
			h: 85
		},
		"normal-outfit-male-34": {
			type: "spritesheet",
			base: r,
			url: "34.png",
			x: 66,
			y: 138,
			w: 100,
			h: 97
		},
		"normal-outfit-male-35": {
			type: "spritesheet",
			base: r,
			url: "35.png",
			x: 88,
			y: 155,
			w: 79,
			h: 80
		},
		"normal-outfit-male-36": {
			type: "spritesheet",
			base: r,
			url: "36.png",
			x: 91,
			y: 155,
			w: 76,
			h: 80
		},
		"normal-outfit-male-37": {
			type: "spritesheet",
			base: r,
			url: "37.png",
			x: 61,
			y: 153,
			w: 105,
			h: 82
		},
		"normal-outfit-male-38": {
			type: "spritesheet",
			base: r,
			url: "38.png",
			x: 30,
			y: 34,
			w: 165,
			h: 221
		},
		"normal-outfit-male-39": {
			type: "spritesheet",
			base: r,
			url: "39.png",
			x: 91,
			y: 151,
			w: 75,
			h: 84
		},
		"normal-outfit-male-4": {
			type: "spritesheet",
			base: r,
			url: "4.png",
			x: 91,
			y: 154,
			w: 75,
			h: 81
		},
		"normal-outfit-male-40": {
			type: "spritesheet",
			base: r,
			url: "40.png",
			x: 75,
			y: 153,
			w: 91,
			h: 82
		},
		"normal-outfit-male-41": {
			type: "spritesheet",
			base: r,
			url: "41.png",
			x: 91,
			y: 150,
			w: 75,
			h: 85
		},
		"normal-outfit-male-42": {
			type: "spritesheet",
			base: r,
			url: "42.png",
			x: 92,
			y: 154,
			w: 74,
			h: 81
		},
		"normal-outfit-male-43": {
			type: "spritesheet",
			base: r,
			url: "43.png",
			x: 89,
			y: 151,
			w: 95,
			h: 86
		},
		"normal-outfit-male-44": {
			type: "spritesheet",
			base: r,
			url: "44.png",
			x: 78,
			y: 137,
			w: 96,
			h: 98
		},
		"normal-outfit-male-45": {
			type: "spritesheet",
			base: r,
			url: "45.png",
			x: 90,
			y: 153,
			w: 79,
			h: 83
		},
		"normal-outfit-male-46": {
			type: "spritesheet",
			base: r,
			url: "46.png",
			x: 84,
			y: 155,
			w: 77,
			h: 80
		},
		"normal-outfit-male-47": {
			type: "spritesheet",
			base: r,
			url: "47.png",
			x: 89,
			y: 149,
			w: 77,
			h: 88
		},
		"normal-outfit-male-48": {
			type: "spritesheet",
			base: r,
			url: "48.png",
			x: 56,
			y: 138,
			w: 110,
			h: 97
		},
		"normal-outfit-male-49": {
			type: "spritesheet",
			base: r,
			url: "49.png",
			x: 87,
			y: 152,
			w: 83,
			h: 81
		},
		"normal-outfit-male-5": {
			type: "spritesheet",
			base: r,
			url: "5.png",
			x: 54,
			y: 141,
			w: 112,
			h: 94
		},
		"normal-outfit-male-50": {
			type: "spritesheet",
			base: r,
			url: "50.png",
			x: 74,
			y: 150,
			w: 107,
			h: 99
		},
		"normal-outfit-male-51": {
			type: "spritesheet",
			base: r,
			url: "51.png",
			x: 71,
			y: 147,
			w: 98,
			h: 87
		},
		"normal-outfit-male-52": {
			type: "spritesheet",
			base: r,
			url: "52.png",
			x: 78,
			y: 139,
			w: 90,
			h: 99
		},
		"normal-outfit-male-53": {
			type: "spritesheet",
			base: r,
			url: "53.png",
			x: 21,
			y: 75,
			w: 145,
			h: 160
		},
		"normal-outfit-male-54": {
			type: "spritesheet",
			base: r,
			url: "54.png",
			x: 51,
			y: 151,
			w: 123,
			h: 84
		},
		"normal-outfit-male-6": {
			type: "spritesheet",
			base: r,
			url: "6.png",
			x: 88,
			y: 139,
			w: 78,
			h: 96
		},
		"normal-outfit-male-7": {
			type: "spritesheet",
			base: r,
			url: "7.png",
			x: 74,
			y: 145,
			w: 92,
			h: 90
		},
		"normal-outfit-male-8": {
			type: "spritesheet",
			base: r,
			url: "8.png",
			x: 83,
			y: 137,
			w: 83,
			h: 98
		},
		"normal-outfit-male-9": {
			type: "spritesheet",
			base: r,
			url: "9.png",
			x: 91,
			y: 154,
			w: 75,
			h: 81
		},
		"reduced-outfit-male-1": {
			type: "spritesheet",
			base: e,
			url: "1.png",
			x: 43,
			y: 82,
			w: 38,
			h: 43
		},
		"reduced-outfit-male-10": {
			type: "spritesheet",
			base: e,
			url: "10.png",
			x: 43,
			y: 72,
			w: 38,
			h: 53
		},
		"reduced-outfit-male-11": {
			type: "spritesheet",
			base: e,
			url: "11.png",
			x: 43,
			y: 82,
			w: 38,
			h: 43
		},
		"reduced-outfit-male-12": {
			type: "spritesheet",
			base: e,
			url: "12.png",
			x: 43,
			y: 80,
			w: 38,
			h: 45
		},
		"reduced-outfit-male-13": {
			type: "spritesheet",
			base: e,
			url: "13.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-14": {
			type: "spritesheet",
			base: e,
			url: "14.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-15": {
			type: "spritesheet",
			base: e,
			url: "15.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-16": {
			type: "spritesheet",
			base: e,
			url: "16.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-17": {
			type: "spritesheet",
			base: e,
			url: "17.png",
			x: 28,
			y: 82,
			w: 60,
			h: 43
		},
		"reduced-outfit-male-18": {
			type: "spritesheet",
			base: e,
			url: "18.png",
			x: 43,
			y: 86,
			w: 38,
			h: 39
		},
		"reduced-outfit-male-19": {
			type: "spritesheet",
			base: e,
			url: "19.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-2": {
			type: "spritesheet",
			base: e,
			url: "2.png",
			x: 32,
			y: 83,
			w: 49,
			h: 42
		},
		"reduced-outfit-male-20": {
			type: "spritesheet",
			base: e,
			url: "20.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-21": {
			type: "spritesheet",
			base: e,
			url: "21.png",
			x: 43,
			y: 86,
			w: 38,
			h: 39
		},
		"reduced-outfit-male-22": {
			type: "spritesheet",
			base: e,
			url: "22.png",
			x: 43,
			y: 84,
			w: 38,
			h: 41
		},
		"reduced-outfit-male-23": {
			type: "spritesheet",
			base: e,
			url: "23.png",
			x: 43,
			y: 84,
			w: 38,
			h: 41
		},
		"reduced-outfit-male-24": {
			type: "spritesheet",
			base: e,
			url: "24.png",
			x: 25,
			y: 78,
			w: 56,
			h: 47
		},
		"reduced-outfit-male-25": {
			type: "spritesheet",
			base: e,
			url: "25.png",
			x: 43,
			y: 84,
			w: 38,
			h: 41
		},
		"reduced-outfit-male-26": {
			type: "spritesheet",
			base: e,
			url: "26.png",
			x: 43,
			y: 84,
			w: 38,
			h: 41
		},
		"reduced-outfit-male-27": {
			type: "spritesheet",
			base: e,
			url: "27.png",
			x: 43,
			y: 78,
			w: 38,
			h: 47
		},
		"reduced-outfit-male-28": {
			type: "spritesheet",
			base: e,
			url: "28.png",
			x: 41,
			y: 85,
			w: 40,
			h: 40
		},
		"reduced-outfit-male-29": {
			type: "spritesheet",
			base: e,
			url: "29.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-3": {
			type: "spritesheet",
			base: e,
			url: "3.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-30": {
			type: "spritesheet",
			base: e,
			url: "30.png",
			x: 43,
			y: 84,
			w: 38,
			h: 41
		},
		"reduced-outfit-male-31": {
			type: "spritesheet",
			base: e,
			url: "31.png",
			x: 33,
			y: 80,
			w: 48,
			h: 45
		},
		"reduced-outfit-male-32": {
			type: "spritesheet",
			base: e,
			url: "32.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-33": {
			type: "spritesheet",
			base: e,
			url: "33.png",
			x: 37,
			y: 82,
			w: 44,
			h: 43
		},
		"reduced-outfit-male-34": {
			type: "spritesheet",
			base: e,
			url: "34.png",
			x: 31,
			y: 77,
			w: 50,
			h: 48
		},
		"reduced-outfit-male-35": {
			type: "spritesheet",
			base: e,
			url: "35.png",
			x: 42,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-36": {
			type: "spritesheet",
			base: e,
			url: "36.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"reduced-outfit-male-37": {
			type: "spritesheet",
			base: e,
			url: "37.png",
			x: 39,
			y: 84,
			w: 44,
			h: 41
		},
		"reduced-outfit-male-38": {
			type: "spritesheet",
			base: e,
			url: "38.png",
			x: 17,
			y: 0,
			w: 78,
			h: 128
		},
		"reduced-outfit-male-39": {
			type: "spritesheet",
			base: e,
			url: "39.png",
			x: 17,
			y: 66,
			w: 79,
			h: 59
		},
		"reduced-outfit-male-4": {
			type: "spritesheet",
			base: e,
			url: "4.png",
			x: 43,
			y: 84,
			w: 38,
			h: 41
		},
		"reduced-outfit-male-40": {
			type: "spritesheet",
			base: e,
			url: "40.png",
			x: 41,
			y: 84,
			w: 42,
			h: 44
		},
		"reduced-outfit-male-41": {
			type: "spritesheet",
			base: e,
			url: "41.png",
			x: 45,
			y: 83,
			w: 38,
			h: 42
		},
		"reduced-outfit-male-42": {
			type: "spritesheet",
			base: e,
			url: "42.png",
			x: 45,
			y: 84,
			w: 37,
			h: 42
		},
		"reduced-outfit-male-43": {
			type: "spritesheet",
			base: e,
			url: "43.png",
			x: 40,
			y: 84,
			w: 52,
			h: 42
		},
		"reduced-outfit-male-44": {
			type: "spritesheet",
			base: e,
			url: "44.png",
			x: 39,
			y: 79,
			w: 48,
			h: 46
		},
		"reduced-outfit-male-45": {
			type: "spritesheet",
			base: e,
			url: "45.png",
			x: 42,
			y: 85,
			w: 43,
			h: 41
		},
		"reduced-outfit-male-46": {
			type: "spritesheet",
			base: e,
			url: "46.png",
			x: 41,
			y: 85,
			w: 38,
			h: 38
		},
		"reduced-outfit-male-47": {
			type: "spritesheet",
			base: e,
			url: "47.png",
			x: 45,
			y: 82,
			w: 38,
			h: 43
		},
		"reduced-outfit-male-48": {
			type: "spritesheet",
			base: e,
			url: "48.png",
			x: 28,
			y: 77,
			w: 55,
			h: 48
		},
		"reduced-outfit-male-49": {
			type: "spritesheet",
			base: e,
			url: "49.png",
			x: 40,
			y: 85,
			w: 44,
			h: 40
		},
		"reduced-outfit-male-5": {
			type: "spritesheet",
			base: e,
			url: "5.png",
			x: 25,
			y: 78,
			w: 56,
			h: 47
		},
		"reduced-outfit-male-50": {
			type: "spritesheet",
			base: e,
			url: "50.png",
			x: 36,
			y: 82,
			w: 53,
			h: 45
		},
		"reduced-outfit-male-51": {
			type: "spritesheet",
			base: e,
			url: "51.png",
			x: 36,
			y: 81,
			w: 49,
			h: 44
		},
		"reduced-outfit-male-52": {
			type: "spritesheet",
			base: e,
			url: "52.png",
			x: 40,
			y: 78,
			w: 45,
			h: 49
		},
		"reduced-outfit-male-53": {
			type: "spritesheet",
			base: e,
			url: "53.png",
			x: 27,
			y: 77,
			w: 56,
			h: 48
		},
		"reduced-outfit-male-54": {
			type: "spritesheet",
			base: e,
			url: "54.png",
			x: 25,
			y: 83,
			w: 63,
			h: 42
		},
		"reduced-outfit-male-6": {
			type: "spritesheet",
			base: e,
			url: "6.png",
			x: 42,
			y: 78,
			w: 39,
			h: 47
		},
		"reduced-outfit-male-7": {
			type: "spritesheet",
			base: e,
			url: "7.png",
			x: 35,
			y: 80,
			w: 46,
			h: 45
		},
		"reduced-outfit-male-8": {
			type: "spritesheet",
			base: e,
			url: "8.png",
			x: 39,
			y: 76,
			w: 42,
			h: 49
		},
		"reduced-outfit-male-9": {
			type: "spritesheet",
			base: e,
			url: "9.png",
			x: 43,
			y: 85,
			w: 38,
			h: 40
		},
		"normal-outfit-female-1": {
			type: "spritesheet",
			base: o,
			url: "1.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-10": {
			type: "spritesheet",
			base: o,
			url: "10.png",
			x: 94,
			y: 129,
			w: 68,
			h: 105
		},
		"normal-outfit-female-11": {
			type: "spritesheet",
			base: o,
			url: "11.png",
			x: 94,
			y: 151,
			w: 68,
			h: 83
		},
		"normal-outfit-female-12": {
			type: "spritesheet",
			base: o,
			url: "12.png",
			x: 94,
			y: 141,
			w: 68,
			h: 93
		},
		"normal-outfit-female-13": {
			type: "spritesheet",
			base: o,
			url: "13.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-14": {
			type: "spritesheet",
			base: o,
			url: "14.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-15": {
			type: "spritesheet",
			base: o,
			url: "15.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-16": {
			type: "spritesheet",
			base: o,
			url: "16.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-17": {
			type: "spritesheet",
			base: o,
			url: "17.png",
			x: 69,
			y: 155,
			w: 104,
			h: 79
		},
		"normal-outfit-female-18": {
			type: "spritesheet",
			base: o,
			url: "18.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-19": {
			type: "spritesheet",
			base: o,
			url: "19.png",
			x: 94,
			y: 154,
			w: 68,
			h: 80
		},
		"normal-outfit-female-2": {
			type: "spritesheet",
			base: o,
			url: "2.png",
			x: 94,
			y: 157,
			w: 68,
			h: 77
		},
		"normal-outfit-female-20": {
			type: "spritesheet",
			base: o,
			url: "20.png",
			x: 94,
			y: 154,
			w: 68,
			h: 80
		},
		"normal-outfit-female-21": {
			type: "spritesheet",
			base: o,
			url: "21.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-22": {
			type: "spritesheet",
			base: o,
			url: "22.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-23": {
			type: "spritesheet",
			base: o,
			url: "23.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-24": {
			type: "spritesheet",
			base: o,
			url: "24.png",
			x: 63,
			y: 145,
			w: 104,
			h: 89
		},
		"normal-outfit-female-25": {
			type: "spritesheet",
			base: o,
			url: "25.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-26": {
			type: "spritesheet",
			base: o,
			url: "26.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-27": {
			type: "spritesheet",
			base: o,
			url: "27.png",
			x: 93,
			y: 140,
			w: 69,
			h: 94
		},
		"normal-outfit-female-28": {
			type: "spritesheet",
			base: o,
			url: "28.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-29": {
			type: "spritesheet",
			base: o,
			url: "29.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-3": {
			type: "spritesheet",
			base: o,
			url: "3.png",
			x: 94,
			y: 157,
			w: 68,
			h: 77
		},
		"normal-outfit-female-30": {
			type: "spritesheet",
			base: o,
			url: "30.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-31": {
			type: "spritesheet",
			base: o,
			url: "31.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-32": {
			type: "spritesheet",
			base: o,
			url: "32.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-33": {
			type: "spritesheet",
			base: o,
			url: "33.png",
			x: 74,
			y: 151,
			w: 88,
			h: 83
		},
		"normal-outfit-female-34": {
			type: "spritesheet",
			base: o,
			url: "34.png",
			x: 66,
			y: 145,
			w: 99,
			h: 89
		},
		"normal-outfit-female-35": {
			type: "spritesheet",
			base: o,
			url: "35.png",
			x: 94,
			y: 154,
			w: 68,
			h: 80
		},
		"normal-outfit-female-36": {
			type: "spritesheet",
			base: o,
			url: "36.png",
			x: 91,
			y: 156,
			w: 72,
			h: 78
		},
		"normal-outfit-female-37": {
			type: "spritesheet",
			base: o,
			url: "37.png",
			x: 72,
			y: 153,
			w: 90,
			h: 81
		},
		"normal-outfit-female-38": {
			type: "spritesheet",
			base: o,
			url: "38.png",
			x: 30,
			y: 34,
			w: 165,
			h: 221
		},
		"normal-outfit-female-39": {
			type: "spritesheet",
			base: o,
			url: "39.png",
			x: 94,
			y: 155,
			w: 68,
			h: 79
		},
		"normal-outfit-female-4": {
			type: "spritesheet",
			base: o,
			url: "4.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-40": {
			type: "spritesheet",
			base: o,
			url: "40.png",
			x: 75,
			y: 155,
			w: 87,
			h: 79
		},
		"normal-outfit-female-41": {
			type: "spritesheet",
			base: o,
			url: "41.png",
			x: 70,
			y: 153,
			w: 92,
			h: 86
		},
		"normal-outfit-female-42": {
			type: "spritesheet",
			base: o,
			url: "42.png",
			x: 94,
			y: 156,
			w: 68,
			h: 78
		},
		"normal-outfit-female-43": {
			type: "spritesheet",
			base: o,
			url: "43.png",
			x: 89,
			y: 151,
			w: 95,
			h: 86
		},
		"normal-outfit-female-44": {
			type: "spritesheet",
			base: o,
			url: "44.png",
			x: 78,
			y: 135,
			w: 95,
			h: 99
		},
		"normal-outfit-female-45": {
			type: "spritesheet",
			base: o,
			url: "45.png",
			x: 94,
			y: 154,
			w: 79,
			h: 82
		},
		"normal-outfit-female-46": {
			type: "spritesheet",
			base: o,
			url: "46.png",
			x: 89,
			y: 156,
			w: 74,
			h: 77
		},
		"normal-outfit-female-47": {
			type: "spritesheet",
			base: o,
			url: "47.png",
			x: 94,
			y: 149,
			w: 68,
			h: 87
		},
		"normal-outfit-female-48": {
			type: "spritesheet",
			base: o,
			url: "48.png",
			x: 64,
			y: 138,
			w: 98,
			h: 96
		},
		"normal-outfit-female-49": {
			type: "spritesheet",
			base: o,
			url: "49.png",
			x: 87,
			y: 152,
			w: 83,
			h: 81
		},
		"normal-outfit-female-5": {
			type: "spritesheet",
			base: o,
			url: "5.png",
			x: 63,
			y: 145,
			w: 104,
			h: 89
		},
		"normal-outfit-female-50": {
			type: "spritesheet",
			base: o,
			url: "50.png",
			x: 89,
			y: 150,
			w: 77,
			h: 84
		},
		"normal-outfit-female-51": {
			type: "spritesheet",
			base: o,
			url: "51.png",
			x: 88,
			y: 147,
			w: 76,
			h: 87
		},
		"normal-outfit-female-52": {
			type: "spritesheet",
			base: o,
			url: "52.png",
			x: 82,
			y: 139,
			w: 83,
			h: 94
		},
		"normal-outfit-female-53": {
			type: "spritesheet",
			base: o,
			url: "53.png",
			x: 76,
			y: 146,
			w: 90,
			h: 88
		},
		"normal-outfit-female-54": {
			type: "spritesheet",
			base: o,
			url: "54.png",
			x: 57,
			y: 154,
			w: 123,
			h: 80
		},
		"normal-outfit-female-6": {
			type: "spritesheet",
			base: o,
			url: "6.png",
			x: 91,
			y: 140,
			w: 71,
			h: 94
		},
		"normal-outfit-female-7": {
			type: "spritesheet",
			base: o,
			url: "7.png",
			x: 75,
			y: 149,
			w: 87,
			h: 85
		},
		"normal-outfit-female-8": {
			type: "spritesheet",
			base: o,
			url: "8.png",
			x: 92,
			y: 137,
			w: 70,
			h: 97
		},
		"normal-outfit-female-9": {
			type: "spritesheet",
			base: o,
			url: "9.png",
			x: 94,
			y: 153,
			w: 68,
			h: 81
		},
		"reduced-outfit-female-1": {
			type: "spritesheet",
			base: t,
			url: "1.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-10": {
			type: "spritesheet",
			base: t,
			url: "10.png",
			x: 44,
			y: 72,
			w: 35,
			h: 53
		},
		"reduced-outfit-female-11": {
			type: "spritesheet",
			base: t,
			url: "11.png",
			x: 44,
			y: 83,
			w: 35,
			h: 42
		},
		"reduced-outfit-female-12": {
			type: "spritesheet",
			base: t,
			url: "12.png",
			x: 44,
			y: 78,
			w: 35,
			h: 47
		},
		"reduced-outfit-female-13": {
			type: "spritesheet",
			base: t,
			url: "13.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-14": {
			type: "spritesheet",
			base: t,
			url: "14.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-15": {
			type: "spritesheet",
			base: t,
			url: "15.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-16": {
			type: "spritesheet",
			base: t,
			url: "16.png",
			x: 44,
			y: 85,
			w: 35,
			h: 40
		},
		"reduced-outfit-female-17": {
			type: "spritesheet",
			base: t,
			url: "17.png",
			x: 32,
			y: 84,
			w: 53,
			h: 41
		},
		"reduced-outfit-female-18": {
			type: "spritesheet",
			base: t,
			url: "18.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-19": {
			type: "spritesheet",
			base: t,
			url: "19.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-2": {
			type: "spritesheet",
			base: t,
			url: "2.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-20": {
			type: "spritesheet",
			base: t,
			url: "20.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-21": {
			type: "spritesheet",
			base: t,
			url: "21.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-22": {
			type: "spritesheet",
			base: t,
			url: "22.png",
			x: 44,
			y: 85,
			w: 35,
			h: 40
		},
		"reduced-outfit-female-23": {
			type: "spritesheet",
			base: t,
			url: "23.png",
			x: 44,
			y: 85,
			w: 35,
			h: 40
		},
		"reduced-outfit-female-24": {
			type: "spritesheet",
			base: t,
			url: "24.png",
			x: 29,
			y: 79,
			w: 51,
			h: 46
		},
		"reduced-outfit-female-25": {
			type: "spritesheet",
			base: t,
			url: "25.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-26": {
			type: "spritesheet",
			base: t,
			url: "26.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-27": {
			type: "spritesheet",
			base: t,
			url: "27.png",
			x: 43,
			y: 77,
			w: 36,
			h: 48
		},
		"reduced-outfit-female-28": {
			type: "spritesheet",
			base: t,
			url: "28.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-29": {
			type: "spritesheet",
			base: t,
			url: "29.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-3": {
			type: "spritesheet",
			base: t,
			url: "3.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-30": {
			type: "spritesheet",
			base: t,
			url: "30.png",
			x: 44,
			y: 85,
			w: 35,
			h: 40
		},
		"reduced-outfit-female-31": {
			type: "spritesheet",
			base: t,
			url: "31.png",
			x: 44,
			y: 85,
			w: 35,
			h: 40
		},
		"reduced-outfit-female-32": {
			type: "spritesheet",
			base: t,
			url: "32.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-33": {
			type: "spritesheet",
			base: t,
			url: "33.png",
			x: 39,
			y: 83,
			w: 40,
			h: 42
		},
		"reduced-outfit-female-34": {
			type: "spritesheet",
			base: t,
			url: "34.png",
			x: 31,
			y: 80,
			w: 48,
			h: 45
		},
		"reduced-outfit-female-35": {
			type: "spritesheet",
			base: t,
			url: "35.png",
			x: 44,
			y: 84,
			w: 35,
			h: 41
		},
		"reduced-outfit-female-36": {
			type: "spritesheet",
			base: t,
			url: "36.png",
			x: 43,
			y: 86,
			w: 36,
			h: 39
		},
		"reduced-outfit-female-37": {
			type: "spritesheet",
			base: t,
			url: "37.png",
			x: 36,
			y: 83,
			w: 45,
			h: 42
		},
		"reduced-outfit-female-38": {
			type: "spritesheet",
			base: t,
			url: "38.png",
			x: 17,
			y: 0,
			w: 78,
			h: 128
		},
		"reduced-outfit-female-39": {
			type: "spritesheet",
			base: t,
			url: "39.png",
			x: 16,
			y: 68,
			w: 79,
			h: 57
		},
		"reduced-outfit-female-4": {
			type: "spritesheet",
			base: t,
			url: "4.png",
			x: 44,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-40": {
			type: "spritesheet",
			base: t,
			url: "40.png",
			x: 41,
			y: 85,
			w: 39,
			h: 43
		},
		"reduced-outfit-female-41": {
			type: "spritesheet",
			base: t,
			url: "41.png",
			x: 45,
			y: 84,
			w: 35,
			h: 41
		},
		"reduced-outfit-female-42": {
			type: "spritesheet",
			base: t,
			url: "42.png",
			x: 45,
			y: 86,
			w: 35,
			h: 39
		},
		"reduced-outfit-female-43": {
			type: "spritesheet",
			base: t,
			url: "43.png",
			x: 40,
			y: 84,
			w: 52,
			h: 42
		},
		"reduced-outfit-female-44": {
			type: "spritesheet",
			base: t,
			url: "44.png",
			x: 37,
			y: 75,
			w: 47,
			h: 50
		},
		"reduced-outfit-female-45": {
			type: "spritesheet",
			base: t,
			url: "45.png",
			x: 42,
			y: 85,
			w: 43,
			h: 41
		},
		"reduced-outfit-female-46": {
			type: "spritesheet",
			base: t,
			url: "46.png",
			x: 43,
			y: 85,
			w: 36,
			h: 36
		},
		"reduced-outfit-female-47": {
			type: "spritesheet",
			base: t,
			url: "47.png",
			x: 45,
			y: 82,
			w: 35,
			h: 43
		},
		"reduced-outfit-female-48": {
			type: "spritesheet",
			base: t,
			url: "48.png",
			x: 31,
			y: 77,
			w: 49,
			h: 48
		},
		"reduced-outfit-female-49": {
			type: "spritesheet",
			base: t,
			url: "49.png",
			x: 40,
			y: 85,
			w: 44,
			h: 40
		},
		"reduced-outfit-female-5": {
			type: "spritesheet",
			base: t,
			url: "5.png",
			x: 29,
			y: 79,
			w: 51,
			h: 46
		},
		"reduced-outfit-female-50": {
			type: "spritesheet",
			base: t,
			url: "50.png",
			x: 39,
			y: 82,
			w: 42,
			h: 44
		},
		"reduced-outfit-female-51": {
			type: "spritesheet",
			base: t,
			url: "51.png",
			x: 44,
			y: 83,
			w: 38,
			h: 41
		},
		"reduced-outfit-female-52": {
			type: "spritesheet",
			base: t,
			url: "52.png",
			x: 41,
			y: 79,
			w: 43,
			h: 45
		},
		"reduced-outfit-female-53": {
			type: "spritesheet",
			base: t,
			url: "53.png",
			x: 38,
			y: 80,
			w: 45,
			h: 44
		},
		"reduced-outfit-female-54": {
			type: "spritesheet",
			base: t,
			url: "54.png",
			x: 25,
			y: 85,
			w: 63,
			h: 39
		},
		"reduced-outfit-female-6": {
			type: "spritesheet",
			base: t,
			url: "6.png",
			x: 43,
			y: 77,
			w: 36,
			h: 48
		},
		"reduced-outfit-female-7": {
			type: "spritesheet",
			base: t,
			url: "7.png",
			x: 38,
			y: 82,
			w: 41,
			h: 43
		},
		"reduced-outfit-female-8": {
			type: "spritesheet",
			base: t,
			url: "8.png",
			x: 40,
			y: 76,
			w: 39,
			h: 49
		},
		"reduced-outfit-female-9": {
			type: "spritesheet",
			base: t,
			url: "9.png",
			x: 44,
			y: 85,
			w: 35,
			h: 40
		},
		"normal-hat-1": {
			type: "spritesheet",
			base: h,
			url: "1.png",
			x: 49,
			y: 39,
			w: 131,
			h: 89
		},
		"normal-hat-10": {
			type: "spritesheet",
			base: h,
			url: "10.png",
			x: 97,
			y: 14,
			w: 75,
			h: 105
		},
		"normal-hat-11": {
			type: "spritesheet",
			base: h,
			url: "11.png",
			x: 11,
			y: 28,
			w: 172,
			h: 139
		},
		"normal-hat-12": {
			type: "spritesheet",
			base: h,
			url: "12.png",
			x: 73,
			y: 64,
			w: 105,
			h: 61
		},
		"normal-hat-13": {
			type: "spritesheet",
			base: h,
			url: "13.png",
			x: 73,
			y: 64,
			w: 105,
			h: 61
		},
		"normal-hat-14": {
			type: "spritesheet",
			base: h,
			url: "14.png",
			x: 73,
			y: 64,
			w: 105,
			h: 61
		},
		"normal-hat-15": {
			type: "spritesheet",
			base: h,
			url: "15.png",
			x: 58,
			y: 38,
			w: 129,
			h: 85
		},
		"normal-hat-16": {
			type: "spritesheet",
			base: h,
			url: "16.png",
			x: 58,
			y: 38,
			w: 129,
			h: 85
		},
		"normal-hat-17": {
			type: "spritesheet",
			base: h,
			url: "17.png",
			x: 71,
			y: 35,
			w: 118,
			h: 89
		},
		"normal-hat-18": {
			type: "spritesheet",
			base: h,
			url: "18.png",
			x: 65,
			y: 40,
			w: 117,
			h: 84
		},
		"normal-hat-19": {
			type: "spritesheet",
			base: h,
			url: "19.png",
			x: 63,
			y: 37,
			w: 132,
			h: 90
		},
		"normal-hat-2": {
			type: "spritesheet",
			base: h,
			url: "2.png",
			x: 85,
			y: 34,
			w: 94,
			h: 93
		},
		"normal-hat-20": {
			type: "spritesheet",
			base: h,
			url: "20.png",
			x: 71,
			y: 35,
			w: 118,
			h: 89
		},
		"normal-hat-21": {
			type: "spritesheet",
			base: h,
			url: "21.png",
			x: 65,
			y: 40,
			w: 117,
			h: 84
		},
		"normal-hat-22": {
			type: "spritesheet",
			base: h,
			url: "22.png",
			x: 60,
			y: 37,
			w: 117,
			h: 85
		},
		"normal-hat-23": {
			type: "spritesheet",
			base: h,
			url: "23.png",
			x: 93,
			y: 52,
			w: 77,
			h: 58
		},
		"normal-hat-24": {
			type: "spritesheet",
			base: h,
			url: "24.png",
			x: 49,
			y: 53,
			w: 137,
			h: 78
		},
		"normal-hat-25": {
			type: "spritesheet",
			base: h,
			url: "25.png",
			x: 85,
			y: 43,
			w: 95,
			h: 82
		},
		"normal-hat-26": {
			type: "spritesheet",
			base: h,
			url: "26.png",
			x: 69,
			y: 25,
			w: 124,
			h: 99
		},
		"normal-hat-27": {
			type: "spritesheet",
			base: h,
			url: "27.png",
			x: 88,
			y: 80,
			w: 67,
			h: 65
		},
		"normal-hat-28": {
			type: "spritesheet",
			base: h,
			url: "28.png",
			x: 77,
			y: 68,
			w: 100,
			h: 89
		},
		"normal-hat-29": {
			type: "spritesheet",
			base: h,
			url: "29.png",
			x: 62,
			y: 49,
			w: 118,
			h: 99
		},
		"normal-hat-3": {
			type: "spritesheet",
			base: h,
			url: "3.png",
			x: 93,
			y: 61,
			w: 77,
			h: 56
		},
		"normal-hat-30": {
			type: "spritesheet",
			base: h,
			url: "30.png",
			x: 66,
			y: 16,
			w: 124,
			h: 144
		},
		"normal-hat-31": {
			type: "spritesheet",
			base: h,
			url: "31.png",
			x: 55,
			y: 31,
			w: 130,
			h: 110
		},
		"normal-hat-32": {
			type: "spritesheet",
			base: h,
			url: "32.png",
			x: 26,
			y: 35,
			w: 154,
			h: 109
		},
		"normal-hat-33": {
			type: "spritesheet",
			base: h,
			url: "33.png",
			x: 72,
			y: 32,
			w: 117,
			h: 96
		},
		"normal-hat-34": {
			type: "spritesheet",
			base: h,
			url: "34.png",
			x: 99,
			y: 49,
			w: 76,
			h: 71
		},
		"normal-hat-35": {
			type: "spritesheet",
			base: h,
			url: "35.png",
			x: 102,
			y: 54,
			w: 75,
			h: 70
		},
		"normal-hat-36": {
			type: "spritesheet",
			base: h,
			url: "36.png",
			x: 65,
			y: 15,
			w: 129,
			h: 113
		},
		"normal-hat-37": {
			type: "spritesheet",
			base: h,
			url: "37.png",
			x: 61,
			y: 37,
			w: 124,
			h: 104
		},
		"normal-hat-38": {
			type: "spritesheet",
			base: h,
			url: "38.png",
			x: 57,
			y: 37,
			w: 125,
			h: 96
		},
		"normal-hat-39": {
			type: "spritesheet",
			base: h,
			url: "39.png",
			x: 72,
			y: 63,
			w: 120,
			h: 109
		},
		"normal-hat-4": {
			type: "spritesheet",
			base: h,
			url: "4.png",
			x: 61,
			y: 49,
			w: 141,
			h: 78
		},
		"normal-hat-40": {
			type: "spritesheet",
			base: h,
			url: "40.png",
			x: 79,
			y: 84,
			w: 96,
			h: 77
		},
		"normal-hat-41": {
			type: "spritesheet",
			base: h,
			url: "41.png",
			x: 73,
			y: 72,
			w: 109,
			h: 107
		},
		"normal-hat-42": {
			type: "spritesheet",
			base: h,
			url: "42.png",
			x: 63,
			y: 61,
			w: 112,
			h: 93
		},
		"normal-hat-43": {
			type: "spritesheet",
			base: h,
			url: "43.png",
			x: 78,
			y: 48,
			w: 106,
			h: 83
		},
		"normal-hat-44": {
			type: "spritesheet",
			base: h,
			url: "44.png",
			x: 68,
			y: 54,
			w: 125,
			h: 75
		},
		"normal-hat-45": {
			type: "spritesheet",
			base: h,
			url: "45.png",
			x: 73,
			y: 32,
			w: 115,
			h: 93
		},
		"normal-hat-46": {
			type: "spritesheet",
			base: h,
			url: "46.png",
			x: 59,
			y: 41,
			w: 130,
			h: 117
		},
		"normal-hat-47": {
			type: "spritesheet",
			base: h,
			url: "47.png",
			x: 84,
			y: 70,
			w: 85,
			h: 80
		},
		"normal-hat-48": {
			type: "spritesheet",
			base: h,
			url: "48.png",
			x: 64,
			y: 34,
			w: 136,
			h: 124
		},
		"normal-hat-49": {
			type: "spritesheet",
			base: h,
			url: "49.png",
			x: 72,
			y: 45,
			w: 110,
			h: 117
		},
		"normal-hat-5": {
			type: "spritesheet",
			base: h,
			url: "5.png",
			x: 61,
			y: 27,
			w: 151,
			h: 107
		},
		"normal-hat-50": {
			type: "spritesheet",
			base: h,
			url: "50.png",
			x: 27,
			y: 67,
			w: 149,
			h: 110
		},
		"normal-hat-51": {
			type: "spritesheet",
			base: h,
			url: "51.png",
			x: 88,
			y: 83,
			w: 91,
			h: 91
		},
		"normal-hat-52": {
			type: "spritesheet",
			base: h,
			url: "52.png",
			x: 104,
			y: 99,
			w: 69,
			h: 69
		},
		"normal-hat-53": {
			type: "spritesheet",
			base: h,
			url: "53.png",
			x: 93,
			y: 69,
			w: 80,
			h: 95
		},
		"normal-hat-54": {
			type: "spritesheet",
			base: h,
			url: "54.png",
			x: 80,
			y: 55,
			w: 97,
			h: 79
		},
		"normal-hat-55": {
			type: "spritesheet",
			base: h,
			url: "55.png",
			x: 56,
			y: 37,
			w: 118,
			h: 110
		},
		"normal-hat-56": {
			type: "spritesheet",
			base: h,
			url: "56.png",
			x: 75,
			y: 35,
			w: 115,
			h: 163
		},
		"normal-hat-57": {
			type: "spritesheet",
			base: h,
			url: "57.png",
			x: 77,
			y: 34,
			w: 102,
			h: 135
		},
		"normal-hat-58": {
			type: "spritesheet",
			base: h,
			url: "58.png",
			x: 79,
			y: 57,
			w: 100,
			h: 139
		},
		"normal-hat-59": {
			type: "spritesheet",
			base: h,
			url: "59.png",
			x: 69,
			y: 70,
			w: 107,
			h: 89
		},
		"normal-hat-6": {
			type: "spritesheet",
			base: h,
			url: "6.png",
			x: 105,
			y: 34,
			w: 64,
			h: 89
		},
		"normal-hat-60": {
			type: "spritesheet",
			base: h,
			url: "60.png",
			x: 39,
			y: 34,
			w: 133,
			h: 124
		},
		"normal-hat-61": {
			type: "spritesheet",
			base: h,
			url: "61.png",
			x: 18,
			y: 40,
			w: 163,
			h: 111
		},
		"normal-hat-62": {
			type: "spritesheet",
			base: h,
			url: "62.png",
			x: 56,
			y: 23,
			w: 122,
			h: 149
		},
		"normal-hat-63": {
			type: "spritesheet",
			base: h,
			url: "63.png",
			x: 60,
			y: 55,
			w: 135,
			h: 92
		},
		"normal-hat-7": {
			type: "spritesheet",
			base: h,
			url: "7.png",
			x: 69,
			y: 35,
			w: 116,
			h: 83
		},
		"normal-hat-8": {
			type: "spritesheet",
			base: h,
			url: "8.png",
			x: 72,
			y: 57,
			w: 97,
			h: 58
		},
		"normal-hat-9": {
			type: "spritesheet",
			base: h,
			url: "9.png",
			x: 62,
			y: 33,
			w: 127,
			h: 95
		},
		"reduced-hat-1": {
			type: "spritesheet",
			base: s,
			url: "1.png",
			x: 23,
			y: 29,
			w: 65,
			h: 45
		},
		"reduced-hat-10": {
			type: "spritesheet",
			base: s,
			url: "10.png",
			x: 48,
			y: 15,
			w: 37,
			h: 52
		},
		"reduced-hat-11": {
			type: "spritesheet",
			base: s,
			url: "11.png",
			x: 7,
			y: 24,
			w: 86,
			h: 67
		},
		"reduced-hat-12": {
			type: "spritesheet",
			base: s,
			url: "12.png",
			x: 35,
			y: 39,
			w: 53,
			h: 31
		},
		"reduced-hat-13": {
			type: "spritesheet",
			base: s,
			url: "13.png",
			x: 35,
			y: 39,
			w: 53,
			h: 31
		},
		"reduced-hat-14": {
			type: "spritesheet",
			base: s,
			url: "14.png",
			x: 35,
			y: 39,
			w: 53,
			h: 31
		},
		"reduced-hat-15": {
			type: "spritesheet",
			base: s,
			url: "15.png",
			x: 26,
			y: 29,
			w: 64,
			h: 42
		},
		"reduced-hat-16": {
			type: "spritesheet",
			base: s,
			url: "16.png",
			x: 26,
			y: 29,
			w: 64,
			h: 42
		},
		"reduced-hat-17": {
			type: "spritesheet",
			base: s,
			url: "17.png",
			x: 33,
			y: 25,
			w: 59,
			h: 45
		},
		"reduced-hat-18": {
			type: "spritesheet",
			base: s,
			url: "18.png",
			x: 28,
			y: 29,
			w: 60,
			h: 42
		},
		"reduced-hat-19": {
			type: "spritesheet",
			base: s,
			url: "19.png",
			x: 24,
			y: 24,
			w: 69,
			h: 46
		},
		"reduced-hat-2": {
			type: "spritesheet",
			base: s,
			url: "2.png",
			x: 40,
			y: 23,
			w: 48,
			h: 48
		},
		"reduced-hat-20": {
			type: "spritesheet",
			base: s,
			url: "20.png",
			x: 33,
			y: 25,
			w: 59,
			h: 45
		},
		"reduced-hat-21": {
			type: "spritesheet",
			base: s,
			url: "21.png",
			x: 28,
			y: 29,
			w: 60,
			h: 42
		},
		"reduced-hat-22": {
			type: "spritesheet",
			base: s,
			url: "22.png",
			x: 28,
			y: 30,
			w: 60,
			h: 42
		},
		"reduced-hat-23": {
			type: "spritesheet",
			base: s,
			url: "23.png",
			x: 44,
			y: 34,
			w: 39,
			h: 27
		},
		"reduced-hat-24": {
			type: "spritesheet",
			base: s,
			url: "24.png",
			x: 21,
			y: 35,
			w: 69,
			h: 40
		},
		"reduced-hat-25": {
			type: "spritesheet",
			base: s,
			url: "25.png",
			x: 39,
			y: 27,
			w: 48,
			h: 41
		},
		"reduced-hat-26": {
			type: "spritesheet",
			base: s,
			url: "26.png",
			x: 32,
			y: 20,
			w: 62,
			h: 49
		},
		"reduced-hat-27": {
			type: "spritesheet",
			base: s,
			url: "27.png",
			x: 42,
			y: 48,
			w: 33,
			h: 32
		},
		"reduced-hat-28": {
			type: "spritesheet",
			base: s,
			url: "28.png",
			x: 36,
			y: 42,
			w: 50,
			h: 45
		},
		"reduced-hat-29": {
			type: "spritesheet",
			base: s,
			url: "29.png",
			x: 29,
			y: 32,
			w: 59,
			h: 49
		},
		"reduced-hat-3": {
			type: "spritesheet",
			base: s,
			url: "3.png",
			x: 44,
			y: 34,
			w: 39,
			h: 27
		},
		"reduced-hat-30": {
			type: "spritesheet",
			base: s,
			url: "30.png",
			x: 31,
			y: 16,
			w: 62,
			h: 72
		},
		"reduced-hat-31": {
			type: "spritesheet",
			base: s,
			url: "31.png",
			x: 25,
			y: 24,
			w: 65,
			h: 55
		},
		"reduced-hat-32": {
			type: "spritesheet",
			base: s,
			url: "32.png",
			x: 9,
			y: 33,
			w: 77,
			h: 50
		},
		"reduced-hat-33": {
			type: "spritesheet",
			base: s,
			url: "33.png",
			x: 32,
			y: 24,
			w: 59,
			h: 48
		},
		"reduced-hat-34": {
			type: "spritesheet",
			base: s,
			url: "34.png",
			x: 48,
			y: 31,
			w: 38,
			h: 33
		},
		"reduced-hat-35": {
			type: "spritesheet",
			base: s,
			url: "35.png",
			x: 46,
			y: 30,
			w: 39,
			h: 35
		},
		"reduced-hat-36": {
			type: "spritesheet",
			base: s,
			url: "36.png",
			x: 29,
			y: 16,
			w: 65,
			h: 57
		},
		"reduced-hat-37": {
			type: "spritesheet",
			base: s,
			url: "37.png",
			x: 26,
			y: 25,
			w: 62,
			h: 52
		},
		"reduced-hat-38": {
			type: "spritesheet",
			base: s,
			url: "38.png",
			x: 25,
			y: 28,
			w: 63,
			h: 49
		},
		"reduced-hat-39": {
			type: "spritesheet",
			base: s,
			url: "39.png",
			x: 33,
			y: 39,
			w: 61,
			h: 55
		},
		"reduced-hat-4": {
			type: "spritesheet",
			base: s,
			url: "4.png",
			x: 28,
			y: 31,
			w: 70,
			h: 40
		},
		"reduced-hat-40": {
			type: "spritesheet",
			base: s,
			url: "40.png",
			x: 37,
			y: 47,
			w: 49,
			h: 39
		},
		"reduced-hat-41": {
			type: "spritesheet",
			base: s,
			url: "41.png",
			x: 36,
			y: 42,
			w: 55,
			h: 54
		},
		"reduced-hat-42": {
			type: "spritesheet",
			base: s,
			url: "42.png",
			x: 31,
			y: 38,
			w: 57,
			h: 47
		},
		"reduced-hat-43": {
			type: "spritesheet",
			base: s,
			url: "43.png",
			x: 37,
			y: 32,
			w: 54,
			h: 43
		},
		"reduced-hat-44": {
			type: "spritesheet",
			base: s,
			url: "44.png",
			x: 32,
			y: 34,
			w: 63,
			h: 39
		},
		"reduced-hat-45": {
			type: "spritesheet",
			base: s,
			url: "45.png",
			x: 35,
			y: 22,
			w: 58,
			h: 48
		},
		"reduced-hat-46": {
			type: "spritesheet",
			base: s,
			url: "46.png",
			x: 29,
			y: 28,
			w: 66,
			h: 59
		},
		"reduced-hat-47": {
			type: "spritesheet",
			base: s,
			url: "47.png",
			x: 41,
			y: 43,
			w: 44,
			h: 39
		},
		"reduced-hat-48": {
			type: "spritesheet",
			base: s,
			url: "48.png",
			x: 31,
			y: 24,
			w: 68,
			h: 63
		},
		"reduced-hat-49": {
			type: "spritesheet",
			base: s,
			url: "49.png",
			x: 34,
			y: 30,
			w: 55,
			h: 58
		},
		"reduced-hat-5": {
			type: "spritesheet",
			base: s,
			url: "5.png",
			x: 29,
			y: 20,
			w: 76,
			h: 56
		},
		"reduced-hat-50": {
			type: "spritesheet",
			base: s,
			url: "50.png",
			x: 10,
			y: 41,
			w: 76,
			h: 56
		},
		"reduced-hat-51": {
			type: "spritesheet",
			base: s,
			url: "51.png",
			x: 43,
			y: 48,
			w: 46,
			h: 46
		},
		"reduced-hat-52": {
			type: "spritesheet",
			base: s,
			url: "52.png",
			x: 50,
			y: 56,
			w: 35,
			h: 35
		},
		"reduced-hat-53": {
			type: "spritesheet",
			base: s,
			url: "53.png",
			x: 46,
			y: 43,
			w: 40,
			h: 48
		},
		"reduced-hat-54": {
			type: "spritesheet",
			base: s,
			url: "54.png",
			x: 37,
			y: 31,
			w: 50,
			h: 40
		},
		"reduced-hat-55": {
			type: "spritesheet",
			base: s,
			url: "55.png",
			x: 25,
			y: 26,
			w: 60,
			h: 56
		},
		"reduced-hat-56": {
			type: "spritesheet",
			base: s,
			url: "56.png",
			x: 34,
			y: 26,
			w: 59,
			h: 81
		},
		"reduced-hat-57": {
			type: "spritesheet",
			base: s,
			url: "57.png",
			x: 38,
			y: 21,
			w: 52,
			h: 69
		},
		"reduced-hat-58": {
			type: "spritesheet",
			base: s,
			url: "58.png",
			x: 39,
			y: 32,
			w: 51,
			h: 71
		},
		"reduced-hat-59": {
			type: "spritesheet",
			base: s,
			url: "59.png",
			x: 33,
			y: 41,
			w: 54,
			h: 45
		},
		"reduced-hat-6": {
			type: "spritesheet",
			base: s,
			url: "6.png",
			x: 50,
			y: 23,
			w: 32,
			h: 44
		},
		"reduced-hat-60": {
			type: "spritesheet",
			base: s,
			url: "60.png",
			x: 16,
			y: 25,
			w: 68,
			h: 62
		},
		"reduced-hat-61": {
			type: "spritesheet",
			base: s,
			url: "61.png",
			x: 9,
			y: 27,
			w: 81,
			h: 56
		},
		"reduced-hat-62": {
			type: "spritesheet",
			base: s,
			url: "62.png",
			x: 27,
			y: 18,
			w: 62,
			h: 74
		},
		"reduced-hat-63": {
			type: "spritesheet",
			base: s,
			url: "63.png",
			x: 26,
			y: 33,
			w: 69,
			h: 47
		},
		"reduced-hat-7": {
			type: "spritesheet",
			base: s,
			url: "7.png",
			x: 31,
			y: 28,
			w: 58,
			h: 41
		},
		"reduced-hat-8": {
			type: "spritesheet",
			base: s,
			url: "8.png",
			x: 32,
			y: 35,
			w: 49,
			h: 29
		},
		"reduced-hat-9": {
			type: "spritesheet",
			base: s,
			url: "9.png",
			x: 27,
			y: 23,
			w: 64,
			h: 49
		},
		"normal-weapon-1": {
			type: "spritesheet",
			base: d,
			url: "1.png",
			x: 137,
			y: 140,
			w: 59,
			h: 53
		},
		"normal-weapon-10": {
			type: "spritesheet",
			base: d,
			url: "10.png",
			x: 142,
			y: 131,
			w: 64,
			h: 64
		},
		"normal-weapon-11": {
			type: "spritesheet",
			base: d,
			url: "11.png",
			x: 139,
			y: 133,
			w: 64,
			h: 65
		},
		"normal-weapon-12": {
			type: "spritesheet",
			base: d,
			url: "12.png",
			x: 140,
			y: 132,
			w: 63,
			h: 66
		},
		"normal-weapon-13": {
			type: "spritesheet",
			base: d,
			url: "13.png",
			x: 140,
			y: 131,
			w: 66,
			h: 66
		},
		"normal-weapon-14": {
			type: "spritesheet",
			base: d,
			url: "14.png",
			x: 142,
			y: 130,
			w: 61,
			h: 65
		},
		"normal-weapon-15": {
			type: "spritesheet",
			base: d,
			url: "15.png",
			x: 143,
			y: 138,
			w: 56,
			h: 56
		},
		"normal-weapon-16": {
			type: "spritesheet",
			base: d,
			url: "16.png",
			x: 131,
			y: 58,
			w: 106,
			h: 169
		},
		"normal-weapon-17": {
			type: "spritesheet",
			base: d,
			url: "17.png",
			x: 130,
			y: 49,
			w: 105,
			h: 177
		},
		"normal-weapon-18": {
			type: "spritesheet",
			base: d,
			url: "18.png",
			x: 129,
			y: 41,
			w: 114,
			h: 182
		},
		"normal-weapon-19": {
			type: "spritesheet",
			base: d,
			url: "19.png",
			x: 126,
			y: 57,
			w: 110,
			h: 172
		},
		"normal-weapon-2": {
			type: "spritesheet",
			base: d,
			url: "2.png",
			x: 143,
			y: 142,
			w: 52,
			h: 52
		},
		"normal-weapon-20": {
			type: "spritesheet",
			base: d,
			url: "20.png",
			x: 119,
			y: 15,
			w: 141,
			h: 217
		},
		"normal-weapon-21": {
			type: "spritesheet",
			base: d,
			url: "21.png",
			x: 127,
			y: 31,
			w: 141,
			h: 196
		},
		"normal-weapon-22": {
			type: "spritesheet",
			base: d,
			url: "22.png",
			x: 120,
			y: 13,
			w: 130,
			h: 216
		},
		"normal-weapon-23": {
			type: "spritesheet",
			base: d,
			url: "23.png",
			x: 129,
			y: 32,
			w: 149,
			h: 192
		},
		"normal-weapon-24": {
			type: "spritesheet",
			base: d,
			url: "24.png",
			x: 123,
			y: 37,
			w: 141,
			h: 192
		},
		"normal-weapon-25": {
			type: "spritesheet",
			base: d,
			url: "25.png",
			x: 144,
			y: 142,
			w: 51,
			h: 52
		},
		"normal-weapon-26": {
			type: "spritesheet",
			base: d,
			url: "26.png",
			x: 144,
			y: 142,
			w: 51,
			h: 52
		},
		"normal-weapon-27": {
			type: "spritesheet",
			base: d,
			url: "27.png",
			x: 148,
			y: 137,
			w: 52,
			h: 52
		},
		"normal-weapon-28": {
			type: "spritesheet",
			base: d,
			url: "28.png",
			x: 148,
			y: 137,
			w: 52,
			h: 52
		},
		"normal-weapon-29": {
			type: "spritesheet",
			base: d,
			url: "29.png",
			x: 148,
			y: 137,
			w: 52,
			h: 52
		},
		"normal-weapon-3": {
			type: "spritesheet",
			base: d,
			url: "3.png",
			x: 141,
			y: 136,
			w: 62,
			h: 59
		},
		"normal-weapon-30": {
			type: "spritesheet",
			base: d,
			url: "30.png",
			x: 144,
			y: 131,
			w: 61,
			h: 62
		},
		"normal-weapon-31": {
			type: "spritesheet",
			base: d,
			url: "31.png",
			x: 144,
			y: 129,
			w: 64,
			h: 64
		},
		"normal-weapon-32": {
			type: "spritesheet",
			base: d,
			url: "32.png",
			x: 144,
			y: 131,
			w: 61,
			h: 62
		},
		"normal-weapon-33": {
			type: "spritesheet",
			base: d,
			url: "33.png",
			x: 144,
			y: 129,
			w: 64,
			h: 64
		},
		"normal-weapon-34": {
			type: "spritesheet",
			base: d,
			url: "34.png",
			x: 142,
			y: 125,
			w: 71,
			h: 70
		},
		"normal-weapon-35": {
			type: "spritesheet",
			base: d,
			url: "35.png",
			x: 142,
			y: 125,
			w: 71,
			h: 70
		},
		"normal-weapon-36": {
			type: "spritesheet",
			base: d,
			url: "36.png",
			x: 133,
			y: 90,
			w: 86,
			h: 128
		},
		"normal-weapon-37": {
			type: "spritesheet",
			base: d,
			url: "37.png",
			x: 133,
			y: 90,
			w: 86,
			h: 128
		},
		"normal-weapon-38": {
			type: "spritesheet",
			base: d,
			url: "38.png",
			x: 127,
			y: 68,
			w: 112,
			h: 159
		},
		"normal-weapon-39": {
			type: "spritesheet",
			base: d,
			url: "39.png",
			x: 127,
			y: 68,
			w: 112,
			h: 159
		},
		"normal-weapon-4": {
			type: "spritesheet",
			base: d,
			url: "4.png",
			x: 144,
			y: 140,
			w: 53,
			h: 55
		},
		"normal-weapon-40": {
			type: "spritesheet",
			base: d,
			url: "40.png",
			x: 127,
			y: 68,
			w: 112,
			h: 159
		},
		"normal-weapon-41": {
			type: "spritesheet",
			base: d,
			url: "41.png",
			x: 127,
			y: 51,
			w: 108,
			h: 173
		},
		"normal-weapon-42": {
			type: "spritesheet",
			base: d,
			url: "42.png",
			x: 129,
			y: 48,
			w: 119,
			h: 179
		},
		"normal-weapon-43": {
			type: "spritesheet",
			base: d,
			url: "43.png",
			x: 127,
			y: 51,
			w: 108,
			h: 173
		},
		"normal-weapon-44": {
			type: "spritesheet",
			base: d,
			url: "44.png",
			x: 129,
			y: 48,
			w: 119,
			h: 179
		},
		"normal-weapon-45": {
			type: "spritesheet",
			base: d,
			url: "45.png",
			x: 128,
			y: 31,
			w: 113,
			h: 196
		},
		"normal-weapon-46": {
			type: "spritesheet",
			base: d,
			url: "46.png",
			x: 128,
			y: 31,
			w: 113,
			h: 196
		},
		"normal-weapon-47": {
			type: "spritesheet",
			base: d,
			url: "47.png",
			x: 131,
			y: 58,
			w: 106,
			h: 169
		},
		"normal-weapon-48": {
			type: "spritesheet",
			base: d,
			url: "48.png",
			x: 140,
			y: 143,
			w: 54,
			h: 53
		},
		"normal-weapon-49": {
			type: "spritesheet",
			base: d,
			url: "49.png",
			x: 141,
			y: 126,
			w: 70,
			h: 70
		},
		"normal-weapon-5": {
			type: "spritesheet",
			base: d,
			url: "5.png",
			x: 139,
			y: 128,
			w: 54,
			h: 69
		},
		"normal-weapon-50": {
			type: "spritesheet",
			base: d,
			url: "50.png",
			x: 141,
			y: 134,
			w: 62,
			h: 63
		},
		"normal-weapon-51": {
			type: "spritesheet",
			base: d,
			url: "51.png",
			x: 139,
			y: 137,
			w: 62,
			h: 62
		},
		"normal-weapon-52": {
			type: "spritesheet",
			base: d,
			url: "52.png",
			x: 139,
			y: 133,
			w: 66,
			h: 65
		},
		"normal-weapon-53": {
			type: "spritesheet",
			base: d,
			url: "53.png",
			x: 138,
			y: 127,
			w: 72,
			h: 72
		},
		"normal-weapon-54": {
			type: "spritesheet",
			base: d,
			url: "54.png",
			x: 142,
			y: 130,
			w: 63,
			h: 67
		},
		"normal-weapon-55": {
			type: "spritesheet",
			base: d,
			url: "55.png",
			x: 129,
			y: 50,
			w: 108,
			h: 175
		},
		"normal-weapon-56": {
			type: "spritesheet",
			base: d,
			url: "56.png",
			x: 126,
			y: 56,
			w: 115,
			h: 171
		},
		"normal-weapon-57": {
			type: "spritesheet",
			base: d,
			url: "57.png",
			x: 129,
			y: 52,
			w: 109,
			h: 174
		},
		"normal-weapon-58": {
			type: "spritesheet",
			base: d,
			url: "58.png",
			x: 128,
			y: 30,
			w: 124,
			h: 198
		},
		"normal-weapon-59": {
			type: "spritesheet",
			base: d,
			url: "59.png",
			x: 128,
			y: 46,
			w: 113,
			h: 184
		},
		"normal-weapon-6": {
			type: "spritesheet",
			base: d,
			url: "6.png",
			x: 141,
			y: 127,
			w: 64,
			h: 70
		},
		"normal-weapon-60": {
			type: "spritesheet",
			base: d,
			url: "60.png",
			x: 123,
			y: 16,
			w: 129,
			h: 210
		},
		"normal-weapon-61": {
			type: "spritesheet",
			base: d,
			url: "61.png",
			x: 132,
			y: 33,
			w: 103,
			h: 190
		},
		"normal-weapon-62": {
			type: "spritesheet",
			base: d,
			url: "62.png",
			x: 128,
			y: 26,
			w: 127,
			h: 198
		},
		"normal-weapon-63": {
			type: "spritesheet",
			base: d,
			url: "63.png",
			x: 127,
			y: 43,
			w: 118,
			h: 183
		},
		"normal-weapon-64": {
			type: "spritesheet",
			base: d,
			url: "64.png",
			x: 128,
			y: 28,
			w: 122,
			h: 199
		},
		"normal-weapon-65": {
			type: "spritesheet",
			base: d,
			url: "65.png",
			x: 80,
			y: 109,
			w: 48,
			h: 68
		},
		"normal-weapon-66": {
			type: "spritesheet",
			base: d,
			url: "66.png",
			x: 83,
			y: 143,
			w: 107,
			h: 75
		},
		"normal-weapon-67": {
			type: "spritesheet",
			base: d,
			url: "67.png",
			x: 152,
			y: 116,
			w: 55,
			h: 74
		},
		"normal-weapon-68": {
			type: "spritesheet",
			base: d,
			url: "68.png",
			x: 121,
			y: 3,
			w: 144,
			h: 223
		},
		"normal-weapon-69": {
			type: "spritesheet",
			base: d,
			url: "69.png",
			x: 141,
			y: 124,
			w: 55,
			h: 73
		},
		"normal-weapon-7": {
			type: "spritesheet",
			base: d,
			url: "7.png",
			x: 130,
			y: 53,
			w: 108,
			h: 173
		},
		"normal-weapon-70": {
			type: "spritesheet",
			base: d,
			url: "70.png",
			x: 78,
			y: 120,
			w: 66,
			h: 75
		},
		"normal-weapon-71": {
			type: "spritesheet",
			base: d,
			url: "71.png",
			x: 150,
			y: 131,
			w: 59,
			h: 59
		},
		"normal-weapon-72": {
			type: "spritesheet",
			base: d,
			url: "72.png",
			x: 156,
			y: 143,
			w: 47,
			h: 50
		},
		"normal-weapon-73": {
			type: "spritesheet",
			base: d,
			url: "73.png",
			x: 150,
			y: 119,
			w: 70,
			h: 72
		},
		"normal-weapon-74": {
			type: "spritesheet",
			base: d,
			url: "74.png",
			x: 150,
			y: 139,
			w: 48,
			h: 52
		},
		"normal-weapon-75": {
			type: "spritesheet",
			base: d,
			url: "75.png",
			x: 92,
			y: 150,
			w: 157,
			h: 59
		},
		"normal-weapon-76": {
			type: "spritesheet",
			base: d,
			url: "76.png",
			x: 172,
			y: 131,
			w: 50,
			h: 50
		},
		"normal-weapon-77": {
			type: "spritesheet",
			base: d,
			url: "77.png",
			x: 128,
			y: 6,
			w: 112,
			h: 210
		},
		"normal-weapon-78": {
			type: "spritesheet",
			base: d,
			url: "78.png",
			x: 98,
			y: 113,
			w: 139,
			h: 88
		},
		"normal-weapon-79": {
			type: "spritesheet",
			base: d,
			url: "79.png",
			x: 128,
			y: 99,
			w: 85,
			h: 117
		},
		"normal-weapon-8": {
			type: "spritesheet",
			base: d,
			url: "8.png",
			x: 131,
			y: 61,
			w: 104,
			h: 162
		},
		"normal-weapon-9": {
			type: "spritesheet",
			base: d,
			url: "9.png",
			x: 142,
			y: 136,
			w: 59,
			h: 59
		},
		"normal-hair-male-1-1": {
			type: "spritesheet",
			base: n,
			url: "1-1.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-10": {
			type: "spritesheet",
			base: n,
			url: "1-10.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-11": {
			type: "spritesheet",
			base: n,
			url: "1-11.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-12": {
			type: "spritesheet",
			base: n,
			url: "1-12.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-13": {
			type: "spritesheet",
			base: n,
			url: "1-13.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-14": {
			type: "spritesheet",
			base: n,
			url: "1-14.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-15": {
			type: "spritesheet",
			base: n,
			url: "1-15.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-16": {
			type: "spritesheet",
			base: n,
			url: "1-16.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-2": {
			type: "spritesheet",
			base: n,
			url: "1-2.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-3": {
			type: "spritesheet",
			base: n,
			url: "1-3.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-4": {
			type: "spritesheet",
			base: n,
			url: "1-4.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-5": {
			type: "spritesheet",
			base: n,
			url: "1-5.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-6": {
			type: "spritesheet",
			base: n,
			url: "1-6.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-7": {
			type: "spritesheet",
			base: n,
			url: "1-7.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-8": {
			type: "spritesheet",
			base: n,
			url: "1-8.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-1-9": {
			type: "spritesheet",
			base: n,
			url: "1-9.png",
			x: 88,
			y: 74,
			w: 90,
			h: 75
		},
		"normal-hair-male-2-1": {
			type: "spritesheet",
			base: n,
			url: "2-1.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-10": {
			type: "spritesheet",
			base: n,
			url: "2-10.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-11": {
			type: "spritesheet",
			base: n,
			url: "2-11.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-12": {
			type: "spritesheet",
			base: n,
			url: "2-12.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-13": {
			type: "spritesheet",
			base: n,
			url: "2-13.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-14": {
			type: "spritesheet",
			base: n,
			url: "2-14.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-15": {
			type: "spritesheet",
			base: n,
			url: "2-15.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-16": {
			type: "spritesheet",
			base: n,
			url: "2-16.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-2": {
			type: "spritesheet",
			base: n,
			url: "2-2.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-3": {
			type: "spritesheet",
			base: n,
			url: "2-3.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-4": {
			type: "spritesheet",
			base: n,
			url: "2-4.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-5": {
			type: "spritesheet",
			base: n,
			url: "2-5.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-6": {
			type: "spritesheet",
			base: n,
			url: "2-6.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-7": {
			type: "spritesheet",
			base: n,
			url: "2-7.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-8": {
			type: "spritesheet",
			base: n,
			url: "2-8.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-2-9": {
			type: "spritesheet",
			base: n,
			url: "2-9.png",
			x: 87,
			y: 51,
			w: 94,
			h: 101
		},
		"normal-hair-male-3-1": {
			type: "spritesheet",
			base: n,
			url: "3-1.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-10": {
			type: "spritesheet",
			base: n,
			url: "3-10.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-11": {
			type: "spritesheet",
			base: n,
			url: "3-11.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-12": {
			type: "spritesheet",
			base: n,
			url: "3-12.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-13": {
			type: "spritesheet",
			base: n,
			url: "3-13.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-14": {
			type: "spritesheet",
			base: n,
			url: "3-14.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-15": {
			type: "spritesheet",
			base: n,
			url: "3-15.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-16": {
			type: "spritesheet",
			base: n,
			url: "3-16.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-2": {
			type: "spritesheet",
			base: n,
			url: "3-2.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-3": {
			type: "spritesheet",
			base: n,
			url: "3-3.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-4": {
			type: "spritesheet",
			base: n,
			url: "3-4.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-5": {
			type: "spritesheet",
			base: n,
			url: "3-5.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-6": {
			type: "spritesheet",
			base: n,
			url: "3-6.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-7": {
			type: "spritesheet",
			base: n,
			url: "3-7.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-8": {
			type: "spritesheet",
			base: n,
			url: "3-8.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-3-9": {
			type: "spritesheet",
			base: n,
			url: "3-9.png",
			x: 86,
			y: 55,
			w: 100,
			h: 97
		},
		"normal-hair-male-4-1": {
			type: "spritesheet",
			base: n,
			url: "4-1.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-10": {
			type: "spritesheet",
			base: n,
			url: "4-10.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-11": {
			type: "spritesheet",
			base: n,
			url: "4-11.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-12": {
			type: "spritesheet",
			base: n,
			url: "4-12.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-13": {
			type: "spritesheet",
			base: n,
			url: "4-13.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-14": {
			type: "spritesheet",
			base: n,
			url: "4-14.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-15": {
			type: "spritesheet",
			base: n,
			url: "4-15.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-16": {
			type: "spritesheet",
			base: n,
			url: "4-16.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-2": {
			type: "spritesheet",
			base: n,
			url: "4-2.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-3": {
			type: "spritesheet",
			base: n,
			url: "4-3.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-4": {
			type: "spritesheet",
			base: n,
			url: "4-4.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-5": {
			type: "spritesheet",
			base: n,
			url: "4-5.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-6": {
			type: "spritesheet",
			base: n,
			url: "4-6.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-7": {
			type: "spritesheet",
			base: n,
			url: "4-7.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-8": {
			type: "spritesheet",
			base: n,
			url: "4-8.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-4-9": {
			type: "spritesheet",
			base: n,
			url: "4-9.png",
			x: 86,
			y: 73,
			w: 92,
			h: 77
		},
		"normal-hair-male-5-1": {
			type: "spritesheet",
			base: n,
			url: "5-1.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-10": {
			type: "spritesheet",
			base: n,
			url: "5-10.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-11": {
			type: "spritesheet",
			base: n,
			url: "5-11.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-12": {
			type: "spritesheet",
			base: n,
			url: "5-12.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-13": {
			type: "spritesheet",
			base: n,
			url: "5-13.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-14": {
			type: "spritesheet",
			base: n,
			url: "5-14.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-15": {
			type: "spritesheet",
			base: n,
			url: "5-15.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-16": {
			type: "spritesheet",
			base: n,
			url: "5-16.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-2": {
			type: "spritesheet",
			base: n,
			url: "5-2.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-3": {
			type: "spritesheet",
			base: n,
			url: "5-3.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-4": {
			type: "spritesheet",
			base: n,
			url: "5-4.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-5": {
			type: "spritesheet",
			base: n,
			url: "5-5.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-6": {
			type: "spritesheet",
			base: n,
			url: "5-6.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-7": {
			type: "spritesheet",
			base: n,
			url: "5-7.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-8": {
			type: "spritesheet",
			base: n,
			url: "5-8.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-5-9": {
			type: "spritesheet",
			base: n,
			url: "5-9.png",
			x: 89,
			y: 75,
			w: 87,
			h: 76
		},
		"normal-hair-male-6-1": {
			type: "spritesheet",
			base: n,
			url: "6-1.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-10": {
			type: "spritesheet",
			base: n,
			url: "6-10.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-11": {
			type: "spritesheet",
			base: n,
			url: "6-11.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-12": {
			type: "spritesheet",
			base: n,
			url: "6-12.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-13": {
			type: "spritesheet",
			base: n,
			url: "6-13.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-14": {
			type: "spritesheet",
			base: n,
			url: "6-14.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-15": {
			type: "spritesheet",
			base: n,
			url: "6-15.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-16": {
			type: "spritesheet",
			base: n,
			url: "6-16.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-2": {
			type: "spritesheet",
			base: n,
			url: "6-2.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-3": {
			type: "spritesheet",
			base: n,
			url: "6-3.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-4": {
			type: "spritesheet",
			base: n,
			url: "6-4.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-5": {
			type: "spritesheet",
			base: n,
			url: "6-5.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-6": {
			type: "spritesheet",
			base: n,
			url: "6-6.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-7": {
			type: "spritesheet",
			base: n,
			url: "6-7.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-8": {
			type: "spritesheet",
			base: n,
			url: "6-8.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-6-9": {
			type: "spritesheet",
			base: n,
			url: "6-9.png",
			x: 87,
			y: 75,
			w: 85,
			h: 76
		},
		"normal-hair-male-7-1": {
			type: "spritesheet",
			base: n,
			url: "7-1.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-10": {
			type: "spritesheet",
			base: n,
			url: "7-10.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-11": {
			type: "spritesheet",
			base: n,
			url: "7-11.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-12": {
			type: "spritesheet",
			base: n,
			url: "7-12.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-13": {
			type: "spritesheet",
			base: n,
			url: "7-13.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-14": {
			type: "spritesheet",
			base: n,
			url: "7-14.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-15": {
			type: "spritesheet",
			base: n,
			url: "7-15.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-16": {
			type: "spritesheet",
			base: n,
			url: "7-16.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-2": {
			type: "spritesheet",
			base: n,
			url: "7-2.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-3": {
			type: "spritesheet",
			base: n,
			url: "7-3.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-4": {
			type: "spritesheet",
			base: n,
			url: "7-4.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-5": {
			type: "spritesheet",
			base: n,
			url: "7-5.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-6": {
			type: "spritesheet",
			base: n,
			url: "7-6.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-7": {
			type: "spritesheet",
			base: n,
			url: "7-7.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-8": {
			type: "spritesheet",
			base: n,
			url: "7-8.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-7-9": {
			type: "spritesheet",
			base: n,
			url: "7-9.png",
			x: 76,
			y: 73,
			w: 105,
			h: 78
		},
		"normal-hair-male-8-1": {
			type: "spritesheet",
			base: n,
			url: "8-1.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-10": {
			type: "spritesheet",
			base: n,
			url: "8-10.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-11": {
			type: "spritesheet",
			base: n,
			url: "8-11.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-12": {
			type: "spritesheet",
			base: n,
			url: "8-12.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-13": {
			type: "spritesheet",
			base: n,
			url: "8-13.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-14": {
			type: "spritesheet",
			base: n,
			url: "8-14.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-15": {
			type: "spritesheet",
			base: n,
			url: "8-15.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-16": {
			type: "spritesheet",
			base: n,
			url: "8-16.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-2": {
			type: "spritesheet",
			base: n,
			url: "8-2.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-3": {
			type: "spritesheet",
			base: n,
			url: "8-3.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-4": {
			type: "spritesheet",
			base: n,
			url: "8-4.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-5": {
			type: "spritesheet",
			base: n,
			url: "8-5.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-6": {
			type: "spritesheet",
			base: n,
			url: "8-6.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-7": {
			type: "spritesheet",
			base: n,
			url: "8-7.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-8": {
			type: "spritesheet",
			base: n,
			url: "8-8.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"normal-hair-male-8-9": {
			type: "spritesheet",
			base: n,
			url: "8-9.png",
			x: 82,
			y: 73,
			w: 104,
			h: 81
		},
		"reduced-hair-male-1-1": {
			type: "spritesheet",
			base: i,
			url: "1-1.png",
			x: 41,
			y: 45,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-10": {
			type: "spritesheet",
			base: i,
			url: "1-10.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-11": {
			type: "spritesheet",
			base: i,
			url: "1-11.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-12": {
			type: "spritesheet",
			base: i,
			url: "1-12.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-13": {
			type: "spritesheet",
			base: i,
			url: "1-13.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-14": {
			type: "spritesheet",
			base: i,
			url: "1-14.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-15": {
			type: "spritesheet",
			base: i,
			url: "1-15.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-16": {
			type: "spritesheet",
			base: i,
			url: "1-16.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-2": {
			type: "spritesheet",
			base: i,
			url: "1-2.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-3": {
			type: "spritesheet",
			base: i,
			url: "1-3.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-4": {
			type: "spritesheet",
			base: i,
			url: "1-4.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-5": {
			type: "spritesheet",
			base: i,
			url: "1-5.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-6": {
			type: "spritesheet",
			base: i,
			url: "1-6.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-7": {
			type: "spritesheet",
			base: i,
			url: "1-7.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-8": {
			type: "spritesheet",
			base: i,
			url: "1-8.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-1-9": {
			type: "spritesheet",
			base: i,
			url: "1-9.png",
			x: 41,
			y: 44,
			w: 46,
			h: 38
		},
		"reduced-hair-male-2-1": {
			type: "spritesheet",
			base: i,
			url: "2-1.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-10": {
			type: "spritesheet",
			base: i,
			url: "2-10.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-11": {
			type: "spritesheet",
			base: i,
			url: "2-11.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-12": {
			type: "spritesheet",
			base: i,
			url: "2-12.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-13": {
			type: "spritesheet",
			base: i,
			url: "2-13.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-14": {
			type: "spritesheet",
			base: i,
			url: "2-14.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-15": {
			type: "spritesheet",
			base: i,
			url: "2-15.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-16": {
			type: "spritesheet",
			base: i,
			url: "2-16.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-2": {
			type: "spritesheet",
			base: i,
			url: "2-2.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-3": {
			type: "spritesheet",
			base: i,
			url: "2-3.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-4": {
			type: "spritesheet",
			base: i,
			url: "2-4.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-5": {
			type: "spritesheet",
			base: i,
			url: "2-5.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-6": {
			type: "spritesheet",
			base: i,
			url: "2-6.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-7": {
			type: "spritesheet",
			base: i,
			url: "2-7.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-8": {
			type: "spritesheet",
			base: i,
			url: "2-8.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-2-9": {
			type: "spritesheet",
			base: i,
			url: "2-9.png",
			x: 41,
			y: 32,
			w: 47,
			h: 52
		},
		"reduced-hair-male-3-1": {
			type: "spritesheet",
			base: i,
			url: "3-1.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-10": {
			type: "spritesheet",
			base: i,
			url: "3-10.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-11": {
			type: "spritesheet",
			base: i,
			url: "3-11.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-12": {
			type: "spritesheet",
			base: i,
			url: "3-12.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-13": {
			type: "spritesheet",
			base: i,
			url: "3-13.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-14": {
			type: "spritesheet",
			base: i,
			url: "3-14.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-15": {
			type: "spritesheet",
			base: i,
			url: "3-15.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-16": {
			type: "spritesheet",
			base: i,
			url: "3-16.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-2": {
			type: "spritesheet",
			base: i,
			url: "3-2.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-3": {
			type: "spritesheet",
			base: i,
			url: "3-3.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-4": {
			type: "spritesheet",
			base: i,
			url: "3-4.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-5": {
			type: "spritesheet",
			base: i,
			url: "3-5.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-6": {
			type: "spritesheet",
			base: i,
			url: "3-6.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-7": {
			type: "spritesheet",
			base: i,
			url: "3-7.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-8": {
			type: "spritesheet",
			base: i,
			url: "3-8.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-3-9": {
			type: "spritesheet",
			base: i,
			url: "3-9.png",
			x: 41,
			y: 36,
			w: 50,
			h: 48
		},
		"reduced-hair-male-4-1": {
			type: "spritesheet",
			base: i,
			url: "4-1.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-10": {
			type: "spritesheet",
			base: i,
			url: "4-10.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-11": {
			type: "spritesheet",
			base: i,
			url: "4-11.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-12": {
			type: "spritesheet",
			base: i,
			url: "4-12.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-13": {
			type: "spritesheet",
			base: i,
			url: "4-13.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-14": {
			type: "spritesheet",
			base: i,
			url: "4-14.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-15": {
			type: "spritesheet",
			base: i,
			url: "4-15.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-16": {
			type: "spritesheet",
			base: i,
			url: "4-16.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-2": {
			type: "spritesheet",
			base: i,
			url: "4-2.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-3": {
			type: "spritesheet",
			base: i,
			url: "4-3.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-4": {
			type: "spritesheet",
			base: i,
			url: "4-4.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-5": {
			type: "spritesheet",
			base: i,
			url: "4-5.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-6": {
			type: "spritesheet",
			base: i,
			url: "4-6.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-7": {
			type: "spritesheet",
			base: i,
			url: "4-7.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-8": {
			type: "spritesheet",
			base: i,
			url: "4-8.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-4-9": {
			type: "spritesheet",
			base: i,
			url: "4-9.png",
			x: 40,
			y: 44,
			w: 47,
			h: 39
		},
		"reduced-hair-male-5-1": {
			type: "spritesheet",
			base: i,
			url: "5-1.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-10": {
			type: "spritesheet",
			base: i,
			url: "5-10.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-11": {
			type: "spritesheet",
			base: i,
			url: "5-11.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-12": {
			type: "spritesheet",
			base: i,
			url: "5-12.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-13": {
			type: "spritesheet",
			base: i,
			url: "5-13.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-14": {
			type: "spritesheet",
			base: i,
			url: "5-14.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-15": {
			type: "spritesheet",
			base: i,
			url: "5-15.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-16": {
			type: "spritesheet",
			base: i,
			url: "5-16.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-2": {
			type: "spritesheet",
			base: i,
			url: "5-2.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-3": {
			type: "spritesheet",
			base: i,
			url: "5-3.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-4": {
			type: "spritesheet",
			base: i,
			url: "5-4.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-5": {
			type: "spritesheet",
			base: i,
			url: "5-5.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-6": {
			type: "spritesheet",
			base: i,
			url: "5-6.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-7": {
			type: "spritesheet",
			base: i,
			url: "5-7.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-8": {
			type: "spritesheet",
			base: i,
			url: "5-8.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-5-9": {
			type: "spritesheet",
			base: i,
			url: "5-9.png",
			x: 42,
			y: 44,
			w: 44,
			h: 39
		},
		"reduced-hair-male-6-1": {
			type: "spritesheet",
			base: i,
			url: "6-1.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-10": {
			type: "spritesheet",
			base: i,
			url: "6-10.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-11": {
			type: "spritesheet",
			base: i,
			url: "6-11.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-12": {
			type: "spritesheet",
			base: i,
			url: "6-12.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-13": {
			type: "spritesheet",
			base: i,
			url: "6-13.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-14": {
			type: "spritesheet",
			base: i,
			url: "6-14.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-15": {
			type: "spritesheet",
			base: i,
			url: "6-15.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-16": {
			type: "spritesheet",
			base: i,
			url: "6-16.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-2": {
			type: "spritesheet",
			base: i,
			url: "6-2.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-3": {
			type: "spritesheet",
			base: i,
			url: "6-3.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-4": {
			type: "spritesheet",
			base: i,
			url: "6-4.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-5": {
			type: "spritesheet",
			base: i,
			url: "6-5.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-6": {
			type: "spritesheet",
			base: i,
			url: "6-6.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-7": {
			type: "spritesheet",
			base: i,
			url: "6-7.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-8": {
			type: "spritesheet",
			base: i,
			url: "6-8.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-6-9": {
			type: "spritesheet",
			base: i,
			url: "6-9.png",
			x: 41,
			y: 44,
			w: 45,
			h: 38
		},
		"reduced-hair-male-7-1": {
			type: "spritesheet",
			base: i,
			url: "7-1.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-10": {
			type: "spritesheet",
			base: i,
			url: "7-10.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-11": {
			type: "spritesheet",
			base: i,
			url: "7-11.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-12": {
			type: "spritesheet",
			base: i,
			url: "7-12.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-13": {
			type: "spritesheet",
			base: i,
			url: "7-13.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-14": {
			type: "spritesheet",
			base: i,
			url: "7-14.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-15": {
			type: "spritesheet",
			base: i,
			url: "7-15.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-16": {
			type: "spritesheet",
			base: i,
			url: "7-16.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-2": {
			type: "spritesheet",
			base: i,
			url: "7-2.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-3": {
			type: "spritesheet",
			base: i,
			url: "7-3.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-4": {
			type: "spritesheet",
			base: i,
			url: "7-4.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-5": {
			type: "spritesheet",
			base: i,
			url: "7-5.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-6": {
			type: "spritesheet",
			base: i,
			url: "7-6.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-7": {
			type: "spritesheet",
			base: i,
			url: "7-7.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-8": {
			type: "spritesheet",
			base: i,
			url: "7-8.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-7-9": {
			type: "spritesheet",
			base: i,
			url: "7-9.png",
			x: 36,
			y: 44,
			w: 53,
			h: 38
		},
		"reduced-hair-male-8-1": {
			type: "spritesheet",
			base: i,
			url: "8-1.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-10": {
			type: "spritesheet",
			base: i,
			url: "8-10.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-11": {
			type: "spritesheet",
			base: i,
			url: "8-11.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-12": {
			type: "spritesheet",
			base: i,
			url: "8-12.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-13": {
			type: "spritesheet",
			base: i,
			url: "8-13.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-14": {
			type: "spritesheet",
			base: i,
			url: "8-14.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-15": {
			type: "spritesheet",
			base: i,
			url: "8-15.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-16": {
			type: "spritesheet",
			base: i,
			url: "8-16.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-2": {
			type: "spritesheet",
			base: i,
			url: "8-2.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-3": {
			type: "spritesheet",
			base: i,
			url: "8-3.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-4": {
			type: "spritesheet",
			base: i,
			url: "8-4.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-5": {
			type: "spritesheet",
			base: i,
			url: "8-5.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-6": {
			type: "spritesheet",
			base: i,
			url: "8-6.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-7": {
			type: "spritesheet",
			base: i,
			url: "8-7.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-8": {
			type: "spritesheet",
			base: i,
			url: "8-8.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"reduced-hair-male-8-9": {
			type: "spritesheet",
			base: i,
			url: "8-9.png",
			x: 40,
			y: 44,
			w: 50,
			h: 40
		},
		"normal-hair-female-1-1": {
			type: "spritesheet",
			base: l,
			url: "1-1.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-10": {
			type: "spritesheet",
			base: l,
			url: "1-10.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-11": {
			type: "spritesheet",
			base: l,
			url: "1-11.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-12": {
			type: "spritesheet",
			base: l,
			url: "1-12.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-13": {
			type: "spritesheet",
			base: l,
			url: "1-13.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-14": {
			type: "spritesheet",
			base: l,
			url: "1-14.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-15": {
			type: "spritesheet",
			base: l,
			url: "1-15.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-16": {
			type: "spritesheet",
			base: l,
			url: "1-16.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-2": {
			type: "spritesheet",
			base: l,
			url: "1-2.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-3": {
			type: "spritesheet",
			base: l,
			url: "1-3.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-4": {
			type: "spritesheet",
			base: l,
			url: "1-4.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-5": {
			type: "spritesheet",
			base: l,
			url: "1-5.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-6": {
			type: "spritesheet",
			base: l,
			url: "1-6.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-7": {
			type: "spritesheet",
			base: l,
			url: "1-7.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-8": {
			type: "spritesheet",
			base: l,
			url: "1-8.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-1-9": {
			type: "spritesheet",
			base: l,
			url: "1-9.png",
			x: 54,
			y: 77,
			w: 120,
			h: 107
		},
		"normal-hair-female-10-1": {
			type: "spritesheet",
			base: l,
			url: "10-1.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-10": {
			type: "spritesheet",
			base: l,
			url: "10-10.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-11": {
			type: "spritesheet",
			base: l,
			url: "10-11.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-12": {
			type: "spritesheet",
			base: l,
			url: "10-12.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-13": {
			type: "spritesheet",
			base: l,
			url: "10-13.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-14": {
			type: "spritesheet",
			base: l,
			url: "10-14.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-15": {
			type: "spritesheet",
			base: l,
			url: "10-15.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-16": {
			type: "spritesheet",
			base: l,
			url: "10-16.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-2": {
			type: "spritesheet",
			base: l,
			url: "10-2.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-3": {
			type: "spritesheet",
			base: l,
			url: "10-3.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-4": {
			type: "spritesheet",
			base: l,
			url: "10-4.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-5": {
			type: "spritesheet",
			base: l,
			url: "10-5.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-6": {
			type: "spritesheet",
			base: l,
			url: "10-6.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-7": {
			type: "spritesheet",
			base: l,
			url: "10-7.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-8": {
			type: "spritesheet",
			base: l,
			url: "10-8.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-10-9": {
			type: "spritesheet",
			base: l,
			url: "10-9.png",
			x: 68,
			y: 77,
			w: 108,
			h: 102
		},
		"normal-hair-female-11-1": {
			type: "spritesheet",
			base: l,
			url: "11-1.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-10": {
			type: "spritesheet",
			base: l,
			url: "11-10.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-11": {
			type: "spritesheet",
			base: l,
			url: "11-11.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-12": {
			type: "spritesheet",
			base: l,
			url: "11-12.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-13": {
			type: "spritesheet",
			base: l,
			url: "11-13.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-14": {
			type: "spritesheet",
			base: l,
			url: "11-14.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-15": {
			type: "spritesheet",
			base: l,
			url: "11-15.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-16": {
			type: "spritesheet",
			base: l,
			url: "11-16.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-2": {
			type: "spritesheet",
			base: l,
			url: "11-2.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-3": {
			type: "spritesheet",
			base: l,
			url: "11-3.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-4": {
			type: "spritesheet",
			base: l,
			url: "11-4.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-5": {
			type: "spritesheet",
			base: l,
			url: "11-5.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-6": {
			type: "spritesheet",
			base: l,
			url: "11-6.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-7": {
			type: "spritesheet",
			base: l,
			url: "11-7.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-8": {
			type: "spritesheet",
			base: l,
			url: "11-8.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-11-9": {
			type: "spritesheet",
			base: l,
			url: "11-9.png",
			x: 68,
			y: 77,
			w: 106,
			h: 102
		},
		"normal-hair-female-12-1": {
			type: "spritesheet",
			base: l,
			url: "12-1.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-10": {
			type: "spritesheet",
			base: l,
			url: "12-10.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-11": {
			type: "spritesheet",
			base: l,
			url: "12-11.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-12": {
			type: "spritesheet",
			base: l,
			url: "12-12.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-13": {
			type: "spritesheet",
			base: l,
			url: "12-13.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-14": {
			type: "spritesheet",
			base: l,
			url: "12-14.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-15": {
			type: "spritesheet",
			base: l,
			url: "12-15.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-16": {
			type: "spritesheet",
			base: l,
			url: "12-16.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-2": {
			type: "spritesheet",
			base: l,
			url: "12-2.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-3": {
			type: "spritesheet",
			base: l,
			url: "12-3.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-4": {
			type: "spritesheet",
			base: l,
			url: "12-4.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-5": {
			type: "spritesheet",
			base: l,
			url: "12-5.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-6": {
			type: "spritesheet",
			base: l,
			url: "12-6.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-7": {
			type: "spritesheet",
			base: l,
			url: "12-7.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-8": {
			type: "spritesheet",
			base: l,
			url: "12-8.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-12-9": {
			type: "spritesheet",
			base: l,
			url: "12-9.png",
			x: 68,
			y: 75,
			w: 106,
			h: 104
		},
		"normal-hair-female-13-1": {
			type: "spritesheet",
			base: l,
			url: "13-1.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-10": {
			type: "spritesheet",
			base: l,
			url: "13-10.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-11": {
			type: "spritesheet",
			base: l,
			url: "13-11.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-12": {
			type: "spritesheet",
			base: l,
			url: "13-12.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-13": {
			type: "spritesheet",
			base: l,
			url: "13-13.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-14": {
			type: "spritesheet",
			base: l,
			url: "13-14.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-15": {
			type: "spritesheet",
			base: l,
			url: "13-15.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-16": {
			type: "spritesheet",
			base: l,
			url: "13-16.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-2": {
			type: "spritesheet",
			base: l,
			url: "13-2.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-3": {
			type: "spritesheet",
			base: l,
			url: "13-3.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-4": {
			type: "spritesheet",
			base: l,
			url: "13-4.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-5": {
			type: "spritesheet",
			base: l,
			url: "13-5.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-6": {
			type: "spritesheet",
			base: l,
			url: "13-6.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-7": {
			type: "spritesheet",
			base: l,
			url: "13-7.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-8": {
			type: "spritesheet",
			base: l,
			url: "13-8.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-13-9": {
			type: "spritesheet",
			base: l,
			url: "13-9.png",
			x: 48,
			y: 77,
			w: 126,
			h: 110
		},
		"normal-hair-female-14-1": {
			type: "spritesheet",
			base: l,
			url: "14-1.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-10": {
			type: "spritesheet",
			base: l,
			url: "14-10.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-11": {
			type: "spritesheet",
			base: l,
			url: "14-11.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-12": {
			type: "spritesheet",
			base: l,
			url: "14-12.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-13": {
			type: "spritesheet",
			base: l,
			url: "14-13.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-14": {
			type: "spritesheet",
			base: l,
			url: "14-14.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-15": {
			type: "spritesheet",
			base: l,
			url: "14-15.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-16": {
			type: "spritesheet",
			base: l,
			url: "14-16.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-2": {
			type: "spritesheet",
			base: l,
			url: "14-2.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-3": {
			type: "spritesheet",
			base: l,
			url: "14-3.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-4": {
			type: "spritesheet",
			base: l,
			url: "14-4.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-5": {
			type: "spritesheet",
			base: l,
			url: "14-5.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-6": {
			type: "spritesheet",
			base: l,
			url: "14-6.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-7": {
			type: "spritesheet",
			base: l,
			url: "14-7.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-8": {
			type: "spritesheet",
			base: l,
			url: "14-8.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-14-9": {
			type: "spritesheet",
			base: l,
			url: "14-9.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-1": {
			type: "spritesheet",
			base: l,
			url: "15-1.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-10": {
			type: "spritesheet",
			base: l,
			url: "15-10.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-11": {
			type: "spritesheet",
			base: l,
			url: "15-11.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-12": {
			type: "spritesheet",
			base: l,
			url: "15-12.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-13": {
			type: "spritesheet",
			base: l,
			url: "15-13.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-14": {
			type: "spritesheet",
			base: l,
			url: "15-14.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-15": {
			type: "spritesheet",
			base: l,
			url: "15-15.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-16": {
			type: "spritesheet",
			base: l,
			url: "15-16.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-2": {
			type: "spritesheet",
			base: l,
			url: "15-2.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-3": {
			type: "spritesheet",
			base: l,
			url: "15-3.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-4": {
			type: "spritesheet",
			base: l,
			url: "15-4.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-5": {
			type: "spritesheet",
			base: l,
			url: "15-5.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-6": {
			type: "spritesheet",
			base: l,
			url: "15-6.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-7": {
			type: "spritesheet",
			base: l,
			url: "15-7.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-8": {
			type: "spritesheet",
			base: l,
			url: "15-8.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-15-9": {
			type: "spritesheet",
			base: l,
			url: "15-9.png",
			x: 48,
			y: 74,
			w: 125,
			h: 111
		},
		"normal-hair-female-2-1": {
			type: "spritesheet",
			base: l,
			url: "2-1.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-10": {
			type: "spritesheet",
			base: l,
			url: "2-10.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-11": {
			type: "spritesheet",
			base: l,
			url: "2-11.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-12": {
			type: "spritesheet",
			base: l,
			url: "2-12.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-13": {
			type: "spritesheet",
			base: l,
			url: "2-13.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-14": {
			type: "spritesheet",
			base: l,
			url: "2-14.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-15": {
			type: "spritesheet",
			base: l,
			url: "2-15.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-16": {
			type: "spritesheet",
			base: l,
			url: "2-16.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-2": {
			type: "spritesheet",
			base: l,
			url: "2-2.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-3": {
			type: "spritesheet",
			base: l,
			url: "2-3.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-4": {
			type: "spritesheet",
			base: l,
			url: "2-4.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-5": {
			type: "spritesheet",
			base: l,
			url: "2-5.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-6": {
			type: "spritesheet",
			base: l,
			url: "2-6.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-7": {
			type: "spritesheet",
			base: l,
			url: "2-7.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-8": {
			type: "spritesheet",
			base: l,
			url: "2-8.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-2-9": {
			type: "spritesheet",
			base: l,
			url: "2-9.png",
			x: 54,
			y: 77,
			w: 122,
			h: 107
		},
		"normal-hair-female-3-1": {
			type: "spritesheet",
			base: l,
			url: "3-1.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-10": {
			type: "spritesheet",
			base: l,
			url: "3-10.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-11": {
			type: "spritesheet",
			base: l,
			url: "3-11.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-12": {
			type: "spritesheet",
			base: l,
			url: "3-12.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-13": {
			type: "spritesheet",
			base: l,
			url: "3-13.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-14": {
			type: "spritesheet",
			base: l,
			url: "3-14.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-15": {
			type: "spritesheet",
			base: l,
			url: "3-15.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-16": {
			type: "spritesheet",
			base: l,
			url: "3-16.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-2": {
			type: "spritesheet",
			base: l,
			url: "3-2.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-3": {
			type: "spritesheet",
			base: l,
			url: "3-3.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-4": {
			type: "spritesheet",
			base: l,
			url: "3-4.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-5": {
			type: "spritesheet",
			base: l,
			url: "3-5.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-6": {
			type: "spritesheet",
			base: l,
			url: "3-6.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-7": {
			type: "spritesheet",
			base: l,
			url: "3-7.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-8": {
			type: "spritesheet",
			base: l,
			url: "3-8.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-3-9": {
			type: "spritesheet",
			base: l,
			url: "3-9.png",
			x: 54,
			y: 77,
			w: 134,
			h: 107
		},
		"normal-hair-female-4-1": {
			type: "spritesheet",
			base: l,
			url: "4-1.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-10": {
			type: "spritesheet",
			base: l,
			url: "4-10.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-11": {
			type: "spritesheet",
			base: l,
			url: "4-11.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-12": {
			type: "spritesheet",
			base: l,
			url: "4-12.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-13": {
			type: "spritesheet",
			base: l,
			url: "4-13.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-14": {
			type: "spritesheet",
			base: l,
			url: "4-14.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-15": {
			type: "spritesheet",
			base: l,
			url: "4-15.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-16": {
			type: "spritesheet",
			base: l,
			url: "4-16.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-2": {
			type: "spritesheet",
			base: l,
			url: "4-2.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-3": {
			type: "spritesheet",
			base: l,
			url: "4-3.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-4": {
			type: "spritesheet",
			base: l,
			url: "4-4.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-5": {
			type: "spritesheet",
			base: l,
			url: "4-5.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-6": {
			type: "spritesheet",
			base: l,
			url: "4-6.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-7": {
			type: "spritesheet",
			base: l,
			url: "4-7.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-8": {
			type: "spritesheet",
			base: l,
			url: "4-8.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-4-9": {
			type: "spritesheet",
			base: l,
			url: "4-9.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-1": {
			type: "spritesheet",
			base: l,
			url: "5-1.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-10": {
			type: "spritesheet",
			base: l,
			url: "5-10.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-11": {
			type: "spritesheet",
			base: l,
			url: "5-11.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-12": {
			type: "spritesheet",
			base: l,
			url: "5-12.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-13": {
			type: "spritesheet",
			base: l,
			url: "5-13.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-14": {
			type: "spritesheet",
			base: l,
			url: "5-14.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-15": {
			type: "spritesheet",
			base: l,
			url: "5-15.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-16": {
			type: "spritesheet",
			base: l,
			url: "5-16.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-2": {
			type: "spritesheet",
			base: l,
			url: "5-2.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-3": {
			type: "spritesheet",
			base: l,
			url: "5-3.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-4": {
			type: "spritesheet",
			base: l,
			url: "5-4.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-5": {
			type: "spritesheet",
			base: l,
			url: "5-5.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-6": {
			type: "spritesheet",
			base: l,
			url: "5-6.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-7": {
			type: "spritesheet",
			base: l,
			url: "5-7.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-8": {
			type: "spritesheet",
			base: l,
			url: "5-8.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-5-9": {
			type: "spritesheet",
			base: l,
			url: "5-9.png",
			x: 54,
			y: 77,
			w: 119,
			h: 107
		},
		"normal-hair-female-6-1": {
			type: "spritesheet",
			base: l,
			url: "6-1.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-10": {
			type: "spritesheet",
			base: l,
			url: "6-10.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-11": {
			type: "spritesheet",
			base: l,
			url: "6-11.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-12": {
			type: "spritesheet",
			base: l,
			url: "6-12.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-13": {
			type: "spritesheet",
			base: l,
			url: "6-13.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-14": {
			type: "spritesheet",
			base: l,
			url: "6-14.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-15": {
			type: "spritesheet",
			base: l,
			url: "6-15.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-16": {
			type: "spritesheet",
			base: l,
			url: "6-16.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-2": {
			type: "spritesheet",
			base: l,
			url: "6-2.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-3": {
			type: "spritesheet",
			base: l,
			url: "6-3.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-4": {
			type: "spritesheet",
			base: l,
			url: "6-4.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-5": {
			type: "spritesheet",
			base: l,
			url: "6-5.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-6": {
			type: "spritesheet",
			base: l,
			url: "6-6.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-7": {
			type: "spritesheet",
			base: l,
			url: "6-7.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-8": {
			type: "spritesheet",
			base: l,
			url: "6-8.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-6-9": {
			type: "spritesheet",
			base: l,
			url: "6-9.png",
			x: 48,
			y: 77,
			w: 140,
			h: 110
		},
		"normal-hair-female-7-1": {
			type: "spritesheet",
			base: l,
			url: "7-1.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-10": {
			type: "spritesheet",
			base: l,
			url: "7-10.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-11": {
			type: "spritesheet",
			base: l,
			url: "7-11.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-12": {
			type: "spritesheet",
			base: l,
			url: "7-12.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-13": {
			type: "spritesheet",
			base: l,
			url: "7-13.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-14": {
			type: "spritesheet",
			base: l,
			url: "7-14.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-15": {
			type: "spritesheet",
			base: l,
			url: "7-15.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-16": {
			type: "spritesheet",
			base: l,
			url: "7-16.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-2": {
			type: "spritesheet",
			base: l,
			url: "7-2.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-3": {
			type: "spritesheet",
			base: l,
			url: "7-3.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-4": {
			type: "spritesheet",
			base: l,
			url: "7-4.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-5": {
			type: "spritesheet",
			base: l,
			url: "7-5.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-6": {
			type: "spritesheet",
			base: l,
			url: "7-6.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-7": {
			type: "spritesheet",
			base: l,
			url: "7-7.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-8": {
			type: "spritesheet",
			base: l,
			url: "7-8.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-7-9": {
			type: "spritesheet",
			base: l,
			url: "7-9.png",
			x: 75,
			y: 74,
			w: 98,
			h: 93
		},
		"normal-hair-female-8-1": {
			type: "spritesheet",
			base: l,
			url: "8-1.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-10": {
			type: "spritesheet",
			base: l,
			url: "8-10.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-11": {
			type: "spritesheet",
			base: l,
			url: "8-11.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-12": {
			type: "spritesheet",
			base: l,
			url: "8-12.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-13": {
			type: "spritesheet",
			base: l,
			url: "8-13.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-14": {
			type: "spritesheet",
			base: l,
			url: "8-14.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-15": {
			type: "spritesheet",
			base: l,
			url: "8-15.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-16": {
			type: "spritesheet",
			base: l,
			url: "8-16.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-2": {
			type: "spritesheet",
			base: l,
			url: "8-2.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-3": {
			type: "spritesheet",
			base: l,
			url: "8-3.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-4": {
			type: "spritesheet",
			base: l,
			url: "8-4.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-5": {
			type: "spritesheet",
			base: l,
			url: "8-5.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-6": {
			type: "spritesheet",
			base: l,
			url: "8-6.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-7": {
			type: "spritesheet",
			base: l,
			url: "8-7.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-8": {
			type: "spritesheet",
			base: l,
			url: "8-8.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-8-9": {
			type: "spritesheet",
			base: l,
			url: "8-9.png",
			x: 73,
			y: 75,
			w: 101,
			h: 90
		},
		"normal-hair-female-9-1": {
			type: "spritesheet",
			base: l,
			url: "9-1.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-10": {
			type: "spritesheet",
			base: l,
			url: "9-10.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-11": {
			type: "spritesheet",
			base: l,
			url: "9-11.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-12": {
			type: "spritesheet",
			base: l,
			url: "9-12.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-13": {
			type: "spritesheet",
			base: l,
			url: "9-13.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-14": {
			type: "spritesheet",
			base: l,
			url: "9-14.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-15": {
			type: "spritesheet",
			base: l,
			url: "9-15.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-16": {
			type: "spritesheet",
			base: l,
			url: "9-16.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-2": {
			type: "spritesheet",
			base: l,
			url: "9-2.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-3": {
			type: "spritesheet",
			base: l,
			url: "9-3.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-4": {
			type: "spritesheet",
			base: l,
			url: "9-4.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-5": {
			type: "spritesheet",
			base: l,
			url: "9-5.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-6": {
			type: "spritesheet",
			base: l,
			url: "9-6.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-7": {
			type: "spritesheet",
			base: l,
			url: "9-7.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-8": {
			type: "spritesheet",
			base: l,
			url: "9-8.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"normal-hair-female-9-9": {
			type: "spritesheet",
			base: l,
			url: "9-9.png",
			x: 75,
			y: 77,
			w: 113,
			h: 88
		},
		"reduced-hair-female-1-1": {
			type: "spritesheet",
			base: a,
			url: "1-1.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-10": {
			type: "spritesheet",
			base: a,
			url: "1-10.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-11": {
			type: "spritesheet",
			base: a,
			url: "1-11.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-12": {
			type: "spritesheet",
			base: a,
			url: "1-12.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-13": {
			type: "spritesheet",
			base: a,
			url: "1-13.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-14": {
			type: "spritesheet",
			base: a,
			url: "1-14.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-15": {
			type: "spritesheet",
			base: a,
			url: "1-15.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-16": {
			type: "spritesheet",
			base: a,
			url: "1-16.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-2": {
			type: "spritesheet",
			base: a,
			url: "1-2.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-3": {
			type: "spritesheet",
			base: a,
			url: "1-3.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-4": {
			type: "spritesheet",
			base: a,
			url: "1-4.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-5": {
			type: "spritesheet",
			base: a,
			url: "1-5.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-6": {
			type: "spritesheet",
			base: a,
			url: "1-6.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-7": {
			type: "spritesheet",
			base: a,
			url: "1-7.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-8": {
			type: "spritesheet",
			base: a,
			url: "1-8.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-1-9": {
			type: "spritesheet",
			base: a,
			url: "1-9.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-10-1": {
			type: "spritesheet",
			base: a,
			url: "10-1.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-10": {
			type: "spritesheet",
			base: a,
			url: "10-10.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-11": {
			type: "spritesheet",
			base: a,
			url: "10-11.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-12": {
			type: "spritesheet",
			base: a,
			url: "10-12.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-13": {
			type: "spritesheet",
			base: a,
			url: "10-13.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-14": {
			type: "spritesheet",
			base: a,
			url: "10-14.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-15": {
			type: "spritesheet",
			base: a,
			url: "10-15.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-16": {
			type: "spritesheet",
			base: a,
			url: "10-16.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-2": {
			type: "spritesheet",
			base: a,
			url: "10-2.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-3": {
			type: "spritesheet",
			base: a,
			url: "10-3.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-4": {
			type: "spritesheet",
			base: a,
			url: "10-4.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-5": {
			type: "spritesheet",
			base: a,
			url: "10-5.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-6": {
			type: "spritesheet",
			base: a,
			url: "10-6.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-7": {
			type: "spritesheet",
			base: a,
			url: "10-7.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-8": {
			type: "spritesheet",
			base: a,
			url: "10-8.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-10-9": {
			type: "spritesheet",
			base: a,
			url: "10-9.png",
			x: 33,
			y: 46,
			w: 53,
			h: 50
		},
		"reduced-hair-female-11-1": {
			type: "spritesheet",
			base: a,
			url: "11-1.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-10": {
			type: "spritesheet",
			base: a,
			url: "11-10.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-11": {
			type: "spritesheet",
			base: a,
			url: "11-11.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-12": {
			type: "spritesheet",
			base: a,
			url: "11-12.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-13": {
			type: "spritesheet",
			base: a,
			url: "11-13.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-14": {
			type: "spritesheet",
			base: a,
			url: "11-14.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-15": {
			type: "spritesheet",
			base: a,
			url: "11-15.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-16": {
			type: "spritesheet",
			base: a,
			url: "11-16.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-2": {
			type: "spritesheet",
			base: a,
			url: "11-2.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-3": {
			type: "spritesheet",
			base: a,
			url: "11-3.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-4": {
			type: "spritesheet",
			base: a,
			url: "11-4.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-5": {
			type: "spritesheet",
			base: a,
			url: "11-5.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-6": {
			type: "spritesheet",
			base: a,
			url: "11-6.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-7": {
			type: "spritesheet",
			base: a,
			url: "11-7.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-8": {
			type: "spritesheet",
			base: a,
			url: "11-8.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-11-9": {
			type: "spritesheet",
			base: a,
			url: "11-9.png",
			x: 33,
			y: 46,
			w: 52,
			h: 50
		},
		"reduced-hair-female-12-1": {
			type: "spritesheet",
			base: a,
			url: "12-1.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-10": {
			type: "spritesheet",
			base: a,
			url: "12-10.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-11": {
			type: "spritesheet",
			base: a,
			url: "12-11.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-12": {
			type: "spritesheet",
			base: a,
			url: "12-12.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-13": {
			type: "spritesheet",
			base: a,
			url: "12-13.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-14": {
			type: "spritesheet",
			base: a,
			url: "12-14.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-15": {
			type: "spritesheet",
			base: a,
			url: "12-15.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-16": {
			type: "spritesheet",
			base: a,
			url: "12-16.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-2": {
			type: "spritesheet",
			base: a,
			url: "12-2.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-3": {
			type: "spritesheet",
			base: a,
			url: "12-3.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-4": {
			type: "spritesheet",
			base: a,
			url: "12-4.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-5": {
			type: "spritesheet",
			base: a,
			url: "12-5.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-6": {
			type: "spritesheet",
			base: a,
			url: "12-6.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-7": {
			type: "spritesheet",
			base: a,
			url: "12-7.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-8": {
			type: "spritesheet",
			base: a,
			url: "12-8.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-12-9": {
			type: "spritesheet",
			base: a,
			url: "12-9.png",
			x: 33,
			y: 44,
			w: 52,
			h: 52
		},
		"reduced-hair-female-13-1": {
			type: "spritesheet",
			base: a,
			url: "13-1.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-10": {
			type: "spritesheet",
			base: a,
			url: "13-10.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-11": {
			type: "spritesheet",
			base: a,
			url: "13-11.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-12": {
			type: "spritesheet",
			base: a,
			url: "13-12.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-13": {
			type: "spritesheet",
			base: a,
			url: "13-13.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-14": {
			type: "spritesheet",
			base: a,
			url: "13-14.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-15": {
			type: "spritesheet",
			base: a,
			url: "13-15.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-16": {
			type: "spritesheet",
			base: a,
			url: "13-16.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-2": {
			type: "spritesheet",
			base: a,
			url: "13-2.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-3": {
			type: "spritesheet",
			base: a,
			url: "13-3.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-4": {
			type: "spritesheet",
			base: a,
			url: "13-4.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-5": {
			type: "spritesheet",
			base: a,
			url: "13-5.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-6": {
			type: "spritesheet",
			base: a,
			url: "13-6.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-7": {
			type: "spritesheet",
			base: a,
			url: "13-7.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-8": {
			type: "spritesheet",
			base: a,
			url: "13-8.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-13-9": {
			type: "spritesheet",
			base: a,
			url: "13-9.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-1": {
			type: "spritesheet",
			base: a,
			url: "14-1.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-10": {
			type: "spritesheet",
			base: a,
			url: "14-10.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-11": {
			type: "spritesheet",
			base: a,
			url: "14-11.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-12": {
			type: "spritesheet",
			base: a,
			url: "14-12.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-13": {
			type: "spritesheet",
			base: a,
			url: "14-13.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-14": {
			type: "spritesheet",
			base: a,
			url: "14-14.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-15": {
			type: "spritesheet",
			base: a,
			url: "14-15.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-16": {
			type: "spritesheet",
			base: a,
			url: "14-16.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-2": {
			type: "spritesheet",
			base: a,
			url: "14-2.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-3": {
			type: "spritesheet",
			base: a,
			url: "14-3.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-4": {
			type: "spritesheet",
			base: a,
			url: "14-4.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-5": {
			type: "spritesheet",
			base: a,
			url: "14-5.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-6": {
			type: "spritesheet",
			base: a,
			url: "14-6.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-7": {
			type: "spritesheet",
			base: a,
			url: "14-7.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-8": {
			type: "spritesheet",
			base: a,
			url: "14-8.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-14-9": {
			type: "spritesheet",
			base: a,
			url: "14-9.png",
			x: 22,
			y: 46,
			w: 63,
			h: 55
		},
		"reduced-hair-female-15-1": {
			type: "spritesheet",
			base: a,
			url: "15-1.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-10": {
			type: "spritesheet",
			base: a,
			url: "15-10.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-11": {
			type: "spritesheet",
			base: a,
			url: "15-11.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-12": {
			type: "spritesheet",
			base: a,
			url: "15-12.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-13": {
			type: "spritesheet",
			base: a,
			url: "15-13.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-14": {
			type: "spritesheet",
			base: a,
			url: "15-14.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-15": {
			type: "spritesheet",
			base: a,
			url: "15-15.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-16": {
			type: "spritesheet",
			base: a,
			url: "15-16.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-2": {
			type: "spritesheet",
			base: a,
			url: "15-2.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-3": {
			type: "spritesheet",
			base: a,
			url: "15-3.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-4": {
			type: "spritesheet",
			base: a,
			url: "15-4.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-5": {
			type: "spritesheet",
			base: a,
			url: "15-5.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-6": {
			type: "spritesheet",
			base: a,
			url: "15-6.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-7": {
			type: "spritesheet",
			base: a,
			url: "15-7.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-8": {
			type: "spritesheet",
			base: a,
			url: "15-8.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-15-9": {
			type: "spritesheet",
			base: a,
			url: "15-9.png",
			x: 22,
			y: 46,
			w: 64,
			h: 55
		},
		"reduced-hair-female-2-1": {
			type: "spritesheet",
			base: a,
			url: "2-1.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-10": {
			type: "spritesheet",
			base: a,
			url: "2-10.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-11": {
			type: "spritesheet",
			base: a,
			url: "2-11.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-12": {
			type: "spritesheet",
			base: a,
			url: "2-12.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-13": {
			type: "spritesheet",
			base: a,
			url: "2-13.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-14": {
			type: "spritesheet",
			base: a,
			url: "2-14.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-15": {
			type: "spritesheet",
			base: a,
			url: "2-15.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-16": {
			type: "spritesheet",
			base: a,
			url: "2-16.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-2": {
			type: "spritesheet",
			base: a,
			url: "2-2.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-3": {
			type: "spritesheet",
			base: a,
			url: "2-3.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-4": {
			type: "spritesheet",
			base: a,
			url: "2-4.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-5": {
			type: "spritesheet",
			base: a,
			url: "2-5.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-6": {
			type: "spritesheet",
			base: a,
			url: "2-6.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-7": {
			type: "spritesheet",
			base: a,
			url: "2-7.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-8": {
			type: "spritesheet",
			base: a,
			url: "2-8.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-2-9": {
			type: "spritesheet",
			base: a,
			url: "2-9.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-3-1": {
			type: "spritesheet",
			base: a,
			url: "3-1.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-10": {
			type: "spritesheet",
			base: a,
			url: "3-10.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-11": {
			type: "spritesheet",
			base: a,
			url: "3-11.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-12": {
			type: "spritesheet",
			base: a,
			url: "3-12.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-13": {
			type: "spritesheet",
			base: a,
			url: "3-13.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-14": {
			type: "spritesheet",
			base: a,
			url: "3-14.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-15": {
			type: "spritesheet",
			base: a,
			url: "3-15.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-16": {
			type: "spritesheet",
			base: a,
			url: "3-16.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-2": {
			type: "spritesheet",
			base: a,
			url: "3-2.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-3": {
			type: "spritesheet",
			base: a,
			url: "3-3.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-4": {
			type: "spritesheet",
			base: a,
			url: "3-4.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-5": {
			type: "spritesheet",
			base: a,
			url: "3-5.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-6": {
			type: "spritesheet",
			base: a,
			url: "3-6.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-7": {
			type: "spritesheet",
			base: a,
			url: "3-7.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-8": {
			type: "spritesheet",
			base: a,
			url: "3-8.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-3-9": {
			type: "spritesheet",
			base: a,
			url: "3-9.png",
			x: 25,
			y: 46,
			w: 70,
			h: 54
		},
		"reduced-hair-female-4-1": {
			type: "spritesheet",
			base: a,
			url: "4-1.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-10": {
			type: "spritesheet",
			base: a,
			url: "4-10.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-11": {
			type: "spritesheet",
			base: a,
			url: "4-11.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-12": {
			type: "spritesheet",
			base: a,
			url: "4-12.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-13": {
			type: "spritesheet",
			base: a,
			url: "4-13.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-14": {
			type: "spritesheet",
			base: a,
			url: "4-14.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-15": {
			type: "spritesheet",
			base: a,
			url: "4-15.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-16": {
			type: "spritesheet",
			base: a,
			url: "4-16.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-2": {
			type: "spritesheet",
			base: a,
			url: "4-2.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-3": {
			type: "spritesheet",
			base: a,
			url: "4-3.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-4": {
			type: "spritesheet",
			base: a,
			url: "4-4.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-5": {
			type: "spritesheet",
			base: a,
			url: "4-5.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-6": {
			type: "spritesheet",
			base: a,
			url: "4-6.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-7": {
			type: "spritesheet",
			base: a,
			url: "4-7.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-8": {
			type: "spritesheet",
			base: a,
			url: "4-8.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-4-9": {
			type: "spritesheet",
			base: a,
			url: "4-9.png",
			x: 25,
			y: 46,
			w: 61,
			h: 54
		},
		"reduced-hair-female-5-1": {
			type: "spritesheet",
			base: a,
			url: "5-1.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-10": {
			type: "spritesheet",
			base: a,
			url: "5-10.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-11": {
			type: "spritesheet",
			base: a,
			url: "5-11.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-12": {
			type: "spritesheet",
			base: a,
			url: "5-12.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-13": {
			type: "spritesheet",
			base: a,
			url: "5-13.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-14": {
			type: "spritesheet",
			base: a,
			url: "5-14.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-15": {
			type: "spritesheet",
			base: a,
			url: "5-15.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-16": {
			type: "spritesheet",
			base: a,
			url: "5-16.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-2": {
			type: "spritesheet",
			base: a,
			url: "5-2.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-3": {
			type: "spritesheet",
			base: a,
			url: "5-3.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-4": {
			type: "spritesheet",
			base: a,
			url: "5-4.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-5": {
			type: "spritesheet",
			base: a,
			url: "5-5.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-6": {
			type: "spritesheet",
			base: a,
			url: "5-6.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-7": {
			type: "spritesheet",
			base: a,
			url: "5-7.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-8": {
			type: "spritesheet",
			base: a,
			url: "5-8.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-5-9": {
			type: "spritesheet",
			base: a,
			url: "5-9.png",
			x: 25,
			y: 46,
			w: 60,
			h: 54
		},
		"reduced-hair-female-6-1": {
			type: "spritesheet",
			base: a,
			url: "6-1.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-10": {
			type: "spritesheet",
			base: a,
			url: "6-10.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-11": {
			type: "spritesheet",
			base: a,
			url: "6-11.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-12": {
			type: "spritesheet",
			base: a,
			url: "6-12.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-13": {
			type: "spritesheet",
			base: a,
			url: "6-13.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-14": {
			type: "spritesheet",
			base: a,
			url: "6-14.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-15": {
			type: "spritesheet",
			base: a,
			url: "6-15.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-16": {
			type: "spritesheet",
			base: a,
			url: "6-16.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-2": {
			type: "spritesheet",
			base: a,
			url: "6-2.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-3": {
			type: "spritesheet",
			base: a,
			url: "6-3.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-4": {
			type: "spritesheet",
			base: a,
			url: "6-4.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-5": {
			type: "spritesheet",
			base: a,
			url: "6-5.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-6": {
			type: "spritesheet",
			base: a,
			url: "6-6.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-7": {
			type: "spritesheet",
			base: a,
			url: "6-7.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-8": {
			type: "spritesheet",
			base: a,
			url: "6-8.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-6-9": {
			type: "spritesheet",
			base: a,
			url: "6-9.png",
			x: 22,
			y: 46,
			w: 73,
			h: 55
		},
		"reduced-hair-female-7-1": {
			type: "spritesheet",
			base: a,
			url: "7-1.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-10": {
			type: "spritesheet",
			base: a,
			url: "7-10.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-11": {
			type: "spritesheet",
			base: a,
			url: "7-11.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-12": {
			type: "spritesheet",
			base: a,
			url: "7-12.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-13": {
			type: "spritesheet",
			base: a,
			url: "7-13.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-14": {
			type: "spritesheet",
			base: a,
			url: "7-14.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-15": {
			type: "spritesheet",
			base: a,
			url: "7-15.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-16": {
			type: "spritesheet",
			base: a,
			url: "7-16.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-2": {
			type: "spritesheet",
			base: a,
			url: "7-2.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-3": {
			type: "spritesheet",
			base: a,
			url: "7-3.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-4": {
			type: "spritesheet",
			base: a,
			url: "7-4.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-5": {
			type: "spritesheet",
			base: a,
			url: "7-5.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-6": {
			type: "spritesheet",
			base: a,
			url: "7-6.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-7": {
			type: "spritesheet",
			base: a,
			url: "7-7.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-8": {
			type: "spritesheet",
			base: a,
			url: "7-8.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-7-9": {
			type: "spritesheet",
			base: a,
			url: "7-9.png",
			x: 36,
			y: 44,
			w: 49,
			h: 47
		},
		"reduced-hair-female-8-1": {
			type: "spritesheet",
			base: a,
			url: "8-1.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-10": {
			type: "spritesheet",
			base: a,
			url: "8-10.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-11": {
			type: "spritesheet",
			base: a,
			url: "8-11.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-12": {
			type: "spritesheet",
			base: a,
			url: "8-12.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-13": {
			type: "spritesheet",
			base: a,
			url: "8-13.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-14": {
			type: "spritesheet",
			base: a,
			url: "8-14.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-15": {
			type: "spritesheet",
			base: a,
			url: "8-15.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-16": {
			type: "spritesheet",
			base: a,
			url: "8-16.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-2": {
			type: "spritesheet",
			base: a,
			url: "8-2.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-3": {
			type: "spritesheet",
			base: a,
			url: "8-3.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-4": {
			type: "spritesheet",
			base: a,
			url: "8-4.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-5": {
			type: "spritesheet",
			base: a,
			url: "8-5.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-6": {
			type: "spritesheet",
			base: a,
			url: "8-6.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-7": {
			type: "spritesheet",
			base: a,
			url: "8-7.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-8": {
			type: "spritesheet",
			base: a,
			url: "8-8.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-8-9": {
			type: "spritesheet",
			base: a,
			url: "8-9.png",
			x: 34,
			y: 44,
			w: 51,
			h: 45
		},
		"reduced-hair-female-9-1": {
			type: "spritesheet",
			base: a,
			url: "9-1.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-10": {
			type: "spritesheet",
			base: a,
			url: "9-10.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-11": {
			type: "spritesheet",
			base: a,
			url: "9-11.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-12": {
			type: "spritesheet",
			base: a,
			url: "9-12.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-13": {
			type: "spritesheet",
			base: a,
			url: "9-13.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-14": {
			type: "spritesheet",
			base: a,
			url: "9-14.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-15": {
			type: "spritesheet",
			base: a,
			url: "9-15.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-16": {
			type: "spritesheet",
			base: a,
			url: "9-16.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-2": {
			type: "spritesheet",
			base: a,
			url: "9-2.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-3": {
			type: "spritesheet",
			base: a,
			url: "9-3.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-4": {
			type: "spritesheet",
			base: a,
			url: "9-4.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-5": {
			type: "spritesheet",
			base: a,
			url: "9-5.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-6": {
			type: "spritesheet",
			base: a,
			url: "9-6.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-7": {
			type: "spritesheet",
			base: a,
			url: "9-7.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-8": {
			type: "spritesheet",
			base: a,
			url: "9-8.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		},
		"reduced-hair-female-9-9": {
			type: "spritesheet",
			base: a,
			url: "9-9.png",
			x: 36,
			y: 46,
			w: 59,
			h: 43
		}
	}
}, Prodigy.Assets.prototype = {
	getAsset: function (e) {
		return this._assets[e]
	},
	getImageBounds: function (e) {
		return Util.isDefined(this._assets[e]) && Util.isDefined(this._assets[e].x) ? new Array(this._assets[e].x, this._assets[e].y, this._assets[e].w, this._assets[e].h) : new Array(0, 0, 0, 0)
	}
}, Prodigy.Assets.prototype.constructor = Prodigy.Assets, Prodigy.Attacks = function (e) {
	this.game = e
}, Prodigy.Attacks.prototype = {
	constructor: Prodigy.Attacks,
	calculateDamage: function (e, t, i, a) {
		Util.isDefined(a) || (a = 0);
		var s = 0;
		Util.isDefined(e) && Util.isDefined(e.damage) && (s = e.damage);
		e.element, i.getElement();
		return s += this.game.prodigy.affixes.getDamageModifier(e, t, i), Math.max(Math.floor(s + a), 2)
	},
	isStrong: function (e, t) {
		return Util.isDefined(e) && Util.isDefined(t) ? "fire" !== e || "ice" !== t && "earth" !== t ? "water" === e && "fire" === t ? !0 : "earth" === e && "water" === t ? !0 : "storm" === e && "water" === t ? !0 : "ice" === e && "storm" === t ? !0 : !1 : !0 : !1
	},
	isWeak: function (e, t) {
		return Util.isDefined(e) && Util.isDefined(t) ? "fire" === e && "water" === t ? !0 : "water" !== e || "earth" !== t && "storm" !== t ? "earth" === e && "fire" === t ? !0 : "storm" === e && "ice" === t ? !0 : "ice" === e && "fire" === t ? !0 : !1 : !0 : !1
	},
	getBestAttack: function (e, t, i) {
		if (e.length <= 0) return null;
		for (var a = [], s = 0; s < e.length; s++) {
			var r = this.getAttack(e[s]);
			a[s] = "Glacial Shield" === r.name ? {
				dmg: 0,
				ID: e[s]
			} : {
				dmg: this.calculateDamage(r, null, t, 0),
				ID: e[s]
			}
		}
		a.sort(function (e, t) {
			return t.dmg - e.dmg
		}), i = i || 0;
		for (var o = a[a.length - 1].ID, s = 0; s < a.length; s++) {
			if (Math.random() > i) {
				o = a[s].ID;
				break
			}
			i *= .75
		}
		return this.getAttack(o)
	},
	getHealingAttack: function (e) {
		for (var t = 0; t < e.length; t++) {
			var i = this.getAttack(e[t]);
			if (i.heal) return i
		}
		return null
	},
	getAttack: function (e) {
		var t = Prodigy.Attacks.data[e - 1];
		return Util.isDefined(t) ? t : null
	}
}, Prodigy.Attacks.data = [{
	ID: 1,
	name: "Fireball",
	element: "fire",
	animation: "Fireball",
	damage: 4
	}, {
	ID: 2,
	name: "Embers",
	element: "fire",
	animation: "Embers",
	damage: 5
	}, {
	ID: 3,
	name: "Charclone",
	element: "fire",
	animation: "Charclone",
	damage: 6
	}, {
	ID: 4,
	name: "Razorfire",
	element: "fire",
	animation: "Razorfire",
	damage: 7
	}, {
	ID: 5,
	name: "Fire Rain",
	element: "fire",
	animation: "FireRain",
	damage: 8
	}, {
	ID: 6,
	name: "Dragos",
	element: "fire",
	animation: "Dragos",
	damage: 9
	}, {
	ID: 7,
	name: "Water Blast",
	element: "water",
	animation: "WaterBlast",
	damage: 4
	}, {
	ID: 8,
	name: "Water Bomb",
	element: "water",
	animation: "WaterBomb",
	damage: 5
	}, {
	ID: 9,
	name: "Rainy Day",
	element: "water",
	animation: "RainyDay",
	damage: 6
	}, {
	ID: 10,
	name: "Water Bubble",
	element: "water",
	animation: "WaterBubble",
	damage: 7
	}, {
	ID: 11,
	name: "Geyser",
	element: "water",
	animation: "Geyser",
	damage: 8
	}, {
	ID: 12,
	name: "Angel's Fountain",
	element: "water",
	animation: "Fountain",
	damage: 9
	}, {
	ID: 13,
	name: "Mudball",
	element: "earth",
	animation: "Mudball",
	damage: 4
	}, {
	ID: 14,
	name: "Whirlwind",
	element: "earth",
	animation: "Whirlwind",
	damage: 5
	}, {
	ID: 15,
	name: "Leaf Wind",
	element: "earth",
	animation: "LeafWind",
	damage: 6
	}, {
	ID: 16,
	name: "Absorb",
	element: "earth",
	animation: "Absorb",
	damage: 4,
	heal: !0
	}, {
	ID: 17,
	name: "Earthsprite",
	element: "earth",
	animation: "EarthSprite",
	damage: 7
	}, {
	ID: 18,
	name: "Blitz",
	element: "earth",
	animation: "Blitz",
	damage: 8
	}, {
	ID: 19,
	name: "Ice Cannon",
	element: "ice",
	animation: "IceCannon",
	damage: 4
	}, {
	ID: 20,
	name: "Ice Prison",
	element: "ice",
	animation: "IcePrison",
	damage: 5
	}, {
	ID: 21,
	name: "Blizzard",
	element: "ice",
	animation: "Blizzard",
	damage: 6
	}, {
	ID: 22,
	name: "Glacial Shield",
	element: "ice",
	animation: "GlacialShield",
	damage: 16,
	heal: !0
	}, {
	ID: 23,
	name: "Snowman",
	element: "ice",
	animation: "Snowman",
	damage: 7
	}, {
	ID: 24,
	name: "Ice to Meet You",
	element: "ice",
	animation: "IceToMeetYou",
	damage: 8
	}, {
	ID: 25,
	name: "Cloudshot",
	element: "storm",
	animation: "Cloudshot",
	damage: 4
	}, {
	ID: 26,
	name: "Bolt",
	element: "storm",
	animation: "Bolt",
	damage: 5
	}, {
	ID: 27,
	name: "Trinity",
	element: "storm",
	animation: "Trinity",
	damage: 6
	}, {
	ID: 28,
	name: "Thunderdome",
	element: "storm",
	animation: "Thunderdome",
	damage: 7
	}, {
	ID: 29,
	name: "Shocksphere",
	element: "storm",
	animation: "Shocksphere",
	damage: 8
	}, {
	ID: 30,
	name: "Storm's Coming",
	element: "storm",
	animation: "StormComing",
	damage: 9
	}, {
	ID: 31,
	name: "Magi-shot",
	element: "wizard",
	animation: "MagiShot",
	damage: 4
	}, {
	ID: 32,
	name: "Batter Up!",
	element: "wizard",
	animation: "BatterUp",
	damage: 5
	}, {
	ID: 33,
	name: "Conjure",
	element: "wizard",
	animation: "Conjure",
	damage: 6
	}, {
	ID: 34,
	name: "Pummel",
	element: "wizard",
	animation: "Pummel",
	damage: 7
	}, {
	ID: 35,
	name: "Powerbeam",
	element: "wizard",
	animation: "Powerbeam",
	damage: 8
	}, {
	ID: 36,
	name: "Zero",
	element: "wizard",
	animation: "Zero",
	damage: 9
	}], Prodigy.Dialogues = function () {}, Prodigy.Dialogues.prototype = {
	get: function (e, t) {
		return Prodigy.Dialogues.data[e][t]
	},
	printScript: function (e, t) {
		for (var i = Prodigy.Dialogues.data[e], a = "", s = 0; s < i.length; s++)(!Util.isDefined(t) || t(i[s])) && (a += i[s].text + "\n");
		console.log(a)
	}
}, Prodigy.Dialogues.prototype.constructor = Prodigy.Dialogues, Prodigy.Dialogues.data = {
	noot: [{
		text: "Look out below!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-12",
			s: 0,
			d: 1
		}
		}, {
		text: "Ouch!\n...\nAnother happy landing!",
		face: 3,
		anim: 1,
		audio: {
			tag: "voice-10-12",
			s: 1,
			d: 4
		}
		}, {
		text: "I'm Noot, and I'll be your fairy guide! All new wizards need a guide, and I'm ALL YOURS!",
		face: 0,
		audio: {
			tag: "voice-10-12",
			s: 5,
			d: 7
		}
		}, {
		text: "This is a wizard battle! The goal is to reduce your opponent's hearts to zero by casting spells.",
		face: 0,
		anim: 2,
		audio: {
			tag: "voice-10-13",
			s: 0,
			d: 7
		}
		}, {
		text: "It's okay, try again! The scarecrow won't fight back, so practice away!",
		face: 1,
		audio: {
			tag: "voice-10-13",
			s: 7,
			d: 6
		}
		}, {
		text: "When you cast a spell, your opponent loses hearts! When they have no hearts left, you win!",
		face: 3,
		audio: {
			tag: "voice-10-13",
			s: 13,
			d: 7
		}
		}, {
		text: "Don't know how to walk, huh? Click the ground to walk, and follow me to the edge of the map!",
		face: 4,
		audio: {
			tag: "voice-10-14",
			s: 0,
			d: 6
		}
		}, {
		text: "I think you're ready for the next lesson...follow me!",
		face: 3,
		anim: 2,
		audio: {
			tag: "voice-10-14",
			s: 6,
			d: 4
		}
		}, {
		text: "To cast a spell, press the Attack button. Then choose your spell from the list!",
		face: 4,
		audio: {
			tag: "voice-10-3",
			s: 2,
			d: 5
		}
		}, {
		text: "Uh oh! Your hearts are low! At times like this, it might be best to change team members!",
		face: 1,
		audio: {
			tag: "voice-10-1",
			s: 0,
			d: 6
		}
		}, {
		text: "Just click the Switch button and choose another teammate.",
		face: 0,
		audio: {
			tag: "voice-10-1",
			s: 6,
			d: 3.5
		}
		}, {
		text: "Your opponent is getting tired! Now's the time to try and catch it!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-2",
			s: 0,
			d: 4
		}
		}, {
		text: "Just click the Catch button when you want to catch a new pet!",
		face: 3,
		audio: {
			tag: "voice-10-2",
			s: 4,
			d: 3
		}
		}, {
		text: "All you have to do is click this button when the arrow is pointing to the green area! Give it a try!",
		face: 4,
		audio: {
			tag: "voice-10-4",
			s: 0,
			d: 6
		}
		}, {
		text: "I think it's time you got a pet of your own! Choose a pet to join you on your adventures!",
		face: 0,
		audio: {
			tag: "voice-10-15",
			s: 8,
			d: 6
		}
		}, {
		text: "This is your backpack! All the items you collect are stored here!",
		face: 0,
		audio: {
			tag: "voice-10-5",
			s: 0,
			d: 4
		}
		}, {
		text: "To equip an item, click on one of your items and select 'wear'.",
		face: 4,
		audio: {
			tag: "voice-10-5",
			s: 4,
			d: 4
		}
		}, {
		text: "To unequip an item, click on an equipped item here. Looking good!",
		face: 3,
		audio: {
			tag: "voice-10-5",
			s: 8,
			d: 5
		}
		}, {
		text: "Your map shows all the areas on the island! To travel to a new area, just click the area's icon!",
		face: 2,
		audio: {
			tag: "voice-10-6",
			s: 0,
			d: 6
		}
		}, {
		text: "This is where you select your battle team!",
		face: 0,
		audio: {
			tag: "voice-10-7",
			s: 0,
			d: 3
		}
		}, {
		text: "First click one of your pets in the boxes here...",
		face: 4,
		audio: {
			tag: "voice-10-7",
			s: 3,
			d: 3
		}
		}, {
		text: "Then, click an open slot on your team. You can do this to remove pets from your team too!",
		face: 0,
		audio: {
			tag: "voice-10-7",
			s: 6,
			d: 6
		}
		}, {
		text: "Oh no! You ran out of hearts...you must be exhausted!",
		face: 1,
		anim: 1,
		audio: {
			tag: "voice-10-8",
			s: 0,
			d: 4
		}
		}, {
		text: "Don't worry, I'll heal you and your pets! But I'll have to charge you [gold] 100...",
		face: 4,
		audio: {
			tag: "voice-10-8",
			s: 4,
			d: 5
		}
		}, {
		text: "Let's keep going! There's still so much to explore!",
		face: 3,
		anim: 2,
		audio: {
			tag: "voice-10-16",
			s: 0,
			d: 4
		}
		}, {
		text: "Uh oh! A monster is blocking our path!",
		face: 5,
		anim: 4,
		audio: {
			tag: "voice-10-16",
			s: 4,
			d: 3
		}
		}, {
		text: "The Academy is full of monsters, and monsters love a good wizard battle! Click on the monster to challenge it!",
		face: 4,
		audio: {
			tag: "voice-10-16",
			s: 7,
			d: 8
		}
		}, {
		text: "Pets are very useful - they level up and cast spells just like you! They can also help you in battle!",
		face: 0,
		audio: {
			tag: "voice-10-15",
			s: 0,
			d: 8
		}
		}, {
		text: "But before we go anywhere, you need to know how to defend yourself from monsters!",
		face: 1,
		audio: {
			tag: "voice-10-12",
			s: 12,
			d: 5
		}
		}, {
		text: "Oh no! It looks like a monster broke the bridge! How will we get across now?",
		face: 5,
		anim: 2,
		audio: {
			tag: "voice-10-17",
			s: 0,
			d: 6
		}
		}, {
		text: "Oh, nice! It looks like there are some pieces nearby...go collect them and we can rebuild the bridge ourselves!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-17",
			s: 6,
			d: 8
		}
		}, {
		text: "Just click on the items around the map to pick them up...but watch out for monsters!",
		face: 1,
		audio: {
			tag: "voice-10-17",
			s: 14,
			d: 5
		}
		}, {
		text: "Great job! Now step back and watch this!",
		face: 3,
		audio: {
			tag: "voice-10-18",
			s: 0,
			d: 5
		}
		}, {
		text: "TADA! Not bad, huh? Okay, follow me!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-18",
			s: 5,
			d: 4
		}
		}, {
		text: "In battle, monsters also cast spells. The first to defeat the other wins the battle!",
		face: 0,
		audio: {
			tag: "voice-10-16",
			s: 15,
			d: 6
		}
		}, {
		text: "Well, that's all I have left to teach you, but your wizard quest has only just begun!",
		face: 0,
		audio: {
			tag: "voice-10-19",
			s: 0,
			d: 6
		}
		}, {
		text: "Follow the path to the left to meet the first master wizard, Flora!",
		face: 2,
		audio: {
			tag: "voice-10-19",
			s: 10,
			d: 5
		}
		}, {
		text: "Don't you worry, though, because I'll always be here to help you out!",
		face: 3,
		anim: 2,
		audio: {
			tag: "voice-10-19",
			s: 6,
			d: 4
		}
		}, {
		text: "Do you want to heal you and your pets?",
		face: 3,
		anim: 2,
		audio: {
			tag: "voice-10-20",
			s: 0,
			d: 3
		}
		}, {
		text: "Oh dear! Try again!",
		face: 1,
		audio: {
			tag: "voice-10-20",
			s: 3,
			d: 2
		}
		}, {
		text: "Whoa, great job!",
		face: 3,
		anim: 4,
		audio: {
			tag: "voice-10-20",
			s: 5,
			d: 3
		}
		}, {
		text: "All finished! Let's head back, okay?",
		face: 3,
		anim: 4,
		audio: {
			tag: "voice-10-20",
			s: 8,
			d: 3
		}
		}, {
		text: "To become a true PRODIGY, you must travel all over the island and meet the master wizards!",
		face: 0,
		audio: {
			tag: "voice-10-19",
			s: 15,
			d: 7
		}
		}, {
		text: "Each master will teach you new spells, and award you a gemstone for completing their trials!",
		face: 0,
		audio: {
			tag: "voice-10-19",
			s: 22,
			d: 6
		}
		}, {
		text: "First, ask your teacher for your class code, and enter it here!",
		face: 0,
		audio: {
			tag: "voice-10-21",
			s: 0,
			d: 4
		}
		}, {
		text: "Now, enter your first and last name!",
		face: 2,
		audio: {
			tag: "voice-10-21",
			s: 4,
			d: 3
		}
		}, {
		text: "Create a password for your account! Remember to enter it twice!",
		face: 3,
		audio: {
			tag: "voice-10-21",
			s: 7,
			d: 4
		}
		}, {
		text: "Where do you live?",
		face: 4,
		audio: {
			tag: "voice-10-21",
			s: 11,
			d: 1
		}
		}, {
		text: "What grade are you in?",
		face: 1,
		audio: {
			tag: "voice-10-21",
			s: 12,
			d: 1
		}
		}, {
		text: "What does your wizard look like?",
		face: 2,
		audio: {
			tag: "voice-10-21",
			s: 13,
			d: 2
		}
		}, {
		text: "What is your wizard's name?",
		face: 3,
		audio: {
			tag: "voice-10-21",
			s: 15,
			d: 2
		}
		}, {
		text: "Here is your login information. Be sure to write these down!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-21",
			s: 17,
			d: 4
		}
		}, {
		text: "Uh oh! Something went wrong...do you want to try again?",
		face: 1,
		audio: {
			tag: "voice-10-21",
			s: 21,
			d: 4
		}
		}, {
		text: "There's the healstone! When you're low on health, just click it to heal you and your pets!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-22",
			s: 0,
			d: 5
		}
		}, {
		text: "There are the Sprikes! In battle, monsters drop items, and some items are used for quests!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-23",
			s: 0,
			d: 6
		}
		}, {
		text: "Defeat the Sprikes until one of them drops some evidence for Flora!",
		face: 0,
		audio: {
			tag: "voice-10-23",
			s: 6,
			d: 4
		}
		}, {
		text: "Um...I think we found the TripTrop Trio!",
		face: 1,
		anim: 2,
		audio: {
			tag: "voice-10-24",
			s: 0,
			d: 4
		}
		}, {
		text: "Whew, that wasn't so bad...good job!",
		face: 2,
		audio: {
			tag: "voice-10-24",
			s: 4,
			d: 4
		}
		}, {
		text: "See that gate? It leads to the icy Shiverchill Mountains... but you need the Firefly Gem to open it!",
		face: 4,
		audio: {
			tag: "voice-10-24",
			s: 8,
			d: 7
		}
		}, {
		text: "WOW! That must be Gerald! I guess he's sleeping...thank goodness! We should probably tell Flora.",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-25",
			s: 0,
			d: 7
		}
		}, {
		text: "Oh no! A monster stole the flute! We'd better go tell Flora...",
		face: 5,
		audio: {
			tag: "voice-10-26",
			s: 0,
			d: 5
		}
		}, {
		text: "All we have to do is play this flute? Piece of cake, I used to take lessons!",
		face: 1,
		audio: {
			tag: "voice-10-27",
			s: 0,
			d: 6
		}
		}, {
		text: "Pftfbpfffppfbt!",
		face: 3,
		audio: {
			tag: "voice-10-27",
			s: 6,
			d: 2
		}
		}, {
		text: "What? I never said I was any good at it!",
		face: 5,
		audio: {
			tag: "voice-10-27",
			s: 8,
			d: 3
		}
		}, {
		text: "You opened the gate and got your first gemstone! Well done!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-28",
			s: 0,
			d: 4
		}
		}, {
		text: "Next stop, Shiverchill Mountains!",
		face: 3,
		audio: {
			tag: "voice-10-28",
			s: 4,
			d: 3
		}
		}, {
		text: "Enter your parent's email if you're playing at home!",
		face: 1,
		audio: {
			tag: "voice-10-21",
			s: 25,
			d: 3
		}
		}, {
		text: "It looks like all the furnaces are out...no wonder it's so cold!",
		face: 1,
		anim: 4,
		audio: {
			tag: "voice-10-29",
			s: 0,
			d: 5
		}
		}, {
		text: "Whoa...what was that about?",
		face: 1,
		audio: {
			tag: "voice-10-30",
			s: 0,
			d: 2
		}
		}, {
		text: "We'd better tell Bok about this...",
		face: 4,
		audio: {
			tag: "voice-10-31",
			s: 0,
			d: 2
		}
		}, {
		text: "What the...this is NOT a shovel! We'd better go tell Bok.",
		face: 5,
		audio: {
			tag: "voice-10-32",
			s: 0,
			d: 5
		}
		}, {
		text: "Wait, those weren't the monsters?",
		face: 1,
		audio: {
			tag: "voice-10-33",
			s: 0,
			d: 3
		}
		}, {
		text: "Hmmm...well, you wouldn't happen to know where we could find some power crystals, would you?",
		face: 4,
		audio: {
			tag: "voice-10-33",
			s: 3,
			d: 7
		}
		}, {
		text: "Ummm...I think that's the REAL monster!",
		face: 3,
		anim: 2,
		audio: {
			tag: "voice-10-34",
			s: 0,
			d: 4
		}
		}, {
		text: "I'll bet that's the throne room, but it looks like the entrance is still frozen...",
		face: 1,
		audio: {
			tag: "voice-10-35",
			s: 0,
			d: 5
		}
		}, {
		text: "Look there! It's another power crystal...we can light another furnace!",
		face: 2,
		anim: 2,
		audio: {
			tag: "voice-10-35",
			s: 5,
			d: 6
		}
		}, {
		text: "Or maybe not? I guess the worm is still around...",
		face: 1,
		audio: {
			tag: "voice-10-35",
			s: 11,
			d: 4
		}
		}, {
		text: "Hey look! The furnace melted some of the ice!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-36",
			s: 0,
			d: 4
		}
		}, {
		text: "You got your second gemstone and opened the second gate! Well done!",
		face: 2,
		anim: 4,
		audio: {}
		}, {
		text: "Next stop, Dyno Dig Oasis!",
		face: 3
		}, {
		text: "Welcome to Lamplight, the most magical town on the island and home of the Academy!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-37",
			s: 0,
			d: 6
		}
		}, {
		text: "This is a great little town. I'm sure you'll find yourself right at home.",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-37",
			s: 6,
			d: 5
		}
		}, {
		text: "Let's go on a quick tour around town, shall we? There's so much to see!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-37",
			s: 11,
			d: 5
		}
		}, {
		text: "Here is the Coliseum. Inside you can face the best wizards around, and earn great rewards!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-38",
			s: 0,
			d: 8
		}
		}, {
		text: "But you should probably level up a bit first...some are pretty tricky! Let's keep moving!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-38",
			s: 8,
			d: 7
		}
		}, {
		text: "This is the Shopping District - most of the shops in Lamplight are here.",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-39",
			s: 0,
			d: 5
		}
		}, {
		text: "Here is the Equipment Store. They sell wands, outfits and hats.",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-39",
			s: 5,
			d: 4
		}
		}, {
		text: "This is the Stylist Shop, where wizards can change their appearance! Let's continue, shall we?",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-39",
			s: 9,
			d: 6
		}
		}, {
		text: "This is the Town Square, the heart of Lamplight!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-40",
			s: 0,
			d: 4
		}
		}, {
		text: "Many special events and festivals are hosted here...be sure to check in often!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-40",
			s: 4,
			d: 5
		}
		}, {
		text: "All right! Only one more stop to go.",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-40",
			s: 9,
			d: 4
		}
		}, {
		text: "Down that way is the eastern gate, which leads to the Academy...",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-41",
			s: 0,
			d: 4
		}
		}, {
		text: "Unfortunately, it's been closed down ever since the Wardens disappeared... Maybe someday you'll get to see it for yourself!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-41",
			s: 4,
			d: 8
		}
		}, {
		text: "Anyways, that's it for the tour! Come back often...the town changes all the time!",
		face: 2,
		anim: 4,
		audio: {
			tag: "voice-10-41",
			s: 12,
			d: 6
		}
		}, {
		text: "Great job! Be sure to talk to Boardy in Lamplight to get your reward.",
		face: 2,
		anim: 4
		}],
	flora: [{
		text: "Well hello there! The name's Flora - the master wizard of Firefly Forest!",
		face: 5,
		anim: 4,
		audio: {
			tag: "voice-8-1",
			s: 0,
			d: 6
		}
		}, {
		text: "Complete my trials to learn earth spells. Complete them all to earn the Firefly Gem!",
		face: 3,
		audio: {
			tag: "voice-8-1",
			s: 6,
			d: 6
		}
		}, {
		text: "But first, I have an itty bitty favor to ask...",
		face: 2,
		audio: {
			tag: "voice-8-1",
			s: 12,
			d: 3
		}
		}, {
		text: "Can you go rescue my friend? He's been surrounded by monsters!",
		face: 6,
		anim: 2,
		audio: {
			tag: "voice-8-1",
			s: 15,
			d: 5
		}
		}, {
		text: "Quick question - what does every wizard need?",
		face: 2,
		audio: {
			tag: "voice-8-2",
			s: 0,
			d: 4
		}
		}, {
		text: "A wand, silly! I'm fresh out of wands, but I think there's a special one in a chest in the forest!",
		face: 1,
		audio: {
			tag: "voice-8-2",
			s: 4,
			d: 8
		}
		}, {
		text: "Or you can always buy one from the store!",
		face: 2,
		audio: {
			tag: "voice-8-2",
			s: 12,
			d: 3
		}
		}, {
		text: "Oh! You got one!",
		face: 1,
		audio: {
			tag: "voice-8-2",
			s: 15,
			d: 2
		}
		}, {
		text: "After a few battles, your hearts get low and you need to heal.",
		face: 2,
		audio: {
			tag: "voice-8-3",
			s: 0,
			d: 4
		}
		}, {
		text: "Follow the path and find a HEALSTONE - a magical gem that can heal your team!",
		face: 5,
		audio: {
			tag: "voice-8-3",
			s: 4,
			d: 6
		}
		}, {
		text: "And while you're there, challenge some Saplettes for your next trial!",
		face: 3,
		audio: {
			tag: "voice-8-3",
			s: 10,
			d: 5
		}
		}, {
		text: "To become a true Prodigy, you must learn spells! And the best way to learn new spells is by helping people!",
		face: 4,
		anim: 4,
		audio: {
			tag: "voice-8-4",
			s: 0,
			d: 7
		}
		}, {
		text: "Firefly Forest has a problem...vandals! Someone's been littering at the crossroads!",
		face: 6,
		audio: {
			tag: "voice-8-4",
			s: 7,
			d: 6
		}
		}, {
		text: "Do me a favor and help clean it up, okay?",
		face: 7,
		audio: {
			tag: "voice-8-4",
			s: 13,
			d: 3
		}
		}, {
		text: "The paper you picked up seems to be part of a note... but it's written in 'monster'.",
		face: 2,
		audio: {
			tag: "voice-8-5",
			s: 0,
			d: 5
		}
		}, {
		text: "Try bringing it to the traveller in the northern woods!",
		face: 0,
		audio: {
			tag: "voice-8-5",
			s: 5,
			d: 3
		}
		}, {
		text: "The note says 'don't tell Flora' \n...HEY! I'M FLORA!",
		face: 6,
		anim: 1,
		audio: {
			tag: "voice-8-6",
			s: 0,
			d: 5
		}
		}, {
		text: "So, those Sprikes are up to something secret, huh? Defeat a few until they drop some evidence!",
		face: 6,
		audio: {
			tag: "voice-8-6",
			s: 5,
			d: 8
		}
		}, {
		text: "Hmmm, this is a Mandrake... \nMandrakes are the best spies in the whole forest!",
		face: 3,
		audio: {
			tag: "voice-8-7",
			s: 0,
			d: 6
		}
		}, {
		text: "Collect more for me and bring them in for questioning...maybe they can tell us more!",
		face: 6,
		audio: {
			tag: "voice-8-7",
			s: 6,
			d: 5
		}
		}, {
		text: "Be sure to look around...they may be in more than one place!",
		face: 1,
		audio: {
			tag: "voice-8-7",
			s: 11,
			d: 4
		}
		}, {
		text: "According to the Mandrakes, the TripTrop Trio ordered the Sprikes to steal something from me.",
		face: 6,
		anim: 4,
		audio: {
			tag: "voice-8-8",
			s: 0,
			d: 6
		}
		}, {
		text: "This forest is mischevious! \n...and confusing!",
		face: 7,
		audio: {
			tag: "voice-8-8",
			s: 6,
			d: 4
		}
		}, {
		text: "Track down the TripTrop Trio, defeat them, and bring back what they stole!",
		face: 6,
		audio: {
			tag: "voice-8-8",
			s: 10,
			d: 5
		}
		}, {
		text: "So, they stole my flute? And they BROKE IT?! THE NERVE!",
		face: 6,
		anim: 2,
		audio: {
			tag: "voice-8-9",
			s: 0,
			d: 6
		}
		}, {
		text: "This can only mean one thing... \nCan you head into the forest to find my Golem, Gerald?",
		face: 2,
		audio: {
			tag: "voice-8-9",
			s: 6,
			d: 6
		}
		}, {
		text: "WHAT?! That boulder-brain is asleep again?!",
		face: 6,
		anim: 4,
		audio: {
			tag: "voice-8-9",
			s: 12,
			d: 4
		}
		}, {
		text: "Monsters lull Gerald to sleep all the time...I guess he's a bit loud when he walks around.",
		face: 2,
		audio: {
			tag: "voice-8-10",
			s: 0,
			d: 7
		}
		}, {
		text: "We can wake him up, but first we need to fix my broken flute!",
		face: 7,
		audio: {
			tag: "voice-8-10",
			s: 7,
			d: 5
		}
		}, {
		text: "Easy Peasy! Just bring it to the 'magic stump' in the woods!",
		face: 0,
		audio: {
			tag: "voice-8-10",
			s: 12,
			d: 4
		}
		}, {
		text: "WHAT?! It's been stolen again?!",
		face: 6,
		anim: 2,
		audio: {
			tag: "voice-8-10",
			s: 16,
			d: 3
		}
		}, {
		text: "That's the last straw! Now I'm REAL MAD, and nobody wants to mess with an angry forest fairy!",
		face: 6,
		anim: 4,
		audio: {
			tag: "voice-8-11",
			s: 0,
			d: 9
		}
		}, {
		text: "Go find that monster and bring back my flute! He could be anywhere!",
		face: 6,
		audio: {
			tag: "voice-8-11",
			s: 9,
			d: 5
		}
		}, {
		text: "Now that we have the flute, it's time for your final challenge!",
		face: 3,
		audio: {
			tag: "voice-8-12",
			s: 0,
			d: 4
		}
		}, {
		text: "Take this to Gerald and wake him up! Careful, though...he can get REAL grumpy!",
		face: 2,
		audio: {
			tag: "voice-8-12",
			s: 4,
			d: 6
		}
		}, {
		text: "Wow! You did it! As promised, here is the Firefly Gem!",
		face: 4,
		anim: 4,
		audio: {
			tag: "voice-8-12",
			s: 10,
			d: 6
		}
		}, {
		text: "You're ready to head into Shiverchill Mountains, where you'll meet your second master, Bok!",
		face: 5,
		audio: {
			tag: "voice-8-13",
			s: 0,
			d: 6
		}
		}, {
		text: "Just take the gem to the gate and open it!",
		face: 4,
		audio: {
			tag: "voice-8-13",
			s: 6,
			d: 3
		}
		}, {
		text: "Just follow the arrows!",
		face: 0,
		anim: 2,
		audio: {
			tag: "voice-8-14",
			s: 0,
			d: 2
		}
		}, {
		text: "Well done!",
		face: 4,
		anim: 2,
		audio: {
			tag: "voice-8-14",
			s: 2,
			d: 2
		}
		}],
	bok: [{
		text: "Hahaha! Bok knew you could do it!",
		face: 0,
		anim: 4,
		audio: {
			tag: "voice-1-1",
			s: 0,
			d: 5
		}
		}, {
		text: "Slip say it time you learn new spell. Bok agree - you the best!",
		face: 7,
		anim: 2,
		audio: {
			tag: "voice-1-1",
			s: 5,
			d: 8
		}
		}, {
		text: "Hoot hoot!",
		face: 2,
		audio: {
			tag: "voice-1-1",
			s: 13,
			d: 1
		}
		}, {
		text: "Welcome to Bok cave! New wizard seek gem, learn spells? You come to right place!",
		face: 1,
		audio: {
			tag: "voice-1-2",
			s: 0,
			d: 8
		}
		}, {
		text: "Bok teach wizard, but first we have problem...IT FREEZING IN HERE!",
		face: 6,
		anim: 1,
		audio: {
			tag: "voice-1-2",
			s: 8,
			d: 8
		}
		}, {
		text: "Need to check on furnaces, but room full of chilly monsters...",
		face: 3,
		audio: {
			tag: "voice-1-2",
			s: 16,
			d: 6
		}
		}, {
		text: "But you wizard! Wizard strong! Head to furnace room...first door on right.",
		face: 4,
		audio: {
			tag: "voice-1-2",
			s: 22,
			d: 7
		}
		}, {
		text: "Furnaces ALL broken? Bok use power crystal to light furnace, but last crystal stolen...",
		face: 8,
		audio: {
			tag: "voice-1-3",
			s: 0,
			d: 8
		}
		}, {
		text: "What?! Bok tell Slip to hide crystal...it not Bok fault it stolen!",
		face: 6,
		audio: {
			tag: "voice-1-3",
			s: 8,
			d: 8
		}
		}, {
		text: "Go to treasure room and find chilly monster that stole Bok crystal!",
		face: 3,
		audio: {
			tag: "voice-1-3",
			s: 16,
			d: 6
		}
		}, {
		text: "Now that wizard have crystal, time to light furnace!",
		face: 0,
		audio: {
			tag: "voice-1-4",
			s: 0,
			d: 5
		}
		}, {
		text: "Go to furnace room and light furnace. Bok counting on wizard!",
		face: 1,
		audio: {
			tag: "voice-1-4",
			s: 5,
			d: 6
		}
		}, {
		text: "Wizard do good, but much of mountain still frozen. Need more crystals, Bok think.",
		face: 5,
		audio: {
			tag: "voice-1-5",
			s: 0,
			d: 9
		}
		}, {
		text: "Crystals rare, but Bok used to find them in caves. Go explore caves, see what can find!",
		face: 0,
		audio: {
			tag: "voice-1-5",
			s: 9,
			d: 9
		}
		}, {
		text: "You find miner? BOK NOT LIKE MINERS ONE BIT!",
		face: 3,
		anim: 2,
		audio: {
			tag: "voice-1-5",
			s: 18,
			d: 6
		}
		}, {
		text: "Before miners, Bok king of mountain. Then miners come with scary wizard, chase Bok to this cave.",
		face: 8,
		audio: {
			tag: "voice-1-5",
			s: 24,
			d: 10
		}
		}, {
		text: "Slip right...miners good at finding crystals. Okay, Bok help...take key to chest - shovel there.",
		face: 5,
		audio: {
			tag: "voice-1-5",
			s: 34,
			d: 12
		}
		}, {
		text: "Wizard can find chest in mines...but be careful! Shovel prized possession, passed to Bok from dear mother.",
		face: 4,
		audio: {
			tag: "voice-1-6",
			s: 0,
			d: 11
		}
		}, {
		text: "Wizard say shovel is spoon? That mean Bok been using real shovel as spoon for WEEKS!",
		face: 8,
		anim: 2,
		audio: {
			tag: "voice-1-6",
			s: 11,
			d: 8
		}
		}, {
		text: "NO LAUGHING, SLIP!",
		face: 3,
		anim: 4,
		audio: {
			tag: "voice-1-6",
			s: 19,
			d: 2
		}
		}, {
		text: "Now you have real shovel, go help miner and get crystal for Bok!",
		face: 0,
		audio: {
			tag: "voice-1-7",
			s: 0,
			d: 7
		}
		}, {
		text: "All miner say is that power crystal in mines? BOK ALREADY KNOW THAT!",
		face: 8,
		audio: {
			tag: "voice-1-8",
			s: 0,
			d: 7
		}
		}, {
		text: "Head into mines, and find that crystal!",
		face: 0,
		audio: {
			tag: "voice-1-8",
			s: 7,
			d: 5
		}
		}, {
		text: "Giant ice worm? That must be what cause all these cavequakes...",
		face: 5,
		audio: {
			tag: "voice-1-9",
			s: 0,
			d: 6
		}
		}, {
		text: "Well, it sound like you defeat it, so back to plan - head back into mines!",
		face: 1,
		audio: {
			tag: "voice-1-9",
			s: 6,
			d: 7
		}
		}, {
		text: "What? Oh, Slip want you to defeat ghosties in mines first...",
		face: 8,
		audio: {
			tag: "voice-1-9",
			s: 13,
			d: 7
		}
		}, {
		text: "Okay, no more delay! Head to mines, ghosties or not, and bring back power crystal!",
		face: 3,
		audio: {
			tag: "voice-1-10",
			s: 0,
			d: 9
		}
		}, {
		text: "With two furnaces on, Bok throne room should be open, and Bok can be king of mountain again!",
		face: 0,
		audio: {
			tag: "voice-1-11",
			s: 0,
			d: 10
		}
		}, {
		text: "But before I go, check throne room for Bok, make sure it safe.",
		face: 4,
		audio: {
			tag: "voice-1-11",
			s: 10,
			d: 7
		}
		}, {
		text: "Throne room still frozen? And worm eat last power crystal? This not good...",
		face: 6,
		audio: {
			tag: "voice-1-11",
			s: 17,
			d: 8
		}
		}, {
		text: "Okay, Bok have plan!",
		face: 0,
		audio: {
			tag: "voice-1-12",
			s: 0,
			d: 3
		}
		}, {
		text: "BOK HAVE GOOD PLANS SOMETIMES! LOTS OF TIMES!",
		face: 3,
		audio: {
			tag: "voice-1-12",
			s: 3,
			d: 5
		}
		}, {
		text: "Monster eat crystals, so wizard go collect lots of crystals!",
		face: 5,
		audio: {
			tag: "voice-1-12",
			s: 8,
			d: 5
		}
		}, {
		text: "Lure monster, defeat, and get crystal! Off you go, hero wizard!",
		face: 1,
		audio: {
			tag: "voice-1-12",
			s: 13,
			d: 8
		}
		}, {
		text: "You have crystals, now it time to face the ice worm...good luck!",
		face: 7,
		anim: 4,
		audio: {
			tag: "voice-1-13",
			s: 0,
			d: 7
		}
		}, {
		text: "Slip wish you luck too!",
		face: 4,
		audio: {
			tag: "voice-1-13",
			s: 7,
			d: 4
		}
		}, {
		text: "For this, wizard deserve the Shiverchill Gem!",
		face: 1,
		anim: 4,
		audio: {
			tag: "voice-1-14",
			s: 7,
			d: 6
		}
		}, {
		text: "...But, Bok leave in throne room. As final test, go to throne room and pick up reward!",
		face: 5,
		audio: {
			tag: "voice-1-14",
			s: 13,
			d: 9
		}
		}, {
		text: "Well, that all Bok have to teach! Now it time for wizard to face new journey!",
		face: 7,
		anim: 4,
		audio: {
			tag: "voice-1-15",
			s: 0,
			d: 8
		}
		}, {
		text: "Bring gem to gate at top of mountain, open, and find Cumulo, the next master!",
		face: 5,
		audio: {
			tag: "voice-1-15",
			s: 8,
			d: 10
		}
		}],
	merchant: [{
		text: "Boy, have I got some deals for you!",
		face: 0,
		anim: 4,
		audio: {
			tag: "voice-11",
			s: 0,
			d: 4
		}
		}, {
		text: "Oh dear...I'm in quite a pickle now!",
		face: 0,
		anim: 2,
		audio: {
			tag: "voice-11",
			s: 24,
			d: 3
		}
		}, {
		text: "Those monsters almost got away with my loot!!",
		face: 0,
		anim: 4,
		audio: {
			tag: "voice-11",
			s: 6,
			d: 3
		}
		}, {
		text: "What have we here? A note written by monsters, huh? Let me read it...",
		face: 0,
		audio: {
			tag: "voice-11",
			s: 9,
			d: 5
		}
		}, {
		text: "It says... \n'Big plans happening, don't tell Flora!'",
		face: 0,
		audio: {
			tag: "voice-11",
			s: 19,
			d: 24
		}
		}, {
		text: "Well it looks like it was written by a Sprike - strange little monsters, they are!",
		face: 0,
		audio: {
			tag: "voice-11",
			s: 14,
			d: 5
		}
		}, {
		text: "Well hello there, young one!",
		face: 0,
		audio: {
			tag: "voice-11",
			s: 4,
			d: 2
		}
		}, {
		text: "You there, help! The earthquake trapped me under some rubble!",
		face: 0,
		audio: {
			tag: "voice-11-1",
			s: 0,
			d: 6
		}
		}, {
		text: "Please find something to dig me out before the monster comes back!",
		face: 0,
		audio: {
			tag: "voice-11-1",
			s: 6,
			d: 4
		}
		}, {
		text: "Thank goodness you came before the monster returned!",
		face: 0,
		audio: {
			tag: "voice-11-2",
			s: 0,
			d: 4
		}
		}, {
		text: "Goodness no! I speak of the ice demon lurking in the mountains! Scary stuff, it is!",
		face: 0,
		audio: {
			tag: "voice-11-2",
			s: 4,
			d: 6
		}
		}, {
		text: "I was trying to escape with the other miners, but I got trapped here!",
		face: 0,
		audio: {
			tag: "voice-11-2",
			s: 10,
			d: 4
		}
		}, {
		text: "Power crystals, huh? There might be one or two left in the mines...",
		face: 0,
		audio: {
			tag: "voice-11-2",
			s: 14,
			d: 5
		}
		}, {
		text: "Thanks for all your hard work completing bounties. Here is your reward!"
		}, {
		text: "Do you want to open the Arena Rewards shop?"
		}, {
		text: "Are you ready to take part in the ARENA? Face the toughest wizards around the world and work your way to the top!"
		}, {
		text: "You cannot take part in the Arena in Offline Mode!"
		}, {
		text: "Do you want to open the Bounty Rewards shop?"
		}],
	winterfest: [{
		text: "Open the present to get your daily gift!",
		audio: {}
		}, {
		text: "You've already gotten your gift for today. Come back tomorrow.",
		audio: {}
		}]
};
var Items = function () {
	function e() {}
	return e
}();
Items.getItemData = function (e, t) {
	return Util.isDefined(Items.data[e]) ? Items.data[e][t - 1] : "pet" === e ? Monsters.data[t] : null
}, Items.getRandomItem = function (e) {
	return Util.isDefined(Items.data[e]) ? Math.floor(Items.data[e].length * Math.random()) + 1 : 1
}, Items.getDormItems = function (e) {
	for (var t = [], i = 0; i < Items.data.dorm.length; i++) Items.data.dorm[i].category === e && t.push(Items.data.dorm[i]);
	return t
}, Items.getItemDropList = function () {
	for (var e = [], t = 0; t < Items.TYPES.length; t++)
		for (var i = 0; i < Items.data[Items.TYPES[t]].length; i++) {
			var a = Items.data[Items.TYPES[t]][i],
				s = Items.TYPES[t];
			Util.isDefined(a.drop) && e.push({
				type: s,
				ID: i + 1,
				R: Items.DROP_RATE_BY_TYPE[s] * Items.DROP_RATE_BY_RARITY[a.rarity]
			})
		}
	return e
}, Items.getItems = function (e, t) {
	if (Util.isDefined(Items.RARITY[t]) || (t = Items.RARITY.indexOf(t)), !Util.isDefined(Items.data[e]) || -1 === t) return null;
	for (var i = [], a = 0; a < Items.data[e].length; a++) {
		var s = Items.data[e][a];
		Util.isDefined(s.drop) && Util.isDefined(s.rarity) && s.rarity === t && i.push({
			type: e,
			ID: a + 1,
			rarity: t,
			N: 1
		})
	}
	return i
}, Items.getItemDrops = function (e) {
	for (var t = e || Items.getItemDropList(), i = [], a = 0; a < t.length; a++) {
		var s = t[a];
		Util.isDefined(s) && Math.random() < s.R && i.push(s)
	}
	return i
}, Items.getItemPrice = function (e, t) {
	var i = Items.getItemData(e, t);
	if (!Util.isDefined(i)) return 0;
	var a = i.rarity || 0,
		s = 50;
	if ("outfit" === e) s = 200;
	else if ("hat" === e) s = 150;
	else if ("weapon" === e) s = 300;
	else if ("pet" === e) s = 500;
	else if ("dorm" === e) "Comfy" === i.type ? s = 250 : "Surface" === i.type ? s = 150 : "Plants" === i.type ? s = 50 : "Storage" === i.type ? s = 450 : "Wall" === i.type ? s = 150 : "Items" === i.type ? s = 200 : "Lamp" === i.type && (s = 100);
	else if ("dormbg" === e) return i.price;
	return s += 50 * a, s += 25 * (i.h || 0), s += 50 * (i.d || 0)
}, Items.DROP_RATE_BY_TYPE = {
	outfit: 4e-4,
	weapon: 5e-4,
	hat: .001,
	boots: .001,
	item: .025
}, Items.DROP_RATE_BY_RARITY = [1, .75, .5, .25, .1], Items.RARITY_COLOR = ["#c7c7c7", "#6fc159", "#408cd9", "#b93ae2", "#f7942e"], Items.RARITY = ["common", "uncommon", "rare", "epic", "legendary"], Items.TYPES = ["outfit", "weapon", "boots", "hat", "item"], Items.data = {
	outfit: [{
		ID: 1,
		name: "Magi's Shroud",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Worn by apprentice wizards, the Magi's Shroud is a light, yet magical garb.",
		effects: [34]
		}, {
		ID: 2,
		name: "Warlock's Robe",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "A robe made from magical silk, used by student and teacher alike at the Academy.",
		effects: [34]
		}, {
		ID: 3,
		name: "Jester's Robes",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "The bells on this cloak only ring when its wearer wins a battle, never when they walk.",
		effects: [34]
		}, {
		ID: 4,
		name: "Crimson Cloak",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "It is common to see this robe worn by individuals at formal gatherings.",
		effects: [34]
		}, {
		ID: 5,
		name: "Angelic Shroud",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Only the most powerful wizards wear this enchanted robe, adorned with eagle's feathers.",
		effects: [34]
		}, {
		ID: 6,
		name: "Glacial Ward",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "It is said the ice crystals used to make this robe will protect its wearer from bad things.",
		effects: [34]
		}, {
		ID: 7,
		name: "Dragon Scales",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: 'Made from the hide of "Carcus the Terrible" the most unforgiving dragon ever known.',
		effects: [35]
		}, {
		ID: 8,
		name: "Sun's Embrace",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "This cloak can sense its wearer and will burn brighter when it detects fear.",
		effects: [34]
		}, {
		ID: 9,
		name: "Water Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The standard robe worn by initiated members of the Academy's Water School.",
		effects: [33]
		}, {
		ID: 10,
		name: "Fire Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The standard robe worn by initiated members of the Academy's Fire School.",
		effects: [33]
		}, {
		ID: 11,
		name: "Air Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The standard robe worn by initiated members of the Academy's Storm School.",
		effects: [33]
		}, {
		ID: 12,
		name: "Earth Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The standard robe worn by initiated members of the Academy's Earth School.",
		effects: [33]
		}, {
		ID: 13,
		name: "Training Garb",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "Worn for practice dueling, it is not uncommon to see this garb singed and torn.",
		effects: [33]
		}, {
		ID: 14,
		name: "Light Clothes",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The favourite choice of wizards on hot days, it's cool but provides little protection.",
		effects: [33]
		}, {
		ID: 15,
		name: "Cloth Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "Light and durable, this robe is prized by wizards both young and old for its comfort",
		effects: [33]
		}, {
		ID: 16,
		name: "Heavy Robe",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Made for wizards who don't like being cold but don't mind being itchy.",
		effects: [33]
		}, {
		ID: 17,
		name: "Leather Apparel",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "For the stylish wizard, these robes are intimidating and stain-resistant!",
		effects: [33]
		}, {
		ID: 18,
		name: "Durofibre Robe",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Modern wizards love how soft these robes feel, often worn by academics in libraries.",
		effects: [33]
		}, {
		ID: 19,
		name: "Magi-thread Outfit",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The Magi were ancient wizards that studied the stars. They wore these robes for their most important ceremonies.",
		effects: [33]
		}, {
		ID: 20,
		name: "Pyrium Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "This is the product of genius weavers who were able to spin metal into colorful threads.",
		effects: [33]
		}, {
		ID: 21,
		name: "Mithril Robe",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "As strong as it is lightweight, Mithril was once rare because it could only be found in distant lands.",
		effects: [33]
		}, {
		ID: 22,
		name: "Vitrium Robe",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: 'This robe gets its name from its large blue gems, often referred to as "Water Glass".',
		effects: [34]
		}, {
		ID: 23,
		name: "Culix Robe",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Specially designed for a northern wizard who studied the history of magic, Culix's diaries are required reading for student wizards.",
		effects: [33]
		}, {
		ID: 24,
		name: "Trialmaster's Garb",
		member: 1,
		rarity: 4,
		flavorText: "Only the trial masters of past and present were given these robes and are forbidden to take them off. How did you get them?",
		effects: [83]
		}, {
		ID: 25,
		name: "Anorak Suit",
		member: 0,
		rarity: 2,
		flavorText: "Need to keep warm in those winter days? It may not be a robe, but it sure is warm!",
		effects: [35]
		}, {
		ID: 26,
		name: "Winterfest Outfit",
		member: 1,
		rarity: 2,
		flavorText: "The official outfit worn by helpers at Winterfest!",
		effects: [35]
		}, {
		ID: 27,
		name: "Dragon Spike Robes",
		member: 1,
		rarity: 2,
		flavorText: "In close combat these spikes are dangerous indeed. Be careful when you're around your friends!",
		effects: [35]
		}, {
		ID: 28,
		name: "Warm Robes",
		member: 1,
		rarity: 1,
		flavorText: "Commonly worn in very cold places, these robes are made from many layers of fur and pelts.",
		effects: [34]
		}, {
		ID: 29,
		name: "Firefly Robes",
		member: 1,
		rarity: 2,
		flavorText: "A magical robe made from the leaves and materials found in Firefly Forest.",
		effects: [35]
		}, {
		ID: 30,
		name: "Magic Robes",
		member: 1,
		rarity: 1,
		flavorText: "These robes were custom made for a wizard...but they seem to fit you just right!",
		effects: [34]
		}, {
		ID: 31,
		name: "Frost Saber Robes",
		member: 1,
		rarity: 2,
		flavorText: "These wooly robes will keep you warm in cold weather...but don't wear them in the sun!",
		effects: [35]
		}, {
		ID: 32,
		name: "Duelist Robes",
		member: 1,
		rarity: 2,
		flavorText: "The robes of one of the greatest wizards in the Academy.",
		effects: [35]
		}, {
		ID: 33,
		name: "Shiverchill Robes",
		member: 1,
		rarity: 2,
		flavorText: "The ceremonial robes of the Shiverchill Tribes.",
		effects: [35]
		}, {
		ID: 34,
		name: "Bonfire Robes",
		member: 1,
		rarity: 1,
		flavorText: 'These can only be worn by those who have seen the "Bonfire of the Spire", a volcanic eruption, up close.',
		effects: [34]
		}, {
		ID: 35,
		name: "Captain's Digs",
		member: 1,
		rarity: 2,
		flavorText: 'Don\'t these just scream "Arggg"? They even come with the optional hook attachment!',
		effects: [35]
		}, {
		ID: 36,
		name: "Buccaneer's Digs",
		member: 1,
		rarity: 1,
		flavorText: "The choice clothes of deckhands and mates everywhere. Watch out, captains will be sure to shout orders at you.",
		effects: [34]
		}, {
		ID: 37,
		name: "Skywatch Gear",
		member: 1,
		rarity: 1,
		flavorText: "Since the Skyfolk don't wear clothing, the humans that come up to the clouds wear this outfit to stay warm and dry.",
		effects: [34]
		}, {
		ID: 38,
		name: "Mira's Robes",
		member: 1,
		rarity: 3,
		flavorText: "These robes give off immense power, and almost seem to repel the ground below you.",
		effects: [82]
		}, {
		ID: 39,
		name: "Diggin' Outfit",
		member: 1,
		rarity: 2,
		flavorText: "This is the outfit of the Oasis Institute of Natural Creatures (OINC).",
		effects: [35]
		}, {
		ID: 40,
		name: "Desert Robes",
		member: 1,
		rarity: 1,
		flavorText: "These robes protect the wearer from the brutal weather in the desert.",
		effects: [34]
		}, {
		ID: 41,
		name: "Tinkerer Outfit",
		member: 1,
		rarity: 1,
		flavorText: "This outfit is very stylish, but also pretty heavy-duty! The people back then sure were tough!",
		effects: [34]
		}, {
		ID: 42,
		name: "TEK-Y4 Jumpsuit",
		member: 1,
		rarity: 1,
		flavorText: "The jumpsuit worn by the official TEK-Y4 dance instructors. Kind of sweaty...",
		effects: [34]
		}, {
		ID: 43,
		name: "Robot Outfit",
		member: 1,
		rarity: 2,
		flavorText: "Whoever said that a wizard couldn't be a robot never had a chance to try these on...",
		effects: [35]
		}, {
		ID: 44,
		name: "Pumpkin Outfit",
		member: 1,
		rarity: 2,
		flavorText: "The Pumpkin Lord is said to return every year on Pumpkinfest to rule over all pumpkins.",
		effects: [35]
		}, {
		ID: 45,
		name: "Luminite Costume",
		member: 1,
		rarity: 0,
		flavorText: "A cute Luminite costume! It's so lifelike!",
		effects: [33]
		}, {
		ID: 46,
		name: "Specter Robes",
		member: 1,
		rarity: 0,
		flavorText: "The tattered robes of the legendary specter - a ghost that only shows up around Pumpkinfest.",
		effects: [33]
		}, {
		ID: 47,
		name: "Mountaineer's Gear",
		member: 0,
		rarity: 0,
		flavorText: "This warm, rugged coat is equipped with a standard set of climbing equipment, a must have for exploring the mountains.",
		effects: [33]
		}, {
		ID: 48,
		name: "Frost Beard's Clasp",
		member: 1,
		rarity: 2,
		flavorText: "The magic armor of the great Viking Frost Beard - a mystic wind constantly billows its cape.",
		effects: [35]
		}, {
		ID: 49,
		name: "Yeti Coat",
		member: 1,
		rarity: 1,
		flavorText: "Who knew that Yetis shed?! Whether the coat directly came from a Yeti or was crafted from loose hairs is unclear.",
		effects: [34]
		}, {
		ID: 50,
		name: "Red Armor",
		member: 0,
		rarity: 1,
		flavorText: "This armor is lighter than it looks, but it seems to be all for show...the metal actually seems to be plastic...",
		effects: [34]
		}, {
		ID: 51,
		name: "Phantom Cloak",
		member: 0,
		rarity: 2,
		flavorText: "A magic barrier seems to emanate from the cloak...protecting you from all sorts of nasty spells.",
		effects: [35]
		}, {
		ID: 52,
		name: "Draconyx Gear",
		member: 0,
		rarity: 3,
		flavorText: "Worn by ancient battle wizards, this gear seems to fit you perfectly, almost as if you were meant to wear it.",
		effects: [82]
		}, {
		ID: 53,
		name: "Black Fang Coat",
		member: 0,
		rarity: 3,
		flavorText: "This outfit is worn only by the greatest of Bounty Hunters. It is a testimant to the skill of its wearer.",
		effects: [82]
		}, {
		ID: 54,
		name: "Hunter Coat",
		member: 0,
		rarity: 2,
		flavorText: "The standard issue garb of a Bounty Hunter. It holds up in the toughest of situations.",
		effects: [35]
		}],
	weapon: [{
		ID: 1,
		name: "Enchanted Stick",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "The most unassuming of wands, it is said to be imbued with natural energy.",
		effects: [31]
		}, {
		ID: 2,
		name: "Ivory Star",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Just like the stars themselves, it is most powerful under the cover of night.",
		effects: [31]
		}, {
		ID: 3,
		name: "Angelic Shard",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Charmed with a celestial power, wizards take it to be a symbol of justice and good.",
		effects: [31]
		}, {
		ID: 4,
		name: "Blue Pearl",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Its orb pulsates when close to the ocean and water pets hum gently in its presence.",
		effects: [31]
		}, {
		ID: 5,
		name: "Cheeple's Toy Wand",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Often given to young wizards who love that it squawks when it casts a spell.",
		effects: [31]
		}, {
		ID: 6,
		name: "Dragonwing",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Hold on tight! Many unsuspecting wizards have watched this wand fly away.",
		effects: [31]
		}, {
		ID: 7,
		name: "Lunar Staff",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Made for a wizard who was also a werewolf, it strengthens as the moon approaches full.",
		effects: [31]
		}, {
		ID: 8,
		name: "Wanderer's Staff",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Friend to the wizard who travels far from home, it comforts a lonely heart and smells of fresh bread.",
		effects: [31]
		}, {
		ID: 9,
		name: "Firewing",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "It was once a wizard's pet Phoenix that relinquished its magic to empower his wand. It saved him from peril most great.",
		effects: [31]
		}, {
		ID: 10,
		name: "Dragon's Bane",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: 'The wand used to end the reign of "Carcus the Terrible", its origins are a mystery.',
		effects: [32]
		}, {
		ID: 11,
		name: "Hurricane",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "To save her village, a wizard once ran into the eye of a storm. When it abated, all that remained was this wand.",
		effects: [31]
		}, {
		ID: 12,
		name: "Firebrand",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: 'The wand that belonged to Crios as a child, he cast it aside as "weak" when he entered the Academy.',
		effects: [31]
		}, {
		ID: 13,
		name: "Frozen Shard",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "Cold to the touch, wizards who use it shiver uncontrollably and their lips turn blue.",
		effects: [31]
		}, {
		ID: 14,
		name: "Wand of Dreams",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Whoever possesses this wand will never have a dreamless sleep and when they dream of the future, it always comes true.",
		effects: [31]
		}, {
		ID: 15,
		name: "Nature's Bloom",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "During the winter its leaf withers and falls off but always grows again the following spring.",
		effects: [31]
		}, {
		ID: 16,
		name: "Angel Wing",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "This staff was once paired with another just like it and belonged to twin wizards.",
		effects: [31]
		}, {
		ID: 17,
		name: "Vita",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "Energizing whoever holds it, this staff was forged entirely from the earth by ancient wizards using a method now lost.",
		effects: [31]
		}, {
		ID: 18,
		name: "Staff of Flames",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "Commonly used by the Flameweavers of the Spire to create beautiful burning patterns in the night sky.",
		effects: [31]
		}, {
		ID: 19,
		name: "Tidal Sphere",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "Long sought after by pirates who can use it to push their ships through the waves.",
		effects: [31]
		}, {
		ID: 20,
		name: "Frosted Spear",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Its central gem comes from deep in the Shiverchill Mountains, allowing wizards to turn the water in air to ice.",
		effects: [31]
		}, {
		ID: 21,
		name: "Dragon Staff",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Used by the Dragon Tamers of old, no one knows if it retains its power to control the winged beasts. Do you dare find out?",
		effects: [31]
		}, {
		ID: 22,
		name: "Phoenix Talon",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Containing the power of the Phoenix, some say the one who holds it is can recover from any injury.",
		effects: [31]
		}, {
		ID: 23,
		name: "Dream",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Made by a Dreamweaver, if used correctly, it can put your opponent into a deep sleep.",
		effects: [31]
		}, {
		ID: 24,
		name: "Efflorescence",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Its wielder need have no fear of the dark. When shaken, this staff puts out a powerful light.",
		effects: [30]
		}, {
		ID: 25,
		name: "Training Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: 'Also known as the "Safety Wand" it is used by all academy wizards to reduce injury during training.',
		effects: [30]
		}, {
		ID: 26,
		name: "Birch Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "A creative wizard carved this himself from a branch in a nearby forest.",
		effects: [30]
		}, {
		ID: 27,
		name: "Granite Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "A geologist wizard once claimed that a wand could be made from rocks, this wand proves it!",
		effects: [30]
		}, {
		ID: 28,
		name: "Iron Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Though rough to the touch and very heavy, its got plenty of power for the everyday wizard.",
		effects: [30]
		}, {
		ID: 29,
		name: "Steel Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Forged from various metals by blacksmiths, some wizards feel that its the best material for wands.",
		effects: [30]
		}, {
		ID: 30,
		name: "Onyx Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Its dark stone sparkles, making it look like stars in the night sky.",
		effects: [30]
		}, {
		ID: 31,
		name: "Diamond Wand",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The diamond in this wand has not been shaped or cut, leaving its earthly energy untouched.",
		effects: [30]
		}, {
		ID: 32,
		name: "Pyrium Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Though it looks like gold, it's not. Pyrium is prized for its strength and flexibility, making this a very durable wand.",
		effects: [30]
		}, {
		ID: 33,
		name: "Mithril Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Not as rare as it once was, Mithril is still popular amongst the wizards of distant lands.",
		effects: [30]
		}, {
		ID: 34,
		name: "Magite Wand",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "Students of the stars, the Magi loved the setting sun most of all, making this their favorite wand.",
		effects: [30]
		}, {
		ID: 35,
		name: "Adamantium Wand",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Its strength iswith shimmering minerals which ma unsurpassed by any other metal wand, it has been known to block even the most potent of spells.",
		effects: [30]
		}, {
		ID: 36,
		name: "Training Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Some say that staffs are more powerful but are also harder to use, making this staff very important for training.",
		effects: [30]
		}, {
		ID: 37,
		name: "Birch Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "In the old days wizards would carve their own staffs from the wood of the forest, this one seems quite old.",
		effects: [30]
		}, {
		ID: 38,
		name: "Granite Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: 'Only the strongest wizards can carry the weight of this staff, giving it the nickname the "Staff of Giants".',
		effects: [30]
		}, {
		ID: 39,
		name: "Iron Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Used by the monks of the ancient lands, many have adopted its use because of its common materials and uncommon strength.",
		effects: [30]
		}, {
		ID: 40,
		name: "Steel Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "The choice of wizard knights of old, who could carry the lightweight staff with all their heavy armor on.",
		effects: [30]
		}, {
		ID: 41,
		name: "Onyx Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "It's smooth and polished to shine. It's clear a fine craftsman made this beautiful staff.",
		effects: [30]
		}, {
		ID: 42,
		name: "Diamond Staff",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "Diamond is very hard and very sharp, it's recommended that you wear gloves when using this staff.",
		effects: [30]
		}, {
		ID: 43,
		name: "Pyrium Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Pyrium is difficult to work with. It must have taken a great blacksmith to make this staff.",
		effects: [30]
		}, {
		ID: 44,
		name: "Mithril Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "This staff has an aura of old power around it. Did it come from somewhere far away? ",
		effects: [30]
		}, {
		ID: 45,
		name: "Magite Staff",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The Magi liked staffs over wands because they were longer and they reached closer to the stars.",
		effects: [30]
		}, {
		ID: 46,
		name: "Adamantium Staff",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Made from the strongest of metals, its beauty is only matched by its power.",
		effects: [30]
		}, {
		ID: 47,
		name: "The Master of Trials",
		member: 0,
		rarity: 3,
		flavorText: "To be held only by the Trial Masters, its powers are the stuff of legends. How did you get it?",
		effects: [81]
		}, {
		ID: 48,
		name: "Winter Bell",
		member: 1,
		rarity: 0,
		flavorText: "Its sound is beautiful, but don't be lulled by its enchanting tones.",
		effects: [30]
		}, {
		ID: 49,
		name: "Minotaur's Head",
		member: 1,
		rarity: 2,
		flavorText: "A prize given to those who have successfully navigated the Labyrinth, it prevents them from ever being lost again.",
		effects: [32]
		}, {
		ID: 50,
		name: "Sunburst Wand",
		member: 1,
		rarity: 1,
		flavorText: "A ball of energy from the sun itself.",
		effects: [31]
		}, {
		ID: 51,
		name: "Flamerose Wand",
		member: 1,
		rarity: 2,
		flavorText: "Designed to appear like the mythical Flamerose, a rare flower that grows only on the side of the Bonfire Spire.",
		effects: [32]
		}, {
		ID: 52,
		name: "Crystal Wand",
		member: 1,
		rarity: 1,
		flavorText: "Transparent, it's easy to admire the beauty of the energy being charged inside this wand just before a spell is cast.",
		effects: [31]
		}, {
		ID: 53,
		name: "Batwing Wand",
		member: 1,
		rarity: 2,
		flavorText: "Those who hold this wand can sense what is around them even in the darkest of caves - much like the bat, which gives the wand its name.",
		effects: [32]
		}, {
		ID: 54,
		name: "Fungoid",
		member: 1,
		rarity: 2,
		flavorText: "Many wizards refuse to make their wands from living trees, instead they grow this wand from the forest's soils.",
		effects: [32]
		}, {
		ID: 55,
		name: "Sacred Flame",
		member: 1,
		rarity: 1,
		flavorText: "For those who hail from the Spire, this wand that carries a flame from Bonfire is respected and admired.",
		effects: [31]
		}, {
		ID: 56,
		name: "Sun Orb Staff",
		member: 1,
		rarity: 3,
		flavorText: "Its heat is so immense that its owner must possess great knowledge of fire magic simply to be in its presence.",
		effects: [81]
		}, {
		ID: 57,
		name: "Staff of Winter",
		member: 1,
		rarity: 2,
		flavorText: "In the hands of the ice king of old, this staff was used to turn those who insulted his beard into frozen statues.",
		effects: [32]
		}, {
		ID: 58,
		name: "Crystal Staff",
		member: 1,
		rarity: 2,
		flavorText: "As beautiful as it is elegant, it can be used to break light into parts that can be weaved into powerful spells.",
		effects: [32]
		}, {
		ID: 59,
		name: "TuskTooth",
		member: 0,
		rarity: 2,
		flavorText: "An ancient staff from the realms of the Shiverchill tribes, it is thought to possess an animal spirit.",
		effects: [32]
		}, {
		ID: 60,
		name: "Dragos",
		member: 1,
		rarity: 3,
		flavorText: 'Also known as the "Heart of the Dragon", the limits of this staff\'s power have never been reached.',
		effects: [81]
		}, {
		ID: 61,
		name: "Twisted Staff",
		member: 1,
		rarity: 1,
		flavorText: "This staff was grown by tree whisperers from the roots of the elder trees deep in the heart of the Firefly Forest.",
		effects: [31]
		}, {
		ID: 62,
		name: "Staff of the Duelist",
		member: 0,
		rarity: 2,
		flavorText: "Crios once swore that if anyone could beat him in a duel, he'd give them this staff. Looks like you did it!",
		effects: [32]
		}, {
		ID: 63,
		name: "Hailstone",
		member: 1,
		rarity: 1,
		flavorText: "The central stone for this staff can only be gathered during storms on the coldest winter nights by the Shiverchill Tribes.",
		effects: [31]
		}, {
		ID: 64,
		name: "Bonfire",
		member: 1,
		rarity: 2,
		flavorText: "Forged in the heat of the Bonfire Spire, it inspires both fear and awe in anyone who opposes it.",
		effects: [32]
		}, {
		ID: 65,
		name: "Parrot",
		member: 1,
		rarity: 1,
		flavorText: 'A magical parrot that sits on your shoulder. It might be too friendly because it keeps saying "hello" and asking for crackers...urgh.',
		effects: [31]
		}, {
		ID: 66,
		name: "Shell-shocked",
		member: 1,
		rarity: 2,
		flavorText: 'A daring turtle has made this its home. It gets a little nervous whenever someone says the word "fire".',
		effects: [32]
		}, {
		ID: 67,
		name: "Remote Ship",
		member: 1,
		rarity: 2,
		flavorText: "This little remote may look normal, but something is awful strange about it. Maybe because it doesn't need batteries...",
		effects: [32]
		}, {
		ID: 68,
		name: "Mira's Staff",
		member: 0,
		rarity: 3,
		flavorText: "A gift from the great wizard Mira. Just holding this staff makes you feel stronger than ever before.",
		effects: [81]
		}, {
		ID: 69,
		name: "Wrench",
		member: 0,
		rarity: 1,
		flavorText: "Not a very powerful weapon, but certainly useful for tightening bolts!",
		effects: [31]
		}, {
		ID: 70,
		name: "Gizmotron",
		member: 1,
		rarity: 2,
		flavorText: "A modified machine, the gizmotron stores magic inside and releases it at the user's will.",
		effects: [32]
		}, {
		ID: 71,
		name: "Pumpkin Wand",
		member: 1,
		rarity: 1,
		flavorText: "A plastic wand replica of the original Pumpkin Lord's weapon of choice...",
		effects: [31]
		}, {
		ID: 72,
		name: "Spooky Candle",
		member: 1,
		rarity: 1,
		flavorText: "There's nothing really wrong with this candle, but it does kind of give you the creeps.",
		effects: [31]
		}, {
		ID: 73,
		name: "Mjoln-Ice",
		member: 0,
		rarity: 2,
		flavorText: "A mystic hammer wielded by the great Frost Beard - some say the hammer grants its wielder the powers of a Norse god.",
		effects: [32]
		}, {
		ID: 74,
		name: "Pickaxe",
		member: 0,
		rarity: 0,
		flavorText: "A standard-issue pickaxe, popular among the miners who used to inhabit the Shiverchill mines.",
		effects: [30]
		}, {
		ID: 75,
		name: "Energy Staff",
		member: 0,
		rarity: 1,
		flavorText: "This staff likely used to be much more powerful...when it worked. Now, it just seems to be used to intimidate.",
		effects: [31]
		}, {
		ID: 76,
		name: "Glassfire",
		member: 0,
		rarity: 2,
		flavorText: "This strange orb seems to have a small elemental stuck inside, though it seems happy enough in there.",
		effects: [32]
		}, {
		ID: 77,
		name: "Draconyx",
		member: 0,
		rarity: 3,
		flavorText: "There's something about this staff that you don't like - as if strange whispers beckon you to hold it and never let go.",
		effects: [81]
		}, {
		ID: 78,
		name: "Power Orb",
		member: 0,
		rarity: 3,
		flavorText: "This weapon is wielded only by the greatest of Bounty Hunters. Its crystaline orb has a hypnotic draw to all monster near it.",
		effects: [81]
		}, {
		ID: 79,
		name: "Clawed Staff",
		member: 0,
		rarity: 2,
		flavorText: "The standard issue weapon of a Bounty Hunter. Its claw is perfect for catching rogue monsters.",
		effects: [32]
		}],
	boots: [{
		ID: 1,
		name: "Magi Runners",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "It is said that a Magi once ran to the sun with these shoes on. You're not sure if you could, but they sure are fast.",
		effects: [34]
		}, {
		ID: 2,
		name: "Warlock's Slippers",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Many people don't trust Warlocks, so they don't get out much. These keep their feet cozy at home.",
		effects: [34]
		}, {
		ID: 3,
		name: "Crimson Boots",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "These will certainly make a bold statement at your next wizarding get together.",
		effects: [34]
		}, {
		ID: 4,
		name: "Glacial Boots",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Extremely warm, these will keep your feet toasty in the Mountains but elsewhere they might make them sweaty.",
		effects: [34]
		}, {
		ID: 5,
		name: "Dragon Soles",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "Are these dragonskin boots? Comfortable, but they smell a bit like burnt meat and old cave.",
		effects: [35]
		}, {
		ID: 6,
		name: "Sun Walkers",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "Fitted with a handy self-drying flame, you can swim with these on and not have to worry.",
		effects: [35]
		}, {
		ID: 7,
		name: "Training Shoes",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Nothing special but they'll protect your feet during training.",
		effects: [33]
		}, {
		ID: 8,
		name: "Light Shoes",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Lightweight and breathable they'll make your feet move faster and maybe a little less smelly.",
		effects: [33]
		}, {
		ID: 9,
		name: "Cloth Shoes",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Made from cloth, don't get them wet or your feet will be cold all day!",
		effects: [33]
		}, {
		ID: 10,
		name: "Heavy Shoes",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Whoa, these are heavy! Your feet feel pretty safe, but it also feels like you're walking through mud.",
		effects: [33]
		}, {
		ID: 11,
		name: "Leather Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "The choice of the everyday wizard. They say they're hand-crafted in the Spire.",
		effects: [33]
		}, {
		ID: 12,
		name: "Durofibre Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Sleek, stylish and purple...",
		effects: [33]
		}, {
		ID: 13,
		name: "Magi-thread Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "You don't usually go for used boots, but the Magi made these long-lasting and really cool-looking.",
		effects: [33]
		}, {
		ID: 14,
		name: "Pyrium Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "You can wear these boots all year long, just make sure to change your wizard socks!",
		effects: [33]
		}, {
		ID: 15,
		name: "Mithril Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Metal boots? You might not move that fast but your toes are totally protected!",
		effects: [33]
		}, {
		ID: 16,
		name: "Vitrium Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "When you wear them you move more gracefully but also always have the urge to dance.",
		effects: [33]
		}, {
		ID: 17,
		name: "Culix Boots",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Although Culix was a bit stuffy he had great taste in shoes.",
		effects: [33]
		}, {
		ID: 18,
		name: "Trialmaster's Boots",
		member: 1,
		rarity: 4,
		drop: 1,
		flavorText: "Worn by a former master of trials, whose feet seemed to be quite small. They're a little snug.",
		effects: [83]
		}, {
		ID: 19,
		name: "Winter Boots",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "Fuzzy on the inside and waterproof on the outside, the perfect choice for the long winter months.",
		effects: [34]
		}, {
		ID: 20,
		name: "Dragon Spike Boots",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Your friend wore these spiky boots to play wizard soccer once, they don't let him play anymore. I wonder why?",
		effects: [34]
		}, {
		ID: 21,
		name: "Warm Boots",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "These sure do live up to their name.",
		effects: [34]
		}, {
		ID: 22,
		name: "Magic Boots",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "You do feel suddenly more magical, but sometimes people laugh at the pointy toes.",
		effects: [34]
		}, {
		ID: 23,
		name: "Frost Saber Boots",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "Made for battle in the cold, these shoes help you stay on top of the snow instead of sinking in.",
		effects: [35]
		}, {
		ID: 24,
		name: "Firefly Boots",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "The trademark boots of the Firefly Forest. It says they're made with moss and lots of love.",
		effects: [35]
		}, {
		ID: 25,
		name: "Skywalkers",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "A wizard once wanted to see how high he could jump with these shoes on. He's supposed to come back down any day now.",
		effects: [35]
		}, {
		ID: 26,
		name: "Duelist Boots",
		member: 0,
		rarity: 3,
		flavorText: 'Official sponsors of the Annual Wizard Dueling Contest, they say "The Choice of Champions" in big letters on the side. ',
		effects: [82]
		}, {
		ID: 27,
		name: "Shiverchill Boots",
		member: 0,
		rarity: 2,
		drop: 1,
		flavorText: "Commonly worn by the tribes of the Shiverchill Mountains, many travellers take them when going to cold places.",
		effects: [35]
		}, {
		ID: 28,
		name: "Embers",
		member: 0,
		rarity: 1,
		flavorText: "Made for wizards whose feet get cold. It feels like your toes are warming up in front of the fire.",
		effects: [34]
		}],
	relic: [{
		ID: 1,
		name: "Aircorn",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [31]
		}, {
		ID: 2,
		name: "Earthnutt",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [31]
		}, {
		ID: 3,
		name: "Fireseed",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [31]
		}, {
		ID: 4,
		name: "Icycorn",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [31]
		}, {
		ID: 5,
		name: "Waterseed",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [31]
		}, {
		ID: 6,
		name: "Candy Bone",
		member: 1,
		rarity: 1,
		flavorText: "",
		effects: [34]
		}, {
		ID: 7,
		name: "Lover's Band",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [35]
		}, {
		ID: 8,
		name: "Lucky Clover",
		member: 0,
		rarity: 2,
		flavorText: "",
		effects: [33]
		}, {
		ID: 9,
		name: "Luminex Paw",
		member: 1,
		rarity: 2,
		flavorText: "",
		effects: [32]
		}, {
		ID: 10,
		name: "Magic Bandage",
		member: 0,
		rarity: 1,
		flavorText: "",
		effects: [35]
		}],
	hat: [{
		ID: 1,
		name: "Jester's Cap",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Think yourself a comedian? Try on this hat, and you'll be throwing punchlines left and right.",
		effects: [34]
		}, {
		ID: 2,
		name: "Rogue's Hat",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Worn to keep cool in the desert, its magic properties make it popular amongst students.",
		effects: [34]
		}, {
		ID: 3,
		name: "Apprentice Circlet",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "This circlet is adorned with magical jewels, making it very powerful...and expensive.",
		effects: [34]
		}, {
		ID: 4,
		name: "Prankster's Crown",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "This hat happens to have its own personality, so make sure you wash your hair regularly!",
		effects: [34]
		}, {
		ID: 5,
		name: "E-nigma",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Question me this, question me that...how good will you look, wearing this hat?",
		effects: [34]
		}, {
		ID: 6,
		name: "Highlord's Crown",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "An ancient ruler passed this crown down to his children, and now it's in your hands.",
		effects: [34]
		}, {
		ID: 7,
		name: "Hound's Helm",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "The Hound's Helm only looks like a dog...in fact, it was actually made by dogs!",
		effects: [34]
		}, {
		ID: 8,
		name: "Winged Helm",
		type: "",
		member: 0,
		rarity: 1,
		drop: 1,
		flavorText: "This Helm was found in the ruins of an ancient city, but mysteriously disappeared...",
		effects: [34]
		}, {
		ID: 9,
		name: "Mayhem's Guise",
		type: "",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "Mayhem was a warlock that caused lots of trouble. He was so well known that he used to wear this hat to hide among the crowds.",
		effects: [35]
		}, {
		ID: 10,
		name: "Frozen Crown",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "This crown belonged to the terrible Ice King but he gave it away when a witch turned him into a nice king.",
		effects: [34]
		}, {
		ID: 11,
		name: "Infernal Helm",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "The feathers tickle a little bit but this hat sure seems to spook your opponents. Maybe it's because it's still alive!",
		effects: [34]
		}, {
		ID: 12,
		name: "Training Cap",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Keeps your head out of the sun and your hair dry during those tough training days.",
		effects: [33]
		}, {
		ID: 13,
		name: "Light Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "It fits so nicely, and doesn't give you a case of nasty wizarding hat hair.",
		effects: [33]
		}, {
		ID: 14,
		name: "Cloth Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "It's cloth. It's green. It's a green, cloth hat!",
		effects: [33]
		}, {
		ID: 15,
		name: "Heavy Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Someone told you that this was a Platypus that was turned into a hat. You're not sure but it does seem water resistant.",
		effects: [33]
		}, {
		ID: 16,
		name: "Leather Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Leather hats are all the rage these days especially since Worly the Wonderful wears one. ",
		effects: [33]
		}, {
		ID: 17,
		name: "Durofibre Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "In classic wizarding blue, you might think this hat old-fashioned, but the old wizards smile when you wear it.",
		effects: [33]
		}, {
		ID: 18,
		name: "Magi-thread Hat",
		type: "",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The Magi loved the sun most of all, they just didn't like it burning their heads. So they made this popular hat.",
		effects: [33]
		}, {
		ID: 19,
		name: "Pyrium Hat",
		type: "",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "Made with pyrium thread in a classic style. This hat is a good option just about everywhere!",
		effects: [33]
		}, {
		ID: 20,
		name: "Mithril Hat",
		type: "",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "Some think that the mithril in this hat gives you psychic powers but who knows? Maybe you...you're wearing it.",
		effects: [33]
		}, {
		ID: 21,
		name: "Vitrium Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Older wizards don't like how younger ones wear this hat backwards.",
		effects: [33]
		}, {
		ID: 22,
		name: "Culix Hat",
		type: "",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: 'Worn by fans of Culix, the famous historian who wrote "101 wacky warlock wands" and "The Tales of Hapless Headless Heath".',
		effects: [33]
		}, {
		ID: 23,
		name: "Trialmaster's Circlet",
		type: "",
		member: 1,
		rarity: 4,
		flavorText: "This ceremonial circlet is exceedingly rare and grants wisdom to those who wear it. Who would give it up?",
		effects: [83]
		}, {
		ID: 24,
		name: "Winterfest Hat",
		type: "",
		member: 1,
		rarity: 0,
		drop: 1,
		flavorText: "The official hat worn by helpers at Winterfest!",
		effects: [33]
		}, {
		ID: 25,
		name: "Winter Hat",
		type: "",
		member: 0,
		rarity: 2,
		drop: 1,
		flavorText: "It may look like just a winter hat, but it is actually a MAGICAL winter hat!",
		effects: [35]
		}, {
		ID: 26,
		name: "Fancy Tophat",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "This stylish hat is intended to be worn at formal gatherings, but you can wear it anywhere you want.",
		effects: [34]
		}, {
		ID: 27,
		name: "Earmuffs",
		type: "",
		member: 1,
		rarity: 1,
		drop: 1,
		flavorText: "Need to keep your ears warm, but your hair neat? Try these earmuffs on!",
		effects: [34]
		}, {
		ID: 28,
		name: "Parka Hood",
		type: "cover",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "Mrrrrrf mmmrrrhhmhhh mhhhmhmhr!",
		effects: [35]
		}, {
		ID: 29,
		name: "Reindeer Antlers",
		type: "",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "If you've ever needed to look like a reindeer, this is the hat for you!",
		effects: [35]
		}, {
		ID: 30,
		name: "Snowman Head",
		type: "wrap",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "A large snowman mask, and it's even made out of snow! Brrrr!",
		effects: [35]
		}, {
		ID: 31,
		name: "Dragon Helm",
		type: "",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "Legend says that those who wear can hear the songs of dragons. Often its wearers can be heard singing to themselves.",
		effects: [35]
		}, {
		ID: 32,
		name: "Frost Saber Cap",
		type: "",
		member: 1,
		rarity: 2,
		drop: 1,
		flavorText: "When they grow into adults, Frost Saber Cats choose a new form. This one chose to be a hat for some reason.",
		effects: [35]
		}, {
		ID: 33,
		name: "Firefly Hat",
		type: "",
		member: 1,
		rarity: 2,
		flavorText: "A magical hat crafted by the magical creatures in Firefly Forest.",
		effects: [35]
		}, {
		ID: 34,
		name: "Dragon Tiara",
		type: "",
		member: 1,
		rarity: 2,
		flavorText: "Some say that if the correct words are spoken, this tiara will spit flames. Be careful what you say while wearing it!",
		effects: [35]
		}, {
		ID: 35,
		name: "Dragon Spike Crown",
		type: "",
		member: 1,
		rarity: 2,
		flavorText: 'Formerly worn by Eustace Redhale "The King of Dragons" and the last ruler to ride one. It has the power of dragon\'s fire.',
		effects: [35]
		}, {
		ID: 36,
		name: "Duelist Helm",
		type: "",
		member: 0,
		rarity: 2,
		flavorText: "The hat of one of the greatest wizards in the Academy.",
		effects: [35]
		}, {
		ID: 37,
		name: "Shiverchill Hat",
		type: "",
		member: 1,
		rarity: 1,
		flavorText: 'The Shiverchill Tribes wear this hat during important ceremonies like the "Welcome to Winter" and "Tobogganing Tuesdays".',
		effects: [34]
		}, {
		ID: 38,
		name: "Tinder Toque",
		type: "",
		member: 1,
		rarity: 1,
		flavorText: "A celebratory hat worn by the people of Spire on feast days. You can store a lot of food in it if you're sneaky.",
		effects: [34]
		}, {
		ID: 39,
		name: "Captain's Hat",
		type: "",
		member: 1,
		rarity: 1,
		flavorText: "The choice of pirate captains everywhere! It smells like the sea and comes with a cool-looking eye patch!",
		effects: [34]
		}, {
		ID: 40,
		name: "Bandana",
		type: "",
		member: 0,
		rarity: 1,
		flavorText: "The favorite head gear of scurvy dogs because it's very absorbent and pirates love polka dots.",
		effects: [34]
		}, {
		ID: 41,
		name: "Skycap",
		type: "",
		member: 1,
		rarity: 1,
		flavorText: "This is the hat worn by the Skyfolk - the small creatures who live in the clouds above the Academy.",
		effects: [34]
		}, {
		ID: 42,
		name: "Mira's Hood",
		type: "",
		member: 0,
		rarity: 3,
		flavorText: "Mira's hood radiates a powerful energy...",
		effects: [82]
		}, {
		ID: 43,
		name: "Desert Hat",
		type: "",
		member: 0,
		rarity: 1,
		flavorText: "A fashionable hat worn by initiates in the Oasis Institute of Natural Creatures (OINC).",
		effects: [34]
		}, {
		ID: 44,
		name: "Explorer Hat",
		type: "",
		member: 0,
		rarity: 2,
		flavorText: "This hat is rumored to have been worn by Looter Dan, the Academy's greatest explorer.",
		effects: [35]
		}, {
		ID: 45,
		name: "Tinkerer Hat",
		type: "",
		member: 1,
		rarity: 1,
		flavorText: "An old hat, probably worn by the people who built the ancient city.",
		effects: [34]
		}, {
		ID: 46,
		name: "Robot Mask",
		type: "mask",
		member: 1,
		rarity: 2,
		flavorText: "You aren't a robot, but this hat sure makes you look like one!",
		effects: [35]
		}, {
		ID: 47,
		name: "TEK-Y4 Headphones",
		type: "",
		member: 1,
		rarity: 1,
		flavorText: "These headphones are used to enhance the dancing skills of the TEK-Y4 dancing robots!",
		effects: [34]
		}, {
		ID: 48,
		name: "Pumpkinhead",
		type: "wrap",
		member: 1,
		rarity: 2,
		flavorText: "This actually smells like a pumpkin! Kind of sweaty, though.",
		effects: [35]
		}, {
		ID: 49,
		name: "Luminite Mask",
		type: "mask",
		member: 1,
		rarity: 1,
		flavorText: "A plastic Luminite mask...pretty well-made, I think!",
		effects: [34]
		}, {
		ID: 50,
		name: "Specter Hood",
		type: "mask",
		member: 1,
		rarity: 1,
		flavorText: "The hood of a creepy specter - a bit dingy, but that just makes it even creepier.",
		effects: [34]
		}, {
		ID: 51,
		name: "Franky Mask",
		type: "",
		member: 0,
		rarity: 1,
		flavorText: "A plastic mask of Franky the Stein, the popular TV monster.",
		effects: [34]
		}, {
		ID: 52,
		name: "Skelly Mask",
		type: "",
		member: 0,
		rarity: 1,
		flavorText: "A plastic mask of a skelly.",
		effects: [34]
		}, {
		ID: 53,
		name: "Wolfy Mask",
		type: "",
		member: 0,
		rarity: 1,
		flavorText: "A plastic wolf mask... ooooo scary!",
		effects: [34]
		}, {
		ID: 54,
		name: "Climber's Toque",
		type: "",
		member: 0,
		rarity: 1,
		flavorText: "A thick, durable knitted toque, perfect for braving the harsh mountain conditions.",
		effects: [34]
		}, {
		ID: 55,
		name: "Featherwing Helm",
		type: "mask",
		member: 1,
		rarity: 1,
		flavorText: "A standard viking helmet, but with wings! Who cares if they don't make you fly, they're wings!",
		effects: [33]
		}, {
		ID: 56,
		name: "Frost Beard's Mug",
		type: "mask",
		member: 1,
		rarity: 2,
		flavorText: "The helm of the great Frost Beard. Causes the wearer to grow a beard of ice.",
		effects: [35]
		}, {
		ID: 57,
		name: "Lady Yeti Mask",
		type: "mask",
		member: 1,
		rarity: 1,
		flavorText: "A Yeti mask covered in makeup...",
		effects: [34]
		}, {
		ID: 58,
		name: "Male Yeti Mask",
		type: "mask",
		member: 1,
		rarity: 1,
		flavorText: "A Yeti mask...so scary!",
		effects: [34]
		}, {
		ID: 59,
		name: "Red Helm",
		type: "mask",
		member: 0,
		rarity: 1,
		flavorText: "This relic from a more technical age seems to be restored perfectly...it even has that new car smell!",
		effects: [34]
		}, {
		ID: 60,
		name: "Ghastly Hood",
		type: "mask",
		member: 0,
		rarity: 2,
		flavorText: "A strange feeling overwhelms you when you put on this hood; it makes you feel...mysterious.",
		effects: [35]
		}, {
		ID: 61,
		name: "Draconyx Helm",
		type: "mask",
		member: 0,
		rarity: 3,
		flavorText: "This helm was worn by the warrior wizards of legend - meant only for those who passed the toughest of tests.",
		effects: [82]
		}, {
		ID: 62,
		name: "Black Fang",
		type: "mask",
		member: 0,
		rarity: 3,
		flavorText: "This helm is worn only by the greatest of Bounty Hunters. Its staring gaze strikes fear into the hearts of all who see it!",
		effects: [82]
		}, {
		ID: 63,
		name: "Hunter Hat",
		type: "mask",
		member: 0,
		rarity: 2,
		flavorText: "The standard issue hat of a Bounty Hunter. It is durable enough to wear into storms and provides excellent visibility.",
		effects: [35]
		}],
	item: [{
		ID: 1,
		name: "Apple",
		type: "consumable",
		effect: {
			hp: 16
		},
		member: 0,
		rarity: 0,
		flavorText: "Looks delicious!"
		}, {
		ID: 2,
		name: "Tin Can",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "An old tin can. Probably contained some soup or maybe some vegetables."
		}, {
		ID: 3,
		name: "Salad",
		type: "consumable",
		effect: {
			hp: 24
		},
		member: 0,
		rarity: 0,
		flavorText: "Looks delicious!"
		}, {
		ID: 4,
		name: "Croissant",
		type: "consumable",
		effect: {
			hp: 16
		},
		member: 0,
		rarity: 0,
		flavorText: "Looks delicious!"
		}, {
		ID: 5,
		name: "Tooth",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "It looks like the tooth of some monster. I don't think this monster brushed his teeth too often!"
		}, {
		ID: 6,
		name: "Large Scale",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "The scale of a large reptile, probably a dragon!"
		}, {
		ID: 7,
		name: "White Feather",
		member: 0,
		rarity: 0,
		flavorText: "The feather of a white bird. I've heard that some people at the Academy collect feathers..."
		}, {
		ID: 8,
		name: "Fish Bone",
		member: 0,
		rarity: 0,
		flavorText: "Fish bones? Gross! Why am I even carrying this around?!"
		}, {
		ID: 9,
		name: "Red Feather",
		member: 0,
		rarity: 0,
		flavorText: "The feather of a red bird. I've heard that some people at the Academy collect feathers..."
		}, {
		ID: 10,
		name: "Green Feather",
		member: 0,
		rarity: 0,
		flavorText: "The feather of a green bird. I've heard that some people at the Academy collect feathers..."
		}, {
		ID: 11,
		name: "Cake",
		type: "consumable",
		effect: {
			hp: 32
		},
		member: 0,
		rarity: 0,
		flavorText: "A cake? I guess monsters celebrate birthday's too..."
		}, {
		ID: 12,
		name: "Blue Feather",
		member: 0,
		rarity: 0,
		flavorText: "The feather of a blue bird. I've heard that some people at the Academy collect feathers..."
		}, {
		ID: 13,
		name: "Gold Ring",
		member: 0,
		rarity: 0,
		flavorText: "A gold ring! I wonder how much it's worth?"
		}, {
		ID: 14,
		name: "Silver Ring",
		member: 0,
		rarity: 0,
		flavorText: "A silver ring! I wonder how much it's worth?"
		}, {
		ID: 15,
		name: "Old Sock",
		member: 0,
		rarity: 0,
		drop: 1,
		flavorText: "Weird! You ever wonder where all your missing socks go?"
		}, {
		ID: 16,
		name: "Purple Feather",
		member: 0,
		rarity: 0,
		flavorText: "The feather of a purple bird. I've heard that some people at the Academy collect feathers..."
		}, {
		ID: 17,
		name: "Carmine Floret",
		member: 0,
		rarity: 0,
		flavorText: "These flowers tend to spread quickly and are a common sight in Firefly Forest."
		}, {
		ID: 18,
		name: "Helio Floret",
		member: 0,
		rarity: 0,
		flavorText: "These flowers are only found growing in trees, making them hard to reach."
		}, {
		ID: 19,
		name: "Slate Floret",
		member: 0,
		rarity: 0,
		flavorText: "The Slate Floret can only be found growing underneath the largest rocks, far away from the sunlight."
		}, {
		ID: 20,
		name: "Ring of the Forest",
		member: 0,
		rarity: 0,
		flavorText: "This ring is made from Forest Emeralds, which are hard to find in Firefly Forest."
		}, {
		ID: 21,
		name: "Forest Emerald",
		member: 0,
		rarity: 0,
		flavorText: "The forest emerald is a bright, glowing stone found only in Firefly Forest."
		}, {
		ID: 22,
		name: "Chicken",
		type: "consumable",
		effect: {
			hp: 40
		},
		member: 0,
		rarity: 0,
		flavorText: "Looks delicious!"
		}, {
		ID: 23,
		name: "Seedling",
		member: 0,
		rarity: 0,
		flavorText: "The Firefly Forest is full of roots, which can grow into all sorts of neat things!"
		}, {
		ID: 24,
		name: "Mandrake",
		member: 0,
		rarity: 0,
		flavorText: "In the Firefly Forest, sometimes roots sprout life! The result - the magical Mandrake!"
		}, {
		ID: 25,
		name: "Pizza",
		type: "consumable",
		effect: {
			hp: 48
		},
		member: 0,
		rarity: 0,
		flavorText: "Looks delicious!"
		}, {
		ID: 26,
		name: "Lucky Coin",
		member: 0,
		rarity: 0,
		flavorText: "I wonder whose coin this is...? It looks like it's rare..."
		}, {
		ID: 27,
		name: "Icy Floret",
		member: 0,
		rarity: 0,
		flavorText: "Also called the Snow Flower, this plant thrives in the harsh cold of the mountains."
		}, {
		ID: 28,
		name: "Glacier Diamond",
		member: 0,
		rarity: 0,
		flavorText: "This gem looks so much like ice that students often pass it by without notice."
		}, {
		ID: 29,
		name: "Ring of the Glacier",
		member: 0,
		rarity: 0,
		flavorText: "This ring is made from Glacier Diamonds, which are hard to find in Shiverchill Mountains."
		}, {
		ID: 30,
		name: "Chillymoth",
		member: 0,
		rarity: 0,
		flavorText: "When frightened, a Chillymoth turns into ice and people often keep them as trinkets."
		}, {
		ID: 31,
		name: "Mountain Star",
		member: 0,
		rarity: 0,
		flavorText: "These mysterious gems are formed in the ice on moonlit nights, but never melt."
		}, {
		ID: 32,
		name: "Frozen Object",
		member: 0,
		rarity: 0,
		flavorText: "It looks like there's something frozen inside! I wonder what it is?"
		}, {
		ID: 33,
		name: "Fire Flower",
		member: 0,
		rarity: 0,
		flavorText: "This flower's petals look like a dancing flame, but the flower is cool to the touch."
		}, {
		ID: 34,
		name: "Volcanic Ruby",
		member: 0,
		rarity: 0,
		flavorText: "A glowing gem that can be found only in the hottest of places."
		}, {
		ID: 35,
		name: "Sunfire Pod",
		member: 0,
		rarity: 0,
		flavorText: "Nobody really knows how a sunfire pod is created, or where it comes from."
		}, {
		ID: 36,
		name: "Embershard",
		member: 0,
		rarity: 0,
		flavorText: "Not actually a gem, but instead a piece of glass or metal that has been formed in a volcano."
		}, {
		ID: 37,
		name: "Ring of the Volcano",
		member: 0,
		rarity: 0,
		flavorText: "This ring is made with Volcanic Rubies, which are hard to find in Bonfire Spire."
		}, {
		ID: 38,
		name: "Message in a Bottle",
		member: 0,
		rarity: 0,
		flavorText: "Looks like someone left a message in a bottle...I wonder what it says...?"
		}, {
		ID: 39,
		name: "Shark Tooth",
		member: 0,
		rarity: 0,
		flavorText: "This tooth is huge and sharp...it must have come from a shark."
		}, {
		ID: 40,
		name: "Red Shell",
		member: 0,
		rarity: 0,
		flavorText: "A red clam shell, found in clusters on sunny beaches."
		}, {
		ID: 41,
		name: "Blue Shell",
		member: 0,
		rarity: 0,
		flavorText: "A blue clam shell, found in clusters on sunny beaches."
		}, {
		ID: 42,
		name: "White Shell",
		member: 0,
		rarity: 0,
		flavorText: "A white clam shell, found in clusters on sunny beaches."
		}, {
		ID: 43,
		name: "Confused Shark",
		member: 0,
		rarity: 0,
		flavorText: "This little shark looks confused...better keep it in water for now."
		}, {
		ID: 44,
		name: "Bag of Flour",
		member: 0,
		rarity: 0,
		flavorText: "Flour used for baking."
		}, {
		ID: 45,
		name: "Bag of Spices",
		member: 0,
		rarity: 0,
		flavorText: "Spices used in cooking"
		}, {
		ID: 46,
		name: "Bottled Cloud",
		member: 0,
		rarity: 0,
		flavorText: ""
		}, {
		ID: 47,
		name: "Gears",
		member: 0,
		rarity: 0,
		flavorText: "These look like they were part of a machine. I wonder what it did?"
		}, {
		ID: 48,
		name: "Medallion",
		member: 0,
		rarity: 0,
		flavorText: "Strange markings are found on this medallion."
		}, {
		ID: 49,
		name: "Spare Parts",
		member: 0,
		rarity: 0,
		flavorText: "Various metal pieces...maybe they're part of a puzzle?"
		}, {
		ID: 50,
		name: "Cloth Scrap",
		member: 0,
		rarity: 0,
		flavorText: "It looks like this cloth was torn from some larger fabric."
		}, {
		ID: 51,
		name: "Scrap Wood",
		member: 0,
		rarity: 0,
		flavorText: "A piece of scrap wood, probably useful for building."
		}, {
		ID: 52,
		name: "Scepter",
		member: 0,
		rarity: 0,
		flavorText: "This metal rod looks a little shabby..."
		}, {
		ID: 53,
		name: "Wrench",
		member: 0,
		rarity: 0,
		flavorText: "A little worn, but probably still works great."
		}, {
		ID: 54,
		name: "Lightning Stone",
		member: 0,
		rarity: 0,
		flavorText: "This stone is supposed to hold electricity...my hair is standing on end!"
		}, {
		ID: 55,
		name: "Doubloon",
		member: 0,
		rarity: 0,
		flavorText: "It's a pirate coin! I wonder if it's worth anything..."
		}, {
		ID: 56,
		name: "Scroll of Paper",
		member: 0,
		rarity: 0,
		flavorText: "A roll of paper, looks pretty important."
		}, {
		ID: 57,
		name: "Spyglass",
		member: 0,
		rarity: 0,
		flavorText: "This spyglass is in pretty good condition...someone took good care of it!"
		}, {
		ID: 58,
		name: "Seeds",
		member: 0,
		rarity: 0,
		flavorText: "A bunch of little seeds...who knows what they will grow into."
		}, {
		ID: 59,
		name: "Green Key",
		member: 0,
		rarity: 0,
		flavorText: "A strange-looking key adorned with a green jewel."
		}, {
		ID: 60,
		name: "Animal Tag",
		member: 0,
		rarity: 0,
		flavorText: "It looks like a tag for animal tracking..."
		}, {
		ID: 61,
		name: "Scoog's Hat",
		member: 0,
		rarity: 0,
		flavorText: "This must be Professor Scoog's hat...smells like dog food..."
		}, {
		ID: 62,
		name: "Moog's Evil Scheme",
		member: 0,
		rarity: 0,
		flavorText: "This appears to be a novel outlining all of Moog's plan to capture the dynos. It's very well-written."
		}, {
		ID: 63,
		name: "Digging Equipment",
		member: 0,
		rarity: 0,
		flavorText: "It looks like a machine for digging...but the batteries seem to have fallen out."
		}, {
		ID: 64,
		name: "Dyno Egg",
		member: 0,
		rarity: 0,
		flavorText: "It's a dyno egg! It looks like it's safe and intact."
		}, {
		ID: 65,
		name: "Prize Ribbon",
		member: 0,
		rarity: 0,
		flavorText: "Looks like a cheap prize ribbon for winning the Robolympics...I wonder what I can use it for?"
		}, {
		ID: 66,
		name: "Scrap of Paper",
		member: 0,
		rarity: 0,
		flavorText: "Contains a lot of scribbles and doodles."
		}, {
		ID: 67,
		name: "Monster Note",
		member: 0,
		rarity: 0,
		flavorText: "It says - 'Huffy mop derp biggy book Flora'. Okay..."
		}, {
		ID: 68,
		name: "Broken Stone",
		member: 0,
		rarity: 0,
		flavorText: "Looks like a piece of a bridge, covered in claw marks."
		}, {
		ID: 69,
		name: "Broken Flute",
		member: 0,
		rarity: 0,
		flavorText: "A wooden flute...looks like it was broken in half."
		}, {
		ID: 70,
		name: "Magic Flute",
		member: 0,
		rarity: 0,
		flavorText: "A wooden flute containing the magical powers of the forest."
		}, {
		ID: 71,
		name: "Power Crystal",
		member: 0,
		rarity: 0,
		flavorText: "Crystal used to power the old furnaces in the ice caves."
		}, {
		ID: 72,
		name: "Miner Shovel",
		member: 0,
		rarity: 0,
		flavorText: "A shovel...looks sturdy enough to dig through anything!"
		}, {
		ID: 73,
		name: "Spoon",
		member: 0,
		rarity: 0,
		flavorText: "A very large, Yeti-sized spoon. Definitely not a shovel."
		}, {
		ID: 74,
		name: "Crystal",
		member: 0,
		rarity: 0,
		flavorText: "A dim, worn-out Power Crystal. It no longer possesses enough energy to be of any use."
		}, {
		ID: 75,
		name: "Bok's Key",
		member: 0,
		rarity: 0,
		flavorText: "A key to a chest containing Bok's shovel."
		}, {
		ID: 76,
		name: "Firework",
		type: "consumable",
		effect: {
			fx: "firework"
		},
		member: 0,
		rarity: 0,
		flavorText: "Classic fireworks, great to use during a celebration."
		}, {
		ID: 77,
		name: "Confetti",
		type: "consumable",
		effect: {
			fx: "confetti"
		},
		member: 0,
		rarity: 0,
		flavorText: "What's a party without confetti?"
		}],
	key: [{
		ID: 1,
		name: "Shovel",
		levels: 3,
		flavorText: "A shovel used for digging up fossils."
		}, {
		ID: 2,
		name: "TEK-Y4",
		levels: 5,
		flavorText: "A dancing robot with a neural network processor for dance move acceleration and increased groove accuracy."
		}, {
		ID: 3,
		name: "Firefly Gem",
		levels: 1,
		flavorText: "An emerald representing your mastery of Flora's trials in Firefly Forest."
		}, {
		ID: 4,
		name: "Shiverchill Gem",
		levels: 1,
		flavorText: "A diamond representing your aid in Bok's woes in the Shiverchill Mountains."
		}, {
		ID: 5,
		name: "Bounty Note",
		levels: 1,
		flavorText: "This bounty note means you have accepted the 1st bounty for today. Check the bounty section of the Awards Menu for details."
		}, {
		ID: 6,
		name: "Bounty Note",
		levels: 1,
		flavorText: "This bounty note means you have accepted the 2nd bounty for today. Check the bounty section of the Awards Menu for details."
		}, {
		ID: 7,
		name: "Bounty Note",
		levels: 1,
		flavorText: "This bounty note means you have accepted the 3rd bounty for today. Check the bounty section of the Awards Menu for details."
		}],
	fossil: [{
		ID: 1,
		name: "Terrosaur Bone",
		count: 20,
		rarity: 0,
		flavorText: "This bone looks like a piece from a much larger skeleton. I better find them all!"
		}, {
		ID: 2,
		name: "Stampeed Bone",
		count: 20,
		rarity: 0,
		flavorText: "This bone looks like a piece from a much larger skeleton. I better find them all!"
		}, {
		ID: 3,
		name: "Claustro Bone",
		count: 10,
		rarity: 0,
		flavorText: "This bone looks like a piece from a much larger skeleton. I better find them all!"
		}, {
		ID: 4,
		name: "Pterrocks Bone",
		count: 10,
		rarity: 0,
		flavorText: "This bone looks like a piece from a much larger skeleton. I better find them all!"
		}, {
		ID: 5,
		name: "Beetle in Amber",
		count: 1,
		rarity: 0,
		flavorText: "It appears to be a large beetle, preserved in a piece of amber. Neat!"
		}, {
		ID: 6,
		name: "Trellobyte",
		count: 1,
		rarity: 0,
		flavorText: "Trellobytes once scavenged the ocean floors, looking for scraps and collectible cards."
		}, {
		ID: 7,
		name: "Sharp Claw",
		count: 1,
		rarity: 0,
		flavorText: "A large claw to some carnivore...or perhaps an ill-tempered herbivore."
		}, {
		ID: 8,
		name: "Dragonfly in Amber",
		count: 1,
		rarity: 0,
		flavorText: "This dragonfly must have landed on a tree, and got caught in some tree sap."
		}, {
		ID: 9,
		name: "Shell",
		count: 1,
		rarity: 0,
		flavorText: "This shell was likely once home to a large crustacean, or perhaps just a fancy-looking thermos."
		}, {
		ID: 10,
		name: "Mosquito in Amber",
		count: 1,
		rarity: 0,
		flavorText: "These are often treasured as jewelry, and some old men like to place them atop their canes."
		}, {
		ID: 11,
		name: "Piece of Fossilized Fish",
		count: 5,
		rarity: 0,
		flavorText: "A fragment of a fossilized fish...it looks like there are more out there!"
		}, {
		ID: 12,
		name: "Piece of Fossilized Plant",
		count: 5,
		rarity: 0,
		flavorText: "A fragment of a fossilized plant...it looks like there are more out there!"
		}, {
		ID: 13,
		name: "Terrosaur Skeleton",
		rarity: 3,
		flavorText: "A skeleton of the awesome terrosaur, the meanest dyno in history!",
		recipe: [{
			ID: 1,
			type: "fossil",
			N: 20
			}]
		}, {
		ID: 14,
		name: "Stampeed Skeleton",
		rarity: 3,
		flavorText: "A skeleton of a stampeed. It looks pretty cool, and boy is it heavy!",
		recipe: [{
			ID: 2,
			type: "fossil",
			N: 20
			}]
		}, {
		ID: 15,
		name: "Claustro Skeleton",
		rarity: 2,
		flavorText: "This skeleton of a claustro is actually a combination of bone and cartilage.",
		recipe: [{
			ID: 3,
			type: "fossil",
			N: 10
			}]
		}, {
		ID: 16,
		name: "Pterrocks Skeleton",
		rarity: 2,
		flavorText: "This pterrocks skeleton is incredibly fragile, and is held together with strong glue and wire.",
		recipe: [{
			ID: 4,
			type: "fossil",
			N: 10
			}]
		}, {
		ID: 17,
		name: "Beetle in Amber",
		rarity: 1,
		flavorText: "It appears to be a large beetle, preserved in a piece of amber. Neat!",
		recipe: [{
			ID: 5,
			type: "fossil",
			N: 1
			}]
		}, {
		ID: 18,
		name: "Trellobyte",
		rarity: 1,
		flavorText: "Trellobytes once scavenged the ocean floors, looking for scraps and collectible cards.",
		recipe: [{
			ID: 6,
			type: "fossil",
			N: 1
			}]
		}, {
		ID: 19,
		name: "Sharp Claw",
		rarity: 1,
		flavorText: "A large claw to some carnivore...or perhaps an ill-tempered herbivore.",
		recipe: [{
			ID: 7,
			type: "fossil",
			N: 1
			}]
		}, {
		ID: 20,
		name: "Dragonfly in Amber",
		rarity: 1,
		flavorText: "This dragonfly must have landed on a tree, and got caught in some tree sap.",
		recipe: [{
			ID: 8,
			type: "fossil",
			N: 1
			}]
		}, {
		ID: 21,
		name: "Shell",
		rarity: 1,
		flavorText: "This shell was likely once a home to a large crustacean, or perhaps just a fancy-looking thermos.",
		recipe: [{
			ID: 9,
			type: "fossil",
			N: 1
			}]
		}, {
		ID: 22,
		name: "Mosquito in Amber",
		rarity: 1,
		flavorText: "These are often treasured as jewellry, and some old men like to place them atop their canes.",
		recipe: [{
			ID: 10,
			type: "fossil",
			N: 1
			}]
		}, {
		ID: 23,
		name: "Fossilized Fish",
		rarity: 2,
		flavorText: "This fish was likely a deep ocean dweller; perhaps a darkfish, crazyfish, or maybe the rare stinkyfish.",
		recipe: [{
			ID: 11,
			type: "fossil",
			N: 5
			}]
		}, {
		ID: 24,
		name: "Fossilized Plant",
		rarity: 2,
		flavorText: "A small fern, fossilized over millions of years. This plant still exists on the island today.",
		recipe: [{
			ID: 12,
			type: "fossil",
			N: 5
			}]
		}],
	fish: [{
		ID: 1,
		name: "Fish",
		weightMin: 1,
		weightMax: 10,
		str: 10,
		spd: 10,
		hourMin: 1,
		hourMax: 24,
		rod: 1,
		bait: [1, 2, 3]
		}],
	dorm: [{
		ID: 1,
		name: "Comfy Chair",
		member: 0,
		rarity: 0,
		category: "Comfy",
		price: 300,
		r: 4,
		flavorText: "Just a regular old chair. You can sit on it; that's all you need, right?"
		}, {
		ID: 2,
		name: "Steel Chair",
		member: 0,
		rarity: 0,
		category: "Comfy",
		price: 350,
		r: 4,
		flavorText: "A sturdy steel chair. One questions the comfort of such a thing."
		}, {
		ID: 3,
		name: "Wooden Nightstand",
		member: 0,
		rarity: 0,
		category: "Surface",
		price: 500,
		r: 4,
		flavorText: "A standard nightstand. Perfect for storing bedtime stories."
		}, {
		ID: 4,
		name: "Steel Table",
		member: 0,
		rarity: 0,
		category: "Surface",
		price: 400,
		r: 0,
		flavorText: "A sturdy steel table. Much more practical than its chair counterpart."
		}, {
		ID: 5,
		name: "Glass Table",
		member: 1,
		rarity: 0,
		category: "Surface",
		price: 600,
		r: 0,
		flavorText: "A standard glass table. Don't jump on it!"
		}, {
		ID: 6,
		name: "Pink Flowerpot",
		member: 0,
		rarity: 0,
		category: "Plants",
		price: 200,
		r: 0,
		flavorText: "This little pink flower is a common gift on Valentine's Day."
		}, {
		ID: 7,
		name: "Bushy Plant",
		member: 1,
		rarity: 0,
		category: "Plants",
		price: 200,
		mprice: 100,
		r: 0,
		flavorText: "A regular green potted plant. Gives off a distinct aroma."
		}, {
		ID: 8,
		name: "Tall Fern",
		member: 1,
		rarity: 0,
		category: "Plants",
		price: 200,
		mprice: 100,
		r: 0,
		flavorText: "This plant has grown to be a bit unkempt. Perfect for those who want a wild look for their room."
		}, {
		ID: 9,
		name: "Forest Flower",
		member: 1,
		rarity: 0,
		category: "Plants",
		price: 150,
		mprice: 100,
		r: 0,
		flavorText: "This large wild flower can only be found during Spring in the Firefly forest. It's perfume like odor keeps bugs away."
		}, {
		ID: 10,
		name: "Purple Couch",
		member: 1,
		rarity: 0,
		category: "Comfy",
		price: 600,
		mprice: 300,
		r: 4,
		flavorText: "Like a regular couch, but purple."
		}, {
		ID: 11,
		name: "Green Couch",
		member: 1,
		rarity: 1,
		category: "Comfy",
		price: 600,
		mprice: 400,
		r: 4,
		flavorText: "Like a regular couch, but green."
		}, {
		ID: 12,
		name: "Purple Chair",
		member: 1,
		rarity: 1,
		category: "Comfy",
		price: 400,
		mprice: 250,
		r: 4,
		flavorText: "This large, lazy chair is so comfy, that once you sit on it, you'll never want to stand up again."
		}, {
		ID: 13,
		name: "Bookshelf",
		member: 1,
		rarity: 0,
		category: "Storage",
		price: 800,
		mprice: 450,
		r: 4,
		flavorText: "A regular wooden bookshelf, perfect for storing all of your favorite spell books."
		}, {
		ID: 14,
		name: "Wooden Table",
		member: 1,
		rarity: 0,
		category: "Surface",
		price: 300,
		mprice: 150,
		r: 0,
		flavorText: "A standard wooden table. The most standard of all the tables."
		}, {
		ID: 15,
		name: "Small Chair",
		member: 1,
		rarity: 0,
		category: "Comfy",
		price: 300,
		mprice: 150,
		r: 4,
		flavorText: "Tiny chairs made for tiny individuals."
		}, {
		ID: 16,
		name: "Wardrobe",
		member: 1,
		rarity: 1,
		category: "Storage",
		price: 1200,
		mprice: 750,
		r: 4,
		flavorText: "This large wooden wardrobe has all the space you could need to store your wizarding outfits."
		}, {
		ID: 17,
		name: "Starry Bed",
		member: 0,
		rarity: 1,
		category: "Comfy",
		price: 1500,
		mprice: 800,
		r: 4,
		flavorText: "This sky themed bed is so fluffy, it's like lying on a cloud."
		}, {
		ID: 18,
		name: "Square Window",
		member: 0,
		rarity: 0,
		category: "Wall",
		price: 250,
		mprice: 100,
		r: 2,
		flavorText: "A square window, or is it 4 square windows?"
		}, {
		ID: 19,
		name: "Fancy Window",
		member: 1,
		rarity: 1,
		category: "Wall",
		price: 350,
		mprice: 150,
		r: 2,
		flavorText: "The fanciest of windows. Not actually, but it is pretty fancy."
		}, {
		ID: 20,
		name: "Dining Table",
		member: 1,
		rarity: 1,
		category: "Surface",
		price: 850,
		mprice: 550,
		r: 2,
		flavorText: "This spacious table is perfect for large gatherings and parties."
		}, {
		ID: 21,
		name: "Treasure Chest",
		member: 1,
		rarity: 1,
		category: "Storage",
		price: 1500,
		mprice: 600,
		r: 2,
		flavorText: "A chest to store all your treasures."
		}, {
		ID: 22,
		name: "Frosty Bear",
		member: 1,
		rarity: 2,
		category: "Items",
		mprice: 350,
		r: 4,
		flavorText: "This cuddly guy is perfect for those lonely days at home."
		}, {
		ID: 23,
		name: "Bawk-bawk Clock",
		member: 1,
		rarity: 2,
		category: "Wall",
		mprice: 350,
		r: 2,
		flavorText: "Never be late again! The squawking sound this clock makes is so annoying, it is impossible to ignore."
		}, {
		ID: 24,
		name: "Dragon Mirror",
		member: 1,
		rarity: 2,
		category: "Wall",
		price: 650,
		mprice: 350,
		r: 2,
		flavorText: "A mirror that shows its user as a dragon. It was created by Small Hood Nagol, a wizard notorious for his obsession with dragons."
		}, {
		ID: 25,
		name: "Frozen Mirror",
		member: 1,
		rarity: 1,
		category: "Wall",
		price: 750,
		mprice: 400,
		r: 2,
		flavorText: "A mirror made of ice. There is a label on the back that says 'Warning keep frozen'."
		}, {
		ID: 26,
		name: "Round Mirror",
		member: 1,
		rarity: 0,
		category: "Wall",
		price: 400,
		mprice: 250,
		r: 2,
		flavorText: "This mirror is so perfectly rounded, it is impossible to tell the top from the bottom."
		}, {
		ID: 27,
		name: "Frozen Throne",
		member: 1,
		rarity: 2,
		category: "Comfy",
		price: 3500,
		mprice: 500,
		r: 4,
		flavorText: "This throne doesn't look too comfy, but gosh does it look cool."
		}, {
		ID: 28,
		name: "Forest Wardrobe",
		member: 1,
		rarity: 2,
		category: "Storage",
		price: 3e3,
		mprice: 600,
		r: 4,
		flavorText: "A wardrobe made carved of wood from the Big Tree. The vines on the side are grown around the closet for a unique look every time."
		}, {
		ID: 29,
		name: "Purple Potted Plant",
		member: 1,
		rarity: 0,
		category: "Plants",
		price: 200,
		mprice: 0,
		r: 0,
		flavorText: "This purple potted plant is picked in the plains and is perfect for perching atop any platform."
		}, {
		ID: 30,
		name: "Red Potted Plant",
		member: 1,
		rarity: 0,
		category: "Plants",
		price: 200,
		mprice: 0,
		r: 0,
		flavorText: "This red potted plant emanates a light pulsating glow. It is picked from the Fiery Forest surrounding Bonfire Spire."
		}, {
		ID: 31,
		name: "Mushroom Lamp",
		member: 1,
		rarity: 0,
		category: "Lamps",
		price: 350,
		mprice: 150,
		r: 0,
		flavorText: "A special mushroom for the Firefly forest. When shocked with electricity, it gives off a warm glow from its spots."
		}, {
		ID: 32,
		name: "Table Lamp",
		member: 1,
		rarity: 0,
		category: "Lamps",
		price: 250,
		mprice: 150,
		r: 0,
		flavorText: "A normal table lamp. You can put it on a chair if you're feeling crazy."
		}, {
		ID: 33,
		name: "Flower Lamp",
		member: 1,
		rarity: 0,
		category: "Lamps",
		price: 350,
		mprice: 150,
		r: 0,
		flavorText: "Looks like a flower, smells like a flower, but isn't a flower. Its a lamp."
		}, {
		ID: 34,
		name: "Aquarium",
		member: 1,
		rarity: 1,
		category: "Items",
		price: 600,
		mprice: 250,
		r: 2,
		flavorText: "Keep your favorite water pets happy with this personal aquarium."
		}, {
		ID: 35,
		name: "Icy Table",
		member: 1,
		rarity: 2,
		category: "Surface",
		price: 600,
		mprice: 200,
		r: 0,
		flavorText: "A table made of ice. Designed for the inhabitants of Shiverchill before the Ice Worm appeared."
		}, {
		ID: 36,
		name: "Flame Banner",
		member: 1,
		rarity: 1,
		category: "Wall",
		price: 1e3,
		mprice: 250,
		r: 2,
		flavorText: "A banner flown only by those who have mastered the art of fire spells."
		}, {
		ID: 37,
		name: "Snow Banner",
		member: 1,
		rarity: 1,
		category: "Wall",
		price: 1e3,
		mprice: 250,
		r: 2,
		flavorText: "A banner flown only by those who have mastered the art of ice spells."
		}, {
		ID: 38,
		name: "Forest Banner",
		member: 1,
		rarity: 1,
		category: "Wall",
		price: 1e3,
		mprice: 250,
		r: 2,
		flavorText: "A banner flown only by those who have mastered the art of earth spells."
		}, {
		ID: 39,
		name: "Stuffed Dragon",
		member: 1,
		rarity: 3,
		category: "Items",
		mprice: 200,
		r: 4,
		flavorText: "A plush dragon toy. It is surprisingly not particularly hug-able, as the skin is made from real dragon hide."
		}, {
		ID: 40,
		name: "Fire Throne",
		member: 1,
		rarity: 2,
		category: "Comfy",
		price: 3500,
		mprice: 500,
		r: 4,
		flavorText: "Keep your touche warm with the ultimate in heated seats. A flaming throne!"
		}, {
		ID: 41,
		name: "Tall Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		price: 600,
		mprice: 200,
		r: 0,
		flavorText: "This lamp is so tall its a miracle if you can get it into your room."
		}, {
		ID: 42,
		name: "Sunfire Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		price: 2500,
		mprice: 400,
		r: 0,
		flavorText: "A lamp that emanates a large amount of heat, as its light source is a heated iron core."
		}, {
		ID: 43,
		name: "Ice Shard Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		price: 2500,
		mprice: 400,
		r: 0,
		flavorText: "A lamp that shines brilliantly in many colors, filtering light through its ice prisms."
		}, {
		ID: 44,
		name: "Canopy Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		price: 2500,
		mprice: 400,
		r: 0,
		flavorText: "A lamp made from a firefly plant. These plants only grow in the Firefly forest and glow much like a giant firefly's tail."
		}, {
		ID: 45,
		name: "Forest Throne",
		member: 1,
		rarity: 2,
		category: "Comfy",
		price: 3500,
		mprice: 500,
		r: 4,
		flavorText: "A throne carved from a stump. It is still a living plant, so be sure to water it!"
		}, {
		ID: 46,
		name: "Phoenix Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		price: 2500,
		mprice: 400,
		r: 4,
		flavorText: "A lamp designed to look like a phoenix."
		}, {
		ID: 47,
		name: "Ice Phoenix Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		price: 2500,
		mprice: 400,
		r: 4,
		flavorText: "A lamp designed to look like a phoenix, but icey for some reason."
		}, {
		ID: 48,
		name: "Amber",
		member: 1,
		rarity: 2,
		category: "Items",
		r: 2,
		flavorText: "This piece of amber has an ancient bug pet preserved inside of it. It makes for quite the conversation piece."
		}, {
		ID: 49,
		name: "Anchor Chair",
		member: 1,
		rarity: 2,
		category: "Comfy",
		r: 4,
		flavorText: "The perfect chair for a seafarer or, ironically, someone who cannot swim."
		}, {
		ID: 50,
		name: "Dingy Bed",
		member: 1,
		rarity: 2,
		category: "Comfy",
		r: 4,
		flavorText: "This tiny bed is convenient to have for guests. It can compress for easy storage."
		}, {
		ID: 51,
		name: "Boombox",
		member: 1,
		rarity: 1,
		category: "Items",
		r: 2,
		flavorText: "No party is complete with some great music to dance to. Get your groove on!"
		}, {
		ID: 52,
		name: "Ship in a Bottle",
		member: 1,
		rarity: 2,
		category: "Items",
		r: 2,
		flavorText: "A perfect scale model of a ship. One wonders how they got it into the bottle."
		}, {
		ID: 53,
		name: "Carnoplant",
		member: 1,
		rarity: 2,
		category: "Plants",
		r: 2,
		flavorText: "This carnivorous plant is useful for keeping bug infestations under control."
		}, {
		ID: 54,
		name: "Rugged Bed",
		member: 1,
		rarity: 2,
		category: "Comfy",
		r: 4,
		flavorText: "For those who like to reminisce about the cave-man days. Enjoy the worst night of sleep in you life."
		}, {
		ID: 55,
		name: "Dyno Skull",
		member: 1,
		rarity: 3,
		category: "Items",
		r: 2,
		flavorText: "A large decorative dyno skull. It is made from foam, for ease of transportation."
		}, {
		ID: 56,
		name: "Floaty Bed",
		member: 1,
		rarity: 3,
		category: "Comfy",
		r: 4,
		flavorText: "This bed is filled with helium, making it float slightly off the ground. Its light rocking will put you to sleep instantly!"
		}, {
		ID: 57,
		name: "Stuffed Dyno",
		member: 1,
		rarity: 2,
		category: "Items",
		r: 4,
		flavorText: "This cute little stuffed dyno used to be a common prize at the dyno dig site."
		}, {
		ID: 58,
		name: "Gramophone",
		member: 1,
		rarity: 2,
		category: "Items",
		r: 2,
		flavorText: "A boombox for the old school. Perfect for it you like your music to sound old."
		}, {
		ID: 59,
		name: "Shipwheel",
		member: 1,
		rarity: 1,
		category: "Wall",
		r: 2,
		flavorText: "The steering wheel from a sunken ship. The remnants of the ship have never been found."
		}, {
		ID: 60,
		name: "Phaser Lamp",
		member: 1,
		rarity: 2,
		category: "Lamps",
		r: 2,
		flavorText: "A lamp designed for those with interests in the sci-fi."
		}, {
		ID: 61,
		name: "Lifesaver",
		member: 1,
		rarity: 2,
		category: "Wall",
		r: 2,
		flavorText: "A perfect edition to any home in a location that is prone to flooding, or if you just can't swim."
		}, {
		ID: 62,
		name: "Excavation Table",
		member: 1,
		rarity: 3,
		category: "Surface",
		r: 2,
		flavorText: "This table comes equipped with everything you could need to investigate a dig site."
		}, {
		ID: 63,
		name: "Porthole",
		member: 1,
		rarity: 1,
		category: "Wall",
		r: 2,
		flavorText: "Intended for peering out at the sea. One wonders about its purpose in a house."
		}, {
		ID: 64,
		name: "Fossil Chair",
		member: 1,
		rarity: 2,
		category: "Comfy",
		r: 4,
		flavorText: "A chair carved from ancient bones. It is surprisingly sturdy for something so old."
		}, {
		ID: 65,
		name: "Modified Organ",
		member: 1,
		rarity: 3,
		category: "Items",
		r: 4,
		flavorText: "An organ with a unique sound. It is steam powered and lets out plumes of smoke upon use."
		}, {
		ID: 66,
		name: "Time-o-tron",
		member: 1,
		rarity: 1,
		category: "Wall",
		r: 2,
		flavorText: "A coocoo clock, without the coocoo. It sends the alarm directly to its owners brain telepathically."
		}, {
		ID: 67,
		name: "Cloud Throne",
		member: 1,
		rarity: 3,
		category: "Comfy",
		r: 4,
		flavorText: "It is miraculous that one can even sit on this throne, as the seat is made of clouds."
		}, {
		ID: 68,
		name: "Timekeeper",
		member: 1,
		rarity: 2,
		category: "Items",
		r: 2,
		flavorText: "Honestly, its just a clock."
		}, {
		ID: 69,
		name: "Rainbow Decal",
		member: 1,
		rarity: 1,
		category: "Wall",
		r: 2,
		flavorText: "A rainbow that doesn't need any rain! Use it to spice up your living space."
		}, {
		ID: 70,
		name: "Time Box",
		member: 1,
		rarity: 3,
		category: "Storage",
		r: 4,
		flavorText: "This mysterious machine is constantly whirring and whizzing with no obvious effect."
		}, {
		ID: 71,
		name: "Zapper Lamp",
		member: 1,
		rarity: 1,
		category: "Lamps",
		r: 2,
		flavorText: "A lamp light by lightning to look like lightning."
		}],
	dormbg: [{
		ID: 1,
		name: "Lamplight House",
		member: 0,
		rarity: 0,
		category: "Comfy",
		price: 300,
		flavorText: "",
		x: 800,
		y: 470,
		bg: "bg-dorm-house",
		area: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
		}, {
		ID: 2,
		name: "Ice Cave",
		member: 1,
		rarity: 0,
		category: "Comfy",
		price: 1500,
		flavorText: "",
		x: 107,
		y: 607,
		bg: "bg-dorm-cave",
		area: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 0, 0, 0, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 0, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
		}, {
		ID: 3,
		name: "Firefly Treehouse",
		member: 1,
		rarity: 0,
		category: "Surface",
		price: 2e3,
		flavorText: "",
		x: 1e3,
		y: 480,
		bg: "bg-dorm-tree",
		area: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
		}]
};
var Monsters = function () {
	function e() {}
	return e
}();
Monsters.areEqual = function (e, t) {
	return e.ID === t.ID && e.level === t.level && e.hearts === t.hearts ? !0 : !1
}, Monsters.getItemData = function (e) {
	return Monsters.data[e]
}, Monsters.getRandomItem = function () {
	for (var e = null; !Util.isDefined(e);) {
		var t = Math.floor(97 * Math.random()) + 1;
		e = Monsters.data[t]
	}
	return e.ID
}, Monsters.getEvolveLevel = function (e) {
	for (var t = Monsters.getItemData(e), i = 0; i < t.curve.length; i++) {
		var a = t.curve[i];
		if (Util.isDefined(a.e)) return a.lvl
	}
	return 1
}, Monsters.getEvolveID = function (e) {
	for (var t = Monsters.getItemData(e), i = 0; i < t.curve.length; i++) {
		var a = t.curve[i];
		if (Util.isDefined(a.e)) return a.e
	}
	return -1
}, Monsters.getEncounterRate = function (e) {
	var t = Monsters.getItemData(e);
	return Util.isDefined(t) ? t.R || 1 : 0
}, Monsters.getRange = function (e, t) {
	for (var i = [], a = e; t >= a; a++) Util.isDefined(Monsters.data[a]) ? i.push({
		ID: a
	}) : i.push(null);
	return i
}, Monsters.MAX_ID = 124, Monsters.data = {
	1: {
		ID: 1,
		name: "Peeko",
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}, {
			lvl: 15,
			e: 2
			}],
		flavorText: "Peekos cheerfully wiggle their ears when they are happy, which they almost always are!"
	},
	2: {
		ID: 2,
		name: "Rack-rack",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 14
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 23,
			a: 16
			}, {
			lvl: 36,
			a: 17
			}, {
			lvl: 55,
			a: 18
			}, {
			lvl: 30,
			e: 3
			}],
		flavorText: "Not quite a cat, and not quite a raccoon, a Rack-rack is a strange but adorable mix of both."
	},
	3: {
		ID: 3,
		name: "Flyger",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "A-",
		power: "B",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 7,
			a: 26
			}, {
			lvl: 14,
			a: 15
			}, {
			lvl: 26,
			a: 28
			}, {
			lvl: 40,
			a: 17
			}, {
			lvl: 60,
			a: 30
			}],
		flavorText: "A rare sight in air or on land, Flygers tend to hide most of the day, emerging only to dance."
	},
	4: {
		ID: 4,
		name: "Soral",
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}, {
			lvl: 15,
			e: 5
			}],
		flavorText: "Soral babies love attention, often squawking loudly when people stop paying attention to them."
	},
	5: {
		ID: 5,
		name: "Solarix",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "B+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 27
			}, {
			lvl: 23,
			a: 28
			}, {
			lvl: 36,
			a: 29
			}, {
			lvl: 55,
			a: 30
			}, {
			lvl: 30,
			e: 6
			}],
		flavorText: "The sun's rays reflect off of the Solarix in all directions, making it appear to glow yellow."
	},
	6: {
		ID: 6,
		name: "Solarasis",
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "A-",
		power: "B",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 7,
			a: 8
			}, {
			lvl: 14,
			a: 27
			}, {
			lvl: 26,
			a: 10
			}, {
			lvl: 40,
			a: 29
			}, {
			lvl: 60,
			a: 12
			}],
		flavorText: "It's rare to find more than one Solarasis at a time, and so few people know the plural form of Solarasis. Solarases? Solarasises? It's a mystery."
	},
	7: {
		ID: 7,
		name: "Dragic",
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 20,
			a: 4
			}, {
			lvl: 32,
			a: 5
			}, {
			lvl: 50,
			a: 6
			}, {
			lvl: 15,
			e: 8
			}],
		flavorText: "Scalier than other babies, the Dragic hide their mischief behind their giant smiles."
	},
	8: {
		ID: 8,
		name: "Dragling",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 6,
			a: 2
			}, {
			lvl: 12,
			a: 3
			}, {
			lvl: 23,
			a: 4
			}, {
			lvl: 36,
			a: 5
			}, {
			lvl: 55,
			a: 6
			}, {
			lvl: 30,
			e: 9
			}],
		flavorText: "Most people are afraid of dragons, but not of Draglings. These little guys are very friendly!"
	},
	9: {
		ID: 9,
		name: "Tarragon",
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "A-",
		power: "B",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 7,
			a: 8
			}, {
			lvl: 14,
			a: 3
			}, {
			lvl: 26,
			a: 10
			}, {
			lvl: 40,
			a: 5
			}, {
			lvl: 60,
			a: 12
			}],
		flavorText: "Tarragons strike fear to any opponent, but are just as playful as Dragics once you get to know them."
	},
	10: {
		ID: 10,
		name: "Creela",
		element: "water",
		effects: [0, 57, 54],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 20,
			a: 10
			}, {
			lvl: 32,
			a: 11
			}, {
			lvl: 50,
			a: 12
			}, {
			lvl: 15,
			e: 11
			}],
		flavorText: "Creela babies are very sweet by nature, and are living proof that bugs can be adorable."
	},
	11: {
		ID: 11,
		name: "Celesteate",
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 6,
			a: 8
			}, {
			lvl: 12,
			a: 9
			}, {
			lvl: 23,
			a: 10
			}, {
			lvl: 36,
			a: 11
			}, {
			lvl: 55,
			a: 12
			}, {
			lvl: 30,
			e: 12
			}],
		flavorText: "It is hard to find a Celesteate unless you look underground... they hide in nests in small groups."
	},
	12: {
		ID: 12,
		name: "Aureate",
		R: 5,
		element: "water",
		effects: [0, 57, 54],
		life: "A-",
		power: "B",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 7,
			a: 26
			}, {
			lvl: 14,
			a: 9
			}, {
			lvl: 26,
			a: 28
			}, {
			lvl: 40,
			a: 11
			}, {
			lvl: 60,
			a: 30
			}],
		flavorText: "The Aureate's glowing body can light up like a lightbulb bright as the sun to blind its foes."
	},
	13: {
		ID: 13,
		name: "Browl",
		special: !0,
		element: "storm",
		effects: [6, 48],
		life: "C",
		power: "C",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 13
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 15
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 17
			}, {
			lvl: 12,
			e: 14
			}],
		flavorText: "The Browl is a smart creature, capable of long division with no remainders."
	},
	14: {
		ID: 14,
		name: "Acromi",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "C",
		power: "C",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 28
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 30
			}],
		flavorText: "The eyes of an Acromi are so big and bright, that they are often mistaken for stars in the night."
	},
	15: {
		ID: 15,
		name: "Nebluff",
		element: "storm",
		effects: [6, 48],
		life: "C",
		power: "C",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 28
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 30
			}],
		flavorText: "These critters are commonly seen flitting in and out of the clouds, chasing thunder and lightning."
	},
	16: {
		ID: 16,
		name: "Battaram",
		element: "ice",
		effects: [9, 45],
		life: "B-",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 4,
			a: 20
			}, {
			lvl: 8,
			a: 21
			}, {
			lvl: 18,
			a: 22
			}, {
			lvl: 29,
			a: 23
			}, {
			lvl: 47,
			a: 24
			}, {
			lvl: 22,
			e: 17
			}],
		flavorText: "Battarams use their large horns to make loud noises, not unlike the beat of a drum, to make music."
	},
	17: {
		ID: 17,
		name: "Battabash",
		R: 2,
		element: "ice",
		effects: [9, 45],
		life: "B-",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 4,
			a: 20
			}, {
			lvl: 8,
			a: 21
			}, {
			lvl: 18,
			a: 22
			}, {
			lvl: 29,
			a: 23
			}, {
			lvl: 47,
			a: 24
			}],
		flavorText: "The horns on a Battabash's head are so heavy that they cannot walk on ice of any thickness, for fear of it cracking."
	},
	18: {
		ID: 18,
		name: "Squawks",
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 28
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 30
			}, {
			lvl: 12,
			e: 19
			}],
		flavorText: "It's tough being a bird with no legs or body, but Squawks never complain... or get tired!"
	},
	19: {
		ID: 19,
		name: "Tribeak",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "A",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}],
		flavorText: "It's harder to take down three birds with one stone."
	},
	20: {
		ID: 20,
		name: "Luminite",
		element: "storm",
		effects: [6, 48],
		life: "C",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 28
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 30
			}, {
			lvl: 14,
			e: 21
			}],
		flavorText: "A Luminite is very loyal and friendly, earning it the nickname 'Man's Bestest Friend.'"
	},
	21: {
		ID: 21,
		name: "Lumiot",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}, {
			lvl: 24,
			e: 22
			}],
		flavorText: "A bigger Luminite, the Lumiot is much better at playing fetch, catch, and napping in the sun."
	},
	22: {
		ID: 22,
		name: "Luminex",
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "A",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 27
			}, {
			lvl: 23,
			a: 28
			}, {
			lvl: 36,
			a: 29
			}, {
			lvl: 55,
			a: 30
			}],
		flavorText: "Lumiots that do not brush or clean their fur for long periods of time turn into Luminexes."
	},
	23: {
		ID: 23,
		name: "Tinyger",
		element: "fire",
		effects: [3, 12, 51],
		life: "B-",
		power: "C",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 7
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 9
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 11
			}, {
			lvl: 20,
			e: 24
			}],
		flavorText: "Tinygers only walk upright to impress others, and even wear pants to appear more human."
	},
	24: {
		ID: 24,
		name: "Tyscout",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B-",
		power: "C",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 7
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 9
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 11
			}],
		flavorText: "Tyscouts are tinygers that have learned to live and work with humans, and have been even seen taking jobs."
	},
	25: {
		ID: 25,
		name: "Flikflit",
		element: "water",
		effects: [0, 57, 54],
		life: "C-",
		power: "C",
		growth: "C+",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 6,
			a: 25
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 22,
			a: 9
			}, {
			lvl: 35,
			a: 29
			}, {
			lvl: 53,
			a: 17
			}, {
			lvl: 14,
			e: 26
			}],
		flavorText: "Don't let the size of Flikflit fool you... they are lightning fast and impossible to catch."
	},
	26: {
		ID: 26,
		name: "Serrazag",
		R: 2,
		element: "ice",
		effects: [9, 45],
		life: "C+",
		power: "C",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 6,
			a: 25
			}, {
			lvl: 12,
			a: 21
			}, {
			lvl: 24,
			a: 9
			}, {
			lvl: 37,
			a: 29
			}, {
			lvl: 57,
			a: 23
			}],
		flavorText: "The female Serrazag freezes the air around her to create ice tunnels to protect her from danger."
	},
	27: {
		ID: 27,
		name: "Sprite",
		element: "fire",
		effects: [3, 12, 51],
		life: "B-",
		power: "C",
		growth: "C+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 6,
			a: 25
			}, {
			lvl: 12,
			a: 3
			}, {
			lvl: 22,
			a: 27
			}, {
			lvl: 35,
			a: 5
			}, {
			lvl: 53,
			a: 29
			}, {
			lvl: 14,
			e: 28
			}],
		flavorText: "Sprites are tiny insects, capable of producing melodies through their flute-like mouths."
	},
	28: {
		ID: 28,
		name: "Serrazig",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B+",
		power: "C",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 6,
			a: 25
			}, {
			lvl: 12,
			a: 3
			}, {
			lvl: 24,
			a: 27
			}, {
			lvl: 37,
			a: 5
			}, {
			lvl: 57,
			a: 29
			}],
		flavorText: "The male Serrazig uses his thick tail to steer himself through the sky, much like a rudder on a boat."
	},
	29: {
		ID: 29,
		name: "Pomprikle",
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "C",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 25
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 23,
			a: 27
			}, {
			lvl: 36,
			a: 17
			}, {
			lvl: 55,
			a: 29
			}, {
			lvl: 16,
			e: 30
			}],
		flavorText: "The quills on the Pomprikle's body react to stress, and can be very dangerous when scared or excited."
	},
	30: {
		ID: 30,
		name: "Spindle",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B+",
		power: "C",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 25
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 24,
			a: 27
			}, {
			lvl: 37,
			a: 17
			}, {
			lvl: 57,
			a: 29
			}],
		flavorText: "Spindles have strong arms, and often collect small junk to throw at their enemies if bothered."
	},
	31: {
		ID: 31,
		name: "Muckster",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}],
		flavorText: "Mucksters are very friendly, and will always water your plants when you are away from home."
	},
	32: {
		ID: 32,
		name: "Sprike",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "A-",
		power: "B",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 7,
			a: 26
			}, {
			lvl: 14,
			a: 15
			}, {
			lvl: 26,
			a: 28
			}, {
			lvl: 40,
			a: 17
			}, {
			lvl: 60,
			a: 30
			}],
		flavorText: "Sprikes are very antisocial creatures, and tend to spend most of their time avoiding everything."
	},
	33: {
		ID: 33,
		name: "Aquaster",
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 20,
			a: 10
			}, {
			lvl: 32,
			a: 11
			}, {
			lvl: 50,
			a: 12
			}],
		flavorText: "The Aquaster's tail holds the water used for its spells and feels like a full water balloon."
	},
	34: {
		ID: 34,
		name: "Hotpot",
		R: 3,
		element: "fire",
		effects: [3, 12, 51],
		life: "A",
		power: "A",
		growth: "F-",
		curve: [{
			lvl: 1,
			a: 2
			}, {
			lvl: 9,
			a: 26
			}, {
			lvl: 18,
			a: 4
			}, {
			lvl: 33,
			a: 28
			}, {
			lvl: 49,
			a: 6
			}, {
			lvl: 72,
			a: 30
			}],
		flavorText: "Hotpots are not actually stoves, but actually monsters hiding inside discarded stoves."
	},
	35: {
		ID: 35,
		name: "Mystyyk",
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 19,
			a: 28
			}, {
			lvl: 31,
			a: 29
			}, {
			lvl: 48,
			a: 30
			}],
		flavorText: "The legendary Mystyyk is hard to tame, as it has difficulty trusting new people."
	},
	36: {
		ID: 36,
		name: "Mystile",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 19,
			a: 16
			}, {
			lvl: 31,
			a: 17
			}, {
			lvl: 48,
			a: 18
			}],
		flavorText: "Mystiles are often found prancing and playing in Firefly Forest."
	},
	37: {
		ID: 37,
		name: "Mystember",
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 4
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 6
			}],
		flavorText: "Students often recall seeing this dark horse in their dreams, which gives it its name."
	},
	38: {
		ID: 38,
		name: "Emburn",
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 20,
			a: 4
			}, {
			lvl: 32,
			a: 5
			}, {
			lvl: 50,
			a: 6
			}, {
			lvl: 18,
			e: 39
			}],
		flavorText: "An Emburn's tail flickers like a candle, and is easily seen in the dark of night. "
	},
	39: {
		ID: 39,
		name: "Liosen",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "A-",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 6,
			a: 14
			}, {
			lvl: 12,
			a: 3
			}, {
			lvl: 23,
			a: 16
			}, {
			lvl: 36,
			a: 5
			}, {
			lvl: 55,
			a: 18
			}],
		flavorText: "Liosen is Prince of the Forest, but is only considered King when it wears a Forest Emerald."
	},
	40: {
		ID: 40,
		name: "Snoots",
		element: "storm",
		effects: [6, 48],
		life: "B+",
		power: "A",
		growth: "D+",
		curve: [{
			lvl: 1,
			a: 26
			}, {
			lvl: 7,
			a: 20
			}, {
			lvl: 14,
			a: 28
			}, {
			lvl: 25,
			a: 22
			}, {
			lvl: 39,
			a: 30
			}, {
			lvl: 58,
			a: 24
			}, {
			lvl: 18,
			e: 41
			}],
		flavorText: "A Snoots is hard to impress...ite always claims to know everything before it was cool."
	},
	41: {
		ID: 41,
		name: "Highfawn",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "B+",
		power: "A",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 26
			}, {
			lvl: 7,
			a: 14
			}, {
			lvl: 14,
			a: 28
			}, {
			lvl: 26,
			a: 16
			}, {
			lvl: 40,
			a: 30
			}, {
			lvl: 60,
			a: 18
			}, {
			lvl: 32,
			e: 42
			}],
		flavorText: "The Highfawn prides itself on its razor sharp talons, giant wing span, and tremendous modesty."
	},
	42: {
		ID: 42,
		name: "Gloricious",
		element: "storm",
		effects: [6, 48],
		life: "B+",
		power: "A",
		growth: "D-",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 7,
			a: 26
			}, {
			lvl: 14,
			a: 27
			}, {
			lvl: 27,
			a: 28
			}, {
			lvl: 41,
			a: 29
			}, {
			lvl: 62,
			a: 30
			}],
		flavorText: "Known as the King of Peaks, the Gloricious banished the Highfawn to the forest for not using a coaster."
	},
	43: {
		ID: 43,
		name: "Evolotus",
		element: "storm",
		effects: [6, 48],
		life: "C-",
		power: "B",
		growth: "A+",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 16,
			a: 16
			}, {
			lvl: 27,
			a: 29
			}, {
			lvl: 43,
			a: 18
			}, {
			lvl: 14,
			e: 44
			}],
		flavorText: "Due to their hybrid nature, Evolotuses look like flowers, sting like bees, and soar like Browls."
	},
	44: {
		ID: 44,
		name: "Prodraxis",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "C+",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 8
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 18,
			a: 10
			}, {
			lvl: 29,
			a: 29
			}, {
			lvl: 47,
			a: 12
			}],
		flavorText: "It's rumored that the Prodraxis was an abandoned Ice Dragon baby that was raised by a pack of Snoots."
	},
	45: {
		ID: 45,
		name: "Flameger",
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "C",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 4,
			a: 25
			}, {
			lvl: 8,
			a: 3
			}, {
			lvl: 18,
			a: 27
			}, {
			lvl: 29,
			a: 5
			}, {
			lvl: 47,
			a: 29
			}],
		flavorText: "On the warmest summer days, Flamegers can be seen playing in the morning sun, glowing brightly."
	},
	46: {
		ID: 46,
		name: "Gnawdy",
		element: "water",
		effects: [0, 57, 54],
		life: "B-",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 11
			}, {
			lvl: 50,
			a: 30
			}, {
			lvl: 28,
			e: 47
			}],
		flavorText: "Unlike sharks, Gnawdys can leave water for short periods of time, hunting prey in and out of water."
	},
	47: {
		ID: 47,
		name: "Crookfang",
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B",
		power: "B",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 9
			}, {
			lvl: 24,
			a: 28
			}, {
			lvl: 37,
			a: 11
			}, {
			lvl: 57,
			a: 30
			}],
		flavorText: "The jaws of a Crookfang are so sharp that they can cut steel, and most researchers avoid them completely."
	},
	48: {
		ID: 48,
		name: "Ashlet",
		element: "fire",
		effects: [3, 12, 51],
		life: "B-",
		power: "A",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 2
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 4
			}, {
			lvl: 23,
			a: 28
			}, {
			lvl: 36,
			a: 6
			}, {
			lvl: 55,
			a: 30
			}, {
			lvl: 32,
			e: 49
			}],
		flavorText: "The feathers of an Ashlet are said to bring good luck, but unfortunately are too hot to touch."
	},
	49: {
		ID: 49,
		name: "Smoldash",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "A",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 2
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 4
			}, {
			lvl: 24,
			a: 28
			}, {
			lvl: 37,
			a: 6
			}, {
			lvl: 57,
			a: 30
			}],
		flavorText: "The temperatures given off by the wings of a Smoldash are hot enough to boil water, and have been even known to melt some metals."
	},
	50: {
		ID: 50,
		name: "Arcticlaw",
		element: "ice",
		effects: [9, 45],
		life: "B",
		power: "A",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 20
			}, {
			lvl: 6,
			a: 8
			}, {
			lvl: 12,
			a: 22
			}, {
			lvl: 24,
			a: 10
			}, {
			lvl: 37,
			a: 24
			}, {
			lvl: 57,
			a: 12
			}, {
			lvl: 25,
			e: 51
			}],
		flavorText: "Arcticlaws are one of the most loyal and protective pets. If you can befriend one, that is."
	},
	51: {
		ID: 51,
		name: "Frostfang",
		R: 2,
		element: "ice",
		effects: [9, 45],
		life: "B",
		power: "A",
		growth: "C-",
		curve: [{
			lvl: 1,
			a: 20
			}, {
			lvl: 6,
			a: 8
			}, {
			lvl: 12,
			a: 22
			}, {
			lvl: 24,
			a: 10
			}, {
			lvl: 37,
			a: 24
			}, {
			lvl: 57,
			a: 12
			}],
		flavorText: "Frostfangs are so in touch with the cold that they can manipulate the ice to form stylish armor."
	},
	52: {
		ID: 52,
		name: "Saplette",
		element: "earth",
		effects: [6, 45],
		life: "B-",
		power: "C",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 7
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 19,
			a: 9
			}, {
			lvl: 31,
			a: 17
			}, {
			lvl: 48,
			a: 11
			}, {
			lvl: 16,
			e: 53
			}],
		flavorText: "Since Saplettes can't move around, they develop strange personalities and senses of humor."
	},
	53: {
		ID: 53,
		name: "Arboreal",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 7
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 9
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 11
			}, {
			lvl: 36,
			e: 54
			}],
		flavorText: "Arboreals grow much quicker than trees in the forest. They're also known to trip students in the forest with their long roots, just for fun."
	},
	54: {
		ID: 54,
		name: "Vinequeen",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 8
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 23,
			a: 10
			}, {
			lvl: 36,
			a: 17
			}, {
			lvl: 55,
			a: 12
			}],
		flavorText: "As they cannot move fast, Vinequeens rely on their wits to convince others to do their bidding."
	},
	55: {
		ID: 55,
		name: "Truckle",
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}],
		flavorText: "Most people do not consider Truckles to be worthy opponents, but if you corner one, it will do anything to get past you."
	},
	56: {
		ID: 56,
		name: "Cloud Nibbler",
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 16,
			a: 16
			}, {
			lvl: 27,
			a: 29
			}, {
			lvl: 43,
			a: 18
			}, {
			lvl: 35,
			e: 57
			}],
		flavorText: "Due to their size and shape, Cloud Nibblers are often mistaken for balloons, floating among the clouds."
	},
	57: {
		ID: 57,
		name: "Cloud Gobbler",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "A",
		power: "B",
		growth: "A+",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 16,
			a: 16
			}, {
			lvl: 25,
			a: 29
			}, {
			lvl: 34,
			a: 18
			}],
		flavorText: "Cloud Gobblers live off the moisture in the clouds, flying around with their mouth open, chomping on the open air."
	},
	58: {
		ID: 58,
		name: "Ivory Truckle",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "B+",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 21,
			a: 28
			}, {
			lvl: 33,
			a: 17
			}, {
			lvl: 52,
			a: 30
			}],
		flavorText: "The Ivory Truckle is a rare sight in the forest... usually found only by the most skilled trackers."
	},
	59: {
		ID: 59,
		name: "TripTrop",
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}, {
			lvl: 14,
			e: 60
			}],
		flavorText: "The sound of music in the forest usually indicates a Triptrop is nearby. They are nimble creatures, and love a good challenge."
	},
	60: {
		ID: 60,
		name: "ClipClop",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B+",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 21,
			a: 16
			}, {
			lvl: 33,
			a: 17
			}, {
			lvl: 52,
			a: 18
			}],
		flavorText: "Unlike Triptrops, the music of a Clipclop is unpleasant, and most wizards cannot stand to listen to it for too long."
	},
	61: {
		ID: 61,
		name: "Dreamlet",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "B-",
		power: "B",
		growth: "C+",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 9
			}, {
			lvl: 22,
			a: 10
			}, {
			lvl: 35,
			a: 17
			}, {
			lvl: 53,
			a: 30
			}],
		flavorText: "Dreamlets are small, intelligent and wiry critters, and are considered rarer than diamonds."
	},
	62: {
		ID: 62,
		name: "Ivory ClipClop",
		R: 5,
		element: "ice",
		effects: [9, 45],
		life: "A-",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 5,
			a: 20
			}, {
			lvl: 10,
			a: 21
			}, {
			lvl: 20,
			a: 22
			}, {
			lvl: 32,
			a: 23
			}, {
			lvl: 50,
			a: 24
			}],
		flavorText: "In rare cases, a Clipclop is born with white fur instead of grey. These creatures are considered good luck in the forest."
	},
	63: {
		ID: 63,
		name: "Flame Neek",
		element: "fire",
		effects: [3, 12, 51],
		life: "B-",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 4,
			a: 2
			}, {
			lvl: 8,
			a: 3
			}, {
			lvl: 17,
			a: 4
			}, {
			lvl: 28,
			a: 5
			}, {
			lvl: 45,
			a: 6
			}, {
			lvl: 12,
			e: 64
			}],
		flavorText: "A Flame Neek is born from small flames, such as flickering candles or dying campfires in the forest."
	},
	64: {
		ID: 64,
		name: "Flame Caller",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 4,
			a: 2
			}, {
			lvl: 8,
			a: 3
			}, {
			lvl: 18,
			a: 4
			}, {
			lvl: 29,
			a: 5
			}, {
			lvl: 47,
			a: 6
			}, {
			lvl: 24,
			e: 65
			}],
		flavorText: "Flame Callers have mouths but choose not to speak - instead concocting their own language in flame."
	},
	65: {
		ID: 65,
		name: "Flame Creator",
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "B+",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 4
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 6
			}],
		flavorText: "The staff of a Flame Creator is very ordinary, but the fire magic produced from it is legendary."
	},
	66: {
		ID: 66,
		name: "River Neek",
		element: "water",
		effects: [0, 57, 54],
		life: "B-",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 4,
			a: 8
			}, {
			lvl: 8,
			a: 9
			}, {
			lvl: 17,
			a: 10
			}, {
			lvl: 28,
			a: 11
			}, {
			lvl: 45,
			a: 12
			}, {
			lvl: 12,
			e: 67
			}],
		flavorText: "A newborn River Neek will hide in the shallows of ponds and rivers, blowing bubbles and teasing small fish."
	},
	67: {
		ID: 67,
		name: "River Caller",
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 4,
			a: 8
			}, {
			lvl: 8,
			a: 9
			}, {
			lvl: 18,
			a: 10
			}, {
			lvl: 29,
			a: 11
			}, {
			lvl: 47,
			a: 12
			}, {
			lvl: 24,
			e: 68
			}],
		flavorText: "The bottoms of large lakes are commonly filled with River Callers, who hold parties from time to time with the fish."
	},
	68: {
		ID: 68,
		name: "River Creator",
		R: 5,
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 19,
			a: 10
			}, {
			lvl: 31,
			a: 11
			}, {
			lvl: 48,
			a: 12
			}],
		flavorText: "River Creators grow attached to small bodies of water, and will replenish them in times of drought."
	},
	69: {
		ID: 69,
		name: "Forest Neek",
		element: "earth",
		effects: [6, 45],
		life: "B-",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 15
			}, {
			lvl: 17,
			a: 16
			}, {
			lvl: 28,
			a: 17
			}, {
			lvl: 45,
			a: 18
			}, {
			lvl: 12,
			e: 70
			}],
		flavorText: "Once born, a Forest Neek hides in the leaves of the trees, dropping acorns on the heads of passing wizards below."
	},
	70: {
		ID: 70,
		name: "Forest Caller",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 15
			}, {
			lvl: 18,
			a: 16
			}, {
			lvl: 29,
			a: 17
			}, {
			lvl: 47,
			a: 18
			}, {
			lvl: 24,
			e: 71
			}],
		flavorText: "Large gusts of wind may signify the presence of Forest Callers, which have the ability to 'ride' the winds."
	},
	71: {
		ID: 71,
		name: "Forest Creator",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "B+",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 19,
			a: 16
			}, {
			lvl: 31,
			a: 17
			}, {
			lvl: 48,
			a: 18
			}],
		flavorText: "Forest Creators are not particularly smart and have terrible memories - but are kindhearted and use their magic to help others."
	},
	72: {
		ID: 72,
		name: "Cloud Neek",
		element: "storm",
		effects: [6, 48],
		life: "B-",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 28
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 30
			}, {
			lvl: 12,
			e: 73
			}],
		flavorText: "Born from the clouds on warm days, the Cloud Neek will hide in bushes and create small winds, blowing off wizard's hats."
	},
	73: {
		ID: 73,
		name: "Cloud Caller",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 18,
			a: 28
			}, {
			lvl: 29,
			a: 29
			}, {
			lvl: 47,
			a: 30
			}, {
			lvl: 24,
			e: 74
			}],
		flavorText: "Cloud Callers grow tired of the forests and plains quickly, and ascend to the clouds at an early age."
	},
	74: {
		ID: 74,
		name: "Cloud Creator",
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "B+",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 19,
			a: 28
			}, {
			lvl: 31,
			a: 29
			}, {
			lvl: 48,
			a: 30
			}],
		flavorText: "When bored, Cloud Creators will often create thunderstorms on clear days, just to hear the thunder boom."
	},
	75: {
		ID: 75,
		name: "Puck",
		element: "fire",
		effects: [3, 12, 51],
		life: "C+",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 4,
			a: 2
			}, {
			lvl: 8,
			a: 3
			}, {
			lvl: 17,
			a: 4
			}, {
			lvl: 28,
			a: 5
			}, {
			lvl: 45,
			a: 6
			}, {
			lvl: 15,
			e: 76
			}],
		flavorText: "These small imps are known to imitate different animal sounds, throwing hunters off their trails."
	},
	76: {
		ID: 76,
		name: "Flaria",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B+",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 20,
			a: 4
			}, {
			lvl: 32,
			a: 5
			}, {
			lvl: 50,
			a: 6
			}],
		flavorText: "Flarias can turn into flames at any time, but only do so when they get hungry."
	},
	78: {
		ID: 78,
		name: "Rascal",
		element: "ice",
		effects: [9, 45],
		life: "C",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 4,
			a: 20
			}, {
			lvl: 8,
			a: 21
			}, {
			lvl: 17,
			a: 22
			}, {
			lvl: 28,
			a: 23
			}, {
			lvl: 45,
			a: 24
			}, {
			lvl: 15,
			e: 79
			}],
		flavorText: "Snowy summer days means a Rascal is close, likely stealing the numbers off of people's houses."
	},
	79: {
		ID: 79,
		name: "Shardic",
		R: 2,
		element: "ice",
		effects: [9, 45],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 5,
			a: 20
			}, {
			lvl: 10,
			a: 21
			}, {
			lvl: 20,
			a: 22
			}, {
			lvl: 32,
			a: 23
			}, {
			lvl: 50,
			a: 24
			}, {
			lvl: 30,
			e: 80
			}],
		flavorText: "Shardics are known for hiding in many cold places, and have even been found in freezers."
	},
	80: {
		ID: 80,
		name: "Keeper",
		R: 5,
		element: "ice",
		effects: [9, 45],
		life: "A",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 6,
			a: 8
			}, {
			lvl: 12,
			a: 21
			}, {
			lvl: 23,
			a: 10
			}, {
			lvl: 36,
			a: 23
			}, {
			lvl: 55,
			a: 12
			}],
		flavorText: "People often mistake Keepers for granite gargoyles, as they often sit motionless for days."
	},
	81: {
		ID: 81,
		name: "Scally",
		element: "earth",
		effects: [6, 45],
		life: "C+",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 15
			}, {
			lvl: 17,
			a: 16
			}, {
			lvl: 28,
			a: 17
			}, {
			lvl: 45,
			a: 18
			}, {
			lvl: 15,
			e: 82
			}],
		flavorText: "All Scallies are slow and always sleepy, but move fastest when it's time to eat."
	},
	82: {
		ID: 82,
		name: "Fissural",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "B+",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}, {
			lvl: 30,
			e: 83
			}],
		flavorText: "Fissurals are picky eaters, and will only eat vegetables that are organically grown."
	},
	83: {
		ID: 83,
		name: "Sentinel",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "A+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 14
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 23,
			a: 16
			}, {
			lvl: 36,
			a: 17
			}, {
			lvl: 55,
			a: 18
			}],
		flavorText: "People often mistake Sentinels for stone gargoyles, as they often sit motionless for days."
	},
	84: {
		ID: 84,
		name: "Hob",
		element: "storm",
		effects: [6, 48],
		life: "C",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 4,
			a: 26
			}, {
			lvl: 8,
			a: 27
			}, {
			lvl: 17,
			a: 28
			}, {
			lvl: 28,
			a: 29
			}, {
			lvl: 45,
			a: 30
			}, {
			lvl: 15,
			e: 85
			}],
		flavorText: "Hobs are very mischievious creatures, and have the odd habit of moving around furniture."
	},
	85: {
		ID: 85,
		name: "Wick",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}, {
			lvl: 30,
			e: 86
			}],
		flavorText: "Wicks cannot fly, but instead spend their time building artificial wings and flying machines."
	},
	86: {
		ID: 86,
		name: "Nebulite",
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "A",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 27
			}, {
			lvl: 23,
			a: 28
			}, {
			lvl: 36,
			a: 29
			}, {
			lvl: 55,
			a: 30
			}],
		flavorText: "People often mistake Nebulites for marble gargoyles, as they often sit motionless for days."
	},
	87: {
		ID: 87,
		name: "Squally",
		element: "ice",
		effects: [9, 45],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 5,
			a: 20
			}, {
			lvl: 10,
			a: 21
			}, {
			lvl: 20,
			a: 22
			}, {
			lvl: 32,
			a: 23
			}, {
			lvl: 50,
			a: 24
			}, {
			lvl: 15,
			e: 88
			}],
		flavorText: "Snowmen made by students often become enchanted, sometimes turning into Squallies."
	},
	88: {
		ID: 88,
		name: "Tempest",
		R: 2,
		element: "ice",
		effects: [9, 45],
		life: "B+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 6,
			a: 14
			}, {
			lvl: 12,
			a: 21
			}, {
			lvl: 23,
			a: 16
			}, {
			lvl: 36,
			a: 23
			}, {
			lvl: 55,
			a: 18
			}, {
			lvl: 30,
			e: 89
			}],
		flavorText: "Tempests love to play tricks, hiding as snowmen and taking student's hats."
	},
	89: {
		ID: 89,
		name: "Flurrious",
		R: 5,
		element: "ice",
		effects: [9, 45],
		life: "A",
		power: "B",
		growth: "D",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 7,
			a: 14
			}, {
			lvl: 14,
			a: 21
			}, {
			lvl: 26,
			a: 4
			}, {
			lvl: 40,
			a: 17
			}, {
			lvl: 60,
			a: 6
			}],
		flavorText: "Though they look mean, Flurrious are known for leading lost students down the mountain."
	},
	90: {
		ID: 90,
		name: "Cloaker",
		element: "storm",
		effects: [6, 48],
		life: "A-",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}, {
			lvl: 18,
			e: 91
			}],
		flavorText: "Cloakers are ghosts known to wear old clothing they find lying about, and grow attached to these rags."
	},
	91: {
		ID: 91,
		name: "Arbite",
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "A",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}],
		flavorText: "Contrary to popular belief, Arbites cannot fly through walls - and in fact are quite clumsy in the dark."
	},
	92: {
		ID: 92,
		name: "Shade",
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "A-",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}, {
			lvl: 18,
			e: 93
			}],
		flavorText: "Sometimes, a Cloaker chooses a cloak and bonds with it, making the Cloaker more powerful and becoming a Shade instead."
	},
	93: {
		ID: 93,
		name: "Spectral",
		R: 4,
		element: "earth",
		effects: [6, 45],
		life: "A",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 25
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 27
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 29
			}],
		flavorText: "Spectrals can often be seen flying at midnight, attracted to the moon like moths to a lightbulb."
	},
	94: {
		ID: 94,
		name: "Burnewt",
		element: "fire",
		effects: [3, 12, 51],
		life: "C-",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 4
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 6
			}, {
			lvl: 20,
			e: 95
			}],
		flavorText: "Though slow-moving, the Burnewt can emit bursts of steam to ward off attackers, like a boiling teapot."
	},
	95: {
		ID: 95,
		name: "Singenewt",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "C",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 4
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 6
			}, {
			lvl: 32,
			e: 96
			}],
		flavorText: "Over time, a Burnewt's body becomes hotter and hotter, changing it into a Singenewt."
	},
	96: {
		ID: 96,
		name: "Infernewt",
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "C+",
		power: "B",
		growth: "C+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 6,
			a: 26
			}, {
			lvl: 12,
			a: 3
			}, {
			lvl: 22,
			a: 28
			}, {
			lvl: 35,
			a: 5
			}, {
			lvl: 53,
			a: 30
			}, {
			lvl: 45,
			e: 97
			}],
		flavorText: "Infernewts are often mistaken for baby dragons in the mountains - but cannot fly, roar or breathe fire."
	},
	97: {
		ID: 97,
		name: "Embershed",
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "A",
		power: "A",
		growth: "F-",
		curve: [{
			lvl: 1,
			a: 2
			}, {
			lvl: 9,
			a: 26
			}, {
			lvl: 18,
			a: 4
			}, {
			lvl: 33,
			a: 28
			}, {
			lvl: 49,
			a: 6
			}, {
			lvl: 72,
			a: 30
			}],
		flavorText: "Embersheds are rare in the mountains, as they spend most of their lives in caves, reading and perfecting many languages."
	},
	98: {
		ID: 98,
		name: "Mimic",
		R: 5,
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 21,
			a: 10
			}, {
			lvl: 33,
			a: 11
			}, {
			lvl: 52,
			a: 12
			}],
		flavorText: "Look out! Not all treasure chests are full of treasure... sometimes, a Mimic is hiding inside instead!"
	},
	99: {
		ID: 99,
		name: "Funkeel",
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 20,
			a: 10
			}, {
			lvl: 32,
			a: 11
			}, {
			lvl: 50,
			a: 12
			}, {
			lvl: 14,
			e: 100
			}],
		flavorText: "This tiny serpent gives off a distinct glow as it moves underwater, tricking predators into believing it is a piece of metal."
	},
	100: {
		ID: 100,
		name: "Beneel",
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "A-",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 21,
			a: 10
			}, {
			lvl: 33,
			a: 11
			}, {
			lvl: 52,
			a: 12
			}, {
			lvl: 28,
			e: 101
			}],
		flavorText: "Funkeels grow quickly into Beneels, which swim to the depths of the ocean in order to grow larger and larger."
	},
	101: {
		ID: 101,
		name: "Fathom",
		R: 4,
		element: "water",
		effects: [0, 57, 54],
		life: "A",
		power: "B",
		growth: "C+",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 6,
			a: 8
			}, {
			lvl: 12,
			a: 9
			}, {
			lvl: 22,
			a: 10
			}, {
			lvl: 35,
			a: 11
			}, {
			lvl: 53,
			a: 12
			}],
		flavorText: "Fathoms are the largest known monster at the Academy. They rarely surface from the ocean depths, returning only to watch passing ships."
	},
	102: {
		ID: 102,
		name: "Squibble",
		element: "water",
		effects: [0, 57, 54],
		life: "B-",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 4,
			a: 8
			}, {
			lvl: 8,
			a: 9
			}, {
			lvl: 18,
			a: 10
			}, {
			lvl: 29,
			a: 11
			}, {
			lvl: 47,
			a: 12
			}, {
			lvl: 12,
			e: 103
			}],
		flavorText: "The gem on a Squibble's head is known to be good luck, and is often the target of fishermen."
	},
	103: {
		ID: 103,
		name: "Squabble",
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 19,
			a: 10
			}, {
			lvl: 31,
			a: 11
			}, {
			lvl: 48,
			a: 12
			}, {
			lvl: 24,
			e: 104
			}],
		flavorText: "Squabbles, unlike Squibbles, are known to challenge other Squabbles over territory and favorite sports teams."
	},
	104: {
		ID: 104,
		name: "Squarrel",
		R: 5,
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 21,
			a: 10
			}, {
			lvl: 33,
			a: 11
			}, {
			lvl: 52,
			a: 12
			}],
		flavorText: "A Squarrel spends Sundays squabbling with Squibbles and Saturdays skulking with Squabbles."
	},
	105: {
		ID: 105,
		name: "Trampel",
		member: !0,
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 22
			}, {
			lvl: 21,
			a: 10
			}, {
			lvl: 33,
			a: 23
			}, {
			lvl: 52,
			a: 12
			}, {
			lvl: 40,
			e: 106
			}],
		flavorText: "Trampels are rumored to be extremely clumsy, tripping over their feet like puppies."
	},
	106: {
		ID: 106,
		name: "Stampeed",
		member: !0,
		R: 5,
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 20
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 21,
			a: 23
			}, {
			lvl: 33,
			a: 11
			}, {
			lvl: 52,
			a: 24
			}],
		flavorText: "A herd of Stampeeds is supposed to be so loud that you could hear it from over 5 miles away."
	},
	107: {
		ID: 107,
		name: "Pokkit",
		member: !0,
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "A",
		power: "C",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 21,
			a: 10
			}, {
			lvl: 33,
			a: 11
			}, {
			lvl: 52,
			a: 18
			}, {
			lvl: 40,
			e: 108
			}],
		flavorText: "Pokkits are considered slow-moving and skittish, spending most of their time hiding in their shells."
	},
	108: {
		ID: 108,
		name: "Claustro",
		member: !0,
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "A+",
		power: "C-",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 7
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 21,
			a: 11
			}, {
			lvl: 33,
			a: 17
			}, {
			lvl: 52,
			a: 12
			}],
		flavorText: "Unlike Pokkits, Claustros are thought to be aggressive, and will chase away trespassers for hours."
	},
	109: {
		ID: 109,
		name: "Pterrotell",
		member: !0,
		R: 2,
		element: "storm",
		effects: [6, 48],
		life: "C+",
		power: "A",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 31
			}, {
			lvl: 21,
			a: 28
			}, {
			lvl: 33,
			a: 35
			}, {
			lvl: 52,
			a: 30
			}, {
			lvl: 40,
			e: 110
			}],
		flavorText: "Millions of years ago the skies would be full of Pterrotells, in large flocks of up to 100."
	},
	110: {
		ID: 110,
		name: "Pterrocks",
		member: !0,
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "B+",
		power: "B",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 31
			}, {
			lvl: 5,
			a: 32
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 21,
			a: 28
			}, {
			lvl: 33,
			a: 29
			}, {
			lvl: 52,
			a: 36
			}],
		flavorText: "A single flock of Pterrotells is said to have been led by a single Pterroks, who would hang back and shout orders."
	},
	111: {
		ID: 111,
		name: "Terromite",
		member: !0,
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "B",
		power: "A",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 21,
			a: 4
			}, {
			lvl: 33,
			a: 5
			}, {
			lvl: 52,
			a: 6
			}, {
			lvl: 62,
			a: 18
			}, {
			lvl: 72,
			a: 30
			}, {
			lvl: 40,
			e: 112
			}],
		flavorText: "Terromites left massive footprints behind, causing scientists to believe they were much larger than in reality."
	},
	112: {
		ID: 112,
		name: "Terrosaur",
		member: !0,
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "C+",
		power: "A+",
		growth: "B-",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 21,
			a: 4
			}, {
			lvl: 33,
			a: 5
			}, {
			lvl: 52,
			a: 6
			}, {
			lvl: 62,
			a: 24
			}, {
			lvl: 72,
			a: 36
			}],
		flavorText: "Terrosaur has many nicknames, including 'King Dyno', 'Sharp Teeth' and 'Big Poppa T'."
	},
	113: {
		ID: 113,
		name: "Cogmite",
		element: "storm",
		effects: [6, 48],
		life: "B",
		power: "B",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}, {
			lvl: 30,
			e: 114
			}],
		flavorText: "Cogmites are known to gather around large sources of electricity, at which point they all fall asleep. Academy experts call this phenomenon a 'slumber party'."
	},
	114: {
		ID: 114,
		name: "Gearsite",
		member: !0,
		R: 5,
		element: "storm",
		effects: [6, 48],
		life: "A",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 25
			}, {
			lvl: 5,
			a: 26
			}, {
			lvl: 10,
			a: 27
			}, {
			lvl: 20,
			a: 28
			}, {
			lvl: 32,
			a: 29
			}, {
			lvl: 50,
			a: 30
			}],
		flavorText: "A Gearsite can move its eyes in any direction, and can see for great distances. It is easily the most paranoid monster on the island."
	},
	115: {
		ID: 115,
		name: "Bitbot",
		element: "earth",
		effects: [6, 45],
		life: "C+",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 4,
			a: 14
			}, {
			lvl: 8,
			a: 15
			}, {
			lvl: 17,
			a: 16
			}, {
			lvl: 28,
			a: 17
			}, {
			lvl: 45,
			a: 18
			}, {
			lvl: 15,
			e: 116
			}],
		flavorText: "The tiny Bitbot is very social, and tends to stay in large groups to protect itself from predators."
	},
	116: {
		ID: 116,
		name: "Bashbot",
		R: 2,
		element: "earth",
		effects: [6, 45],
		life: "A-",
		power: "C",
		growth: "B",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 5,
			a: 14
			}, {
			lvl: 10,
			a: 15
			}, {
			lvl: 20,
			a: 16
			}, {
			lvl: 32,
			a: 17
			}, {
			lvl: 50,
			a: 18
			}, {
			lvl: 28,
			e: 117
			}],
		flavorText: "Bashbots are ill-tempered, and easily annoyed. In fact, it is said that Bashbots rarely get along with one another as they are always arguing."
	},
	117: {
		ID: 117,
		name: "Batterbot",
		member: !0,
		R: 5,
		element: "earth",
		effects: [6, 45],
		life: "A+",
		power: "B",
		growth: "C",
		curve: [{
			lvl: 1,
			a: 13
			}, {
			lvl: 6,
			a: 14
			}, {
			lvl: 12,
			a: 15
			}, {
			lvl: 23,
			a: 16
			}, {
			lvl: 36,
			a: 17
			}, {
			lvl: 55,
			a: 18
			}],
		flavorText: "The massive Batterbot may be strong, but he is very slow and lazy. Most Batterbots wait around for something interesting to happen, and sleep the day away."
	},
	118: {
		ID: 118,
		name: "Fishbol",
		member: !0,
		R: 2,
		element: "water",
		effects: [0, 57, 54],
		life: "B-",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 4,
			a: 8
			}, {
			lvl: 8,
			a: 9
			}, {
			lvl: 18,
			a: 10
			}, {
			lvl: 29,
			a: 11
			}, {
			lvl: 47,
			a: 12
			}, {
			lvl: 26,
			e: 119
			}],
		flavorText: "The water inside the head of a Fishbol is used to cool its machinery, which can reach scalding temperatures."
	},
	119: {
		ID: 119,
		name: "Aquariot",
		member: !0,
		R: 5,
		element: "water",
		effects: [0, 57, 54],
		life: "B+",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 7
			}, {
			lvl: 5,
			a: 8
			}, {
			lvl: 10,
			a: 9
			}, {
			lvl: 19,
			a: 10
			}, {
			lvl: 31,
			a: 11
			}, {
			lvl: 48,
			a: 12
			}],
		flavorText: "Aquariots are avid collectors, and it is not uncommon to see items floating around the water in their heads...including small fish!"
	},
	120: {
		ID: 120,
		name: "Aracute",
		R: 2,
		element: "fire",
		effects: [3, 12, 51],
		life: "C-",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 1
			}, {
			lvl: 5,
			a: 2
			}, {
			lvl: 10,
			a: 3
			}, {
			lvl: 19,
			a: 4
			}, {
			lvl: 31,
			a: 5
			}, {
			lvl: 48,
			a: 6
			}, {
			lvl: 22,
			e: 121
			}],
		flavorText: "Aracutes prefer warm, dry places to live, and are often found living in the walls of old buildings. They emerge only to look for food and new housing, which is actually quite frequent."
	},
	121: {
		ID: 121,
		name: "Arachex",
		member: !0,
		R: 5,
		element: "fire",
		effects: [3, 12, 51],
		life: "A",
		power: "A",
		growth: "F-",
		curve: [{
			lvl: 1,
			a: 2
			}, {
			lvl: 9,
			a: 26
			}, {
			lvl: 18,
			a: 4
			}, {
			lvl: 33,
			a: 28
			}, {
			lvl: 49,
			a: 6
			}, {
			lvl: 72,
			a: 30
			}],
		flavorText: "Arachex are notoriously fast runners, but only for short distances. In fact, an arachex will only ever run for a maximum of 99.87542 meters before stopping. This makes it difficult to compete in track competitions."
	},
	122: {
		ID: 122,
		name: "Ice Neek",
		element: "ice",
		effects: [9, 45],
		life: "B-",
		power: "B",
		growth: "A",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 4,
			a: 20
			}, {
			lvl: 8,
			a: 21
			}, {
			lvl: 17,
			a: 22
			}, {
			lvl: 28,
			a: 23
			}, {
			lvl: 45,
			a: 24
			}, {
			lvl: 12,
			e: 123
			}],
		flavorText: "An Ice Neek is commonly found in places with low temperatures, but also has a strange curiosity towards fire."
	},
	123: {
		ID: 123,
		name: "Ice Caller",
		R: 2,
		element: "ice",
		effects: [9, 45],
		life: "B",
		power: "B",
		growth: "A-",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 4,
			a: 20
			}, {
			lvl: 8,
			a: 21
			}, {
			lvl: 18,
			a: 22
			}, {
			lvl: 29,
			a: 23
			}, {
			lvl: 47,
			a: 24
			}, {
			lvl: 24,
			e: 124
			}],
		flavorText: "Whenever a snowstorm is present, you can bet an Ice Caller is somewhere in the midst of it. It's rumored that they use these storms as a form of showering."
	},
	124: {
		ID: 124,
		name: "Ice Creator",
		R: 5,
		element: "ice",
		effects: [9, 45],
		life: "B+",
		power: "B",
		growth: "B+",
		curve: [{
			lvl: 1,
			a: 19
			}, {
			lvl: 5,
			a: 20
			}, {
			lvl: 10,
			a: 21
			}, {
			lvl: 19,
			a: 22
			}, {
			lvl: 31,
			a: 23
			}, {
			lvl: 48,
			a: 24
			}],
		flavorText: "An Ice Creator is a rare sight, found only in the coldest, deepest dungeons. They are fiercely territorial, often claiming entire dungeons for themselves."
	}
};
var Names = function () {
	function e() {}
	return e
}();
Names.createNameFromIndex = function (e, t, i, a) {
	var s = "male" === e ? Names.BOY_NAMES[t] : Names.GIRL_NAMES[t];
	return s += " " + Names.MIDDLE_NAMES[i], s += Names.LAST_NAMES[a].toLowerCase()
}, Names.generateName = function (e) {
	var t = "";
	t = "male" === e ? Names.BOY_NAMES[Math.floor(Math.random() * (Names.BOY_NAMES.length - 1))] : Names.GIRL_NAMES[Math.floor(Math.random() * (Names.GIRL_NAMES.length - 1))];
	var i = Names.MIDDLE_NAMES[Math.floor(Math.random() * (Names.MIDDLE_NAMES.length - 1))],
		a = Names.LAST_NAMES[Math.floor(Math.random() * (Names.LAST_NAMES.length - 1))].toLowerCase();
	return t + " " + i + a
}, Names.BOY_NAMES = ["Aaron", "Abdullah", "Abraham", "Adam", "Adrian", "Ahmad", "Ahmed", "Aidan", "Aiden", "Alan", "Albert", "Alejandro", "Alex", "Alexander", "Alexis", "Ali", "Alvin", "Andres", "Andrew", "Aneesh", "Angel", "Angelo", "Anthony", "Antonio", "Arthur", "Ashton", "Austin", "Ayden", "Benjamin", "Billy", "Blake", "Bobby", "Bort", "Braden", "Bradley", "Brady", "Brandon", "Brayden", "Brendan", "Brian", "Brody", "Bruce", "Bryan", "Bryce", "Bryson", "Caden", "Caleb", "Cameron", "Carl", "Carlos", "Carson", "Carter", "Cesar", "Charles", "Chase", "Christian", "Christopher", "Cody", "Colby", "Cole", "Colin", "Collin", "Colton", "Conner", "Connor", "Cooper", "Craig", "Cristian", "Dakota", "Dalton", "Damian", "Daniel", "Darien", "David", "Dennis", "Derek", "Devin", "Devon", "Diego", "Dominic", "Donald", "Donovan", "Douglas", "Dylan", "Edgar", "Eduardo", "Edward", "Edwin", "Eli", "Elias", "Elijah", "Emmanuel", "Eric", "Erick", "Erik", "Ethan", "Eugene", "Evan", "Fernando", "Francisco", "Frank", "Gabriel", "Gage", "Garrett", "Gary", "Gavin", "George", "Gerald", "Giovanni", "Grant", "Gregory", "Hammad", "Hamza", "Harold", "Hayden", "Hector", "Henry", "Howard", "Hunter", "Ian", "Ibrahim", "Isaac", "Isaiah", "Ivan", "Jack", "Jackson", "Jacob", "Jaden", "Jake", "Jalen", "James", "Jared", "Jason", "Javier", "Jayden", "Jeffrey", "Jeremiah", "Jeremy", "Jerry", "Jesse", "Jimothy", "Joe", "Joel", "John", "Johnathan", "Johnny", "Jonah", "Jonathan", "Jordan", "Jorge", "Jose", "Joseph", "Joshua", "Josiah", "Juan", "Julian", "Justin", "Kaden", "Kaleb", "Keith", "Kenneth", "Kevin", "Kian", "Kyle", "Landon", "Larry", "Lawrence", "Leonardo", "Levi", "Liam", "Logan", "Louis", "Lucas", "Luis", "Luke", "Malachi", "Malik", "Manuel", "Marco", "Marcus", "Mario", "Mark", "Martin", "Marvin", "Mason", "Matthew", "Max", "Maxwell", "Micah", "Michael", "Miguel", "Muhammad", "Nathan", "Nathaniel", "Nicholas", "Nicolas", "Noah", "Nolan", "Oliver", "Omar", "Oscar", "Owen", "Parker", "Patrick", "Paul", "Peter", "Peyton", "Philip", "Phillip", "Preston", "Ralph", "Raymond", "Ricardo", "Richard", "Riley", "Robert", "Roger", "Rohan", "Ronald", "Rory", "Roy", "Rupy", "Russell", "Ryan", "Samuel", "Scott", "Sean", "Sebastian", "Sergio", "Seth", "Shane", "Shawn", "Solomon", "Spencer", "Stephen", "Steve", "Steven", "Tanner", "Terry", "Thomas", "Timothy", "Travis", "Trenton", "Trevor", "Tristan", "Tyler", "Van", "Victor", "Vincent", "Walter", "Wasee", "Wayne", "Wesley", "William", "Wyatt", "Xavier", "Youssef", "Zachary"], Names.GIRL_NAMES = ["Aaliyah", "Abby", "Abigail", "Addison", "Adriana", "Adrianna", "Alana", "Alexa", "Alexandra", "Alexandria", "Alexia", "Alexis", "Alice", "Alicia", "Allison", "Alondra", "Alyssa", "Amanda", "Amber", "Amelia", "Amy", "Ana", "Andrea", "Angel", "Angela", "Angelica", "Angelina", "Ann", "Anna", "Ariana", "Arianna", "Ashley", "Ashlyn", "Aubrey", "Audrey", "Autumn", "Ava", "Avery", "Bailey", "Barbara", "Betty", "Beverly", "Bianca", "Breanna", "Brenda", "Briana", "Brianna", "Brittany", "Brooke", "Brooklyn", "Caitlin", "Caitlyn", "Camila", "Carol", "Caroline", "Carolyn", "Cassandra", "Cassidy", "Catherine", "Charlotte", "Chelsea", "Cheryl", "Cheyenne", "Chloe", "Christina", "Christine", "Claire", "Courtney", "Crystal", "Cynthia", "Daisy", "Daniela", "Danielle", "Deborah", "Debra", "Delaney", "Denise", "Destiny", "Diana", "Diane", "Donna", "Doris", "Dorothy", "Elizabeth", "Ella", "Ellen", "Ellie", "Emily", "Emma", "Erica", "Erin", "Eva", "Evelyn", "Faith", "Fatima", "Felicia", "Frances", "Gabriela", "Gabriella", "Gabrielle", "Genesis", "Gianna", "Giselle", "Gloria", "Grace", "Gracie", "Hailey", "Haley", "Hannah", "Heather", "Helen", "Hope", "Isabel", "Isabella", "Isabelle", "Jacqueline", "Jada", "Jade", "Jana", "Jane", "Janet", "Janice", "Jasmin", "Jasmine", "Jayla", "Jazmin", "Jean", "Jenna", "Jennifer", "Jessica", "Jillian", "Joan", "Jocelyn", "Jordan", "Jordyn", "Joyce", "Judith", "Judy", "Julia", "Juliana", "Julie", "Kaitlyn", "Karen", "Kate", "Katelyn", "Katherine", "Kathleen", "Kathryn", "Kathy", "Katie", "Kayla", "Kaylee", "Kelly", "Kelsey", "Kendall", "Kennedy", "Kiara", "Kimberly", "Kira", "Kylee", "Kylie", "Laura", "Lauren", "Layla", "Leah", "Leslie", "Liliana", "Lillian", "Lilly", "Lily", "Linda", "Lindsey", "Lisa", "Lori", "Louise", "Lucy", "Lydia", "Mackenzie", "Madeline", "Madelyn", "Madison", "Makayla", "Makenzie", "Margaret", "Maria", "Mariah", "Mariam", "Mariam", "Marie", "Marilyn", "Marissa", "Martha", "Mary", "Maya", "Mckenzie", "Megan", "Melanie", "Melissa", "Mia", "Michelle", "Mikayla", "Mildred", "Miranda", "Molly", "Morgan", "Mya", "Nancy", "Naomi", "Natalia", "Natalie", "Nevaeh", "Nichole", "Nicole", "Nur", "Olivia", "Paige", "Pamela", "Patricia", "Payton", "Peyton", "Rachel", "Reagan", "Rebecca", "Riley", "Rose", "Ruby", "Ruth", "Rylee", "Sabrina", "Sadie", "Salma", "Samantha", "Sandra", "Sara", "Sarah", "Savannah", "Serenity", "Sharon", "Shelby", "Shirley", "Sierra", "Skylar", "Sofia", "Sophia", "Sophie", "Stephanie", "Summer", "Susan", "Sydney", "Tammy", "Taylor", "Teresa", "Theresa", "Tiffany", "Trinity", "Valeria", "Valerie", "Vanessa", "Veronica", "Victoria", "Virginia", "Zoe", "Zoey"], Names.FIRST_NAMES = [], Names.MIDDLE_NAMES = ["Air", "Animal", "Battle", "Blue", "Bronze", "Clear", "Cloud", "Coin", "Daring", "Dark", "Day", "Diamond", "Divine", "Dragon", "Dream", "Earth", "Fable", "Fairy", "Fall", "Fancy", "Far", "Fire", "Flame", "Fog", "Forge", "Frost", "Fruit", "Garden", "Gear", "Ghost", "Giant", "Glass", "Gold", "Golden", "Good", "Green", "Heavy", "Hero", "Ice", "Illusion", "Iron", "Land", "Leaf", "Legend", "Life", "Lightning", "Maelstrom", "Magic", "Metal", "Monster", "Moon", "Mountain", "Myth", "Near", "Night", "Ocean", "Plant", "Quake", "Rain", "Red", "River", "Ruby", "Silver", "Sleep", "Soft", "Spell", "Spring", "Star", "Storm", "Strong", "Summer", "Swift", "Thunder", "Water", "White", "Wild", "Wind", "Winter", "Wish", "Wonder", "Yellow"], Names.LAST_NAMES = ["Blade", "Boots", "Boy", "Breath", "Brother", "Caller", "Cast", "Caster", "Catcher", "Crafter", "Dancer", "Dreamer", "Drifter", "Ear", "Eyes", "Follower", "Foot", "Friend", "Gem", "Girl", "Giver", "Hand", "Heart", "Helper", "Hunter", "Leader", "Legs", "Lemon", "Light", "Man", "Mask", "Master", "Nose", "Ore", "Pants", "Petal", "Prism", "Ring", "Runner", "Seed", "Shade", "Shadow", "Shard", "Shine", "Shirt", "Singer", "Sister", "Smith", "Song", "Spoon", "Staff", "Steel", "Strider", "Sword", "Tail", "Talon", "Tamer", "Thinker", "Torch", "Vault", "Voice", "Walker", "Wand", "Ward", "Whisper", "Winner", "Woman"], Prodigy.Control.Element = function (e, t, i, a) {
	Phaser.Group.call(this, e, t), Util.isDefined(i) && (this.x = i), Util.isDefined(a) && (this.y = a)
}, Prodigy.extends(Prodigy.Control.Element, Phaser.Group, {
	constructor: Prodigy.Control.Element,
	setRenderState: function (e, t) {
		this.renderOnly = e, this.tintElement = t, this.renderUpdate = !0
	},
	showTooltip: function (e, t) {
		if (Util.isDefined(this.tooltip) && (this.tooltip.destroy(), this.tooltip = null), Util.isDefined(e)) {
			this.tooltip = this.game.prodigy.create.element(this, t);
			var i = this.tooltip.add(this.game.prodigy.create.sprite(30, 0, "core", "tooltip"));
			i.alpha = .9, i.width = 300, i.height = 50, this.game.prodigy.create.font(this.tooltip, 90, 11, e, {
				width: 230,
				align: "center"
			}), i = this.tooltip.add(this.game.prodigy.create.sprite(0, 0, "icons", "type")), this.game.add.tween(i).to({
				x: 10
			}, 1e3, Phaser.Easing.Quadratic.InOut, !0, 0, Number.MAX_VALUE, !0)
		}
	},
	hasTooltip: function () {
		return Util.isDefined(this.tooltip)
	},
	highlight: function (e, t, i) {
		Util.isDefined(this.arrow) && (this.arrow.destroy(), this.arrow = null), e && (this.arrow = this.add(this.game.prodigy.create.sprite(0, 0, "icons", "help")), this.arrow.x = (t || 0) + Math.floor(this.width / 2), this.arrow.y = (i || 0) - this.arrow.height + 20, this.game.add.tween(this.arrow).to({
			y: this.arrow.y + 15
		}, 700, Phaser.Easing.Quadratic.InOut, !0, 0, Number.MAX_VALUE, !0))
	},
	isHighlighted: function () {
		return Util.isDefined(this.arrow)
	}
}), Prodigy.Control.Button = function (e, t, i, a, s, r, o) {
	Prodigy.Control.Element.call(this, e, t), this.x = i, this.y = a, this.isActive = !0, this.isPressed = !1, this.callback = o, this.sprite = this.game.prodigy.create.sprite(0, 0, s, r), this.add(this.sprite), this.sprite.inputEnabled = !0, this.sprite.events.onInputDown.add(this.onDown, this), this.sprite.events.onInputUp.add(this.onUp, this), this.sprite.events.onInputOver.add(this.onOver, this), this.sprite.events.onInputOut.add(this.onOut, this)
}, Prodigy.extends(Prodigy.Control.Button, Prodigy.Control.Element, {
	constructor: Prodigy.Control.Button,
	changeImage: function (e) {
		this.sprite.frameName = e
	},
	onDown: function () {
		this.isPressed = !0, this.isActive && (this.sprite.y = 0, this.game.prodigy.audio.playSFX("pop"), Util.isDefined(this.callback) && this.callback())
	},
	onUp: function () {
		this.isPressed = !1, this.isActive && (this.sprite.y = -3)
	},
	onOver: function () {
		this.isActive && (this.sprite.y = -3)
	},
	onOut: function () {
		this.isActive && (this.sprite.y = 0)
	},
	addCallback: function (e, t, i) {
		i ? this.sprite.events.onInputDown.addOnce(e, t) : this.sprite.events.onInputDown.add(e, t)
	},
	setActive: function () {
		this.isActive = !0, this.sprite.tint = 16777215
	},
	setInactive: function () {
		this.isActive = !1, this.sprite.tint = 5789784, this.sprite.y = 0
	},
	select: function () {
		this.sprite.tint = 7447253
	},
	deselect: function () {
		this.isActive = !0, this.sprite.tint = 16777215, this.sprite.y = 0
	},
	isActive: function () {
		return this.isActive
	}
}), Prodigy.Control.StackButton = function (e, t, i, a, s, r) {
	Prodigy.Control.Element.call(this, e, t), this.x = i, this.y = a, this.isActive = !0, this.callback = r, this.contents = this.game.prodigy.create.element(this, 0, 0);
	for (var o = !1, n = 0; n < s.length; n++) {
		var l = s[n];
		if (Util.isDefined(l.tag)) {
			var h = this.top = this.addImage(l.tag, l.x, l.y, l.w, l.h);
			o || (o = !0, h.inputEnabled = !0, h.events.onInputDown.add(this.onDown, this), h.events.onInputUp.add(this.onUp, this), h.events.onInputOver.add(this.onOver, this), h.events.onInputOut.add(this.onOut, this))
		} else Util.isDefined(l.text) && this.game.prodigy.create.font(this.contents, l.x || 0, l.y || 0, l.text, {
			width: 80,
			align: "center",
			size: Util.isDefined(l.size) ? l.size : 20
		})
	}
}, Prodigy.extends(Prodigy.Control.StackButton, Prodigy.Control.Element, {
	constructor: Prodigy.Control.StackButton,
	addImage: function (e, t, i, a, s) {
		var r = this.contents.add(this.game.prodigy.create.sprite(t || 0, i || 0, "icons", e));
		return Util.isDefined(a) && (r.width = a), Util.isDefined(s) && (r.height = s), r
	},
	enable: function (e) {
		Util.isDefined(this.top) && (this.top.tint = e ? 16777215 : 2236962), this.isActive = e
	},
	onDown: function () {
		this.isActive && (this.contents.y = 0, this.game.prodigy.audio.playSFX("pop"), Util.isDefined(this.callback) && this.callback())
	},
	onUp: function () {
		this.isActive && (this.contents.y = -3)
	},
	onOver: function () {
		this.isActive && (this.contents.y = -3)
	},
	onOut: function () {
		this.isActive && (this.contents.y = 0)
	},
	setActive: function () {
		this.isActive = !0
	},
	setInactive: function () {
		this.isActive = !1, this.contents.y = 0
	},
	select: function () {
		this.y = this.oldY || this.y, this.oldY = this.y, Util.isDefined(this.tween) && this.tween.stop(), this.tween = this.game.add.tween(this).to({
			y: this.y - 10
		}, 1e3, Phaser.Easing.Quadratic.InOut, !0, 0, Number.MAX_VALUE, !0)
	},
	deselect: function () {
		this.isActive = !0, Util.isDefined(this.tween) && (this.tween.stop(), this.tween = null), this.y = this.oldY || this.y
	}
}), Prodigy.Control.AdvButton = function (e, t, i, a, s, r) {
	if (Prodigy.Control.Element.call(this, e, t, i, a), this.isActive = !0, this.callback = r, this.content = this.game.prodigy.create.element(this), this.sprite = this.content.add(this.game.prodigy.create.sprite(0, 0, "core", "btn-core")), this.sprite.inputEnabled = !0, this.sprite.events.onInputDown.add(this.onDown, this), this.sprite.events.onInputUp.add(this.onUp, this), this.sprite.events.onInputOver.add(this.onOver, this), this.sprite.events.onInputOut.add(this.onOut, this), Util.isDefined(s.icon)) {
		var o = this.content.add(this.game.prodigy.create.sprite(0, 0, "icons", s.icon));
		o.x = Math.floor((this.sprite.width - o.width) / 2), o.y = Math.floor((this.sprite.height - o.height) / 2), o.alpha = .4
	}
	Util.isDefined(s.top) && this.game.prodigy.create.font(this.content, 5, 8, s.top, {
		size: 16,
		align: "center",
		width: this.sprite.width - 10
	}), Util.isDefined(s.bot) && this.game.prodigy.create.font(this.content, 5, this.sprite.height - 33, s.bot, {
		size: 16,
		align: "center",
		width: this.sprite.width - 10
	})
}, Prodigy.extends(Prodigy.Control.AdvButton, Prodigy.Control.Element, {
	constructor: Prodigy.Control.AdvButton,
	onDown: function () {
		this.isActive && (this.content.y = 0, this.game.prodigy.audio.playSFX("pop"), Util.isDefined(this.callback) && this.callback())
	},
	onUp: function () {
		this.isActive && (this.content.y = -3)
	},
	onOver: function () {
		this.isActive && (this.content.y = -3)
	},
	onOut: function () {
		this.isActive && (this.content.y = 0)
	},
	setActive: function (e) {
		this.isActive = e, this.sprite.tint = e ? 16777215 : 5789784, this.content.y = 0
	}
}), Prodigy.Control.PanelButton = function (e, t, i, a, s, r, o, n) {
	Prodigy.Control.Element.call(this, e, t, i, a), this.isActive = !0, this.callback = n, this.content = this.game.prodigy.create.element(this), this.btn = this.game.prodigy.create.panel(this.content, 0, 0, s, r, o), this.btn.setClickable(this.onDown.bind(this), this.onUp.bind(this), this.onOver.bind(this), this.onOut.bind(this))
}, Prodigy.extends(Prodigy.Control.PanelButton, Prodigy.Control.Element, {
	constructor: Prodigy.Control.PanelButton,
	onDown: function () {
		this.isActive && (this.content.y = 0, this.game.prodigy.audio.playSFX("pop"), Util.isDefined(this.callback) && this.callback())
	},
	onUp: function () {
		this.isActive && (this.content.y = -3)
	},
	onOver: function () {
		this.isActive && (this.content.y = -3)
	},
	onOut: function () {
		this.isActive && (this.content.y = 0)
	},
	setActive: function (e) {
		this.isActive = e, this.content.y = 0
	}
}), Prodigy.Control.Sprite = function (e, t, i, a, s, r) {
	Phaser.Sprite.call(this, e, t, i, a, s || 0), r && this.anchor.setTo(.5, 1)
}, Prodigy.extends(Prodigy.Control.Sprite, Phaser.Sprite, {
	constructor: Prodigy.Control.Sprite
}), Prodigy.Control.Menu = function (e, t, i, a) {
	this.menuID = i, this.style = Util.isDefined(a) ? a : {
		hideMenu: !0,
		hideContent: !0,
		tile: "bg-tile-brown"
	}, e.prodigy.open.menuOpen(!this.style.hideMenu), Prodigy.Control.Element.call(this, e, t), this.style.hideOverlay || (this.overlay = this.game.prodigy.create.sprite(0, 0, "core", "overlay"), this.overlay.width = this.game.world.width, this.overlay.height = this.game.world.height, this.overlay.alpha = .01, this.overlay.inputEnabled = !0, this.add(this.overlay)), this.isHidden = !1
}, Prodigy.extends(Prodigy.Control.Menu, Prodigy.Control.Element, {
	constructor: Prodigy.Control.Menu,
	hide: function (e) {
		e ? (this.isHidden = !0, this.visible = !1) : this.isHidden && (this.isHidden = !1, this.visible = !0)
	},
	setup: function () {
		this.loadComplete()
	},
	loadComplete: function () {
		this.alive && (Util.isDefined(this.spinner) && this.spinner.destroy(), this.menuSetup())
	},
	menuSetup: function () {
		Util.isDefined(this.style.open) && this.style.open(), this.bg = this.game.prodigy.create.element(this, 0, 0), this.style.tile && this.setBackgroundTile("core", this.style.tile, .25, .25, this.style.full), this.fg = this.game.prodigy.create.element(this, 0, 0), this.style.hideContent && (this.game.enableBackground(!1), this.game.enableContent(!1))
	},
	showFrame: function (e, t, i, a) {
		if (this.fg.add(new Phaser.TileSprite(this.game, 0, 0, this.game.world.width, 50, "core", "panel-mid")), this.fg.add(new Phaser.TileSprite(this.game, 0, 50, this.game.world.width, 50, "core", "panel-top2")), this.fg.add(new Phaser.TileSprite(this.game, 0, 620, this.game.world.width, 50, "core", "panel-top")), this.fg.add(new Phaser.TileSprite(this.game, 0, 670, this.game.world.width, 50, "core", "panel-mid")), Util.isDefined(e)) {
			this.fg.add(this.game.prodigy.create.sprite(30, 5, "icons", "icon-base"));
			var s = this.fg.add(this.game.prodigy.create.sprite(30, 5, "icons", e));
			s.x += Math.floor((80 - s.width) / 2), s.y += Math.floor((80 - s.height) / 2)
		}
		if (Util.isDefined(t) && (this.title = this.game.prodigy.create.font(this.fg, 125, 10, t, {
				font: "button",
				size: 36
			})), Util.isDefined(i)) {
			var r = this.game.prodigy.create.element(this.fg, 0, 5);
			this.btns = [];
			for (var o = 0; o < i.length; o++) {
				var n = i[o];
				r.add(this.game.prodigy.create.sprite(90 * o, 0, "icons", "icon-base-active")), this.btns[o] = this.game.prodigy.create.button(r, 90 * o, 0, "icons", n.icon, this.clickBtn.bind(this, o, this.btns, n.callback, n.title), !0), this.btns[o].x += Math.floor((80 - this.btns[o].width) / 2), this.btns[o].y += Math.floor((80 - this.btns[o].height) / 2), this.btns[o].oldY = this.btns[o].y
			}
			r.x = 1250 - r.width, Util.isDefined(a) && this.btns[a].onDown()
		}
	},
	clickBtn: function (e, t, i, a) {
		if (this.currentBtn !== e) {
			this.currentBtn = e, Util.isDefined(a) && Util.isDefined(this.title) && this.title.setText(a);
			for (var s = 0; s < t.length; s++) this.game.tweens.removeFrom(t[s], !1), t[s].y = t[s].oldY;
			this.game.add.tween(t[e]).to({
				y: t[e].y - 10
			}, 500, Phaser.Easing.Quadratic.Out).to({
				y: t[e].y
			}, 500, Phaser.Easing.Quadratic.In).loop().start(), i()
		}
	},
	showBtns: function (e, t) {
		if (Util.isDefined(t))
			for (var i = 0, a = t.length - 1; a >= 0; a--) t[a].y = 650, i += t[a].width, t[a].x = 1230 - i, i += 30;
		if (Util.isDefined(e))
			for (var i = 0, a = 0; a < e.length; a++) e[a].y = 650, e[a].x = 50 + i, i += e[a].width + 30
	},
	update: function () {
		Prodigy.Control.Element.prototype.update.call(this), this.setupComplete && this.menuUpdate()
	},
	menuUpdate: function () {
		Util.isDefined(this.bar) && (this.bar.tilePosition.x += this.barSpeedX, this.bar.tilePosition.y += this.barSpeedY)
	},
	close: function () {
		Util.isDefined(this.game) && (this.style.hideContent && (this.game.enableBackground(!0), this.game.enableContent(!0)), this.game.prodigy.open.menuOpen(!0), Util.isDefined(this.style.close) && this.style.close(), this.game.prodigy.open.close(this), this.destroy())
	},
	setBackgroundTile: function (e, t, i, a, s) {
		Util.isDefined(this.bar) && this.bar.destroy(), this.bg.removeAll(!0), this.bar = s ? new Phaser.TileSprite(this.game, 0, 0, this.game.world.width, this.game.world.height, e, t) : new Phaser.TileSprite(this.game, 0, 100, this.game.world.width, this.game.world.height - 200, e, t), this.bar.tilePosition.x = -6, this.bar.tilePosition.y = -20, this.bg.add(this.bar), this.barSpeedX = i || this.barSpeedX, this.barSpeedY = a || this.barSpeedY
	}
}), Prodigy.RenderMenu = function (e, t, i, a, s) {
	Prodigy.Control.Element.call(this, e, t, i, a), this._texture = s, this.game = e, this._bg = e.prodigy.create.element(this), this._texture.clear(), this._grp = new Phaser.Group(e), this._img = this.add(new Phaser.Image(e, 0, 0, this._texture)), this._img.inputEnabled = !0, this.page = 0
}, Prodigy.extends(Prodigy.RenderMenu, Prodigy.Control.Element, {
	constructor: Prodigy.RenderMenu,
	setActive: function (e) {
		this.visible = e, e && this.process(), this.disableModeSet || this.setMode(this.page || 0)
	},
	addTransparent: function () {
		var e = this._bg.add(this.game.prodigy.create.sprite(0, 0, "core", "overlay"));
		e.width = 1280, e.height = 720, e.alpha = .5
	},
	addBackground: function (e) {
		for (var t = 0; 32 > t; t++)
			for (var i = 0; 18 > i; i++) this._bg.add(new Phaser.Image(this.game, 40 * t, 40 * i, "core", e))
	},
	addPanel: function () {},
	createBaseSetup: function (e, t, i, a, s, r, o) {
		this.disableModeSet = r;
		var n = this.game.prodigy.create.element(this, (1280 - 40 * e) / 2, (720 - 40 * t) / 2);
		if (n.setRenderState(!0), this.game.prodigy.create.panel(n, 0, 0, e, t, i), Util.isDefined(s) && s.length > 0) this.game.prodigy.create.panel(n, 40, 40, 6 + 3 * s.length, 2, "banner");
		else if (Util.isDefined(o)) {
			var l = this.game.prodigy.create.panel(n, 40, 40, 18, 2, "banner");
			this.game.prodigy.create.font(l, 200, 15, o, {
				size: 36,
				font: "button"
			})
		}
		if (this.game.prodigy.create.button(this, n.x + 40 * (e - 1), n.y - 10, "icons", "close", this.close.bind(this)), this.buttons = [], Util.isDefined(s) && s.length > 0) {
			Util.isDefined(a) && (n.add(this.game.prodigy.create.sprite(80, -10, "icons", "menu-crest")), this.game.prodigy.create.font(n, 80, 70, a, {
				width: 140,
				align: "center"
			}));
			for (var h = 0; h < s.length; h++) this.buttons.push(this.game.prodigy.create.advButton(this, n.x + 240 + 120 * h, n.y + 30, s[h], this.setMode.bind(this, h)))
		}
		return n
	},
	setMode: function (e) {
		if (Util.isDefined(this.buttons))
			for (var t = 0; t < this.buttons.length; t++) this.buttons[t].setActive(e !== t)
	},
	startLoad: function (e, t) {
		this.game.prodigy.load.assets(e, t)
	},
	process: function () {
		this._texture.clear(), this._bg.visible = !0, this._texture.renderXY(this._bg, 0, 0, !0), this._bg.visible = !1;
		for (var e = 0; e < this.children.length; e++) {
			var t = this.children[e];
			t instanceof Prodigy.Control.Element && (t.tintElement && t.setAllChildren("tint", 10066329), t.renderOnly ? (t.visible = !0, this._texture.renderXY(t, t.x, t.y), t.visible = !1) : t.visible = !0)
		}
	},
	init: function (e) {
		e.add(this), this.process()
	},
	close: function (e) {
		this.game.prodigy.open.setActiveRenderMenu();
		try {
			Util.isDefined(this.onClose) && this.onClose(e)
		} catch (t) {}
		this.destroy()
	},
	create: function () {
		this.game.prodigy.open.setActiveRenderMenu(this), this.process()
	}
});
var Attack = function () {
	function e(e, t, i, a, s, r, o, n, l, h, d) {
		this.game = e, this.source = t, this.target = i, this.element = o, this.callback = l, this.atk = n, this.miss = h, this.mods = d, this.underLayer = this.game.prodigy.create.element(a, 0, 0), this.overLayer = this.game.prodigy.create.element(s, 0, 0), this.setup(), this.game.time.events.add(r + 1e3, this.complete, this)
	}
	return e.prototype.setup = function (e, t) {
		this.miss ? this.game.time.events.add(e, this.missed, this) : (Util.isDefined(e) && this.game.time.events.add(e, this.damage, this), Util.isDefined(t) && this.game.time.events.add(t, this.heal, this)), Util.isDefined(this.atk) && Util.isDefined(this.atk.name)
	}, e.prototype.damage = function () {
		console.log(this.mod);
		var e = Util.isDefined(this.mod) ? this.mod : 0;
		Util.isDefined(this.mods) && Util.isDefined(this.mods.dmgMod) && (e += this.mods.dmgMod);
		var t = this.game.prodigy.attacks.calculateDamage(this.atk, this.source.source, this.target.source, e);
		console.log("targetdamage " + t), this.target.source.changeCurrentHearts(-t);
		var i = t * this.game.prodigy.affixes.getThorns(this.target.source);
		console.log("thorns " + i), i < this.source.source.getCurrentHearts() ? this.source.source.changeCurrentHearts(-Math.floor(i)) : i = 0;
		var a = null,
			s = null,
			r = null,
			o = null;
		0 === t ? (a = "Resist", s = "effects/" + this.atk.element + "-immune") : this.game.prodigy.affixes.hasDamage(this.atk.element, this.source.source.getAffixes()) || this.game.prodigy.affixes.hasWeakness(this.atk.element, this.target.source.getAffixes()) ? (a = "Bonus Damage!", s = "effects/" + this.atk.element + "-damage") : this.game.prodigy.affixes.hasResist(this.atk.element, this.target.source.getAffixes()) && (a = "Resist", s = "effects/" + this.atk.element + "-resist"), i > 0 && (r = "Thorns", o = "effects/thorns"), this.display(this.target, a, s), this.display(this.source, r, o)
	}, e.prototype.display = function (e, t) {
		if (Util.isDefined(t)) {
			var i = this.game.prodigy.create.font(this.overLayer, e.x, e.y, t, {
				size: 40
			});
			i.x = e.x - i.width / 2, i.y -= 150, this.game.add.tween(i).to({
				y: "-100"
			}, 1300, Phaser.Easing.Quadratic.Out).to({
				alpha: 0
			}, 200, Phaser.Easing.Quadratic.Out).start()
		}
	}, e.prototype.missed = function () {
		var e = this.game.prodigy.affixes.getDodge() > 1 ? "Dodged!" : "MISS!",
			t = this.game.prodigy.affixes.getDodge() > 1 ? "effects/dodge" : null;
		this.display(this.target, e, t)
	}, e.prototype.heal = function () {
		console.log("heal " + this.game.prodigy.attacks.calculateDamage(this.atk, this.source.source, this.target.source) / 2), this.source.source.changeCurrentHearts(Math.max(0, Math.floor(this.game.prodigy.attacks.calculateDamage(this.atk, this.source.source, this.target.source) / 2)))
	}, e.prototype.showOverlay = function (e, t, i, a, s) {
		var r = e;
		this.overLayer.add(r), this.game.add.tween(r.tilePosition).to({
			x: i * t,
			y: a * t
		}, t, Phaser.Easing.Linear.None).delay(s).start(), this.game.add.tween(r).to({
			alpha: 0
		}, 100, Phaser.Easing.Linear.None).delay(s + t - 100).start()
	}, e.prototype.complete = function () {
		this.underLayer.destroy(), this.overLayer.destroy(), this.callback()
	}, e
}();
Attack.BX = 2e3, Attack.BY = 1e3, Prodigy.Control.ScrollBar = function (e, t, i, a, s, r) {
	Prodigy.Control.Element.call(this, e, t, i, a), this.page = 0, this.callback = r, this.height = s, this.maxY = 50 + s - 100, this.minY = 50, this.add(new Phaser.TileSprite(this.game, 0, 25, 50, s - 50, "core", "panel-side")), this.add(new Phaser.TileSprite(this.game, 50, 25, 50, s - 50, "core", "panel-side2")), this.scroll = this.add(this.game.prodigy.create.sprite(0, 50, "core", "btn-mini")), this.up = this.game.prodigy.create.textButton(this, 0, 0, {
		icon: "up",
		size: Prodigy.Control.TextButton.MINI
	}, this.click.bind(this, -1)), this.up.icon.x = 25, this.down = this.game.prodigy.create.textButton(this, 0, s - 50, {
		icon: "down",
		size: Prodigy.Control.TextButton.MINI
	}, this.click.bind(this, 1)), this.down.icon.x = 25
}, Prodigy.extends(Prodigy.Control.ScrollBar, Prodigy.Control.Element, {
	constructor: Prodigy.Control.ScrollBar,
	setPages: function (e, t) {
		this.page = t || 0, this.pages = e, this.diff = (this.height - 100 - 50) / Math.max(1, e - 1), this.click(0)
	},
	click: function (e) {
		this.page = this.page + e, this.page < 0 && (this.page = 0), this.page >= this.pages && (this.page = this.pages - 1), 0 === this.page ? this.up.setInactive() : this.up.setActive(), this.page === this.pages - 1 ? this.down.setInactive() : this.down.setActive(), this.scroll.y = 50 + this.diff * this.page, this.scroll.y < 50 && (this.scroll.y = 50), this.callback(this.page)
	}
}), Prodigy.Control.Slider = function (e, t, i, a, s, r, o) {
	Prodigy.Control.Element.call(this, e, t, i, a), this.len = s - 100, this.isVertical = r, o && (this.game.input.mouse.mouseWheelCallback = this.onScroll.bind(this)), this.bar = this.isVertical ? this.add(new Phaser.TileSprite(this.game, 50, 0, s, 50, "core", "slider")) : this.add(new Phaser.TileSprite(this.game, 0, 0, s, 50, "core", "slider")), this.bar.inputEnabled = !0, this.bar.events.onInputDown.add(this.barClick, this), this.lower = this.isVertical ? this.game.prodigy.create.button(this, 50, 0, "core", "arrow-btn-back", this.btnClick.bind(this, -1)) : this.game.prodigy.create.button(this, 0, 0, "core", "arrow-btn-back", this.btnClick.bind(this, -1, !0)), this.lower.setInactive(), this.higher = this.isVertical ? this.game.prodigy.create.button(this, 50, this.len + 50, "core", "arrow-btn-next", this.btnClick.bind(this, 1)) : this.game.prodigy.create.button(this, this.len + 50, 0, "core", "arrow-btn-next", this.btnClick.bind(this, 1, !0)), this.higher.setInactive(), this.isVertical && (this.bar.angle = 90, this.lower.angle = 90, this.higher.angle = 90);
	var n = this.isVertical ? new Phaser.Rectangle(0, 50, 50, this.len) : new Phaser.Rectangle(50, 0, this.len, 50);
	this.slide = this.isVertical ? this.add(this.game.prodigy.create.sprite(n.x, n.y, "core", "btn-white")) : this.add(this.game.prodigy.create.sprite(n.x, n.y, "core", "btn-white")), this.slide.anchor.setTo(this.isVertical ? 0 : .5, this.isVertical ? .5 : 0), this.slide.visible = !1, this.slide.inputEnabled = !0, this.slide.input.enableDrag(), this.slide.input.boundsRect = n, this.slide.events.onDragStop.add(this.onDragStop, this)
}, Prodigy.extends(Prodigy.Control.Slider, Prodigy.Control.Element, {
	constructor: Prodigy.Control.Slider,
	reset: function (e, t, i, a) {
		this.timeHeld = 0, this.isOver = !1, this.itemsPerPage = t || 1, this.items = e, this.callback = a, this.paging = 0 > i ? this.itemsPerPage : 1, i >= 0 ? (this.page = Math.max(0, i - t), this.pages = Math.max(1, this.items - this.itemsPerPage + 1)) : (this.page = 0, this.pages = Math.max(1, Math.ceil(this.items / this.itemsPerPage))), this.inc = this.pages > 1 ? (this.len - 50) / (this.pages - 1) : this.len - 50, this.slide.visible = this.pages > 1, this.btnClick(0, !0), this.callback(this.page * this.paging)
	},
	onDragStop: function () {
		var e = 0;
		e = this.isVertical ? Math.round((this.slide.y - 50 - 25) / this.inc) : Math.round((this.slide.x - 50 - 25) / this.inc), this.btnClick(e - this.page, !0)
	},
	barClick: function (e, t) {
		var i = 0;
		i = this.isVertical ? Math.round((t.y - this.bar.world.y - 50 - 25) / this.inc) : Math.round((t.x - this.bar.world.x - 50 - 25) / this.inc), this.btnClick(i - this.page, !0)
	},
	process: function () {
		this.game.input.mouse.mouseWheelCallback = this.onScroll.bind(this), this.callback(this.page * this.paging)
	},
	btnClick: function (e, t) {
		var i = this.page;
		this.page += e, this.page > this.pages - 1 && (this.page = this.pages - 1), this.page < 0 && (this.page = 0), 0 === this.page ? this.lower.setInactive() : this.lower.setActive(), this.page === this.pages - 1 ? this.higher.setInactive() : this.higher.setActive(), this.isVertical ? this.slide.y = 75 + Math.round(this.inc * this.page) : this.slide.x = 75 + Math.round(this.inc * this.page), i !== this.page && this.callback(this.page * this.paging), t || (this.timeHeld = this.game.time.now)
	},
	onScroll: function () {
		(Util.isDefined(this.game) && this.visible && this.isConfined && this.isOver || !this.isConfined) && this.btnClick(-Math.floor(this.game.input.mouse.wheelDelta), !0)
	}
}), Prodigy.Control.BitmapFont = function (e, t, i, a, s, r) {
	Phaser.Group.call(this, e, t), this.x = i, this.y = a, this.sprites = [], r = r || {}, this.boundsWidth = r.width || 1280, this.fontSize = r.size || 20, this.align = r.align, this.font = r.font || "general", this.fontName = "font-" + this.font, this.lineHeight = r.lineHeight, this.monoSpace = r.mono, this.iconOffsetY = r.iconOffsetY || 0, this.icons = [], Util.isDefined(s) && this.setText(s)
}, Prodigy.extends(Prodigy.Control.BitmapFont, Phaser.Group, {
	constructor: Prodigy.Control.BitmapFont,
	setText: function (e) {
		var t = 0,
			i = 0,
			a = 0,
			s = [];
		this.text = e;
		for (var r = 0, o = null, n = 0; n < this.sprites.length; n++) this.sprites[n].kill();
		for (var l = 0; l < e.length; l++) {
			var h = e.charCodeAt(l),
				d = null;
			if (91 !== h) {
				if (93 === h) d = o, o = null;
				else if (Util.isDefined(o)) {
					r++, o += e[l];
					continue
				}
				var n = l - r,
					p = this.monoSpace || 10;
				if (n >= this.sprites.length) {
					var c = this.game.prodigy.create.sprite(t, i, this.fontName);
					this.add(c), this.sprites.push(c)
				} else this.sprites[n].revive();
				if (this.sprites[n].x = t, this.sprites[n].y = i, Util.isDefined(d) ? ("icons" !== this.sprites[n].key && this.sprites[n].loadTexture("icons"), this.sprites[n].frameName = d, this.sprites[n].y += this.iconOffsetY) : (this.sprites[n].key !== this.fontName && this.sprites[n].loadTexture(this.fontName), 10 !== h && (this.sprites[n].frameName = h + "-" + this.fontSize)), 32 === h || l === e.length - 1 || 10 === h) {
					var u = this.lineHeight || this.fontSize + 5;
					if (t >= this.boundsWidth) {
						var g = t;
						t = 0, i += u;
						for (var m = a; n >= m; m++) this.sprites[m].x = t, this.sprites[m].y = i, "icons" === this.sprites[m].key && (this.sprites[m].y += (this.sprites[m].height - this.fontSize) / 2), t += this.monoSpace || this.sprites[m].width;
						s.push(g - t)
					} else 10 === h && (this.sprites[n].kill(), i += u, t = 0);
					a = n + 1, 32 === h && (t += p)
				}
				10 !== h && (t += this.monoSpace || this.sprites[n].width), l === e.length - 1 && s.push(t)
			} else r++, o = ""
		}
		if (this.lines = s.length, Util.isDefined(this.align) && "left" !== this.align)
			for (var y = -1, f = 0, l = -1, n = 0; n < this.sprites.length; n++) {
				var c = this.sprites[n];
				y !== c.y && (y = c.y, l++, Util.isDefined(s[l]) && ("center" === this.align ? f = Math.floor((this.boundsWidth - s[l]) / 2) : "right" === this.align && (f = Math.floor(this.boundsWidth - s[l])))), c.x += f
			}
	},
	addClickCallback: function (e, t, i) {
		var a = this.add(this.game.prodigy.create.sprite(0, 0, "core", "overlay-light"));
		a.width = t, a.height = i, a.alpha = 0, a.inputEnabled = !0, a.events.onInputDown.add(e)
	}
}), Prodigy.Control.InputField = function (e, t, i, a, s, r, o, n) {
	Prodigy.Control.Element.call(this, e, t);
	var l = l || "";
	this.input = document.createElement("input"), this.input.setAttribute("value", l), this.input.setAttribute("id", i), this.input.setAttribute("class", "game-input"), this.ID = "#" + i;
	var t = document.getElementById("external-ui");
	t.appendChild(this.input), this.canvas = $("#game-container canvas"), this.x = s, this.y = r, this.twidth = o, this.theight = n, this.createEvents()
}, Prodigy.Control.InputField.HEIGHT_SMALL = 30, Prodigy.Control.InputField.HEIGHT_MEDIUM = 45, Prodigy.Control.InputField.WIDTH_MEDIUM = 300, Prodigy.Control.InputField.WIDTH_LARGE = 450, Prodigy.extends(Prodigy.Control.InputField, Prodigy.Control.Element, {
	constructor: Prodigy.Control.InputField,
	createEvents: function () {
		this.allowEvents = !0, $(this.ID).on("focus", null, {
			game: this.game
		}, this.focus.bind(this, !0)), $(this.ID).on("focusout", null, {
			game: this.game
		}, this.focus.bind(this, !1))
	},
	focus: function (e) {
		this.allowEvents && (e ? this.game.input.keyboard.clearCaptures() : this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.BACKSPACE]))
	},
	setFocus: function (e) {
		e && $(this.ID).focus()
	},
	clearEvents: function (e) {
		this.allowEvents = e
	},
	setAttribute: function (e, t) {
		this.input.setAttribute(e, t)
	},
	getValue: function () {
		return $(this.ID).val()
	},
	setValue: function (e) {
		$(this.ID).val(e)
	},
	hide: function (e) {
		this.visible = !1, $(this.ID).fadeOut(e), Util.isDefined(this.label) && (this.label.alpha = 0), $(this.ID).focusout()
	},
	show: function (e, t) {
		this.visible = !0, Util.isDefined(t) ? setTimeout(this.fadeIn.bind(this, e), t) : this.fadeIn(e)
	},
	fadeIn: function (e) {
		$(this.ID).fadeIn(e), Util.isDefined(this.label) && (this.label.alpha = 1)
	},
	setEnabled: function (e) {
		$(this.ID).attr("disabled", !e)
	},
	destroy: function () {
		$(this.ID).focusout(), $(this.ID).remove(), Prodigy.Control.Element.prototype.destroy.call(this)
	},
	getWidth: function () {
		return $(this.ID).width()
	},
	getHeight: function () {
		return $(this.ID).height()
	},
	setLabel: function (e, t, i, a) {
		var a = a || this.x + 10;
		Util.isDefined(this.label) ? this.label.setText(t) : this.label = this.game.prodigy.create.font(e, a, this.y - 30, t, {
			size: 20
		})
	},
	update: function () {
		Prodigy.Control.Element.prototype.update.call(this);
		var e = this.canvas.height() / this.game.world.height;
		$(this.ID).height(e * this.theight);
		var t = this.canvas.width() / this.game.world.width;
		$(this.ID).width(t * this.twidth);
		var i = e * this.y,
			a = t * this.x + parseInt($("#game-container canvas").css("margin-left")),
			s = e * this.theight / 2;
		$(this.ID).css({
			top: i,
			left: a,
			"font-size": s + "px"
		})
	}
}), Prodigy.Control.InputField.createInputField = function (e, t, i, a, s, r, o, n, l) {
	$("#" + i) && $("#" + i).remove();
	var l = l || "text",
		h = new Prodigy.Control.InputField(e, t, i, a, s, r, o, n);
	return h.setAttribute("type", l), h
}, Prodigy.Control.TextButton = function (e, t, i, a, s, r) {
	Prodigy.Control.Element.call(this, e, t), this.x = i, this.y = a, this.callback = r, this.btnGroup = this.game.prodigy.create.element(this, 0, 0), s = s || {};
	var o = s.size || Prodigy.Control.TextButton.SMALL,
		n = o === Prodigy.Control.TextButton.MED ? "btn-med" : o === Prodigy.Control.TextButton.TINY ? "btn-tiny" : o === Prodigy.Control.TextButton.MINI ? "btn-mini" : o === Prodigy.Control.TextButton.LG ? "btn-lg" : o === Prodigy.Control.TextButton.TALL ? "btn-tall" : o === Prodigy.Control.TextButton.GRADE ? "btn-grade" : "btn-small",
		l = s.text || "",
		h = 0,
		d = o - 85,
		p = s.icon;
	this.iconSide = s.iconSide, this.bg = this.game.prodigy.create.sprite(0, 0, "core", n), this.btnGroup.add(this.bg), p ? (this.icon = this.btnGroup.add(this.game.prodigy.create.sprite(0, 0, "icons", p)), this.setIcon(p), h = "right" === s.iconSide ? 10 : this.icon.width + 15, d = this.bg.width - 25 - this.icon.width) : (d = o - 20, h = 15), this.text = this.game.prodigy.create.font(this.btnGroup, h, 0, "" + l, {
		size: 36,
		font: "button",
		width: d,
		align: "center"
	}), this.bg.inputEnabled = !0, this.bg.events.onInputDown.add(this.mouseDown, this), this.bg.events.onInputUp.add(this.mouseUp, this), this.bg.events.onInputOver.add(this.mouseOver, this), this.bg.events.onInputOut.add(this.mouseOut, this), this.isActive = !0
}, Prodigy.Control.TextButton.TINY = 50, Prodigy.Control.TextButton.MINI = 100, Prodigy.Control.TextButton.SMALL = 200, Prodigy.Control.TextButton.MED = 300, Prodigy.Control.TextButton.LG = 350, Prodigy.Control.TextButton.TALL = 101, Prodigy.Control.TextButton.GRADE = 80, Prodigy.extends(Prodigy.Control.TextButton, Prodigy.Control.Element, {
	constructor: Prodigy.Control.TextButton,
	setActive: function () {
		this.isActive = !0, this.bg.tint = 16777215
	},
	setInactive: function () {
		this.isActive = !1, this.bg.tint = 5789784
	},
	mouseDown: function () {
		this.game.prodigy.audio.playSFX("pop"), Util.isDefined(this.callback) && this.isActive && this.callback(), this.btnGroup.y = 0
	},
	mouseUp: function () {
		this.btnGroup.y = -3
	},
	mouseOver: function () {
		this.btnGroup.y = -3
	},
	mouseOut: function () {
		this.btnGroup.y = 0
	},
	select: function () {
		this.selected = !0, this.bg.tint = 7447253
	},
	deselect: function () {
		this.selected = !1, this.bg.tint = 16777215
	},
	tintSelected: function () {
		this.icon && (this.icon.tint = 7447253)
	},
	tintActive: function () {
		this.icon && (this.icon.tint = 16777215)
	},
	setIcon: function (e) {
		this.icon.frameName = e, this.icon.x = "right" === this.iconSide ? this.bg.width - this.icon.width - 10 : 10, this.icon.y = -Math.floor((this.icon.height - 50) / 2), "btn-tall" === this.bg.frameName && (this.icon.x = Math.floor((100 - this.icon.width) / 2), this.icon.y = Math.floor((200 - this.icon.height) / 2))
	},
	setText: function (e) {
		this.text.setText(e)
	}
}), Prodigy.Control.TextButton.createNextButton = function (e, t, i, a, s) {
	return e.prodigy.create.textButton(t, i, a, {
		icon: "next",
		iconSide: "right",
		text: "next"
	}, s)
}, Prodigy.Control.TextButton.createBackButton = function (e, t, i, a, s) {
	return e.prodigy.create.textButton(t, i, a, {
		icon: "back",
		text: "back"
	}, s)
}, Prodigy.Control.TextButton.createCloseButton = function (e, t, i, a, s) {
	return e.prodigy.create.textButton(t, i, a, {
		icon: "close",
		text: "close"
	}, s)
}, Prodigy.Control.TextButton.createYesButton = function (e, t, i, a, s) {
	return e.prodigy.create.textButton(t, i, a, {
		icon: "yes",
		text: "yes"
	}, s)
}, Prodigy.Control.TextButton.createNoButton = function (e, t, i, a, s) {
	return e.prodigy.create.textButton(t, i, a, {
		icon: "close",
		text: "no"
	}, s)
}, Prodigy.Control.Panel = function (e, t, i, a, s, r, o, n) {
	Prodigy.Control.Element.call(this, e, t, i, a);
	var l = 0,
		h = 0,
		d = null;
	this._imgs = [], Util.isDefined(n) || (n = {});
	for (var p = 0; s > p; p++) {
		h = 0;
		for (var c = 0; r > c; c++) {
			var u = (o || "panel") + "-";
			u += n.hideLeft || 0 !== p || 0 !== c ? n.hideRight || p !== s - 1 || 0 !== c ? n.hideRight || p !== s - 1 || c !== r - 1 ? n.hideLeft || 0 !== p || c !== r - 1 ? n.hideLeft || 0 !== p ? n.hideRight || p !== s - 1 ? 0 === c ? "top" : c === r - 1 ? "top2" : "mid" : "side2" : "side" : "corner4" : "corner3" : "corner2" : "corner", d = this.add(new Phaser.Image(this.game, l, h, "core", u)), h += d.height, d.inputEnabled = !0, this._imgs.push(d)
		}
		l += d.width
	}
}, Prodigy.extends(Prodigy.Control.Panel, Prodigy.Control.Element, {
	constructor: Prodigy.Control.Panel,
	setClickable: function (e, t, i, a) {
		if (Util.isDefined(e))
			for (var s = 0; s < this._imgs.length; s++) e && this._imgs[s].events.onInputDown.add(e), t && this._imgs[s].events.onInputUp.add(t), i && this._imgs[s].events.onInputOver.add(i), a && this._imgs[s].events.onInputOut.add(a)
	}
}), Prodigy.Control.AutoComplete = function (e, t, i, a, s, r, o) {
	Prodigy.Control.Element.call(this, e, t), this.x = i, this.y = a, this.callback = o, this.current = "", this.suggestions = [];
	for (var n = 1; 10 >= n; n++) {
		var l = this.game.prodigy.create.element(this, 0, 30 * -n);
		l.bg = l.add(this.game.prodigy.create.sprite(0, 0, "core", "overlay")), l.bg.inputEnabled = !0, l.bg.events.onInputDown.add(this.selectItem.bind(this, l)), l.bg.width = s, l.bg.height = 30, l.bg.alpha = .75, l.text = this.game.prodigy.create.font(l, 10, 0, ""), this.suggestions.push(l), l.visible = !1
	}
	this.data = this.game.prodigy.chat.getPhrases(), this.input = new Prodigy.Control.InputField(e, this, "AC", null, 0, 0, s, r), this.input.input.onkeyup = this.search.bind(this)
}, Prodigy.extends(Prodigy.Control.AutoComplete, Prodigy.Control.Element, {
	constructor: Prodigy.Control.AutoComplete,
	selectItem: function (e) {
		var t = Util.isDefined(e) ? e.textID : null;
		Util.isDefined(this.callback) && this.callback(t)
	},
	search: function () {
		var e = this.input.getValue();
		this.results = e.length <= 0 ? [] : e.length < this.current.length || this.current.length <= 0 ? AutoComplete.match(e, this.data) : AutoComplete.match(e, this.results), this.current = e;
		for (var t = 0; t < this.suggestions.length; t++) {
			var i = this.suggestions[t];
			t < this.results.length ? (i.visible = !0, i.text.setText(this.results[t]), i.textID = this.game.prodigy.chat.getPhraseID(this.results[t])) : i.visible = !1
		}
	}
}), Prodigy.Control.AutoComplete.match = function (e, t) {
	var i = new RegExp(e.split("").join("\\w*").replace(/\W/, ""), "i");
	return t.filter(function (e) {
		return e.match(i) ? e : void 0
	})
}, Prodigy.Control.FillBar = function (e, t, i, a, s, r, o, n, l, h, d, p, c) {
	Prodigy.Control.Element.call(this, e, t, i, a), this.fillFunction = n, this.dir = o, this.onFill = c, this.setup(s, r, l, h, d, p)
}, Prodigy.extends(Prodigy.Control.FillBar, Prodigy.Control.Element, {
	constructor: Prodigy.Control.FillBar,
	setup: function (e, t, i, a, s, r) {
		this.removeAll(!0), this.back = this.add(this.game.prodigy.create.sprite(0, 0, "core", "overlay-small")), this.bar = this.add(this.game.prodigy.create.sprite(1, t - 1, "core", "overlay-light")), this.bar.anchor.setTo(0, 1), this.back.width = e, this.back.height = t, this.bar.width = e - 2, this.bar.height = t - 2, this.bar.tint = i || 16777215, this.bar.alpha = s, this.icon = this.game.prodigy.create.element(this, -Math.floor((80 - e) / 2), -60), Util.isDefined(a) && this.icon.add(this.game.prodigy.create.sprite(0, 0, "icons", a)), this.label = this.game.prodigy.create.font(this.icon, 0, 20, "", {
			size: 30,
			width: 80,
			align: "center"
		}), this.current = 0, this.target = 0, this.delay = 0, this.currentLevel = 0, r && (this.back.visible = !1), this.setBar()
	},
	setBar: function () {
		for (var e = 0, t = {
				target: 0
			}, i = 1, a = 0;;) {
			if (e = this.fillFunction(i), -1 === e.target) {
				this.current = this.target, a = 1;
				break
			}
			if (this.current < e.target) {
				a = (this.current - t.target) / (e.target - t.target);
				break
			}
			t = e, i++
		}
		0 === this.dir ? this.bar.width = Math.floor((this.back.width - 2) * a) : this.bar.height = Math.floor((this.back.height - 2) * a), this.label.setText(e.text), Util.isDefined(e.color) && (this.bar.tint = e.color), i > this.currentLevel ? (Util.isDefined(this.onFill) && this.onFill(i), this.game.add.tween(this.icon).to({
			y: -70
		}, 250, Phaser.Easing.Quadratic.Out).to({
			y: -60
		}, 250, Phaser.Easing.Quadratic.In).start()) : i < this.currentLevel && (Util.isDefined(this.onFill) && this.onFill(i), this.game.add.tween(this.icon).to({
			x: this.icon.x - 5
		}, 100, Phaser.Easing.Linear.None).to({
			x: this.icon.x + 5
		}, 100, Phaser.Easing.Linear.None).to({
			x: this.icon.x - 5
		}, 100, Phaser.Easing.Linear.None).to({
			x: this.icon.x
		}, 100, Phaser.Easing.Linear.None).start()), this.currentLevel = i
	},
	setValue: function (e) {
		this.current = this.target = e, this.setBar()
	},
	addValue: function (e, t, i) {
		return this.target += e, this.target < 0 && (this.target = 0), this.speed = t || 1, this.callback = i, this.target
	},
	getValue: function () {
		return this.current
	},
	getLevel: function () {
		return this.currentLevel
	},
	update: function () {
		Prodigy.Control.Element.prototype.update.call(this), this.current !== this.target ? (this.delay--, this.delay <= 0 && (this.delay = this.speed || 1, this.current < this.target ? this.current++ : this.current > this.target && this.current--, this.setBar())) : Util.isDefined(this.callback) && (this.callback(), this.callback = null)
	}
});
var DebugOverlay = function () {
		function e(e, t) {
			Element.call(this, e, t), this.game.numBots = 0, this.game.numCreatureBots = 0, this.font = new BitmapFont(this.game, this, 15, 15), this.add(this.font), this.name = Math.random(), a = this, setInterval(function() {
				if (Util.isDefined(a.font) && Util.isDefined(a.game)) {
					var e = (1e3 / s).toFixed(1),
						t = "FPS: " + e;
					t += "\nMouse X=" + a.game.input.x + ", Y=" + a.game.input.y, a.font.setText(t)
				}
			}, 250), this.setContent()
		}
		e.prototype = Object.create(Element.prototype);
		var t, a, i = 20,
			s = 0,
			r = new Date;
		return e.prototype.setContent = function() {
			new TextButton(this.game, this, 0, 100, {
				text: "question",
				size: TextButton.MED
			}, this.game.prodigy.external.question.bind(this.game.prodigy.external))
		}, e.prototype.runTree = function(e, t) {
			var a = this.game.prodigy.education.skillTree;
			return this.processedTrees ? (0 >= t || (a.processIntoMap(this.trees[0], e, 100), this.showTree(), window.setTimeout(this.runTree.bind(this, e, t - 1), 1e3)), void 0) : (this.trees = a.processIntoTrees(), this.processedTrees = !0, console.log(this.trees.length), void 0)
		}, e.prototype.showTree = function() {
			Util.isDefined(this.e) && this.e.destroy(), this.e = new Panel(this.game, this, 0, 0, 25, 10);
			var e = new Element(this.game, this.e, -20, 0),
				t = (this.game.prodigy.education.skillTree, this.game.add.graphics(0, 0, e));
			t.lineStyle(1, 0);
			for (var a = 0; a < this.trees[0].length; a++)
				for (var i = this.trees[0][a], s = 0; s < i.prereqs.length; s++) {
					var r = i.prereqs[s];
					t.moveTo(r.x, r.y), t.lineTo(i.x, i.y)
				}
			for (var a = 0; a < this.trees[0].length; a++) {
				var i = this.trees[0][a],
					o = new Sprite(this.game, i.x, i.y, "icons", "empty");
				o.width = o.height = 10, e.add(o)
			}
			e.width = 1200, e.height = 450, new TextButton(this.game, this.e, 0, 500, {
				text: "bail",
				size: TextButton.MED
			}, this.e.destroy.bind(this.e))
		}, e.prototype.update = function() {
			var e = (t = new Date) - r;
			s += (e - s) / i, r = t
		}, e
	}(),
	CatchPet = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4500, "water", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-prison");
			this.overLayer.add(e), e.anchor.setTo(.5, .5), this.game.add.tween(e).to({
				x: this.target.x,
				alpha: .75
			}, 1, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				x: this.source.x + 20
			}, 3e3, Phaser.Easing.Linear.None).start(), this.game.add.tween(e).to({
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				y: this.source.y - 50 - 100
			}, 600, Phaser.Easing.Quadratic.Out).to({
				y: this.source.y
			}, 600, Phaser.Easing.Quadratic.In).to({
				y: this.source.y - 50 - 75
			}, 600, Phaser.Easing.Quadratic.Out).to({
				y: this.source.y
			}, 600, Phaser.Easing.Quadratic.In).to({
				y: this.source.y - 50
			}, 600, Phaser.Easing.Quadratic.Out).start(), this.game.add.tween(e.scale).to({
				x: 4,
				y: 4
			}, 1, Phaser.Easing.Quadratic.Out).to({
				x: .25,
				y: .25
			}, 1e3, Phaser.Easing.Quadratic.Out).to({}, 3e3, Phaser.Easing.Linear.None).to({
				x: 0,
				y: 0
			}, 500, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target.scale).to({
				x: 0,
				y: 0
			}, 1e3, Phaser.Easing.Quadratic.Out).start()
		}, e
	}(),
	Absorb = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4e3, "earth", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 900, 2600);
			for (var e = this.source.x < this.target.x ? -1 : 1, t = 0; 3 > t; t++) {
				var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				this.overLayer.add(i), i.anchor.setTo(.5, .5), i.alpha = .6, i.scale.x = i.scale.y = 5, this.game.add.tween(i).to({
					x: this.target.x,
					y: this.target.y
				}, 1, Phaser.Easing.Linear.None).to({}, 900, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 400, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
					x: 0,
					y: 0
				}, 500, Phaser.Easing.Linear.None).delay(200 * t).to({}, 400 - 200 * t, Phaser.Easing.Linear.None).to({
					x: 5 + .5 * t,
					y: 5 + .5 * t
				}, 400, Phaser.Easing.Linear.None).start()
			}
			for (var a = 900, t = 0; 10 > t; t++)
				for (var s = Math.PI * Math.random(), r = .75 + .25 * Math.random(), o = Math.floor(200 * Math.cos(s) * r), n = Math.floor(200 * Math.sin(s) * r) * (Math.random() < .5 ? -1 : 1), l = 200 - o * e, h = 1500 - o * e, d = 800 - o * e, p = l + h - d, c = 0; 5 > c; c++) {
					var u = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", 0 === c ? "earth-leaf" : "core-circle-small");
					this.overLayer.add(u), u.anchor.setTo(.5, .5), u.scale.x = u.scale.y = Math.pow(.6, c), u.alpha = 0 === c ? 1 : .7;
					var g = Math.max(0, 100 * c);
					o * e >= 0 ? this.game.add.tween(u).to({
						x: this.target.x
					}, 1, Phaser.Easing.Linear.None).delay(g + a).to({
						x: this.source.x
					}, h, Phaser.Easing.Linear.None).start() : this.game.add.tween(u).to({
						x: this.target.x
					}, 1, Phaser.Easing.Linear.None).delay(g + a).to({
						x: this.target.x + o
					}, l, Phaser.Easing.Quadratic.Out).to({
						x: this.source.x
					}, h, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(u).to({
						y: this.target.y
					}, 1, Phaser.Easing.Linear.None).delay(g + a).to({
						y: this.target.y + n
					}, d, Phaser.Easing.Quadratic.Out).to({
						y: this.source.y
					}, p, Phaser.Easing.Quadratic.In).to({
						alpha: 0
					}, 50, Phaser.Easing.Linear.None).start()
				}
		}, e
	}(),
	BatterUp = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2300, "wizard", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1e3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
			this.underLayer.add(e), e.anchor.setTo(.5, .5), e.alpha = .6, e.scale.x = e.scale.y = 0, this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(e.scale).to({
				x: 0,
				y: 0
			}, 1, Phaser.Easing.Linear.None).to({
				x: 10,
				y: 5
			}, 500, Phaser.Easing.Linear.None).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(t), t.scale.x = t.scale.y = 0, t.alpha = .8, t.anchor.setTo(.5, .8), this.game.add.tween(t).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(t.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({
				y: "-300"
			}, 1e3, Phaser.Easing.Quadratic.Out).to({
				y: "+300"
			}, 800, Phaser.Easing.Quadratic.In).to({
				y: "-50"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+50"
			}, 250, Phaser.Easing.Quadratic.In).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-steam");
			this.underLayer.add(i), i.anchor.setTo(.5, .5), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1800).to({
				y: "-100",
				alpha: 0
			}, 250, Phaser.Easing.Quadratic.Out).start();
			for (var a = 100, s = (this.target.x - this.source.x) / a, r = (this.target.y - 300 - this.source.y) / a, o = 0; a > o; o++) {
				var n = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					l = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", n);
				l.anchor.setTo(.5, .5), l.scale.x = l.scale.y = 0, l.alpha = .8, this.overLayer.add(l);
				var h = Math.floor(1e3 * o / a),
					d = Math.floor(-20 + 40 * Math.random());
				this.game.add.tween(l).to({
					x: Math.floor(this.source.x + o * s),
					y: Math.floor(this.source.y - 50 + o * r + d)
				}, 1, Phaser.Easing.Linear.None).delay(h).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(l.scale).to({
					x: 1,
					y: 1
				}, 500, Phaser.Easing.Linear.None).delay(h).start()
			}
			for (var o = 0; 3 > o; o++) {
				var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				this.underLayer.add(e), e.anchor.setTo(.5, .5), e.alpha = .25, e.scale.x = e.scale.y = 0, this.game.add.tween(e).to({
					x: this.target.x,
					y: this.target.y - 300 - 50
				}, 1, Phaser.Easing.Linear.None).delay(1e3 + 100 * o).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(e.scale).to({
					x: 0,
					y: 0
				}, 1, Phaser.Easing.Linear.None).delay(1e3 + 100 * o).to({
					x: 10,
					y: 10
				}, 500, Phaser.Easing.Linear.None).start()
			}
			for (var a = 50, o = 0; a > o; o++) {
				var n = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					l = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", n);
				l.anchor.setTo(.5, .5), l.scale.x = l.scale.y = 0, l.alpha = .8, this.overLayer.add(l);
				var p = 200 + Math.floor(200 * Math.random()),
					c = Math.random() * Math.PI * 2,
					s = Math.floor(this.target.x + p * Math.cos(c)),
					r = Math.floor(this.target.y + p * Math.sin(c)),
					u = 300 + Math.floor(300 * Math.random());
				this.game.add.tween(l).to({
					x: Math.floor(this.target.x),
					y: this.target.y - 350
				}, 1, Phaser.Easing.Linear.None).delay(1e3).to({
					x: s,
					y: -350 + r,
					alpha: 0
				}, u, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(l.scale).to({
					x: 1,
					y: 1
				}, u, Phaser.Easing.Linear.None).delay(1e3).start()
			}
		}, e
	}(),
	Blitz = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5e3, "earth", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4300);
			for (var e = this.source.x + (this.target.x - this.source.x) / 2, t = this.source.y - 300, i = 0; 50 > i; i++) {
				var a = Math.floor(3 * Math.random()),
					s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", 0 === a ? "earth-leaf" : 1 === a ? "earth-mushroom" : "earth-mudball");
				this.overLayer.add(s), s.anchor.setTo(6, 6), s.scale.x = s.scale.y = 0 === a ? 1 : 1 === a ? .75 : .5, s.angle = Math.floor(360 * Math.random());
				var r = 200 + Math.floor(500 * Math.random()),
					o = Math.random() < .5 ? "+" : "-",
					n = 2e3 - Math.floor(2e3 * Math.random()),
					l = this.target.x - 100 + Math.floor(200 * Math.random()),
					h = this.target.y - (25 + Math.floor(25 * Math.random())),
					d = this.target.y + (25 + Math.floor(25 * Math.random()));
				this.game.add.tween(s).to({
					x: e,
					y: t
				}, 1, Phaser.Easing.Linear.None).to({
					angle: o + r
				}, 2e3, Phaser.Easing.Linear.None).to({
					angle: o + r / 2e3 * n
				}, n, Phaser.Easing.Linear.None).to({
					x: this.target.x
				}, 300, Phaser.Easing.Linear.None).to({
					x: l
				}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(s).to({
					y: t
				}, 1, Phaser.Easing.Linear.None).to({}, 2e3 + n, Phaser.Easing.Linear.None).to({
					y: this.target.y
				}, 300, Phaser.Easing.Linear.None).to({
					y: h
				}, 150, Phaser.Easing.Quadratic.Out).to({
					y: d
				}, 150, Phaser.Easing.Quadratic.In).start(), o = 1 + 3 * Math.random(), this.game.add.tween(s.anchor).to({
					x: o,
					y: o
				}, 2e3, Phaser.Easing.Linear.None).to({}, n, Phaser.Easing.Linear.None).to({
					x: .5,
					y: .5
				}, 300, Phaser.Easing.Linear.None).start()
			}
		}, e
	}(),
	Blizzard = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 7e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 6500);
			for (var e = this.source.x < this.target.x ? -50 : 1330, t = this.source.x < this.target.x ? 1330 : -50, i = 0; 200 > i; i++) {
				var a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", i % 10 === 0 ? "ice-star" : "ice-snow");
				Math.random() < .5 ? this.overLayer.add(a) : this.underLayer.add(a), a.anchor.setTo(.5, .5), a.scale.x = a.scale.y = i % 10 === 0 ? .2 + .8 * Math.random() : 1, this.game.add.tween(a).to({
					x: e,
					y: Math.floor(720 * Math.random())
				}, 1, Phaser.Easing.Linear.None).delay(25 * i).to({
					x: t,
					angle: i % 10 === 0 ? 500 : 0
				}, 1500, Phaser.Easing.Linear.None).start()
			}
		}, e
	}(),
	Bolt = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2500, "storm", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 2100);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-lightning-0");
			e.animations.add("a", ["storm-lightning-0", "storm-lightning-1", "storm-lightning-2"], 30 + Math.floor(5 * Math.random()), !0, !1), e.animations.play("a"), e.anchor.setTo(.5, 1), this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.target.x,
				y: 0
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x,
				y: this.target.y
			}, 100, Phaser.Easing.Linear.None).to({}, 2e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 100, Phaser.Easing.Linear.None).start();
			for (var t = 0; 30 > t; t++) {
				var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-snow");
				i.anchor.setTo(.5, .5), this.overLayer.add(i);
				var a = Math.floor(100 * Math.random()),
					s = Math.random() < .5 ? -1 : 1;
				this.game.add.tween(i).to({
					x: this.target.x
				}, 1, Phaser.Easing.Linear.None).delay(100 + 60 * t).to({
					x: this.target.x + s * a,
					alpha: 0
				}, 500, Phaser.Easing.Linear.None).start(), this.game.add.tween(i).to({
					y: this.target.y
				}, 1, Phaser.Easing.Linear.None).delay(100 + 60 * t).to({
					y: this.target.y - a / 2
				}, 250, Phaser.Easing.Quadratic.Out).to({
					y: this.target.y
				}, 250, Phaser.Easing.Quadratic.In).start()
			}
		}, e
	}(),
	Charclone = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3e3, "fire", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1700);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam1");
			this.overLayer.add(e), e.alpha = .5, e.anchor.setTo(.5, 0), this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).to({}, 500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start(), e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam2"), this.overLayer.add(e), e.alpha = .5, e.anchor.setTo(.5, 1), this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).start(), this.game.add.tween(e).to({
				height: 600
			}, 500, Phaser.Easing.Linear.None).delay(1500).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start();
			var t = new Array;
			t.push(this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-ball")), t.push(this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-ball")), this.underLayer.add(t[0]), this.overLayer.add(t[1]), t[0].anchor.setTo(2.5, 2.5), t[0].angle = -45, t[1].anchor.setTo(2.5, 2.5), t[1].angle = 135;
			var i = new Array;
			i.push(this.game.add.tween(t[0])), i.push(this.game.add.tween(t[1])), i.push(this.game.add.tween(t[0]).to({
				y: this.target.y,
				x: this.target.x
			}, 1, Phaser.Easing.Linear.None).to({}, 1500, Phaser.Easing.Linear.None).to({
				y: -200
			}, 1e3, Phaser.Easing.Linear.None)), i.push(this.game.add.tween(t[1]).to({
				y: this.target.y,
				x: this.target.x
			}, 1, Phaser.Easing.Linear.None).to({}, 1500, Phaser.Easing.Linear.None).to({
				y: -200
			}, 1e3, Phaser.Easing.Linear.None));
			for (var a = 400, s = 0; 20 > s; s++) i[0].to({
				angle: -45
			}, 1, Phaser.Easing.Linear.None), i[0].to({
				angle: "+180"
			}, a, Phaser.Easing.Linear.None), i[1].to({
				angle: 135
			}, 1, Phaser.Easing.Linear.None), i[1].to({
				angle: "+180"
			}, a, Phaser.Easing.Linear.None), a > 200 && (a -= 100);
			for (var s = 0; s < i.length; s++) i[s].start()
		}, e
	}(),
	Cloudshot = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2e3, "storm", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1e3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-shot");
			e.anchor.setTo(.5, .5), e.scale.x = e.scale.y = this.source.x < this.target.x ? .5 : -.5, this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-head");
			t.alpha = .5, t.scale.x = this.source.x < this.target.x ? 1 : -1, t.anchor.setTo(.5, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-tail"), t.scale.x = 0, t.alpha = .5, t.anchor.setTo(1, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x + (this.source.x < this.target.x ? -42 : 42),
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + (this.source.x < this.target.x ? -42 : 42)
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(t.scale).to({
				x: this.source.x < this.target.x ? 1 : -1
			}, 500, Phaser.Easing.Linear.None).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(i), i.scale.x = i.scale.y = 0, i.alpha = .8, i.anchor.setTo(.5, .8), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1e3).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(1e3).start()
		}, e
	}(),
	Conjure = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4e3, "wizard", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 2500);
			var e = ["earth-leaf", "water-bubble", "earth-mushroom", "earth-mudball", "fire-bomb", "ice-snowman-body", "ice-prison"],
				t = Math.floor(Math.random() * e.length);
			Util.isDefined(this.mods) && Util.isDefined(this.mods.seed) && this.mods.seed >= 0 && (t = Math.floor(Util.pseudoRandomNumber(this.mods.seed) * e.length)), this.mod = -3 + t;
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", e[t]);
			i.anchor.setTo(.5, .5), i.scale.x = i.scale.y = 0, this.overLayer.add(i), this.game.add.tween(i).to({
				x: this.target.x
			}, 1, Phaser.Easing.Linear.None).delay(1e3).to({}, 1500, Phaser.Easing.Linear.None).to({
				x: this.target.x + 200,
				alpha: 0
			}, 1e3, Phaser.Easing.Linear.None).start(), this.game.add.tween(i).to({
				y: this.target.y - 350
			}, 1, Phaser.Easing.Linear.None).delay(1e3).to({}, 1e3, Phaser.Easing.Linear.None).to({
				y: this.target.y - 50
			}, 500, Phaser.Easing.Quadratic.In).to({
				y: this.target.y - 150
			}, 500, Phaser.Easing.Quadratic.Out).to({
				y: this.target.y
			}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(i.scale).to({
				x: 1,
				y: 1
			}, 1e3, Phaser.Easing.Quadratic.Out).delay(1e3).start();
			for (var a = 100, s = 0; a > s; s++) {
				var r = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					o = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", r);
				o.anchor.setTo(.5, .5), o.scale.x = o.scale.y = 0, o.alpha = .8, this.overLayer.add(o);
				var n = Math.floor(1500 * s / a),
					l = Math.floor(100 * Math.random()),
					h = Math.random() * Math.PI * 2,
					d = Math.floor(this.target.x + l * Math.cos(h)),
					p = Math.floor(this.target.y + l * Math.sin(h));
				this.game.add.tween(o).to({
					x: d,
					y: p - 350
				}, 1, Phaser.Easing.Linear.None).delay(n).to({
					alpha: 0
				}, 1500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(o.scale).to({
					x: 1.5,
					y: 1.5
				}, 500, Phaser.Easing.Quadratic.Out).delay(n).to({
					x: 0,
					y: 0
				}, 1e3, Phaser.Easing.Quadratic.In).start()
			}
			var c = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
			this.underLayer.add(c), c.anchor.setTo(.5, .5), c.alpha = .25, c.scale.x = c.scale.y = 0, this.game.add.tween(c).to({
				x: this.target.x,
				y: this.target.y - 50
			}, 1, Phaser.Easing.Linear.None).delay(2500).to({
				alpha: 0
			}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(c.scale).to({
				x: 0,
				y: 0
			}, 1, Phaser.Easing.Linear.None).delay(2500).to({
				x: 10,
				y: 10
			}, 500, Phaser.Easing.Linear.None).start()
		}, e
	}(),
	Dragos = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 6e3, "fire", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 5e3), this.game.prodigy.effects.shake(0, 5e3, 3, "v"), this.game.prodigy.effects.shake(5e3, 500, 5);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-bomb");
			e.anchor.setTo(.5, 1), e.scale.x = e.scale.y = 5, this.overLayer.add(e), this.game.add.tween(e).to({
				y: 0,
				x: this.target.x
			}, 1, Phaser.Easing.Linear.None).delay(2e3).to({
				y: this.target.y
			}, 3e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 100, Phaser.Easing.Linear.None).start();
			for (var t = 0; 10 > t; t++) {
				var i = this.target.x + 200 - 400 * Math.random(),
					a = this.target.y + 200 - 400 * Math.random(),
					s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				s.anchor.setTo(.5, .5), s.scale.x = s.scale.y = 0, s.alpha = .75, this.underLayer.add(s), this.game.add.tween(s).to({
					y: a,
					x: i
				}, 1, Phaser.Easing.Linear.None).delay(500 * t).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(s.scale).to({
					x: 1.4,
					y: .8
				}, 500, Phaser.Easing.Linear.None).delay(500 * t).start();
				var r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-ball");
				r.anchor.setTo(.5, .5), r.angle = -90, this.game.add.tween(r).to({
					y: a,
					x: i
				}, 1, Phaser.Easing.Linear.None).delay(500 * t).to({
					y: -50
				}, 1500, Phaser.Easing.Quadratic.In).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).start(), a < this.target.y ? this.underLayer.add(r) : this.overLayer.add(r)
			}
			var o = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam2");
			this.overLayer.add(o), o.alpha = 0, o.height = 720, o.width = 300, o.anchor.setTo(.5, 1), this.game.add.tween(o).to({
				x: this.target.x,
				y: 720
			}, 1, Phaser.Easing.Linear.None).to({
				alpha: 1,
				width: 500
			}, 5e3, Phaser.Easing.Linear.None).to({
				alpha: 0,
				width: 2e3
			}, 300, Phaser.Easing.Linear.None).start()
		}, e
	}(),
	EarthSprite = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4e3, "earth", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 3500);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "earth-spirit-2");
			this.overLayer.add(e), e.anchor.setTo(.5, .5), e.scale.x = this.target.x > this.source.x ? 1 : -1;
			var t = this.target.x > this.source.x ? 1 : -1;
			this.game.add.tween(e).to({
				x: this.target.x - 300 * t
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + 300 * t
			}, 2e3, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + 400 * t
			}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(e).to({
				y: -100
			}, 1, Phaser.Easing.Linear.None).to({
				y: this.target.y
			}, 1e3, Phaser.Easing.Quadratic.Out).to({
				y: this.target.y - 200
			}, 1e3, Phaser.Easing.Quadratic.In).to({
				y: -200
			}, 1, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				y: this.target.y
			}, 500, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({}, 1001, Phaser.Easing.Linear.None).to({
				x: this.target.x + 300 * t
			}, 1e3, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({}, 1, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Quadratic.Out).to({
				y: this.target.y - 200
			}, 1e3, Phaser.Easing.Quadratic.In).to({
				y: -200
			}, 1, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				y: this.target.y
			}, 500, Phaser.Easing.Linear.None).to({
				y: this.target.y - 50
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: this.target.y
			}, 250, Phaser.Easing.Quadratic.In).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-steam");
			this.underLayer.add(i), i.anchor.setTo(.5, .5), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(3500).to({
				y: "-100",
				alpha: 0
			}, 250, Phaser.Easing.Quadratic.Out).start()
		}, e
	}(),
	Embers = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4500, "fire", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 3100);
			for (var e = 0; 5 > e; e++) {
				var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", e > 0 ? "fire-ball" : "fire-elemental");
				this.overLayer.add(t), t.anchor.setTo(.5, e > 0 ? .5 : 1), this.game.add.tween(t).to({
					y: this.source.y
				}, 1, Phaser.Easing.Quadratic.Out).delay(300 * e).to({
					y: this.source.y - 200
				}, 500, Phaser.Easing.Quadratic.Out).to({
					y: this.source.y
				}, 500, Phaser.Easing.Quadratic.In).to({
					y: this.source.y - 200
				}, 500, Phaser.Easing.Quadratic.Out).to({
					y: this.source.y
				}, 500, Phaser.Easing.Quadratic.In).start();
				var i = this.game.add.tween(t).to({
					x: this.source.x
				}, 1, Phaser.Easing.Quadratic.Out).delay(300 * e).to({
					x: this.target.x,
					angle: e > 0 ? 2e3 : 0
				}, 2e3, Phaser.Easing.Linear.None);
				e > 0 && i.to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None), 0 === e && (i.to({}, 1100, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 300, Phaser.Easing.Linear.None), this.game.add.tween(t.scale).to({
					x: 1.3,
					y: 1.3
				}, 100, Phaser.Easing.Linear.None).delay(2300).to({}, 200, Phaser.Easing.Linear.None).to({
					x: 1.6,
					y: 1.6
				}, 100, Phaser.Easing.Linear.None).to({}, 200, Phaser.Easing.Linear.None).to({
					x: 1.9,
					y: 1.9
				}, 100, Phaser.Easing.Linear.None).to({}, 200, Phaser.Easing.Linear.None).to({
					x: 4,
					y: 4
				}, 300, Phaser.Easing.Linear.None).start()), i.start()
			}
		}, e
	}(),
	Fireball = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2e3, "fire", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1e3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-ball");
			e.anchor.setTo(.5, .5), e.scale.x = e.scale.y = this.source.x < this.target.x ? 1 : -1, this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-head");
			t.alpha = .5, t.scale.x = this.source.x < this.target.x ? 1 : -1, t.anchor.setTo(.5, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-tail"), t.scale.x = 0, t.alpha = .5, t.anchor.setTo(1, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x + (this.source.x < this.target.x ? -42 : 42),
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + (this.source.x < this.target.x ? -42 : 42)
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(t.scale).to({
				x: this.source.x < this.target.x ? 1 : -1
			}, 500, Phaser.Easing.Linear.None).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(i), i.scale.x = i.scale.y = 0, i.alpha = .8, i.anchor.setTo(.5, .8), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1e3).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(1e3).start()
		}, e
	}(),
	FireRain = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4e3, "fire", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 3500);
			for (var e = 0; 15 > e; e++) {
				var t = this.target.x + 100 - 200 * Math.random(),
					i = this.target.y + 100 - 200 * Math.random(),
					a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-ball");
				a.anchor.setTo(.5, .5), a.angle = 90, this.game.add.tween(a).to({
					y: -50,
					x: t
				}, 1, Phaser.Easing.Linear.None).delay(200 * e).to({
					y: i
				}, 600, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).delay(200 * e).start(), this.game.prodigy.effects.shake(200 * e + 600, 100, 3, "v");
				var s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-cloud");
				this.overLayer.add(s), s.anchor.setTo(.5, .5), this.game.add.tween(s).to({
					y: i,
					x: t
				}, 1, Phaser.Easing.Linear.None).delay(200 * e + 600).to({
					y: "-200",
					alpha: 0
				}, 300, Phaser.Easing.Quadratic.Out).start(), i < this.target.y ? (this.underLayer.add(a), this.underLayer.add(s)) : (this.overLayer.add(a), this.overLayer.add(s))
			}
		}, e
	}(),
	Fountain = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 6500, "water", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 6e3), this.game.prodigy.effects.shake(0, 1500, 3, "v");
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-whirl");
			this.underLayer.add(e), e.scale.x = e.scale.y = 0, e.anchor.setTo(.5, .5), this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).to({
				angle: -1e3
			}, 6e3, Phaser.Easing.Linear.None).start(), this.game.add.tween(e.scale).to({
				x: 1.5,
				y: 1.5
			}, 2e3, Phaser.Easing.Linear.None).to({}, 3e3, Phaser.Easing.Linear.None).to({
				x: 0,
				y: 0
			}, 1e3, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target.scale).to({
				x: -1
			}, 500, Phaser.Easing.Linear.None).delay(1e3).to({
				x: 1
			}, 500, Phaser.Easing.Linear.None).to({
				x: -.8
			}, 400, Phaser.Easing.Linear.None).to({
				x: .8
			}, 400, Phaser.Easing.Linear.None).to({
				x: -.6
			}, 300, Phaser.Easing.Linear.None).to({
				x: .6
			}, 300, Phaser.Easing.Linear.None).to({
				x: -.4
			}, 200, Phaser.Easing.Linear.None).to({
				x: .4
			}, 200, Phaser.Easing.Linear.None).to({
				x: -.2
			}, 100, Phaser.Easing.Linear.None).to({
				x: .2
			}, 100, Phaser.Easing.Linear.None).to({}, 1e3, Phaser.Easing.Linear.None).to({
				x: 1
			}, 500, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target.scale).to({
				y: 0
			}, 3e3, Phaser.Easing.Linear.None).delay(1e3).to({}, 1e3, Phaser.Easing.Linear.None).to({
				y: 1
			}, 200, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({
				y: 0
			}, 500, Phaser.Easing.Quadratic.Out).delay(5e3).to({
				y: this.target.y
			}, 500, Phaser.Easing.Quadratic.In).to({
				y: "-50"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+50"
			}, 250, Phaser.Easing.Quadratic.In).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-steam");
			this.underLayer.add(t), t.anchor.setTo(.5, .5), this.game.add.tween(t).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(6e3).to({
				y: "-100",
				alpha: 0
			}, 250, Phaser.Easing.Quadratic.Out).start()
		}, e
	}(),
	Geyser = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1500), this.game.prodigy.effects.shake(0, 1500, 3, "v");
			for (var e = Math.floor(Math.abs(this.target.x - this.source.x) / 80) + 1, t = 1; e > t; t++) {
				ice = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "earth-mud-splash"), ice.anchor.setTo(.5, 1), ice.scale.y = 0, this.overLayer.add(ice);
				var i = this.source.x < this.target.x ? 1 : -1;
				this.game.add.tween(ice).to({
					x: this.source.x + 80 * t * i,
					y: this.source.y
				}, 1, Phaser.Easing.Linear.None).delay(1500 * t / e).start(), this.game.add.tween(ice.scale).to({
					y: 1
				}, 100, Phaser.Easing.Linear.None).delay(1500 * t / e).to({
					y: 0
				}, 1500, Phaser.Easing.Linear.None).delay(1500 * t / e).start()
			}
			this.game.prodigy.effects.shake(1500, 400, 15);
			var a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam1");
			this.overLayer.add(a), a.alpha = .75, a.scale.x = a.scale.y = .5, a.anchor.setTo(.5, 0), this.game.add.tween(a).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).to({}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start(), a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam2"), this.overLayer.add(a), a.alpha = .75, a.scale.x = .5, a.anchor.setTo(.5, 1), this.game.add.tween(a).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).start(), this.game.add.tween(a).to({
				height: 600
			}, 251, Phaser.Easing.Linear.None).delay(1500).to({}, 750, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start()
		}, e
	}(),
	GlacialShield = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3500, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, null, 1500);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam1");
			this.overLayer.add(e), e.alpha = .5, e.anchor.setTo(.5, 0), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).to({}, 500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start(), e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam2"), this.overLayer.add(e), e.alpha = .5, e.anchor.setTo(.5, 1), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).start(), this.game.add.tween(e).to({
				height: 600
			}, 500, Phaser.Easing.Linear.None).delay(1500).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start();
			for (var t = Math.PI / 8, i = -Math.PI / 6, a = this.source.x < this.target.x ? 1 : -1, s = 0; 4 > s; s++) {
				var r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-prison");
				this.overLayer.add(r), r.angle = 15, r.anchor.setTo(.5, .5);
				var o = Math.floor(this.source.x + 250 * a * Math.cos(i + t * s)),
					n = Math.floor(this.source.y + 250 * Math.sin(i + t * s));
				this.game.add.tween(r).to({
					x: o,
					y: -50
				}, 1, Phaser.Easing.Linear.None).delay(300 * s).to({
					y: n
				}, 200, Phaser.Easing.Linear.None).to({}, 2e3 - 300 * s, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 400, Phaser.Easing.Linear.None).start(), this.game.prodigy.effects.shake(300 * s + 200, 100, 5, "v")
			}
		}, e
	}(),
	IceCannon = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1500);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-blast");
			e.anchor.setTo(.5, .5), e.scale.x = this.source.x < this.target.x ? 1 : -1, this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start();
			for (var t = Math.floor(Math.abs(this.target.x - this.source.x) / 50) + 1, i = 1; t > i; i++) {
				var a = t - 1 > i ? i % 2 + 1 : 3;
				e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-shard" + a), e.anchor.setTo(.5, 1), e.scale.y = 0, this.overLayer.add(e);
				var s = this.source.x < this.target.x ? 1 : -1;
				this.game.add.tween(e).to({
					x: this.source.x + 50 * i * s,
					y: this.source.y
				}, 1, Phaser.Easing.Linear.None).delay(1500 * i / t).start(), this.game.add.tween(e.scale).to({
					y: 1
				}, 100, Phaser.Easing.Linear.None).delay(1500 * i / t).to({
					y: 0
				}, 1500, Phaser.Easing.Linear.None).delay(1500 * i / t).start()
			}
			var r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-head");
			r.alpha = .5, r.scale.x = this.source.x < this.target.x ? 1 : -1, r.anchor.setTo(.5, .5), this.overLayer.add(r), this.game.add.tween(r).to({
				x: this.source.x + 5,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + 5
			}, 1500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-tail"), r.scale.x = 0, r.alpha = .5, r.anchor.setTo(1, .5), this.overLayer.add(r), this.game.add.tween(r).to({
				x: this.source.x + 5 + (this.source.x < this.target.x ? -42 : 42),
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + 5 + (this.source.x < this.target.x ? -42 : 42)
			}, 1500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(r.scale).to({
				x: this.source.x < this.target.x ? 1 : -1
			}, 800, Phaser.Easing.Linear.None).start();
			var o = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(o), o.scale.x = o.scale.y = 0, o.alpha = .8, o.anchor.setTo(.5, .8), this.game.add.tween(o).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1500).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(o.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(1500).start()
		}, e
	}(),
	IcePrison = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 6e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4100);
			for (var e = new Array, t = 0; 6 > t; t++) {
				var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-prison");
				this.overLayer.add(i), i.angle = 0, i.anchor.setTo(.5, .75), e.push(i)
			}
			for (var a = 1e3, t = 0; 6 > t; t++) this.game.prodigy.effects.shake(200 * t + a + 100, 100, 5, "v");
			this.game.add.tween(e[5]).to({
				x: this.target.x,
				y: -200
			}, 1, Phaser.Easing.Linear.None).delay(a).to({
				y: this.target.y
			}, 100, Phaser.Easing.Linear.None).to({}, a + 2e3, Phaser.Easing.Linear.None).to({
				x: this.target.x,
				y: -200,
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), e[4].angle = -45, this.game.add.tween(e[4]).to({
				x: this.target.x - 200,
				y: -200
			}, 1, Phaser.Easing.Linear.None).delay(a + 200).to({
				x: this.target.x - 50,
				y: this.target.y - 40
			}, 100, Phaser.Easing.Linear.None).to({}, a + 2e3 - 200, Phaser.Easing.Linear.None).to({
				x: this.target.x - 200,
				y: -200,
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), e[3].angle = 45, this.game.add.tween(e[3]).to({
				x: this.target.x + 200,
				y: -200
			}, 1, Phaser.Easing.Linear.None).delay(a + 400).to({
				x: this.target.x + 50,
				y: this.target.y - 40
			}, 100, Phaser.Easing.Linear.None).to({}, a + 2e3 - 400, Phaser.Easing.Linear.None).to({
				x: this.target.x + 200,
				y: -200,
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), e[2].angle = -20, this.game.add.tween(e[2]).to({
				x: this.target.x - 100,
				y: -200
			}, 1, Phaser.Easing.Linear.None).delay(a + 600).to({
				x: this.target.x - 25,
				y: this.target.y - 100
			}, 100, Phaser.Easing.Linear.None).to({}, a + 2e3 - 600, Phaser.Easing.Linear.None).to({
				x: this.target.x - 100,
				y: -200,
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), e[1].angle = 20, this.game.add.tween(e[1]).to({
				x: this.target.x + 100,
				y: -200
			}, 1, Phaser.Easing.Linear.None).delay(a + 800).to({
				x: this.target.x + 25,
				y: this.target.y - 100
			}, 100, Phaser.Easing.Linear.None).to({}, a + 2e3 - 800, Phaser.Easing.Linear.None).to({
				x: this.target.x + 100,
				y: -200,
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(e[0]).to({
				x: this.target.x,
				y: -200
			}, 1, Phaser.Easing.Linear.None).delay(a + 1e3).to({
				y: this.target.y - 150
			}, 100, Phaser.Easing.Linear.None).to({}, a + 2e3 - 1e3, Phaser.Easing.Linear.None).to({
				x: this.target.x,
				y: -200,
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start();
			for (var t = 0; 50 > t; t++) {
				var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-blast");
				this.overLayer.add(i), i.anchor.setTo(.5, .5), i.angle = this.source.x < this.target.x ? 45 : 135;
				var s = this.source.x < this.target.x ? -500 + Math.floor(500 * Math.random()) : 500 - Math.floor(500 * Math.random()),
					r = s + (this.source.x < this.target.x ? 400 : -400);
				this.game.add.tween(i).to({
					x: this.target.x + s,
					y: -50
				}, 1, Phaser.Easing.Linear.None).delay(50 * t).to({
					x: this.target.x + r,
					y: 800
				}, 500, Phaser.Easing.Linear.None).start()
			}
		}, e
	}(),
	IceToMeetYou = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4100);
			for (var e = this.target.x < this.source.x ? -1 : 1, t = this.source.x + (this.target.x - this.source.x) / 2, i = this.source.y - 100, a = 0; 6 > a; a++) {
				var s = 100 + 65 * a,
					r = t + e * Math.floor(s * Math.cos(-Math.PI / 4)),
					o = i + Math.floor(s * Math.sin(-Math.PI / 4)),
					n = t + e * Math.floor(s * Math.cos(0)),
					l = i + Math.floor(s * Math.sin(0));
				h = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", 5 > a ? "ice-blast" : "ice-prison"), h.anchor.setTo(.5, .5), h.scale.x = h.scale.y = .5, h.alpha = 0, h.angle = 5 > a ? 90 : 0, this.overLayer.add(h), this.game.add.tween(h).to({
					x: t,
					y: i
				}, 1, Phaser.Easing.Linear.None).delay(500).to({
					x: r,
					y: o,
					alpha: 1
				}, 500, Phaser.Easing.Linear.None).to({}, 500 + 50 * a, Phaser.Easing.Linear.None).to({
					x: n,
					y: l
				}, 200, Phaser.Easing.Linear.None).to({}, 300, Phaser.Easing.Linear.None).to({
					x: r,
					y: o
				}, 300, Phaser.Easing.Linear.None).to({}, 300, Phaser.Easing.Linear.None).to({
					x: n,
					y: l
				}, 200, Phaser.Easing.Linear.None).to({}, 300, Phaser.Easing.Linear.None).to({
					x: r,
					y: o
				}, 300, Phaser.Easing.Linear.None).to({}, 300, Phaser.Easing.Linear.None).to({
					x: n,
					y: l
				}, 200, Phaser.Easing.Linear.None).to({}, 300, Phaser.Easing.Linear.None).start()
			}
			var h = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-prison");
			h.anchor.setTo(.5, .5), h.alpha = 0, this.overLayer.add(h);
			for (var d = this.game.add.tween(h).to({
					x: t,
					y: i
				}, 1, Phaser.Easing.Linear.None).to({
					alpha: 1
				}, 500, Phaser.Easing.Linear.None), a = 0; 6 > a; a++) d.to({
				y: "+25"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "-25"
			}, 250, Phaser.Easing.Quadratic.In).to({
				y: "-25"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+25"
			}, 250, Phaser.Easing.Quadratic.In);
			d.start(), h = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-elemental"), h.anchor.setTo(.5, .5), h.alpha = 0, h.scale.y = 1.5, h.scale.x = 1.5 * e, this.overLayer.add(h);
			for (var p = this.game.add.tween(h).to({
					x: t,
					y: i - 100
				}, 1, Phaser.Easing.Linear.None).delay(250).to({
					alpha: 1
				}, 500, Phaser.Easing.Linear.None), a = 0; 6 > a; a++) p.to({
				y: "+25"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "-25"
			}, 250, Phaser.Easing.Quadratic.In).to({
				y: "-25"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+25"
			}, 250, Phaser.Easing.Quadratic.In);
			p.start();
			var c = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(c), c.scale.x = c.scale.y = 0, c.alpha = .8, c.anchor.setTo(.5, .8), this.game.add.tween(c).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1900).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).to({
				alpha: .8
			}, 800, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).to({
				alpha: .8
			}, 800, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(c.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(1900).to({
				x: 0,
				y: 0
			}, 800, Phaser.Easing.Linear.None).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).to({
				x: 0,
				y: 0
			}, 800, Phaser.Easing.Linear.None).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).start(), this.game.prodigy.effects.shake(1900, 100, 5, "v"), this.game.prodigy.effects.shake(3e3, 100, 5, "v"), this.game.prodigy.effects.shake(4100, 100, 5, "v")
		}, e
	}(),
	LeafWind = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 7e3, "earth", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 6500);
			for (var e = this.source.x < this.target.x ? -50 : 1330, t = this.source.x < this.target.x ? 1330 : -50, i = 0; 100 > i; i++) {
				var a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "earth-leaf");
				Math.random() < .5 ? this.overLayer.add(a) : this.underLayer.add(a), a.anchor.setTo(Math.random(), Math.random()), this.game.add.tween(a).to({
					x: e,
					y: Math.floor(720 * Math.random())
				}, 1, Phaser.Easing.Linear.None).delay(50 * i).to({
					x: t,
					angle: 1e3
				}, 2e3, Phaser.Easing.Linear.None).start()
			}
		}, e
	}(),
	MagiShot = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2e3, "wizard", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1e3);
			for (var e = 100, t = (this.target.x - this.source.x) / e, i = 0; e > i; i++) {
				var a = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", a);
				s.anchor.setTo(.5, .5), s.scale.x = s.scale.y = 0, s.alpha = .8, this.overLayer.add(s);
				var r = Math.floor(1e3 * i / e),
					o = Math.floor(-20 + 40 * Math.random());
				this.game.add.tween(s).to({
					x: Math.floor(this.source.x + i * t),
					y: this.source.y - 50 + o
				}, 1, Phaser.Easing.Linear.None).delay(r).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(s.scale).to({
					x: 1,
					y: 1
				}, 500, Phaser.Easing.Linear.None).delay(r).start()
			}
			for (var i = 0; 3 > i; i++) {
				var n = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				this.underLayer.add(n), n.anchor.setTo(.5, .5), n.alpha = .25, n.scale.x = n.scale.y = 0, this.game.add.tween(n).to({
					x: this.target.x,
					y: this.target.y - 50
				}, 1, Phaser.Easing.Linear.None).delay(1e3 + 100 * i).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(n.scale).to({
					x: 0,
					y: 0
				}, 1, Phaser.Easing.Linear.None).delay(1e3 + 100 * i).to({
					x: 10,
					y: 10
				}, 500, Phaser.Easing.Linear.None).start()
			}
			for (var e = 50, i = 0; e > i; i++) {
				var a = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", a);
				s.anchor.setTo(.5, .5), s.alpha = .8, this.overLayer.add(s);
				var l = 200 + Math.floor(200 * Math.random()),
					h = Math.random() * Math.PI * 2,
					t = Math.floor(this.target.x + l * Math.cos(h)),
					o = Math.floor(this.target.y + l * Math.sin(h)),
					d = 300 + Math.floor(300 * Math.random());
				this.game.add.tween(s).to({
					x: Math.floor(this.target.x),
					y: this.target.y - 50
				}, 1, Phaser.Easing.Linear.None).delay(1e3).to({
					x: t,
					y: -50 + o,
					alpha: 0
				}, d, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(s.scale).to({
					x: 1,
					y: 1
				}, d, Phaser.Easing.Linear.None).delay(1e3).start()
			}
		}, e
	}(),
	Mudball = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2e3, "earth", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1e3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "earth-mudball");
			e.anchor.setTo(.5, .5), e.scale.x = e.scale.y = .5, this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-head");
			t.alpha = .5, t.scale.x = this.source.x < this.target.x ? 1 : -1, t.anchor.setTo(.5, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-tail"), t.scale.x = 0, t.alpha = .5, t.anchor.setTo(1, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x + (this.source.x < this.target.x ? -42 : 42),
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + (this.source.x < this.target.x ? -42 : 42)
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(t.scale).to({
				x: this.source.x < this.target.x ? 1 : -1
			}, 500, Phaser.Easing.Linear.None).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(i), i.scale.x = i.scale.y = 0, i.alpha = .8, i.anchor.setTo(.5, .8), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1e3).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(1e3).start()
		}, e
	}(),
	Powerbeam = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5e3, "wizard", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4100);
			for (var e = this.target.x < this.source.x, t = 100, i = 0; t > i; i++) {
				var a = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", a);
				s.anchor.setTo(.5, .5), s.scale.x = s.scale.y = 0, s.alpha = .8, this.overLayer.add(s);
				var r = 200 + Math.floor(200 * Math.random()),
					o = Math.random() * Math.PI * 2,
					n = Math.floor(this.source.x + r * Math.cos(o)),
					l = Math.floor(this.source.y + r * Math.sin(o)),
					h = Math.floor(1e3 * i / t);
				this.game.add.tween(s).to({
					x: n,
					y: l - 50
				}, 1, Phaser.Easing.Linear.None).delay(h).to({
					x: this.source.x,
					y: this.source.y - 50
				}, 1e3, Phaser.Easing.Cubic.In).start(), this.game.add.tween(s.scale).to({
					x: 1.5,
					y: 1.5
				}, 400, Phaser.Easing.Quadratic.Out).delay(h).to({
					x: 0,
					y: 0
				}, 600, Phaser.Easing.Quadratic.In).start()
			}
			for (var i = 0; 3 > i; i++) {
				var d = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				this.overLayer.add(d), d.anchor.setTo(.5, .5), d.alpha = .6, d.scale.x = d.scale.y = 0, this.game.add.tween(d).to({
					x: this.source.x,
					y: this.source.y - 50
				}, 1, Phaser.Easing.Linear.None).delay(2e3 + 200 * i).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(d.scale).to({
					x: 0,
					y: 0
				}, 1, Phaser.Easing.Linear.None).delay(2e3 + 200 * i).to({
					x: 10,
					y: 10
				}, 500, Phaser.Easing.Linear.None).start()
			}
			var p = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-beam2");
			this.overLayer.add(p), p.alpha = .5, p.anchor.setTo(.5, 1), p.angle = 90, p.height = p.width = 0, this.game.add.tween(p).to({
				x: 0,
				y: this.source.y - 50
			}, 1, Phaser.Easing.Linear.None).delay(2e3).start(), this.game.add.tween(p).to({
				height: 1280,
				width: 300
			}, 100, Phaser.Easing.Linear.None).delay(2e3).to({}, 2e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 500, Phaser.Easing.Linear.None).start(), this.game.prodigy.effects.shake(2e3, 2e3), t = 100;
			for (var i = 0; t > i; i++) {
				var a = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					s = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", a);
				s.anchor.setTo(.5, .5), s.alpha = .8, this.overLayer.add(s);
				var l = this.game.rnd.integerInRange(-150, 150),
					h = 2e3 + Math.floor(2e3 * i / t);
				this.game.add.tween(s).to({
					x: e ? 1400 : 0,
					y: this.source.y - 50 + l
				}, 1, Phaser.Easing.Linear.None).delay(h).to({
					x: e ? -100 : 1400
				}, 500, Phaser.Easing.Linear.None).start()
			}
		}, e
	}(),
	Pummel = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5500, "wizard", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 5e3);
			for (var e = 0; 9 > e; e++) {
				var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				this.underLayer.add(t), t.anchor.setTo(.5, .5), t.alpha = .6, t.scale.x = t.scale.y = 0, this.game.add.tween(t).to({
					x: this.target.x,
					y: this.target.y
				}, 1, Phaser.Easing.Linear.None).delay(500 * e).to({
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(t.scale).to({
					x: 0,
					y: 0
				}, 1, Phaser.Easing.Linear.None).delay(500 * e).to({
					x: 10,
					y: 5
				}, 500, Phaser.Easing.Linear.None).start()
			}
			for (var e = 0; 20 > e; e++) {
				var i = "core-box-" + Math.floor(6 * Math.random()),
					a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", i);
				a.alpha = .75, a.anchor.setTo(.5, 0), a.height = 0, a.width = 80;
				var s = this.target.x + Math.floor(-200 + 400 * Math.random()),
					r = this.target.y + Math.floor(-200 + 400 * Math.random()),
					o = 1e3 + 200 * e;
				this.game.add.tween(a).to({
					x: s,
					y: 0
				}, 1, Phaser.Easing.Linear.None).delay(o).to({
					height: r
				}, 100, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 100, Phaser.Easing.Linear.None).start(), this.game.prodigy.effects.shake(o + 100, 100);
				var n = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
				this.overLayer.add(n), n.scale.x = n.scale.y = 0, n.alpha = .8, n.anchor.setTo(.5, .8), this.game.add.tween(n).to({
					x: s,
					y: r
				}, 1, Phaser.Easing.Linear.None).delay(o + 100).to({
					alpha: 0
				}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(n.scale).to({
					x: 3,
					y: 3
				}, 300, Phaser.Easing.Linear.None).delay(o + 100).start(), r < this.target.y ? (this.underLayer.add(a), this.underLayer.add(n)) : (this.overLayer.add(a), this.overLayer.add(n))
			}
		}, e
	}(),
	RainyDay = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3500, "water", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 3e3);
			var e = new Phaser.TileSprite(this.game, 0, 0, 1280, 720, "attacks", "water-rain");
			this.showOverlay(e, 3e3, 5, 5, 0)
		}, e
	}(),
	Razorfire = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3e3, "fire", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 2250);
			var e = new Array;
			e.push(this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-bomb")), e.push(this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-ring"));
			for (var t = this.source.x < this.target.x ? 1 : -1, i = 0; i < e.length; i++) this.overLayer.add(e[i]), e[i].anchor.setTo(.5, .5), e[i].scale.x = e[i].scale.y = 0, this.game.add.tween(e[i]).to({
				x: this.source.x
			}, 1, Phaser.Easing.Quadratic.Out).to({
				x: this.source.x + (this.target.x - this.source.x) / 2,
				angle: 100 * t
			}, 1e3, Phaser.Easing.Linear.None).to({
				angle: 4e3 * t
			}, 1e3, Phaser.Easing.Quadratic.In).to({
				x: this.target.x,
				angle: 4500 * t
			}, 250, Phaser.Easing.Linear.None).to({
				x: this.target.x + (this.target.x - this.source.x) / 2,
				angle: 5e3 * t,
				alpha: 0
			}, 250, Phaser.Easing.Linear.None).start(), this.game.add.tween(e[i]).to({
				y: this.source.y
			}, 1, Phaser.Easing.Quadratic.Out).to({
				y: this.source.y - 200
			}, 500, Phaser.Easing.Quadratic.Out).to({
				y: this.source.y
			}, 500, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(e[i].scale).to({
				x: 1 * -t,
				y: 1
			}, 1e3, Phaser.Easing.Quadratic.Out).start();
			for (var i = 0; 3 > i; i++) {
				var a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "fire-cloud");
				this.overLayer.add(a), a.anchor.setTo(.5, .5), this.game.add.tween(a).to({
					x: this.target.x,
					y: this.target.y
				}, 1, Phaser.Easing.Quadratic.Out).delay(2250 + 80 * i).to({
					y: "-300",
					alpha: 0
				}, 500, Phaser.Easing.Quadratic.Out).start()
			}
			for (var i = 0; 10 > i; i++) {
				var a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-cloud");
				this.underLayer.add(a), a.anchor.setTo(1 === t ? .75 : .25, .5);
				var s = this.source.x + (this.target.x - this.source.x) / 2;
				this.game.add.tween(a).to({
					x: s,
					y: this.target.y
				}, 1, Phaser.Easing.Quadratic.Out).delay(1e3 + 100 * i).to({
					x: s - 100 * t,
					y: "-100",
					alpha: 0
				}, 250, Phaser.Easing.Quadratic.Out).start()
			}
			var r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(r), r.scale.x = r.scale.y = 0, r.alpha = .8, r.anchor.setTo(.5, .8), this.game.add.tween(r).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(2250).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(r.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(2250).start()
		}, e
	}(),
	Shocksphere = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3500, "storm", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 2900);
			for (var e = 0; 2 > e; e++) {
				var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-lightning-0");
				t.animations.add("a", ["storm-lightning-0", "storm-lightning-1", "storm-lightning-2"], 30 + Math.floor(5 * Math.random()), !0, !1), t.animations.play("a"), t.anchor.setTo(.5, 1), this.overLayer.add(t), t.scale.y = 0 === e ? 1 : -1, this.game.add.tween(t).to({
					x: this.target.x,
					y: 0 === e ? this.target.y - 50 - 82 : this.target.y - 50 + 82
				}, 1, Phaser.Easing.Linear.None).to({
					y: 0 === e ? "-82" : "+82"
				}, 400, Phaser.Easing.Quadratic.In).to({
					y: "-200"
				}, 2e3, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).start()
			}
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-prison");
			this.overLayer.add(i);
			var a = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-steam");
			this.underLayer.add(a), a.anchor.setTo(.5, .5), i.anchor.setTo(.5, .5), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y - 50,
				alpha: .75
			}, 1, Phaser.Easing.Linear.None).to({}, 400, Phaser.Easing.Linear.None).to({
				y: this.target.y - 250
			}, 2e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 100, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
				x: 2,
				y: 2
			}, 400, Phaser.Easing.Quadratic.In).to({}, 2e3, Phaser.Easing.Linear.None).to({
				x: 5,
				y: 5
			}, 100, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({
				y: "-200"
			}, 2e3, Phaser.Easing.Linear.None).delay(401).to({
				y: "+200"
			}, 500, Phaser.Easing.Quadratic.In).to({
				y: "-50"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+50"
			}, 250, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(a).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(2901).to({
				y: "-100",
				alpha: 0
			}, 250, Phaser.Easing.Quadratic.Out).start()
		}, e
	}(),
	Snowman = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4500);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-snowman-body");
			e.anchor.setTo(.5, 1), this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(3e3).to({}, 1500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 100, Phaser.Easing.Linear.None).start(), e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-snowman-head"), e.anchor.setTo(.5, 1), e.scale.x = this.source.x < this.target.x ? -1 : 1, this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y - 100
			}, 1, Phaser.Easing.Linear.None).delay(3e3).to({}, 1500, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 100, Phaser.Easing.Linear.None).start(), e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-snowman-body"), e.anchor.setTo(.5, .5), e.scale.x = e.scale.y = .25, this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x,
				y: this.target.y - 168,
				angle: this.source.x < this.target.x ? 720 : -720
			}, 3e3, Phaser.Easing.Quadratic.Out).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(e.scale).to({
				x: 2.5,
				y: 2.5
			}, 3e3, Phaser.Easing.Quadratic.Out).to({
				x: 5,
				y: 5
			}, 300, Phaser.Easing.Linear.None).start();
			var t = this.target.scale.x;
			this.game.add.tween(this.target.scale).to({
				x: 0,
				y: 0
			}, 1, Phaser.Easing.Linear.None).delay(3e3).to({}, 1500, Phaser.Easing.Linear.None).to({
				x: t,
				y: 1
			}, 200, Phaser.Easing.Linear.None).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(i), i.scale.x = i.scale.y = 0, i.alpha = .8, i.anchor.setTo(.5, .8), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(4500).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(4500).start()
		}, e
	}(),
	StormComing = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5e3, "storm", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4500), this.game.prodigy.effects.shake(1500, 3e3, 3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-lightning-0");
			e.animations.add("a", ["storm-lightning-0", "storm-lightning-1", "storm-lightning-2"], 30, !0, !1), e.animations.play("a"), this.overLayer.add(e), e.anchor.setTo(.5, 1);
			var t = this.game.add.tween(e).to({
					x: this.target.x,
					y: 0
				}, 1, Phaser.Easing.Linear.None).delay(1500),
				i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(i), i.scale.x = i.scale.y = 0, i.alpha = .8, i.anchor.setTo(.5, .8);
			for (var a = this.game.add.tween(i), s = this.game.add.tween(i.scale), r = 0; 25 > r; r++) {
				var o = Math.floor(50 + 1180 * Math.random()),
					n = this.target.y + Math.floor(-50 + 300 * Math.random());
				t.to({
					x: o,
					y: 0
				}, 1, Phaser.Easing.Linear.None), t.to({
					y: n
				}, 99, Phaser.Easing.Linear.None), a.to({
					x: o,
					y: n,
					alpha: 1
				}, 1, Phaser.Easing.Linear.None), a.to({
					alpha: 0
				}, 99, Phaser.Easing.Linear.None), s.to({
					x: 0,
					y: 0
				}, 1, Phaser.Easing.Linear.None), s.to({
					x: 2,
					y: 2
				}, 99, Phaser.Easing.Linear.None)
			}
			t.to({
				x: Attack.BX,
				y: Attack.BY
			}, 1, Phaser.Easing.Linear.None), a.delay(1600).start(), s.delay(1600).start(), t.start();
			for (var l = 320, r = 0; 4 > r; r++) {
				var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-cloud2");
				this.overLayer.add(i), i.scale.x = i.scale.y = 2.5, i.anchor.setTo(.5, 1), this.game.add.tween(i).to({
					x: 180 + r * l,
					y: 0
				}, 1, Phaser.Easing.Linear.None).to({
					y: 150
				}, 1500, Phaser.Easing.Quadratic.Out).to({}, 3e3, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 300, Phaser.Easing.Linear.None).start()
			}
			var h = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-titan");
			this.overLayer.add(h), h.anchor.setTo(.5, .5), h.alpha = .75, this.game.add.tween(h).to({
				x: 640,
				y: 360
			}, 1, Phaser.Easing.Linear.None).delay(1500).to({}, 3e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(h.scale).to({
				x: 2,
				y: 2
			}, 3e3, Phaser.Easing.Linear.None).delay(1500).to({
				x: 4,
				y: 4
			}, 300, Phaser.Easing.Linear.None).start()
		}, e
	}(),
	TempAttack = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 6e3, "ice", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 6e3), this.game.prodigy.effects.shake(4e3, 1500, 3, null), this.manager = this.game.plugins.add(Phaser.ParticleStorm);
			var e = {
				lifespan: 4e3,
				image: "attacks",
				frame: "ice-snow",
				ay: -.08,
				vx: {
					value: {
						min: -2,
						max: 2
					},
					control: [{
						x: 0,
						y: 1
						}, {
						x: 1,
						y: .1
						}]
				},
				vy: {
					value: 0,
					control: [{
						x: 0,
						y: 1
						}, {
						x: 1,
						y: .1
						}]
				}
			};
			this.manager.addData("snow", e), emitter = this.manager.createEmitter(), emitter.createGravityWell(this.target.x, this.target.y, 100), emitter.addToWorld(this.foreground), emitter.emit("snow", this.source.x + 40, this.source.y - 80, {
				repeat: 120,
				frequency: 10,
				total: 50
			})
		}, e
	}(),
	Thunderdome = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 5e3, "storm", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 4500);
			for (var e = 0; 2 > e; e++) {
				var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
				this.overLayer.add(t), t.scale.x = t.scale.y = 0, t.alpha = .5, t.anchor.setTo(.5, .8), this.game.add.tween(t).to({
					x: this.target.x,
					y: this.target.y
				}, 1, Phaser.Easing.Linear.None).delay(150 * e).to({}, 4300, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(t.scale).to({
					x: 3,
					y: 3
				}, 4e3, Phaser.Easing.Linear.None).delay(150 * e).to({
					x: 1.5,
					y: 1.5
				}, 300, Phaser.Easing.Quadratic.Out).to({
					x: 4,
					y: 4
				}, 300, Phaser.Easing.Quadratic.In).start()
			}
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-lightning-0");
			i.animations.add("a", ["storm-lightning-0", "storm-lightning-1", "storm-lightning-2"], 30, !0, !1), i.animations.play("a"), this.overLayer.add(i), i.anchor.setTo(.5, 1);
			for (var a = this.game.add.tween(i).to({
					x: this.target.x,
					y: 0
				}, 1, Phaser.Easing.Linear.None), e = 0; 30 > e; e++) {
				var s = 100 * e,
					r = 25e-5 * s * 300,
					o = Math.PI * Math.random(),
					n = this.target.x + r * Math.cos(o),
					l = this.target.y + r * Math.sin(o);
				l > this.target.y && (l = this.target.y - (l - this.target.y)), a.to({
					x: n,
					y: 0
				}, 1, Phaser.Easing.Linear.None), a.to({
					y: l
				}, 99, Phaser.Easing.Linear.None)
			}
			a.to({
				x: Attack.BX,
				y: Attack.BY
			}, 1, Phaser.Easing.Linear.None), a.start()
		}, e
	}(),
	Trinity = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3e3, "storm", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 2e3);
			for (var e = 2 * Math.PI / 3, t = 0; 3 > t; t++) {
				var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-lightning-0");
				i.animations.add("a", ["storm-lightning-0", "storm-lightning-1", "storm-lightning-2"], 30 + Math.floor(5 * Math.random()), !0, !1), i.animations.play("a"), i.anchor.setTo(.5, 1);
				var a = this.target.x + Math.floor(300 * Math.cos(-Math.PI / 4 + e * t)),
					s = this.target.y + Math.floor(300 * Math.sin(-Math.PI / 4 + e * t));
				s < this.target.y ? this.underLayer.add(i) : this.overLayer.add(i), this.game.add.tween(i).to({
					x: a,
					y: s
				}, 1, Phaser.Easing.Linear.None).to({
					x: this.target.x,
					y: this.target.y
				}, 2e3, Phaser.Easing.Quadratic.In).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).start()
			}
			for (var t = 0; 2 > t; t++) {
				var r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
				this.overLayer.add(r), r.scale.x = r.scale.y = 0, r.alpha = .5, r.anchor.setTo(.5, .8), this.game.add.tween(r).to({
					x: this.target.x,
					y: this.target.y
				}, 1, Phaser.Easing.Linear.None).delay(2e3 + 150 * t).to({
					alpha: 0
				}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(r.scale).to({
					x: 4,
					y: 4
				}, 300, Phaser.Easing.Linear.None).delay(2e3 + 150 * t).start()
			}
		}, e
	}(),
	WaterBlast = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 2e3, "water", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 1e3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-bubble");
			e.anchor.setTo(.5, .5), this.overLayer.add(e), this.game.add.tween(e).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-head");
			t.alpha = .5, t.scale.x = this.source.x < this.target.x ? 1 : -1, t.anchor.setTo(.5, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x,
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-tail"), t.scale.x = 0, t.alpha = .5, t.anchor.setTo(1, .5), this.overLayer.add(t), this.game.add.tween(t).to({
				x: this.source.x + (this.source.x < this.target.x ? -42 : 42),
				y: this.source.y - 100
			}, 1, Phaser.Easing.Linear.None).to({
				x: this.target.x + (this.source.x < this.target.x ? -42 : 42)
			}, 1e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(t.scale).to({
				x: this.source.x < this.target.x ? 1 : -1
			}, 500, Phaser.Easing.Linear.None).start();
			var i = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-dome");
			this.overLayer.add(i), i.scale.x = i.scale.y = 0, i.alpha = .8, i.anchor.setTo(.5, .8), this.game.add.tween(i).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(1e3).to({
				alpha: 0
			}, 300, Phaser.Easing.Linear.None).start(), this.game.add.tween(i.scale).to({
				x: 3,
				y: 3
			}, 300, Phaser.Easing.Linear.None).delay(1e3).start()
		}, e
	}(),
	WaterBomb = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4e3, "water", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 3300);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-bubble-big");
			this.overLayer.add(e), e.anchor.setTo(.5, .5), this.game.add.tween(e).to({
				x: this.target.x,
				y: -200
			}, 1, Phaser.Easing.Linear.None).to({
				y: 40
			}, 1500, Phaser.Easing.Quadratic.Out).to({
				y: this.target.y
			}, 1500, Phaser.Easing.Quadratic.In).to({
				alpha: 0
			}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(e.scale).to({
				x: .5,
				y: 2
			}, 1500, Phaser.Easing.Quadratic.Out).to({
				x: 1.25,
				y: .75
			}, 300, Phaser.Easing.Quadratic.Out).to({
				x: .75,
				y: 1.25
			}, 300, Phaser.Easing.Quadratic.InOut).to({
				x: 1.25,
				y: .75
			}, 300, Phaser.Easing.Quadratic.InOut).to({
				x: .75,
				y: 1.25
			}, 300, Phaser.Easing.Quadratic.InOut).to({
				x: 1.25,
				y: .75
			}, 300, Phaser.Easing.Quadratic.InOut).start();
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-splash");
			this.overLayer.add(t), t.anchor.setTo(.5, .8), this.game.add.tween(t).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(3e3).start(), this.game.add.tween(t.scale).to({
				x: 2,
				y: 0
			}, 1, Phaser.Easing.Linear.None).delay(3e3).to({
				y: 2
			}, 300, Phaser.Easing.Quadratic.Out).to({
				y: 0
			}, 300, Phaser.Easing.Quadratic.In).start()
		}, e
	}(),
	WaterBubble = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 4e3, "water", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 3e3);
			var e = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "water-prison");
			this.overLayer.add(e);
			var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-steam");
			this.underLayer.add(t), t.anchor.setTo(.5, .5), e.anchor.setTo(.5, .5);
			this.game.add.tween(e).to({
				x: this.target.x,
				y: this.target.y - 50,
				alpha: .75
			}, 1, Phaser.Easing.Linear.None).to({}, 500, Phaser.Easing.Linear.None).to({
				y: this.target.y - 450
			}, 1500, Phaser.Easing.Quadratic.Out).to({
				alpha: 0
			}, 100, Phaser.Easing.Linear.None).start(), this.game.add.tween(e.scale).to({
				x: 2.5,
				y: 2.5
			}, 400, Phaser.Easing.Quadratic.In).to({
				x: 3,
				y: 3
			}, 400, Phaser.Easing.Quadratic.Out).to({
				x: 2.5,
				y: 2.5
			}, 400, Phaser.Easing.Quadratic.In).to({
				x: 3,
				y: 3
			}, 400, Phaser.Easing.Quadratic.Out).to({
				x: 2.5,
				y: 2.5
			}, 400, Phaser.Easing.Quadratic.In).to({
				x: 5,
				y: 5
			}, 100, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({
				y: "-400"
			}, 1500, Phaser.Easing.Quadratic.Out).delay(501).to({
				y: "+400"
			}, 1e3, Phaser.Easing.Quadratic.In).to({
				y: "-50"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+50"
			}, 250, Phaser.Easing.Quadratic.In).start(), this.game.add.tween(t).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(3001).to({
				y: "-100",
				alpha: 0
			}, 250, Phaser.Easing.Quadratic.Out).start()
		}, e
	}(),
	Whirlwind = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 3e3, "earth", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 2e3);
			for (var e = 0; 100 > e; e++) {
				var t = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "earth-leaf");
				this.overLayer.add(t);
				var i = 4 + 2 * Math.random();
				t.anchor.setTo(i, i), t.scale.x = t.scale.y = 0, t.angle = Math.floor(360 * Math.random());
				var a = (Math.random() < .5 ? "+" : "-") + (200 + Math.floor(500 * Math.random())),
					s = 400 + Math.floor(200 * Math.random()),
					r = Math.random() * Math.PI * 2,
					o = Math.floor(this.target.x + s * Math.cos(r)),
					n = Math.floor(this.target.y + s * Math.sin(r));
				this.game.add.tween(t).to({
					x: this.target.x,
					y: this.target.y
				}, 1, Phaser.Easing.Linear.None).to({
					angle: a
				}, 2e3, Phaser.Easing.Linear.None).to({
					x: o,
					y: n,
					alpha: 0
				}, 300, Phaser.Easing.Quadratic.Out).start(), this.game.add.tween(t.anchor).to({
					x: .5,
					y: .5
				}, 500, Phaser.Easing.Linear.None).delay(1500).start(), this.game.add.tween(t.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.None).start()
			}
		}, e
	}(),
	Zero = function () {
		function e(e, t, i, a, s, r, o, n, l) {
			Attack.call(this, e, t, i, a, s, 6500, "wizard", r, o, n, l)
		}
		return e.prototype = Object.create(Attack.prototype), e.prototype.setup = function () {
			Attack.prototype.setup.call(this, 5e3);
			for (var e = Math.floor(this.source.x + (this.target.x - this.source.x) / 2), t = this.source.y - 250, i = 50, a = 0; i > a; a++) {
				var s = (Math.random() < .25 ? "core-box-empty-" : "core-box-") + Math.floor(6 * Math.random()),
					r = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", s);
				r.anchor.setTo(.5, .5), r.alpha = .8, this.overLayer.add(r);
				var o = Math.floor(4500 * a / i),
					n = Math.floor(-20 + 40 * Math.random());
				this.game.add.tween(r).to({
					x: this.source.x,
					y: this.source.y - 50 + n
				}, 1, Phaser.Easing.Linear.None).delay(o).to({
					x: e,
					y: t
				}, 500, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).start()
			}
			for (var o = 0, a = 0; 12 > a; a++) {
				var l = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "core-circle-small");
				this.underLayer.add(l), l.anchor.setTo(.5, .5), l.alpha = .25, l.scale.x = l.scale.y = 20, this.game.add.tween(l).to({
					x: e,
					y: t
				}, 1, Phaser.Easing.Linear.None).delay(o).to({}, 800, Phaser.Easing.Linear.None).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(l.scale).to({
					x: 0,
					y: 0
				}, 800, Phaser.Easing.Linear.None).delay(o).start(), o += 500 - 20 * a
			}
			var l = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "ice-snowman-body");
			this.overLayer.add(l), l.anchor.setTo(.5, .5), l.alpha = .5, l.scale.x = l.scale.y = 0, this.game.add.tween(l).to({
				x: e,
				y: t
			}, 1, Phaser.Easing.Linear.None).to({}, 5e3, Phaser.Easing.Linear.None).to({
				alpha: 0
			}, 400, Phaser.Easing.Linear.None).start(), this.game.add.tween(l.scale).to({
				x: 4,
				y: 4
			}, 5e3, Phaser.Easing.Linear.None).to({
				x: 10,
				y: 10
			}, 400, Phaser.Easing.Linear.None).start();
			var h = this.game.prodigy.create.sprite(Attack.BX, Attack.BY, "attacks", "storm-steam");
			this.underLayer.add(h), h.anchor.setTo(.5, .5), this.game.add.tween(h).to({
				x: this.target.x,
				y: this.target.y
			}, 1, Phaser.Easing.Linear.None).delay(5400).to({
				y: "-100",
				alpha: 0
			}, 250, Phaser.Easing.Quadratic.Out).start(), this.game.add.tween(this.target).to({
				x: e
			}, 3e3, Phaser.Easing.Quadratic.In).to({}, 2e3, Phaser.Easing.Linear.None).to({
				x: this.target.x
			}, 200, Phaser.Easing.Linear.None).start(), this.game.add.tween(this.target).to({
				y: t + 50
			}, 1e3, Phaser.Easing.Quadratic.In).delay(2e3).to({}, 2e3, Phaser.Easing.Linear.None).to({
				y: this.target.y
			}, 200, Phaser.Easing.Linear.None).to({
				y: "-50"
			}, 250, Phaser.Easing.Quadratic.Out).to({
				y: "+50"
			}, 250, Phaser.Easing.Quadratic.In).start(), this.game.prodigy.effects.shake(0, 5e3, 3, "v"), this.game.prodigy.effects.shake(5e3, 1e3, 15)
		}, e
	}();
Prodigy.SkillNode = function (e) {
	this.ID = e.ID, this.difficulty = e.d, this.nFactor = e.n || 0, this.topic = e.t || "", this.questions = e.q, this.grade = 1, this.prereqs = [], this.next = [], this.correct = 0, this.incorrect = 0, this.time = 0, this.theta = null, this.decay = 0, this.lock = 0, this.incorrectT = 0, this.correctT = 0, this.previous = [], this.localLock = [], this.marked = !1, this.lastTime = 0
}, Prodigy.SkillNode.prototype = {
	constructor: Prodigy.SkillNode,
	init: function (e, t, i, a) {
		this.theta = e, this.decay = t, this.lock = i, this.lastTime = Util.isDefined(a) ? a : 9999, this.lock > 0 && this.setLocalLock(this.ID, !0)
	},
	getData: function () {
		var e = {};
		return e.ID = this.ID, e.decay = this.decay, e.theta = this.theta, e.correct = this.correct, e.incorrect = this.incorrect, e.time = this.time, e.lock = this.lock, this.time = this.correct = this.incorrect = 0, e
	},
	getTheta: function () {
		var e = this.theta - Math.max(0, this.decay - 3 * .6);
		return -3 > e && (e = -3), e > 3 && (e = 3), e
	},
	getNormalizedTheta: function () {
		var e = this.getTheta() + 3;
		return e / 6
	},
	isMastered: function () {
		return Util.isDefined(this.theta) && this.getTheta() >= 3
	},
	isStruggling: function () {
		return Util.isDefined(this.theta) && this.getTheta() < -1.8
	},
	isValid: function () {
		return !this.lock && this.localLock.length <= 0 && !this.isMastered()
	},
	isNew: function () {
		return !Util.isDefined(this.theta)
	},
	setLock: function (e) {
		this.updated = !0, this.lock = e, this.setLocalLock(this.ID, e)
	},
	setLocalLock: function (e, t) {
		for (var i = 0; i < this.next.length; i++) this.next[i].setLocalLock(e, t);
		this.ID !== e && (t && !Util.inArray(this.localLock, e) ? this.localLock.push(e) : t || Util.removeFromArray(e, this.localLock))
	},
	decrementLock: function () {
		this.lock > 0 && (this.lock--, 0 === this.lock && (this.theta = -2, this.setLock(0)), this.updated = !0)
	},
	decaySkill: function (e, t) {
		if (!(0 >= e)) {
			t || this.setDecay(e);
			for (var i = 0; i < this.prereqs.length; i++) this.prereqs[i].decaySkill(t ? e : e - .6)
		}
	},
	setDecay: function (e) {
		this.updated = !0, Util.isDefined(this.theta) && e > 0 && this.decay < 3 * .6 && this.decay + e >= 3 * .6 ? this.decay += e + 3 * .6 : Util.isDefined(this.theta) && 0 > e && this.decay >= 3 * .6 && this.decay + e <= 3 * .6 ? this.decay = 0 : this.decay += e, this.decay < 0 && (this.decay = 0), this.decay > 9 && (this.decay = 9), e > 0 && console.log("DECAY " + this.ID + " BY " + e + ": " + this.decay)
	},
	initNew: function (e) {
		this.theta = e ? 1 : -1, this.decay = 0
	},
	answerQuestion: function (e, t, i, a) {
		this.updated = !0, i > 600 && (i = 600), this.time += i || 0, t ? (this.correct++, this.correctT++, this.setDecay(-.6), this.theta = Math.min(3, this.theta + .6 + e)) : (this.incorrect++, this.incorrectT++, this.decaySkill(this.isStruggling() ? 1.2 : .6, !0), this.theta = Math.max(-3, this.theta - 1.2 - e)), !a && (this.incorrectT >= 3 || this.theta <= -3) && (this.incorrectT = 0, this.setLock(20), this.decaySkill(1.2, !0))
	}
}, Prodigy.SkillTree = function () {
	this.skills = [];
	for (var e = 0; e < Prodigy.SkillTree.data.length; e++) this.skills.push(new Prodigy.SkillNode(Prodigy.SkillTree.data[e]));
	for (var e = 0; e < Prodigy.SkillTree.data.length; e++)
		for (var t = Prodigy.SkillTree.data[e], i = this.skills[e], a = 0; a < t.prereqs.length; a++) {
			var s = this.getSkill(t.prereqs[a]);
			Util.isDefined(s) ? (i.prereqs.push(s), s.next.push(i)) : console.log(t.prereqs[a])
		}
	this.skills.sort(function (e, t) {
		return 1e3 * (e.difficulty - t.difficulty) + e.topic.localeCompare(t.topic)
	})
}, Prodigy.SkillTree.prototype = {
	constructor: Prodigy.SkillTree,
	init: function (e) {
		for (var t = 0; t < e.length; t++) {
			var i = e[t],
				a = this.getSkill(i.skillID);
			Util.isDefined(a) && a.init(i.theta, i.decay, i.lock, i.last_updated)
		}
	},
	getSkill: function (e) {
		for (var t = 0; t < this.skills.length; t++) {
			var i = this.skills[t];
			if (i.ID == e) return i
		}
		return null
	},
	getSkills: function (e) {
		for (var t = [], i = 0; i < this.skills.length; i++) {
			var a = this.skills[i];
			Util.inArray(e, a.ID) && t.push(a)
		}
		return t
	},
	isMastered: function (e) {
		for (var t = 0; t < this.skills.length; t++) {
			var i = this.skills[t];
			if (Util.inArray(e, i.ID) && !i.isMastered()) return !1
		}
		return !0
	},
	getUpdatedData: function () {
		for (var e = [], t = 0; t < this.skills.length; t++) {
			var i = this.skills[t];
			i.updated && i.marked && (i.updated = !1, e.push(i.getData()))
		}
		return e
	},
	decrementLocks: function () {
		for (var e = 0; e < this.skills.length; e++) this.skills[e].decrementLock()
	},
	setCurriculum: function (e, t) {
		for (var i = 0; i < this.skills.length; i++) {
			var a = this.skills[i];
			a.marked = !1, a.grade = -1
		}
		for (var s = 8; s >= 0; s--)
			for (var r = Prodigy.EducationSystem.getAlignedSkills(s, e, t), i = 0; i < r.length; i++) {
				var a = this.getSkill(r[i]);
				Util.isDefined(a) && (a.grade = s, a.marked = !0)
			}
	}
}, Prodigy.SkillTree.data = [{
	ID: 1267,
	t: "Counting",
	q: 50,
	d: -100,
	prereqs: []
	}, {
	ID: 92,
	t: "Reading Numbers",
	q: 20,
	d: 100,
	prereqs: []
	}, {
	ID: 93,
	t: "Reading Numbers",
	q: 20,
	d: 100,
	prereqs: []
	}, {
	ID: 200,
	t: "Location",
	q: 28,
	d: 200,
	prereqs: []
	}, {
	ID: 201,
	t: "Location",
	q: 28,
	d: 200,
	prereqs: []
	}, {
	ID: 214,
	t: "Measurement ",
	q: 40,
	d: 200,
	prereqs: []
	}, {
	ID: 231,
	t: "Counting",
	q: 30,
	d: 200,
	prereqs: []
	}, {
	ID: 424,
	t: "Reading Numbers",
	q: 10,
	d: 200,
	prereqs: [93]
	}, {
	ID: 425,
	t: "Reading Numbers",
	q: 10,
	d: 200,
	prereqs: [92, 424]
	}, {
	ID: 426,
	t: "Counting",
	q: 50,
	d: 300,
	prereqs: [94]
	}, {
	ID: 430,
	t: "Counting",
	q: 50,
	d: 300,
	prereqs: [426]
	}, {
	ID: 435,
	t: "Reading Numbers",
	q: 50,
	d: 300,
	prereqs: [425]
	}, {
	ID: 94,
	t: "Counting",
	q: 50,
	d: 300,
	prereqs: [231]
	}, {
	ID: 1264,
	t: "Counting",
	q: 40,
	d: 300,
	prereqs: []
	}, {
	ID: 1198,
	t: "Counting",
	q: 50,
	d: 300,
	prereqs: [1203]
	}, {
	ID: 1203,
	t: "Counting",
	q: 50,
	d: 300,
	prereqs: [231]
	}, {
	ID: 1259,
	t: "Counting",
	q: 50,
	d: 400,
	prereqs: [1264]
	}, {
	ID: 95,
	t: "Counting",
	q: 50,
	d: 400,
	prereqs: [94]
	}, {
	ID: 73,
	t: "Counting",
	q: 47,
	d: 400,
	prereqs: [426]
	}, {
	ID: 96,
	t: "Counting",
	q: 50,
	d: 500,
	prereqs: [95]
	}, {
	ID: 431,
	t: "Counting",
	q: 50,
	d: 500,
	prereqs: [427, 430]
	}, {
	ID: 427,
	t: "Counting",
	q: 49,
	d: 500,
	prereqs: [73, 95]
	}, {
	ID: 1252,
	t: "Reading Numbers",
	q: 50,
	d: 500,
	prereqs: [427]
	}, {
	ID: 1199,
	t: "Counting",
	q: 50,
	d: 500,
	prereqs: [1198]
	}, {
	ID: 1204,
	t: "Place Value",
	q: 50,
	d: 600,
	prereqs: []
	}, {
	ID: 1205,
	t: "Place Value",
	q: 50,
	d: 600,
	prereqs: []
	}, {
	ID: 428,
	t: "Counting",
	q: 20,
	d: 600,
	prereqs: [427, 96]
	}, {
	ID: 432,
	t: "Counting",
	q: 50,
	d: 600,
	prereqs: [428, 431]
	}, {
	ID: 97,
	t: "Counting",
	q: 50,
	d: 600,
	prereqs: [96]
	}, {
	ID: 84,
	t: "Reading Numbers",
	q: 50,
	d: 600,
	prereqs: [1252]
	}, {
	ID: 72,
	t: "Counting",
	q: 22,
	d: 700,
	prereqs: [97, 428]
	}, {
	ID: 103,
	t: "Counting",
	q: 50,
	d: 700,
	prereqs: [97]
	}, {
	ID: 185,
	t: "Place Value",
	q: 50,
	d: 700,
	prereqs: [349, 1205]
	}, {
	ID: 158,
	t: "Counting",
	q: 50,
	d: 700,
	prereqs: [432]
	}, {
	ID: 349,
	t: "Reading Numbers",
	q: 50,
	d: 700,
	prereqs: [1268]
	}, {
	ID: 1200,
	t: "Counting",
	q: 50,
	d: 700,
	prereqs: [1199]
	}, {
	ID: 1268,
	t: "Counting",
	q: 50,
	d: 700,
	prereqs: [1204]
	}, {
	ID: 1273,
	t: "Place Value",
	q: 50,
	d: 800,
	prereqs: []
	}, {
	ID: 389,
	t: "Counting",
	q: 50,
	d: 800,
	prereqs: [98]
	}, {
	ID: 135,
	t: "Time",
	q: 24,
	d: 800,
	prereqs: []
	}, {
	ID: 186,
	t: "Place Value",
	q: 50,
	d: 800,
	prereqs: [185]
	}, {
	ID: 227,
	t: "Addition to 20",
	q: 33,
	d: 800,
	prereqs: [94]
	}, {
	ID: 98,
	t: "Counting",
	q: 39,
	d: 800,
	prereqs: [103]
	}, {
	ID: 74,
	t: "Counting",
	q: 34,
	d: 800,
	prereqs: [72, 98]
	}, {
	ID: 434,
	t: "Counting",
	q: 32,
	d: 800,
	prereqs: [158, 72]
	}, {
	ID: 460,
	t: "Word Problems",
	q: 40,
	d: 800,
	prereqs: [74]
	}, {
	ID: 429,
	t: "Counting",
	q: 50,
	d: 900,
	prereqs: [103]
	}, {
	ID: 470,
	t: "Time",
	q: 50,
	d: 900,
	prereqs: []
	}, {
	ID: 475,
	t: "Time",
	q: 24,
	d: 900,
	prereqs: []
	}, {
	ID: 75,
	t: "Patterning",
	q: 50,
	d: 900,
	prereqs: [429]
	}, {
	ID: 50,
	t: "Addition to 20",
	q: 39,
	d: 900,
	prereqs: [227]
	}, {
	ID: 90,
	t: "Comparing Numbers",
	q: 50,
	d: 900,
	prereqs: []
	}, {
	ID: 109,
	t: "Ordering Numbers",
	q: 40,
	d: 900,
	prereqs: [92]
	}, {
	ID: 148,
	t: "Ordering Numbers",
	q: 50,
	d: 900,
	prereqs: [103]
	}, {
	ID: 149,
	t: "Ordering Numbers",
	q: 50,
	d: 900,
	prereqs: [148]
	}, {
	ID: 176,
	t: "Counting",
	q: 50,
	d: 900,
	prereqs: [74]
	}, {
	ID: 177,
	t: "Counting",
	q: 50,
	d: 900,
	prereqs: [74, 176]
	}, {
	ID: 1256,
	t: "Counting",
	q: 50,
	d: 900,
	prereqs: [1268, 1259]
	}, {
	ID: 1201,
	t: "Counting",
	q: 50,
	d: 900,
	prereqs: [1200]
	}, {
	ID: 1220,
	t: "Comparing Numbers",
	q: 50,
	d: 1e3,
	prereqs: [439]
	}, {
	ID: 1228,
	t: "Place Value",
	q: 46,
	d: 1e3,
	prereqs: [99, 1273]
	}, {
	ID: 89,
	t: "Comparing Numbers",
	q: 50,
	d: 1e3,
	prereqs: [90]
	}, {
	ID: 91,
	t: "Ordering Numbers",
	q: 50,
	d: 1e3,
	prereqs: [149]
	}, {
	ID: 99,
	t: "Addition to 20",
	q: 47,
	d: 1e3,
	prereqs: [227]
	}, {
	ID: 473,
	t: "Time",
	q: 50,
	d: 1e3,
	prereqs: [475, 470]
	}, {
	ID: 436,
	t: "Ordering Numbers",
	q: 50,
	d: 1e3,
	prereqs: [148, 429, 1201]
	}, {
	ID: 437,
	t: "Ordering Numbers",
	q: 50,
	d: 1e3,
	prereqs: [149, 436]
	}, {
	ID: 439,
	t: "Comparing Numbers",
	q: 50,
	d: 1e3,
	prereqs: [90]
	}, {
	ID: 443,
	t: "Comparing Numbers",
	q: 50,
	d: 1e3,
	prereqs: [439]
	}, {
	ID: 444,
	t: "Comparing Numbers",
	q: 50,
	d: 1100,
	prereqs: [443, 440]
	}, {
	ID: 445,
	t: "Ordering Numbers",
	q: 50,
	d: 1100,
	prereqs: [442]
	}, {
	ID: 447,
	t: "Comparing Numbers",
	q: 50,
	d: 1100,
	prereqs: [443]
	}, {
	ID: 440,
	t: "Comparing Numbers",
	q: 50,
	d: 1100,
	prereqs: [89, 439]
	}, {
	ID: 441,
	t: "Ordering Numbers",
	q: 50,
	d: 1100,
	prereqs: [434]
	}, {
	ID: 442,
	t: "Ordering Numbers",
	q: 50,
	d: 1100,
	prereqs: [437, 441]
	}, {
	ID: 438,
	t: "Ordering Numbers",
	q: 50,
	d: 1100,
	prereqs: [91, 437]
	}, {
	ID: 544,
	t: "Comparing Numbers",
	q: 50,
	d: 1100,
	prereqs: [439, 440, 1220]
	}, {
	ID: 552,
	t: "Comparing Numbers",
	q: 50,
	d: 1100,
	prereqs: [444]
	}, {
	ID: 3,
	t: "Addition to 20",
	q: 45,
	d: 1100,
	prereqs: [99]
	}, {
	ID: 4,
	t: "Addition to 20",
	q: 90,
	d: 1100,
	prereqs: [50]
	}, {
	ID: 181,
	t: "Patterning",
	q: 50,
	d: 1100,
	prereqs: [75]
	}, {
	ID: 229,
	t: "Comparing Numbers",
	q: 50,
	d: 1100,
	prereqs: [89]
	}, {
	ID: 391,
	t: "Comparing Numbers",
	q: 40,
	d: 1100,
	prereqs: [229, 91]
	}, {
	ID: 1208,
	t: "Addition to 20",
	q: 50,
	d: 1100,
	prereqs: [4]
	}, {
	ID: 1185,
	t: "Addition to 20",
	q: 50,
	d: 1200,
	prereqs: [1208]
	}, {
	ID: 789,
	t: "Place Value",
	q: 50,
	d: 1200,
	prereqs: [186]
	}, {
	ID: 399,
	t: "Word Problems",
	q: 50,
	d: 1200,
	prereqs: [237]
	}, {
	ID: 237,
	t: "Comparing Numbers",
	q: 50,
	d: 1200,
	prereqs: [229, 440]
	}, {
	ID: 232,
	t: "Subtraction to 20",
	q: 20,
	d: 1200,
	prereqs: [98]
	}, {
	ID: 546,
	t: "Addition to 20",
	q: 42,
	d: 1200,
	prereqs: [3]
	}, {
	ID: 448,
	t: "Comparing Numbers",
	q: 50,
	d: 1200,
	prereqs: [444]
	}, {
	ID: 446,
	t: "Ordering Numbers",
	q: 50,
	d: 1200,
	prereqs: [441]
	}, {
	ID: 477,
	t: "Time",
	q: 24,
	d: 1200,
	prereqs: [475]
	}, {
	ID: 478,
	t: "Time",
	q: 50,
	d: 1200,
	prereqs: [470]
	}, {
	ID: 479,
	t: "Time",
	q: 47,
	d: 1300,
	prereqs: [473, 477, 478]
	}, {
	ID: 228,
	t: "Addition to 20",
	q: 50,
	d: 1300,
	prereqs: [3]
	}, {
	ID: 136,
	t: "Addition to 20",
	q: 45,
	d: 1300,
	prereqs: [99]
	}, {
	ID: 49,
	t: "Subtraction to 20",
	q: 45,
	d: 1300,
	prereqs: [232]
	}, {
	ID: 400,
	t: "Word Problems",
	q: 50,
	d: 1300,
	prereqs: [4]
	}, {
	ID: 392,
	t: "Addition to 20",
	q: 50,
	d: 1300,
	prereqs: [3]
	}, {
	ID: 792,
	t: "Place Value",
	q: 50,
	d: 1300,
	prereqs: [186]
	}, {
	ID: 1187,
	t: "Addition to 20",
	q: 50,
	d: 1300,
	prereqs: [1185]
	}, {
	ID: 1207,
	t: "Subtraction to 20",
	q: 50,
	d: 1300,
	prereqs: [49]
	}, {
	ID: 1265,
	t: "Addition to 20",
	q: 50,
	d: 1300,
	prereqs: [1185]
	}, {
	ID: 1181,
	t: "Addition to 20",
	q: 50,
	d: 1400,
	prereqs: [136, 1187]
	}, {
	ID: 1183,
	t: "Addition to 20",
	q: 50,
	d: 1400,
	prereqs: [391, 392, 1181]
	}, {
	ID: 1186,
	t: "Subtraction to 20",
	q: 50,
	d: 1400,
	prereqs: [1207]
	}, {
	ID: 401,
	t: "Word Problems",
	q: 50,
	d: 1400,
	prereqs: [49]
	}, {
	ID: 59,
	t: "Place Value",
	q: 50,
	d: 1400,
	prereqs: []
	}, {
	ID: 471,
	t: "Time",
	q: 50,
	d: 1400,
	prereqs: [478]
	}, {
	ID: 476,
	t: "Time",
	q: 50,
	d: 1400,
	prereqs: [477]
	}, {
	ID: 461,
	t: "Counting",
	q: 50,
	d: 1400,
	prereqs: [177, 1183]
	}, {
	ID: 751,
	t: "Rounding",
	q: 50,
	d: 1400,
	prereqs: [59]
	}, {
	ID: 474,
	t: "Time",
	q: 50,
	d: 1500,
	prereqs: [479, 476, 471]
	}, {
	ID: 547,
	t: "Subtraction to 100",
	q: 44,
	d: 1500,
	prereqs: [543]
	}, {
	ID: 549,
	t: "Mixed Operations",
	q: 50,
	d: 1500,
	prereqs: [543]
	}, {
	ID: 543,
	t: "Mixed Operations",
	q: 50,
	d: 1500,
	prereqs: [6, 52]
	}, {
	ID: 52,
	t: "Subtraction to 100",
	q: 45,
	d: 1500,
	prereqs: [49]
	}, {
	ID: 6,
	t: "Addition to 100",
	q: 180,
	d: 1500,
	prereqs: [4, 185, 1223]
	}, {
	ID: 393,
	t: "Subtraction to 20",
	q: 50,
	d: 1500,
	prereqs: [52]
	}, {
	ID: 350,
	t: "Addition to 1000",
	q: 50,
	d: 1500,
	prereqs: [349, 348, 6]
	}, {
	ID: 337,
	t: "Decimals: Place Value",
	q: 50,
	d: 1500,
	prereqs: []
	}, {
	ID: 348,
	t: "Reading Numbers",
	q: 50,
	d: 1500,
	prereqs: []
	}, {
	ID: 238,
	t: "Composing Numbers",
	q: 50,
	d: 1500,
	prereqs: [350]
	}, {
	ID: 239,
	t: "Composing Numbers",
	q: 50,
	d: 1500,
	prereqs: [238]
	}, {
	ID: 1188,
	t: "Subtraction to 20",
	q: 50,
	d: 1500,
	prereqs: [1186]
	}, {
	ID: 1266,
	t: "Subtraction to 20",
	q: 50,
	d: 1500,
	prereqs: [1186]
	}, {
	ID: 1269,
	t: "Addition to 20",
	q: 50,
	d: 1500,
	prereqs: [136]
	}, {
	ID: 1223,
	t: "Addition to 100",
	q: 50,
	d: 1500,
	prereqs: [4]
	}, {
	ID: 787,
	t: "Place Value",
	q: 50,
	d: 1500,
	prereqs: [789]
	}, {
	ID: 1229,
	t: "Addition to 20",
	q: 50,
	d: 1600,
	prereqs: [1269]
	}, {
	ID: 1240,
	t: "Reading Numbers",
	q: 50,
	d: 1600,
	prereqs: [435]
	}, {
	ID: 1271,
	t: "Subtraction to 20",
	q: 50,
	d: 1600,
	prereqs: [1188]
	}, {
	ID: 1272,
	t: "Addition to 20",
	q: 50,
	d: 1600,
	prereqs: [1269]
	}, {
	ID: 1209,
	t: "Subtraction to 20",
	q: 50,
	d: 1600,
	prereqs: [453]
	}, {
	ID: 1212,
	t: "Mixed Operations",
	q: 50,
	d: 1600,
	prereqs: [140]
	}, {
	ID: 1213,
	t: "Mixed Operations",
	q: 50,
	d: 1600,
	prereqs: []
	}, {
	ID: 138,
	t: "Subtraction to 20",
	q: 50,
	d: 1600,
	prereqs: [452, 49]
	}, {
	ID: 140,
	t: "Mixed Operations",
	q: 48,
	d: 1600,
	prereqs: [136]
	}, {
	ID: 215,
	t: "Data Relationships",
	q: 40,
	d: 1600,
	prereqs: []
	}, {
	ID: 548,
	t: "Place Value",
	q: 50,
	d: 1600,
	prereqs: [545, 185]
	}, {
	ID: 545,
	t: "Place Value",
	q: 50,
	d: 1600,
	prereqs: [543]
	}, {
	ID: 452,
	t: "Subtraction",
	q: 50,
	d: 1600,
	prereqs: []
	}, {
	ID: 453,
	t: "Subtraction",
	q: 50,
	d: 1600,
	prereqs: []
	}, {
	ID: 451,
	t: "Addition",
	q: 50,
	d: 1700,
	prereqs: [136]
	}, {
	ID: 137,
	t: "Subtraction to 20",
	q: 50,
	d: 1700,
	prereqs: [140, 1209]
	}, {
	ID: 111,
	t: "Mixed Operations",
	q: 17,
	d: 1700,
	prereqs: [140]
	}, {
	ID: 346,
	t: "Time",
	q: 50,
	d: 1700,
	prereqs: [135, 476]
	}, {
	ID: 347,
	t: "Temperature",
	q: 50,
	d: 1700,
	prereqs: []
	}, {
	ID: 1214,
	t: "Mixed Operations",
	q: 50,
	d: 1700,
	prereqs: [546]
	}, {
	ID: 1215,
	t: "Mixed Operations",
	q: 50,
	d: 1700,
	prereqs: [1213]
	}, {
	ID: 1189,
	t: "Addition to 20",
	q: 50,
	d: 1700,
	prereqs: [1181]
	}, {
	ID: 1182,
	t: "Subtraction to 20",
	q: 50,
	d: 1700,
	prereqs: [138, 1271]
	}, {
	ID: 1274,
	t: "Data Relationships",
	q: 50,
	d: 1700,
	prereqs: [215]
	}, {
	ID: 1231,
	t: "Place Value",
	q: 50,
	d: 1700,
	prereqs: [1232]
	}, {
	ID: 1232,
	t: "Place Value",
	q: 50,
	d: 1700,
	prereqs: [348]
	}, {
	ID: 1234,
	t: "Addition to 20",
	q: 50,
	d: 1700,
	prereqs: [1229, 1272]
	}, {
	ID: 847,
	t: "Place Value",
	q: 50,
	d: 1700,
	prereqs: [238]
	}, {
	ID: 1230,
	t: "Subtraction to 20",
	q: 50,
	d: 1800,
	prereqs: [137]
	}, {
	ID: 1254,
	t: "Mixed Operations",
	q: 50,
	d: 1800,
	prereqs: [1274]
	}, {
	ID: 1190,
	t: "Subtraction to 20",
	q: 50,
	d: 1800,
	prereqs: [1182]
	}, {
	ID: 1216,
	t: "Mixed Operations",
	q: 50,
	d: 1800,
	prereqs: [1214]
	}, {
	ID: 1210,
	t: "Addition to 20",
	q: 50,
	d: 1800,
	prereqs: [451]
	}, {
	ID: 87,
	t: "Subtraction to 20",
	q: 50,
	d: 1800,
	prereqs: [453, 1182]
	}, {
	ID: 83,
	t: "Subtraction to 20",
	q: 50,
	d: 1900,
	prereqs: [52, 87]
	}, {
	ID: 86,
	t: "Addition to 20",
	q: 50,
	d: 1900,
	prereqs: [451, 1181]
	}, {
	ID: 107,
	t: "Composing Numbers",
	q: 59,
	d: 1900,
	prereqs: [3]
	}, {
	ID: 108,
	t: "Composing Numbers",
	q: 60,
	d: 1900,
	prereqs: [52]
	}, {
	ID: 143,
	t: "Place Value",
	q: 50,
	d: 1900,
	prereqs: [186]
	}, {
	ID: 144,
	t: "Place Value",
	q: 50,
	d: 1900,
	prereqs: [186]
	}, {
	ID: 146,
	t: "Rounding",
	q: 50,
	d: 1900,
	prereqs: [185, 59, 751]
	}, {
	ID: 230,
	t: "Composing Numbers",
	q: 50,
	d: 1900,
	prereqs: [107, 108]
	}, {
	ID: 390,
	t: "Word Problems",
	q: 50,
	d: 1900,
	prereqs: [1234, 1230]
	}, {
	ID: 472,
	t: "Time",
	q: 50,
	d: 1900,
	prereqs: [471]
	}, {
	ID: 668,
	t: "Data Relationships",
	q: 50,
	d: 1900,
	prereqs: [215]
	}, {
	ID: 669,
	t: "Data Relationships",
	q: 50,
	d: 1900,
	prereqs: [1254]
	}, {
	ID: 1184,
	t: "Subtraction to 20",
	q: 50,
	d: 1900,
	prereqs: [393, 391, 1182]
	}, {
	ID: 1192,
	t: "Addition to 100",
	q: 50,
	d: 1900,
	prereqs: [1183]
	}, {
	ID: 1253,
	t: "Addition to 100",
	q: 48,
	d: 1900,
	prereqs: [1215]
	}, {
	ID: 1241,
	t: "Reading Numbers",
	q: 50,
	d: 1900,
	prereqs: [1240, 1231]
	}, {
	ID: 1218,
	t: "Addition to 100",
	q: 50,
	d: 1900,
	prereqs: [1215]
	}, {
	ID: 1275,
	t: "Subtraction to 100",
	q: 44,
	d: 1900,
	prereqs: [52]
	}, {
	ID: 1211,
	t: "Addition to 100",
	q: 50,
	d: 2e3,
	prereqs: [1192]
	}, {
	ID: 1217,
	t: "Subtraction to 100",
	q: 50,
	d: 2e3,
	prereqs: [1216, 1190]
	}, {
	ID: 790,
	t: "Place Value",
	q: 50,
	d: 2e3,
	prereqs: [787]
	}, {
	ID: 670,
	t: "Data Relationships",
	q: 50,
	d: 2e3,
	prereqs: [668]
	}, {
	ID: 671,
	t: "Data Relationships",
	q: 50,
	d: 2e3,
	prereqs: [669]
	}, {
	ID: 677,
	t: "Data Relationships",
	q: 50,
	d: 2e3,
	prereqs: []
	}, {
	ID: 602,
	t: "Data Relationships",
	q: 50,
	d: 2e3,
	prereqs: [668]
	}, {
	ID: 603,
	t: "Data Relationships",
	q: 50,
	d: 2e3,
	prereqs: [669]
	}, {
	ID: 408,
	t: "Word Problems",
	q: 50,
	d: 2e3,
	prereqs: [144, 143]
	}, {
	ID: 271,
	t: "Data Relationships",
	q: 50,
	d: 2e3,
	prereqs: [215]
	}, {
	ID: 196,
	t: "2D Shapes",
	q: 20,
	d: 2e3,
	prereqs: []
	}, {
	ID: 7,
	t: "Addition to 100",
	q: 143,
	d: 2e3,
	prereqs: [6]
	}, {
	ID: 53,
	t: "Subtraction to 100",
	q: 45,
	d: 2e3,
	prereqs: [1275]
	}, {
	ID: 60,
	t: "Composing Numbers",
	q: 50,
	d: 2100,
	prereqs: [230]
	}, {
	ID: 31,
	t: "Multiplication Facts",
	q: 21,
	d: 2100,
	prereqs: [7]
	}, {
	ID: 82,
	t: "Addition to 20",
	q: 50,
	d: 2100,
	prereqs: [4, 86]
	}, {
	ID: 224,
	t: "2D Shapes",
	q: 40,
	d: 2100,
	prereqs: [196]
	}, {
	ID: 164,
	t: "Addition to 100",
	q: 50,
	d: 2100,
	prereqs: [7, 549, 1218, 1253]
	}, {
	ID: 165,
	t: "Subtraction to 100",
	q: 50,
	d: 2100,
	prereqs: [53]
	}, {
	ID: 674,
	t: "Data Relationships",
	q: 50,
	d: 2100,
	prereqs: [676]
	}, {
	ID: 675,
	t: "Data Relationships",
	q: 50,
	d: 2100,
	prereqs: [677]
	}, {
	ID: 676,
	t: "Data Relationships",
	q: 50,
	d: 2100,
	prereqs: []
	}, {
	ID: 726,
	t: "Data Relationships",
	q: 50,
	d: 2100,
	prereqs: [669]
	}, {
	ID: 467,
	t: "Place Value",
	q: 50,
	d: 2100,
	prereqs: [144]
	}, {
	ID: 791,
	t: "Place Value",
	q: 50,
	d: 2100,
	prereqs: [787]
	}, {
	ID: 754,
	t: "Patterning",
	q: 50,
	d: 2100,
	prereqs: [75]
	}, {
	ID: 1206,
	t: "Addition to 100",
	q: 50,
	d: 2100,
	prereqs: [1211]
	}, {
	ID: 1224,
	t: "Addition to 100",
	q: 50,
	d: 2100,
	prereqs: [1223, 164]
	}, {
	ID: 1227,
	t: "Addition to 100",
	q: 50,
	d: 2100,
	prereqs: [1224]
	}, {
	ID: 1225,
	t: "Addition to 1000",
	q: 50,
	d: 2200,
	prereqs: [164]
	}, {
	ID: 1219,
	t: "Subtraction to 100",
	q: 50,
	d: 2200,
	prereqs: [166]
	}, {
	ID: 1202,
	t: "Addition to 100",
	q: 50,
	d: 2200,
	prereqs: [1206]
	}, {
	ID: 1094,
	t: "Patterning",
	q: 50,
	d: 2200,
	prereqs: [754]
	}, {
	ID: 772,
	t: "Multiplication",
	q: 45,
	d: 2200,
	prereqs: [7]
	}, {
	ID: 831,
	t: "Addition to 1000",
	q: 50,
	d: 2200,
	prereqs: [164]
	}, {
	ID: 834,
	t: "Subtraction to 100",
	q: 50,
	d: 2200,
	prereqs: [165]
	}, {
	ID: 495,
	t: "Time",
	q: 50,
	d: 2200,
	prereqs: [346]
	}, {
	ID: 496,
	t: "Angles",
	q: 33,
	d: 2200,
	prereqs: []
	}, {
	ID: 752,
	t: "Rounding",
	q: 50,
	d: 2200,
	prereqs: [751]
	}, {
	ID: 756,
	t: "Multiplication",
	q: 49,
	d: 2200,
	prereqs: [7]
	}, {
	ID: 672,
	t: "Data Relationships",
	q: 50,
	d: 2200,
	prereqs: [670, 674]
	}, {
	ID: 673,
	t: "Data Relationships",
	q: 50,
	d: 2200,
	prereqs: [671, 675]
	}, {
	ID: 166,
	t: "Subtraction to 100",
	q: 50,
	d: 2200,
	prereqs: [165]
	}, {
	ID: 197,
	t: "2D Shapes",
	q: 24,
	d: 2200,
	prereqs: []
	}, {
	ID: 198,
	t: "2D Shapes",
	q: 48,
	d: 2200,
	prereqs: []
	}, {
	ID: 101,
	t: "Patterning",
	q: 50,
	d: 2200,
	prereqs: [181]
	}, {
	ID: 110,
	t: "Composing Numbers",
	q: 50,
	d: 2200,
	prereqs: [60]
	}, {
	ID: 241,
	t: "Addition to 100",
	q: 50,
	d: 2200,
	prereqs: [164]
	}, {
	ID: 395,
	t: "Word Problems",
	q: 50,
	d: 2200,
	prereqs: [241]
	}, {
	ID: 396,
	t: "Word Problems",
	q: 50,
	d: 2200,
	prereqs: [166]
	}, {
	ID: 345,
	t: "Money",
	q: 50,
	d: 2300,
	prereqs: []
	}, {
	ID: 246,
	t: "Addition to 1000",
	q: 50,
	d: 2300,
	prereqs: [241, 1233]
	}, {
	ID: 250,
	t: "Subtraction to 1000",
	q: 50,
	d: 2300,
	prereqs: [166, 1226]
	}, {
	ID: 32,
	t: "Multiplication Facts",
	q: 19,
	d: 2300,
	prereqs: [756, 772]
	}, {
	ID: 225,
	t: "2D Shapes",
	q: 50,
	d: 2300,
	prereqs: [198]
	}, {
	ID: 216,
	t: "Measurement Relationships",
	q: 35,
	d: 2300,
	prereqs: []
	}, {
	ID: 218,
	t: "Time",
	q: 25,
	d: 2300,
	prereqs: [495]
	}, {
	ID: 222,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: []
	}, {
	ID: 127,
	t: "Conversion",
	q: 25,
	d: 2300,
	prereqs: [186]
	}, {
	ID: 692,
	t: "Data Relationships",
	q: 30,
	d: 2300,
	prereqs: [603]
	}, {
	ID: 757,
	t: "Mixed Operations",
	q: 50,
	d: 2300,
	prereqs: [53]
	}, {
	ID: 758,
	t: "Division",
	q: 49,
	d: 2300,
	prereqs: [53]
	}, {
	ID: 728,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: [677]
	}, {
	ID: 591,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: [222, 602]
	}, {
	ID: 592,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: [222, 603]
	}, {
	ID: 595,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: [597, 672]
	}, {
	ID: 597,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: [602]
	}, {
	ID: 598,
	t: "Data Relationships",
	q: 50,
	d: 2300,
	prereqs: [603]
	}, {
	ID: 648,
	t: "Money",
	q: 12,
	d: 2300,
	prereqs: []
	}, {
	ID: 550,
	t: "Addition to 1000",
	q: 50,
	d: 2300,
	prereqs: [241]
	}, {
	ID: 556,
	t: "Rounding",
	q: 50,
	d: 2300,
	prereqs: [146, 752]
	}, {
	ID: 457,
	t: "2D Shapes",
	q: 40,
	d: 2300,
	prereqs: [196]
	}, {
	ID: 458,
	t: "2D Shapes",
	q: 35,
	d: 2300,
	prereqs: []
	}, {
	ID: 486,
	t: "Angles",
	q: 50,
	d: 2300,
	prereqs: [496]
	}, {
	ID: 449,
	t: "Reading Numbers",
	q: 50,
	d: 2300,
	prereqs: [1240]
	}, {
	ID: 450,
	t: "Reading Numbers",
	q: 50,
	d: 2300,
	prereqs: [449]
	}, {
	ID: 773,
	t: "Division",
	q: 45,
	d: 2300,
	prereqs: [53]
	}, {
	ID: 1015,
	t: "Rounding",
	q: 50,
	d: 2300,
	prereqs: [752]
	}, {
	ID: 1095,
	t: "Patterning",
	q: 50,
	d: 2300,
	prereqs: [1094]
	}, {
	ID: 1197,
	t: "Subtraction to 100",
	q: 50,
	d: 2300,
	prereqs: [1184, 1219]
	}, {
	ID: 1226,
	t: "Subtraction to 1000",
	q: 50,
	d: 2300,
	prereqs: [166]
	}, {
	ID: 1233,
	t: "Addition to 1000",
	q: 50,
	d: 2300,
	prereqs: [1225]
	}, {
	ID: 1251,
	t: "Patterning",
	q: 50,
	d: 2300,
	prereqs: [101]
	}, {
	ID: 1237,
	t: "Addition to 1000",
	q: 50,
	d: 2400,
	prereqs: [777]
	}, {
	ID: 1239,
	t: "Subtraction to 1000",
	q: 50,
	d: 2400,
	prereqs: [1226]
	}, {
	ID: 1244,
	t: "Addition to 1000",
	q: 50,
	d: 2400,
	prereqs: [1237]
	}, {
	ID: 1221,
	t: "Subtraction to 100",
	q: 50,
	d: 2400,
	prereqs: [1197]
	}, {
	ID: 1280,
	t: "Data Relationships",
	q: 50,
	d: 2400,
	prereqs: [728]
	}, {
	ID: 1281,
	t: "Mixed Operations",
	q: 50,
	d: 2400,
	prereqs: [1192, 1197]
	}, {
	ID: 1089,
	t: "Place Value",
	q: 48,
	d: 2400,
	prereqs: [791]
	}, {
	ID: 1073,
	t: "Place Value",
	q: 50,
	d: 2400,
	prereqs: [791]
	}, {
	ID: 777,
	t: "Addition to 1000",
	q: 40,
	d: 2400,
	prereqs: [247]
	}, {
	ID: 779,
	t: "Addition to 1000",
	q: 50,
	d: 2400,
	prereqs: [777]
	}, {
	ID: 832,
	t: "Addition to 1,000,000",
	q: 50,
	d: 2400,
	prereqs: [242]
	}, {
	ID: 788,
	t: "Place Value",
	q: 50,
	d: 2400,
	prereqs: [128, 789]
	}, {
	ID: 454,
	t: "2D Shapes",
	q: 30,
	d: 2400,
	prereqs: [197, 457, 458]
	}, {
	ID: 649,
	t: "Money",
	q: 50,
	d: 2400,
	prereqs: [648]
	}, {
	ID: 612,
	t: "Angles",
	q: 42,
	d: 2400,
	prereqs: [486]
	}, {
	ID: 614,
	t: "Data Relationships",
	q: 50,
	d: 2400,
	prereqs: [596]
	}, {
	ID: 615,
	t: "Data Relationships",
	q: 30,
	d: 2400,
	prereqs: [603]
	}, {
	ID: 596,
	t: "Data Relationships",
	q: 50,
	d: 2400,
	prereqs: [598, 673]
	}, {
	ID: 600,
	t: "Data Relationships",
	q: 50,
	d: 2400,
	prereqs: [602]
	}, {
	ID: 601,
	t: "Data Relationships",
	q: 50,
	d: 2400,
	prereqs: [603]
	}, {
	ID: 607,
	t: "Money",
	q: 50,
	d: 2400,
	prereqs: [345]
	}, {
	ID: 590,
	t: "Probability",
	q: 50,
	d: 2400,
	prereqs: []
	}, {
	ID: 713,
	t: "Addition to 1000",
	q: 50,
	d: 2400,
	prereqs: [1244]
	}, {
	ID: 735,
	t: "Patterning",
	q: 50,
	d: 2400,
	prereqs: [77, 754, 1095]
	}, {
	ID: 736,
	t: "Patterning",
	q: 50,
	d: 2400,
	prereqs: [77, 754, 1095]
	}, {
	ID: 693,
	t: "Data Relationships",
	q: 30,
	d: 2400,
	prereqs: [692]
	}, {
	ID: 646,
	t: "Money",
	q: 50,
	d: 2400,
	prereqs: []
	}, {
	ID: 128,
	t: "Conversion",
	q: 25,
	d: 2400,
	prereqs: [127, 143]
	}, {
	ID: 174,
	t: "Patterning",
	q: 50,
	d: 2400,
	prereqs: [76]
	}, {
	ID: 226,
	t: "2D Shapes",
	q: 50,
	d: 2400,
	prereqs: [198]
	}, {
	ID: 233,
	t: "2D Shapes",
	q: 48,
	d: 2400,
	prereqs: []
	}, {
	ID: 192,
	t: "Comparing Numbers",
	q: 50,
	d: 2400,
	prereqs: [447]
	}, {
	ID: 193,
	t: "Comparing Numbers",
	q: 50,
	d: 2400,
	prereqs: [450, 448]
	}, {
	ID: 33,
	t: "Multiplication Facts",
	q: 19,
	d: 2400,
	prereqs: [32]
	}, {
	ID: 34,
	t: "Multiplication Facts",
	q: 19,
	d: 2400,
	prereqs: [33]
	}, {
	ID: 35,
	t: "Multiplication Facts",
	q: 19,
	d: 2400,
	prereqs: [34]
	}, {
	ID: 25,
	t: "Division Facts",
	q: 18,
	d: 2400,
	prereqs: [32, 33, 773, 757, 758]
	}, {
	ID: 26,
	t: "Division Facts",
	q: 18,
	d: 2400,
	prereqs: [34, 35, 25]
	}, {
	ID: 68,
	t: "Rounding",
	q: 50,
	d: 2400,
	prereqs: [146, 556]
	}, {
	ID: 76,
	t: "Patterning",
	q: 56,
	d: 2400,
	prereqs: [77]
	}, {
	ID: 77,
	t: "Patterning",
	q: 56,
	d: 2400,
	prereqs: [7, 53, 1251]
	}, {
	ID: 251,
	t: "Subtraction to 1000",
	q: 50,
	d: 2400,
	prereqs: [250]
	}, {
	ID: 247,
	t: "Addition to 1000",
	q: 50,
	d: 2400,
	prereqs: [246]
	}, {
	ID: 130,
	t: "Place Value",
	q: 50,
	d: 2400,
	prereqs: [143]
	}, {
	ID: 278,
	t: "Money",
	q: 50,
	d: 2400,
	prereqs: [345]
	}, {
	ID: 398,
	t: "Word Problems",
	q: 50,
	d: 2400,
	prereqs: [396, 395]
	}, {
	ID: 388,
	t: "2D Shapes",
	q: 50,
	d: 2500,
	prereqs: [197, 198]
	}, {
	ID: 336,
	t: "Decimals: Place Value",
	q: 50,
	d: 2500,
	prereqs: []
	}, {
	ID: 279,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: []
	}, {
	ID: 313,
	t: "Mixed Operations",
	q: 50,
	d: 2500,
	prereqs: [68]
	}, {
	ID: 242,
	t: "Addition to 1000",
	q: 50,
	d: 2500,
	prereqs: [713]
	}, {
	ID: 269,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: [76, 279]
	}, {
	ID: 248,
	t: "Subtraction to 1000",
	q: 50,
	d: 2500,
	prereqs: [251, 1239]
	}, {
	ID: 51,
	t: "Rounding",
	q: 50,
	d: 2500,
	prereqs: [68]
	}, {
	ID: 27,
	t: "Division Facts",
	q: 18,
	d: 2500,
	prereqs: [37, 36, 26]
	}, {
	ID: 36,
	t: "Multiplication Facts",
	q: 19,
	d: 2500,
	prereqs: [35]
	}, {
	ID: 37,
	t: "Multiplication Facts",
	q: 19,
	d: 2500,
	prereqs: [36]
	}, {
	ID: 113,
	t: "Addition",
	q: 50,
	d: 2500,
	prereqs: [398]
	}, {
	ID: 714,
	t: "Subtraction to 1000",
	q: 50,
	d: 2500,
	prereqs: [1236]
	}, {
	ID: 588,
	t: "Probability",
	q: 50,
	d: 2500,
	prereqs: [590]
	}, {
	ID: 583,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: [584]
	}, {
	ID: 584,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: [76]
	}, {
	ID: 593,
	t: "Data Relationships",
	q: 50,
	d: 2500,
	prereqs: [600]
	}, {
	ID: 594,
	t: "Data Relationships",
	q: 50,
	d: 2500,
	prereqs: [601]
	}, {
	ID: 455,
	t: "2D Shapes",
	q: 45,
	d: 2500,
	prereqs: [225, 233]
	}, {
	ID: 833,
	t: "Addition to 1,000,000",
	q: 50,
	d: 2500,
	prereqs: [831, 832]
	}, {
	ID: 785,
	t: "Subtraction to 1000",
	q: 50,
	d: 2500,
	prereqs: [778]
	}, {
	ID: 793,
	t: "Rounding",
	q: 50,
	d: 2500,
	prereqs: [146, 1015]
	}, {
	ID: 794,
	t: "Rounding",
	q: 50,
	d: 2500,
	prereqs: [68, 1015]
	}, {
	ID: 795,
	t: "Rounding",
	q: 50,
	d: 2500,
	prereqs: [1015]
	}, {
	ID: 796,
	t: "Rounding",
	q: 50,
	d: 2500,
	prereqs: [1015]
	}, {
	ID: 778,
	t: "Subtraction to 1000",
	q: 40,
	d: 2500,
	prereqs: [248, 1245]
	}, {
	ID: 712,
	t: "Patterning",
	q: 48,
	d: 2500,
	prereqs: [174]
	}, {
	ID: 1028,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: [735]
	}, {
	ID: 1029,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: [736]
	}, {
	ID: 1030,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: []
	}, {
	ID: 1031,
	t: "Patterning",
	q: 50,
	d: 2500,
	prereqs: []
	}, {
	ID: 1270,
	t: "Data Relationships",
	q: 50,
	d: 2500,
	prereqs: [1280]
	}, {
	ID: 1222,
	t: "Subtraction to 100",
	q: 50,
	d: 2500,
	prereqs: []
	}, {
	ID: 1236,
	t: "Subtraction to 1000",
	q: 50,
	d: 2500,
	prereqs: [248]
	}, {
	ID: 1245,
	t: "Subtraction to 1000",
	q: 50,
	d: 2500,
	prereqs: [714]
	}, {
	ID: 1242,
	t: "Addition to 1000",
	q: 50,
	d: 2600,
	prereqs: [113]
	}, {
	ID: 1243,
	t: "Subtraction to 1000",
	q: 50,
	d: 2600,
	prereqs: [778]
	}, {
	ID: 1255,
	t: "Mixed Operations",
	q: 50,
	d: 2600,
	prereqs: [1251]
	}, {
	ID: 1257,
	t: "Data Relationships",
	q: 30,
	d: 2600,
	prereqs: [693]
	}, {
	ID: 1278,
	t: "Data Relationships",
	q: 50,
	d: 2600,
	prereqs: [1270]
	}, {
	ID: 1194,
	t: "Mixed Operations",
	q: 50,
	d: 2600,
	prereqs: []
	}, {
	ID: 1195,
	t: "Mixed Operations",
	q: 50,
	d: 2600,
	prereqs: []
	}, {
	ID: 959,
	t: "Patterning",
	q: 50,
	d: 2600,
	prereqs: [279]
	}, {
	ID: 960,
	t: "Patterning",
	q: 50,
	d: 2600,
	prereqs: [279, 1028, 1029, 1030, 1031]
	}, {
	ID: 762,
	t: "Addition to 1000",
	q: 50,
	d: 2600,
	prereqs: [242]
	}, {
	ID: 763,
	t: "Subtraction to 1000",
	q: 50,
	d: 2600,
	prereqs: [1243]
	}, {
	ID: 835,
	t: "Subtraction to 1000",
	q: 50,
	d: 2600,
	prereqs: [248]
	}, {
	ID: 840,
	t: "Conversion",
	q: 50,
	d: 2600,
	prereqs: []
	}, {
	ID: 456,
	t: "2D Shapes",
	q: 40,
	d: 2600,
	prereqs: [226, 233]
	}, {
	ID: 464,
	t: "2D Shapes",
	q: 40,
	d: 2600,
	prereqs: [454]
	}, {
	ID: 480,
	t: "Patterning",
	q: 40,
	d: 2600,
	prereqs: [233]
	}, {
	ID: 481,
	t: "Patterning",
	q: 40,
	d: 2600,
	prereqs: [480]
	}, {
	ID: 555,
	t: "Mixed Operations",
	q: 50,
	d: 2600,
	prereqs: [40]
	}, {
	ID: 567,
	t: "Rounding",
	q: 50,
	d: 2600,
	prereqs: [51]
	}, {
	ID: 516,
	t: "Decimals",
	q: 50,
	d: 2600,
	prereqs: [192]
	}, {
	ID: 517,
	t: "Decimals",
	q: 50,
	d: 2600,
	prereqs: [193]
	}, {
	ID: 611,
	t: "Money",
	q: 50,
	d: 2600,
	prereqs: [607]
	}, {
	ID: 38,
	t: "Multiplication Facts",
	q: 19,
	d: 2600,
	prereqs: [37]
	}, {
	ID: 39,
	t: "Multiplication Facts",
	q: 19,
	d: 2600,
	prereqs: [38]
	}, {
	ID: 40,
	t: "Multiplication Facts",
	q: 19,
	d: 2600,
	prereqs: [39]
	}, {
	ID: 28,
	t: "Division Facts",
	q: 18,
	d: 2600,
	prereqs: [27, 38, 39]
	}, {
	ID: 29,
	t: "Division Facts",
	q: 9,
	d: 2600,
	prereqs: [28, 40]
	}, {
	ID: 194,
	t: "Decimals",
	q: 50,
	d: 2600,
	prereqs: [192]
	}, {
	ID: 195,
	t: "Decimals",
	q: 50,
	d: 2600,
	prereqs: [193]
	}, {
	ID: 187,
	t: "Money",
	q: 40,
	d: 2600,
	prereqs: [345]
	}, {
	ID: 206,
	t: "Data Relationships",
	q: 50,
	d: 2600,
	prereqs: []
	}, {
	ID: 211,
	t: "Angles",
	q: 50,
	d: 2600,
	prereqs: [486, 612]
	}, {
	ID: 129,
	t: "Conversion",
	q: 25,
	d: 2600,
	prereqs: [788]
	}, {
	ID: 139,
	t: "Money",
	q: 50,
	d: 2600,
	prereqs: [345, 278]
	}, {
	ID: 152,
	t: "Time",
	q: 50,
	d: 2600,
	prereqs: [218, 216]
	}, {
	ID: 249,
	t: "Subtraction to 1000",
	q: 50,
	d: 2600,
	prereqs: [763]
	}, {
	ID: 240,
	t: "2D Shapes",
	q: 48,
	d: 2600,
	prereqs: [233]
	}, {
	ID: 268,
	t: "Patterning",
	q: 50,
	d: 2600,
	prereqs: [269, 583]
	}, {
	ID: 309,
	t: "Place Value",
	q: 50,
	d: 2600,
	prereqs: [337, 336]
	}, {
	ID: 352,
	t: "Probability",
	q: 48,
	d: 2600,
	prereqs: [588]
	}, {
	ID: 338,
	t: "Data Relationships",
	q: 50,
	d: 2700,
	prereqs: [206]
	}, {
	ID: 344,
	t: "Money",
	q: 49,
	d: 2700,
	prereqs: [187]
	}, {
	ID: 409,
	t: "Subtraction to 1000",
	q: 50,
	d: 2700,
	prereqs: [249, 1197]
	}, {
	ID: 284,
	t: "2D Shapes",
	q: 50,
	d: 2700,
	prereqs: [456]
	}, {
	ID: 243,
	t: "Addition to 1000",
	q: 50,
	d: 2700,
	prereqs: [762]
	}, {
	ID: 153,
	t: "Time",
	q: 50,
	d: 2700,
	prereqs: [152]
	}, {
	ID: 154,
	t: "Composing Numbers",
	q: 50,
	d: 2700,
	prereqs: [110]
	}, {
	ID: 175,
	t: "Patterning",
	q: 50,
	d: 2700,
	prereqs: [243, 249, 1195, 1194]
	}, {
	ID: 182,
	t: "Money",
	q: 50,
	d: 2700,
	prereqs: [139]
	}, {
	ID: 212,
	t: "Angles",
	q: 50,
	d: 2700,
	prereqs: [211]
	}, {
	ID: 208,
	t: "Mixed Operations",
	q: 50,
	d: 2700,
	prereqs: [243, 249]
	}, {
	ID: 114,
	t: "Subtraction to 100",
	q: 50,
	d: 2700,
	prereqs: [248]
	}, {
	ID: 605,
	t: "Money",
	q: 50,
	d: 2700,
	prereqs: [611, 344]
	}, {
	ID: 589,
	t: "Probability",
	q: 50,
	d: 2700,
	prereqs: [352]
	}, {
	ID: 704,
	t: "Multiplication",
	q: 45,
	d: 2700,
	prereqs: [555]
	}, {
	ID: 647,
	t: "Money",
	q: 50,
	d: 2700,
	prereqs: [646]
	}, {
	ID: 559,
	t: "Decimals: Comparing",
	q: 50,
	d: 2700,
	prereqs: [516, 517]
	}, {
	ID: 482,
	t: "Patterning",
	q: 40,
	d: 2700,
	prereqs: [481]
	}, {
	ID: 465,
	t: "Decimals: Comparing",
	q: 50,
	d: 2700,
	prereqs: [309, 194]
	}, {
	ID: 466,
	t: "Decimals: Comparing",
	q: 50,
	d: 2700,
	prereqs: [309, 195]
	}, {
	ID: 459,
	t: "2D Shapes",
	q: 40,
	d: 2700,
	prereqs: [233, 454]
	}, {
	ID: 836,
	t: "Subtraction to 1,000,000",
	q: 50,
	d: 2700,
	prereqs: [834, 835]
	}, {
	ID: 830,
	t: "Place Value",
	q: 50,
	d: 2700,
	prereqs: [238, 788]
	}, {
	ID: 911,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2700,
	prereqs: []
	}, {
	ID: 761,
	t: "Division",
	q: 50,
	d: 2700,
	prereqs: [29]
	}, {
	ID: 815,
	t: "Division",
	q: 50,
	d: 2700,
	prereqs: [29]
	}, {
	ID: 805,
	t: "Decimals: Addition",
	q: 50,
	d: 2700,
	prereqs: []
	}, {
	ID: 776,
	t: "Division",
	q: 50,
	d: 2700,
	prereqs: [29]
	}, {
	ID: 1005,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 2700,
	prereqs: []
	}, {
	ID: 1096,
	t: "Patterning",
	q: 50,
	d: 2700,
	prereqs: [779, 785]
	}, {
	ID: 1247,
	t: "Fractions",
	q: 16,
	d: 2700,
	prereqs: []
	}, {
	ID: 1249,
	t: "Fractions",
	q: 22,
	d: 2800,
	prereqs: [1247]
	}, {
	ID: 1235,
	t: "Mixed Operations",
	q: 50,
	d: 2800,
	prereqs: []
	}, {
	ID: 1077,
	t: "Mixed Operations",
	q: 50,
	d: 2800,
	prereqs: [835, 243]
	}, {
	ID: 1193,
	t: "Mixed Operations",
	q: 50,
	d: 2800,
	prereqs: [175]
	}, {
	ID: 1191,
	t: "Mixed Operations",
	q: 50,
	d: 2800,
	prereqs: [175]
	}, {
	ID: 813,
	t: "Decimals: Addition",
	q: 50,
	d: 2800,
	prereqs: []
	}, {
	ID: 814,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2800,
	prereqs: []
	}, {
	ID: 806,
	t: "Division",
	q: 50,
	d: 2800,
	prereqs: [815]
	}, {
	ID: 821,
	t: "Multiplication",
	q: 50,
	d: 2800,
	prereqs: [40]
	}, {
	ID: 775,
	t: "Multiplication",
	q: 50,
	d: 2800,
	prereqs: [40]
	}, {
	ID: 797,
	t: "Rounding",
	q: 50,
	d: 2800,
	prereqs: [795, 793, 794, 796]
	}, {
	ID: 781,
	t: "Multiplication",
	q: 50,
	d: 2800,
	prereqs: [704]
	}, {
	ID: 870,
	t: "Decimals: Addition",
	q: 50,
	d: 2800,
	prereqs: [64]
	}, {
	ID: 871,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2800,
	prereqs: [65]
	}, {
	ID: 483,
	t: "Patterning",
	q: 40,
	d: 2800,
	prereqs: [480]
	}, {
	ID: 484,
	t: "Patterning",
	q: 40,
	d: 2800,
	prereqs: [481, 483]
	}, {
	ID: 566,
	t: "Rounding",
	q: 50,
	d: 2800,
	prereqs: [567]
	}, {
	ID: 510,
	t: "Fractions: Division",
	q: 50,
	d: 2800,
	prereqs: []
	}, {
	ID: 759,
	t: "Multiplication",
	q: 50,
	d: 2800,
	prereqs: []
	}, {
	ID: 586,
	t: "Patterning",
	q: 50,
	d: 2800,
	prereqs: [268, 960, 959]
	}, {
	ID: 587,
	t: "Patterning",
	q: 50,
	d: 2800,
	prereqs: [586]
	}, {
	ID: 604,
	t: "Decimals: Place Value",
	q: 50,
	d: 2800,
	prereqs: [309, 830]
	}, {
	ID: 650,
	t: "Money",
	q: 50,
	d: 2800,
	prereqs: [647]
	}, {
	ID: 120,
	t: "Decimals: Addition",
	q: 50,
	d: 2800,
	prereqs: [195, 833]
	}, {
	ID: 121,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2800,
	prereqs: [836]
	}, {
	ID: 123,
	t: "Conversion",
	q: 50,
	d: 2800,
	prereqs: [309]
	}, {
	ID: 64,
	t: "Decimals: Addition",
	q: 50,
	d: 2800,
	prereqs: [120, 805, 813]
	}, {
	ID: 65,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2800,
	prereqs: [121, 814, 911]
	}, {
	ID: 223,
	t: "Data Relationships",
	q: 48,
	d: 2800,
	prereqs: [222, 206, 338]
	}, {
	ID: 178,
	t: "Mixed Operations",
	q: 50,
	d: 2800,
	prereqs: [175]
	}, {
	ID: 161,
	t: "Time",
	q: 50,
	d: 2800,
	prereqs: [153]
	}, {
	ID: 258,
	t: "Addition",
	q: 50,
	d: 2800,
	prereqs: [208]
	}, {
	ID: 263,
	t: "Subtraction",
	q: 50,
	d: 2800,
	prereqs: [208]
	}, {
	ID: 417,
	t: "Addition to 1000",
	q: 50,
	d: 2800,
	prereqs: [243, 1192]
	}, {
	ID: 406,
	t: "Mixed Operations",
	q: 50,
	d: 2800,
	prereqs: [175]
	}, {
	ID: 419,
	t: "Word Problems",
	q: 50,
	d: 2900,
	prereqs: [120, 121]
	}, {
	ID: 421,
	t: "Time",
	q: 50,
	d: 2900,
	prereqs: [161]
	}, {
	ID: 412,
	t: "Word Problems",
	q: 50,
	d: 2900,
	prereqs: [182]
	}, {
	ID: 414,
	t: "Decimals: Mixed Operations",
	q: 50,
	d: 2900,
	prereqs: [65, 64]
	}, {
	ID: 326,
	t: "Angles",
	q: 50,
	d: 2900,
	prereqs: [212]
	}, {
	ID: 358,
	t: "Mixed Operations",
	q: 45,
	d: 2900,
	prereqs: []
	}, {
	ID: 359,
	t: "Mixed Operations",
	q: 45,
	d: 2900,
	prereqs: [358, 40, 29]
	}, {
	ID: 261,
	t: "Addition",
	q: 50,
	d: 2900,
	prereqs: [258]
	}, {
	ID: 266,
	t: "Subtraction",
	q: 50,
	d: 2900,
	prereqs: [263]
	}, {
	ID: 270,
	t: "Patterning",
	q: 50,
	d: 2900,
	prereqs: [268]
	}, {
	ID: 272,
	t: "Patterning",
	q: 50,
	d: 2900,
	prereqs: [273]
	}, {
	ID: 273,
	t: "Patterning",
	q: 50,
	d: 2900,
	prereqs: [233]
	}, {
	ID: 281,
	t: "Mixed Operations",
	q: 50,
	d: 2900,
	prereqs: [282]
	}, {
	ID: 282,
	t: "Mixed Operations",
	q: 50,
	d: 2900,
	prereqs: [462, 463]
	}, {
	ID: 288,
	t: "Decimals: Addition",
	q: 50,
	d: 2900,
	prereqs: [64, 966]
	}, {
	ID: 289,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2900,
	prereqs: [65, 968]
	}, {
	ID: 207,
	t: "Division",
	q: 50,
	d: 2900,
	prereqs: [806]
	}, {
	ID: 621,
	t: "Patterning",
	q: 50,
	d: 2900,
	prereqs: [584]
	}, {
	ID: 760,
	t: "Multiplication",
	q: 50,
	d: 2900,
	prereqs: [775]
	}, {
	ID: 507,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 2900,
	prereqs: [450, 1005]
	}, {
	ID: 485,
	t: "Patterning",
	q: 40,
	d: 2900,
	prereqs: [482, 484]
	}, {
	ID: 499,
	t: "Rational Numbers: Represent",
	q: 40,
	d: 2900,
	prereqs: [507, 1005]
	}, {
	ID: 462,
	t: "Multiplication",
	q: 40,
	d: 2900,
	prereqs: [40]
	}, {
	ID: 463,
	t: "Division",
	q: 45,
	d: 2900,
	prereqs: [29]
	}, {
	ID: 812,
	t: "Multiplication",
	q: 50,
	d: 2900,
	prereqs: []
	}, {
	ID: 808,
	t: "Multiplication",
	q: 50,
	d: 2900,
	prereqs: [821]
	}, {
	ID: 999,
	t: "Rational Numbers: Comparing",
	q: 50,
	d: 2900,
	prereqs: []
	}, {
	ID: 1003,
	t: "Expressions and Equations",
	q: 50,
	d: 2900,
	prereqs: []
	}, {
	ID: 1035,
	t: "Time",
	q: 32,
	d: 2900,
	prereqs: []
	}, {
	ID: 968,
	t: "Decimals: Subtraction",
	q: 50,
	d: 2900,
	prereqs: []
	}, {
	ID: 966,
	t: "Decimals: Addition",
	q: 50,
	d: 2900,
	prereqs: []
	}, {
	ID: 1076,
	t: "Decimals: Comparing",
	q: 50,
	d: 2900,
	prereqs: [559]
	}, {
	ID: 1246,
	t: "Geometry",
	q: 23,
	d: 2900,
	prereqs: [1247]
	}, {
	ID: 1248,
	t: "Geometry",
	q: 30,
	d: 3e3,
	prereqs: [1249, 1246]
	}, {
	ID: 998,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 3e3,
	prereqs: [507]
	}, {
	ID: 969,
	t: "Decimals: Addition",
	q: 50,
	d: 3e3,
	prereqs: [288]
	}, {
	ID: 970,
	t: "Decimals: Subtraction",
	q: 50,
	d: 3e3,
	prereqs: [289]
	}, {
	ID: 971,
	t: "Decimals: Addition",
	q: 50,
	d: 3e3,
	prereqs: [288]
	}, {
	ID: 972,
	t: "Decimals: Subtraction",
	q: 50,
	d: 3e3,
	prereqs: [289]
	}, {
	ID: 909,
	t: "Numerical Expressions",
	q: 50,
	d: 3e3,
	prereqs: [358, 1003]
	}, {
	ID: 1067,
	t: "Mixed Operations",
	q: 50,
	d: 3e3,
	prereqs: [462]
	}, {
	ID: 1059,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 3e3,
	prereqs: [999]
	}, {
	ID: 1060,
	t: "Rational Numbers: Comparing",
	q: 50,
	d: 3e3,
	prereqs: [999]
	}, {
	ID: 782,
	t: "Division",
	q: 50,
	d: 3e3,
	prereqs: [705]
	}, {
	ID: 783,
	t: "Mixed Operations",
	q: 49,
	d: 3e3,
	prereqs: [705]
	}, {
	ID: 784,
	t: "Mixed Operations",
	q: 50,
	d: 3e3,
	prereqs: [281]
	}, {
	ID: 764,
	t: "Multiplication",
	q: 50,
	d: 3e3,
	prereqs: [179, 812]
	}, {
	ID: 879,
	t: "Multiplication",
	q: 50,
	d: 3e3,
	prereqs: [462]
	}, {
	ID: 500,
	t: "Rational Numbers: Comparing",
	q: 50,
	d: 3e3,
	prereqs: [507, 999]
	}, {
	ID: 501,
	t: "Rational Numbers: Comparing",
	q: 50,
	d: 3e3,
	prereqs: [500, 999]
	}, {
	ID: 503,
	t: "Rational Numbers: Comparing",
	q: 50,
	d: 3e3,
	prereqs: [501]
	}, {
	ID: 514,
	t: "Integers",
	q: 40,
	d: 3e3,
	prereqs: [507]
	}, {
	ID: 534,
	t: "Order of Operations",
	q: 50,
	d: 3e3,
	prereqs: [359, 538]
	}, {
	ID: 538,
	t: "Order of Operations",
	q: 50,
	d: 3e3,
	prereqs: [358]
	}, {
	ID: 705,
	t: "Division",
	q: 44,
	d: 3e3,
	prereqs: [704]
	}, {
	ID: 706,
	t: "Multiplication",
	q: 50,
	d: 3e3,
	prereqs: [781]
	}, {
	ID: 710,
	t: "Mixed Operations",
	q: 49,
	d: 3e3,
	prereqs: [783]
	}, {
	ID: 620,
	t: "Patterning",
	q: 50,
	d: 3e3,
	prereqs: [621]
	}, {
	ID: 179,
	t: "Multiplication",
	q: 50,
	d: 3e3,
	prereqs: [808]
	}, {
	ID: 119,
	t: "Money",
	q: 50,
	d: 3e3,
	prereqs: [182]
	}, {
	ID: 310,
	t: "Addition to 1,000,000",
	q: 50,
	d: 3e3,
	prereqs: [258]
	}, {
	ID: 311,
	t: "Subtraction to 1,000,000",
	q: 50,
	d: 3e3,
	prereqs: [263]
	}, {
	ID: 329,
	t: "Data Relationships",
	q: 50,
	d: 3e3,
	prereqs: [223]
	}, {
	ID: 277,
	t: "Time",
	q: 50,
	d: 3e3,
	prereqs: []
	}, {
	ID: 264,
	t: "Subtraction",
	q: 50,
	d: 3e3,
	prereqs: [266]
	}, {
	ID: 259,
	t: "Addition",
	q: 50,
	d: 3e3,
	prereqs: [261]
	}, {
	ID: 368,
	t: "Angles",
	q: 50,
	d: 3e3,
	prereqs: [326]
	}, {
	ID: 351,
	t: "3D Shapes",
	q: 48,
	d: 3e3,
	prereqs: []
	}, {
	ID: 382,
	t: "3D Shapes",
	q: 48,
	d: 3e3,
	prereqs: [351]
	}, {
	ID: 383,
	t: "3D Shapes",
	q: 35,
	d: 3100,
	prereqs: [382, 459]
	}, {
	ID: 384,
	t: "3D Shapes",
	q: 48,
	d: 3100,
	prereqs: [383]
	}, {
	ID: 260,
	t: "Addition",
	q: 50,
	d: 3100,
	prereqs: [259]
	}, {
	ID: 283,
	t: "Time",
	q: 46,
	d: 3100,
	prereqs: [1035]
	}, {
	ID: 122,
	t: "Conversion",
	q: 50,
	d: 3100,
	prereqs: [129]
	}, {
	ID: 180,
	t: "Mixed Operations",
	q: 50,
	d: 3100,
	prereqs: [179]
	}, {
	ID: 183,
	t: "Mixed Operations",
	q: 50,
	d: 3100,
	prereqs: [40, 29]
	}, {
	ID: 184,
	t: "Patterning",
	q: 50,
	d: 3100,
	prereqs: [40]
	}, {
	ID: 205,
	t: "Mixed Operations",
	q: 50,
	d: 3100,
	prereqs: [184]
	}, {
	ID: 213,
	t: "Measurement",
	q: 25,
	d: 3100,
	prereqs: []
	}, {
	ID: 702,
	t: "Mixed Operations",
	q: 50,
	d: 3100,
	prereqs: [784]
	}, {
	ID: 716,
	t: "Measurement",
	q: 50,
	d: 3100,
	prereqs: []
	}, {
	ID: 707,
	t: "Multiplication",
	q: 50,
	d: 3100,
	prereqs: [706]
	}, {
	ID: 708,
	t: "Division",
	q: 50,
	d: 3100,
	prereqs: [782]
	}, {
	ID: 539,
	t: "Square Roots",
	q: 20,
	d: 3100,
	prereqs: [40]
	}, {
	ID: 554,
	t: "Fractions: Represent",
	q: 32,
	d: 3100,
	prereqs: []
	}, {
	ID: 557,
	t: "Fractions: Represent",
	q: 44,
	d: 3100,
	prereqs: [554, 1248, 1246]
	}, {
	ID: 519,
	t: "Integers",
	q: 50,
	d: 3100,
	prereqs: [503]
	}, {
	ID: 523,
	t: "Rational Numbers",
	q: 50,
	d: 3100,
	prereqs: [500]
	}, {
	ID: 524,
	t: "Rational Numbers",
	q: 50,
	d: 3100,
	prereqs: [501]
	}, {
	ID: 515,
	t: "Integers",
	q: 50,
	d: 3100,
	prereqs: [514]
	}, {
	ID: 504,
	t: "Factors and Multiples",
	q: 50,
	d: 3100,
	prereqs: []
	}, {
	ID: 505,
	t: "Factors and Multiples",
	q: 48,
	d: 3100,
	prereqs: [504]
	}, {
	ID: 848,
	t: "Division",
	q: 50,
	d: 3100,
	prereqs: [207]
	}, {
	ID: 852,
	t: "Mixed Operations",
	q: 50,
	d: 3100,
	prereqs: [409, 417, 406]
	}, {
	ID: 771,
	t: "2D Shapes",
	q: 45,
	d: 3100,
	prereqs: [284]
	}, {
	ID: 780,
	t: "Measurement",
	q: 50,
	d: 3100,
	prereqs: []
	}, {
	ID: 1068,
	t: "Mixed Operations",
	q: 50,
	d: 3100,
	prereqs: [462, 784]
	}, {
	ID: 910,
	t: "Numerical Expressions",
	q: 50,
	d: 3100,
	prereqs: [909]
	}, {
	ID: 962,
	t: "Factors",
	q: 50,
	d: 3100,
	prereqs: [40, 207, 29]
	}, {
	ID: 984,
	t: "Data Relationships",
	q: 50,
	d: 3100,
	prereqs: [329]
	}, {
	ID: 985,
	t: "Data Relationships",
	q: 50,
	d: 3200,
	prereqs: [984]
	}, {
	ID: 987,
	t: "Factors",
	q: 50,
	d: 3200,
	prereqs: [962]
	}, {
	ID: 1046,
	t: "Probability",
	q: 25,
	d: 3200,
	prereqs: [329]
	}, {
	ID: 1004,
	t: "Expressions and Equations",
	q: 50,
	d: 3200,
	prereqs: [1003]
	}, {
	ID: 811,
	t: "Division",
	q: 50,
	d: 3200,
	prereqs: [29]
	}, {
	ID: 801,
	t: "Measurement",
	q: 48,
	d: 3200,
	prereqs: [716, 213]
	}, {
	ID: 853,
	t: "Mixed Operations",
	q: 50,
	d: 3200,
	prereqs: [852, 463, 462]
	}, {
	ID: 532,
	t: "Square Roots",
	q: 50,
	d: 3200,
	prereqs: [539]
	}, {
	ID: 542,
	t: "Place Value",
	q: 50,
	d: 3200,
	prereqs: [308]
	}, {
	ID: 709,
	t: "Division",
	q: 50,
	d: 3200,
	prereqs: [708]
	}, {
	ID: 711,
	t: "Multiplication",
	q: 48,
	d: 3200,
	prereqs: [707]
	}, {
	ID: 753,
	t: "Fractions: Represent",
	q: 32,
	d: 3200,
	prereqs: [554, 557]
	}, {
	ID: 730,
	t: "Fractions: Represent",
	q: 50,
	d: 3200,
	prereqs: [554, 557]
	}, {
	ID: 622,
	t: "Patterning",
	q: 50,
	d: 3200,
	prereqs: [620]
	}, {
	ID: 210,
	t: "2D Shapes",
	q: 50,
	d: 3200,
	prereqs: [771]
	}, {
	ID: 220,
	t: "Measurement",
	q: 50,
	d: 3200,
	prereqs: [213]
	}, {
	ID: 314,
	t: "Addition",
	q: 50,
	d: 3200,
	prereqs: [310]
	}, {
	ID: 287,
	t: "Reading Numbers",
	q: 50,
	d: 3200,
	prereqs: [40, 29, 504, 962]
	}, {
	ID: 308,
	t: "Place Value",
	q: 50,
	d: 3200,
	prereqs: [130]
	}, {
	ID: 265,
	t: "Subtraction",
	q: 50,
	d: 3200,
	prereqs: [264]
	}, {
	ID: 252,
	t: "2D Shapes",
	q: 50,
	d: 3200,
	prereqs: [284]
	}, {
	ID: 253,
	t: "2D Shapes",
	q: 50,
	d: 3300,
	prereqs: [210, 252]
	}, {
	ID: 254,
	t: "2D Shapes",
	q: 50,
	d: 3300,
	prereqs: [252]
	}, {
	ID: 255,
	t: "2D Shapes",
	q: 50,
	d: 3300,
	prereqs: []
	}, {
	ID: 312,
	t: "Decimals",
	q: 50,
	d: 3300,
	prereqs: [288, 289]
	}, {
	ID: 285,
	t: "Factors",
	q: 50,
	d: 3300,
	prereqs: [287]
	}, {
	ID: 221,
	t: "Measurement",
	q: 50,
	d: 3300,
	prereqs: [220]
	}, {
	ID: 115,
	t: "Multiplication",
	q: 50,
	d: 3300,
	prereqs: [184]
	}, {
	ID: 116,
	t: "Division",
	q: 50,
	d: 3300,
	prereqs: [811]
	}, {
	ID: 62,
	t: "Decimals: Multiplication",
	q: 50,
	d: 3300,
	prereqs: [288]
	}, {
	ID: 63,
	t: "Decimals: Division",
	q: 50,
	d: 3300,
	prereqs: [289]
	}, {
	ID: 722,
	t: "Fractions: Represent",
	q: 45,
	d: 3300,
	prereqs: [730]
	}, {
	ID: 718,
	t: "Fractions: Represent",
	q: 50,
	d: 3300,
	prereqs: []
	}, {
	ID: 562,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3300,
	prereqs: []
	}, {
	ID: 563,
	t: "Fractions: Equivalent",
	q: 18,
	d: 3300,
	prereqs: [557]
	}, {
	ID: 565,
	t: "Multiplication",
	q: 50,
	d: 3300,
	prereqs: [837]
	}, {
	ID: 535,
	t: "Exponents: Rules",
	q: 50,
	d: 3300,
	prereqs: [534]
	}, {
	ID: 536,
	t: "Exponents: Rules",
	q: 50,
	d: 3300,
	prereqs: [535]
	}, {
	ID: 490,
	t: "Measurement",
	q: 50,
	d: 3300,
	prereqs: [180]
	}, {
	ID: 487,
	t: "Measurement",
	q: 40,
	d: 3300,
	prereqs: [180, 716, 780]
	}, {
	ID: 837,
	t: "Multiplication",
	q: 50,
	d: 3300,
	prereqs: [179]
	}, {
	ID: 838,
	t: "Multiplication",
	q: 50,
	d: 3300,
	prereqs: [179]
	}, {
	ID: 839,
	t: "Conversion",
	q: 50,
	d: 3300,
	prereqs: []
	}, {
	ID: 841,
	t: "Conversion",
	q: 50,
	d: 3300,
	prereqs: [801]
	}, {
	ID: 802,
	t: "Measurement",
	q: 40,
	d: 3300,
	prereqs: [716, 213]
	}, {
	ID: 825,
	t: "Multiplication",
	q: 50,
	d: 3300,
	prereqs: [179]
	}, {
	ID: 816,
	t: "Division",
	q: 50,
	d: 3300,
	prereqs: [815]
	}, {
	ID: 767,
	t: "Fractions: Comparing",
	q: 50,
	d: 3300,
	prereqs: []
	}, {
	ID: 1011,
	t: "Fractions: Comparing",
	q: 50,
	d: 3300,
	prereqs: []
	}, {
	ID: 1054,
	t: "2D Shapes",
	q: 35,
	d: 3300,
	prereqs: []
	}, {
	ID: 996,
	t: "Expressions and Equations",
	q: 50,
	d: 3300,
	prereqs: [1004]
	}, {
	ID: 997,
	t: "Expressions and Equations",
	q: 50,
	d: 3300,
	prereqs: [910]
	}, {
	ID: 973,
	t: "Exponents: Rules",
	q: 50,
	d: 3300,
	prereqs: [536]
	}, {
	ID: 1279,
	t: "Data Relationships",
	q: 50,
	d: 3300,
	prereqs: [718, 1278]
	}, {
	ID: 1159,
	t: "Data Relationships",
	q: 50,
	d: 3300,
	prereqs: [329]
	}, {
	ID: 1160,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 3300,
	prereqs: [910]
	}, {
	ID: 1175,
	t: "Angles",
	q: 50,
	d: 3300,
	prereqs: [247, 243, 368]
	}, {
	ID: 1180,
	t: "Fractions: Equivalent",
	q: 50,
	d: 3400,
	prereqs: []
	}, {
	ID: 1104,
	t: "Fractions: Comparing",
	q: 50,
	d: 3400,
	prereqs: [1011]
	}, {
	ID: 1141,
	t: "Measurement",
	q: 25,
	d: 3400,
	prereqs: [839]
	}, {
	ID: 991,
	t: "Measurement",
	q: 36,
	d: 3400,
	prereqs: [840]
	}, {
	ID: 922,
	t: "Fractions and Decimals",
	q: 50,
	d: 3400,
	prereqs: [563]
	}, {
	ID: 1050,
	t: "2D Shapes",
	q: 50,
	d: 3400,
	prereqs: [253, 1054]
	}, {
	ID: 1027,
	t: "Fractions: Represent",
	q: 50,
	d: 3400,
	prereqs: [718, 557]
	}, {
	ID: 1043,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 3400,
	prereqs: [996]
	}, {
	ID: 1012,
	t: "3D Shapes",
	q: 18,
	d: 3400,
	prereqs: [383]
	}, {
	ID: 770,
	t: "Area",
	q: 50,
	d: 3400,
	prereqs: [372]
	}, {
	ID: 809,
	t: "Multiplication",
	q: 50,
	d: 3400,
	prereqs: [825, 838]
	}, {
	ID: 807,
	t: "Division",
	q: 50,
	d: 3400,
	prereqs: [816]
	}, {
	ID: 488,
	t: "Measurement",
	q: 50,
	d: 3400,
	prereqs: [487]
	}, {
	ID: 509,
	t: "Ratios",
	q: 50,
	d: 3400,
	prereqs: []
	}, {
	ID: 561,
	t: "Decimals: Represent",
	q: 50,
	d: 3400,
	prereqs: [563]
	}, {
	ID: 719,
	t: "Fractions: Equivalent",
	q: 42,
	d: 3400,
	prereqs: []
	}, {
	ID: 733,
	t: "Patterning",
	q: 50,
	d: 3400,
	prereqs: []
	}, {
	ID: 613,
	t: "Data Relationships",
	q: 50,
	d: 3400,
	prereqs: [603]
	}, {
	ID: 125,
	t: "Multiplication",
	q: 50,
	d: 3400,
	prereqs: [115, 116, 205]
	}, {
	ID: 303,
	t: "Decimals: Mixed Operations",
	q: 50,
	d: 3400,
	prereqs: [62, 63]
	}, {
	ID: 290,
	t: "Multiplication",
	q: 50,
	d: 3400,
	prereqs: [62, 63]
	}, {
	ID: 256,
	t: "2D Shapes",
	q: 45,
	d: 3400,
	prereqs: [254]
	}, {
	ID: 372,
	t: "2D Shapes",
	q: 50,
	d: 3400,
	prereqs: []
	}, {
	ID: 335,
	t: "Patterning",
	q: 50,
	d: 3400,
	prereqs: [455, 253]
	}, {
	ID: 363,
	t: "Unit Rates",
	q: 50,
	d: 3400,
	prereqs: []
	}, {
	ID: 364,
	t: "Money",
	q: 50,
	d: 3500,
	prereqs: [312, 363]
	}, {
	ID: 367,
	t: "2D Shapes",
	q: 50,
	d: 3500,
	prereqs: [372]
	}, {
	ID: 327,
	t: "Conversion",
	q: 50,
	d: 3500,
	prereqs: [213, 839, 841]
	}, {
	ID: 373,
	t: "2D Shapes",
	q: 50,
	d: 3500,
	prereqs: [367]
	}, {
	ID: 374,
	t: "2D Shapes",
	q: 50,
	d: 3500,
	prereqs: [372]
	}, {
	ID: 380,
	t: "2D Shapes",
	q: 50,
	d: 3500,
	prereqs: []
	}, {
	ID: 415,
	t: "Word Problems",
	q: 40,
	d: 3500,
	prereqs: [162]
	}, {
	ID: 416,
	t: "Word Problems",
	q: 50,
	d: 3500,
	prereqs: [163]
	}, {
	ID: 257,
	t: "2D Shapes",
	q: 43,
	d: 3500,
	prereqs: [256]
	}, {
	ID: 321,
	t: "Multiplication",
	q: 50,
	d: 3500,
	prereqs: [290, 303]
	}, {
	ID: 325,
	t: "2D Shapes",
	q: 50,
	d: 3500,
	prereqs: [255]
	}, {
	ID: 126,
	t: "Fractions",
	q: 50,
	d: 3500,
	prereqs: [183]
	}, {
	ID: 162,
	t: "Division",
	q: 50,
	d: 3500,
	prereqs: [29, 207, 816, 807]
	}, {
	ID: 163,
	t: "Multiplication",
	q: 50,
	d: 3500,
	prereqs: [179, 565, 764, 809]
	}, {
	ID: 219,
	t: "Fractions",
	q: 30,
	d: 3500,
	prereqs: [62]
	}, {
	ID: 734,
	t: "Fractions: Comparing",
	q: 33,
	d: 3500,
	prereqs: [1027, 1011]
	}, {
	ID: 720,
	t: "Fractions: Equivalent",
	q: 42,
	d: 3500,
	prereqs: []
	}, {
	ID: 560,
	t: "Fractions: Comparing",
	q: 50,
	d: 3500,
	prereqs: [558]
	}, {
	ID: 558,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3500,
	prereqs: [563, 562]
	}, {
	ID: 537,
	t: "Decimals",
	q: 50,
	d: 3500,
	prereqs: [290, 303]
	}, {
	ID: 506,
	t: "Ratios",
	q: 50,
	d: 3500,
	prereqs: [502]
	}, {
	ID: 497,
	t: "Probability",
	q: 50,
	d: 3500,
	prereqs: [352]
	}, {
	ID: 489,
	t: "Measurement",
	q: 20,
	d: 3500,
	prereqs: [488]
	}, {
	ID: 491,
	t: "Measurement",
	q: 20,
	d: 3500,
	prereqs: [490]
	}, {
	ID: 492,
	t: "Measurement",
	q: 40,
	d: 3500,
	prereqs: [488]
	}, {
	ID: 493,
	t: "Measurement",
	q: 40,
	d: 3500,
	prereqs: [221]
	}, {
	ID: 502,
	t: "Ratios",
	q: 50,
	d: 3500,
	prereqs: [504, 858]
	}, {
	ID: 803,
	t: "Area",
	q: 50,
	d: 3500,
	prereqs: [770]
	}, {
	ID: 798,
	t: "Data Relationships",
	q: 50,
	d: 3500,
	prereqs: [673, 671]
	}, {
	ID: 799,
	t: "Data Relationships",
	q: 50,
	d: 3500,
	prereqs: [1279]
	}, {
	ID: 843,
	t: "Conversion",
	q: 50,
	d: 3500,
	prereqs: [839, 1034]
	}, {
	ID: 846,
	t: "Conversion",
	q: 50,
	d: 3500,
	prereqs: [840, 1033]
	}, {
	ID: 858,
	t: "Ratios",
	q: 50,
	d: 3500,
	prereqs: [509]
	}, {
	ID: 900,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3500,
	prereqs: [722]
	}, {
	ID: 1033,
	t: "Conversion",
	q: 50,
	d: 3500,
	prereqs: []
	}, {
	ID: 1034,
	t: "Conversion",
	q: 50,
	d: 3500,
	prereqs: [327]
	}, {
	ID: 1014,
	t: "Fractions and Decimals",
	q: 50,
	d: 3500,
	prereqs: [337, 1027]
	}, {
	ID: 994,
	t: "Measurement",
	q: 20,
	d: 3500,
	prereqs: [1141]
	}, {
	ID: 1105,
	t: "Fractions: Comparing",
	q: 50,
	d: 3500,
	prereqs: [1104]
	}, {
	ID: 1178,
	t: "Fractions: Equivalent",
	q: 50,
	d: 3500,
	prereqs: [722, 1180]
	}, {
	ID: 1153,
	t: "Measurement",
	q: 36,
	d: 3500,
	prereqs: [991]
	}, {
	ID: 1109,
	t: "Decimals: Represent",
	q: 50,
	d: 3600,
	prereqs: [561]
	}, {
	ID: 986,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3600,
	prereqs: [900]
	}, {
	ID: 925,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3600,
	prereqs: [718, 733]
	}, {
	ID: 927,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3600,
	prereqs: [733, 718, 49]
	}, {
	ID: 943,
	t: "Ratios",
	q: 50,
	d: 3600,
	prereqs: [502, 858]
	}, {
	ID: 953,
	t: "Multiplication",
	q: 50,
	d: 3600,
	prereqs: [163]
	}, {
	ID: 1023,
	t: "Ratios",
	q: 50,
	d: 3600,
	prereqs: [858]
	}, {
	ID: 1032,
	t: "Conversion",
	q: 50,
	d: 3600,
	prereqs: [327, 801]
	}, {
	ID: 1038,
	t: "2D Shapes",
	q: 20,
	d: 3600,
	prereqs: [373]
	}, {
	ID: 1063,
	t: "Geometry",
	q: 50,
	d: 3600,
	prereqs: [284]
	}, {
	ID: 901,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3600,
	prereqs: [722]
	}, {
	ID: 849,
	t: "Division",
	q: 50,
	d: 3600,
	prereqs: [848, 162]
	}, {
	ID: 786,
	t: "Measurement",
	q: 50,
	d: 3600,
	prereqs: [801, 802]
	}, {
	ID: 765,
	t: "Fractions: Equivalent",
	q: 39,
	d: 3600,
	prereqs: [719, 720]
	}, {
	ID: 766,
	t: "Fractions: Equivalent",
	q: 39,
	d: 3600,
	prereqs: [719, 734, 765]
	}, {
	ID: 755,
	t: "Measurement",
	q: 50,
	d: 3600,
	prereqs: [801, 802]
	}, {
	ID: 829,
	t: "Multiplication",
	q: 50,
	d: 3600,
	prereqs: [163, 953]
	}, {
	ID: 494,
	t: "Measurement",
	q: 40,
	d: 3600,
	prereqs: [327]
	}, {
	ID: 508,
	t: "Ratios",
	q: 50,
	d: 3600,
	prereqs: []
	}, {
	ID: 512,
	t: "2D Shapes",
	q: 50,
	d: 3600,
	prereqs: [326]
	}, {
	ID: 522,
	t: "2D Shapes",
	q: 40,
	d: 3600,
	prereqs: []
	}, {
	ID: 564,
	t: "Division",
	q: 50,
	d: 3600,
	prereqs: [162]
	}, {
	ID: 531,
	t: "2D Shapes",
	q: 30,
	d: 3600,
	prereqs: [375]
	}, {
	ID: 691,
	t: "Angles",
	q: 50,
	d: 3600,
	prereqs: [512, 1175]
	}, {
	ID: 698,
	t: "Angles",
	q: 50,
	d: 3600,
	prereqs: [512]
	}, {
	ID: 723,
	t: "Fractions: Equivalent",
	q: 39,
	d: 3600,
	prereqs: []
	}, {
	ID: 715,
	t: "Fractions: Represent",
	q: 50,
	d: 3600,
	prereqs: [46, 722]
	}, {
	ID: 623,
	t: "Conversion",
	q: 50,
	d: 3600,
	prereqs: [327, 843, 839, 1034]
	}, {
	ID: 641,
	t: "Scientific Notation",
	q: 50,
	d: 3600,
	prereqs: [537]
	}, {
	ID: 642,
	t: "Scientific Notation",
	q: 50,
	d: 3600,
	prereqs: [537]
	}, {
	ID: 160,
	t: "Fractions: Comparing",
	q: 50,
	d: 3600,
	prereqs: [126, 46]
	}, {
	ID: 46,
	t: "Fractions: Equivalent",
	q: 50,
	d: 3600,
	prereqs: [126, 560, 720, 723, 1178]
	}, {
	ID: 117,
	t: "Patterning",
	q: 50,
	d: 3600,
	prereqs: [163, 162]
	}, {
	ID: 124,
	t: "Conversion",
	q: 50,
	d: 3600,
	prereqs: [180, 839, 1034]
	}, {
	ID: 381,
	t: "2D Shapes",
	q: 50,
	d: 3600,
	prereqs: [380]
	}, {
	ID: 375,
	t: "2D Shapes",
	q: 50,
	d: 3600,
	prereqs: [367, 380]
	}, {
	ID: 376,
	t: "Measurement",
	q: 50,
	d: 3600,
	prereqs: [369]
	}, {
	ID: 369,
	t: "2D Shapes",
	q: 50,
	d: 3600,
	prereqs: [770]
	}, {
	ID: 365,
	t: "Ratios",
	q: 44,
	d: 3700,
	prereqs: []
	}, {
	ID: 353,
	t: "Fractions: Comparing",
	q: 50,
	d: 3700,
	prereqs: []
	}, {
	ID: 354,
	t: "Fractions: Comparing",
	q: 50,
	d: 3700,
	prereqs: [160]
	}, {
	ID: 330,
	t: "Data Relationships",
	q: 50,
	d: 3700,
	prereqs: [1159]
	}, {
	ID: 331,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 3700,
	prereqs: []
	}, {
	ID: 332,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 3700,
	prereqs: [331]
	}, {
	ID: 333,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 3700,
	prereqs: [332, 358, 910, 997, 1044, 1160]
	}, {
	ID: 334,
	t: "Geometry",
	q: 50,
	d: 3700,
	prereqs: []
	}, {
	ID: 305,
	t: "Decimals: Multiplication",
	q: 50,
	d: 3700,
	prereqs: [290]
	}, {
	ID: 306,
	t: "Decimals: Division",
	q: 50,
	d: 3700,
	prereqs: [303]
	}, {
	ID: 106,
	t: "Fractions and Decimals",
	q: 50,
	d: 3700,
	prereqs: [219, 561]
	}, {
	ID: 640,
	t: "Scientific Notation",
	q: 50,
	d: 3700,
	prereqs: [641, 642]
	}, {
	ID: 724,
	t: "Fractions: Equivalent",
	q: 39,
	d: 3700,
	prereqs: [46]
	}, {
	ID: 721,
	t: "Fractions: Equivalent",
	q: 42,
	d: 3700,
	prereqs: [719]
	}, {
	ID: 527,
	t: "Measurement",
	q: 50,
	d: 3700,
	prereqs: [327]
	}, {
	ID: 529,
	t: "2D Shapes",
	q: 40,
	d: 3700,
	prereqs: []
	}, {
	ID: 530,
	t: "2D Shapes",
	q: 30,
	d: 3700,
	prereqs: [1038]
	}, {
	ID: 513,
	t: "Lines",
	q: 25,
	d: 3700,
	prereqs: [326]
	}, {
	ID: 810,
	t: "Multiplication",
	q: 50,
	d: 3700,
	prereqs: [829]
	}, {
	ID: 769,
	t: "2D Shapes",
	q: 50,
	d: 3700,
	prereqs: [381]
	}, {
	ID: 850,
	t: "Division",
	q: 50,
	d: 3700,
	prereqs: [849, 162]
	}, {
	ID: 844,
	t: "Conversion",
	q: 50,
	d: 3700,
	prereqs: [841, 490, 1032]
	}, {
	ID: 897,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3700,
	prereqs: [900]
	}, {
	ID: 891,
	t: "Fractions: Multiplication",
	q: 50,
	d: 3700,
	prereqs: [40, 715]
	}, {
	ID: 892,
	t: "Fractions: Equivalent",
	q: 50,
	d: 3700,
	prereqs: [40]
	}, {
	ID: 1044,
	t: "Expressions and Equations",
	q: 50,
	d: 3700,
	prereqs: [997, 1160]
	}, {
	ID: 1045,
	t: "3D Shapes",
	q: 18,
	d: 3700,
	prereqs: [351]
	}, {
	ID: 1047,
	t: "3D Shapes",
	q: 18,
	d: 3700,
	prereqs: [351]
	}, {
	ID: 1025,
	t: "Ratios",
	q: 50,
	d: 3700,
	prereqs: [943]
	}, {
	ID: 1022,
	t: "Ratios",
	q: 50,
	d: 3700,
	prereqs: [1023, 943]
	}, {
	ID: 934,
	t: "Mixed Operations",
	q: 50,
	d: 3700,
	prereqs: [462, 838, 849, 463]
	}, {
	ID: 937,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3700,
	prereqs: [901, 927]
	}, {
	ID: 964,
	t: "Division",
	q: 50,
	d: 3700,
	prereqs: [849]
	}, {
	ID: 965,
	t: "Division",
	q: 50,
	d: 3700,
	prereqs: []
	}, {
	ID: 1106,
	t: "Conversion",
	q: 50,
	d: 3700,
	prereqs: [841, 839]
	}, {
	ID: 1102,
	t: "Fractions: Equivalent",
	q: 50,
	d: 3700,
	prereqs: [724]
	}, {
	ID: 1082,
	t: "Geometry",
	q: 50,
	d: 3700,
	prereqs: [1063]
	}, {
	ID: 1122,
	t: "Conversion",
	q: 50,
	d: 3700,
	prereqs: [180, 303, 327]
	}, {
	ID: 1123,
	t: "Conversion",
	q: 50,
	d: 3700,
	prereqs: [180, 303, 1153]
	}, {
	ID: 1118,
	t: "Conversion",
	q: 50,
	d: 3700,
	prereqs: [180, 303, 124, 327, 994]
	}, {
	ID: 1119,
	t: "Conversion",
	q: 50,
	d: 3700,
	prereqs: [840, 1033, 1153]
	}, {
	ID: 1166,
	t: "Data Relationships",
	q: 50,
	d: 3700,
	prereqs: [799, 798]
	}, {
	ID: 624,
	t: "Variables, Expressions, and Equations",
	q: 40,
	d: 3750,
	prereqs: [333]
	}, {
	ID: 625,
	t: "Conversion",
	q: 50,
	d: 3800,
	prereqs: [489]
	}, {
	ID: 626,
	t: "Conversion",
	q: 50,
	d: 3800,
	prereqs: [491, 844, 841, 1032]
	}, {
	ID: 579,
	t: "Probability",
	q: 50,
	d: 3800,
	prereqs: []
	}, {
	ID: 580,
	t: "Probability",
	q: 50,
	d: 3800,
	prereqs: [579]
	}, {
	ID: 652,
	t: "Scientific Notation",
	q: 50,
	d: 3800,
	prereqs: [640]
	}, {
	ID: 286,
	t: "Multiplication",
	q: 50,
	d: 3800,
	prereqs: [163, 810, 837]
	}, {
	ID: 291,
	t: "Division",
	q: 50,
	d: 3800,
	prereqs: [851, 965, 963]
	}, {
	ID: 318,
	t: "Multiplication",
	q: 50,
	d: 3800,
	prereqs: [286]
	}, {
	ID: 360,
	t: "Fractions: Comparing",
	q: 50,
	d: 3800,
	prereqs: [160, 46]
	}, {
	ID: 361,
	t: "Patterning",
	q: 40,
	d: 3800,
	prereqs: [328]
	}, {
	ID: 362,
	t: "Patterning",
	q: 50,
	d: 3800,
	prereqs: [328]
	}, {
	ID: 328,
	t: "Patterning",
	q: 40,
	d: 3800,
	prereqs: [279]
	}, {
	ID: 339,
	t: "Variables, Expressions, and Equations",
	q: 48,
	d: 3800,
	prereqs: [333]
	}, {
	ID: 1066,
	t: "2D Shapes",
	q: 50,
	d: 3800,
	prereqs: [375, 380]
	}, {
	ID: 1103,
	t: "Fractions: Equivalent",
	q: 49,
	d: 3800,
	prereqs: [1102]
	}, {
	ID: 1110,
	t: "Rounding",
	q: 50,
	d: 3800,
	prereqs: [1109]
	}, {
	ID: 963,
	t: "Division",
	q: 50,
	d: 3800,
	prereqs: [965]
	}, {
	ID: 961,
	t: "Division",
	q: 50,
	d: 3800,
	prereqs: [965, 849, 964]
	}, {
	ID: 935,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3800,
	prereqs: [925, 986]
	}, {
	ID: 926,
	t: "Fractions: Comparing",
	q: 50,
	d: 3800,
	prereqs: [901, 927]
	}, {
	ID: 915,
	t: "Decimals: Division",
	q: 50,
	d: 3800,
	prereqs: [306]
	}, {
	ID: 1026,
	t: "Proportional Relationships",
	q: 40,
	d: 3800,
	prereqs: [1022]
	}, {
	ID: 1009,
	t: "Ratios",
	q: 50,
	d: 3800,
	prereqs: [1022]
	}, {
	ID: 1e3,
	t: "Exponents: Evaluate",
	q: 50,
	d: 3800,
	prereqs: [163, 973]
	}, {
	ID: 1048,
	t: "Expressions and Equations",
	q: 50,
	d: 3800,
	prereqs: [1044]
	}, {
	ID: 1052,
	t: "Geometry",
	q: 50,
	d: 3800,
	prereqs: [603, 602]
	}, {
	ID: 1074,
	t: "Decimals: Represent",
	q: 50,
	d: 3800,
	prereqs: [561]
	}, {
	ID: 912,
	t: "Decimals: Multiplication",
	q: 50,
	d: 3800,
	prereqs: [305]
	}, {
	ID: 913,
	t: "Decimals: Division",
	q: 50,
	d: 3800,
	prereqs: [306]
	}, {
	ID: 851,
	t: "Division",
	q: 50,
	d: 3800,
	prereqs: [849, 850]
	}, {
	ID: 872,
	t: "Decimals: Multiplication",
	q: 50,
	d: 3800,
	prereqs: [305]
	}, {
	ID: 859,
	t: "Data Relationships",
	q: 30,
	d: 3900,
	prereqs: [324]
	}, {
	ID: 860,
	t: "Proportional Relationships",
	q: 50,
	d: 3900,
	prereqs: [324]
	}, {
	ID: 861,
	t: "Proportional Relationships",
	q: 30,
	d: 3900,
	prereqs: [324]
	}, {
	ID: 914,
	t: "Decimals: Multiplication",
	q: 50,
	d: 3900,
	prereqs: [912]
	}, {
	ID: 890,
	t: "Fractions: Equivalent",
	q: 50,
	d: 3900,
	prereqs: [40, 724, 892]
	}, {
	ID: 1075,
	t: "Proportional Relationships",
	q: 50,
	d: 3900,
	prereqs: [1026]
	}, {
	ID: 1010,
	t: "Ratios",
	q: 50,
	d: 3900,
	prereqs: [1009]
	}, {
	ID: 1016,
	t: "Decimals: Comparing",
	q: 50,
	d: 3900,
	prereqs: [1014, 1109]
	}, {
	ID: 1021,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 3900,
	prereqs: [935]
	}, {
	ID: 929,
	t: "Fractions: Multiplication",
	q: 50,
	d: 3900,
	prereqs: [897]
	}, {
	ID: 939,
	t: "Fractions: Represent",
	q: 50,
	d: 3900,
	prereqs: [562, 897, 715]
	}, {
	ID: 908,
	t: "Fractions: Multiplication",
	q: 50,
	d: 3900,
	prereqs: [897]
	}, {
	ID: 952,
	t: "Fractions: Represent",
	q: 50,
	d: 3900,
	prereqs: [715, 897, 562]
	}, {
	ID: 957,
	t: "Probability",
	q: 50,
	d: 3900,
	prereqs: [579]
	}, {
	ID: 974,
	t: "Mixed Operations",
	q: 50,
	d: 3900,
	prereqs: [934, 417, 409]
	}, {
	ID: 967,
	t: "Mixed Operations",
	q: 50,
	d: 3900,
	prereqs: [974]
	}, {
	ID: 1120,
	t: "Conversion",
	q: 50,
	d: 3900,
	prereqs: [1119]
	}, {
	ID: 1121,
	t: "Conversion",
	q: 50,
	d: 3900,
	prereqs: [1119, 994]
	}, {
	ID: 1126,
	t: "Conversion",
	q: 50,
	d: 3900,
	prereqs: [1034, 1118]
	}, {
	ID: 1127,
	t: "Conversion",
	q: 50,
	d: 3900,
	prereqs: [1032, 1122]
	}, {
	ID: 1128,
	t: "Conversion",
	q: 50,
	d: 3900,
	prereqs: [1033, 1119]
	}, {
	ID: 1129,
	t: "Geometry",
	q: 50,
	d: 3900,
	prereqs: [1052]
	}, {
	ID: 1174,
	t: "Data Relationships",
	q: 50,
	d: 3900,
	prereqs: [1166]
	}, {
	ID: 1149,
	t: "Data Relationships",
	q: 8,
	d: 3900,
	prereqs: [329, 985]
	}, {
	ID: 341,
	t: "Conversion",
	q: 50,
	d: 3900,
	prereqs: [523]
	}, {
	ID: 355,
	t: "Probability",
	q: 50,
	d: 3900,
	prereqs: [497]
	}, {
	ID: 356,
	t: "Probability",
	q: 50,
	d: 3900,
	prereqs: [497]
	}, {
	ID: 377,
	t: "Probability",
	q: 50,
	d: 3900,
	prereqs: [497]
	}, {
	ID: 378,
	t: "Probability",
	q: 50,
	d: 3900,
	prereqs: [377, 957]
	}, {
	ID: 387,
	t: "3D Shapes",
	q: 20,
	d: 3900,
	prereqs: [375, 351]
	}, {
	ID: 385,
	t: "3D Shapes",
	q: 50,
	d: 3900,
	prereqs: [387]
	}, {
	ID: 319,
	t: "Division",
	q: 50,
	d: 3900,
	prereqs: [291]
	}, {
	ID: 315,
	t: "Multiplication",
	q: 50,
	d: 3900,
	prereqs: [318]
	}, {
	ID: 324,
	t: "Unit Rates",
	q: 50,
	d: 3900,
	prereqs: [318, 319, 502, 125]
	}, {
	ID: 653,
	t: "Scientific Notation",
	q: 50,
	d: 3900,
	prereqs: [652]
	}, {
	ID: 654,
	t: "Scientific Notation",
	q: 40,
	d: 3900,
	prereqs: [652]
	}, {
	ID: 701,
	t: "Pythagorean Theorem",
	q: 50,
	d: 3900,
	prereqs: [529]
	}, {
	ID: 617,
	t: "Data Relationships",
	q: 50,
	d: 3900,
	prereqs: [330]
	}, {
	ID: 528,
	t: "Patterning",
	q: 45,
	d: 3900,
	prereqs: [362, 361]
	}, {
	ID: 520,
	t: "Patterning",
	q: 25,
	d: 3900,
	prereqs: [328]
	}, {
	ID: 540,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 3900,
	prereqs: [339]
	}, {
	ID: 533,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4e3,
	prereqs: [339]
	}, {
	ID: 521,
	t: "Decimals",
	q: 50,
	d: 4e3,
	prereqs: [305, 912, 975]
	}, {
	ID: 518,
	t: "Decimals",
	q: 50,
	d: 4e3,
	prereqs: [306, 915]
	}, {
	ID: 618,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [356]
	}, {
	ID: 619,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [356]
	}, {
	ID: 639,
	t: "Radicals",
	q: 22,
	d: 4e3,
	prereqs: []
	}, {
	ID: 572,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 4e3,
	prereqs: [582, 500]
	}, {
	ID: 574,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4e3,
	prereqs: [572]
	}, {
	ID: 582,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 4e3,
	prereqs: [341]
	}, {
	ID: 655,
	t: "Linear Expressions",
	q: 30,
	d: 4e3,
	prereqs: [861]
	}, {
	ID: 660,
	t: "Linear Expressions",
	q: 50,
	d: 4e3,
	prereqs: [655, 860]
	}, {
	ID: 685,
	t: "Functions",
	q: 21,
	d: 4e3,
	prereqs: []
	}, {
	ID: 688,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4e3,
	prereqs: [639, 529]
	}, {
	ID: 322,
	t: "Decimals and Fractions",
	q: 50,
	d: 4e3,
	prereqs: [341]
	}, {
	ID: 386,
	t: "3D Shapes",
	q: 20,
	d: 4e3,
	prereqs: [387]
	}, {
	ID: 379,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [377]
	}, {
	ID: 357,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [356]
	}, {
	ID: 366,
	t: "3D Shapes",
	q: 50,
	d: 4e3,
	prereqs: [385]
	}, {
	ID: 342,
	t: "Conversion",
	q: 50,
	d: 4e3,
	prereqs: []
	}, {
	ID: 340,
	t: "Conversion",
	q: 50,
	d: 4e3,
	prereqs: []
	}, {
	ID: 1157,
	t: "Patterning",
	q: 50,
	d: 4e3,
	prereqs: [1129]
	}, {
	ID: 1158,
	t: "Patterning",
	q: 50,
	d: 4e3,
	prereqs: [1052]
	}, {
	ID: 1165,
	t: "Proportional Relationships",
	q: 50,
	d: 4e3,
	prereqs: [324]
	}, {
	ID: 1142,
	t: "Conversion",
	q: 50,
	d: 4e3,
	prereqs: [1118]
	}, {
	ID: 1143,
	t: "Conversion",
	q: 50,
	d: 4e3,
	prereqs: [1121]
	}, {
	ID: 1144,
	t: "Conversion",
	q: 50,
	d: 4e3,
	prereqs: [1122]
	}, {
	ID: 1145,
	t: "Conversion",
	q: 50,
	d: 4e3,
	prereqs: [1119]
	}, {
	ID: 1086,
	t: "Expressions and Equations",
	q: 48,
	d: 4e3,
	prereqs: [655]
	}, {
	ID: 1277,
	t: "Unit Rates",
	q: 30,
	d: 4e3,
	prereqs: [655]
	}, {
	ID: 989,
	t: "Measurement",
	q: 50,
	d: 4e3,
	prereqs: [769, 770]
	}, {
	ID: 975,
	t: "Decimals: Multiplication",
	q: 50,
	d: 4e3,
	prereqs: [912]
	}, {
	ID: 976,
	t: "Decimals: Multiplication",
	q: 50,
	d: 4e3,
	prereqs: [872, 521]
	}, {
	ID: 1002,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4e3,
	prereqs: [521, 1e3, 973]
	}, {
	ID: 1006,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [957]
	}, {
	ID: 1007,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [356]
	}, {
	ID: 1008,
	t: "Probability",
	q: 50,
	d: 4e3,
	prereqs: [356]
	}, {
	ID: 1055,
	t: "Expressions and Equations",
	q: 50,
	d: 4e3,
	prereqs: [997, 1160]
	}, {
	ID: 1051,
	t: "Expressions and Equations",
	q: 50,
	d: 4e3,
	prereqs: []
	}, {
	ID: 1049,
	t: "Expressions and Equations",
	q: 50,
	d: 4e3,
	prereqs: [1048]
	}, {
	ID: 899,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4e3,
	prereqs: [891, 908]
	}, {
	ID: 894,
	t: "Fractions: Comparing",
	q: 50,
	d: 4e3,
	prereqs: [892]
	}, {
	ID: 638,
	t: "Radicals",
	q: 22,
	d: 4050,
	prereqs: [532, 639]
	}, {
	ID: 656,
	t: "Linear Expressions",
	q: 30,
	d: 4100,
	prereqs: [1277]
	}, {
	ID: 699,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4100,
	prereqs: [701]
	}, {
	ID: 511,
	t: "Probability",
	q: 30,
	d: 4100,
	prereqs: [379]
	}, {
	ID: 525,
	t: "Probability",
	q: 35,
	d: 4100,
	prereqs: [511, 357]
	}, {
	ID: 541,
	t: "3D Shapes",
	q: 30,
	d: 4100,
	prereqs: [366]
	}, {
	ID: 343,
	t: "Conversion",
	q: 50,
	d: 4100,
	prereqs: [341, 340, 342]
	}, {
	ID: 323,
	t: "Decimals and Fractions",
	q: 50,
	d: 4100,
	prereqs: [106]
	}, {
	ID: 316,
	t: "Fractions: Comparing",
	q: 50,
	d: 4100,
	prereqs: [354, 353, 560]
	}, {
	ID: 320,
	t: "Fractions and Decimals",
	q: 50,
	d: 4100,
	prereqs: [323, 322, 922, 1016]
	}, {
	ID: 888,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4100,
	prereqs: [939, 952]
	}, {
	ID: 889,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4100,
	prereqs: [952, 939]
	}, {
	ID: 864,
	t: "Proportional Relationships",
	q: 50,
	d: 4100,
	prereqs: [859]
	}, {
	ID: 1056,
	t: "Geometry",
	q: 50,
	d: 4100,
	prereqs: [1052]
	}, {
	ID: 1057,
	t: "Geometry",
	q: 50,
	d: 4100,
	prereqs: [1052, 1056]
	}, {
	ID: 1017,
	t: "3D Shapes",
	q: 20,
	d: 4100,
	prereqs: [387, 1013]
	}, {
	ID: 1013,
	t: "3D Shapes",
	q: 20,
	d: 4100,
	prereqs: [387, 1012]
	}, {
	ID: 956,
	t: "Probability",
	q: 50,
	d: 4100,
	prereqs: [357]
	}, {
	ID: 990,
	t: "Measurement",
	q: 50,
	d: 4100,
	prereqs: [803, 770, 769]
	}, {
	ID: 995,
	t: "Decimals: Multiplication",
	q: 50,
	d: 4100,
	prereqs: [914, 976]
	}, {
	ID: 1085,
	t: "Expressions and Equations",
	q: 34,
	d: 4100,
	prereqs: [660]
	}, {
	ID: 1088,
	t: "Expressions and Equations",
	q: 48,
	d: 4100,
	prereqs: [655]
	}, {
	ID: 1079,
	t: "Probability",
	q: 50,
	d: 4100,
	prereqs: [1006]
	}, {
	ID: 1099,
	t: "Expressions and Equations",
	q: 50,
	d: 4100,
	prereqs: [1086]
	}, {
	ID: 1116,
	t: "Functions",
	q: 48,
	d: 4100,
	prereqs: [655]
	}, {
	ID: 1130,
	t: "Geometry",
	q: 50,
	d: 4100,
	prereqs: [1129]
	}, {
	ID: 1163,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4100,
	prereqs: [1051]
	}, {
	ID: 1164,
	t: "Proportional Relationships",
	q: 50,
	d: 4100,
	prereqs: [1165]
	}, {
	ID: 1161,
	t: "Patterning",
	q: 50,
	d: 4100,
	prereqs: [328]
	}, {
	ID: 1150,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4100,
	prereqs: [688]
	}, {
	ID: 1154,
	t: "Conversion",
	q: 36,
	d: 4100,
	prereqs: [1145, 1123]
	}, {
	ID: 1148,
	t: "Conversion",
	q: 45,
	d: 4100,
	prereqs: [1121, 1118]
	}, {
	ID: 1156,
	t: "Expressions and Equations",
	q: 50,
	d: 4100,
	prereqs: [974, 967]
	}, {
	ID: 1162,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4200,
	prereqs: [1163]
	}, {
	ID: 1179,
	t: "3D Shapes",
	q: 50,
	d: 4200,
	prereqs: [541]
	}, {
	ID: 1177,
	t: "Statistics",
	q: 50,
	d: 4200,
	prereqs: [1079]
	}, {
	ID: 1167,
	t: "Proportional Relationships",
	q: 50,
	d: 4200,
	prereqs: [1164]
	}, {
	ID: 1172,
	t: "Patterning",
	q: 50,
	d: 4200,
	prereqs: [1052]
	}, {
	ID: 1131,
	t: "Geometry",
	q: 50,
	d: 4200,
	prereqs: [1056, 1129]
	}, {
	ID: 1101,
	t: "Expressions and Equations",
	q: 50,
	d: 4200,
	prereqs: [1116]
	}, {
	ID: 1097,
	t: "Expressions and Equations",
	q: 50,
	d: 4200,
	prereqs: [1088]
	}, {
	ID: 1098,
	t: "Expressions and Equations",
	q: 50,
	d: 4200,
	prereqs: [1085]
	}, {
	ID: 983,
	t: "Probability",
	q: 50,
	d: 4200,
	prereqs: [525, 956]
	}, {
	ID: 1018,
	t: "Proportional Relationships",
	q: 50,
	d: 4200,
	prereqs: [506, 526]
	}, {
	ID: 1019,
	t: "Proportional Relationships",
	q: 50,
	d: 4200,
	prereqs: [1018]
	}, {
	ID: 1024,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [573]
	}, {
	ID: 1036,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [1024]
	}, {
	ID: 1037,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [878]
	}, {
	ID: 1064,
	t: "Geometry",
	q: 50,
	d: 4200,
	prereqs: [1013]
	}, {
	ID: 880,
	t: "Data Relationships",
	q: 50,
	d: 4200,
	prereqs: [669, 1174]
	}, {
	ID: 878,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [574]
	}, {
	ID: 800,
	t: "Data Relationships",
	q: 50,
	d: 4200,
	prereqs: [669, 603, 610, 1174]
	}, {
	ID: 571,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4200,
	prereqs: [582]
	}, {
	ID: 568,
	t: "Rational Numbers: Represent",
	q: 50,
	d: 4200,
	prereqs: [572]
	}, {
	ID: 526,
	t: "Conversion",
	q: 40,
	d: 4200,
	prereqs: [343]
	}, {
	ID: 658,
	t: "Linear Expressions",
	q: 30,
	d: 4200,
	prereqs: [656]
	}, {
	ID: 661,
	t: "Linear Expressions",
	q: 50,
	d: 4200,
	prereqs: [1099]
	}, {
	ID: 689,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4200,
	prereqs: [688]
	}, {
	ID: 681,
	t: "Functions",
	q: 50,
	d: 4200,
	prereqs: [624]
	}, {
	ID: 610,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [558, 901, 927]
	}, {
	ID: 573,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [574]
	}, {
	ID: 599,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4200,
	prereqs: [558, 925, 986]
	}, {
	ID: 608,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4300,
	prereqs: [599, 891, 892]
	}, {
	ID: 576,
	t: "Linear Expressions",
	q: 50,
	d: 4300,
	prereqs: [569]
	}, {
	ID: 651,
	t: "Irrational Numbers",
	q: 50,
	d: 4300,
	prereqs: [572]
	}, {
	ID: 694,
	t: "Data Relationships",
	q: 22,
	d: 4300,
	prereqs: [661]
	}, {
	ID: 695,
	t: "Data Relationships",
	q: 22,
	d: 4300,
	prereqs: [660]
	}, {
	ID: 659,
	t: "Linear Expressions",
	q: 30,
	d: 4300,
	prereqs: [658]
	}, {
	ID: 700,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4300,
	prereqs: [699]
	}, {
	ID: 569,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [573, 878]
	}, {
	ID: 804,
	t: "Data Relationships",
	q: 50,
	d: 4300,
	prereqs: [603, 669, 599]
	}, {
	ID: 882,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [573]
	}, {
	ID: 902,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [878]
	}, {
	ID: 865,
	t: "Proportional Relationships",
	q: 30,
	d: 4300,
	prereqs: [1101, 1097]
	}, {
	ID: 863,
	t: "Proportional Relationships",
	q: 50,
	d: 4300,
	prereqs: [1098]
	}, {
	ID: 854,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [610, 599, 927]
	}, {
	ID: 855,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [599, 610, 897]
	}, {
	ID: 977,
	t: "Proportional Relationships",
	q: 50,
	d: 4300,
	prereqs: [506, 526, 1018, 1019]
	}, {
	ID: 916,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [599, 888]
	}, {
	ID: 917,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [610, 889, 888]
	}, {
	ID: 1080,
	t: "Probability",
	q: 50,
	d: 4300,
	prereqs: [983]
	}, {
	ID: 1087,
	t: "Expressions and Equations",
	q: 48,
	d: 4300,
	prereqs: [865]
	}, {
	ID: 1090,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [599]
	}, {
	ID: 1091,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4300,
	prereqs: [610]
	}, {
	ID: 1170,
	t: "Proportional Relationships",
	q: 50,
	d: 4300,
	prereqs: [1167]
	}, {
	ID: 1171,
	t: "Ratios",
	q: 50,
	d: 4400,
	prereqs: [1025]
	}, {
	ID: 1176,
	t: "Statistics",
	q: 50,
	d: 4400,
	prereqs: [1177]
	}, {
	ID: 1155,
	t: "Measurement",
	q: 50,
	d: 4400,
	prereqs: [609]
	}, {
	ID: 1092,
	t: "Fractions: Comparing",
	q: 50,
	d: 4400,
	prereqs: [608]
	}, {
	ID: 1093,
	t: "Fractions: Comparing",
	q: 50,
	d: 4400,
	prereqs: [609]
	}, {
	ID: 1078,
	t: "3D Shapes",
	q: 32,
	d: 4400,
	prereqs: [385, 609]
	}, {
	ID: 1100,
	t: "Expressions and Equations",
	q: 50,
	d: 4400,
	prereqs: [1087]
	}, {
	ID: 1146,
	t: "Geometry",
	q: 50,
	d: 4400,
	prereqs: [1147]
	}, {
	ID: 1147,
	t: "Geometry",
	q: 50,
	d: 4400,
	prereqs: [1056]
	}, {
	ID: 1276,
	t: "Unit Rates",
	q: 30,
	d: 4400,
	prereqs: [659]
	}, {
	ID: 1065,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4400,
	prereqs: [1e3, 1002, 1001]
	}, {
	ID: 1058,
	t: "Geometry",
	q: 50,
	d: 4400,
	prereqs: [1056, 1130]
	}, {
	ID: 1001,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4400,
	prereqs: [609, 1002, 973]
	}, {
	ID: 866,
	t: "Proportional Relationships",
	q: 50,
	d: 4400,
	prereqs: [977]
	}, {
	ID: 874,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4400,
	prereqs: [608, 891, 892, 899, 929]
	}, {
	ID: 903,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4400,
	prereqs: [902]
	}, {
	ID: 905,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4400,
	prereqs: [882]
	}, {
	ID: 883,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4400,
	prereqs: [571]
	}, {
	ID: 881,
	t: "Data Relationships",
	q: 50,
	d: 4400,
	prereqs: [804, 608]
	}, {
	ID: 876,
	t: "Fractions: Division",
	q: 50,
	d: 4400,
	prereqs: [608]
	}, {
	ID: 817,
	t: "Exponents: Rules",
	q: 50,
	d: 4400,
	prereqs: [819]
	}, {
	ID: 818,
	t: "Exponents: Rules",
	q: 50,
	d: 4400,
	prereqs: [819]
	}, {
	ID: 819,
	t: "Exponents: Rules",
	q: 50,
	d: 4400,
	prereqs: [535]
	}, {
	ID: 820,
	t: "Exponents: Rules",
	q: 50,
	d: 4400,
	prereqs: [819]
	}, {
	ID: 570,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4400,
	prereqs: [571]
	}, {
	ID: 696,
	t: "Data Relationships",
	q: 22,
	d: 4400,
	prereqs: [694]
	}, {
	ID: 697,
	t: "Data Relationships",
	q: 22,
	d: 4400,
	prereqs: [695]
	}, {
	ID: 690,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4400,
	prereqs: [689]
	}, {
	ID: 644,
	t: "Irrational Numbers",
	q: 50,
	d: 4400,
	prereqs: [638, 645]
	}, {
	ID: 645,
	t: "Irrational Numbers",
	q: 50,
	d: 4400,
	prereqs: [651]
	}, {
	ID: 577,
	t: "Linear Expressions",
	q: 50,
	d: 4400,
	prereqs: [576]
	}, {
	ID: 609,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4400,
	prereqs: [608]
	}, {
	ID: 606,
	t: "Fractions: Division",
	q: 50,
	d: 4400,
	prereqs: [610, 608, 908]
	}, {
	ID: 578,
	t: "Linear Expressions",
	q: 50,
	d: 4500,
	prereqs: [577]
	}, {
	ID: 643,
	t: "Irrational Numbers",
	q: 30,
	d: 4500,
	prereqs: [644]
	}, {
	ID: 629,
	t: "Exponents: Rules",
	q: 50,
	d: 4500,
	prereqs: [818, 631]
	}, {
	ID: 630,
	t: "Exponents: Rules",
	q: 50,
	d: 4500,
	prereqs: [631, 817]
	}, {
	ID: 631,
	t: "Exponents: Rules",
	q: 50,
	d: 4500,
	prereqs: [819]
	}, {
	ID: 632,
	t: "Exponents: Rules",
	q: 50,
	d: 4500,
	prereqs: [631, 820]
	}, {
	ID: 877,
	t: "Fractions: Division",
	q: 50,
	d: 4500,
	prereqs: [606, 876]
	}, {
	ID: 886,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4500,
	prereqs: [883]
	}, {
	ID: 887,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4500,
	prereqs: [570]
	}, {
	ID: 904,
	t: "Rational Numbers: Addition and Subtraction",
	q: 50,
	d: 4500,
	prereqs: [905]
	}, {
	ID: 896,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4500,
	prereqs: [887]
	}, {
	ID: 875,
	t: "Fractions: Division",
	q: 50,
	d: 4500,
	prereqs: [606, 876]
	}, {
	ID: 873,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4500,
	prereqs: [609, 890]
	}, {
	ID: 1020,
	t: "Proportional Relationships",
	q: 50,
	d: 4500,
	prereqs: [1018, 1019]
	}, {
	ID: 1069,
	t: "Data Relationships",
	q: 50,
	d: 4500,
	prereqs: [669]
	}, {
	ID: 1070,
	t: "Data Relationships",
	q: 50,
	d: 4500,
	prereqs: [799]
	}, {
	ID: 1071,
	t: "Data Relationships",
	q: 30,
	d: 4500,
	prereqs: [1257]
	}, {
	ID: 918,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4500,
	prereqs: [599, 610]
	}, {
	ID: 919,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4500,
	prereqs: [609]
	}, {
	ID: 923,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4500,
	prereqs: [609]
	}, {
	ID: 930,
	t: "Fractions: Division",
	q: 50,
	d: 4500,
	prereqs: [606]
	}, {
	ID: 931,
	t: "Fractions: Division",
	q: 50,
	d: 4500,
	prereqs: [876]
	}, {
	ID: 932,
	t: "Data Relationships",
	q: 50,
	d: 4500,
	prereqs: [881, 606, 599]
	}, {
	ID: 978,
	t: "Proportional Relationships",
	q: 50,
	d: 4500,
	prereqs: []
	}, {
	ID: 1114,
	t: "Linear Expressions",
	q: 50,
	d: 4500,
	prereqs: []
	}, {
	ID: 1151,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4500,
	prereqs: [690]
	}, {
	ID: 1173,
	t: "Fractions: Comparing",
	q: 50,
	d: 4500,
	prereqs: [1092, 923]
	}, {
	ID: 1168,
	t: "Proportional Relationships",
	q: 50,
	d: 4500,
	prereqs: [866]
	}, {
	ID: 1152,
	t: "Pythagorean Theorem",
	q: 50,
	d: 4600,
	prereqs: [1151]
	}, {
	ID: 1132,
	t: "Geometry",
	q: 50,
	d: 4600,
	prereqs: [1147, 1131]
	}, {
	ID: 979,
	t: "Proportional Relationships",
	q: 50,
	d: 4600,
	prereqs: [978, 1168]
	}, {
	ID: 955,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4600,
	prereqs: [885, 533, 1162]
	}, {
	ID: 928,
	t: "Fractions: Division",
	q: 50,
	d: 4600,
	prereqs: [930]
	}, {
	ID: 924,
	t: "Fractions: Division",
	q: 50,
	d: 4600,
	prereqs: [931]
	}, {
	ID: 920,
	t: "Fractions: Multiplication",
	q: 50,
	d: 4600,
	prereqs: [873, 609, 919]
	}, {
	ID: 951,
	t: "Fractions: Division",
	q: 47,
	d: 4600,
	prereqs: [875]
	}, {
	ID: 945,
	t: "Fractions: Division",
	q: 50,
	d: 4600,
	prereqs: [875]
	}, {
	ID: 948,
	t: "Fractions: Division",
	q: 47,
	d: 4600,
	prereqs: [875]
	}, {
	ID: 949,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4600,
	prereqs: [885, 533]
	}, {
	ID: 936,
	t: "Fractions: Addition and Subtraction",
	q: 50,
	d: 4600,
	prereqs: [916, 917, 918, 888, 889]
	}, {
	ID: 1061,
	t: "Geometry",
	q: 50,
	d: 4600,
	prereqs: [1058]
	}, {
	ID: 856,
	t: "Unit Rates",
	q: 50,
	d: 4600,
	prereqs: [570, 571, 1170]
	}, {
	ID: 895,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4600,
	prereqs: [885]
	}, {
	ID: 893,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4600,
	prereqs: [887]
	}, {
	ID: 885,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4600,
	prereqs: [886]
	}, {
	ID: 822,
	t: "Exponents: Rules",
	q: 50,
	d: 4600,
	prereqs: [818, 820, 819, 817]
	}, {
	ID: 823,
	t: "Exponents: Evaluate",
	q: 40,
	d: 4600,
	prereqs: [826, 630]
	}, {
	ID: 824,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4600,
	prereqs: [629, 826]
	}, {
	ID: 826,
	t: "Exponents: Evaluate",
	q: 40,
	d: 4600,
	prereqs: [631]
	}, {
	ID: 827,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4600,
	prereqs: [826, 632]
	}, {
	ID: 663,
	t: "Linear Expressions",
	q: 50,
	d: 4600,
	prereqs: [578]
	}, {
	ID: 684,
	t: "Functions",
	q: 50,
	d: 4600,
	prereqs: [1114]
	}, {
	ID: 664,
	t: "Linear Expressions",
	q: 42,
	d: 4700,
	prereqs: [663]
	}, {
	ID: 662,
	t: "Linear Expressions",
	q: 50,
	d: 4700,
	prereqs: [663]
	}, {
	ID: 628,
	t: "Exponents: Rules",
	q: 50,
	d: 4700,
	prereqs: [630, 631, 632, 629]
	}, {
	ID: 634,
	t: "Exponents: Evaluate",
	q: 40,
	d: 4700,
	prereqs: [826]
	}, {
	ID: 635,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4700,
	prereqs: [634, 827]
	}, {
	ID: 636,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4700,
	prereqs: [824, 634]
	}, {
	ID: 637,
	t: "Exponents: Evaluate",
	q: 40,
	d: 4700,
	prereqs: [634, 823]
	}, {
	ID: 898,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4700,
	prereqs: [885]
	}, {
	ID: 907,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4700,
	prereqs: [893]
	}, {
	ID: 857,
	t: "Unit Rates",
	q: 50,
	d: 4700,
	prereqs: [856]
	}, {
	ID: 867,
	t: "Proportional Relationships",
	q: 50,
	d: 4700,
	prereqs: [979]
	}, {
	ID: 1053,
	t: "Geometry",
	q: 50,
	d: 4700,
	prereqs: [1061]
	}, {
	ID: 944,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4700,
	prereqs: [949]
	}, {
	ID: 950,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4700,
	prereqs: [955]
	}, {
	ID: 946,
	t: "Fractions: Division",
	q: 50,
	d: 4700,
	prereqs: [609, 606]
	}, {
	ID: 1107,
	t: "Geometry",
	q: 50,
	d: 4700,
	prereqs: [1061]
	}, {
	ID: 1260,
	t: "Data Relationships",
	q: 30,
	d: 4700,
	prereqs: [1071]
	}, {
	ID: 1115,
	t: "Functions",
	q: 50,
	d: 4800,
	prereqs: [664]
	}, {
	ID: 1124,
	t: "Geometry",
	q: 50,
	d: 4800,
	prereqs: [1053]
	}, {
	ID: 1125,
	t: "Geometry",
	q: 50,
	d: 4800,
	prereqs: [1107]
	}, {
	ID: 947,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4800,
	prereqs: [944]
	}, {
	ID: 954,
	t: "Variables, Expressions, and Equations",
	q: 50,
	d: 4800,
	prereqs: [950]
	}, {
	ID: 981,
	t: "Proportional Relationships",
	q: 50,
	d: 4800,
	prereqs: [867]
	}, {
	ID: 1062,
	t: "Geometry",
	q: 50,
	d: 4800,
	prereqs: [1053]
	}, {
	ID: 906,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4800,
	prereqs: [907]
	}, {
	ID: 828,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4800,
	prereqs: [824, 827, 826, 823]
	}, {
	ID: 581,
	t: "Unit Rates",
	q: 50,
	d: 4800,
	prereqs: [857]
	}, {
	ID: 665,
	t: "Linear Expressions",
	q: 42,
	d: 4800,
	prereqs: [664, 684, 685]
	}, {
	ID: 666,
	t: "Linear Expressions",
	q: 36,
	d: 4800,
	prereqs: [664]
	}, {
	ID: 686,
	t: "Functions",
	q: 40,
	d: 4800,
	prereqs: [1115]
	}, {
	ID: 679,
	t: "Linear Expressions",
	q: 27,
	d: 4900,
	prereqs: [665]
	}, {
	ID: 680,
	t: "Linear Expressions",
	q: 30,
	d: 4900,
	prereqs: [666]
	}, {
	ID: 633,
	t: "Exponents: Evaluate",
	q: 50,
	d: 4900,
	prereqs: [628, 634, 637, 636, 635]
	}, {
	ID: 884,
	t: "Rational Numbers: Multiplication and Division",
	q: 50,
	d: 4900,
	prereqs: [885]
	}, {
	ID: 1042,
	t: "Proportional Relationships",
	q: 50,
	d: 4900,
	prereqs: [581]
	}, {
	ID: 1039,
	t: "Unit Rates",
	q: 50,
	d: 4900,
	prereqs: [581]
	}, {
	ID: 1040,
	t: "Unit Rates",
	q: 50,
	d: 4900,
	prereqs: [581]
	}, {
	ID: 980,
	t: "Proportional Relationships",
	q: 50,
	d: 4900,
	prereqs: [981]
	}, {
	ID: 941,
	t: "Rational Numbers: Mixed Operations",
	q: 50,
	d: 4900,
	prereqs: [906, 898]
	}, {
	ID: 1134,
	t: "Geometry",
	q: 50,
	d: 4900,
	prereqs: [1125]
	}, {
	ID: 1135,
	t: "Geometry",
	q: 50,
	d: 4900,
	prereqs: [1124]
	}, {
	ID: 1139,
	t: "Geometry",
	q: 50,
	d: 4900,
	prereqs: [1062]
	}, {
	ID: 1108,
	t: "Expressions and Equations",
	q: 48,
	d: 4900,
	prereqs: [660, 686]
	}, {
	ID: 1081,
	t: "Geometry",
	q: 50,
	d: 4900,
	prereqs: [1062]
	}, {
	ID: 1169,
	t: "Proportional Relationships",
	q: 50,
	d: 4900,
	prereqs: [981]
	}, {
	ID: 1111,
	t: "Expressions and Equations",
	q: 50,
	d: 5e3,
	prereqs: [1108]
	}, {
	ID: 1140,
	t: "Geometry",
	q: 50,
	d: 5e3,
	prereqs: [1135]
	}, {
	ID: 1138,
	t: "Geometry",
	q: 50,
	d: 5e3,
	prereqs: [1139]
	}, {
	ID: 1136,
	t: "Geometry",
	q: 50,
	d: 5e3,
	prereqs: [1081]
	}, {
	ID: 942,
	t: "Linear Expressions",
	q: 50,
	d: 5e3,
	prereqs: [884]
	}, {
	ID: 940,
	t: "Rational Numbers: Mixed Operations",
	q: 50,
	d: 5e3,
	prereqs: [941]
	}, {
	ID: 1041,
	t: "Unit Rates",
	q: 50,
	d: 5e3,
	prereqs: [1039]
	}, {
	ID: 868,
	t: "Proportional Relationships",
	q: 50,
	d: 5e3,
	prereqs: [980, 1169]
	}, {
	ID: 982,
	t: "Proportional Relationships",
	q: 50,
	d: 5100,
	prereqs: [868]
	}, {
	ID: 1137,
	t: "Geometry",
	q: 50,
	d: 5100,
	prereqs: [1138]
	}, {
	ID: 1113,
	t: "Expressions and Equations",
	q: 48,
	d: 5100,
	prereqs: [667, 681]
	}, {
	ID: 1083,
	t: "Geometry",
	q: 50,
	d: 5100,
	prereqs: [1136]
	}, {
	ID: 682,
	t: "Functions",
	q: 40,
	d: 5100,
	prereqs: [1111]
	}, {
	ID: 667,
	t: "Linear Expressions",
	q: 40,
	d: 5100,
	prereqs: [682]
	}, {
	ID: 687,
	t: "Functions",
	q: 40,
	d: 5200,
	prereqs: [667]
	}, {
	ID: 1112,
	t: "Expressions and Equations",
	q: 50,
	d: 5200,
	prereqs: [1113]
	}, {
	ID: 1133,
	t: "Geometry",
	q: 50,
	d: 5200,
	prereqs: [1083]
	}, {
	ID: 869,
	t: "Proportional Relationships",
	q: 50,
	d: 5200,
	prereqs: [982]
	}, {
	ID: 1084,
	t: "Geometry",
	q: 31,
	d: 5300,
	prereqs: [665, 666, 687]
	}, {
	ID: 683,
	t: "Functions",
	q: 40,
	d: 5300,
	prereqs: [1112]
	}, {
	ID: 678,
	t: "Linear Expressions",
	q: 40,
	d: 5400,
	prereqs: [1084]
	}], Prodigy.SkillTree.TREES = {
	1: {
		3: [1265],
		4: [1185],
		6: [1224],
		7: [1224],
		25: [],
		26: [],
		27: [],
		28: [38, 39],
		29: [40],
		31: [555],
		32: [555],
		33: [555],
		34: [555],
		35: [555],
		36: [555],
		37: [555],
		38: [555],
		46: [1103],
		49: [232],
		50: [1265],
		51: [59],
		52: [1186],
		59: [],
		64: [805],
		65: [911],
		68: [128],
		72: [],
		73: [],
		74: [],
		76: [77],
		77: [1217, 1218],
		82: [1189],
		83: [1190],
		86: [1208],
		87: [1186, 1207],
		89: [],
		90: [],
		91: [94],
		94: [],
		95: [94],
		96: [94],
		97: [96],
		98: [],
		103: [94, 95, 96, 97],
		107: [1187],
		108: [1188],
		109: [92],
		111: [49, 50],
		113: [714],
		114: [714],
		116: [773],
		120: [713],
		124: [62],
		126: [1180],
		127: [847],
		128: [127],
		129: [127],
		130: [128],
		136: [50],
		137: [50],
		138: [50],
		140: [50, 49],
		143: [186, 1232],
		144: [1232, 186],
		146: [751],
		148: [],
		149: [],
		154: [186],
		158: [],
		160: [1011],
		162: [816],
		163: [825],
		164: [1224],
		165: [1217],
		166: [1217],
		174: [712],
		175: [1244, 1245],
		176: [],
		177: [],
		178: [1224, 1217],
		179: [808],
		182: [241, 166],
		185: [1231],
		186: [185],
		187: [345],
		194: [1016],
		195: [1016],
		196: [224],
		197: [224],
		198: [197],
		205: [704],
		215: [231],
		218: [495],
		224: [231],
		225: [226],
		227: [231],
		228: [1187],
		229: [89, 90],
		230: [1186, 1185],
		231: [92, 93],
		232: [231, 98],
		233: [197],
		237: [],
		240: [454],
		241: [1224],
		242: [713],
		243: [713],
		246: [713],
		247: [713],
		248: [714],
		249: [1245],
		250: [714],
		251: [714],
		252: [210],
		256: [255, 257],
		259: [258],
		260: [258],
		261: [258],
		264: [263],
		265: [263],
		266: [263],
		268: [712],
		269: [270],
		270: [1095],
		272: [273],
		273: [284],
		277: [],
		283: [],
		284: [455],
		285: [287],
		286: [810],
		288: [966],
		291: [963],
		318: [321],
		322: [320],
		323: [320],
		329: [338, 206, 591],
		332: [305, 306],
		334: [1052],
		339: [331],
		344: [345],
		348: [1232],
		349: [1232],
		350: [1232],
		351: [384],
		353: [560],
		354: [560],
		355: [356],
		359: [358],
		360: [890],
		361: [328],
		362: [361],
		364: [363],
		366: [372],
		367: [372],
		369: [373],
		372: [373],
		374: [373],
		375: [373],
		376: [373],
		378: [377],
		379: [377],
		381: [380],
		382: [351],
		384: [],
		385: [372],
		386: [1013],
		387: [1013],
		388: [196, 197],
		389: [3, 103],
		390: [1187, 1186],
		391: [],
		395: [1211],
		396: [1219],
		398: [1211, 1219],
		399: [],
		400: [3],
		401: [136],
		406: [713, 714],
		408: [185],
		409: [714],
		412: [182],
		414: [911, 805],
		415: [162],
		416: [163],
		417: [713],
		419: [120, 121],
		424: [93],
		425: [92],
		426: [],
		427: [],
		428: [],
		429: [426, 427, 428, 72],
		430: [],
		431: [],
		432: [],
		434: [],
		436: [],
		437: [],
		438: [94],
		439: [],
		440: [],
		441: [186],
		442: [186],
		443: [185],
		444: [185],
		445: [128],
		446: [128],
		447: [128],
		448: [128],
		451: [4, 1208],
		452: [1207],
		453: [1186],
		454: [233],
		455: [456],
		457: [454],
		458: [454],
		459: [457, 458],
		460: [429],
		462: [707],
		463: [709],
		465: [1076],
		466: [1076],
		467: [128],
		473: [470],
		475: [470],
		476: [471],
		477: [478],
		479: [478],
		480: [226],
		481: [226],
		482: [226],
		483: [480],
		484: [483],
		485: [484],
		489: [180],
		490: [180],
		491: [180],
		497: [1103],
		500: [998],
		501: [998],
		503: [519],
		507: [998],
		512: [1054],
		515: [514],
		516: [1016],
		517: [1016],
		519: [998],
		523: [341],
		524: [341],
		525: [357],
		528: [359],
		529: [535],
		530: [535],
		531: [1038],
		533: [538, 341],
		534: [538],
		540: [534],
		541: [530],
		543: [72, 74],
		544: [],
		546: [50],
		547: [74],
		548: [545],
		549: [1233, 1239],
		550: [241],
		552: [185],
		559: [516, 517],
		562: [925],
		567: [1109],
		583: [712],
		584: [],
		586: [754, 1094],
		587: [1094, 754],
		589: [352],
		591: [602],
		592: [603],
		593: [600],
		594: [601],
		595: [602],
		596: [603],
		597: [602],
		598: [603],
		599: [925],
		600: [602],
		601: [603],
		605: [344],
		607: [345],
		610: [927],
		611: [345],
		612: [486],
		618: [356],
		619: [356],
		620: [621],
		621: [613],
		622: [620],
		623: [1126],
		624: [331],
		626: [1127],
		672: [676, 53],
		673: [53, 677],
		674: [676],
		675: [677],
		702: [758],
		704: [781],
		705: [758],
		706: [781],
		707: [706],
		708: [783],
		713: [1233],
		714: [1239],
		716: [713],
		721: [724],
		723: [753, 766],
		724: [723, 718, 1178],
		728: [677],
		730: [1178],
		735: [733],
		736: [733],
		754: [1095],
		759: [756],
		760: [756],
		762: [1244],
		763: [1245],
		765: [719],
		766: [1027, 765],
		767: [722],
		769: [380],
		770: [380],
		772: [756],
		773: [758],
		775: [781],
		777: [713],
		778: [714],
		780: [714],
		781: [756],
		785: [],
		786: [756],
		788: [830],
		790: [789],
		791: [789],
		792: [789],
		805: [713],
		806: [815],
		807: [816],
		808: [821],
		809: [825],
		810: [829],
		813: [805],
		814: [911],
		816: [815],
		825: [821],
		830: [787],
		832: [713],
		835: [714],
		838: [821],
		839: [62],
		841: [180],
		843: [180],
		849: [816],
		852: [1217, 1218],
		854: [927],
		855: [925],
		859: [1165],
		861: [1165],
		864: [859, 863],
		865: [863, 861],
		866: [340],
		867: [979],
		868: [981],
		869: [982],
		870: [805],
		871: [911],
		873: [946],
		874: [606],
		876: [609],
		888: [927, 925],
		892: [890],
		911: [714],
		918: [927, 925],
		919: [946],
		920: [606],
		924: [876],
		926: [927, 925],
		928: [606],
		935: [925],
		939: [952],
		946: [609],
		961: [964],
		963: [965],
		967: [974],
		973: [535],
		974: [997],
		977: [340],
		978: [866],
		979: [866],
		980: [868],
		981: [866],
		982: [980],
		995: [521],
		1011: [939],
		1013: [372],
		1014: [922, 563],
		1016: [1014],
		1017: [372],
		1020: [869],
		1021: [927, 925],
		1028: [241],
		1029: [166],
		1030: [710],
		1031: [710],
		1034: [62],
		1044: [1048],
		1048: [113, 114, 115, 116],
		1054: [211, 326],
		1055: [974],
		1056: [998],
		1060: [998],
		1066: [769],
		1073: [789],
		1076: [1109],
		1077: [714, 713],
		1081: [1062, 1061, 1053],
		1083: [1081, 1136],
		1090: [925],
		1091: [927],
		1094: [712],
		1095: [733, 77],
		1096: [1244, 1245],
		1102: [1103],
		1103: [723],
		1104: [723],
		1105: [1011],
		1107: [1061],
		1124: [1053],
		1125: [1061],
		1130: [1052],
		1133: [1083],
		1134: [1061],
		1135: [1053],
		1137: [1062],
		1138: [1062],
		1139: [1062],
		1140: [1053],
		1155: [609],
		1157: [613],
		1158: [613],
		1161: [621],
		1172: [1157],
		1178: [1180],
		1181: [1187],
		1182: [1188],
		1186: [98],
		1187: [1185],
		1188: [1186],
		1189: [1185],
		1190: [1186],
		1191: [1207],
		1192: [1211],
		1193: [1186],
		1194: [1207],
		1195: [1208],
		1197: [1219],
		1202: [1211],
		1206: [1202],
		1207: [1188, 1186],
		1208: [1187],
		1209: [1188, 1186],
		1210: [1187, 1189],
		1211: [1218],
		1212: [1185, 1186],
		1213: [1217],
		1214: [1218],
		1215: [1213],
		1216: [1214],
		1217: [],
		1218: [],
		1219: [1217],
		1221: [1219],
		1222: [1221],
		1224: [545, 4, 1187],
		1227: [1224, 543],
		1228: [1185],
		1231: [1232],
		1233: [158, 185],
		1235: [1237, 1236],
		1236: [1245],
		1237: [1244],
		1239: [177],
		1242: [1244],
		1243: [1245],
		1246: [1248],
		1247: [1249],
		1248: [1249],
		1251: [1186, 1185],
		1254: [1274, 1217],
		1255: [269],
		1265: [231],
		1266: [231],
		1269: [1265],
		1270: [],
		1271: [232],
		1272: [1265],
		1278: [],
		1279: [],
		1280: [677],
		1281: [1224, 1217],
		1282: [],
		1283: [],
		1284: [],
		1285: [],
		1286: [],
		1287: [],
		1288: [],
		1289: [],
		1290: [555],
		1291: [555],
		1292: [555],
		1293: [555],
		1294: [555],
		1295: [555],
		1296: [555],
		1305: [],
		1306: [],
		1307: [],
		1308: [],
		1309: [],
		1310: [],
		1311: [],
		1312: [],
		1316: [],
		1317: [],
		1319: [],
		1323: [],
		1324: [],
		1325: [],
		1326: [],
		1327: [],
		1328: [],
		1329: [],
		1330: [],
		1331: [],
		1332: [],
		1333: [],
		1334: [],
		1335: [],
		1336: [],
		1337: [],
		1338: [],
		1340: [],
		1341: [],
		1344: [],
		1345: [],
		1346: [],
		1348: [],
		1349: [97],
		1350: [],
		1351: [],
		1352: [],
		1353: []
	},
	2: {
		4: [1187],
		25: [32, 33],
		26: [34, 35],
		27: [36, 37],
		28: [38, 39],
		29: [40],
		31: [555],
		32: [555],
		33: [555],
		34: [555],
		35: [555],
		36: [555],
		37: [555],
		38: [555],
		39: [555],
		40: [555],
		46: [1178],
		49: [232],
		52: [1186],
		60: [],
		64: [805],
		65: [911],
		68: [752],
		76: [712],
		82: [1181, 1189],
		83: [1182],
		84: [1252],
		86: [1208],
		87: [1207, 1186],
		89: [],
		90: [],
		91: [],
		107: [1187],
		108: [1188],
		110: [1228],
		111: [49],
		115: [756],
		116: [758],
		124: [180],
		127: [185],
		140: [49],
		146: [751],
		148: [],
		149: [],
		154: [186],
		158: [],
		160: [767],
		162: [849],
		166: [1217],
		174: [712],
		175: [714, 713],
		180: [812, 811],
		182: [714, 713],
		184: [710],
		185: [1231],
		186: [185],
		196: [224],
		197: [224],
		198: [197],
		207: [848],
		215: [231],
		223: [1149],
		224: [231],
		227: [231],
		228: [1187],
		229: [],
		230: [1186, 1185],
		231: [92, 93],
		232: [231, 98],
		237: [440, 439],
		238: [1204],
		239: [1228],
		240: [454],
		242: [713],
		243: [713],
		246: [713],
		247: [713],
		248: [714],
		249: [714],
		250: [714],
		251: [714],
		252: [210],
		268: [279],
		270: [279],
		271: [40],
		283: [1035, 974],
		285: [287],
		286: [829],
		287: [],
		288: [966],
		289: [968],
		291: [963],
		306: [291],
		316: [894],
		320: [1014],
		327: [839, 841],
		329: [1149],
		330: [223],
		331: [961],
		332: [305, 306],
		333: [1049],
		334: [1130],
		339: [333],
		355: [957],
		359: [358],
		363: [324],
		366: [385],
		367: [372],
		378: [957, 582],
		379: [957],
		385: [825],
		386: [383, 387],
		387: [372],
		388: [196, 197],
		389: [1201],
		391: [436, 437, 148, 149],
		392: [1229],
		393: [1230],
		409: [311],
		414: [65],
		417: [243],
		432: [],
		436: [237],
		437: [237],
		438: [1198],
		439: [1201, 98],
		440: [98, 1201],
		443: [185],
		444: [185],
		449: [789],
		457: [454],
		458: [454],
		459: [457, 458],
		462: [707],
		465: [1016],
		466: [1016],
		473: [470],
		474: [471],
		475: [470],
		476: [471],
		499: [507],
		500: [999],
		501: [999],
		502: [509],
		503: [999],
		506: [502],
		507: [998],
		508: [502],
		511: [957],
		525: [957],
		540: [333],
		543: [1204],
		545: [],
		547: [543, 1275],
		548: [60],
		552: [185],
		554: [753],
		556: [752],
		557: [753],
		558: [563],
		559: [1016],
		560: [894],
		562: [986],
		564: [851],
		565: [837],
		569: [882, 878],
		570: [896],
		571: [895],
		576: [1036, 1037],
		579: [580],
		581: [857],
		583: [279],
		584: [279],
		586: [279],
		587: [279],
		595: [602],
		596: [603],
		597: [602],
		598: [603],
		599: [1090],
		606: [609],
		610: [1091],
		628: [822],
		629: [818, 819],
		630: [817],
		631: [819],
		632: [820],
		633: [822],
		634: [819],
		635: [820],
		636: [818, 819],
		637: [817],
		638: [536],
		639: [638],
		640: [642],
		641: [535, 303],
		642: [641],
		643: [644],
		644: [638],
		645: [644],
		646: [647],
		647: [648],
		649: [647],
		650: [647],
		652: [641],
		653: [817],
		654: [818],
		658: [1277],
		659: [1277],
		660: [1097],
		661: [1086],
		662: [663],
		664: [681],
		665: [663],
		666: [663],
		667: [1098],
		670: [668, 1186, 1187],
		671: [669, 1187, 1186],
		672: [676, 53],
		673: [53, 677],
		674: [676],
		675: [677],
		678: [665, 1100],
		679: [665],
		680: [665],
		682: [1097],
		683: [665, 681],
		684: [1114],
		685: [684],
		688: [701],
		689: [699],
		690: [700],
		694: [1097],
		695: [1097],
		696: [1086],
		697: [1115],
		699: [701],
		700: [699],
		701: [535],
		704: [756],
		705: [758],
		706: [781],
		707: [706],
		708: [782],
		709: [708],
		710: [783],
		713: [1231],
		714: [1231],
		716: [713],
		718: [722],
		719: [720],
		721: [1180],
		724: [1180],
		726: [603],
		728: [677],
		730: [720],
		733: [75],
		734: [1027],
		735: [733],
		736: [733],
		751: [],
		753: [1246],
		754: [1095],
		755: [758],
		758: [756],
		759: [756],
		760: [756],
		761: [758],
		762: [713],
		763: [714],
		765: [734],
		766: [721],
		772: [756],
		773: [758],
		775: [781],
		776: [782],
		777: [713],
		780: [714],
		781: [756],
		782: [758],
		783: [183],
		786: [756],
		787: [789],
		788: [789],
		790: [789],
		791: [789],
		792: [789],
		793: [751],
		794: [752],
		797: [788, 847],
		800: [901],
		801: [713],
		802: [713],
		804: [900],
		806: [815],
		807: [816],
		808: [821],
		809: [825],
		810: [829],
		813: [911],
		814: [805],
		822: [818, 817, 819, 820],
		823: [817],
		824: [818, 819],
		826: [819],
		827: [820],
		828: [822],
		830: [789],
		832: [713],
		834: [714],
		835: [714],
		843: [839],
		844: [841],
		846: [840],
		847: [789],
		851: [850],
		852: [1028, 1029],
		854: [610],
		855: [610],
		858: [509],
		863: [1075],
		864: [997],
		865: [997],
		866: [506],
		867: [866],
		868: [981],
		869: [982],
		870: [805],
		871: [911],
		873: [609],
		875: [608],
		876: [609],
		877: [609],
		878: [582, 1037],
		880: [916],
		881: [608],
		882: [1036, 582],
		883: [895],
		884: [895],
		885: [895, 896],
		886: [895],
		887: [896, 895],
		888: [952],
		889: [952],
		891: [908],
		892: [1178],
		893: [896],
		894: [890],
		895: [582],
		896: [582],
		897: [986],
		898: [895],
		899: [908],
		902: [1037, 582],
		903: [1037, 582],
		904: [582, 1036],
		905: [582, 1036],
		906: [896],
		907: [896],
		918: [599, 610],
		919: [609],
		920: [609],
		924: [876, 931],
		925: [900],
		926: [1011, 927, 925],
		928: [606, 930],
		929: [908],
		930: [606],
		931: [876],
		932: [599, 606, 609],
		935: [925],
		936: [916, 917],
		937: [927],
		939: [952],
		940: [896, 895],
		941: [895, 896],
		942: [576, 577],
		943: [502],
		944: [949],
		945: [510],
		946: [510],
		947: [949],
		948: [945],
		949: [582, 895],
		950: [955],
		951: [510],
		954: [955],
		955: [895, 582],
		956: [511],
		959: [279],
		960: [279],
		961: [964],
		962: [40],
		963: [965],
		969: [289],
		970: [288],
		971: [288],
		972: [288],
		973: [535],
		976: [975],
		977: [506],
		978: [866],
		979: [866],
		980: [868],
		981: [866],
		982: [980],
		983: [957],
		984: [223],
		985: [223],
		986: [900],
		987: [962],
		988: [962],
		991: [840, 974],
		993: [1035, 974],
		994: [974],
		995: [975],
		996: [711],
		997: [909],
		1004: [711],
		1006: [957],
		1007: [379],
		1008: [957],
		1009: [506],
		1010: [506],
		1011: [894],
		1012: [1045],
		1013: [1017],
		1014: [561],
		1015: [793, 795, 794],
		1016: [1014],
		1021: [901, 900],
		1022: [502],
		1023: [502],
		1024: [1036],
		1025: [506],
		1026: [861],
		1027: [718],
		1028: [243],
		1029: [249],
		1030: [565],
		1031: [564],
		1032: [841],
		1033: [840],
		1034: [839],
		1036: [573],
		1037: [573],
		1041: [324],
		1042: [506],
		1043: [577, 578, 576],
		1044: [1049],
		1048: [1049],
		1051: [1049],
		1055: [997, 1048],
		1059: [999],
		1060: [999],
		1075: [864, 865],
		1078: [385],
		1079: [957],
		1080: [957],
		1081: [1062, 1053, 1061],
		1083: [1081, 1136],
		1085: [1115],
		1087: [1088],
		1094: [712],
		1095: [733, 77],
		1096: [713, 714],
		1098: [1115],
		1099: [1086],
		1100: [1097],
		1102: [719],
		1103: [719],
		1107: [1061],
		1108: [1115],
		1110: [566, 567, 51],
		1111: [1115],
		1112: [1097],
		1113: [1088],
		1118: [180],
		1122: [180],
		1123: [180],
		1124: [1053],
		1125: [1061],
		1126: [180],
		1130: [1129, 1052],
		1132: [1146],
		1133: [1083],
		1134: [1061],
		1135: [1053],
		1137: [1062],
		1138: [1062],
		1139: [1062],
		1140: [1053],
		1141: [934],
		1142: [1118, 1073],
		1146: [1056],
		1147: [1056],
		1148: [1118, 1121],
		1150: [701],
		1151: [701],
		1152: [1151],
		1153: [846, 840],
		1154: [1119, 1123],
		1159: [223],
		1160: [909],
		1162: [1163],
		1164: [1165],
		1165: [324],
		1167: [324],
		1168: [1019],
		1169: [1018],
		1170: [324],
		1172: [1157, 1158],
		1179: [541],
		1180: [720],
		1181: [1187],
		1182: [1188],
		1183: [1229],
		1184: [1230],
		1185: [1203],
		1186: [98],
		1187: [1185],
		1188: [1186],
		1189: [1185],
		1190: [1186],
		1191: [1194],
		1192: [1211],
		1193: [1195],
		1194: [1193, 1185],
		1195: [1186],
		1196: [1204],
		1197: [1219],
		1198: [],
		1199: [1198],
		1200: [1198],
		1201: [1198, 1199, 1200],
		1202: [1211],
		1203: [],
		1204: [231],
		1205: [],
		1206: [1202],
		1207: [1188],
		1208: [1187],
		1209: [1188],
		1210: [1187],
		1211: [1218],
		1212: [1186, 1185],
		1213: [1217],
		1214: [1218],
		1215: [1213],
		1216: [1214],
		1219: [1217],
		1220: [237],
		1221: [1219],
		1222: [1221],
		1223: [1187, 1204],
		1224: [1204, 1187],
		1227: [543, 1224],
		1228: [1187],
		1229: [1187],
		1230: [1188],
		1231: [1232],
		1232: [238],
		1233: [1225],
		1234: [1229, 228],
		1236: [1245],
		1237: [1244],
		1241: [127],
		1242: [1244],
		1243: [1245],
		1246: [1248],
		1247: [1249],
		1248: [1249],
		1250: [240, 457, 458],
		1251: [1185, 1186],
		1254: [1188],
		1256: [1259],
		1259: [231],
		1264: [231],
		1265: [1259, 1264],
		1266: [98],
		1267: [98, 1201],
		1268: [1204],
		1269: [1265],
		1270: [],
		1271: [1266],
		1272: [1265],
		1279: [1027],
		1280: [677],
		1281: [1211, 1219],
		1286: [],
		1287: [],
		1288: [],
		1289: [],
		1305: [1268],
		1306: [],
		1307: [],
		1308: [],
		1309: [],
		1310: [],
		1311: [],
		1312: [],
		1316: [],
		1334: [],
		1338: [1268],
		1342: [],
		1343: [],
		1344: [],
		1345: [],
		1348: [1204],
		1350: [1204],
		1351: [1204],
		1352: [1204]
	},
	3: {
		4: [1187],
		25: [32, 33],
		26: [34, 35],
		27: [36, 37],
		28: [38, 39],
		29: [40],
		31: [555],
		32: [555],
		33: [555],
		34: [555],
		35: [555],
		36: [555],
		37: [555],
		38: [555],
		39: [555],
		40: [555],
		46: [1178],
		49: [232],
		52: [1186],
		60: [],
		64: [805],
		65: [911],
		68: [752],
		76: [712],
		82: [1181, 1189],
		83: [1182],
		84: [1252],
		86: [1208],
		87: [1207, 1186],
		89: [],
		90: [],
		91: [],
		107: [1187],
		108: [1188],
		110: [1228],
		111: [49],
		115: [756],
		116: [758],
		124: [180],
		127: [185],
		140: [49],
		146: [751],
		148: [],
		149: [],
		154: [186],
		158: [],
		160: [767],
		162: [849],
		166: [1217],
		174: [712],
		175: [714, 713],
		180: [812, 811],
		182: [714, 713],
		184: [710],
		185: [1231],
		186: [185],
		196: [224],
		197: [224],
		198: [197],
		207: [848],
		215: [231],
		223: [1149],
		224: [231],
		227: [231],
		228: [1187],
		229: [],
		230: [1186, 1185],
		231: [92, 93],
		232: [231, 98],
		237: [440, 439],
		238: [1204],
		239: [1228],
		240: [454],
		242: [713],
		243: [713],
		246: [713],
		247: [713],
		248: [714],
		249: [714],
		250: [714],
		251: [714],
		252: [210],
		268: [279],
		270: [279],
		271: [40],
		283: [1035, 974],
		285: [287],
		286: [829],
		287: [],
		288: [966],
		289: [968],
		291: [963],
		306: [291],
		316: [894],
		320: [1014],
		327: [839, 841],
		329: [1149],
		330: [223],
		331: [961],
		332: [305, 306],
		333: [1049],
		334: [1130],
		339: [333],
		355: [957],
		359: [358],
		363: [324],
		366: [385],
		367: [372],
		378: [957, 582],
		379: [957],
		385: [825],
		386: [383, 387],
		387: [372],
		388: [196, 197],
		389: [1201],
		391: [436, 437, 148, 149],
		392: [1229],
		393: [1230],
		409: [311],
		414: [65],
		417: [243],
		432: [],
		436: [237],
		437: [237],
		438: [1198],
		439: [1201, 98],
		440: [98, 1201],
		443: [185],
		444: [185],
		449: [789],
		457: [454],
		458: [454],
		459: [457, 458],
		462: [707],
		465: [1016],
		466: [1016],
		473: [470],
		474: [471],
		475: [470],
		476: [471],
		499: [507],
		500: [999],
		501: [999],
		502: [509],
		503: [999],
		506: [502],
		507: [998],
		508: [502],
		511: [957],
		525: [957],
		540: [333],
		543: [1204],
		545: [],
		547: [543, 1275],
		548: [60],
		552: [185],
		554: [753],
		556: [752],
		557: [753],
		558: [563],
		559: [1016],
		560: [894],
		562: [986],
		564: [851],
		565: [837],
		569: [882, 878],
		570: [896],
		571: [895],
		576: [1036, 1037],
		579: [580],
		581: [857],
		583: [279],
		584: [279],
		586: [279],
		587: [279],
		595: [602],
		596: [603],
		597: [602],
		598: [603],
		599: [1090],
		606: [609],
		610: [1091],
		628: [822],
		629: [818, 819],
		630: [817],
		631: [819],
		632: [820],
		633: [822],
		634: [819],
		635: [820],
		636: [818, 819],
		637: [817],
		638: [536],
		639: [638],
		640: [642],
		641: [535, 303],
		642: [641],
		643: [644],
		644: [638],
		645: [644],
		646: [647],
		647: [648],
		649: [647],
		650: [647],
		652: [641],
		653: [817],
		654: [818],
		658: [1277],
		659: [1277],
		660: [1097],
		661: [1086],
		662: [663],
		664: [681],
		665: [663],
		666: [663],
		667: [1098],
		670: [668, 1186, 1187],
		671: [669, 1187, 1186],
		672: [676, 53],
		673: [53, 677],
		674: [676],
		675: [677],
		678: [665, 1100],
		679: [665],
		680: [665],
		682: [1097],
		683: [665, 681],
		684: [1114],
		685: [684],
		688: [701],
		689: [699],
		690: [700],
		694: [1097],
		695: [1097],
		696: [1086],
		697: [1115],
		699: [701],
		700: [699],
		701: [535],
		704: [756],
		705: [758],
		706: [781],
		707: [706],
		708: [782],
		709: [708],
		710: [783],
		713: [1231],
		714: [1231],
		716: [713],
		718: [722],
		719: [720],
		721: [1180],
		724: [1180],
		726: [603],
		728: [677],
		730: [720],
		733: [75],
		734: [1027],
		735: [733],
		736: [733],
		751: [],
		753: [1246],
		754: [1095],
		755: [758],
		758: [756],
		759: [756],
		760: [756],
		761: [758],
		762: [713],
		763: [714],
		765: [734],
		766: [721],
		772: [756],
		773: [758],
		775: [781],
		776: [782],
		777: [713],
		780: [714],
		781: [756],
		782: [758],
		783: [183],
		786: [756],
		787: [789],
		788: [789],
		790: [789],
		791: [789],
		792: [789],
		793: [751],
		794: [752],
		797: [788, 847],
		800: [901],
		801: [713],
		802: [713],
		804: [900],
		806: [815],
		807: [816],
		808: [821],
		809: [825],
		810: [829],
		813: [911],
		814: [805],
		822: [818, 817, 819, 820],
		823: [817],
		824: [818, 819],
		826: [819],
		827: [820],
		828: [822],
		830: [789],
		832: [713],
		834: [714],
		835: [714],
		843: [839],
		844: [841],
		846: [840],
		847: [789],
		851: [850],
		852: [1028, 1029],
		854: [610],
		855: [610],
		858: [509],
		863: [1075],
		864: [997],
		865: [997],
		866: [506],
		867: [866],
		868: [981],
		869: [982],
		870: [805],
		871: [911],
		873: [609],
		875: [608],
		876: [609],
		877: [609],
		878: [582, 1037],
		880: [916],
		881: [608],
		882: [1036, 582],
		883: [895],
		884: [895],
		885: [895, 896],
		886: [895],
		887: [896, 895],
		888: [952],
		889: [952],
		891: [908],
		892: [1178],
		893: [896],
		894: [890],
		895: [582],
		896: [582],
		897: [986],
		898: [895],
		899: [908],
		902: [1037, 582],
		903: [1037, 582],
		904: [582, 1036],
		905: [582, 1036],
		906: [896],
		907: [896],
		918: [599, 610],
		919: [609],
		920: [609],
		924: [876, 931],
		925: [900],
		926: [1011, 927, 925],
		928: [606, 930],
		929: [908],
		930: [606],
		931: [876],
		932: [599, 606, 609],
		935: [925],
		936: [916, 917],
		937: [927],
		939: [952],
		940: [896, 895],
		941: [895, 896],
		942: [576, 577],
		943: [502],
		944: [949],
		945: [510],
		946: [510],
		947: [949],
		948: [945],
		949: [582, 895],
		950: [955],
		951: [510],
		954: [955],
		955: [895, 582],
		956: [511],
		959: [279],
		960: [279],
		961: [964],
		962: [40],
		963: [965],
		969: [289],
		970: [288],
		971: [288],
		972: [288],
		973: [535],
		976: [975],
		977: [506],
		978: [866],
		979: [866],
		980: [868],
		981: [866],
		982: [980],
		983: [957],
		984: [223],
		985: [223],
		986: [900],
		987: [962],
		988: [962],
		991: [840, 974],
		993: [1035, 974],
		994: [974],
		995: [975],
		996: [711],
		997: [909],
		1004: [711],
		1006: [957],
		1007: [379],
		1008: [957],
		1009: [506],
		1010: [506],
		1011: [894],
		1012: [1045],
		1013: [1017],
		1014: [561],
		1015: [793, 795, 794],
		1016: [1014],
		1021: [901, 900],
		1022: [502],
		1023: [502],
		1024: [1036],
		1025: [506],
		1026: [861],
		1027: [718],
		1028: [243],
		1029: [249],
		1030: [565],
		1031: [564],
		1032: [841],
		1033: [840],
		1034: [839],
		1036: [573],
		1037: [573],
		1041: [324],
		1042: [506],
		1043: [577, 578, 576],
		1044: [1049],
		1048: [1049],
		1051: [1049],
		1055: [997, 1048],
		1059: [999],
		1060: [999],
		1075: [864, 865],
		1078: [385],
		1079: [957],
		1080: [957],
		1081: [1062, 1053, 1061],
		1083: [1081, 1136],
		1085: [1115],
		1087: [1088],
		1094: [712],
		1095: [733, 77],
		1096: [713, 714],
		1098: [1115],
		1099: [1086],
		1100: [1097],
		1102: [719],
		1103: [719],
		1107: [1061],
		1108: [1115],
		1110: [566, 567, 51],
		1111: [1115],
		1112: [1097],
		1113: [1088],
		1118: [180],
		1122: [180],
		1123: [180],
		1124: [1053],
		1125: [1061],
		1126: [180],
		1130: [1129, 1052],
		1132: [1146],
		1133: [1083],
		1134: [1061],
		1135: [1053],
		1137: [1062],
		1138: [1062],
		1139: [1062],
		1140: [1053],
		1141: [934],
		1142: [1118, 1073],
		1146: [1056],
		1147: [1056],
		1148: [1118, 1121],
		1150: [701],
		1151: [701],
		1152: [1151],
		1153: [846, 840],
		1154: [1119, 1123],
		1159: [223],
		1160: [909],
		1162: [1163],
		1164: [1165],
		1165: [324],
		1167: [324],
		1168: [1019],
		1169: [1018],
		1170: [324],
		1172: [1157, 1158],
		1179: [541],
		1180: [720],
		1181: [1187],
		1182: [1188],
		1183: [1229],
		1184: [1230],
		1185: [1203],
		1186: [98],
		1187: [1185],
		1188: [1186],
		1189: [1185],
		1190: [1186],
		1191: [1194],
		1192: [1211],
		1193: [1195],
		1194: [1193, 1185],
		1195: [1186],
		1196: [1204],
		1197: [1219],
		1198: [],
		1199: [1198],
		1200: [1198],
		1201: [1198, 1199, 1200],
		1202: [1211],
		1203: [],
		1204: [231],
		1205: [],
		1206: [1202],
		1207: [1188],
		1208: [1187],
		1209: [1188],
		1210: [1187],
		1211: [1218],
		1212: [1186, 1185],
		1213: [1217],
		1214: [1218],
		1215: [1213],
		1216: [1214],
		1219: [1217],
		1220: [237],
		1221: [1219],
		1222: [1221],
		1223: [1187, 1204],
		1224: [1204, 1187],
		1227: [543, 1224],
		1228: [1187],
		1229: [1187],
		1230: [1188],
		1231: [1232],
		1232: [238],
		1233: [1225],
		1234: [1229, 228],
		1236: [1245],
		1237: [1244],
		1241: [127],
		1242: [1244],
		1243: [1245],
		1246: [1248],
		1247: [1249],
		1248: [1249],
		1250: [240, 457, 458],
		1251: [1185, 1186],
		1254: [1188],
		1256: [1259],
		1259: [231],
		1264: [231],
		1265: [1259, 1264],
		1266: [98],
		1267: [98, 1201],
		1268: [1204],
		1269: [1265],
		1270: [],
		1271: [1266],
		1272: [1265],
		1279: [1027],
		1280: [677],
		1281: [1211, 1219],
		1286: [],
		1287: [],
		1288: [],
		1289: [],
		1305: [1268],
		1306: [],
		1307: [],
		1308: [],
		1309: [],
		1310: [],
		1311: [],
		1312: [],
		1316: [],
		1334: [],
		1338: [1268],
		1342: [],
		1343: [],
		1344: [],
		1345: [],
		1348: [1204],
		1350: [1204],
		1351: [1204],
		1352: [1204]
	},
	4: {
		4: [1187],
		25: [32, 33],
		26: [35, 34],
		27: [36, 37],
		28: [38, 39],
		29: [40],
		46: [1178],
		49: [232],
		50: [1265],
		52: [1186],
		60: [],
		64: [805],
		65: [911],
		68: [752],
		73: [1203],
		82: [1189, 1181],
		83: [1182],
		84: [1252],
		86: [1208],
		87: [1186, 1207],
		99: [1224],
		111: [49],
		115: [756],
		116: [758],
		122: [787],
		124: [180],
		126: [1011],
		127: [185],
		146: [751],
		154: [186],
		162: [849],
		166: [1217],
		185: [1231],
		186: [185],
		192: [1016],
		193: [1016],
		194: [1016],
		195: [1016],
		196: [224],
		197: [224],
		198: [197],
		207: [848],
		218: [495],
		224: [231],
		227: [231],
		228: [1187],
		232: [231],
		237: [439, 440],
		238: [1204],
		242: [713],
		243: [713],
		246: [713],
		247: [713],
		248: [714],
		249: [714],
		250: [714],
		251: [714],
		252: [210],
		268: [117],
		285: [287],
		291: [963],
		306: [291],
		316: [894],
		327: [839, 841],
		331: [961],
		333: [1049],
		334: [1130],
		339: [333],
		351: [384],
		359: [358],
		363: [324],
		366: [385],
		367: [372],
		375: [367, 380],
		380: [831],
		381: [380],
		382: [351],
		385: [825],
		392: [1229],
		393: [1230],
		417: [243],
		436: [237],
		437: [237],
		438: [1198],
		439: [1201],
		440: [1201],
		441: [444],
		442: [443],
		443: [185],
		444: [185],
		445: [447],
		446: [448],
		447: [128, 1231],
		448: [128, 1231],
		451: [1187, 1188],
		452: [1188, 1187],
		453: [1187, 1188],
		457: [454],
		458: [454],
		462: [707],
		465: [1016],
		466: [1016],
		473: [470],
		475: [470],
		499: [507],
		502: [509],
		506: [502],
		507: [998],
		508: [502],
		540: [333],
		543: [1204],
		554: [753],
		557: [753],
		559: [1016],
		560: [894],
		562: [986],
		564: [851],
		565: [837],
		569: [882, 878],
		570: [896],
		571: [895],
		581: [857],
		595: [602],
		596: [603],
		597: [602],
		598: [603],
		599: [1090],
		610: [1091],
		641: [303],
		642: [641],
		643: [644],
		658: [1277],
		659: [1277],
		660: [1097],
		661: [1086],
		682: [1097],
		688: [701],
		689: [699],
		690: [700],
		694: [1097],
		695: [1097],
		696: [1086],
		697: [1115],
		699: [701],
		700: [699],
		704: [756],
		705: [758],
		706: [781],
		707: [706],
		708: [782],
		709: [708],
		710: [783],
		713: [1231],
		714: [1231],
		716: [713],
		719: [720],
		721: [1180],
		724: [1180],
		730: [720],
		734: [1027],
		735: [733],
		736: [733],
		753: [1246],
		755: [758],
		758: [756],
		759: [756],
		760: [756],
		761: [758],
		762: [713],
		763: [714],
		765: [734],
		766: [721],
		772: [756],
		773: [758],
		775: [781],
		776: [782],
		777: [713],
		780: [714],
		781: [756],
		782: [758],
		783: [183],
		786: [756],
		787: [789],
		788: [789, 130],
		790: [789],
		791: [789],
		792: [789],
		793: [751],
		794: [752],
		797: [788, 847],
		801: [713],
		802: [713],
		806: [815],
		807: [816],
		808: [821],
		809: [825],
		813: [911],
		814: [805],
		830: [789, 130],
		832: [713],
		834: [714],
		835: [714],
		843: [839],
		844: [841],
		846: [840],
		847: [789],
		851: [850],
		854: [610],
		855: [610],
		863: [1075],
		864: [997],
		865: [997],
		866: [506],
		867: [866],
		868: [981],
		869: [982],
		870: [805],
		871: [911],
		875: [608],
		878: [1037],
		882: [1036],
		883: [895],
		884: [895],
		885: [896, 895],
		886: [895],
		887: [896, 895],
		888: [952],
		889: [952],
		891: [908],
		892: [1178],
		893: [896],
		894: [890],
		897: [986],
		898: [895],
		899: [908],
		902: [1037],
		903: [1037],
		904: [1036],
		905: [1036],
		906: [896],
		907: [896],
		918: [610, 599],
		924: [876],
		925: [900],
		926: [925, 1011, 927],
		928: [606],
		929: [908],
		935: [925],
		937: [927],
		939: [952],
		940: [896, 895],
		941: [896, 895],
		943: [502],
		960: [269],
		961: [964],
		962: [40],
		963: [965],
		977: [506],
		978: [866],
		979: [866],
		980: [868],
		981: [866],
		982: [980],
		983: [957],
		986: [900],
		991: [840, 974],
		994: [974],
		996: [711],
		997: [909],
		1004: [711],
		1006: [957],
		1008: [957],
		1009: [506],
		1010: [506],
		1011: [894],
		1013: [1017],
		1015: [793, 794, 795],
		1016: [1014],
		1021: [900, 901],
		1027: [718],
		1028: [243],
		1029: [249],
		1030: [565],
		1031: [564],
		1032: [841],
		1033: [840],
		1034: [839],
		1036: [573],
		1037: [573],
		1041: [324],
		1042: [506],
		1044: [1049],
		1048: [1049],
		1051: [1049],
		1054: [211, 212, 326],
		1075: [865, 864],
		1081: [1062, 1061, 1053],
		1083: [1081, 1136],
		1085: [1115],
		1087: [1088],
		1095: [733],
		1096: [713, 714],
		1098: [1115],
		1099: [1086],
		1100: [1097],
		1102: [719],
		1103: [719],
		1107: [1061],
		1108: [1115],
		1110: [567, 51],
		1111: [1115],
		1112: [1097],
		1113: [1088],
		1118: [180],
		1122: [180],
		1123: [180],
		1124: [1053],
		1125: [1061],
		1126: [180],
		1130: [1129, 1052],
		1132: [1146],
		1134: [1061],
		1135: [1053],
		1137: [1062],
		1138: [1062],
		1139: [1062],
		1140: [1053],
		1141: [934],
		1142: [1118, 1073],
		1146: [1056],
		1147: [1056],
		1148: [1118, 1121],
		1150: [701],
		1151: [701],
		1152: [1151],
		1153: [840, 846],
		1154: [1123, 1119],
		1162: [1163],
		1164: [1165],
		1165: [324],
		1167: [324],
		1168: [1019],
		1169: [1018],
		1170: [324],
		1172: [1157, 1158],
		1179: [541],
		1180: [720],
		1181: [1187],
		1182: [1188],
		1183: [1229],
		1184: [1230],
		1185: [1203],
		1187: [1185],
		1188: [1186],
		1189: [1185, 178],
		1190: [1186, 178],
		1191: [1194],
		1192: [1211],
		1193: [1195],
		1194: [1193, 1185],
		1195: [1186],
		1196: [1204],
		1197: [1219],
		1199: [1198],
		1200: [1198],
		1201: [1200, 1198, 1199],
		1202: [1211],
		1204: [231],
		1205: [],
		1206: [1202],
		1207: [1188],
		1208: [1187],
		1209: [1188],
		1210: [1187],
		1211: [1218],
		1212: [1186, 1185],
		1213: [1217],
		1214: [1218],
		1215: [1213],
		1216: [1214],
		1219: [1217],
		1221: [1219],
		1222: [1221],
		1224: [1187, 1204],
		1227: [1224, 543],
		1229: [1187],
		1230: [1188],
		1231: [1232],
		1232: [238],
		1233: [1225],
		1234: [1229, 228],
		1236: [1245],
		1237: [1244],
		1240: [435],
		1241: [127],
		1242: [1244],
		1243: [1245],
		1246: [1248],
		1247: [1249],
		1248: [1249],
		1254: [1188],
		1256: [1259],
		1259: [231],
		1264: [231],
		1265: [1264, 1259],
		1269: [1265],
		1270: [],
		1271: [1266],
		1272: [1265],
		1279: [1027],
		1281: [1211, 1219],
		1350: [1204],
		1351: [1204]
	}
}, Prodigy.EducationSystem = function (e) {
	this.game = e, this.nullGrade = !0, this.init()
}, Prodigy.EducationSystem.prototype = {
	constructor: Prodigy.EducationSystem,
	init: function (e) {
		if (console.log(e), this.skillTree = new Prodigy.SkillTree, this.algorithms = [], Util.isDefined(e)) {
			if (e.sub = Util.isDefined(e.sub) ? e.sub : 0, e.country = e.country || 1, e.grade ? (this.nullGrade = !1, this.setCurriculum(e.grade, e.country, e.sub, e.chosenGrade, e.curriculumOverride)) : this.setCurriculum(1, 1, 0, 1, e.curriculumOverride), Util.isDefined(e.skills) && e.skills.length > 0 && (this.skillTree.init(e.skills), this.isNew = !1), Util.isDefined(e.placementTestID) && !Util.isDefined(e.curriculumOverride) && this.algorithms.push(new Prodigy.PlacementSkillSelection(this.game, this.skillTree, e.country, e.sub, e.chosenGrade, e.placementTestID, e.currentSkill, e.momentum)), Util.isDefined(e.plans) && this.algorithms.push(new Prodigy.PlannerSkillSelection(this.game, this.skillTree, e.grade || 1, e.chosenGrade || 1, Prodigy.EducationSystem.MAP[e.country].name, Prodigy.EducationSystem.MAP[e.country].sub[e.sub], e.plans)), Util.isDefined(e.homework) && e.homework.length > 0)
				for (var t = e.homework.length - 1; t >= 0; t--) this.algorithms.push(new Prodigy.HomeworkSkillSelection(this.game, this.skillTree, e.homework[t]))
		} else this.setCurriculum(1, 1, 0, 1)
	},
	setCurriculum: function (e, t, i, a, s) {
		if (i = Util.isDefined(i) ? i : 0, t = t || 1, i = Prodigy.EducationSystem.MAP[t].sub[i], t = Prodigy.EducationSystem.MAP[t].name, Util.isDefined(s)) {
			var r = Prodigy.EducationSystem.curriculums[s];
			Util.isDefined(r) && (e = r.grade, t = r.country, i = r.sub)
		}
		this.algorithms[0] = new Prodigy.SkillSelection(this.game, this.skillTree, e || 1, t || 1, i || 0, a || 1)
	},
	getUpdatedData: function () {
		for (var e = 0; e < this.algorithms.length; e++) this.algorithms[e].updated && this.algorithms[e].save();
		return this.skillTree.getUpdatedData()
	},
	selectSkill: function () {
		for (var e = this.algorithms[this.algorithms.length - 1], t = e.selectSkill(); e.isComplete() || !Util.isDefined(t);) this.algorithms.splice(this.algorithms.length - 1, 1), e = this.algorithms[this.algorithms.length - 1], t = e.selectSkill();
		return t.isNew() && t.initNew(e.fastTrack), t
	},
	selectQuestion: function () {
		return this.algorithms[this.algorithms.length - 1].selectQuestion()
	},
	answerQuestion: function (e, t) {
		console.log("\nANSWER QUESTION " + e), this.algorithms[this.algorithms.length - 1].answerQuestion(e, t)
	}
}, Prodigy.EducationSystem.MAP = {
	1: {
		name: "Canada",
		sub: {
			0: "Ontario"
		}
	},
	2: {
		name: "United States",
		sub: {
			0: "Common Core",
			1: "Florida",
			2: "Texas"
		}
	}
}, Prodigy.EducationSystem.curriculums = {
	1: {
		ID: 1,
		grade: 1,
		sub: "Ontario",
		country: "Canada",
		skills: [92, 93, 231, 214, 94, 1264, 1259, 95, 96, 97, 103, 98, 227, 389, 135, 475, 109, 470, 90, 148, 149, 50, 89, 473, 91, 391, 3, 229, 4, 1208, 546, 1185, 232, 49, 392, 136, 1187, 228, 1265, 1181, 1186, 1183, 1188, 1266, 1269, 393, 1271, 1272, 1209, 1212, 138, 140, 215, 1182, 111, 137, 1210, 390, 1184, 107, 108, 230, 196, 224, 197, 198, 225, 1251, 226, 388, 480, 481, 482, 1247, 1249]
	},
	2: {
		ID: 2,
		grade: 2,
		sub: "Ontario",
		country: "Canada",
		skills: [425, 424, 201, 200, 426, 73, 427, 428, 72, 74, 460, 75, 429, 439, 437, 436, 1228, 1208, 440, 4, 438, 544, 399, 478, 477, 237, 400, 479, 1207, 401, 59, 6, 52, 543, 547, 1213, 545, 548, 452, 453, 1209, 1212, 451, 1214, 1215, 1189, 1190, 1216, 87, 1210, 1218, 83, 1192, 86, 53, 7, 1217, 677, 1211, 1206, 1224, 1227, 674, 675, 676, 82, 164, 165, 60, 110, 241, 166, 395, 396, 672, 673, 1202, 1219, 1197, 458, 457, 77, 76, 454, 233, 398, 1221, 1222, 455, 456, 555, 1194, 1195, 459, 484, 483, 1191, 1193, 485]
	},
	3: {
		ID: 3,
		grade: 3,
		sub: "Ontario",
		country: "Canada",
		skills: [430, 435, 431, 432, 158, 185, 349, 434, 186, 1273, 1256, 176, 177, 443, 444, 441, 442, 552, 751, 471, 476, 461, 59, 348, 549, 350, 347, 346, 1274, 1231, 1232, 1254, 87, 143, 144, 146, 83, 86, 1275, 408, 602, 603, 754, 82, 164, 31, 165, 1224, 1227, 241, 166, 496, 1094, 1095, 1233, 595, 597, 598, 550, 591, 592, 457, 458, 222, 32, 246, 250, 486, 345, 728, 1280, 1281, 607, 1244, 1237, 251, 247, 33, 34, 35, 25, 26, 174, 77, 454, 278, 590, 777, 600, 601, 596, 1239, 735, 736, 612, 779, 713, 832, 714, 712, 785, 588, 593, 594, 583, 584, 279, 269, 27, 36, 37, 242, 248, 778, 1236, 1245, 1270, 1278, 611, 1255, 1242, 1243, 249, 187, 38, 464, 240, 268, 352, 456, 763, 835, 762, 1096, 605, 284, 589, 154, 175, 409, 459, 243, 344, 1235, 178, 417, 586, 587, 406, 272, 282, 281, 270, 273, 1246, 1248, 351, 277, 382, 383, 384, 283, 780, 852, 716, 213, 210, 252, 220, 221, 487, 255, 733, 380, 381]
	},
	4: {
		ID: 4,
		grade: 4,
		sub: "Ontario",
		country: "Canada",
		skills: [445, 447, 181, 446, 448, 751, 847, 472, 31, 164, 165, 467, 166, 756, 772, 752, 241, 495, 218, 127, 216, 32, 773, 757, 758, 556, 25, 26, 33, 34, 35, 128, 68, 130, 36, 37, 27, 1028, 1029, 1030, 1031, 959, 960, 206, 28, 29, 39, 40, 38, 129, 139, 208, 182, 761, 776, 704, 815, 821, 797, 759, 806, 775, 781, 120, 121, 412, 760, 419, 462, 463, 808, 764, 705, 710, 706, 782, 783, 784, 179, 205, 183, 180, 184, 702, 708, 707, 848, 853, 709, 711, 753, 801, 252, 210, 254, 490, 802, 253, 255, 722, 718, 767, 1279, 841, 719, 1027, 488, 256, 219, 126, 257, 489, 491, 720, 843, 734, 765, 766, 715, 755, 786, 721, 1045, 1047, 934]
	},
	5: {
		ID: 5,
		grade: 5,
		sub: "Ontario",
		country: "Canada",
		skills: [449, 192, 193, 113, 51, 152, 194, 195, 211, 516, 517, 338, 153, 114, 212, 559, 805, 911, 813, 814, 161, 123, 223, 258, 263, 120, 64, 121, 65, 1077, 870, 871, 1035, 326, 261, 266, 421, 414, 879, 264, 259, 119, 329, 1068, 260, 122, 265, 730, 1011, 1054, 997, 563, 816, 825, 838, 839, 115, 116, 62, 63, 125, 922, 807, 809, 770, 1104, 1180, 1050, 1034, 1105, 1178, 803, 492, 493, 415, 416, 1014, 497, 163, 162, 160, 46, 124, 849, 723, 512, 724, 1044, 1102, 769, 106, 1103, 1066, 1048, 1016, 939, 952, 967, 974, 989, 1055, 990]
	},
	6: {
		ID: 6,
		grade: 6,
		sub: "Ontario",
		country: "Canada",
		skills: [789, 792, 787, 337, 790, 791, 450, 614, 615, 1073, 1089, 788, 336, 313, 309, 567, 466, 465, 830, 621, 1076, 966, 968, 358, 288, 289, 326, 311, 368, 310, 329, 969, 970, 971, 972, 620, 622, 287, 314, 308, 285, 565, 312, 841, 1012, 363, 372, 290, 303, 561, 613, 335, 373, 374, 325, 364, 560, 367, 327, 321, 375, 369, 564, 376, 1109, 1032, 953, 623, 829, 810, 964, 965, 1106, 934, 334, 330, 305, 306, 353, 354, 333, 332, 331, 624, 625, 626, 961, 963, 1052, 328, 286, 291, 318, 361, 362, 360, 339, 341, 378, 355, 617, 315, 324, 385, 387, 319, 356, 377, 1126, 1127, 1129, 1157, 1158, 894, 340, 342, 386, 366, 618, 619, 357, 379, 316, 1013, 1017, 1161, 1130, 1172]
	},
	8: {
		ID: 8,
		grade: 1,
		sub: "Common Core",
		country: "United States",
		skills: [1267, 92, 93, 231, 1198, 1203, 1264, 1259, 1199, 1204, 1205, 1200, 1268, 1273, 389, 98, 227, 470, 475, 1201, 90, 148, 149, 1256, 1228, 1220, 89, 91, 473, 436, 439, 437, 440, 438, 4, 391, 229, 1208, 546, 1185, 237, 232, 49, 228, 136, 1187, 1207, 392, 1265, 1181, 1186, 1183, 1188, 547, 393, 238, 239, 543, 1266, 1269, 1223, 1209, 1229, 1212, 1271, 1272, 545, 548, 138, 140, 215, 137, 111, 1182, 1274, 1234, 1230, 1254, 1210, 87, 86, 83, 107, 108, 230, 668, 669, 1184, 1275, 670, 671, 196, 60, 82, 224, 1224, 1227, 110, 197, 198, 225, 1251, 388, 1194, 1195, 1247, 1249, 1191, 1193]
	},
	9: {
		ID: 9,
		grade: 2,
		sub: "Common Core",
		country: "United States",
		skills: [1252, 84, 432, 158, 185, 186, 177, 99, 443, 444, 552, 461, 476, 471, 6, 52, 474, 238, 239, 549, 1213, 1240, 1231, 1232, 1214, 1215, 1189, 1190, 1216, 87, 83, 1218, 1192, 86, 1241, 1253, 1211, 677, 1217, 7, 53, 60, 164, 165, 82, 674, 675, 676, 1206, 1202, 1225, 1219, 672, 673, 241, 166, 110, 246, 250, 457, 458, 127, 550, 728, 1197, 1226, 1233, 648, 649, 1280, 1281, 713, 646, 1244, 1237, 1239, 1221, 454, 247, 251, 242, 248, 1222, 1236, 1245, 1270, 1278, 1255, 1242, 1243, 249, 240, 243, 154, 409, 459, 647, 1235, 417, 1246, 1248, 213]
	},
	10: {
		ID: 10,
		grade: 3,
		sub: "Common Core",
		country: "United States",
		skills: [75, 751, 472, 146, 271, 602, 603, 726, 31, 754, 752, 756, 772, 1094, 1095, 773, 757, 758, 32, 595, 597, 598, 556, 596, 33, 25, 34, 35, 26, 77, 76, 174, 735, 736, 777, 779, 713, 785, 778, 36, 37, 27, 712, 714, 38, 39, 28, 40, 29, 555, 762, 763, 761, 1096, 776, 175, 704, 161, 406, 775, 781, 759, 760, 462, 463, 421, 282, 281, 705, 706, 710, 764, 782, 783, 784, 780, 771, 707, 708, 716, 557, 183, 554, 702, 184, 210, 252, 730, 709, 711, 753, 801, 802, 1279, 722, 767, 718, 253, 116, 115, 256, 719, 733, 770, 1180, 1027, 1104, 1105, 803, 734, 720, 257, 327, 160, 715, 786, 723, 755, 765, 766, 724, 769, 1102, 1106, 1103, 315]
	},
	11: {
		ID: 11,
		grade: 4,
		sub: "Common Core",
		country: "United States",
		skills: [789, 792, 787, 847, 790, 791, 164, 165, 241, 166, 831, 834, 1015, 449, 246, 250, 247, 251, 68, 788, 278, 832, 833, 1028, 1029, 1030, 1031, 793, 794, 795, 796, 583, 584, 279, 242, 248, 268, 249, 959, 960, 835, 840, 836, 243, 466, 465, 559, 182, 409, 830, 797, 586, 587, 417, 650, 1035, 207, 462, 463, 282, 281, 270, 311, 310, 179, 1067, 879, 852, 848, 1068, 962, 283, 287, 987, 853, 837, 838, 839, 841, 1011, 1175, 1054, 285, 255, 565, 562, 563, 561, 1050, 1141, 991, 922, 846, 900, 843, 994, 1014, 1153, 1178, 1033, 1034, 325, 560, 558, 798, 799, 163, 162, 327, 46, 564, 1032, 849, 901, 925, 927, 986, 934, 897, 891, 892, 850, 844, 937, 1166, 721, 106, 1066, 851, 926, 935, 929, 908, 890, 1016, 1021, 939, 952, 967, 974, 989, 894, 899, 888, 889, 990, 316, 320, 800, 804]
	},
	12: {
		ID: 12,
		grade: 5,
		sub: "Common Core",
		country: "United States",
		skills: [337, 233, 1073, 1089, 51, 336, 240, 567, 284, 805, 815, 911, 870, 871, 813, 814, 821, 806, 604, 566, 120, 121, 64, 65, 1077, 812, 1076, 358, 359, 414, 808, 909, 910, 180, 811, 825, 816, 62, 63, 303, 809, 807, 798, 799, 829, 124, 953, 1109, 1118, 1119, 1122, 1123, 1166, 334, 810, 305, 306, 362, 286, 291, 328, 872, 912, 913, 915, 1110, 1052, 1074, 1126, 1127, 1128, 1129, 1120, 1121, 1174, 914, 385, 366, 1157, 1158, 1142, 1143, 1144, 1145, 1148, 1154, 1156, 1130, 1161, 1172, 599, 880, 610, 854, 855, 916, 917, 608, 1090, 1091, 1092, 1093, 1155, 609, 606, 881, 876, 874, 875, 873, 877, 918, 919, 923, 930, 931, 932, 1173, 936, 924, 928, 920]
	},
	13: {
		ID: 13,
		grade: 6,
		sub: "Common Core",
		country: "United States",
		skills: [1005, 120, 121, 64, 65, 510, 288, 289, 499, 507, 966, 968, 999, 1003, 998, 969, 970, 971, 972, 500, 501, 503, 1059, 1060, 505, 504, 314, 1004, 996, 997, 973, 535, 536, 1160, 363, 1012, 303, 509, 502, 506, 376, 943, 508, 332, 331, 305, 306, 334, 333, 964, 965, 1044, 1045, 1047, 1048, 1e3, 961, 963, 339, 291, 315, 385, 324, 1149, 1165, 366, 975, 976, 1002, 1049, 1051, 1055, 1056, 1057, 995, 1163, 1164, 864, 1013, 1017, 1018, 1019, 1131, 1162, 1167, 1170, 865, 1146, 1147, 1065, 1171, 1078, 1058, 1001, 1168, 1069, 1070, 1071, 1020, 1132, 948, 951, 945, 946, 1169]
	},
	16: {
		ID: 16,
		grade: 7,
		sub: "Ontario",
		country: "Canada",
		skills: [507, 358, 359, 500, 501, 514, 998, 1060, 962, 519, 505, 504, 1046, 987, 1160, 562, 997, 558, 900, 901, 925, 927, 1063, 986, 494, 513, 332, 331, 353, 354, 891, 892, 897, 1082, 1118, 1122, 1123, 1074, 935, 926, 360, 859, 861, 520, 908, 890, 929, 1021, 521, 518, 899, 1165, 322, 323, 320, 888, 889, 864, 511, 1164, 995, 1056, 1057, 1131, 599, 610, 1167, 865, 854, 855, 863, 1090, 1091, 1146, 1147, 876, 877, 918, 1132]
	},
	17: {
		ID: 17,
		grade: 8,
		sub: "Ontario",
		country: "Canada",
		skills: [693, 1257, 503, 538, 534, 515, 539, 523, 524, 542, 532, 535, 536, 973, 1175, 537, 531, 1038, 529, 530, 341, 528, 540, 357, 533, 342, 340, 1006, 688, 1079, 541, 525, 1150, 599, 610, 526, 689, 854, 855, 977, 608, 609, 690, 866, 606, 874, 876, 1092, 1093, 1155, 919, 873, 978, 1020, 979, 920, 924, 928, 1061, 1053, 1107, 946, 867, 981, 1124, 1062, 1125, 1134, 1135, 1081, 980, 1139, 1140, 1138, 1136, 868, 1137, 1083, 982, 1133, 869]
	},
	19: {
		ID: 19,
		grade: 1,
		sub: "Florida",
		country: "United States",
		skills: [92, 93, 231, 214, 1198, 1203, 435, 1264, 1259, 1199, 1204, 1205, 1200, 389, 227, 98, 1273, 1256, 1201, 470, 475, 473, 437, 436, 439, 1220, 99, 1228, 1208, 4, 438, 440, 391, 544, 546, 237, 232, 1185, 1207, 1265, 136, 392, 49, 228, 1187, 1181, 1183, 1186, 1269, 1266, 1188, 1223, 543, 547, 6, 393, 238, 239, 52, 140, 138, 545, 548, 1271, 1272, 1212, 1229, 1209, 1234, 1274, 1182, 137, 111, 87, 1254, 1230, 1210, 1275, 86, 107, 230, 108, 83, 1184, 196, 7, 53, 60, 82, 224, 1224, 1227, 164, 241, 197, 198, 101, 110, 225, 1251, 388, 1194, 1195, 1247, 175, 1191, 1193, 1249]
	},
	20: {
		ID: 20,
		grade: 2,
		sub: "Florida",
		country: "United States",
		skills: [435, 1252, 84, 432, 158, 185, 227, 186, 177, 443, 439, 99, 440, 444, 552, 232, 49, 461, 471, 476, 474, 52, 549, 238, 239, 6, 1213, 1240, 1231, 1232, 1214, 1215, 1189, 346, 1190, 1216, 87, 86, 83, 1218, 1192, 1241, 1253, 1211, 1217, 53, 7, 82, 60, 164, 165, 1206, 1202, 1219, 166, 241, 110, 395, 396, 1225, 1226, 1233, 728, 127, 550, 1197, 457, 458, 246, 250, 251, 247, 454, 1221, 398, 1239, 1280, 1281, 1270, 1222, 242, 248, 249, 240, 1278, 459, 243, 154, 1246, 1248, 213, 1279]
	},
	21: {
		ID: 21,
		grade: 3,
		sub: "Florida",
		country: "United States",
		skills: [75, 751, 146, 271, 602, 603, 31, 754, 1094, 756, 772, 752, 773, 758, 597, 598, 595, 32, 556, 1095, 735, 736, 713, 174, 77, 76, 33, 34, 35, 25, 26, 596, 779, 777, 712, 785, 27, 36, 37, 778, 714, 762, 38, 39, 40, 28, 29, 555, 763, 175, 776, 704, 761, 775, 759, 161, 406, 781, 281, 462, 463, 421, 282, 760, 706, 705, 710, 264, 259, 764, 782, 783, 784, 183, 554, 557, 780, 184, 707, 716, 702, 771, 708, 1068, 730, 709, 753, 711, 801, 252, 210, 253, 802, 115, 116, 722, 767, 718, 770, 719, 1180, 1104, 1027, 733, 256, 257, 803, 327, 321, 1014, 1105, 720, 734, 765, 766, 715, 723, 46, 160, 786, 755, 724, 1102, 769, 721, 1103, 1066, 315, 316]
	},
	22: {
		ID: 22,
		grade: 4,
		sub: "Florida",
		country: "United States",
		skills: [789, 792, 787, 847, 790, 791, 164, 165, 166, 241, 496, 831, 834, 246, 250, 449, 1015, 68, 251, 247, 832, 788, 833, 793, 794, 795, 796, 583, 584, 248, 242, 279, 1028, 1029, 1030, 1031, 959, 960, 268, 249, 835, 840, 836, 559, 243, 465, 466, 212, 830, 797, 586, 587, 207, 270, 462, 463, 282, 1035, 879, 310, 311, 179, 283, 848, 852, 962, 987, 853, 287, 285, 255, 841, 837, 838, 839, 565, 562, 563, 1054, 1011, 1175, 1141, 1050, 922, 561, 558, 560, 843, 325, 327, 163, 162, 798, 799, 846, 900, 1033, 1034, 994, 1014, 1178, 1032, 986, 901, 925, 927, 46, 160, 849, 564, 850, 844, 106, 513, 897, 892, 937, 934, 891, 1106, 1166, 935, 926, 851, 890, 939, 908, 929, 952, 967, 974, 1174, 1016, 1021, 1142, 1143, 1144, 1145, 989, 899, 894, 990, 888, 889, 316, 320, 800, 804]
	},
	23: {
		ID: 23,
		grade: 5,
		sub: "Florida",
		country: "United States",
		skills: [337, 1073, 1089, 51, 336, 567, 465, 466, 805, 815, 911, 870, 871, 806, 813, 814, 821, 604, 566, 120, 121, 64, 65, 1077, 812, 1076, 414, 207, 358, 359, 808, 179, 909, 910, 180, 811, 825, 816, 62, 63, 303, 809, 807, 991, 1153, 798, 799, 163, 162, 124, 829, 953, 1109, 1122, 1123, 1118, 1119, 334, 810, 305, 306, 291, 286, 328, 362, 872, 912, 913, 1074, 1110, 1052, 915, 1120, 1121, 1126, 1127, 1128, 1129, 914, 520, 385, 366, 1157, 1158, 1161, 1154, 1148, 1156, 1130, 1172, 599, 610, 880, 800, 608, 854, 855, 1090, 1091, 916, 917, 1092, 1093, 1155, 606, 881, 876, 874, 609, 875, 873, 877, 918, 919, 923, 930, 931, 932, 936, 924, 928, 920]
	},
	24: {
		ID: 24,
		grade: 6,
		sub: "Florida",
		country: "United States",
		skills: [1005, 120, 121, 64, 65, 510, 499, 507, 288, 289, 207, 966, 968, 999, 1003, 998, 969, 970, 971, 972, 500, 501, 503, 1059, 1060, 505, 504, 314, 1004, 996, 997, 973, 1159, 1160, 1012, 303, 509, 502, 506, 162, 376, 943, 508, 334, 333, 305, 306, 332, 331, 964, 965, 1044, 1045, 1047, 1048, 1e3, 961, 963, 291, 339, 385, 324, 315, 1149, 1165, 975, 976, 1002, 1049, 1051, 1055, 366, 1056, 1057, 995, 864, 1163, 1164, 1013, 1017, 1018, 1019, 1162, 1131, 1167, 865, 1170, 1171, 1146, 1147, 1065, 1058, 1001, 1069, 1070, 1071, 1020, 1168, 1132, 948, 951, 945, 946, 1169]
	},
	25: {
		ID: 25,
		grade: 1,
		sub: "Texas",
		country: "United States",
		skills: [231, 1198, 1203, 1264, 1259, 73, 1199, 1204, 1205, 1200, 227, 1273, 1256, 50, 90, 149, 148, 1201, 470, 475, 473, 437, 436, 91, 89, 439, 99, 4, 440, 438, 229, 1208, 1185, 546, 237, 232, 392, 228, 49, 136, 1187, 1207, 1265, 1186, 1181, 1183, 543, 1188, 393, 1266, 1269, 1271, 1272, 1212, 1229, 452, 453, 138, 1209, 1182, 451, 137, 111, 1234, 1274, 1230, 1254, 87, 1210, 1184, 83, 86, 196, 224, 82, 60, 197, 198, 225, 226, 1194, 1195, 1247, 1249, 1191, 1193, 351, 382, 384]
	},
	26: {
		ID: 26,
		grade: 2,
		sub: "Texas",
		country: "United States",
		skills: [435, 1252, 84, 185, 186, 443, 444, 442, 441, 476, 549, 52, 238, 1213, 1240, 1231, 1232, 1214, 1215, 1189, 346, 1190, 1216, 1218, 1241, 1192, 472, 1275, 1211, 1217, 53, 164, 165, 31, 1224, 1227, 1206, 1202, 1225, 1219, 166, 241, 127, 32, 1226, 1197, 458, 457, 728, 1280, 1281, 454, 233, 1221, 33, 34, 35, 25, 26, 27, 36, 37, 1222, 455, 456, 38, 39, 40, 28, 29, 409, 154, 406, 178, 417, 351, 382, 384]
	},
	27: {
		ID: 27,
		grade: 3,
		sub: "Texas",
		country: "United States",
		skills: [445, 447, 448, 446, 751, 146, 602, 603, 31, 495, 756, 772, 752, 757, 758, 1233, 773, 597, 598, 218, 595, 32, 250, 246, 247, 251, 68, 33, 34, 35, 25, 26, 596, 128, 779, 1239, 1244, 1237, 777, 713, 714, 778, 1236, 1245, 785, 27, 36, 37, 248, 242, 249, 38, 39, 40, 28, 29, 1242, 1243, 763, 762, 776, 704, 761, 1096, 243, 781, 775, 759, 1235, 1246, 760, 462, 463, 782, 783, 784, 179, 351, 382, 705, 710, 706, 1248, 702, 708, 771, 707, 716, 384, 554, 557, 780, 183, 801, 210, 252, 709, 753, 730, 767, 718, 254, 253, 802, 116, 115, 256, 770, 1027, 1104, 1180, 1105, 734, 257, 380, 803, 126, 46, 786, 755, 375, 723, 765, 766, 724, 1102, 769, 1103]
	},
	28: {
		ID: 28,
		grade: 4,
		sub: "Texas",
		country: "United States",
		skills: [789, 792, 787, 847, 790, 791, 467, 831, 834, 1094, 1095, 1015, 735, 736, 1073, 1089, 832, 788, 192, 193, 68, 130, 313, 269, 793, 794, 795, 796, 833, 1028, 1029, 1030, 1031, 840, 959, 960, 835, 268, 211, 194, 195, 1255, 212, 836, 911, 559, 805, 815, 830, 821, 870, 871, 806, 813, 814, 604, 797, 120, 121, 64, 65, 207, 326, 808, 1035, 368, 180, 122, 1068, 848, 962, 542, 562, 565, 767, 837, 838, 839, 1011, 841, 1175, 1054, 733, 1050, 1141, 991, 922, 719, 720, 560, 219, 163, 162, 327, 325, 367, 380, 1014, 843, 846, 900, 994, 1178, 1153, 1033, 1034, 1032, 1109, 901, 849, 986, 925, 927, 381, 375, 117, 46, 564, 721, 106, 353, 354, 331, 333, 513, 937, 934, 850, 844, 897, 892, 1118, 1119, 1106, 1122, 1123, 1074, 1066, 851, 935, 926, 328, 952, 939, 908, 967, 974, 890, 1120, 1121, 1016, 1021, 1142, 1143, 1144, 1145, 894, 989, 990, 888, 889, 316]
	},
	29: {
		ID: 29,
		grade: 5,
		sub: "Texas",
		country: "United States",
		skills: [51, 313, 309, 516, 517, 567, 465, 466, 358, 359, 1076, 909, 910, 287, 285, 312, 816, 825, 303, 807, 809, 558, 327, 162, 163, 124, 117, 375, 953, 891, 964, 965, 1044, 334, 305, 306, 333, 331, 291, 339, 328, 1048, 961, 963, 1052, 1110, 872, 912, 913, 915, 914, 908, 929, 385, 540, 1126, 1127, 1128, 1129, 1157, 1158, 366, 899, 1049, 1161, 1130, 1148, 1154, 1172, 599, 610, 608, 1090, 1091, 854, 855, 876, 1092, 606, 1155, 877, 875, 918, 924, 928]
	},
	30: {
		ID: 30,
		grade: 6,
		sub: "Texas",
		country: "United States",
		skills: [1270, 1278, 358, 359, 499, 507, 534, 538, 514, 329, 998, 515, 711, 314, 1004, 996, 997, 1159, 1279, 363, 372, 509, 502, 506, 373, 374, 367, 376, 508, 943, 691, 698, 1044, 1166, 330, 334, 1048, 1174, 1129, 1075, 315, 324, 341, 342, 340, 1051, 1056, 1057, 1163, 343, 864, 571, 526, 568, 1131, 1162, 1092, 1093, 570, 883, 1146, 1147, 1173, 1069, 1070, 1071, 896, 886, 887, 893, 895, 1132, 885, 907, 906, 884]
	},
	35: {
		ID: 35,
		grade: 7,
		sub: "Common Core",
		country: "United States",
		skills: [223, 329, 515, 383, 984, 985, 1046, 1159, 1043, 372, 509, 858, 367, 502, 506, 531, 1023, 1038, 1025, 1022, 530, 330, 579, 580, 1026, 1009, 1010, 957, 1075, 355, 378, 387, 385, 859, 860, 861, 366, 386, 379, 582, 572, 574, 1006, 1007, 1008, 956, 1079, 525, 511, 864, 878, 573, 568, 571, 1064, 1024, 1036, 1037, 983, 977, 1080, 569, 576, 882, 865, 863, 902, 903, 905, 866, 883, 577, 570, 578, 886, 887, 904, 896, 978, 979, 885, 955, 949, 893, 895, 856, 857, 867, 950, 944, 907, 898, 906, 947, 954, 581, 981, 980, 1042, 1039, 1040, 941, 884, 868, 942, 940, 1041, 982, 869]
	},
	36: {
		ID: 36,
		grade: 7,
		sub: "Florida",
		country: "United States",
		skills: [223, 507, 329, 515, 383, 984, 985, 1046, 1043, 372, 363, 509, 502, 506, 367, 858, 531, 1038, 1023, 1022, 1025, 530, 330, 579, 580, 1026, 1009, 1010, 957, 1075, 324, 355, 378, 385, 859, 860, 861, 387, 386, 366, 379, 582, 572, 574, 1006, 1007, 1008, 956, 1079, 525, 511, 541, 864, 878, 573, 568, 571, 1036, 1037, 983, 1024, 1064, 977, 1080, 569, 576, 882, 865, 863, 902, 903, 905, 866, 883, 577, 570, 578, 904, 896, 886, 887, 978, 979, 955, 949, 893, 895, 885, 856, 857, 867, 898, 907, 944, 950, 954, 981, 947, 906, 581, 941, 884, 980, 1042, 1039, 1040, 1041, 868, 942, 940, 982, 869]
	},
	37: {
		ID: 37,
		grade: 8,
		sub: "Common Core",
		country: "United States",
		skills: [692, 693, 1257, 535, 536, 698, 691, 1063, 641, 642, 640, 1082, 652, 653, 654, 540, 701, 685, 688, 1086, 655, 660, 639, 1277, 638, 656, 1088, 699, 541, 1150, 1099, 1085, 1116, 1101, 1177, 1179, 1097, 1098, 689, 658, 661, 681, 651, 659, 694, 695, 1087, 700, 696, 697, 690, 817, 818, 819, 820, 644, 645, 1276, 1176, 1100, 1151, 1114, 643, 629, 630, 631, 632, 663, 684, 822, 823, 824, 826, 827, 1061, 1152, 1260, 1107, 1053, 662, 664, 634, 635, 636, 637, 628, 665, 666, 1062, 828, 686, 1124, 1125, 1115, 1139, 1134, 1135, 1108, 1081, 679, 680, 633, 1111, 1136, 1140, 1138, 1137, 1113, 682, 667, 1083, 687, 1112, 1133, 1084, 683, 678]
	},
	38: {
		ID: 38,
		grade: 8,
		sub: "Florida",
		country: "United States",
		skills: [692, 693, 1257, 535, 536, 698, 1063, 641, 642, 691, 640, 1082, 652, 653, 654, 701, 540, 1086, 655, 639, 660, 688, 685, 1277, 638, 656, 1085, 1088, 1099, 541, 699, 1150, 1116, 1101, 1177, 1179, 658, 1097, 1098, 689, 661, 681, 694, 695, 651, 1087, 659, 700, 696, 697, 690, 1100, 645, 644, 1176, 1276, 1151, 1114, 629, 630, 631, 632, 643, 1061, 663, 684, 1152, 1260, 1107, 662, 664, 634, 635, 636, 637, 628, 1053, 665, 666, 1062, 686, 1124, 1125, 1115, 1134, 1135, 1108, 1139, 633, 679, 680, 1081, 1140, 1111, 1136, 1138, 1113, 1137, 1083, 667, 682, 687, 1112, 1133, 683, 1084, 678]
	},
	40: {
		ID: 40,
		grade: 7,
		sub: "Texas",
		country: "United States",
		skills: [515, 363, 509, 1012, 1038, 1009, 1048, 1010, 957, 859, 860, 861, 324, 1006, 1007, 1008, 1049, 1165, 1163, 1164, 1013, 1017, 956, 864, 571, 573, 878, 1018, 1019, 983, 1036, 1037, 1167, 1162, 1170, 977, 882, 902, 569, 865, 863, 866, 570, 903, 905, 883, 886, 887, 904, 896, 978, 1020, 1069, 1070, 1071, 1168, 979, 885, 893, 895, 856, 857, 867, 898, 907, 981, 906, 581, 884, 941, 980, 1042, 1039, 1040, 1169, 1041, 940, 868, 982, 869]
	},
	41: {
		ID: 41,
		grade: 8,
		sub: "Texas",
		country: "United States",
		skills: [692, 693, 1257, 1063, 691, 698, 522, 641, 642, 701, 1086, 655, 660, 688, 1277, 1150, 1099, 1085, 1116, 656, 541, 1088, 699, 1097, 1098, 658, 689, 661, 1101, 1179, 659, 1087, 700, 694, 695, 696, 697, 644, 690, 1276, 1100, 1151, 643, 663, 1152, 1061, 1053, 1107, 664, 686, 1124, 1125, 1115, 1062, 1139, 1134, 1135, 1108, 1081, 1111, 1136, 1140, 1138, 1137, 1113, 1083, 682, 687, 1112, 1084]
	}
}, Prodigy.EducationSystem.curriculums2 = {
	1: {
		ID: 1,
		grade: 1,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 92,
			d: 100,
			q: 20,
			t: "Reading Numbers"
			}, {
			ID: 93,
			d: 100,
			q: 20,
			t: "Reading Numbers"
			}, {
			ID: 214,
			d: 100,
			q: 40,
			t: "Measurement "
			}, {
			ID: 226,
			d: 200,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 135,
			d: 200,
			q: 24,
			t: "Time"
			}, {
			ID: 109,
			d: 200,
			q: 40,
			t: "Ordering Numbers"
			}, {
			ID: 231,
			d: 200,
			q: 30,
			t: "Counting"
			}, {
			ID: 1264,
			d: 200,
			q: 40,
			t: "Counting"
			}, {
			ID: 1259,
			d: 200,
			q: 50,
			t: "Counting"
			}, {
			ID: 1265,
			d: 300,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 225,
			d: 300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 227,
			d: 300,
			q: 33,
			t: "Addition to 20"
			}, {
			ID: 94,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 224,
			d: 500,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 136,
			d: 600,
			q: 45,
			t: "Addition to 20"
			}, {
			ID: 197,
			d: 600,
			q: 24,
			t: "2D Shapes"
			}, {
			ID: 3,
			d: 600,
			q: 45,
			t: "Addition to 20"
			}, {
			ID: 50,
			d: 600,
			q: 39,
			t: "Addition to 20"
			}, {
			ID: 546,
			d: 600,
			q: 42,
			t: "Addition to 20"
			}, {
			ID: 95,
			d: 700,
			q: 50,
			t: "Counting"
			}, {
			ID: 96,
			d: 800,
			q: 50,
			t: "Counting"
			}, {
			ID: 97,
			d: 800,
			q: 50,
			t: "Counting"
			}, {
			ID: 91,
			d: 800,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 215,
			d: 800,
			q: 40,
			t: "Data Relationships"
			}, {
			ID: 196,
			d: 800,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 1185,
			d: 900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 98,
			d: 900,
			q: 39,
			t: "Counting"
			}, {
			ID: 103,
			d: 900,
			q: 50,
			t: "Counting"
			}, {
			ID: 107,
			d: 1e3,
			q: 59,
			t: "Composing Numbers"
			}, {
			ID: 89,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 90,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 198,
			d: 1e3,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 1187,
			d: 1e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 388,
			d: 1e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 389,
			d: 1100,
			q: 50,
			t: "Counting"
			}, {
			ID: 1269,
			d: 1100,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 148,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 149,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 229,
			d: 1100,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 4,
			d: 1100,
			q: 90,
			t: "Addition to 20"
			}, {
			ID: 1272,
			d: 1200,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1266,
			d: 1200,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1208,
			d: 1200,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 232,
			d: 1200,
			q: 20,
			t: "Subtraction to 20"
			}, {
			ID: 1271,
			d: 1300,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 49,
			d: 1300,
			q: 45,
			t: "Subtraction to 20"
			}, {
			ID: 111,
			d: 1400,
			q: 17,
			t: "Mixed Operations"
			}, {
			ID: 138,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 137,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 140,
			d: 1400,
			q: 48,
			t: "Mixed Operations"
			}, {
			ID: 108,
			d: 1500,
			q: 60,
			t: "Composing Numbers"
			}, {
			ID: 1186,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 391,
			d: 1500,
			q: 40,
			t: "Comparing Numbers"
			}, {
			ID: 1188,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1212,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1251,
			d: 1600,
			q: 50,
			t: "Patterning"
			}, {
			ID: 230,
			d: 1600,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 1210,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1181,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1247,
			d: 1700,
			q: 16,
			t: "Fractions"
			}, {
			ID: 1249,
			d: 1700,
			q: 22,
			t: "Fractions"
			}, {
			ID: 390,
			d: 1800,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 1182,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1209,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 228,
			d: 1800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 393,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 470,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 1183,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1184,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 392,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 473,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 475,
			d: 2e3,
			q: 24,
			t: "Time"
			}, {
			ID: 481,
			d: 2200,
			q: 40,
			t: "Patterning"
			}, {
			ID: 482,
			d: 2200,
			q: 40,
			t: "Patterning"
			}, {
			ID: 480,
			d: 2300,
			q: 40,
			t: "Patterning"
			}]
	},
	2: {
		ID: 2,
		grade: 2,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 4,
			d: 1100,
			q: 90,
			t: "Addition to 20"
			}, {
			ID: 1207,
			d: 1600,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1189,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1190,
			d: 1700,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 87,
			d: 1700,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 82,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 83,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 201,
			d: 2500,
			q: 28,
			t: "Location"
			}, {
			ID: 200,
			d: 2500,
			q: 28,
			t: "Location"
			}, {
			ID: 424,
			d: 2500,
			q: 10,
			t: "Reading Numbers"
			}, {
			ID: 425,
			d: 2500,
			q: 10,
			t: "Reading Numbers"
			}, {
			ID: 456,
			d: 2600,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 455,
			d: 2700,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 426,
			d: 2700,
			q: 50,
			t: "Counting"
			}, {
			ID: 233,
			d: 2700,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 86,
			d: 2700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1208,
			d: 2700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1210,
			d: 2800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1195,
			d: 2800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1193,
			d: 2800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 400,
			d: 2800,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 59,
			d: 2800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 73,
			d: 2800,
			q: 47,
			t: "Counting"
			}, {
			ID: 427,
			d: 2800,
			q: 49,
			t: "Counting"
			}, {
			ID: 451,
			d: 2800,
			q: 50,
			t: "Addition"
			}, {
			ID: 454,
			d: 2800,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 72,
			d: 2900,
			q: 22,
			t: "Counting"
			}, {
			ID: 428,
			d: 2900,
			q: 20,
			t: "Counting"
			}, {
			ID: 429,
			d: 3e3,
			q: 50,
			t: "Counting"
			}, {
			ID: 75,
			d: 3e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 74,
			d: 3e3,
			q: 34,
			t: "Counting"
			}, {
			ID: 543,
			d: 3e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 545,
			d: 3e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 457,
			d: 3e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 458,
			d: 3e3,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 440,
			d: 3100,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 439,
			d: 3100,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 544,
			d: 3200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 164,
			d: 3200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 237,
			d: 3200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 436,
			d: 3300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 437,
			d: 3300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 438,
			d: 3300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 401,
			d: 3300,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 452,
			d: 3400,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 460,
			d: 3400,
			q: 40,
			t: "Word Problems"
			}, {
			ID: 399,
			d: 3400,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 241,
			d: 3400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1194,
			d: 3400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1191,
			d: 3400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1209,
			d: 3400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1228,
			d: 3400,
			q: 46,
			t: "Place Value"
			}, {
			ID: 453,
			d: 3500,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 548,
			d: 3600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 52,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 53,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 60,
			d: 3700,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 1212,
			d: 3700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 110,
			d: 3800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 677,
			d: 3800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 676,
			d: 3800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 674,
			d: 3900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 675,
			d: 3900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 673,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 672,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 459,
			d: 4e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 479,
			d: 4300,
			q: 47,
			t: "Time"
			}, {
			ID: 478,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 1218,
			d: 4300,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1224,
			d: 4300,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 477,
			d: 4400,
			q: 24,
			t: "Time"
			}, {
			ID: 6,
			d: 4400,
			q: 180,
			t: "Addition to 100"
			}, {
			ID: 7,
			d: 4500,
			q: 143,
			t: "Addition to 100"
			}, {
			ID: 1227,
			d: 4500,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1217,
			d: 4600,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 166,
			d: 4800,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 547,
			d: 4800,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 1213,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1214,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1215,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1216,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1211,
			d: 5e3,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 77,
			d: 5e3,
			q: 56,
			t: "Patterning"
			}, {
			ID: 76,
			d: 5100,
			q: 56,
			t: "Patterning"
			}, {
			ID: 395,
			d: 5100,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 1202,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1192,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1219,
			d: 5100,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1221,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1222,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1197,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1206,
			d: 5200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 396,
			d: 5200,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 398,
			d: 5400,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 484,
			d: 5500,
			q: 40,
			t: "Patterning"
			}, {
			ID: 483,
			d: 5500,
			q: 40,
			t: "Patterning"
			}, {
			ID: 485,
			d: 5600,
			q: 40,
			t: "Patterning"
			}, {
			ID: 555,
			d: 6200,
			q: 50,
			t: "Mixed Operations"
			}]
	},
	3: {
		ID: 3,
		grade: 3,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 1256,
			d: 500,
			q: 50,
			t: "Counting"
			}, {
			ID: 1273,
			d: 600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 86,
			d: 1600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 82,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 87,
			d: 1700,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 83,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 435,
			d: 2e3,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 456,
			d: 2600,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 454,
			d: 2800,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 431,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 432,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 158,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 430,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 177,
			d: 3e3,
			q: 50,
			t: "Counting"
			}, {
			ID: 434,
			d: 3e3,
			q: 32,
			t: "Counting"
			}, {
			ID: 457,
			d: 3e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 458,
			d: 3e3,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 1275,
			d: 3e3,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 1224,
			d: 3200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 164,
			d: 3200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1227,
			d: 3300,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 461,
			d: 3400,
			q: 50,
			t: "Counting"
			}, {
			ID: 241,
			d: 3400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1231,
			d: 3500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1232,
			d: 3500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 176,
			d: 3600,
			q: 50,
			t: "Counting"
			}, {
			ID: 349,
			d: 3600,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 348,
			d: 3700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 185,
			d: 3800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 443,
			d: 3800,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 444,
			d: 3800,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 552,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 459,
			d: 4e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 728,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 186,
			d: 4e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 143,
			d: 4e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 144,
			d: 4e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 408,
			d: 4e3,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 350,
			d: 4e3,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1280,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1278,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1270,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 441,
			d: 4100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 442,
			d: 4100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 550,
			d: 4200,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 154,
			d: 4200,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 213,
			d: 4300,
			q: 25,
			t: "Measurement"
			}, {
			ID: 346,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 471,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 476,
			d: 4400,
			q: 50,
			t: "Time"
			}, {
			ID: 487,
			d: 4400,
			q: 40,
			t: "Measurement"
			}, {
			ID: 277,
			d: 4500,
			q: 50,
			t: "Time"
			}, {
			ID: 283,
			d: 4500,
			q: 46,
			t: "Time"
			}, {
			ID: 178,
			d: 4600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1281,
			d: 4700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 166,
			d: 4800,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 77,
			d: 5e3,
			q: 56,
			t: "Patterning"
			}, {
			ID: 852,
			d: 5300,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 751,
			d: 6400,
			q: 50,
			t: "Rounding"
			}, {
			ID: 713,
			d: 6500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 714,
			d: 6500,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1233,
			d: 6500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 549,
			d: 6500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 464,
			d: 6500,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 210,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 31,
			d: 6500,
			q: 21,
			t: "Multiplication Facts"
			}, {
			ID: 284,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 279,
			d: 6500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 273,
			d: 6500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 252,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 347,
			d: 6500,
			q: 50,
			t: "Temperature"
			}, {
			ID: 1274,
			d: 6500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1239,
			d: 6500,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1254,
			d: 6600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1237,
			d: 6600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1244,
			d: 6600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 272,
			d: 6600,
			q: 50,
			t: "Patterning"
			}, {
			ID: 146,
			d: 6600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 222,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 486,
			d: 6600,
			q: 50,
			t: "Angles"
			}, {
			ID: 584,
			d: 6600,
			q: 50,
			t: "Patterning"
			}, {
			ID: 591,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 592,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 777,
			d: 6600,
			q: 40,
			t: "Addition to 1000"
			}, {
			ID: 597,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 602,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 603,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 598,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 596,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 733,
			d: 6700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 612,
			d: 6700,
			q: 42,
			t: "Angles"
			}, {
			ID: 762,
			d: 6700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 595,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 496,
			d: 6700,
			q: 33,
			t: "Angles"
			}, {
			ID: 220,
			d: 6700,
			q: 50,
			t: "Measurement"
			}, {
			ID: 221,
			d: 6700,
			q: 50,
			t: "Measurement"
			}, {
			ID: 246,
			d: 6700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 384,
			d: 6700,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 1242,
			d: 6700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1236,
			d: 6800,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1245,
			d: 6800,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1246,
			d: 6800,
			q: 23,
			t: "Geometry"
			}, {
			ID: 1248,
			d: 6800,
			q: 30,
			t: "Geometry"
			}, {
			ID: 382,
			d: 6800,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 383,
			d: 6800,
			q: 35,
			t: "3D Shapes"
			}, {
			ID: 351,
			d: 6800,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 255,
			d: 6800,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 268,
			d: 6800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 240,
			d: 6800,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 242,
			d: 6800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 27,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 25,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 26,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 593,
			d: 6800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 594,
			d: 6800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 778,
			d: 6800,
			q: 40,
			t: "Subtraction to 1000"
			}, {
			ID: 779,
			d: 6800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1095,
			d: 6800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 712,
			d: 6800,
			q: 48,
			t: "Patterning"
			}, {
			ID: 601,
			d: 6800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 600,
			d: 6800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 763,
			d: 6900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 716,
			d: 6900,
			q: 50,
			t: "Measurement"
			}, {
			ID: 583,
			d: 6900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 174,
			d: 6900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 247,
			d: 6900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 250,
			d: 6900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 380,
			d: 6900,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 381,
			d: 7e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 345,
			d: 7e3,
			q: 50,
			t: "Money"
			}, {
			ID: 243,
			d: 7e3,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 270,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 248,
			d: 7e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 590,
			d: 7e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 417,
			d: 7e3,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 754,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1235,
			d: 7e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1094,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 785,
			d: 7e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1243,
			d: 7e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1255,
			d: 7100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 607,
			d: 7100,
			q: 50,
			t: "Money"
			}, {
			ID: 780,
			d: 7100,
			q: 50,
			t: "Measurement"
			}, {
			ID: 588,
			d: 7100,
			q: 50,
			t: "Probability"
			}, {
			ID: 344,
			d: 7100,
			q: 49,
			t: "Money"
			}, {
			ID: 251,
			d: 7100,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 269,
			d: 7100,
			q: 50,
			t: "Patterning"
			}, {
			ID: 406,
			d: 7100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 352,
			d: 7200,
			q: 48,
			t: "Probability"
			}, {
			ID: 249,
			d: 7200,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 175,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 736,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 735,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 611,
			d: 7200,
			q: 50,
			t: "Money"
			}, {
			ID: 605,
			d: 7300,
			q: 50,
			t: "Money"
			}, {
			ID: 835,
			d: 7300,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 832,
			d: 7300,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 1096,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 586,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 587,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 589,
			d: 7300,
			q: 50,
			t: "Probability"
			}, {
			ID: 409,
			d: 7300,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 187,
			d: 7300,
			q: 40,
			t: "Money"
			}, {
			ID: 278,
			d: 7300,
			q: 50,
			t: "Money"
			}, {
			ID: 282,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 281,
			d: 7500,
			q: 50,
			t: "Mixed Operations"
			}]
	},
	4: {
		ID: 4,
		grade: 4,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 164,
			d: 3200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 241,
			d: 3400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 166,
			d: 4800,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 31,
			d: 8500,
			q: 21,
			t: "Multiplication Facts"
			}, {
			ID: 32,
			d: 8500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 33,
			d: 8500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 34,
			d: 8500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 35,
			d: 8500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 36,
			d: 8500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 253,
			d: 8500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 254,
			d: 8500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 472,
			d: 8500,
			q: 50,
			t: "Time"
			}, {
			ID: 847,
			d: 8500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 495,
			d: 8600,
			q: 50,
			t: "Time"
			}, {
			ID: 252,
			d: 8600,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 37,
			d: 8600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 38,
			d: 8600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 39,
			d: 8600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 40,
			d: 8600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 127,
			d: 8600,
			q: 25,
			t: "Conversion"
			}, {
			ID: 210,
			d: 8600,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 218,
			d: 8700,
			q: 25,
			t: "Time"
			}, {
			ID: 255,
			d: 8700,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 257,
			d: 8700,
			q: 43,
			t: "2D Shapes"
			}, {
			ID: 556,
			d: 8700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 756,
			d: 8700,
			q: 49,
			t: "Multiplication"
			}, {
			ID: 764,
			d: 8700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 772,
			d: 8700,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 1028,
			d: 8700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1029,
			d: 8700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 759,
			d: 8800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 256,
			d: 8800,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 128,
			d: 8800,
			q: 25,
			t: "Conversion"
			}, {
			ID: 26,
			d: 8800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 25,
			d: 8800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 27,
			d: 8800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 28,
			d: 8900,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 29,
			d: 8900,
			q: 9,
			t: "Division Facts"
			}, {
			ID: 129,
			d: 8900,
			q: 25,
			t: "Conversion"
			}, {
			ID: 447,
			d: 8900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 448,
			d: 8900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 760,
			d: 8900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 781,
			d: 8900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 797,
			d: 8900,
			q: 50,
			t: "Rounding"
			}, {
			ID: 1045,
			d: 8900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 1047,
			d: 8900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 773,
			d: 9e3,
			q: 45,
			t: "Division"
			}, {
			ID: 775,
			d: 9e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 758,
			d: 9e3,
			q: 49,
			t: "Division"
			}, {
			ID: 467,
			d: 9e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 704,
			d: 9e3,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 705,
			d: 9e3,
			q: 44,
			t: "Division"
			}, {
			ID: 715,
			d: 9e3,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 718,
			d: 9e3,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 722,
			d: 9e3,
			q: 45,
			t: "Fractions: Represent"
			}, {
			ID: 753,
			d: 9e3,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 130,
			d: 9e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 68,
			d: 9e3,
			q: 50,
			t: "Rounding"
			}, {
			ID: 446,
			d: 9100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 445,
			d: 9100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 761,
			d: 9100,
			q: 50,
			t: "Division"
			}, {
			ID: 782,
			d: 9100,
			q: 50,
			t: "Division"
			}, {
			ID: 1027,
			d: 9100,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 767,
			d: 9200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 734,
			d: 9200,
			q: 33,
			t: "Fractions: Comparing"
			}, {
			ID: 709,
			d: 9200,
			q: 50,
			t: "Division"
			}, {
			ID: 706,
			d: 9200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 707,
			d: 9200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 208,
			d: 9200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 184,
			d: 9300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 183,
			d: 9300,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 719,
			d: 9300,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 720,
			d: 9300,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 710,
			d: 9300,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 776,
			d: 9300,
			q: 50,
			t: "Division"
			}, {
			ID: 801,
			d: 9400,
			q: 48,
			t: "Measurement"
			}, {
			ID: 802,
			d: 9400,
			q: 40,
			t: "Measurement"
			}, {
			ID: 1030,
			d: 9400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1031,
			d: 9400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 180,
			d: 9400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 206,
			d: 9500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 216,
			d: 9500,
			q: 35,
			t: "Measurement Relationships"
			}, {
			ID: 755,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 708,
			d: 9500,
			q: 50,
			t: "Division"
			}, {
			ID: 488,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 491,
			d: 9500,
			q: 20,
			t: "Measurement"
			}, {
			ID: 489,
			d: 9500,
			q: 20,
			t: "Measurement"
			}, {
			ID: 490,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 786,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 959,
			d: 9500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 841,
			d: 9500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 843,
			d: 9500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 766,
			d: 9500,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 783,
			d: 9500,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 765,
			d: 9500,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 934,
			d: 9600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 960,
			d: 9600,
			q: 50,
			t: "Patterning"
			}, {
			ID: 462,
			d: 9600,
			q: 40,
			t: "Multiplication"
			}, {
			ID: 463,
			d: 9600,
			q: 45,
			t: "Division"
			}, {
			ID: 126,
			d: 9600,
			q: 50,
			t: "Fractions"
			}, {
			ID: 205,
			d: 9600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 181,
			d: 9700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 219,
			d: 9700,
			q: 30,
			t: "Fractions"
			}, {
			ID: 711,
			d: 9700,
			q: 48,
			t: "Multiplication"
			}, {
			ID: 757,
			d: 9700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1279,
			d: 9700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 821,
			d: 9800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 784,
			d: 9800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 120,
			d: 9800,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 139,
			d: 9800,
			q: 50,
			t: "Money"
			}, {
			ID: 121,
			d: 9900,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 182,
			d: 9900,
			q: 50,
			t: "Money"
			}, {
			ID: 702,
			d: 9900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 808,
			d: 9900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 815,
			d: 1e4,
			q: 50,
			t: "Division"
			}, {
			ID: 412,
			d: 1e4,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 419,
			d: 1e4,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 179,
			d: 1e4,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 806,
			d: 10100,
			q: 50,
			t: "Division"
			}, {
			ID: 853,
			d: 10100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 848,
			d: 10200,
			q: 50,
			t: "Division"
			}]
	},
	5: {
		ID: 5,
		grade: 5,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 1180,
			d: 9400,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 989,
			d: 11e3,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1035,
			d: 11e3,
			q: 32,
			t: "Time"
			}, {
			ID: 51,
			d: 11e3,
			q: 50,
			t: "Rounding"
			}, {
			ID: 223,
			d: 11e3,
			q: 48,
			t: "Data Relationships"
			}, {
			ID: 258,
			d: 11e3,
			q: 50,
			t: "Addition"
			}, {
			ID: 212,
			d: 11e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 211,
			d: 11e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 263,
			d: 11e3,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 449,
			d: 11e3,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 326,
			d: 11e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 338,
			d: 11e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 266,
			d: 11100,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 261,
			d: 11100,
			q: 50,
			t: "Addition"
			}, {
			ID: 1050,
			d: 11100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 990,
			d: 11100,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1054,
			d: 11100,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 1068,
			d: 11200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 329,
			d: 11200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 512,
			d: 11200,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 803,
			d: 11200,
			q: 50,
			t: "Area"
			}, {
			ID: 260,
			d: 11200,
			q: 50,
			t: "Addition"
			}, {
			ID: 259,
			d: 11200,
			q: 50,
			t: "Addition"
			}, {
			ID: 153,
			d: 11200,
			q: 50,
			t: "Time"
			}, {
			ID: 119,
			d: 11200,
			q: 50,
			t: "Money"
			}, {
			ID: 122,
			d: 11200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 120,
			d: 11200,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 121,
			d: 11200,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 152,
			d: 11200,
			q: 50,
			t: "Time"
			}, {
			ID: 113,
			d: 11300,
			q: 50,
			t: "Addition"
			}, {
			ID: 161,
			d: 11300,
			q: 50,
			t: "Time"
			}, {
			ID: 264,
			d: 11300,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 805,
			d: 11300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 769,
			d: 11300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 265,
			d: 11300,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 879,
			d: 11300,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 770,
			d: 11400,
			q: 50,
			t: "Area"
			}, {
			ID: 816,
			d: 11400,
			q: 50,
			t: "Division"
			}, {
			ID: 825,
			d: 11400,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 813,
			d: 11400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 421,
			d: 11400,
			q: 50,
			t: "Time"
			}, {
			ID: 114,
			d: 11400,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 64,
			d: 11400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 414,
			d: 11500,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 723,
			d: 11500,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 849,
			d: 11500,
			q: 50,
			t: "Division"
			}, {
			ID: 807,
			d: 11500,
			q: 50,
			t: "Division"
			}, {
			ID: 809,
			d: 11500,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 870,
			d: 11500,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 838,
			d: 11500,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 911,
			d: 11500,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1077,
			d: 11500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1066,
			d: 11500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 1178,
			d: 11600,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 563,
			d: 11600,
			q: 18,
			t: "Fractions: Equivalent"
			}, {
			ID: 814,
			d: 11600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 730,
			d: 11600,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 162,
			d: 11600,
			q: 50,
			t: "Division"
			}, {
			ID: 65,
			d: 11600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 163,
			d: 11600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 125,
			d: 11700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 63,
			d: 11700,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 62,
			d: 11700,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 415,
			d: 11700,
			q: 40,
			t: "Word Problems"
			}, {
			ID: 724,
			d: 11700,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 416,
			d: 11700,
			q: 50,
			t: "Word Problems"
			}, {
			ID: 493,
			d: 11700,
			q: 40,
			t: "Measurement"
			}, {
			ID: 492,
			d: 11700,
			q: 40,
			t: "Measurement"
			}, {
			ID: 871,
			d: 11700,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 839,
			d: 11800,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1034,
			d: 11800,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1104,
			d: 11800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 115,
			d: 11800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 116,
			d: 11800,
			q: 50,
			t: "Division"
			}, {
			ID: 124,
			d: 11900,
			q: 50,
			t: "Conversion"
			}, {
			ID: 952,
			d: 11900,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 721,
			d: 11900,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 1103,
			d: 11900,
			q: 49,
			t: "Fractions: Equivalent"
			}, {
			ID: 1048,
			d: 11900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 922,
			d: 12e3,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 939,
			d: 12e3,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1044,
			d: 12e3,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 497,
			d: 12e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 967,
			d: 12100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 106,
			d: 12100,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 974,
			d: 12100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1011,
			d: 12100,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 997,
			d: 12100,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1014,
			d: 12200,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 1055,
			d: 12200,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1016,
			d: 12300,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 516,
			d: 12300,
			q: 50,
			t: "Decimals"
			}, {
			ID: 517,
			d: 12300,
			q: 50,
			t: "Decimals"
			}, {
			ID: 559,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 1105,
			d: 12400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 160,
			d: 12500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 195,
			d: 12500,
			q: 50,
			t: "Decimals"
			}, {
			ID: 194,
			d: 12500,
			q: 50,
			t: "Decimals"
			}, {
			ID: 123,
			d: 12600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1102,
			d: 12600,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 46,
			d: 12700,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 192,
			d: 12700,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 193,
			d: 12700,
			q: 50,
			t: "Comparing Numbers"
			}]
	},
	6: {
		ID: 6,
		grade: 6,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 450,
			d: 13e3,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 614,
			d: 13e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 308,
			d: 13100,
			q: 50,
			t: "Place Value"
			}, {
			ID: 787,
			d: 13100,
			q: 50,
			t: "Place Value"
			}, {
			ID: 789,
			d: 13100,
			q: 50,
			t: "Place Value"
			}, {
			ID: 841,
			d: 13200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 792,
			d: 13200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 830,
			d: 13200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1106,
			d: 13200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 309,
			d: 13200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 327,
			d: 13200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 336,
			d: 13200,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 337,
			d: 13200,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 373,
			d: 13200,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 374,
			d: 13300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 375,
			d: 13300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 376,
			d: 13300,
			q: 50,
			t: "Measurement"
			}, {
			ID: 372,
			d: 13300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 1073,
			d: 13300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1032,
			d: 13300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1109,
			d: 13300,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 791,
			d: 13300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 567,
			d: 13300,
			q: 50,
			t: "Rounding"
			}, {
			ID: 790,
			d: 13300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 788,
			d: 13400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1126,
			d: 13400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1127,
			d: 13400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1076,
			d: 13400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 1012,
			d: 13400,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 615,
			d: 13400,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 465,
			d: 13400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 466,
			d: 13400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 369,
			d: 13400,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 367,
			d: 13400,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 385,
			d: 13500,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 312,
			d: 13500,
			q: 50,
			t: "Decimals"
			}, {
			ID: 313,
			d: 13500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1089,
			d: 13500,
			q: 48,
			t: "Place Value"
			}, {
			ID: 966,
			d: 13500,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 626,
			d: 13500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 625,
			d: 13500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 623,
			d: 13500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 968,
			d: 13600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 310,
			d: 13600,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 288,
			d: 13600,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 366,
			d: 13600,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 289,
			d: 13700,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 311,
			d: 13700,
			q: 50,
			t: "Subtraction to 1,000,000"
			}, {
			ID: 321,
			d: 13800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 969,
			d: 13800,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 1017,
			d: 13800,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 970,
			d: 13800,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1013,
			d: 13800,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 971,
			d: 13900,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 972,
			d: 13900,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 318,
			d: 13900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 387,
			d: 13900,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 561,
			d: 14e3,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 386,
			d: 14e3,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 565,
			d: 14e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 368,
			d: 14e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 324,
			d: 14e3,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 325,
			d: 14e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 319,
			d: 14e3,
			q: 50,
			t: "Division"
			}, {
			ID: 330,
			d: 14e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 564,
			d: 14100,
			q: 50,
			t: "Division"
			}, {
			ID: 617,
			d: 14100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 953,
			d: 14100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 964,
			d: 14200,
			q: 50,
			t: "Division"
			}, {
			ID: 829,
			d: 14200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 810,
			d: 14300,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 961,
			d: 14300,
			q: 50,
			t: "Division"
			}, {
			ID: 965,
			d: 14400,
			q: 50,
			t: "Division"
			}, {
			ID: 286,
			d: 14400,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 335,
			d: 14500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 328,
			d: 14500,
			q: 40,
			t: "Patterning"
			}, {
			ID: 963,
			d: 14500,
			q: 50,
			t: "Division"
			}, {
			ID: 934,
			d: 14500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1052,
			d: 14500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1129,
			d: 14500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1130,
			d: 14600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 361,
			d: 14600,
			q: 40,
			t: "Patterning"
			}, {
			ID: 613,
			d: 14600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 334,
			d: 14600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 290,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 303,
			d: 14600,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 291,
			d: 14600,
			q: 50,
			t: "Division"
			}, {
			ID: 305,
			d: 14700,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 362,
			d: 14700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1157,
			d: 14700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1158,
			d: 14700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 621,
			d: 14700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 620,
			d: 14800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1161,
			d: 14800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1172,
			d: 14800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 360,
			d: 14800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 377,
			d: 14800,
			q: 50,
			t: "Probability"
			}, {
			ID: 560,
			d: 14800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 306,
			d: 14800,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 316,
			d: 14800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 356,
			d: 14900,
			q: 50,
			t: "Probability"
			}, {
			ID: 331,
			d: 14900,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 332,
			d: 14900,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 622,
			d: 14900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 894,
			d: 14900,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 624,
			d: 15e3,
			q: 40,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 333,
			d: 15e3,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 353,
			d: 15e3,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 354,
			d: 15e3,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 339,
			d: 15e3,
			q: 48,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 379,
			d: 15e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 619,
			d: 15e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 618,
			d: 15e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 363,
			d: 15e3,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 364,
			d: 15100,
			q: 50,
			t: "Money"
			}, {
			ID: 378,
			d: 15100,
			q: 50,
			t: "Probability"
			}, {
			ID: 355,
			d: 15100,
			q: 50,
			t: "Probability"
			}, {
			ID: 315,
			d: 15100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 314,
			d: 15100,
			q: 50,
			t: "Addition"
			}, {
			ID: 287,
			d: 15200,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 285,
			d: 15300,
			q: 50,
			t: "Factors"
			}, {
			ID: 357,
			d: 17e3,
			q: 50,
			t: "Probability"
			}]
	},
	8: {
		ID: 8,
		grade: 1,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 92,
			d: 100,
			q: 20,
			t: "Reading Numbers"
			}, {
			ID: 93,
			d: 100,
			q: 20,
			t: "Reading Numbers"
			}, {
			ID: 231,
			d: 200,
			q: 30,
			t: "Counting"
			}, {
			ID: 227,
			d: 300,
			q: 33,
			t: "Addition to 20"
			}, {
			ID: 225,
			d: 300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 1259,
			d: 300,
			q: 50,
			t: "Counting"
			}, {
			ID: 1264,
			d: 300,
			q: 40,
			t: "Counting"
			}, {
			ID: 1273,
			d: 300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1198,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 1204,
			d: 400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1203,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 224,
			d: 500,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 1205,
			d: 500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1265,
			d: 500,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1256,
			d: 500,
			q: 50,
			t: "Counting"
			}, {
			ID: 1268,
			d: 600,
			q: 50,
			t: "Counting"
			}, {
			ID: 1269,
			d: 600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 136,
			d: 600,
			q: 45,
			t: "Addition to 20"
			}, {
			ID: 197,
			d: 600,
			q: 24,
			t: "2D Shapes"
			}, {
			ID: 545,
			d: 600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 546,
			d: 600,
			q: 42,
			t: "Addition to 20"
			}, {
			ID: 1272,
			d: 700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1199,
			d: 700,
			q: 50,
			t: "Counting"
			}, {
			ID: 1200,
			d: 800,
			q: 50,
			t: "Counting"
			}, {
			ID: 1274,
			d: 800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 438,
			d: 800,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 238,
			d: 800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 215,
			d: 800,
			q: 40,
			t: "Data Relationships"
			}, {
			ID: 196,
			d: 800,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 98,
			d: 900,
			q: 39,
			t: "Counting"
			}, {
			ID: 1185,
			d: 900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1201,
			d: 900,
			q: 50,
			t: "Counting"
			}, {
			ID: 1267,
			d: 1e3,
			q: 50,
			t: "Counting"
			}, {
			ID: 1187,
			d: 1e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 388,
			d: 1e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 543,
			d: 1e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 107,
			d: 1e3,
			q: 59,
			t: "Composing Numbers"
			}, {
			ID: 89,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 90,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 91,
			d: 1e3,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 198,
			d: 1e3,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 229,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 389,
			d: 1100,
			q: 50,
			t: "Counting"
			}, {
			ID: 148,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 149,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 237,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 232,
			d: 1200,
			q: 20,
			t: "Subtraction to 20"
			}, {
			ID: 668,
			d: 1200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 439,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 440,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 1208,
			d: 1200,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 669,
			d: 1200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1275,
			d: 1200,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 1266,
			d: 1200,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1220,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 1271,
			d: 1300,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 436,
			d: 1300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 547,
			d: 1300,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 437,
			d: 1300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 49,
			d: 1300,
			q: 45,
			t: "Subtraction to 20"
			}, {
			ID: 138,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 140,
			d: 1400,
			q: 48,
			t: "Mixed Operations"
			}, {
			ID: 111,
			d: 1400,
			q: 17,
			t: "Mixed Operations"
			}, {
			ID: 137,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 391,
			d: 1500,
			q: 40,
			t: "Comparing Numbers"
			}, {
			ID: 108,
			d: 1500,
			q: 60,
			t: "Composing Numbers"
			}, {
			ID: 1186,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1188,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1207,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1212,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1251,
			d: 1600,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1195,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1193,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 86,
			d: 1600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 230,
			d: 1600,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 87,
			d: 1700,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1194,
			d: 1700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1181,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1191,
			d: 1700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1228,
			d: 1700,
			q: 46,
			t: "Place Value"
			}, {
			ID: 1210,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1247,
			d: 1700,
			q: 16,
			t: "Fractions"
			}, {
			ID: 1249,
			d: 1700,
			q: 22,
			t: "Fractions"
			}, {
			ID: 1254,
			d: 1800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1182,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1209,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 4,
			d: 1800,
			q: 90,
			t: "Addition to 20"
			}, {
			ID: 60,
			d: 1800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 228,
			d: 1800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 239,
			d: 1900,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 83,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 548,
			d: 1900,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1230,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1229,
			d: 1900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 470,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 475,
			d: 2e3,
			q: 24,
			t: "Time"
			}, {
			ID: 393,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 473,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 392,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 670,
			d: 2e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 671,
			d: 2e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1183,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1184,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 110,
			d: 2e3,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 1234,
			d: 2100,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1223,
			d: 2100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1224,
			d: 2200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1227,
			d: 2400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 82,
			d: 2800,
			q: 50,
			t: "Addition to 20"
			}]
	},
	9: {
		ID: 9,
		grade: 2,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 213,
			d: 0,
			q: 25,
			t: "Measurement"
			}, {
			ID: 1189,
			d: 2600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1252,
			d: 2600,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 84,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 86,
			d: 2700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1240,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 82,
			d: 2800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 454,
			d: 2800,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 158,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 432,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 177,
			d: 3e3,
			q: 50,
			t: "Counting"
			}, {
			ID: 457,
			d: 3e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 458,
			d: 3e3,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 1255,
			d: 3200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 83,
			d: 3400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 461,
			d: 3400,
			q: 50,
			t: "Counting"
			}, {
			ID: 1190,
			d: 3400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 52,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 53,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 87,
			d: 3600,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 60,
			d: 3700,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 676,
			d: 3800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 648,
			d: 3800,
			q: 12,
			t: "Money"
			}, {
			ID: 240,
			d: 3800,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 110,
			d: 3800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 677,
			d: 3800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1232,
			d: 3800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1231,
			d: 3800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 443,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 674,
			d: 3900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 444,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 675,
			d: 3900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 552,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 185,
			d: 3900,
			q: 50,
			t: "Place Value"
			}, {
			ID: 459,
			d: 4e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 186,
			d: 4e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 673,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 127,
			d: 4e3,
			q: 25,
			t: "Conversion"
			}, {
			ID: 672,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 728,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1280,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1270,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1278,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1241,
			d: 4100,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 154,
			d: 4200,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 471,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 474,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 1218,
			d: 4300,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 647,
			d: 4300,
			q: 50,
			t: "Money"
			}, {
			ID: 646,
			d: 4400,
			q: 50,
			t: "Money"
			}, {
			ID: 476,
			d: 4400,
			q: 50,
			t: "Time"
			}, {
			ID: 649,
			d: 4400,
			q: 50,
			t: "Money"
			}, {
			ID: 1217,
			d: 4600,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1253,
			d: 4700,
			q: 48,
			t: "Addition to 100"
			}, {
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 166,
			d: 4800,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1213,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1214,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1215,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1216,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1211,
			d: 5e3,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1219,
			d: 5100,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1192,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1202,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1197,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1206,
			d: 5200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1221,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1222,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1281,
			d: 5200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1225,
			d: 5400,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1233,
			d: 5500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1244,
			d: 5600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1237,
			d: 5600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1239,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1245,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1242,
			d: 5700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1236,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1226,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1246,
			d: 5800,
			q: 23,
			t: "Geometry"
			}, {
			ID: 1248,
			d: 5800,
			q: 30,
			t: "Geometry"
			}, {
			ID: 1235,
			d: 6e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1243,
			d: 6e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 417,
			d: 9e3,
			q: 50,
			t: "Addition to 1000"
			}]
	},
	10: {
		ID: 10,
		grade: 3,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 713,
			d: 3900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 555,
			d: 6500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 31,
			d: 6500,
			q: 21,
			t: "Multiplication Facts"
			}, {
			ID: 32,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 33,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 34,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 35,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 36,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 75,
			d: 6500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 210,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 253,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 252,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 751,
			d: 6500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 771,
			d: 6500,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 777,
			d: 6600,
			q: 40,
			t: "Addition to 1000"
			}, {
			ID: 256,
			d: 6600,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 146,
			d: 6600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 37,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 38,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 39,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 40,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 597,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 602,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 598,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 603,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 595,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 596,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 714,
			d: 6700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 726,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 733,
			d: 6700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 77,
			d: 6700,
			q: 56,
			t: "Patterning"
			}, {
			ID: 257,
			d: 6700,
			q: 43,
			t: "2D Shapes"
			}, {
			ID: 764,
			d: 6700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 772,
			d: 6700,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 752,
			d: 6700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 756,
			d: 6700,
			q: 49,
			t: "Multiplication"
			}, {
			ID: 762,
			d: 6700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 759,
			d: 6800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 778,
			d: 6800,
			q: 40,
			t: "Subtraction to 1000"
			}, {
			ID: 779,
			d: 6800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1095,
			d: 6800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 271,
			d: 6800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 25,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 26,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 27,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 712,
			d: 6800,
			q: 48,
			t: "Patterning"
			}, {
			ID: 704,
			d: 6800,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 556,
			d: 6800,
			q: 50,
			t: "Rounding"
			}, {
			ID: 716,
			d: 6900,
			q: 50,
			t: "Measurement"
			}, {
			ID: 28,
			d: 6900,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 29,
			d: 6900,
			q: 9,
			t: "Division Facts"
			}, {
			ID: 76,
			d: 6900,
			q: 56,
			t: "Patterning"
			}, {
			ID: 115,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 174,
			d: 6900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 781,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 763,
			d: 6900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 760,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 758,
			d: 7e3,
			q: 49,
			t: "Division"
			}, {
			ID: 753,
			d: 7e3,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 754,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 773,
			d: 7e3,
			q: 45,
			t: "Division"
			}, {
			ID: 775,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 770,
			d: 7e3,
			q: 50,
			t: "Area"
			}, {
			ID: 785,
			d: 7e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1094,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 462,
			d: 7e3,
			q: 40,
			t: "Multiplication"
			}, {
			ID: 705,
			d: 7e3,
			q: 44,
			t: "Division"
			}, {
			ID: 706,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 557,
			d: 7e3,
			q: 44,
			t: "Fractions: Represent"
			}, {
			ID: 707,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 554,
			d: 7100,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 116,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 803,
			d: 7100,
			q: 50,
			t: "Area"
			}, {
			ID: 782,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 769,
			d: 7100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 780,
			d: 7100,
			q: 50,
			t: "Measurement"
			}, {
			ID: 761,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 735,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 736,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 783,
			d: 7200,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 776,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 463,
			d: 7200,
			q: 45,
			t: "Division"
			}, {
			ID: 175,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 183,
			d: 7200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 315,
			d: 7200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 708,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 709,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 711,
			d: 7200,
			q: 48,
			t: "Multiplication"
			}, {
			ID: 715,
			d: 7200,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 718,
			d: 7200,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 722,
			d: 7200,
			q: 45,
			t: "Fractions: Represent"
			}, {
			ID: 184,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1027,
			d: 7300,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 710,
			d: 7300,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 1096,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 801,
			d: 7400,
			q: 48,
			t: "Measurement"
			}, {
			ID: 802,
			d: 7400,
			q: 40,
			t: "Measurement"
			}, {
			ID: 1279,
			d: 7400,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 757,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 784,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 767,
			d: 7400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 160,
			d: 7400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 734,
			d: 7400,
			q: 33,
			t: "Fractions: Comparing"
			}, {
			ID: 282,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 472,
			d: 7500,
			q: 50,
			t: "Time"
			}, {
			ID: 702,
			d: 7500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 281,
			d: 7500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 755,
			d: 7500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 786,
			d: 7500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1104,
			d: 7500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1105,
			d: 7500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1106,
			d: 7600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 421,
			d: 7600,
			q: 50,
			t: "Time"
			}, {
			ID: 723,
			d: 7600,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 719,
			d: 7600,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 720,
			d: 7600,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 730,
			d: 7700,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 161,
			d: 7700,
			q: 50,
			t: "Time"
			}, {
			ID: 1180,
			d: 7700,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 765,
			d: 7800,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 724,
			d: 7800,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 766,
			d: 7900,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 1102,
			d: 7900,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 1103,
			d: 8e3,
			q: 49,
			t: "Fractions: Equivalent"
			}, {
			ID: 327,
			d: 10400,
			q: 50,
			t: "Conversion"
			}]
	},
	11: {
		ID: 11,
		grade: 4,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 721,
			d: 7800,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 650,
			d: 8100,
			q: 50,
			t: "Money"
			}, {
			ID: 789,
			d: 8100,
			q: 50,
			t: "Place Value"
			}, {
			ID: 449,
			d: 8100,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 793,
			d: 8200,
			q: 50,
			t: "Rounding"
			}, {
			ID: 787,
			d: 8200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 164,
			d: 8200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 182,
			d: 8200,
			q: 50,
			t: "Money"
			}, {
			ID: 278,
			d: 8300,
			q: 50,
			t: "Money"
			}, {
			ID: 794,
			d: 8300,
			q: 50,
			t: "Rounding"
			}, {
			ID: 831,
			d: 8300,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 847,
			d: 8300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 796,
			d: 8400,
			q: 50,
			t: "Rounding"
			}, {
			ID: 788,
			d: 8400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 241,
			d: 8400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 246,
			d: 8500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 795,
			d: 8500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 830,
			d: 8500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 832,
			d: 8600,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 1015,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 790,
			d: 8600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 791,
			d: 8600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 166,
			d: 8600,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 68,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 792,
			d: 8700,
			q: 50,
			t: "Place Value"
			}, {
			ID: 797,
			d: 8700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 834,
			d: 8700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 242,
			d: 8800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 250,
			d: 8800,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 251,
			d: 8900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 247,
			d: 8900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 243,
			d: 8900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1175,
			d: 8900,
			q: 50,
			t: "Angles"
			}, {
			ID: 310,
			d: 9e3,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 248,
			d: 9e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 417,
			d: 9e3,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1050,
			d: 9e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 833,
			d: 9100,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 249,
			d: 9100,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1054,
			d: 9100,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 255,
			d: 9200,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 835,
			d: 9200,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 836,
			d: 9300,
			q: 50,
			t: "Subtraction to 1,000,000"
			}, {
			ID: 325,
			d: 9300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 311,
			d: 9400,
			q: 50,
			t: "Subtraction to 1,000,000"
			}, {
			ID: 409,
			d: 9500,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 989,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 990,
			d: 9600,
			q: 50,
			t: "Measurement"
			}, {
			ID: 962,
			d: 9600,
			q: 50,
			t: "Factors"
			}, {
			ID: 879,
			d: 9600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 987,
			d: 9700,
			q: 50,
			t: "Factors"
			}, {
			ID: 179,
			d: 9700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 279,
			d: 9800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 838,
			d: 9800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 1066,
			d: 9900,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 287,
			d: 9900,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 163,
			d: 9900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 268,
			d: 9900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 285,
			d: 1e4,
			q: 50,
			t: "Factors"
			}, {
			ID: 583,
			d: 1e4,
			q: 50,
			t: "Patterning"
			}, {
			ID: 837,
			d: 1e4,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 848,
			d: 1e4,
			q: 50,
			t: "Division"
			}, {
			ID: 959,
			d: 10100,
			q: 50,
			t: "Patterning"
			}, {
			ID: 565,
			d: 10100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 207,
			d: 10100,
			q: 50,
			t: "Division"
			}, {
			ID: 270,
			d: 10100,
			q: 50,
			t: "Patterning"
			}, {
			ID: 462,
			d: 10200,
			q: 40,
			t: "Multiplication"
			}, {
			ID: 960,
			d: 10200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 849,
			d: 10200,
			q: 50,
			t: "Division"
			}, {
			ID: 839,
			d: 10300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 841,
			d: 10300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 587,
			d: 10300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 162,
			d: 10300,
			q: 50,
			t: "Division"
			}, {
			ID: 1067,
			d: 10300,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1068,
			d: 10400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 327,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 586,
			d: 10400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 850,
			d: 10400,
			q: 50,
			t: "Division"
			}, {
			ID: 1034,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1032,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 851,
			d: 10500,
			q: 50,
			t: "Division"
			}, {
			ID: 843,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 844,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 840,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 584,
			d: 10500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 281,
			d: 10500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 564,
			d: 10600,
			q: 50,
			t: "Division"
			}, {
			ID: 1033,
			d: 10600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1035,
			d: 10600,
			q: 32,
			t: "Time"
			}, {
			ID: 934,
			d: 10600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1141,
			d: 10600,
			q: 25,
			t: "Measurement"
			}, {
			ID: 974,
			d: 10700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1028,
			d: 10700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1029,
			d: 10700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 991,
			d: 10700,
			q: 36,
			t: "Measurement"
			}, {
			ID: 994,
			d: 10700,
			q: 20,
			t: "Measurement"
			}, {
			ID: 846,
			d: 10700,
			q: 50,
			t: "Conversion"
			}, {
			ID: 463,
			d: 10700,
			q: 45,
			t: "Division"
			}, {
			ID: 283,
			d: 10800,
			q: 46,
			t: "Time"
			}, {
			ID: 1030,
			d: 10800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 967,
			d: 10800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1153,
			d: 10800,
			q: 36,
			t: "Measurement"
			}, {
			ID: 1031,
			d: 10900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 282,
			d: 10900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 852,
			d: 11e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1178,
			d: 11e3,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 892,
			d: 11100,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 853,
			d: 11100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 890,
			d: 11200,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 563,
			d: 11300,
			q: 18,
			t: "Fractions: Equivalent"
			}, {
			ID: 46,
			d: 11400,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 561,
			d: 11500,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 894,
			d: 11500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1014,
			d: 11600,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 316,
			d: 11600,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 560,
			d: 11700,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 952,
			d: 11700,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 939,
			d: 11800,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1011,
			d: 11800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 900,
			d: 11900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 106,
			d: 11900,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 1166,
			d: 11900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 558,
			d: 12e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 798,
			d: 12e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 986,
			d: 12e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 922,
			d: 12e3,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 925,
			d: 12100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 799,
			d: 12100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 320,
			d: 12100,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 562,
			d: 12200,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1016,
			d: 12200,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 897,
			d: 12300,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 559,
			d: 12300,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 466,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 465,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 804,
			d: 12400,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 935,
			d: 12400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 901,
			d: 12400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 927,
			d: 12500,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 800,
			d: 12500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 937,
			d: 12600,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 888,
			d: 12700,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1021,
			d: 12800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 889,
			d: 12900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 926,
			d: 13e3,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 908,
			d: 13100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 891,
			d: 13200,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 899,
			d: 13300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 929,
			d: 13400,
			q: 50,
			t: "Fractions: Multiplication"
			}]
	},
	12: {
		ID: 12,
		grade: 5,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 233,
			d: 13600,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 336,
			d: 13600,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 337,
			d: 13600,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 240,
			d: 13600,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 284,
			d: 13600,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 604,
			d: 13700,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 1074,
			d: 13700,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 1077,
			d: 13700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1109,
			d: 13800,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 1073,
			d: 13800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1089,
			d: 13900,
			q: 48,
			t: "Place Value"
			}, {
			ID: 1076,
			d: 14e3,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 567,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 566,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 51,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 120,
			d: 14200,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 121,
			d: 14200,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 805,
			d: 14300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 870,
			d: 14300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 911,
			d: 14300,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 813,
			d: 14400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 64,
			d: 14400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 358,
			d: 14400,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 65,
			d: 14400,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 359,
			d: 14500,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 414,
			d: 14500,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 871,
			d: 14500,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1110,
			d: 14500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 814,
			d: 14600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 821,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 799,
			d: 14600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 808,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 798,
			d: 14600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 815,
			d: 14700,
			q: 50,
			t: "Division"
			}, {
			ID: 806,
			d: 14700,
			q: 50,
			t: "Division"
			}, {
			ID: 1166,
			d: 14700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1174,
			d: 14700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1091,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1090,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 811,
			d: 14800,
			q: 50,
			t: "Division"
			}, {
			ID: 812,
			d: 14800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 610,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 599,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 385,
			d: 14900,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 180,
			d: 14900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 855,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 825,
			d: 14900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 809,
			d: 14900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 854,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 916,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 917,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 918,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 880,
			d: 15e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 874,
			d: 15e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 816,
			d: 15e3,
			q: 50,
			t: "Division"
			}, {
			ID: 807,
			d: 15e3,
			q: 50,
			t: "Division"
			}, {
			ID: 62,
			d: 15e3,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 63,
			d: 15e3,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 303,
			d: 15e3,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 305,
			d: 15e3,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 366,
			d: 15e3,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 608,
			d: 15e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 936,
			d: 15e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 953,
			d: 15e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 609,
			d: 15100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 829,
			d: 15100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 810,
			d: 15100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 876,
			d: 15200,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 872,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 909,
			d: 15200,
			q: 50,
			t: "Numerical Expressions"
			}, {
			ID: 881,
			d: 15200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 606,
			d: 15200,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 286,
			d: 15200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 124,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1118,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1122,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1123,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1092,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1093,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 912,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 914,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 1052,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1173,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1129,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1155,
			d: 15200,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1130,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 915,
			d: 15300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 913,
			d: 15300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 932,
			d: 15300,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 930,
			d: 15300,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 931,
			d: 15300,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1144,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1126,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1127,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1142,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 328,
			d: 15300,
			q: 40,
			t: "Patterning"
			}, {
			ID: 334,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 910,
			d: 15300,
			q: 50,
			t: "Numerical Expressions"
			}, {
			ID: 919,
			d: 15300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 873,
			d: 15300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 877,
			d: 15400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 875,
			d: 15400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 362,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1143,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1158,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1161,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1119,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1120,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1121,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1145,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1156,
			d: 15400,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1157,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1172,
			d: 15500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1148,
			d: 15500,
			q: 45,
			t: "Conversion"
			}, {
			ID: 1154,
			d: 15500,
			q: 36,
			t: "Conversion"
			}, {
			ID: 1128,
			d: 15500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 928,
			d: 15600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 924,
			d: 15600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 923,
			d: 18400,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 920,
			d: 18500,
			q: 50,
			t: "Fractions: Multiplication"
			}]
	},
	13: {
		ID: 13,
		grade: 6,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 65,
			d: 14400,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 120,
			d: 18600,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 121,
			d: 18600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 507,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 504,
			d: 18600,
			q: 50,
			t: "Factors and Multiples"
			}, {
			ID: 505,
			d: 18600,
			q: 48,
			t: "Factors and Multiples"
			}, {
			ID: 999,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 998,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1005,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1057,
			d: 18600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 973,
			d: 18700,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 535,
			d: 18700,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 536,
			d: 18700,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 966,
			d: 18700,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 499,
			d: 18700,
			q: 40,
			t: "Rational Numbers: Represent"
			}, {
			ID: 500,
			d: 18800,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 501,
			d: 18800,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 376,
			d: 18800,
			q: 50,
			t: "Measurement"
			}, {
			ID: 288,
			d: 18800,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 64,
			d: 18800,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 968,
			d: 18800,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1056,
			d: 18800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1131,
			d: 18800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1060,
			d: 18800,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 1012,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 1045,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 1047,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 1146,
			d: 18900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1147,
			d: 18900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 964,
			d: 18900,
			q: 50,
			t: "Division"
			}, {
			ID: 969,
			d: 18900,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 971,
			d: 18900,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 972,
			d: 18900,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 289,
			d: 18900,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 503,
			d: 18900,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 366,
			d: 19e3,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 510,
			d: 19e3,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 334,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 385,
			d: 19e3,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 303,
			d: 19e3,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 961,
			d: 19e3,
			q: 50,
			t: "Division"
			}, {
			ID: 965,
			d: 19e3,
			q: 50,
			t: "Division"
			}, {
			ID: 970,
			d: 19e3,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1132,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1058,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1078,
			d: 19100,
			q: 32,
			t: "3D Shapes"
			}, {
			ID: 963,
			d: 19100,
			q: 50,
			t: "Division"
			}, {
			ID: 305,
			d: 19200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 291,
			d: 19200,
			q: 50,
			t: "Division"
			}, {
			ID: 306,
			d: 19300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 1e3,
			d: 19300,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 975,
			d: 19400,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 945,
			d: 19400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 946,
			d: 19400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1059,
			d: 19400,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1065,
			d: 19500,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 951,
			d: 19500,
			q: 47,
			t: "Fractions: Division"
			}, {
			ID: 948,
			d: 19500,
			q: 47,
			t: "Fractions: Division"
			}, {
			ID: 1017,
			d: 19500,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 1018,
			d: 19500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 976,
			d: 19500,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 995,
			d: 19500,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 1019,
			d: 19600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1001,
			d: 19600,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 324,
			d: 19600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 509,
			d: 19600,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1169,
			d: 19600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1149,
			d: 19600,
			q: 8,
			t: "Data Relationships"
			}, {
			ID: 1013,
			d: 19600,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 1020,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1168,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1069,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1164,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1165,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1070,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1071,
			d: 19700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 502,
			d: 19700,
			q: 50,
			t: "Ratios"
			}, {
			ID: 314,
			d: 19700,
			q: 50,
			t: "Addition"
			}, {
			ID: 1002,
			d: 19700,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 1003,
			d: 19700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 943,
			d: 19800,
			q: 50,
			t: "Ratios"
			}, {
			ID: 331,
			d: 19800,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 332,
			d: 19800,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 363,
			d: 19800,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 506,
			d: 19800,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1170,
			d: 19800,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1167,
			d: 19800,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1049,
			d: 19800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1048,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 508,
			d: 19900,
			q: 50,
			t: "Ratios"
			}, {
			ID: 333,
			d: 19900,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1044,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 997,
			d: 2e4,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1160,
			d: 2e4,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1171,
			d: 2e4,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1055,
			d: 20100,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1004,
			d: 20100,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 315,
			d: 20100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 996,
			d: 20200,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 865,
			d: 20300,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 864,
			d: 20300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 339,
			d: 20400,
			q: 48,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1051,
			d: 20400,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1163,
			d: 20500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1162,
			d: 20600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}]
	},
	16: {
		ID: 16,
		grade: 7,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 890,
			d: 14700,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 320,
			d: 15200,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 323,
			d: 15300,
			q: 50,
			t: "Decimals and Fractions"
			}, {
			ID: 322,
			d: 15300,
			q: 50,
			t: "Decimals and Fractions"
			}, {
			ID: 513,
			d: 15400,
			q: 25,
			t: "Lines"
			}, {
			ID: 987,
			d: 15400,
			q: 50,
			t: "Factors"
			}, {
			ID: 1165,
			d: 15400,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1164,
			d: 15500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 962,
			d: 15500,
			q: 50,
			t: "Factors"
			}, {
			ID: 1167,
			d: 15600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1074,
			d: 15700,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 861,
			d: 15700,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 859,
			d: 15700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 504,
			d: 15700,
			q: 50,
			t: "Factors and Multiples"
			}, {
			ID: 505,
			d: 15700,
			q: 48,
			t: "Factors and Multiples"
			}, {
			ID: 558,
			d: 15700,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 925,
			d: 15800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1118,
			d: 15800,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1122,
			d: 15800,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1123,
			d: 15800,
			q: 50,
			t: "Conversion"
			}, {
			ID: 927,
			d: 15900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 900,
			d: 15900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 901,
			d: 16e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 855,
			d: 16e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 521,
			d: 16e3,
			q: 50,
			t: "Decimals"
			}, {
			ID: 599,
			d: 16e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 494,
			d: 16e3,
			q: 40,
			t: "Measurement"
			}, {
			ID: 935,
			d: 16e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 854,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 897,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 986,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1091,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 518,
			d: 16100,
			q: 50,
			t: "Decimals"
			}, {
			ID: 331,
			d: 16100,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 610,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 562,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1090,
			d: 16200,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1160,
			d: 16200,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 929,
			d: 16200,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 997,
			d: 16200,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 995,
			d: 16200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 899,
			d: 16300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 863,
			d: 16300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 998,
			d: 16300,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1057,
			d: 16300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 332,
			d: 16300,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 507,
			d: 16400,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 908,
			d: 16400,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 865,
			d: 16400,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 1063,
			d: 16400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1082,
			d: 16400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1021,
			d: 16400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1131,
			d: 16400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 926,
			d: 16400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 864,
			d: 16400,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 520,
			d: 16400,
			q: 25,
			t: "Patterning"
			}, {
			ID: 1060,
			d: 16500,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 889,
			d: 16500,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1056,
			d: 16500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 918,
			d: 16500,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 891,
			d: 16500,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 892,
			d: 16500,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 500,
			d: 16500,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 501,
			d: 16500,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 360,
			d: 16600,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 519,
			d: 16600,
			q: 50,
			t: "Integers"
			}, {
			ID: 888,
			d: 16600,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1146,
			d: 16600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1147,
			d: 16700,
			q: 50,
			t: "Geometry"
			}, {
			ID: 354,
			d: 16700,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 353,
			d: 16700,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 358,
			d: 16700,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 1132,
			d: 16800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1046,
			d: 16900,
			q: 25,
			t: "Probability"
			}, {
			ID: 359,
			d: 16900,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 511,
			d: 16900,
			q: 30,
			t: "Probability"
			}, {
			ID: 514,
			d: 17e3,
			q: 40,
			t: "Integers"
			}, {
			ID: 877,
			d: 17600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 876,
			d: 17800,
			q: 50,
			t: "Fractions: Division"
			}]
	},
	17: {
		ID: 17,
		grade: 8,
		sub: "Ontario",
		country: "Canada",
		locationID: "1",
		skills: [{
			ID: 599,
			d: 16e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 855,
			d: 16e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 854,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 610,
			d: 16100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 357,
			d: 17e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 515,
			d: 17100,
			q: 50,
			t: "Integers"
			}, {
			ID: 503,
			d: 17100,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 525,
			d: 17100,
			q: 35,
			t: "Probability"
			}, {
			ID: 528,
			d: 17100,
			q: 45,
			t: "Patterning"
			}, {
			ID: 693,
			d: 17100,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1175,
			d: 17100,
			q: 50,
			t: "Angles"
			}, {
			ID: 1257,
			d: 17200,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1038,
			d: 17200,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 1061,
			d: 17300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1053,
			d: 17300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1079,
			d: 17300,
			q: 50,
			t: "Probability"
			}, {
			ID: 531,
			d: 17300,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 535,
			d: 17300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 536,
			d: 17300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 537,
			d: 17400,
			q: 50,
			t: "Decimals"
			}, {
			ID: 341,
			d: 17400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 538,
			d: 17400,
			q: 50,
			t: "Order of Operations"
			}, {
			ID: 1006,
			d: 17400,
			q: 50,
			t: "Probability"
			}, {
			ID: 973,
			d: 17400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 1107,
			d: 17500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1124,
			d: 17500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 530,
			d: 17500,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 340,
			d: 17500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 542,
			d: 17500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1125,
			d: 17500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1134,
			d: 17600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1135,
			d: 17600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 534,
			d: 17600,
			q: 50,
			t: "Order of Operations"
			}, {
			ID: 608,
			d: 17600,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 342,
			d: 17600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 526,
			d: 17600,
			q: 40,
			t: "Conversion"
			}, {
			ID: 523,
			d: 17600,
			q: 50,
			t: "Rational Numbers"
			}, {
			ID: 524,
			d: 17600,
			q: 50,
			t: "Rational Numbers"
			}, {
			ID: 539,
			d: 17600,
			q: 20,
			t: "Square Roots"
			}, {
			ID: 1092,
			d: 17600,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 532,
			d: 17700,
			q: 50,
			t: "Square Roots"
			}, {
			ID: 609,
			d: 17700,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 540,
			d: 17700,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 541,
			d: 17700,
			q: 30,
			t: "3D Shapes"
			}, {
			ID: 1140,
			d: 17700,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1093,
			d: 17800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 876,
			d: 17800,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 874,
			d: 17900,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 946,
			d: 17900,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1062,
			d: 17900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 606,
			d: 17900,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 529,
			d: 17900,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 688,
			d: 18e3,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1139,
			d: 18e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 977,
			d: 18e3,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 919,
			d: 18e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 873,
			d: 18e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 1155,
			d: 18e3,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1150,
			d: 18100,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 920,
			d: 18100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 866,
			d: 18100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 928,
			d: 18100,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 924,
			d: 18100,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1138,
			d: 18100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1137,
			d: 18200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 978,
			d: 18200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 979,
			d: 18200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 689,
			d: 18200,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 867,
			d: 18300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 981,
			d: 18300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1081,
			d: 18300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 868,
			d: 18400,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 690,
			d: 18400,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1136,
			d: 18400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 533,
			d: 18500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 980,
			d: 18500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1083,
			d: 18500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 982,
			d: 18600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 869,
			d: 18700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1133,
			d: 18700,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1020,
			d: 18800,
			q: 50,
			t: "Proportional Relationships"
			}]
	},
	19: {
		ID: 19,
		grade: 1,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 92,
			d: 100,
			q: 20,
			t: "Reading Numbers"
			}, {
			ID: 93,
			d: 100,
			q: 20,
			t: "Reading Numbers"
			}, {
			ID: 231,
			d: 200,
			q: 30,
			t: "Counting"
			}, {
			ID: 227,
			d: 300,
			q: 33,
			t: "Addition to 20"
			}, {
			ID: 225,
			d: 300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 1259,
			d: 300,
			q: 50,
			t: "Counting"
			}, {
			ID: 1264,
			d: 300,
			q: 40,
			t: "Counting"
			}, {
			ID: 1273,
			d: 300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1203,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 1204,
			d: 400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1198,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 1205,
			d: 500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1265,
			d: 500,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1256,
			d: 500,
			q: 50,
			t: "Counting"
			}, {
			ID: 224,
			d: 500,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 197,
			d: 600,
			q: 24,
			t: "2D Shapes"
			}, {
			ID: 136,
			d: 600,
			q: 45,
			t: "Addition to 20"
			}, {
			ID: 545,
			d: 600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 546,
			d: 600,
			q: 42,
			t: "Addition to 20"
			}, {
			ID: 1268,
			d: 600,
			q: 50,
			t: "Counting"
			}, {
			ID: 1269,
			d: 600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1272,
			d: 700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1199,
			d: 700,
			q: 50,
			t: "Counting"
			}, {
			ID: 1274,
			d: 800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1200,
			d: 800,
			q: 50,
			t: "Counting"
			}, {
			ID: 438,
			d: 800,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 238,
			d: 800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 215,
			d: 800,
			q: 40,
			t: "Data Relationships"
			}, {
			ID: 196,
			d: 800,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 98,
			d: 900,
			q: 39,
			t: "Counting"
			}, {
			ID: 1185,
			d: 900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1201,
			d: 900,
			q: 50,
			t: "Counting"
			}, {
			ID: 229,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 388,
			d: 1e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 543,
			d: 1e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 90,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 91,
			d: 1e3,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 89,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 107,
			d: 1e3,
			q: 59,
			t: "Composing Numbers"
			}, {
			ID: 198,
			d: 1e3,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 1187,
			d: 1e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1267,
			d: 1e3,
			q: 50,
			t: "Counting"
			}, {
			ID: 149,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 148,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 389,
			d: 1100,
			q: 50,
			t: "Counting"
			}, {
			ID: 237,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 439,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 440,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 669,
			d: 1200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 668,
			d: 1200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 232,
			d: 1200,
			q: 20,
			t: "Subtraction to 20"
			}, {
			ID: 1266,
			d: 1200,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1208,
			d: 1200,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1220,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 1275,
			d: 1200,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 1271,
			d: 1300,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 49,
			d: 1300,
			q: 45,
			t: "Subtraction to 20"
			}, {
			ID: 437,
			d: 1300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 547,
			d: 1300,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 436,
			d: 1300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 137,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 111,
			d: 1400,
			q: 17,
			t: "Mixed Operations"
			}, {
			ID: 138,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 140,
			d: 1400,
			q: 48,
			t: "Mixed Operations"
			}, {
			ID: 108,
			d: 1500,
			q: 60,
			t: "Composing Numbers"
			}, {
			ID: 391,
			d: 1500,
			q: 40,
			t: "Comparing Numbers"
			}, {
			ID: 1186,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1207,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1188,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1195,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1212,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1251,
			d: 1600,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1193,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 86,
			d: 1600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 230,
			d: 1600,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 87,
			d: 1700,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1194,
			d: 1700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1191,
			d: 1700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1249,
			d: 1700,
			q: 22,
			t: "Fractions"
			}, {
			ID: 1247,
			d: 1700,
			q: 16,
			t: "Fractions"
			}, {
			ID: 1228,
			d: 1700,
			q: 46,
			t: "Place Value"
			}, {
			ID: 1210,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1181,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1209,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1182,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1254,
			d: 1800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 4,
			d: 1800,
			q: 90,
			t: "Addition to 20"
			}, {
			ID: 60,
			d: 1800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 228,
			d: 1800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 239,
			d: 1900,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 83,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 548,
			d: 1900,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1230,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1229,
			d: 1900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 473,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 475,
			d: 2e3,
			q: 24,
			t: "Time"
			}, {
			ID: 393,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 392,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 470,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 1183,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1184,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 670,
			d: 2e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 671,
			d: 2e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 110,
			d: 2e3,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 1234,
			d: 2100,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1223,
			d: 2100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1224,
			d: 2200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1227,
			d: 2400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 82,
			d: 2800,
			q: 50,
			t: "Addition to 20"
			}]
	},
	20: {
		ID: 20,
		grade: 2,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 213,
			d: 0,
			q: 25,
			t: "Measurement"
			}, {
			ID: 1189,
			d: 2600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1252,
			d: 2600,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 1240,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 84,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 86,
			d: 2700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 82,
			d: 2800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 454,
			d: 2800,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 432,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 158,
			d: 2900,
			q: 50,
			t: "Counting"
			}, {
			ID: 458,
			d: 3e3,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 457,
			d: 3e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 177,
			d: 3e3,
			q: 50,
			t: "Counting"
			}, {
			ID: 1255,
			d: 3200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 461,
			d: 3400,
			q: 50,
			t: "Counting"
			}, {
			ID: 83,
			d: 3400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1190,
			d: 3400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 52,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 53,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 87,
			d: 3600,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 60,
			d: 3700,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 110,
			d: 3800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 240,
			d: 3800,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 676,
			d: 3800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 648,
			d: 3800,
			q: 12,
			t: "Money"
			}, {
			ID: 677,
			d: 3800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1231,
			d: 3800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1232,
			d: 3800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 185,
			d: 3900,
			q: 50,
			t: "Place Value"
			}, {
			ID: 674,
			d: 3900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 675,
			d: 3900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 443,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 444,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 552,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 673,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 186,
			d: 4e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 127,
			d: 4e3,
			q: 25,
			t: "Conversion"
			}, {
			ID: 459,
			d: 4e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 728,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 672,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1280,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1278,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1270,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1241,
			d: 4100,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 154,
			d: 4200,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 474,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 647,
			d: 4300,
			q: 50,
			t: "Money"
			}, {
			ID: 471,
			d: 4300,
			q: 50,
			t: "Time"
			}, {
			ID: 1218,
			d: 4300,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 646,
			d: 4400,
			q: 50,
			t: "Money"
			}, {
			ID: 649,
			d: 4400,
			q: 50,
			t: "Money"
			}, {
			ID: 476,
			d: 4400,
			q: 50,
			t: "Time"
			}, {
			ID: 1217,
			d: 4600,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1253,
			d: 4700,
			q: 48,
			t: "Addition to 100"
			}, {
			ID: 166,
			d: 4800,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1216,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1213,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1214,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1215,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1211,
			d: 5e3,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1192,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1202,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1219,
			d: 5100,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1197,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1206,
			d: 5200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1221,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1222,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1281,
			d: 5200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1225,
			d: 5400,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1233,
			d: 5500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1237,
			d: 5600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1244,
			d: 5600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1245,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1242,
			d: 5700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1239,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1226,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1236,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1246,
			d: 5800,
			q: 23,
			t: "Geometry"
			}, {
			ID: 1248,
			d: 5800,
			q: 30,
			t: "Geometry"
			}, {
			ID: 1243,
			d: 6e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1235,
			d: 6e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 417,
			d: 9e3,
			q: 50,
			t: "Addition to 1000"
			}]
	},
	21: {
		ID: 21,
		grade: 3,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 713,
			d: 3900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 771,
			d: 6500,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 32,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 33,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 34,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 35,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 36,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 75,
			d: 6500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 31,
			d: 6500,
			q: 21,
			t: "Multiplication Facts"
			}, {
			ID: 210,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 252,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 253,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 555,
			d: 6500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 751,
			d: 6500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 603,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 597,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 602,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 598,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 256,
			d: 6600,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 146,
			d: 6600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 37,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 38,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 39,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 40,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 777,
			d: 6600,
			q: 40,
			t: "Addition to 1000"
			}, {
			ID: 762,
			d: 6700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 764,
			d: 6700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 714,
			d: 6700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 756,
			d: 6700,
			q: 49,
			t: "Multiplication"
			}, {
			ID: 772,
			d: 6700,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 257,
			d: 6700,
			q: 43,
			t: "2D Shapes"
			}, {
			ID: 77,
			d: 6700,
			q: 56,
			t: "Patterning"
			}, {
			ID: 596,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 595,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 726,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 733,
			d: 6700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 752,
			d: 6700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 704,
			d: 6800,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 556,
			d: 6800,
			q: 50,
			t: "Rounding"
			}, {
			ID: 271,
			d: 6800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 25,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 26,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 27,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 1095,
			d: 6800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 759,
			d: 6800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 712,
			d: 6800,
			q: 48,
			t: "Patterning"
			}, {
			ID: 778,
			d: 6800,
			q: 40,
			t: "Subtraction to 1000"
			}, {
			ID: 779,
			d: 6800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 781,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 763,
			d: 6900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 760,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 28,
			d: 6900,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 115,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 76,
			d: 6900,
			q: 56,
			t: "Patterning"
			}, {
			ID: 29,
			d: 6900,
			q: 9,
			t: "Division Facts"
			}, {
			ID: 174,
			d: 6900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 716,
			d: 6900,
			q: 50,
			t: "Measurement"
			}, {
			ID: 462,
			d: 7e3,
			q: 40,
			t: "Multiplication"
			}, {
			ID: 705,
			d: 7e3,
			q: 44,
			t: "Division"
			}, {
			ID: 706,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 557,
			d: 7e3,
			q: 44,
			t: "Fractions: Represent"
			}, {
			ID: 707,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 753,
			d: 7e3,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 754,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 758,
			d: 7e3,
			q: 49,
			t: "Division"
			}, {
			ID: 773,
			d: 7e3,
			q: 45,
			t: "Division"
			}, {
			ID: 770,
			d: 7e3,
			q: 50,
			t: "Area"
			}, {
			ID: 775,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 785,
			d: 7e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1094,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 803,
			d: 7100,
			q: 50,
			t: "Area"
			}, {
			ID: 769,
			d: 7100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 761,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 782,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 780,
			d: 7100,
			q: 50,
			t: "Measurement"
			}, {
			ID: 554,
			d: 7100,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 116,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 183,
			d: 7200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 175,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 315,
			d: 7200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 463,
			d: 7200,
			q: 45,
			t: "Division"
			}, {
			ID: 708,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 709,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 715,
			d: 7200,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 711,
			d: 7200,
			q: 48,
			t: "Multiplication"
			}, {
			ID: 735,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 718,
			d: 7200,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 783,
			d: 7200,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 722,
			d: 7200,
			q: 45,
			t: "Fractions: Represent"
			}, {
			ID: 736,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 776,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 1027,
			d: 7300,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1096,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 710,
			d: 7300,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 184,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 282,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 160,
			d: 7400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 734,
			d: 7400,
			q: 33,
			t: "Fractions: Comparing"
			}, {
			ID: 1279,
			d: 7400,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 801,
			d: 7400,
			q: 48,
			t: "Measurement"
			}, {
			ID: 802,
			d: 7400,
			q: 40,
			t: "Measurement"
			}, {
			ID: 767,
			d: 7400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 757,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 784,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 786,
			d: 7500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 755,
			d: 7500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1104,
			d: 7500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1105,
			d: 7500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 702,
			d: 7500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 472,
			d: 7500,
			q: 50,
			t: "Time"
			}, {
			ID: 281,
			d: 7500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 421,
			d: 7600,
			q: 50,
			t: "Time"
			}, {
			ID: 723,
			d: 7600,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 1106,
			d: 7600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 719,
			d: 7600,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 720,
			d: 7600,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 730,
			d: 7700,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1180,
			d: 7700,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 161,
			d: 7700,
			q: 50,
			t: "Time"
			}, {
			ID: 724,
			d: 7800,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 765,
			d: 7800,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 766,
			d: 7900,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 1102,
			d: 7900,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 1103,
			d: 8e3,
			q: 49,
			t: "Fractions: Equivalent"
			}, {
			ID: 327,
			d: 10400,
			q: 50,
			t: "Conversion"
			}]
	},
	22: {
		ID: 22,
		grade: 4,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 721,
			d: 7800,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 650,
			d: 8100,
			q: 50,
			t: "Money"
			}, {
			ID: 789,
			d: 8100,
			q: 50,
			t: "Place Value"
			}, {
			ID: 449,
			d: 8100,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 787,
			d: 8200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 182,
			d: 8200,
			q: 50,
			t: "Money"
			}, {
			ID: 164,
			d: 8200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 793,
			d: 8200,
			q: 50,
			t: "Rounding"
			}, {
			ID: 831,
			d: 8300,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 847,
			d: 8300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 278,
			d: 8300,
			q: 50,
			t: "Money"
			}, {
			ID: 794,
			d: 8300,
			q: 50,
			t: "Rounding"
			}, {
			ID: 796,
			d: 8400,
			q: 50,
			t: "Rounding"
			}, {
			ID: 788,
			d: 8400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 241,
			d: 8400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 246,
			d: 8500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 795,
			d: 8500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 830,
			d: 8500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1015,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 832,
			d: 8600,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 790,
			d: 8600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 791,
			d: 8600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 68,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 166,
			d: 8600,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 792,
			d: 8700,
			q: 50,
			t: "Place Value"
			}, {
			ID: 834,
			d: 8700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 797,
			d: 8700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 242,
			d: 8800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 250,
			d: 8800,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 247,
			d: 8900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 251,
			d: 8900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 243,
			d: 8900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1175,
			d: 8900,
			q: 50,
			t: "Angles"
			}, {
			ID: 1050,
			d: 9e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 248,
			d: 9e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 310,
			d: 9e3,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 417,
			d: 9e3,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 833,
			d: 9100,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 249,
			d: 9100,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1054,
			d: 9100,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 255,
			d: 9200,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 835,
			d: 9200,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 325,
			d: 9300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 836,
			d: 9300,
			q: 50,
			t: "Subtraction to 1,000,000"
			}, {
			ID: 311,
			d: 9400,
			q: 50,
			t: "Subtraction to 1,000,000"
			}, {
			ID: 409,
			d: 9500,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 989,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 990,
			d: 9600,
			q: 50,
			t: "Measurement"
			}, {
			ID: 962,
			d: 9600,
			q: 50,
			t: "Factors"
			}, {
			ID: 879,
			d: 9600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 987,
			d: 9700,
			q: 50,
			t: "Factors"
			}, {
			ID: 179,
			d: 9700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 279,
			d: 9800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 838,
			d: 9800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 1066,
			d: 9900,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 287,
			d: 9900,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 163,
			d: 9900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 268,
			d: 9900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 285,
			d: 1e4,
			q: 50,
			t: "Factors"
			}, {
			ID: 583,
			d: 1e4,
			q: 50,
			t: "Patterning"
			}, {
			ID: 848,
			d: 1e4,
			q: 50,
			t: "Division"
			}, {
			ID: 837,
			d: 1e4,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 959,
			d: 10100,
			q: 50,
			t: "Patterning"
			}, {
			ID: 565,
			d: 10100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 270,
			d: 10100,
			q: 50,
			t: "Patterning"
			}, {
			ID: 207,
			d: 10100,
			q: 50,
			t: "Division"
			}, {
			ID: 462,
			d: 10200,
			q: 40,
			t: "Multiplication"
			}, {
			ID: 960,
			d: 10200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 849,
			d: 10200,
			q: 50,
			t: "Division"
			}, {
			ID: 839,
			d: 10300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 841,
			d: 10300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1067,
			d: 10300,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 587,
			d: 10300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 162,
			d: 10300,
			q: 50,
			t: "Division"
			}, {
			ID: 327,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 586,
			d: 10400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1068,
			d: 10400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1032,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1034,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 850,
			d: 10400,
			q: 50,
			t: "Division"
			}, {
			ID: 851,
			d: 10500,
			q: 50,
			t: "Division"
			}, {
			ID: 844,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 843,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 840,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 584,
			d: 10500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 281,
			d: 10500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 564,
			d: 10600,
			q: 50,
			t: "Division"
			}, {
			ID: 1033,
			d: 10600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1141,
			d: 10600,
			q: 25,
			t: "Measurement"
			}, {
			ID: 1035,
			d: 10600,
			q: 32,
			t: "Time"
			}, {
			ID: 934,
			d: 10600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 991,
			d: 10700,
			q: 36,
			t: "Measurement"
			}, {
			ID: 994,
			d: 10700,
			q: 20,
			t: "Measurement"
			}, {
			ID: 974,
			d: 10700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1029,
			d: 10700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1028,
			d: 10700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 846,
			d: 10700,
			q: 50,
			t: "Conversion"
			}, {
			ID: 463,
			d: 10700,
			q: 45,
			t: "Division"
			}, {
			ID: 283,
			d: 10800,
			q: 46,
			t: "Time"
			}, {
			ID: 1030,
			d: 10800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1153,
			d: 10800,
			q: 36,
			t: "Measurement"
			}, {
			ID: 967,
			d: 10800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1031,
			d: 10900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 282,
			d: 10900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1178,
			d: 11e3,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 852,
			d: 11e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 853,
			d: 11100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 892,
			d: 11100,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 890,
			d: 11200,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 563,
			d: 11300,
			q: 18,
			t: "Fractions: Equivalent"
			}, {
			ID: 46,
			d: 11400,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 561,
			d: 11500,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 894,
			d: 11500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1014,
			d: 11600,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 316,
			d: 11600,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 560,
			d: 11700,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 952,
			d: 11700,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1011,
			d: 11800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 939,
			d: 11800,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1166,
			d: 11900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 900,
			d: 11900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 106,
			d: 11900,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 558,
			d: 12e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 922,
			d: 12e3,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 798,
			d: 12e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 986,
			d: 12e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 925,
			d: 12100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 799,
			d: 12100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 320,
			d: 12100,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 562,
			d: 12200,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1016,
			d: 12200,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 897,
			d: 12300,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 559,
			d: 12300,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 466,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 465,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 901,
			d: 12400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 804,
			d: 12400,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 935,
			d: 12400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 927,
			d: 12500,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 800,
			d: 12500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 937,
			d: 12600,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 888,
			d: 12700,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1021,
			d: 12800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 889,
			d: 12900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 926,
			d: 13e3,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 908,
			d: 13100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 891,
			d: 13200,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 899,
			d: 13300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 929,
			d: 13400,
			q: 50,
			t: "Fractions: Multiplication"
			}]
	},
	23: {
		ID: 23,
		grade: 5,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 240,
			d: 13600,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 284,
			d: 13600,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 233,
			d: 13600,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 336,
			d: 13600,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 337,
			d: 13600,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 604,
			d: 13700,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 1077,
			d: 13700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1074,
			d: 13700,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 1109,
			d: 13800,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 1073,
			d: 13800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1089,
			d: 13900,
			q: 48,
			t: "Place Value"
			}, {
			ID: 1076,
			d: 14e3,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 567,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 566,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 51,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 120,
			d: 14200,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 121,
			d: 14200,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 805,
			d: 14300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 870,
			d: 14300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 911,
			d: 14300,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 813,
			d: 14400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 64,
			d: 14400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 65,
			d: 14400,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 358,
			d: 14400,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 359,
			d: 14500,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 414,
			d: 14500,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 871,
			d: 14500,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1110,
			d: 14500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 814,
			d: 14600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 821,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 808,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 798,
			d: 14600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 799,
			d: 14600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 815,
			d: 14700,
			q: 50,
			t: "Division"
			}, {
			ID: 806,
			d: 14700,
			q: 50,
			t: "Division"
			}, {
			ID: 1166,
			d: 14700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1174,
			d: 14700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1091,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1090,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 610,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 811,
			d: 14800,
			q: 50,
			t: "Division"
			}, {
			ID: 812,
			d: 14800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 599,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 385,
			d: 14900,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 180,
			d: 14900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 809,
			d: 14900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 854,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 855,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 825,
			d: 14900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 917,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 918,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 916,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 936,
			d: 15e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 953,
			d: 15e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 880,
			d: 15e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 816,
			d: 15e3,
			q: 50,
			t: "Division"
			}, {
			ID: 874,
			d: 15e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 63,
			d: 15e3,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 62,
			d: 15e3,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 303,
			d: 15e3,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 305,
			d: 15e3,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 366,
			d: 15e3,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 608,
			d: 15e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 807,
			d: 15e3,
			q: 50,
			t: "Division"
			}, {
			ID: 609,
			d: 15100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 829,
			d: 15100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 810,
			d: 15100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 876,
			d: 15200,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 881,
			d: 15200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 872,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 909,
			d: 15200,
			q: 50,
			t: "Numerical Expressions"
			}, {
			ID: 914,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 912,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 606,
			d: 15200,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 286,
			d: 15200,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 124,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1052,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1092,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1093,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1118,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1123,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1129,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1173,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1122,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1155,
			d: 15200,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1144,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1130,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1142,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1126,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1127,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 930,
			d: 15300,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 931,
			d: 15300,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 932,
			d: 15300,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 915,
			d: 15300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 334,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 328,
			d: 15300,
			q: 40,
			t: "Patterning"
			}, {
			ID: 913,
			d: 15300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 919,
			d: 15300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 873,
			d: 15300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 910,
			d: 15300,
			q: 50,
			t: "Numerical Expressions"
			}, {
			ID: 877,
			d: 15400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 875,
			d: 15400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 362,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1119,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1120,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1121,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1145,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1143,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1156,
			d: 15400,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1157,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1158,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1161,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1128,
			d: 15500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1172,
			d: 15500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1148,
			d: 15500,
			q: 45,
			t: "Conversion"
			}, {
			ID: 1154,
			d: 15500,
			q: 36,
			t: "Conversion"
			}, {
			ID: 924,
			d: 15600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 928,
			d: 15600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 923,
			d: 18400,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 920,
			d: 18500,
			q: 50,
			t: "Fractions: Multiplication"
			}]
	},
	24: {
		ID: 24,
		grade: 6,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 65,
			d: 14400,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 120,
			d: 18600,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 121,
			d: 18600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 507,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 504,
			d: 18600,
			q: 50,
			t: "Factors and Multiples"
			}, {
			ID: 505,
			d: 18600,
			q: 48,
			t: "Factors and Multiples"
			}, {
			ID: 999,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 1005,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 998,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1057,
			d: 18600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 973,
			d: 18700,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 966,
			d: 18700,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 535,
			d: 18700,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 536,
			d: 18700,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 499,
			d: 18700,
			q: 40,
			t: "Rational Numbers: Represent"
			}, {
			ID: 500,
			d: 18800,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 501,
			d: 18800,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 376,
			d: 18800,
			q: 50,
			t: "Measurement"
			}, {
			ID: 288,
			d: 18800,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 64,
			d: 18800,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 968,
			d: 18800,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1060,
			d: 18800,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 1056,
			d: 18800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1131,
			d: 18800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1146,
			d: 18900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1147,
			d: 18900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 969,
			d: 18900,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 964,
			d: 18900,
			q: 50,
			t: "Division"
			}, {
			ID: 1045,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 1047,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 971,
			d: 18900,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 972,
			d: 18900,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 1012,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 289,
			d: 18900,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 503,
			d: 18900,
			q: 50,
			t: "Rational Numbers: Comparing"
			}, {
			ID: 385,
			d: 19e3,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 510,
			d: 19e3,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 334,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 303,
			d: 19e3,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 965,
			d: 19e3,
			q: 50,
			t: "Division"
			}, {
			ID: 970,
			d: 19e3,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 366,
			d: 19e3,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 961,
			d: 19e3,
			q: 50,
			t: "Division"
			}, {
			ID: 1132,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1058,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1078,
			d: 19100,
			q: 32,
			t: "3D Shapes"
			}, {
			ID: 963,
			d: 19100,
			q: 50,
			t: "Division"
			}, {
			ID: 305,
			d: 19200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 291,
			d: 19200,
			q: 50,
			t: "Division"
			}, {
			ID: 306,
			d: 19300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 1e3,
			d: 19300,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 975,
			d: 19400,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 946,
			d: 19400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 945,
			d: 19400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1059,
			d: 19400,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1065,
			d: 19500,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 948,
			d: 19500,
			q: 47,
			t: "Fractions: Division"
			}, {
			ID: 976,
			d: 19500,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 995,
			d: 19500,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 951,
			d: 19500,
			q: 47,
			t: "Fractions: Division"
			}, {
			ID: 1017,
			d: 19500,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 1018,
			d: 19500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1013,
			d: 19600,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 1019,
			d: 19600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1001,
			d: 19600,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 509,
			d: 19600,
			q: 50,
			t: "Ratios"
			}, {
			ID: 324,
			d: 19600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1149,
			d: 19600,
			q: 8,
			t: "Data Relationships"
			}, {
			ID: 1169,
			d: 19600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1168,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1164,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1165,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1070,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1069,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1071,
			d: 19700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 314,
			d: 19700,
			q: 50,
			t: "Addition"
			}, {
			ID: 502,
			d: 19700,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1020,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1002,
			d: 19700,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 1003,
			d: 19700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 506,
			d: 19800,
			q: 50,
			t: "Ratios"
			}, {
			ID: 943,
			d: 19800,
			q: 50,
			t: "Ratios"
			}, {
			ID: 331,
			d: 19800,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 332,
			d: 19800,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 363,
			d: 19800,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1049,
			d: 19800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1167,
			d: 19800,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1170,
			d: 19800,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 333,
			d: 19900,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 508,
			d: 19900,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1048,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1044,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 997,
			d: 2e4,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1171,
			d: 2e4,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1160,
			d: 2e4,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1055,
			d: 20100,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1004,
			d: 20100,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 315,
			d: 20100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 996,
			d: 20200,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 864,
			d: 20300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 865,
			d: 20300,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 339,
			d: 20400,
			q: 48,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1051,
			d: 20400,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1163,
			d: 20500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1162,
			d: 20600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}]
	},
	25: {
		ID: 25,
		grade: 1,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 226,
			d: -100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 231,
			d: 200,
			q: 30,
			t: "Counting"
			}, {
			ID: 225,
			d: 300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 227,
			d: 300,
			q: 33,
			t: "Addition to 20"
			}, {
			ID: 1259,
			d: 300,
			q: 50,
			t: "Counting"
			}, {
			ID: 1264,
			d: 300,
			q: 40,
			t: "Counting"
			}, {
			ID: 1273,
			d: 300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1203,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 1198,
			d: 400,
			q: 50,
			t: "Counting"
			}, {
			ID: 1204,
			d: 400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1205,
			d: 500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 224,
			d: 500,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 1256,
			d: 500,
			q: 50,
			t: "Counting"
			}, {
			ID: 1265,
			d: 500,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1269,
			d: 600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 197,
			d: 600,
			q: 24,
			t: "2D Shapes"
			}, {
			ID: 50,
			d: 600,
			q: 39,
			t: "Addition to 20"
			}, {
			ID: 136,
			d: 600,
			q: 45,
			t: "Addition to 20"
			}, {
			ID: 546,
			d: 600,
			q: 42,
			t: "Addition to 20"
			}, {
			ID: 1199,
			d: 700,
			q: 50,
			t: "Counting"
			}, {
			ID: 1272,
			d: 700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1274,
			d: 800,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1200,
			d: 800,
			q: 50,
			t: "Counting"
			}, {
			ID: 438,
			d: 800,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 73,
			d: 800,
			q: 47,
			t: "Counting"
			}, {
			ID: 196,
			d: 800,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 1185,
			d: 900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1201,
			d: 900,
			q: 50,
			t: "Counting"
			}, {
			ID: 1187,
			d: 1e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 543,
			d: 1e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 198,
			d: 1e3,
			q: 48,
			t: "2D Shapes"
			}, {
			ID: 229,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 89,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 90,
			d: 1e3,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 91,
			d: 1e3,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 148,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 149,
			d: 1100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 232,
			d: 1200,
			q: 20,
			t: "Subtraction to 20"
			}, {
			ID: 237,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 439,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 440,
			d: 1200,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 1208,
			d: 1200,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1266,
			d: 1200,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1271,
			d: 1300,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 436,
			d: 1300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 437,
			d: 1300,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 49,
			d: 1300,
			q: 45,
			t: "Subtraction to 20"
			}, {
			ID: 137,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 138,
			d: 1400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 111,
			d: 1400,
			q: 17,
			t: "Mixed Operations"
			}, {
			ID: 1188,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1186,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1207,
			d: 1500,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1193,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1195,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1212,
			d: 1600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1210,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 451,
			d: 1700,
			q: 50,
			t: "Addition"
			}, {
			ID: 1194,
			d: 1700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1191,
			d: 1700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1247,
			d: 1700,
			q: 16,
			t: "Fractions"
			}, {
			ID: 1249,
			d: 1700,
			q: 22,
			t: "Fractions"
			}, {
			ID: 1181,
			d: 1700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 87,
			d: 1700,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 4,
			d: 1800,
			q: 90,
			t: "Addition to 20"
			}, {
			ID: 60,
			d: 1800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 228,
			d: 1800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1182,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1254,
			d: 1800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 452,
			d: 1800,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 453,
			d: 1800,
			q: 50,
			t: "Subtraction"
			}, {
			ID: 1209,
			d: 1800,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1229,
			d: 1900,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1230,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 83,
			d: 1900,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 393,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1184,
			d: 2e3,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 1183,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 470,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 473,
			d: 2e3,
			q: 50,
			t: "Time"
			}, {
			ID: 475,
			d: 2e3,
			q: 24,
			t: "Time"
			}, {
			ID: 392,
			d: 2e3,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1234,
			d: 2100,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 99,
			d: 2400,
			q: 47,
			t: "Addition to 20"
			}, {
			ID: 86,
			d: 2700,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 82,
			d: 2800,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 384,
			d: 3500,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 351,
			d: 3600,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 382,
			d: 3700,
			q: 48,
			t: "3D Shapes"
			}]
	},
	26: {
		ID: 26,
		grade: 2,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 346,
			d: -600,
			q: 50,
			t: "Time"
			}, {
			ID: 406,
			d: -600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 178,
			d: -200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 549,
			d: -100,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 238,
			d: 800,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 1275,
			d: 1200,
			q: 44,
			t: "Subtraction to 100"
			}, {
			ID: 1224,
			d: 2200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1227,
			d: 2400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 456,
			d: 2600,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 1189,
			d: 2600,
			q: 50,
			t: "Addition to 20"
			}, {
			ID: 1252,
			d: 2600,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 455,
			d: 2700,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 1240,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 435,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 84,
			d: 2700,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 454,
			d: 2800,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 457,
			d: 3e3,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 458,
			d: 3e3,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 1190,
			d: 3400,
			q: 50,
			t: "Subtraction to 20"
			}, {
			ID: 384,
			d: 3500,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 351,
			d: 3600,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 52,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 53,
			d: 3600,
			q: 45,
			t: "Subtraction to 100"
			}, {
			ID: 382,
			d: 3700,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 1232,
			d: 3800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 185,
			d: 3900,
			q: 50,
			t: "Place Value"
			}, {
			ID: 443,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 444,
			d: 3900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 728,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 186,
			d: 4e3,
			q: 50,
			t: "Place Value"
			}, {
			ID: 127,
			d: 4e3,
			q: 25,
			t: "Conversion"
			}, {
			ID: 1280,
			d: 4e3,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 441,
			d: 4100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 442,
			d: 4100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 1241,
			d: 4100,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 154,
			d: 4200,
			q: 50,
			t: "Composing Numbers"
			}, {
			ID: 1218,
			d: 4300,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 476,
			d: 4400,
			q: 50,
			t: "Time"
			}, {
			ID: 1217,
			d: 4600,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1231,
			d: 4700,
			q: 50,
			t: "Place Value"
			}, {
			ID: 165,
			d: 4700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 166,
			d: 4800,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1216,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1213,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1214,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1215,
			d: 4900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1211,
			d: 5e3,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1192,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1202,
			d: 5100,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1219,
			d: 5100,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1222,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1206,
			d: 5200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 1221,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1197,
			d: 5200,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 1281,
			d: 5200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1225,
			d: 5400,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1226,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 34,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 31,
			d: 6500,
			q: 21,
			t: "Multiplication Facts"
			}, {
			ID: 35,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 32,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 33,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 36,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 37,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 38,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 39,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 40,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 25,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 26,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 27,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 28,
			d: 6900,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 29,
			d: 6900,
			q: 9,
			t: "Division Facts"
			}, {
			ID: 472,
			d: 7500,
			q: 50,
			t: "Time"
			}, {
			ID: 164,
			d: 8200,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 241,
			d: 8400,
			q: 50,
			t: "Addition to 100"
			}, {
			ID: 417,
			d: 9e3,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 409,
			d: 9500,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 233,
			d: 13600,
			q: 48,
			t: "2D Shapes"
			}]
	},
	27: {
		ID: 27,
		grade: 3,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 126,
			d: -500,
			q: 50,
			t: "Fractions"
			}, {
			ID: 128,
			d: -400,
			q: 25,
			t: "Conversion"
			}, {
			ID: 495,
			d: -400,
			q: 50,
			t: "Time"
			}, {
			ID: 218,
			d: -300,
			q: 25,
			t: "Time"
			}, {
			ID: 254,
			d: 0,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 384,
			d: 3500,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 351,
			d: 3600,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 382,
			d: 3700,
			q: 48,
			t: "3D Shapes"
			}, {
			ID: 713,
			d: 3900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 447,
			d: 4900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 448,
			d: 4900,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 445,
			d: 5100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 446,
			d: 5100,
			q: 50,
			t: "Ordering Numbers"
			}, {
			ID: 1233,
			d: 5500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1237,
			d: 5600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1244,
			d: 5600,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1245,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1236,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1242,
			d: 5700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 1239,
			d: 5700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 1246,
			d: 5800,
			q: 23,
			t: "Geometry"
			}, {
			ID: 1248,
			d: 5800,
			q: 30,
			t: "Geometry"
			}, {
			ID: 1235,
			d: 6e3,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1243,
			d: 6e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 771,
			d: 6500,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 751,
			d: 6500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 210,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 252,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 253,
			d: 6500,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 31,
			d: 6500,
			q: 21,
			t: "Multiplication Facts"
			}, {
			ID: 32,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 33,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 34,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 35,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 36,
			d: 6500,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 37,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 38,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 39,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 40,
			d: 6600,
			q: 19,
			t: "Multiplication Facts"
			}, {
			ID: 146,
			d: 6600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 256,
			d: 6600,
			q: 45,
			t: "2D Shapes"
			}, {
			ID: 603,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 597,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 602,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 598,
			d: 6600,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 777,
			d: 6600,
			q: 40,
			t: "Addition to 1000"
			}, {
			ID: 772,
			d: 6700,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 714,
			d: 6700,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 756,
			d: 6700,
			q: 49,
			t: "Multiplication"
			}, {
			ID: 762,
			d: 6700,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 595,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 596,
			d: 6700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 752,
			d: 6700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 257,
			d: 6700,
			q: 43,
			t: "2D Shapes"
			}, {
			ID: 25,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 26,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 27,
			d: 6800,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 759,
			d: 6800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 704,
			d: 6800,
			q: 45,
			t: "Multiplication"
			}, {
			ID: 778,
			d: 6800,
			q: 40,
			t: "Subtraction to 1000"
			}, {
			ID: 779,
			d: 6800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 781,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 760,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 763,
			d: 6900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 716,
			d: 6900,
			q: 50,
			t: "Measurement"
			}, {
			ID: 28,
			d: 6900,
			q: 18,
			t: "Division Facts"
			}, {
			ID: 29,
			d: 6900,
			q: 9,
			t: "Division Facts"
			}, {
			ID: 115,
			d: 6900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 758,
			d: 7e3,
			q: 49,
			t: "Division"
			}, {
			ID: 707,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 557,
			d: 7e3,
			q: 44,
			t: "Fractions: Represent"
			}, {
			ID: 770,
			d: 7e3,
			q: 50,
			t: "Area"
			}, {
			ID: 773,
			d: 7e3,
			q: 45,
			t: "Division"
			}, {
			ID: 753,
			d: 7e3,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 705,
			d: 7e3,
			q: 44,
			t: "Division"
			}, {
			ID: 706,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 785,
			d: 7e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 775,
			d: 7e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 780,
			d: 7100,
			q: 50,
			t: "Measurement"
			}, {
			ID: 782,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 769,
			d: 7100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 761,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 803,
			d: 7100,
			q: 50,
			t: "Area"
			}, {
			ID: 554,
			d: 7100,
			q: 32,
			t: "Fractions: Represent"
			}, {
			ID: 116,
			d: 7100,
			q: 50,
			t: "Division"
			}, {
			ID: 183,
			d: 7200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 463,
			d: 7200,
			q: 45,
			t: "Division"
			}, {
			ID: 718,
			d: 7200,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 708,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 709,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 783,
			d: 7200,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 776,
			d: 7200,
			q: 50,
			t: "Division"
			}, {
			ID: 1027,
			d: 7300,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1096,
			d: 7300,
			q: 50,
			t: "Patterning"
			}, {
			ID: 710,
			d: 7300,
			q: 49,
			t: "Mixed Operations"
			}, {
			ID: 757,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 734,
			d: 7400,
			q: 33,
			t: "Fractions: Comparing"
			}, {
			ID: 784,
			d: 7400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 801,
			d: 7400,
			q: 48,
			t: "Measurement"
			}, {
			ID: 802,
			d: 7400,
			q: 40,
			t: "Measurement"
			}, {
			ID: 767,
			d: 7400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 755,
			d: 7500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 786,
			d: 7500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1104,
			d: 7500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1105,
			d: 7500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 702,
			d: 7500,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 723,
			d: 7600,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 1180,
			d: 7700,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 730,
			d: 7700,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 765,
			d: 7800,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 724,
			d: 7800,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 766,
			d: 7900,
			q: 39,
			t: "Fractions: Equivalent"
			}, {
			ID: 1102,
			d: 7900,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 1103,
			d: 8e3,
			q: 49,
			t: "Fractions: Equivalent"
			}, {
			ID: 246,
			d: 8500,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 68,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 242,
			d: 8800,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 250,
			d: 8800,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 247,
			d: 8900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 251,
			d: 8900,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 243,
			d: 8900,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 248,
			d: 9e3,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 249,
			d: 9100,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 179,
			d: 9700,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 462,
			d: 10200,
			q: 40,
			t: "Multiplication"
			}, {
			ID: 46,
			d: 11400,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 380,
			d: 20900,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 375,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}]
	},
	28: {
		ID: 28,
		grade: 4,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 126,
			d: 0,
			q: 50,
			t: "Fractions"
			}, {
			ID: 194,
			d: -700,
			q: 50,
			t: "Decimals"
			}, {
			ID: 195,
			d: -600,
			q: 50,
			t: "Decimals"
			}, {
			ID: 211,
			d: -500,
			q: 50,
			t: "Angles"
			}, {
			ID: 212,
			d: -400,
			q: 50,
			t: "Angles"
			}, {
			ID: 353,
			d: -400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 313,
			d: -400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 467,
			d: -400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 326,
			d: -300,
			q: 50,
			t: "Angles"
			}, {
			ID: 354,
			d: -300,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 130,
			d: -300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 368,
			d: -200,
			q: 50,
			t: "Angles"
			}, {
			ID: 219,
			d: -200,
			q: 30,
			t: "Fractions"
			}, {
			ID: 542,
			d: -200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 192,
			d: -100,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 193,
			d: 0,
			q: 50,
			t: "Comparing Numbers"
			}, {
			ID: 1255,
			d: 3200,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 733,
			d: 6700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1095,
			d: 6800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1094,
			d: 7e3,
			q: 50,
			t: "Patterning"
			}, {
			ID: 735,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 736,
			d: 7200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 767,
			d: 7400,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 719,
			d: 7600,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 720,
			d: 7600,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 1106,
			d: 7600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 721,
			d: 7800,
			q: 42,
			t: "Fractions: Equivalent"
			}, {
			ID: 789,
			d: 8100,
			q: 50,
			t: "Place Value"
			}, {
			ID: 793,
			d: 8200,
			q: 50,
			t: "Rounding"
			}, {
			ID: 787,
			d: 8200,
			q: 50,
			t: "Place Value"
			}, {
			ID: 794,
			d: 8300,
			q: 50,
			t: "Rounding"
			}, {
			ID: 831,
			d: 8300,
			q: 50,
			t: "Addition to 1000"
			}, {
			ID: 847,
			d: 8300,
			q: 50,
			t: "Place Value"
			}, {
			ID: 796,
			d: 8400,
			q: 50,
			t: "Rounding"
			}, {
			ID: 788,
			d: 8400,
			q: 50,
			t: "Place Value"
			}, {
			ID: 795,
			d: 8500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 830,
			d: 8500,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1015,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 790,
			d: 8600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 791,
			d: 8600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 832,
			d: 8600,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 68,
			d: 8600,
			q: 50,
			t: "Rounding"
			}, {
			ID: 122,
			d: 8700,
			q: 50,
			t: "Conversion"
			}, {
			ID: 797,
			d: 8700,
			q: 50,
			t: "Rounding"
			}, {
			ID: 834,
			d: 8700,
			q: 50,
			t: "Subtraction to 100"
			}, {
			ID: 792,
			d: 8700,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1175,
			d: 8900,
			q: 50,
			t: "Angles"
			}, {
			ID: 1050,
			d: 9e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 1054,
			d: 9100,
			q: 35,
			t: "2D Shapes"
			}, {
			ID: 833,
			d: 9100,
			q: 50,
			t: "Addition to 1,000,000"
			}, {
			ID: 835,
			d: 9200,
			q: 50,
			t: "Subtraction to 1000"
			}, {
			ID: 117,
			d: 9200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 325,
			d: 9300,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 513,
			d: 9300,
			q: 25,
			t: "Lines"
			}, {
			ID: 836,
			d: 9300,
			q: 50,
			t: "Subtraction to 1,000,000"
			}, {
			ID: 269,
			d: 9400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 989,
			d: 9500,
			q: 50,
			t: "Measurement"
			}, {
			ID: 990,
			d: 9600,
			q: 50,
			t: "Measurement"
			}, {
			ID: 962,
			d: 9600,
			q: 50,
			t: "Factors"
			}, {
			ID: 838,
			d: 9800,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 1066,
			d: 9900,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 163,
			d: 9900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 268,
			d: 1e4,
			q: 50,
			t: "Patterning"
			}, {
			ID: 837,
			d: 1e4,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 848,
			d: 1e4,
			q: 50,
			t: "Division"
			}, {
			ID: 959,
			d: 10100,
			q: 50,
			t: "Patterning"
			}, {
			ID: 207,
			d: 10100,
			q: 50,
			t: "Division"
			}, {
			ID: 565,
			d: 10100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 849,
			d: 10200,
			q: 50,
			t: "Division"
			}, {
			ID: 960,
			d: 10200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 841,
			d: 10300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 839,
			d: 10300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 162,
			d: 10300,
			q: 50,
			t: "Division"
			}, {
			ID: 327,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 850,
			d: 10400,
			q: 50,
			t: "Division"
			}, {
			ID: 1034,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1032,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1068,
			d: 10400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 843,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 840,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 844,
			d: 10500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 851,
			d: 10500,
			q: 50,
			t: "Division"
			}, {
			ID: 934,
			d: 10600,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1033,
			d: 10600,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1035,
			d: 10600,
			q: 32,
			t: "Time"
			}, {
			ID: 564,
			d: 10600,
			q: 50,
			t: "Division"
			}, {
			ID: 1141,
			d: 10600,
			q: 25,
			t: "Measurement"
			}, {
			ID: 974,
			d: 10700,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 991,
			d: 10700,
			q: 36,
			t: "Measurement"
			}, {
			ID: 994,
			d: 10700,
			q: 20,
			t: "Measurement"
			}, {
			ID: 1028,
			d: 10700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1029,
			d: 10700,
			q: 50,
			t: "Patterning"
			}, {
			ID: 846,
			d: 10700,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1030,
			d: 10800,
			q: 50,
			t: "Patterning"
			}, {
			ID: 967,
			d: 10800,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1153,
			d: 10800,
			q: 36,
			t: "Measurement"
			}, {
			ID: 1031,
			d: 10900,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1178,
			d: 11e3,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 892,
			d: 11100,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 890,
			d: 11200,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 46,
			d: 11400,
			q: 50,
			t: "Fractions: Equivalent"
			}, {
			ID: 894,
			d: 11500,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1014,
			d: 11600,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 316,
			d: 11600,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 560,
			d: 11700,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 952,
			d: 11700,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 1011,
			d: 11800,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 939,
			d: 11800,
			q: 50,
			t: "Fractions: Represent"
			}, {
			ID: 900,
			d: 11900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 106,
			d: 11900,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 986,
			d: 12e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 922,
			d: 12e3,
			q: 50,
			t: "Fractions and Decimals"
			}, {
			ID: 925,
			d: 12100,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1016,
			d: 12200,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 562,
			d: 12200,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 559,
			d: 12300,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 897,
			d: 12300,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 935,
			d: 12400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 901,
			d: 12400,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 927,
			d: 12500,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 937,
			d: 12600,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 888,
			d: 12700,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1021,
			d: 12800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 889,
			d: 12900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 926,
			d: 13e3,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 908,
			d: 13100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 1074,
			d: 13700,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 604,
			d: 13700,
			q: 50,
			t: "Decimals: Place Value"
			}, {
			ID: 1109,
			d: 13800,
			q: 50,
			t: "Decimals: Represent"
			}, {
			ID: 1073,
			d: 13800,
			q: 50,
			t: "Place Value"
			}, {
			ID: 1089,
			d: 13900,
			q: 48,
			t: "Place Value"
			}, {
			ID: 120,
			d: 14200,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 805,
			d: 14300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 870,
			d: 14300,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 911,
			d: 14300,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 813,
			d: 14400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 64,
			d: 14400,
			q: 50,
			t: "Decimals: Addition"
			}, {
			ID: 65,
			d: 14400,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 871,
			d: 14500,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 814,
			d: 14600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 821,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 808,
			d: 14600,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 815,
			d: 14700,
			q: 50,
			t: "Division"
			}, {
			ID: 806,
			d: 14700,
			q: 50,
			t: "Division"
			}, {
			ID: 180,
			d: 14900,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 1118,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1122,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1123,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1144,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1142,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 328,
			d: 15300,
			q: 40,
			t: "Patterning"
			}, {
			ID: 1119,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1120,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1143,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1145,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1121,
			d: 15400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 121,
			d: 18600,
			q: 50,
			t: "Decimals: Subtraction"
			}, {
			ID: 331,
			d: 19800,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 333,
			d: 19900,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 380,
			d: 20900,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 381,
			d: 21e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 367,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 375,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}]
	},
	29: {
		ID: 29,
		grade: 5,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 309,
			d: -600,
			q: 50,
			t: "Place Value"
			}, {
			ID: 312,
			d: -500,
			q: 50,
			t: "Decimals"
			}, {
			ID: 313,
			d: -400,
			q: 50,
			t: "Mixed Operations"
			}, {
			ID: 516,
			d: -100,
			q: 50,
			t: "Decimals"
			}, {
			ID: 517,
			d: 0,
			q: 50,
			t: "Decimals"
			}, {
			ID: 117,
			d: 9200,
			q: 50,
			t: "Patterning"
			}, {
			ID: 163,
			d: 9900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 287,
			d: 9900,
			q: 50,
			t: "Reading Numbers"
			}, {
			ID: 285,
			d: 1e4,
			q: 50,
			t: "Factors"
			}, {
			ID: 162,
			d: 10300,
			q: 50,
			t: "Division"
			}, {
			ID: 327,
			d: 10400,
			q: 50,
			t: "Conversion"
			}, {
			ID: 558,
			d: 12e3,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 465,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 466,
			d: 12400,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 908,
			d: 13100,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 891,
			d: 13200,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 899,
			d: 13300,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 929,
			d: 13400,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 1076,
			d: 14e3,
			q: 50,
			t: "Decimals: Comparing"
			}, {
			ID: 567,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 51,
			d: 14100,
			q: 50,
			t: "Rounding"
			}, {
			ID: 358,
			d: 14400,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 359,
			d: 14500,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 1110,
			d: 14500,
			q: 50,
			t: "Rounding"
			}, {
			ID: 1090,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 1091,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 599,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 610,
			d: 14800,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 809,
			d: 14900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 385,
			d: 14900,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 825,
			d: 14900,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 854,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 855,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 918,
			d: 14900,
			q: 50,
			t: "Fractions: Addition and Subtraction"
			}, {
			ID: 953,
			d: 15e3,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 816,
			d: 15e3,
			q: 50,
			t: "Division"
			}, {
			ID: 807,
			d: 15e3,
			q: 50,
			t: "Division"
			}, {
			ID: 305,
			d: 15e3,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 608,
			d: 15e3,
			q: 50,
			t: "Fractions: Multiplication"
			}, {
			ID: 1052,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1129,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1155,
			d: 15200,
			q: 50,
			t: "Measurement"
			}, {
			ID: 124,
			d: 15200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 606,
			d: 15200,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1092,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 914,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 909,
			d: 15200,
			q: 50,
			t: "Numerical Expressions"
			}, {
			ID: 912,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 872,
			d: 15200,
			q: 50,
			t: "Decimals: Multiplication"
			}, {
			ID: 876,
			d: 15200,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 913,
			d: 15300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 910,
			d: 15300,
			q: 50,
			t: "Numerical Expressions"
			}, {
			ID: 915,
			d: 15300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 1126,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1127,
			d: 15300,
			q: 50,
			t: "Conversion"
			}, {
			ID: 334,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 328,
			d: 15300,
			q: 40,
			t: "Patterning"
			}, {
			ID: 1130,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1157,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1158,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1161,
			d: 15400,
			q: 50,
			t: "Patterning"
			}, {
			ID: 877,
			d: 15400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 875,
			d: 15400,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 1128,
			d: 15500,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1172,
			d: 15500,
			q: 50,
			t: "Patterning"
			}, {
			ID: 1148,
			d: 15500,
			q: 45,
			t: "Conversion"
			}, {
			ID: 1154,
			d: 15500,
			q: 36,
			t: "Conversion"
			}, {
			ID: 924,
			d: 15600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 928,
			d: 15600,
			q: 50,
			t: "Fractions: Division"
			}, {
			ID: 964,
			d: 18900,
			q: 50,
			t: "Division"
			}, {
			ID: 965,
			d: 19e3,
			q: 50,
			t: "Division"
			}, {
			ID: 961,
			d: 19e3,
			q: 50,
			t: "Division"
			}, {
			ID: 303,
			d: 19e3,
			q: 50,
			t: "Decimals: Mixed Operations"
			}, {
			ID: 963,
			d: 19100,
			q: 50,
			t: "Division"
			}, {
			ID: 291,
			d: 19200,
			q: 50,
			t: "Division"
			}, {
			ID: 306,
			d: 19300,
			q: 50,
			t: "Decimals: Division"
			}, {
			ID: 331,
			d: 19800,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1049,
			d: 19800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 333,
			d: 19900,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1048,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1044,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 339,
			d: 20400,
			q: 48,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 375,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 366,
			d: 21600,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 540,
			d: 23100,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}]
	},
	30: {
		ID: 30,
		grade: 6,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 343,
			d: -700,
			q: 50,
			t: "Conversion"
			}, {
			ID: 526,
			d: -300,
			q: 40,
			t: "Conversion"
			}, {
			ID: 534,
			d: -300,
			q: 50,
			t: "Order of Operations"
			}, {
			ID: 538,
			d: -300,
			q: 50,
			t: "Order of Operations"
			}, {
			ID: 340,
			d: -200,
			q: 50,
			t: "Conversion"
			}, {
			ID: 514,
			d: -200,
			q: 40,
			t: "Integers"
			}, {
			ID: 373,
			d: -100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 374,
			d: -100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 341,
			d: 0,
			q: 50,
			t: "Conversion"
			}, {
			ID: 342,
			d: 0,
			q: 50,
			t: "Conversion"
			}, {
			ID: 1270,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1278,
			d: 4100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 711,
			d: 7200,
			q: 48,
			t: "Multiplication"
			}, {
			ID: 1279,
			d: 7400,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1166,
			d: 11900,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 358,
			d: 14400,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 359,
			d: 14500,
			q: 45,
			t: "Mixed Operations"
			}, {
			ID: 1174,
			d: 14700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1173,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1129,
			d: 15200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1092,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 1093,
			d: 15200,
			q: 50,
			t: "Fractions: Comparing"
			}, {
			ID: 334,
			d: 15300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 507,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 998,
			d: 18600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1057,
			d: 18600,
			q: 50,
			t: "Geometry"
			}, {
			ID: 499,
			d: 18700,
			q: 40,
			t: "Rational Numbers: Represent"
			}, {
			ID: 376,
			d: 18800,
			q: 50,
			t: "Measurement"
			}, {
			ID: 1056,
			d: 18800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1131,
			d: 18800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1146,
			d: 18900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1147,
			d: 18900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1132,
			d: 19e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 324,
			d: 19600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 509,
			d: 19600,
			q: 50,
			t: "Ratios"
			}, {
			ID: 314,
			d: 19700,
			q: 50,
			t: "Addition"
			}, {
			ID: 502,
			d: 19700,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1070,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1071,
			d: 19700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1069,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 943,
			d: 19800,
			q: 50,
			t: "Ratios"
			}, {
			ID: 363,
			d: 19800,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 508,
			d: 19900,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1044,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1048,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 997,
			d: 2e4,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1004,
			d: 20100,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 315,
			d: 20100,
			q: 50,
			t: "Multiplication"
			}, {
			ID: 996,
			d: 20200,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 864,
			d: 20300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1051,
			d: 20400,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1163,
			d: 20500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1162,
			d: 20600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 372,
			d: 21e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 329,
			d: 21100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 367,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 1159,
			d: 21100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 506,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 568,
			d: 21200,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1075,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 515,
			d: 21500,
			q: 50,
			t: "Integers"
			}, {
			ID: 330,
			d: 21500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 895,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 896,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 885,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 887,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 907,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 570,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 571,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 886,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 893,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 906,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 883,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 884,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 691,
			d: 23e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 698,
			d: 23100,
			q: 50,
			t: "Angles"
			}]
	},
	35: {
		ID: 35,
		grade: 7,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 223,
			d: 21e3,
			q: 48,
			t: "Data Relationships"
			}, {
			ID: 372,
			d: 21e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 509,
			d: 21e3,
			q: 50,
			t: "Ratios"
			}, {
			ID: 856,
			d: 21e3,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 977,
			d: 21e3,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1038,
			d: 21e3,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 1039,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1040,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1159,
			d: 21100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 580,
			d: 21100,
			q: 50,
			t: "Probability"
			}, {
			ID: 857,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 858,
			d: 21100,
			q: 50,
			t: "Ratios"
			}, {
			ID: 866,
			d: 21100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 572,
			d: 21100,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 367,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 329,
			d: 21100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 383,
			d: 21100,
			q: 35,
			t: "3D Shapes"
			}, {
			ID: 502,
			d: 21100,
			q: 50,
			t: "Ratios"
			}, {
			ID: 387,
			d: 21200,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 506,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 568,
			d: 21200,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 579,
			d: 21200,
			q: 50,
			t: "Probability"
			}, {
			ID: 1042,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 978,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 979,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1046,
			d: 21200,
			q: 25,
			t: "Probability"
			}, {
			ID: 1023,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 984,
			d: 21200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1025,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 985,
			d: 21300,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1075,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1022,
			d: 21300,
			q: 50,
			t: "Ratios"
			}, {
			ID: 981,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 531,
			d: 21300,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 581,
			d: 21300,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 525,
			d: 21300,
			q: 35,
			t: "Probability"
			}, {
			ID: 574,
			d: 21300,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 386,
			d: 21300,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 867,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 957,
			d: 21300,
			q: 50,
			t: "Probability"
			}, {
			ID: 868,
			d: 21400,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 530,
			d: 21400,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 1064,
			d: 21400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 983,
			d: 21400,
			q: 50,
			t: "Probability"
			}, {
			ID: 1009,
			d: 21400,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1010,
			d: 21500,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1079,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 1006,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 980,
			d: 21500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 515,
			d: 21500,
			q: 50,
			t: "Integers"
			}, {
			ID: 379,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 385,
			d: 21500,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 330,
			d: 21500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 366,
			d: 21600,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 582,
			d: 21600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 1041,
			d: 21600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1007,
			d: 21600,
			q: 50,
			t: "Probability"
			}, {
			ID: 1008,
			d: 21600,
			q: 50,
			t: "Probability"
			}, {
			ID: 982,
			d: 21600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1037,
			d: 21700,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 573,
			d: 21700,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 378,
			d: 21700,
			q: 50,
			t: "Probability"
			}, {
			ID: 355,
			d: 21700,
			q: 50,
			t: "Probability"
			}, {
			ID: 869,
			d: 21700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 878,
			d: 21800,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 511,
			d: 21800,
			q: 30,
			t: "Probability"
			}, {
			ID: 1036,
			d: 21800,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 956,
			d: 21900,
			q: 50,
			t: "Probability"
			}, {
			ID: 1024,
			d: 21900,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 860,
			d: 21900,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 902,
			d: 21900,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 903,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 861,
			d: 22e3,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 859,
			d: 22e3,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 882,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 569,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 1080,
			d: 22e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 1026,
			d: 22100,
			q: 40,
			t: "Proportional Relationships"
			}, {
			ID: 864,
			d: 22100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 905,
			d: 22100,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 904,
			d: 22200,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 865,
			d: 22200,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 577,
			d: 22200,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 578,
			d: 22300,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 863,
			d: 22300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 949,
			d: 22300,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 895,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 896,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 955,
			d: 22300,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 947,
			d: 22400,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 885,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 950,
			d: 22400,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 887,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 576,
			d: 22400,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 570,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 571,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 942,
			d: 22500,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 907,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 954,
			d: 22500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1043,
			d: 22600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 893,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 944,
			d: 22600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 886,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 883,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 898,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 906,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 941,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Mixed Operations"
			}, {
			ID: 884,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 940,
			d: 22900,
			q: 50,
			t: "Rational Numbers: Mixed Operations"
			}]
	},
	36: {
		ID: 36,
		grade: 7,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 509,
			d: 21e3,
			q: 50,
			t: "Ratios"
			}, {
			ID: 372,
			d: 21e3,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 223,
			d: 21e3,
			q: 48,
			t: "Data Relationships"
			}, {
			ID: 856,
			d: 21e3,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 977,
			d: 21e3,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1038,
			d: 21e3,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 1039,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1040,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1159,
			d: 21100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 857,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 858,
			d: 21100,
			q: 50,
			t: "Ratios"
			}, {
			ID: 866,
			d: 21100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 329,
			d: 21100,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 367,
			d: 21100,
			q: 50,
			t: "2D Shapes"
			}, {
			ID: 383,
			d: 21100,
			q: 35,
			t: "3D Shapes"
			}, {
			ID: 502,
			d: 21100,
			q: 50,
			t: "Ratios"
			}, {
			ID: 580,
			d: 21100,
			q: 50,
			t: "Probability"
			}, {
			ID: 572,
			d: 21100,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 568,
			d: 21200,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 506,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 387,
			d: 21200,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 579,
			d: 21200,
			q: 50,
			t: "Probability"
			}, {
			ID: 1042,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1046,
			d: 21200,
			q: 25,
			t: "Probability"
			}, {
			ID: 1023,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1025,
			d: 21200,
			q: 50,
			t: "Ratios"
			}, {
			ID: 978,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 979,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 984,
			d: 21200,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 985,
			d: 21300,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 981,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 957,
			d: 21300,
			q: 50,
			t: "Probability"
			}, {
			ID: 1022,
			d: 21300,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1075,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 525,
			d: 21300,
			q: 35,
			t: "Probability"
			}, {
			ID: 386,
			d: 21300,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 531,
			d: 21300,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 581,
			d: 21300,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 574,
			d: 21300,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 867,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 868,
			d: 21400,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 530,
			d: 21400,
			q: 30,
			t: "2D Shapes"
			}, {
			ID: 1009,
			d: 21400,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1064,
			d: 21400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 983,
			d: 21400,
			q: 50,
			t: "Probability"
			}, {
			ID: 1006,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 980,
			d: 21500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1010,
			d: 21500,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1079,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 385,
			d: 21500,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 379,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 330,
			d: 21500,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 515,
			d: 21500,
			q: 50,
			t: "Integers"
			}, {
			ID: 582,
			d: 21600,
			q: 50,
			t: "Rational Numbers: Represent"
			}, {
			ID: 366,
			d: 21600,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 1041,
			d: 21600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1007,
			d: 21600,
			q: 50,
			t: "Probability"
			}, {
			ID: 1008,
			d: 21600,
			q: 50,
			t: "Probability"
			}, {
			ID: 982,
			d: 21600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1037,
			d: 21700,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 355,
			d: 21700,
			q: 50,
			t: "Probability"
			}, {
			ID: 378,
			d: 21700,
			q: 50,
			t: "Probability"
			}, {
			ID: 573,
			d: 21700,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 869,
			d: 21700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 878,
			d: 21800,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 511,
			d: 21800,
			q: 30,
			t: "Probability"
			}, {
			ID: 1036,
			d: 21800,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 1024,
			d: 21900,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 956,
			d: 21900,
			q: 50,
			t: "Probability"
			}, {
			ID: 860,
			d: 21900,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 902,
			d: 21900,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 903,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 861,
			d: 22e3,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 859,
			d: 22e3,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 882,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 569,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 1080,
			d: 22e3,
			q: 50,
			t: "Probability"
			}, {
			ID: 1026,
			d: 22100,
			q: 40,
			t: "Proportional Relationships"
			}, {
			ID: 864,
			d: 22100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 905,
			d: 22100,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 904,
			d: 22200,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 865,
			d: 22200,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 577,
			d: 22200,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 578,
			d: 22300,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 863,
			d: 22300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 895,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 896,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 955,
			d: 22300,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 949,
			d: 22300,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 950,
			d: 22400,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 885,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 887,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 947,
			d: 22400,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 576,
			d: 22400,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 570,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 571,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 942,
			d: 22500,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 907,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 954,
			d: 22500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1043,
			d: 22600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 944,
			d: 22600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 893,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 886,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 898,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 906,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 883,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 884,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 941,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Mixed Operations"
			}, {
			ID: 940,
			d: 22900,
			q: 50,
			t: "Rational Numbers: Mixed Operations"
			}]
	},
	37: {
		ID: 37,
		grade: 8,
		sub: "Common Core",
		country: "United States",
		locationID: "2",
		skills: [{
			ID: 541,
			d: 21100,
			q: 30,
			t: "3D Shapes"
			}, {
			ID: 691,
			d: 23e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 698,
			d: 23100,
			q: 50,
			t: "Angles"
			}, {
			ID: 535,
			d: 23100,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 540,
			d: 23100,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 536,
			d: 23100,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 641,
			d: 23100,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 1061,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1053,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1063,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1082,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1114,
			d: 23100,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 1179,
			d: 23100,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 642,
			d: 23200,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 638,
			d: 23200,
			q: 22,
			t: "Radicals"
			}, {
			ID: 639,
			d: 23200,
			q: 22,
			t: "Radicals"
			}, {
			ID: 663,
			d: 23200,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 817,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 818,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 820,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 651,
			d: 23300,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 640,
			d: 23300,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 1257,
			d: 23300,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1177,
			d: 23300,
			q: 50,
			t: "Statistics"
			}, {
			ID: 1124,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1125,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1107,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 819,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 1134,
			d: 23400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1135,
			d: 23400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1176,
			d: 23400,
			q: 50,
			t: "Statistics"
			}, {
			ID: 630,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 631,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 632,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 629,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 655,
			d: 23400,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 653,
			d: 23400,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 644,
			d: 23400,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 692,
			d: 23400,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 654,
			d: 23500,
			q: 40,
			t: "Scientific Notation"
			}, {
			ID: 822,
			d: 23500,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 823,
			d: 23500,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 824,
			d: 23500,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 645,
			d: 23500,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 656,
			d: 23500,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 1140,
			d: 23500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1260,
			d: 23500,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1277,
			d: 23500,
			q: 30,
			t: "Unit Rates"
			}, {
			ID: 826,
			d: 23500,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 827,
			d: 23500,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 1115,
			d: 23600,
			q: 50,
			t: "Functions"
			}, {
			ID: 1116,
			d: 23600,
			q: 48,
			t: "Functions"
			}, {
			ID: 1086,
			d: 23600,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1276,
			d: 23600,
			q: 30,
			t: "Unit Rates"
			}, {
			ID: 652,
			d: 23600,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 634,
			d: 23600,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 628,
			d: 23600,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 635,
			d: 23600,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 636,
			d: 23600,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 637,
			d: 23600,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 643,
			d: 23600,
			q: 30,
			t: "Irrational Numbers"
			}, {
			ID: 658,
			d: 23700,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 686,
			d: 23700,
			q: 40,
			t: "Functions"
			}, {
			ID: 828,
			d: 23700,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 701,
			d: 23700,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 693,
			d: 23700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1099,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1062,
			d: 23700,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1085,
			d: 23700,
			q: 34,
			t: "Expressions and Equations"
			}, {
			ID: 1088,
			d: 23700,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1097,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1101,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1098,
			d: 23800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1108,
			d: 23800,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1139,
			d: 23800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 699,
			d: 23800,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 684,
			d: 23800,
			q: 50,
			t: "Functions"
			}, {
			ID: 688,
			d: 23800,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 696,
			d: 23800,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 659,
			d: 23800,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 633,
			d: 23800,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 689,
			d: 23900,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 681,
			d: 23900,
			q: 50,
			t: "Functions"
			}, {
			ID: 661,
			d: 23900,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 685,
			d: 23900,
			q: 21,
			t: "Functions"
			}, {
			ID: 1138,
			d: 23900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1111,
			d: 23900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1150,
			d: 23900,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1100,
			d: 24e3,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1087,
			d: 24e3,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1137,
			d: 24e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 700,
			d: 24e3,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 694,
			d: 24e3,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 697,
			d: 24e3,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 687,
			d: 24100,
			q: 40,
			t: "Functions"
			}, {
			ID: 690,
			d: 24100,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 660,
			d: 24100,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 1081,
			d: 24100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1084,
			d: 24200,
			q: 31,
			t: "Geometry"
			}, {
			ID: 1151,
			d: 24200,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1136,
			d: 24200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 695,
			d: 24200,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 682,
			d: 24300,
			q: 40,
			t: "Functions"
			}, {
			ID: 1152,
			d: 24300,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1083,
			d: 24300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1113,
			d: 24400,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 667,
			d: 24400,
			q: 40,
			t: "Linear Expressions"
			}, {
			ID: 1112,
			d: 24500,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1133,
			d: 24500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 664,
			d: 24600,
			q: 42,
			t: "Linear Expressions"
			}, {
			ID: 665,
			d: 24700,
			q: 42,
			t: "Linear Expressions"
			}, {
			ID: 666,
			d: 24700,
			q: 36,
			t: "Linear Expressions"
			}, {
			ID: 680,
			d: 24800,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 679,
			d: 24800,
			q: 27,
			t: "Linear Expressions"
			}, {
			ID: 678,
			d: 24900,
			q: 40,
			t: "Linear Expressions"
			}, {
			ID: 683,
			d: 24900,
			q: 40,
			t: "Functions"
			}, {
			ID: 662,
			d: 24900,
			q: 50,
			t: "Linear Expressions"
			}]
	},
	38: {
		ID: 38,
		grade: 8,
		sub: "Florida",
		country: "United States",
		locationID: "3",
		skills: [{
			ID: 541,
			d: 21100,
			q: 30,
			t: "3D Shapes"
			}, {
			ID: 691,
			d: 23e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 535,
			d: 23100,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 536,
			d: 23100,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 540,
			d: 23100,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 698,
			d: 23100,
			q: 50,
			t: "Angles"
			}, {
			ID: 1053,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1061,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1063,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 641,
			d: 23100,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 1082,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1114,
			d: 23100,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 1179,
			d: 23100,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 642,
			d: 23200,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 638,
			d: 23200,
			q: 22,
			t: "Radicals"
			}, {
			ID: 639,
			d: 23200,
			q: 22,
			t: "Radicals"
			}, {
			ID: 663,
			d: 23200,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 640,
			d: 23300,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 651,
			d: 23300,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 817,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 818,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 819,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 820,
			d: 23300,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 1257,
			d: 23300,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1124,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1125,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1107,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1177,
			d: 23300,
			q: 50,
			t: "Statistics"
			}, {
			ID: 1176,
			d: 23400,
			q: 50,
			t: "Statistics"
			}, {
			ID: 1134,
			d: 23400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1135,
			d: 23400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 692,
			d: 23400,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 644,
			d: 23400,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 629,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 630,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 631,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 632,
			d: 23400,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 655,
			d: 23400,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 653,
			d: 23400,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 654,
			d: 23500,
			q: 40,
			t: "Scientific Notation"
			}, {
			ID: 656,
			d: 23500,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 645,
			d: 23500,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 822,
			d: 23500,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 823,
			d: 23500,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 824,
			d: 23500,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 826,
			d: 23500,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 827,
			d: 23500,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 1260,
			d: 23500,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1140,
			d: 23500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1277,
			d: 23500,
			q: 30,
			t: "Unit Rates"
			}, {
			ID: 1276,
			d: 23600,
			q: 30,
			t: "Unit Rates"
			}, {
			ID: 1115,
			d: 23600,
			q: 50,
			t: "Functions"
			}, {
			ID: 1116,
			d: 23600,
			q: 48,
			t: "Functions"
			}, {
			ID: 1086,
			d: 23600,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 628,
			d: 23600,
			q: 50,
			t: "Exponents: Rules"
			}, {
			ID: 652,
			d: 23600,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 643,
			d: 23600,
			q: 30,
			t: "Irrational Numbers"
			}, {
			ID: 634,
			d: 23600,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 635,
			d: 23600,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 636,
			d: 23600,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 637,
			d: 23600,
			q: 40,
			t: "Exponents: Evaluate"
			}, {
			ID: 658,
			d: 23700,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 701,
			d: 23700,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1062,
			d: 23700,
			q: 50,
			t: "Geometry"
			}, {
			ID: 828,
			d: 23700,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 693,
			d: 23700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 686,
			d: 23700,
			q: 40,
			t: "Functions"
			}, {
			ID: 1088,
			d: 23700,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1097,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1085,
			d: 23700,
			q: 34,
			t: "Expressions and Equations"
			}, {
			ID: 1099,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1101,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1108,
			d: 23800,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1098,
			d: 23800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1139,
			d: 23800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 688,
			d: 23800,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 684,
			d: 23800,
			q: 50,
			t: "Functions"
			}, {
			ID: 699,
			d: 23800,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 696,
			d: 23800,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 659,
			d: 23800,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 633,
			d: 23800,
			q: 50,
			t: "Exponents: Evaluate"
			}, {
			ID: 661,
			d: 23900,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 685,
			d: 23900,
			q: 21,
			t: "Functions"
			}, {
			ID: 681,
			d: 23900,
			q: 50,
			t: "Functions"
			}, {
			ID: 689,
			d: 23900,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1111,
			d: 23900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1138,
			d: 23900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1150,
			d: 23900,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1137,
			d: 24e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1100,
			d: 24e3,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1087,
			d: 24e3,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 700,
			d: 24e3,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 694,
			d: 24e3,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 697,
			d: 24e3,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 1081,
			d: 24100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 690,
			d: 24100,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 687,
			d: 24100,
			q: 40,
			t: "Functions"
			}, {
			ID: 660,
			d: 24100,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 695,
			d: 24200,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 1084,
			d: 24200,
			q: 31,
			t: "Geometry"
			}, {
			ID: 1136,
			d: 24200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1151,
			d: 24200,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1152,
			d: 24300,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1083,
			d: 24300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 682,
			d: 24300,
			q: 40,
			t: "Functions"
			}, {
			ID: 667,
			d: 24400,
			q: 40,
			t: "Linear Expressions"
			}, {
			ID: 1113,
			d: 24400,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1112,
			d: 24500,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1133,
			d: 24500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 664,
			d: 24600,
			q: 42,
			t: "Linear Expressions"
			}, {
			ID: 665,
			d: 24700,
			q: 42,
			t: "Linear Expressions"
			}, {
			ID: 666,
			d: 24700,
			q: 36,
			t: "Linear Expressions"
			}, {
			ID: 679,
			d: 24800,
			q: 27,
			t: "Linear Expressions"
			}, {
			ID: 680,
			d: 24800,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 678,
			d: 24900,
			q: 40,
			t: "Linear Expressions"
			}, {
			ID: 662,
			d: 24900,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 683,
			d: 24900,
			q: 40,
			t: "Functions"
			}]
	},
	40: {
		ID: 40,
		grade: 7,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 1012,
			d: 18900,
			q: 18,
			t: "3D Shapes"
			}, {
			ID: 1017,
			d: 19500,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 1018,
			d: 19500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1019,
			d: 19600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1013,
			d: 19600,
			q: 20,
			t: "3D Shapes"
			}, {
			ID: 509,
			d: 19600,
			q: 50,
			t: "Ratios"
			}, {
			ID: 324,
			d: 19600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1169,
			d: 19600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1168,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1164,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1165,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1020,
			d: 19700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1069,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1070,
			d: 19700,
			q: 50,
			t: "Data Relationships"
			}, {
			ID: 1071,
			d: 19700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 363,
			d: 19800,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1167,
			d: 19800,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1049,
			d: 19800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1170,
			d: 19800,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1048,
			d: 19900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 865,
			d: 20300,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 1163,
			d: 20500,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1162,
			d: 20600,
			q: 50,
			t: "Variables, Expressions, and Equations"
			}, {
			ID: 1038,
			d: 21e3,
			q: 20,
			t: "2D Shapes"
			}, {
			ID: 977,
			d: 21e3,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 856,
			d: 21e3,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 857,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 866,
			d: 21100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1039,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1040,
			d: 21100,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1042,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 978,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 979,
			d: 21200,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 981,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 957,
			d: 21300,
			q: 50,
			t: "Probability"
			}, {
			ID: 867,
			d: 21300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 581,
			d: 21300,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 868,
			d: 21400,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 983,
			d: 21400,
			q: 50,
			t: "Probability"
			}, {
			ID: 1009,
			d: 21400,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1010,
			d: 21500,
			q: 50,
			t: "Ratios"
			}, {
			ID: 1006,
			d: 21500,
			q: 50,
			t: "Probability"
			}, {
			ID: 980,
			d: 21500,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 515,
			d: 21500,
			q: 50,
			t: "Integers"
			}, {
			ID: 982,
			d: 21600,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 1007,
			d: 21600,
			q: 50,
			t: "Probability"
			}, {
			ID: 1008,
			d: 21600,
			q: 50,
			t: "Probability"
			}, {
			ID: 1041,
			d: 21600,
			q: 50,
			t: "Unit Rates"
			}, {
			ID: 1037,
			d: 21700,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 573,
			d: 21700,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 869,
			d: 21700,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 878,
			d: 21800,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 1036,
			d: 21800,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 956,
			d: 21900,
			q: 50,
			t: "Probability"
			}, {
			ID: 860,
			d: 21900,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 902,
			d: 21900,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 903,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 861,
			d: 22e3,
			q: 30,
			t: "Proportional Relationships"
			}, {
			ID: 859,
			d: 22e3,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 882,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 569,
			d: 22e3,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 864,
			d: 22100,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 905,
			d: 22100,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 904,
			d: 22200,
			q: 50,
			t: "Rational Numbers: Addition and Subtraction"
			}, {
			ID: 895,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 896,
			d: 22300,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 863,
			d: 22300,
			q: 50,
			t: "Proportional Relationships"
			}, {
			ID: 885,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 887,
			d: 22400,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 570,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 571,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 907,
			d: 22500,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 893,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 886,
			d: 22600,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 898,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 906,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 883,
			d: 22700,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 884,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Multiplication and Division"
			}, {
			ID: 941,
			d: 22800,
			q: 50,
			t: "Rational Numbers: Mixed Operations"
			}, {
			ID: 940,
			d: 22900,
			q: 50,
			t: "Rational Numbers: Mixed Operations"
			}]
	},
	41: {
		ID: 41,
		grade: 8,
		sub: "Texas",
		country: "United States",
		locationID: "4",
		skills: [{
			ID: 522,
			d: -300,
			q: 40,
			t: "2D Shapes"
			}, {
			ID: 541,
			d: 21100,
			q: 30,
			t: "3D Shapes"
			}, {
			ID: 691,
			d: 23e3,
			q: 50,
			t: "Angles"
			}, {
			ID: 698,
			d: 23100,
			q: 50,
			t: "Angles"
			}, {
			ID: 1053,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1063,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1061,
			d: 23100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 641,
			d: 23100,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 1179,
			d: 23100,
			q: 50,
			t: "3D Shapes"
			}, {
			ID: 642,
			d: 23200,
			q: 50,
			t: "Scientific Notation"
			}, {
			ID: 663,
			d: 23200,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 1257,
			d: 23300,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 1124,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1125,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1107,
			d: 23300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1134,
			d: 23400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1135,
			d: 23400,
			q: 50,
			t: "Geometry"
			}, {
			ID: 644,
			d: 23400,
			q: 50,
			t: "Irrational Numbers"
			}, {
			ID: 655,
			d: 23400,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 692,
			d: 23400,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 656,
			d: 23500,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 1277,
			d: 23500,
			q: 30,
			t: "Unit Rates"
			}, {
			ID: 1140,
			d: 23500,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1276,
			d: 23600,
			q: 30,
			t: "Unit Rates"
			}, {
			ID: 1115,
			d: 23600,
			q: 50,
			t: "Functions"
			}, {
			ID: 1116,
			d: 23600,
			q: 48,
			t: "Functions"
			}, {
			ID: 1086,
			d: 23600,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 643,
			d: 23600,
			q: 30,
			t: "Irrational Numbers"
			}, {
			ID: 658,
			d: 23700,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 693,
			d: 23700,
			q: 30,
			t: "Data Relationships"
			}, {
			ID: 686,
			d: 23700,
			q: 40,
			t: "Functions"
			}, {
			ID: 1062,
			d: 23700,
			q: 50,
			t: "Geometry"
			}, {
			ID: 701,
			d: 23700,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1088,
			d: 23700,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1097,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1099,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1085,
			d: 23700,
			q: 34,
			t: "Expressions and Equations"
			}, {
			ID: 1101,
			d: 23700,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1108,
			d: 23800,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1098,
			d: 23800,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1139,
			d: 23800,
			q: 50,
			t: "Geometry"
			}, {
			ID: 699,
			d: 23800,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 696,
			d: 23800,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 659,
			d: 23800,
			q: 30,
			t: "Linear Expressions"
			}, {
			ID: 688,
			d: 23800,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 689,
			d: 23900,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 661,
			d: 23900,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 1138,
			d: 23900,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1150,
			d: 23900,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1111,
			d: 23900,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1100,
			d: 24e3,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 1087,
			d: 24e3,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1137,
			d: 24e3,
			q: 50,
			t: "Geometry"
			}, {
			ID: 694,
			d: 24e3,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 697,
			d: 24e3,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 700,
			d: 24e3,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1081,
			d: 24100,
			q: 50,
			t: "Geometry"
			}, {
			ID: 687,
			d: 24100,
			q: 40,
			t: "Functions"
			}, {
			ID: 690,
			d: 24100,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 660,
			d: 24100,
			q: 50,
			t: "Linear Expressions"
			}, {
			ID: 695,
			d: 24200,
			q: 22,
			t: "Data Relationships"
			}, {
			ID: 1136,
			d: 24200,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1151,
			d: 24200,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 1084,
			d: 24200,
			q: 31,
			t: "Geometry"
			}, {
			ID: 1152,
			d: 24300,
			q: 50,
			t: "Pythagorean Theorem"
			}, {
			ID: 682,
			d: 24300,
			q: 40,
			t: "Functions"
			}, {
			ID: 1083,
			d: 24300,
			q: 50,
			t: "Geometry"
			}, {
			ID: 1113,
			d: 24400,
			q: 48,
			t: "Expressions and Equations"
			}, {
			ID: 1112,
			d: 24500,
			q: 50,
			t: "Expressions and Equations"
			}, {
			ID: 664,
			d: 24600,
			q: 42,
			t: "Linear Expressions"
			}]
	}
}, Prodigy.EducationSystem.getAlignedSkills = function (e, t, i) {
	var a = [];
	for (var s in Prodigy.EducationSystem.curriculums)
		if (Prodigy.EducationSystem.curriculums.hasOwnProperty(s)) {
			var r = Prodigy.EducationSystem.curriculums[s];
			r.grade != e && Util.isDefined(e) || r.country != t || r.sub != i || (a = a.concat(r.skills))
		} return a
}, Prodigy.EducationSystem.isSkillInCurriculum = function (e, t, i, a) {
	for (var s in Prodigy.EducationSystem.curriculums)
		if (Prodigy.EducationSystem.curriculums.hasOwnProperty(s)) {
			var r = Prodigy.EducationSystem.curriculums[s];
			if (r.grade == e && r.country == t && r.sub == i)
				for (var o = 0; o < r.skills.length; o++)
					if (r.skills[o] == a) return !0
		} return !1
}, Prodigy.SkillSelection = function (e, t, i, a, s, r) {
	this.game = e, this.skillTree = t, this.exhaust = 0, this.selectedGrade = r, this.country = a, this.sub = s, this.skills = t.getSkills(Prodigy.EducationSystem.getAlignedSkills(null, a, s)), this.setup(i)
}, Prodigy.SkillSelection.prototype = {
	constructor: Prodigy.SkillSelection,
	setup: function (e) {
		this.grade = e, this.fastTrack = e < this.selectedGrade, this.skillTree.setCurriculum(this.country, this.sub);
		for (var t = 0; t < this.skills.length; t++)
			for (var i = this.skills[t], a = 1; e >= a; a++) Prodigy.EducationSystem.isSkillInCurriculum(a, this.country, this.sub, i.ID) && (i.grade = a);
		this.type = "BASIC " + this.grade + ", " + this.country + ", " + this.sub
	},
	save: function () {
		this.updated = !1
	},
	isComplete: function () {
		return !1
	},
	selectSkill: function () {
		console.log("-------------------------------------------\n"), console.log("\n------ " + this.type + " SKILL SELECTION ------"), this.current = null;
		for (var e = [], t = 0; t < this.skills.length && !Util.isDefined(this.current); t++) {
			var i = this.skills[t],
				a = "";
			i.isValid() ? i.isNew() && i.grade === this.grade ? (a = "NEW GRADE SKILL :", this.current = i) : i.isNew() && i.decay >= 3 * .6 ? (a = "NEW AVAIL PREREQ :", this.current = i) : !i.isNew() && i.grade <= this.grade ? (a = "NON-MASTERED SKILL :", this.current = i) : a = "SKIPPED (OUTSIDE GRADE) :" : (e.push(i), a = i.lock ? "SKILL LOCKED :" : i.localLock.length > 0 ? "PREREQS LOCKED :" : i.isMastered() ? "SKILL MASTERED :" : "SKIPPED ??? :"), console.log(a + " ID = " + i.ID + ", decay = " + i.decay + ", theta = " + i.theta + ", grade = " + i.grade)
		}
		if (!Util.isDefined(this.current))
			if (Util.isDefined(this.country) && this.grade < 8 && this.skillTree.isMastered(Prodigy.EducationSystem.getAlignedSkills(this.grade, this.country, this.sub))) console.log("GRADE COMPLETE!"), this.game.prodigy.network.updateUser({
				grade: this.grade + 1
			}, function () {}), this.game.prodigy.network.sendNotification({
				type: "grade:mastered:" + this.grade,
				message: {
					userID: this.game.prodigy.player.userID,
					grade: this.grade
				}
			}), this.setup(this.grade + 1);
			else {
				console.log("STUCK OR FULL MASTERY --- RANDOM SELECT!");
				for (var s = 0, t = 0; 5 > s && e.length > 0; t++) {
					var i = Util.randomArrayElement(e);
					i.grade === this.grade && (i.setDecay(.6 * 3), this.current = i, s++), Util.removeFromArray(i, e)
				}
			} return Util.isDefined(this.current) || (this.current = this.skills[0]), this.current
	},
	selectQuestion: function () {
		for (var e = Math.max(0, Math.ceil(this.current.questions / 20)), t = Math.floor(this.current.getNormalizedTheta() * this.current.questions), i = [], a = -.1, s = Math.max(0, t - e); s < this.current.questions && t + e > s; s++) a += .2 / (2 * e + 1), Util.inArray(this.current.previous, s) || i.push({
			index: s,
			mod: a
		});
		if (i.length > 0) {
			var r = Util.randomArrayElement(i);
			t = r.index, this.mod = r.mod
		} else this.mod = 0;
		return this.current.previous.push(t), this.current.previous.length > 10 && this.current.previous.splice(0, 1), console.log("QUESTION CHOSEN: index = " + t + ", mod = " + this.mod), 0 > t && (t = 0), t > this.current.questions - 1 && (t = this.current.questions - 1), {
			index: t
		}
	},
	answerQuestion: function (e, t, i) {
		this.exhaust += this.current.nFactor * (e ? 1 : 3), this.exhaust >= 150 && (this.exhaust = 0), this.skillTree.decrementLocks(), this.current.answerQuestion(this.mod, e, t, i)
	}
}, Prodigy.PlannerSkillSelection = function (e, t, i, a, s, r, o) {
	this.game = e, this.skillTree = t, this.country = s, this.sub = r, this.data = o, this.selectedGrade = a;
	var n = t.getSkills(Prodigy.EducationSystem.getAlignedSkills(null, s, r));
	this.data.sort(function (e, t) {
		var i = e.active ? -1e3 : Math.abs(e.diff),
			a = t.active ? -1e3 : Math.abs(t.diff);
		return i - a
	}), this.skills = [];
	for (var l = 0; l < this.data.length; l++)
		for (var h = this.data[l], d = 0; d < n.length; d++) {
			var p = n[d];
			if (Util.inArray(h.skill_list, p.ID) && (h.active || h.diff < 0)) this.skills.push(p);
			else if (h.diff >= 0 && !h.active)
				for (var c = 0; c < p.next.length; c++) {
					var u = p.next[c];
					Util.inArray(h.skill_list, u.ID) && !Util.inArray(h.skill_list, p.ID) && this.skills.push(p)
				}
		}
	console.log("PLANNER SKILLS:"), console.log(this.skills), this.setup(i)
}, Prodigy.extends(Prodigy.PlannerSkillSelection, Prodigy.SkillSelection, {
	constructor: Prodigy.PlannerSkillSelection,
	setup: function (e) {
		this.grade = e;
		for (var t = 0; t < this.skills.length; t++) {
			var i = this.skills[t];
			i.marked = !0
		}
		this.type = "PLANNER " + this.grade + ", " + this.country + ", " + this.sub
	},
	save: function () {
		this.updated = !1
	},
	isComplete: function () {
		for (var e = 0; e < this.skills.length; e++) {
			var t = this.skills[e];
			if (t.isMastered() && t.lastTime >= 14) return !1;
			if (!t.isValid() || t.isStruggling() && t.lastTime < 2 && Util.isSchoolHours());
			else if (t.isValid()) return !1
		}
		return !0
	},
	selectSkill: function (e) {
		e || (console.log("-------------------------------------------\n"), console.log("\n------ " + this.type + " SKILL SELECTION ------")), this.current = null;
		for (var t = 0; t < this.skills.length && !Util.isDefined(this.current); t++) {
			var i = this.skills[t],
				a = "";
			i.isMastered() && i.lastTime >= 14 ? (i.setDecay(4), i.lastTime = 2, this.current = i, a = "OLD MASTERY") : !i.isValid() || i.isStruggling() && i.lastTime < 2 && !Util.isSchoolHours() ? (this.skills.splice(t, 1), t--, a = "LOCKED") : i.isValid() && (i.lastTime = 2, this.current = i, a = "NORMAL"), e || console.log(a + " ID = " + i.ID + ", decay = " + i.decay + ", theta = " + i.theta + ", last = " + i.lastTime)
		}
		return this.current
	},
	answerQuestion: function (e, t, i) {
		Prodigy.SkillSelection.prototype.answerQuestion.call(this, e, t, i), !e && this.isComplete() && this.game.prodigy.network.sendAnalytics("failed", this.game.prodigy.player.userID, "Planner")
	}
}), Prodigy.HomeworkSkillSelection = function (e, t, i) {
	if (this.game = e, Util.isDefined(i)) {
		this.skills = i.skills, this.homeworkID = i.homeworkID, this.skillTree = t, this.incorrect = 0, this.correct = 0;
		for (var a = 0; a < this.skills.length; a++) {
			var s = this.skills[a];
			0 === a && (this.skillID = s.skillID), Util.isDefined(s.incorrect) && (this.incorrect += s.incorrect), Util.isDefined(s.correct) && (this.correct += s.correct)
		}
		Util.isDefined(i.stats) && Util.isDefined(i.stats.skills) && i.stats.skills > 1 && (this.isExtended = !0)
	}
}, Prodigy.extends(Prodigy.HomeworkSkillSelection, Prodigy.SkillSelection, {
	constructor: Prodigy.HomeworkSkillSelection,
	isComplete: function () {
		if (!Util.isDefined(this.skills)) return !0;
		for (var e = 0; e < this.skills.length; e++)
			if (this.skills[e].questions.length > 0) return !1;
		return !0
	},
	selectSkill: function () {
		if (!Util.isDefined(this.skills)) return null;
		console.log("HOMEWORK SELECT!");
		for (var e = 0; e < this.skills.length; e++) {
			var t = this.skills[e];
			if (t.questions.length > 0) {
				var i = this.skillTree.getSkill(t.skillID);
				if (Util.isDefined(i)) return this.currentSkill = t, this.currentQuestion = t.questions[0], this.current = i, this.current.marked = !0, console.log("HW ID = " + i.ID + ", decay = " + i.decay + ", theta = " + i.theta + ", grade = " + i.grade), i;
				this.skills.splice(e, 1), e--
			} else this.skills.splice(e, 1), e--
		}
		return null
	},
	selectQuestion: function () {
		return this.mod = 0, {
			ID: this.currentQuestion,
			homeworkID: this.homeworkID
		}
	},
	answerQuestion: function (e, t) {
		if (this.currentSkill.questions.splice(0, 1), e) this.correct++;
		else {
			this.incorrect++;
			var i = this.incorrect + this.correct;
			if (this.isExtended && this.incorrect >= 9) {
				var i = this.incorrect + this.correct,
					a = Math.floor(i * (.6 - .0055 * (i - 15)));
				(15 >= i || this.incorrect >= a) && (this.skills = null)
			}
		}
		if (Prodigy.SkillSelection.prototype.answerQuestion.call(this, e, t), this.isComplete()) {
			console.log("ASSIGNMENT COMPLETE"), this.game.prodigy.network.completeAssignment(this.homeworkID);
			var s = "";
			s = Util.isDefined(this.skills) ? "assignment:complete:" + this.homeworkID : "assignment:failed:" + this.homeworkID, this.game.prodigy.network.sendNotification({
				type: s,
				message: {
					userID: this.game.prodigy.player.userID,
					assignmentID: this.homeworkID,
					skillID: this.skillID,
					grade: this.getGrade()
				}
			})
		}
	},
	getGrade: function () {
		var e = this.correct + this.incorrect;
		return this.correct / e
	}
}), Prodigy.PlacementSkillSelection = function (e, t, i, a, s, r, o, n) {
	this.game = e, this.placementTestID = r, this.currentSkill = o, this.skills = [], this.grade = s, this.country = i, this.sub = a, this.momentum = n || 0, this.skillTree = t, this.newGrade = null, this.selectGrade = s, this.testIDs = Prodigy.PlacementSkillSelection.TARGETS[i];
	for (var l = 0, h = 0; h < this.testIDs.length; h++)
		for (var d = 0; d < this.testIDs[h].length; d++) {
			var p = t.getSkill(this.testIDs[h][d]);
			this.skills.push(p), p.marked = !0, (h === s - 2 || 0 === h && 0 > s - 2) && 0 === d && !Util.isDefined(o) && (this.currentSkill = l), l++
		}
}, Prodigy.extends(Prodigy.PlacementSkillSelection, Prodigy.SkillSelection, {
	constructor: Prodigy.PlacementSkillSelection,
	isComplete: function () {
		return 0 === this.momentum && !Util.isDefined(this.currentSkill)
	},
	save: function () {
		this.game.prodigy.network.updateUser({
			currentSkill: this.currentSkill,
			momentum: this.momentum
		}, function () {}), this.updated = !1
	},
	selectSkill: function () {
		return this.isComplete() ? null : (console.log("PLACEMENT ID " + this.placementTestID + " - " + this.currentSkill), this.current = this.skills[this.currentSkill], console.log("SKILL CHOSEN " + this.current.ID), this.current)
	},
	selectQuestion: function () {
		this.mod = 0;
		var e = 0;
		return e = 0 === this.current.correct ? 0 + this.current.incorrect : 1 === this.current.correct ? this.current.questions / 2 + Math.max(0, this.current.incorrect) : this.current.questions - 1 - Math.max(0, this.current.incorrect), e = Math.floor(e), 0 > e && (e = 0), e > this.current.questions - 1 && (e = this.current.questions - 1), {
			index: e
		}
	},
	answerQuestion: function (e, t) {
		if (this.updated = !0, Prodigy.SkillSelection.prototype.answerQuestion.call(this, e, t, !0), this.current.incorrectT >= 2) 0 === this.momentum ? this.momentum = -2 : 2 === this.momentum ? this.momentum = -1 : 1 === this.momentum && this.completeTest(this.currentSkill);
		else {
			if (!(this.current.correctT >= 3)) return;
			0 === this.momentum ? this.momentum = 2 : -2 === this.momentum ? this.momentum = 1 : -1 === this.momentum && this.completeTest(this.currentSkill + 1)
		}
		0 !== this.momentum && (this.currentSkill += this.momentum, (this.currentSkill <= 0 || this.currentSkill >= this.skills.length - 1) && this.completeTest(this.currentSkill))
	},
	completeTest: function (e) {
		0 > e && (e = 0), e > this.skills.length - 1 && (e = this.skills.length - 1);
		for (var t = 1, i = null, a = 1, s = 0, r = 0; r < this.testIDs.length && !Util.isDefined(i); r++) {
			t = r + 1;
			for (var o = 0; o < this.testIDs[r].length; o++) {
				if (s === e) {
					i = o / this.testIDs[r].length;
					break
				}
				s++
			}
		}
		this.momentum = 0, this.currentSkill = null, a = t === this.selectGrade ? this.selectGrade : t === this.selectGrade - 1 && i >= .75 ? this.selectGrade : i >= .15 ? t : t - 1, 1 > a ? a = 1 : a > 8 && (a = 8), this.completed = !0, this.newGrade = a, this.game.prodigy.education.setCurriculum(a, this.country, this.sub, this.grade), this.updated = !0, console.log("COMPLETE PLACEMENT TEST " + this.placementTestID + ", grade = " + a + ", percent = " + i), this.game.prodigy.network.finishPlacement(this.newGrade, this.game.prodigy.player.classIDs), this.game.prodigy.network.sendNotification({
			type: "placement-test:complete:" + this.newGrade,
			message: {
				userID: this.game.prodigy.player.userID,
				grade: this.newGrade
			}
		});
		var n = {
			currentSkill: "null",
			momentum: 0
		};
		n.grade = this.newGrade, n.placementTestID = "null", this.game.prodigy.network.updateUser(n, function () {}), console.log(n)
	}
}), Prodigy.PlacementSkillSelection.TARGETS = {
	1: [[94, 95, 148, 49, 3, 196, 482], [429, 439, 7, 53, 457, 77, 76], [176, 186, 240, 243, 249, 27, 38], [29, 129, 208, 760, 252, 719, 721], [51, 223, 258, 825, 1014, 117, 1016], [309, 359, 966, 328, 341, 322, 894], [998, 505, 515, 987, 512, 529, 332], [534, 535, 540, 688, 533, 609, 1061]],
	2: [[94, 97, 98, 164, 165, 196, 197], [166, 110, 243, 154, 186, 185, 458], [772, 782, 554, 753, 722, 719, 803], [847, 838, 1054, 1050, 849, 901, 925, 892], [805, 65, 385, 609, 876, 918], [999, 1059, 509, 506, 1044, 946], [387, 861, 541, 902, 979, 898], [691, 701, 681, 697, 663, 664]]
};
var Creature = function () {
	function e() {
		this.data = {}, this.appearanceChanged = !1
	}
	return e.prototype = Object.create(e.prototype), e.prototype.getDataAndClear = function () {
		return this.updated = !1, this.data
	}, e.prototype.getID = function () {
		return 0
	}, e.prototype.getAffixes = function () {
		return []
	}, e.prototype.canCatch = function () {
		return !1
	}, e.prototype.getAttacks = function () {
		return [1]
	}, e.prototype.isKnockedOut = function () {
		return this.getCurrentHearts() <= 0
	}, e.prototype.getMaxHearts = function (t) {
		return t = t || this.getLevel(), e.getHeartsFromCurve(Util.isDefined(this.type) ? this.type : "B", 1, t)
	}, e.prototype.getCurrentHearts = function () {
		return Util.isDefined(this.data.hp) ? (this.data.hp > this.getMaxHearts() && (this.data.hp = this.getMaxHearts()), this.data.hp) : this.getMaxHearts()
	}, e.prototype.changeCurrentHearts = function (e) {
		var t = this.getCurrentHearts() + e;
		0 > t && (t = 0), t > this.getMaxHearts() && (t = this.getMaxHearts()), this.data.hp = t, this.updated = !0
	}, e.prototype.addStars = function (t) {
		var i = this.getLevel();
		if (!(i >= 100)) {
			if (Util.isDefined(this.data.stars) ? this.data.stars += t : this.data.stars = t, this.data.level = e.levelFromStars(this.data.stars), i !== this.data.level) {
				Util.isDefined(this.levelEvents) || (this.levelEvents = []);
				var a = this.getLevelingCurve(this.data.level);
				if (Util.isDefined(a))
					for (var s = 0; s < a.length; s++) Util.inArray(this.levelEvents, a[s]) || this.levelEvents.push(a[s]);
				this.getMaxHearts(i) !== this.getMaxHearts(this.data.level) && this.levelEvents.push({
					h: 2,
					lvl: this.data.level
				})
			}
			this.updated = !0
		}
	}, e.prototype.getUnprocessedLevelEvents = function () {
		return this.levelEvents
	}, e.prototype.clearUnprocessedLevelEvents = function () {
		this.levelEvents = []
	}, e.prototype.getStars = function () {
		return Util.isDefined(this.data.stars) ? this.data.stars : 0
	}, e.prototype.getStarsToLevel = function () {
		var t = this.getStars(),
			i = this.getLevel(),
			a = e.starsToLevel(i);
		return Math.max(0, a - t)
	}, e.prototype.getStarReward = function () {
		return 10
	}, e.prototype.getLevel = function () {
		return Util.isDefined(this.data.level) ? this.data.level : 1
	}, e.prototype.getLevelingCurve = function () {
		return []
	}, e.prototype.getElement = function () {
		return "wizard"
	}, e.prototype.getDamageBonus = function () {
		return 0
	}, e.prototype.giveBonus = function () {}, e.prototype.getDrops = function () {
		return []
	}, e
}();
Creature.MAX_HEARTS = 80, Creature.HP_BONUS = {
	"A+": 4,
	A: 3,
	"A-": 2,
	"B+": 1,
	B: 0,
	"B-": -1,
	"C+": -2,
	C: -3,
	"C-": -4
}, Creature.enemiesPerLevel = function (e) {
	return Math.max(0, Math.floor(.8 + Math.pow(1.7, .085 * e)))
}, Creature.starsToLevel = function (e) {
	if (1 > e) return 0;
	for (var t = 0, i = 1; e >= i; i++) t += Creature.enemiesPerLevel(i);
	return 10 * t
}, Creature.getLevelPercent = function (e) {
	var t = Creature.levelFromStars(e),
		i = Creature.starsToLevel(t),
		a = Creature.starsToLevel(t - 1),
		s = (e - a) / (i - a);
	return s
}, Creature.levelFromStars = function (e) {
	for (var t = 1; 100 >= t; t++)
		if (e < Creature.starsToLevel(t)) return t;
	return 100
}, Creature.getHeartsFromCurve = function (e, t, i) {
	var a = Creature.HP_BONUS[e],
		s = Math.floor((20 + a) * i / 100),
		r = Math.floor((20 + a) * (t - 1) / 100);
	return 2 * (s - r)
}, Creature.getAttacksFromCurve = function (e, t, i) {
	for (var a = [], s = 0; s < e.length; s++) {
		var r = e[s];
		r.lvl >= t && r.lvl <= i && Util.isDefined(r.a) && a.push(r.a)
	}
	return a
}, Creature.getAttacksOfType = function (e, t) {
	for (var i = [], a = 0, s = 0; s < e.length; s++) Util.isDefined(Prodigy.Attacks.data[e[s] - 1]) && (a = Prodigy.Attacks.data[e[s] - 1].element), Util.isDefined(t) && a !== t || i.push(e[s]);
	return i
};
var Boss = function () {
		function e(e) {
			Creature.call(this), this.data.level = e.level, this.source = e
		}
		return e.prototype = Object.create(Creature.prototype), e.prototype.getAttacks = function () {
			return this.source.attacks || []
		}, e.prototype.getMaxHearts = function () {
			return this.source.maxHP
		}, e.prototype.getName = function () {
			return this.source.name
		}, e.prototype.getElement = function () {
			return this.source.element
		}, e.prototype.getID = function () {
			return this.source.ID
		}, e.prototype.getAffixes = function () {
			return []
		}, e.prototype.getStarReward = function () {
			return this.source.starBonus ? this.source.starBonus : Creature.prototype.getStarReward.call(this)
		}, e
	}(),
	Appearance = function () {
		function e() {
			var e = Math.random() < .5 ? "female" : "male",
				t = Names.generateName(e);
			this.data = {
				name: t,
				gender: e,
				hairStyle: Math.floor(1 + 8 * Math.random()),
				hairColor: Math.floor(1 + 16 * Math.random()),
				skinColor: Math.floor(1 + 5 * Math.random()),
				eyeColor: Math.floor(1 + 15 * Math.random())
			}
		}
		return e.prototype = Object.create(e.prototype), e.prototype.getDataAndClear = function () {
			return this.updated = !1, this.data
		}, e.prototype.getName = function () {
			return this.data.nick || this.data.name
		}, e.prototype.getFullName = function () {
			return this.data.name
		}, e.prototype.setName = function (e) {
			this.data.name = e, this.updated = !0
		}, e.prototype.setNickname = function (e) {
			this.data.nick = e, this.updated = !0
		}, e.prototype.getCoords = function () {
			return {
				x: this.data.x || 0,
				y: this.data.y || 0
			}
		}, e.prototype.setCoords = function (e, t) {
			e = Math.floor(e), t = Math.floor(t), (this.data.x !== e || this.data.y !== t) && (this.updated = !0), this.data.x = e, this.data.y = t
		}, e.prototype.getGender = function () {
			return this.data.gender
		}, e.prototype.setGender = function (e) {
			("male" === e || "female" === e) && (this.data.gender = e), this.updated = !0
		}, e.prototype.getHairStyle = function () {
			return this.data.hairStyle
		}, e.prototype.setHairStyle = function (e) {
			e >= 1 && 15 >= e && (this.data.hairStyle = e), this.updated = !0
		}, e.prototype.getHairColor = function () {
			return this.data.hairColor
		}, e.prototype.setHairColor = function (e) {
			e >= 1 && 16 >= e && (this.data.hairColor = e), this.updated = !0
		}, e.prototype.getEyeColor = function () {
			return this.data.eyeColor
		}, e.prototype.setEyeColor = function (e) {
			e >= 1 && 15 >= e && (this.data.eyeColor = e), this.updated = !0
		}, e.prototype.getSkinColor = function () {
			return this.data.skinColor
		}, e.prototype.setSkinColor = function (e) {
			e >= 1 && 5 >= e && (this.data.skinColor = e), this.updated = !0
		}, e.prototype.setAppearance = function (e) {
			Util.isEmptyObject(e) || (this.data = e)
		}, e.prototype.getHairName = function () {
			return e.hairNames[this.getGender()][this.getHairStyle() - 1]
		}, e
	}();
Appearance.hairNames = {
	male: ["Prince", "Spikes", "Rock Star", "Fever", "Neat", "Slick", "Shaggy", "Bed Head"],
	female: ["Grace", "Spring", "Fall", "Side Swept", "Winter", "Uplift", "Blossom", "Sunshine", "Excite", "Pizzazz", "Dashing", "Summer", "Lilly", "Sweetheart", "Island Breeze"]
};
var Quests = function () {
	function e() {
		this.data = {}
	}
	return e.prototype = Object.create(e.prototype), e.prototype.setQuests = function (e) {
		this.data = e
	}, e.prototype.getDataAndClear = function () {
		return this.updated = !1, this.data
	}, e.prototype.setZoneState = function (e, t, i) {
		this.setState(e, t, i, "state")
	}, e.prototype.getZoneState = function (e, t) {
		return this.getState(e, t, "state")
	}, e.prototype.setQuestState = function (e, t, i, a) {
		Util.isDefined(this.data[e]) && this.data[e].C === t && this.setState(e, i, a, "queststate")
	}, e.prototype.getQuestState = function (e, t, i) {
		return Util.isDefined(this.data[e]) && this.data[e].C === t ? this.getState(e, i, "queststate") : null
	}, e.prototype.setState = function (e, t, i, a) {
		Util.isDefined(e) && Util.isDefined(t) && (Util.isDefined(this.data[e]) || (this.data[e] = {}), Util.isDefined(this.data[e][a]) || (this.data[e][a] = {}), Util.isDefined(i) ? this.data[e][a][t] = i : delete this.data[e][a][t])
	}, e.prototype.getState = function (e, t, i) {
		return Util.isDefined(e) && Util.isDefined(t) ? Util.isDefined(this.data[e]) && Util.isDefined(this.data[e][i]) ? this.data[e][i][t] : null : null
	}, e.prototype.getZoneVar = function (e, t) {
		return Util.isDefined(this.data[e]) ? this.data[e][t] : null
	}, e.prototype.setZoneVar = function (e, t, i) {
		Util.isDefined(this.data[e]) || (this.data[e] = {}), this.data[e][t] = i
	}, e.prototype.getCurrentQuest = function (e) {
		return Util.isDefined(this.data[e]) && this.data[e].C ? this.data[e].C : 0
	}, e.prototype.getQuestProgress = function (e) {
		return Util.isDefined(this.data[e.ID]) ? (this.data[e.ID].C - 1) / e.quests.length : 0
	}, e.prototype.isQuestComplete = function (e, t, i, a) {
		if (!Util.isDefined(this.data[e]) || !Util.isDefined(a)) return !1;
		if (this.data[e].C < t) return !1;
		if (this.data[e].C > t) return !0;
		var s = !0;
		if (Util.isDefined(a.req))
			for (var r = 0; r < a.req.length; r++) {
				var o = a.req[r];
				"pet" === o.type ? this.getMonsterProgress(e, o.ID) < o.N && (s = !1) : "boss" === o.type || "player" === o.type ? 1 !== this.data[e].B && (s = !1) : i.backpack.hasItem(o.type, o.ID) < o.N && (s = !1)
			}
		return s
	}, e.prototype.isQuestStarted = function (e, t) {
		return Util.isDefined(this.data[e]) ? this.data[e].C == t && Util.isDefined(this.data[e].A) : !1
	}, e.prototype.getMonsterProgress = function (e, t) {
		var i = this.data[e].M;
		if (!Util.isDefined(i)) return 0;
		for (var a = 0; a < i.length; a++)
			if (i[a].ID == t) return i[a].N;
		return 0
	}, e.prototype.getBossProgress = function (e) {
		var t = this.data[e].B;
		return Util.isDefined(t) ? t : 0
	}, e.prototype.clearQuestLine = function (e) {
		delete this.data[e]
	}, e.prototype.startQuestLine = function (e) {
		Util.isDefined(e) && (Util.isDefined(this.data[e]) ? this.data[e].C = 1 : this.data[e] = {
			C: 1
		})
	}, e.prototype.startQuest = function (e, t) {
		Util.isDefined(this.data[e]) && this.data[e].C == t && (this.data[e].A = 1, this.updated = !0)
	}, e.prototype.completeQuest = function (e, t, i, a) {
		if (Util.isDefined(this.data[e]) && this.data[e].C == t) {
			if (Util.isDefined(a.req))
				for (var s = 0; s < a.req.length; s++) {
					var r = a.req[s];
					"pet" !== r.type && i.backpack.consume(r.type, r.ID, r.N)
				}
			delete this.data[e].A, delete this.data[e].M, delete this.data[e].B, delete this.data[e].queststate, this.data[e].C = t + 1, this.updated = !0
		}
	}, e.prototype.defeatMonster = function (t, i, a) {
		if (Util.isDefined(this.data[t])) {
			if (Util.isDefined(i.req))
				for (var s = 0; s < i.req.length; s++) "pet" === i.req[s].type && (this.data[t].M || (this.data[t].M = []), e.hasEntryForMonster(this.data[t].M, i.req[s].ID) || this.data[t].M.push({
					ID: i.req[s].ID,
					N: 0
				}));
			if (Util.isDefined(this.data[t].M))
				for (var s = 0; s < this.data[t].M.length; s++) {
					var r = this.data[t].M[s];
					r.ID == a && r.N++
				}
		}
	}, e.prototype.defeatBoss = function (e) {
		Util.isDefined(this.data[e]) && (this.data[e].B = 1)
	}, e
}();
Quests.hasEntryForMonster = function (e, t) {
	if (!Util.isDefined(e)) return !1;
	for (var i = 0; i < e.length; i++)
		if (e[i].ID == t) return !0;
	return !1
};
var State = function () {
		function e() {
			this.data = {
				tutorial: {},
				world: {},
				zone: {}
			}
		}
		return e.prototype = Object.create(e.prototype), e.prototype.setData = function (e) {
			this.data = e
		}, e.prototype.getDataAndClear = function () {
			return this.updated = !1, this.data
		}, e.prototype.set = function (e, t) {
			if (Util.isDefined(e)) {
				e = e.split("-");
				for (var i = this.data, a = 0; a < e.length; a++) Util.isDefined(i[e[a]]) || (i[e[a]] = {}), a === e.length - 1 ? i[e[a]] = t : i = i[e[a]];
				this.updated = !0
			}
		}, e.prototype.get = function (e) {
			if (Util.isDefined(e)) {
				e = e.split("-");
				for (var t = this.data, i = 0; i < e.length; i++) {
					if (!Util.isDefined(t[e[i]])) return null;
					t = t[e[i]]
				}
				return t
			}
			return null
		}, e
	}(),
	Backpack = function () {
		function e() {
			this.data = {
				hat: [],
				boots: [],
				weapon: [],
				outfit: [],
				item: [],
				fossil: [],
				key: [],
				relic: []
			}
		}
		return e.prototype = Object.create(e.prototype), e.prototype.getDataAndClear = function () {
			return this.updated = !1, this.data
		}, e.prototype.unlockAllItems = function () {
			for (var e in this.data)
				for (var t = this.data[e], i = 0; i < t.length; i++) Util.isDefined(t[i].L) && (delete t[i].L, this.updated = !0)
		}, e.prototype.setItems = function (e) {
			this.data = e
		}, e.prototype.getTotalUnique = function () {
			var e = 0;
			for (var t in this.data) e += this.data[t].length;
			return e
		}, e.prototype.setKeyItemData = function (e, t, i) {
			if (!Util.isDefined(this.data.key)) return null;
			for (var a = 0; a < this.data.key.length; a++) this.data.key[a].ID == e && (this.data.key[a][t] = i);
			this.updated = !0
		}, e.prototype.getKeyItemData = function (e, t) {
			if (!Util.isDefined(this.data.key)) return null;
			for (var i = 0; i < this.data.key.length; i++)
				if (this.data.key[i].ID == e) return this.data.key[i][t];
			return null
		}, e.prototype.hasItem = function (e, t) {
			if (!Util.isDefined(e) || !Util.isDefined(this.data[e])) return 0;
			for (var i = 0; i < this.data[e].length; i++)
				if (this.data[e][i].ID == t) return this.data[e][i].N || 1;
			return 0
		}, e.prototype.addKeyItem = function (e, t, i) {
			Util.isDefined(this.data.key) || (this.data.key = []);
			for (var a = this.data.key, s = 0; s < a.length; s++) {
				var r = a[s];
				if (r.ID == e && r.lvl < t) return r.lvl = t, this.updated = !0, void 0
			}
			var o = {
				ID: e
			};
			o.lvl = t, Util.isDefined(i) && Util.isDefined(i.seed) && (o.seed = i.seed), a.push(o), this.updated = !0
		}, e.prototype.add = function (e, t, i, a) {
			if (Util.isDefined(this.data[e]) || (this.data[e] = []), "key" === e) return this.addKeyItem(t), void 0;
			var a = a || 1,
				s = this.data[e];
			if (Util.isDefined(s)) {
				for (var r = 0; r < s.length; r++) {
					var o = s[r];
					if (o.ID == t) return Util.isDefined(o.N) ? o.N < 99 && (o.N += a) : o.N = 1 + a, o.N > 99 && (o.N = 99), this.updated = !0, void 0
				}
				var n = {
					ID: t
				};
				a > 1 && (n.N = a), i && (n.L = 1), s.push(n), this.updated = !0
			}
		}, e.prototype.consume = function (e, t, i) {
			if (Util.isDefined(e)) {
				var a = this.data[e];
				if (Util.isDefined(a))
					for (var s = 0; s < a.length; s++) {
						var r = a[s];
						if (r.ID == t) return Util.isDefined(r.N) ? (r.N -= i || 1, 1 === r.N ? delete r.N : r.N <= 0 && a.splice(s, 1)) : a.splice(s, 1), this.updated = !0, void 0
					}
			}
		}, e.prototype.getBackpackItemsByType = function (e) {
			var t = new Array,
				i = this.data[e];
			if (Util.isDefined(i))
				for (var a = 0; a < i.length; a++) t.push(i[a]);
			return t
		}, e.prototype.canCraft = function (e, t) {
			var i = Items.getItemData(e, t);
			if (!Util.isDefined(i.recipe)) return !1;
			for (var a = 0; a < i.recipe.length; a++) {
				var s = i.recipe[a];
				if (this.hasItem(s.type, s.ID) < s.N) return !1
			}
			return !0
		}, e.prototype.craft = function (e, t) {
			if (!this.canCraft(e, t)) return !1;
			for (var i = Items.getItemData(e, t), a = 0; a < i.recipe.length; a++) {
				var s = i.recipe[a];
				this.consume(s.type, s.ID, s.N)
			}
			return this.add(e, t), this.updated = !0, !0
		}, e
	}(),
	Equipment = function () {
		function e() {
			this.data = {}
		}
		return e.prototype = Object.create(e.prototype), e.prototype.getDataAndClear = function () {
			return this.updated = !1, this.data
		}, e.prototype.getHeartBonuses = function () {
			var e = 0;
			for (var t in this.data)
				if (this.data.hasOwnProperty(t)) {
					var i = Items.getItemData(t, this.data[t]);
					if (Util.isDefined(i) && Util.isDefined(i.effects))
						for (var a = 0; a < i.effects.length; a++)(33 === i.effects[a] || 34 === i.effects[a] || 35 === i.effects[a] || 82 === i.effects[a] || 83 === i.effects[a]) && (e += Prodigy.AffixManager.data[i.effects[a]].value)
				} return e
		}, e.prototype.getEquipment = function (e) {
			return !Util.isDefined(this.data[e]) || this.data[e] <= 0 ? null : this.data[e]
		}, e.prototype.setEquipment = function (e) {
			Util.isEmptyObject(e) || (this.data = e)
		}, e.prototype.equip = function (e, t) {
			return Util.isDefined(this.data[t]) && this.data[t] === e ? !1 : (this.data[t] = e, this.updated = !0, !0)
		}, e.prototype.unEquip = function (e) {
			if (Util.isDefined(this.data[e])) {
				var t = this.data[e];
				return delete this.data[e], this.updated = !0, t
			}
			return !1
		}, e
	}(),
	Kennel = function () {
		function e(e) {
			this.player = e, this.setPets([])
		}
		return e.prototype.getDataAndClear = function () {
			return this.updated = !1, this.data
		}, e.prototype.setTeam = function (e, t) {
			if (Util.isDefined(t))
				if (t == Number(t)) e.team = t;
				else {
					var i = e.team;
					e.team = t.team, t.team = i
				}
			else delete e.team;
			this.updated = !0
		}, e.prototype.getTeamSource = function () {
			var e = [];
			Util.isDefined(this.player.data.team) || (this.player.data.team = 0), e[this.player.data.team] = this.player;
			for (var t = 0; t < this.data.length; t++) {
				var i = this.data[t];
				Util.isDefined(i.team) && (Util.isDefined(e[i.team]) ? delete i.team : e[i.team] = i)
			}
			return e
		}, e.prototype.getTeam = function () {
			for (var e = this.getTeamSource(), t = 0; t < e.length; t++) {
				var i = e[t];
				i instanceof Player || !Util.isDefined(i) || (e[t] = new Monster(i))
			}
			return e
		}, e.prototype.getAvgTeamLv = function () {
			for (var e = this.getTeamSource(), t = 0, i = 0, a = 0; a < e.length; a++) Util.isDefined(e[a]) ? Util.isDefined(e[a].data) ? Util.isDefined(e[a].data.level) ? t += e[a].data.level : t++ : Util.isDefined(e[a].level) && (t += e[a].level) : i += 1;
			return Math.floor(t / (e.length - i))
		}, e.prototype.getTeamScore = function () {
			for (var e = this.getTeam(), t = 0, i = 0; i < e.length; i++) Util.isDefined(e[i]) && !e[i].isKnockedOut() && (t += e[i].getCurrentHearts());
			return t
		}, e.prototype.findEmptyTeamIndex = function () {
			var e = [0, 1, 2, 3, 4];
			Util.isDefined(this.player.data.team) ? Util.removeFromArray(this.player.data.team, e) : Util.removeFromArray(0, e);
			for (var t = 0; t < this.data.length; t++) {
				var i = this.data[t].team;
				Util.isDefined(i) && Util.removeFromArray(i, e)
			}
			return e[0]
		}, e.prototype.add = function (e) {
			if (Util.isDefined(e) && e) {
				var t = this.findEmptyTeamIndex();
				Util.isDefined(t) && (e.team = t), this.data.push(e), this.updated = !0
			}
		}, e.prototype.remove = function (e) {
			for (var t = this.data.length; t--;) this.data[t] === e && this.data.splice(t, 1);
			this.updated = !0
		}, e.prototype.getPets = function (e) {
			for (var t = [], i = 0; i < this.data.length; i++) e && Util.isDefined(this.data[i].team) || t.push(this.data[i]);
			return t
		}, e.prototype.setPets = function (e) {
			this.data = e
		}, e.prototype.getPetsAsMonsters = function () {
			for (var e = [], t = 0; t < this.data.length; t++) e.push(new Monster(this.data[t]));
			return e
		}, e.prototype.hasPet = function (e) {
			for (var t = 0; t < this.data.length; t++)
				if (this.data[t].ID == e) return !0;
			return !1
		}, e.prototype.isFull = function () {
			return this.data.length >= 140
		}, e
	}(),
	Monster = function () {
		function e(e) {
			Creature.call(this), this.data = e, this.nickname = e.nickname, this.drops = e.drops, this.attacks = e.attacks, delete this.data.R, delete this.data.drops, this.source = Monsters.getItemData(e.ID), this.type = this.source.life
		}
		return e.prototype = Object.create(Creature.prototype), e.prototype.canCatch = function (e) {
			return Util.isDefined(e.bounty) ? !0 : !Util.isDefined(this.nickname)
		}, e.prototype.getAffixes = function () {
			return this.source.effects
		}, e.prototype.getAttacks = function (e) {
			if (Util.isDefined(this.attacks)) return this.attacks;
			var t = [];
			if (Util.isDefined(this.data.evolve)) {
				for (var i = 1, a = 0; a < this.data.evolve.length; a++) {
					var s = this.data.evolve[a],
						r = Monsters.getItemData(s.ID).curve;
					t = t.concat(Creature.getAttacksFromCurve(r, i, s.lvl)), i = s.lvl
				}
				t = t.concat(Creature.getAttacksFromCurve(Monsters.getItemData(this.getID()).curve, i, this.getLevel()))
			} else t = t.concat(Creature.getAttacksFromCurve(Monsters.getItemData(this.getID()).curve, 1, this.getLevel()));
			return Creature.getAttacksOfType(Util.removeDuplicates(t), e)
		}, e.prototype.getMaxHearts = function (e) {
			var t = 12;
			if (Util.isDefined(this.data.evolve)) {
				for (var i = 1, a = 0; a < this.data.evolve.length; a++) {
					var s = this.data.evolve[a],
						r = Monsters.getItemData(s.ID).life;
					t += Creature.getHeartsFromCurve(r, i, s.lvl - 1), i = s.lvl
				}
				t += Creature.getHeartsFromCurve(this.type, i, this.getLevel())
			} else t += Creature.prototype.getMaxHearts.call(this, e);
			return Math.min(t, Creature.MAX_HEARTS)
		}, e.prototype.evolve = function (e) {
			Util.isDefined(this.data.evolve) || (this.data.evolve = []), this.data.evolve.push({
				ID: this.data.ID,
				lvl: this.getLevel()
			}), this.data.ID = e, this.source = Monsters.getItemData(this.data.ID)
		}, e.prototype.getID = function () {
			return this.source.ID
		}, e.prototype.getName = function () {
			return this.nickname || this.source.name
		}, e.prototype.getSourceName = function () {
			return this.source.name
		}, e.prototype.getDescription = function () {
			return this.source.flavorText
		}, e.prototype.getLife = function () {
			return this.source.life
		}, e.prototype.getPower = function () {
			return this.source.power
		}, e.prototype.getGrowth = function () {
			return this.source.growth
		}, e.prototype.getElement = function () {
			return this.source.element
		}, e.prototype.generate = function (e, t) {
			e = Math.max(1, e - t);
			var i = Creature.starsToLevel(e - 1);
			this.data.stars = i, this.data.level = e
		}, e.prototype.getLevelingCurve = function (e) {
			Creature.prototype.getLevelingCurve.call(this, e);
			for (var t = [], i = Monsters.getItemData(this.getID()).curve, a = 0; a < i.length; a++) {
				var s = i[a];
				Util.isDefined(s.e) && s.lvl <= e ? t.push(s) : s.lvl === e && t.push(s)
			}
			return t
		}, e.prototype.getDrops = function () {
			var e = [{
				type: "gold",
				N: 100
				}];
			return e = e.concat(Items.getItemDrops()), e = e.concat(Items.getItemDrops(this.drops))
		}, e
	}(),
	House = function () {
		function e() {
			this.data = {
				bg: {
					active: 1,
					own: [1]
				},
				items: {}
			}
		}
		return e.prototype = Object.create(e.prototype), e.prototype.getDataAndClear = function () {
			return this.updated = !1, this.data
		}, e.prototype.setItems = function (e) {
			Util.isDefined(e) && (this.data = e)
		}, e.prototype.getItems = function () {
			return this.data.items
		}, e.prototype.getSortedActive = function () {
			var e = [];
			for (var t in this.data.items)
				for (var i = this.data.items[t].A, a = 0; a < i.length; a++) {
					var s = i[a];
					s.ID = t, e.push(s)
				}
			return e.sort(function (e, t) {
				return e.z - t.z
			}), e
		}, e.prototype.setAllInactive = function () {
			for (var e in this.data.items) this.data.items[e].A = [];
			this.updated = !0
		}, e.prototype.add = function (e) {
			var t = this.data.items[e];
			Util.isDefined(t) || (t = this.data.items[e] = {
				N: 0,
				A: []
			}), t.N < 9 && t.N++, this.updated = !0
		}, e.prototype.setActive = function (e, t, i, a, s) {
			var r = this.data.items[e];
			if (Util.isDefined(r) && r.N > r.A.length) {
				var o = {
					x: t,
					y: i,
					z: a,
					a: s
				};
				return r.A.push(o), this.updated = !0, o
			}
			return null
		}, e.prototype.setInactive = function (e, t) {
			Util.removeFromArray(t, this.data.items[e].A), this.updated = !0
		}, e.prototype.getBackground = function () {
			return Util.isDefined(this.data.bg.active) ? this.data.bg.active : 1
		}, e.prototype.addBackground = function (e) {
			this.hasBackground(e) || this.data.bg.own.push(e), this.updated = !0
		}, e.prototype.setBackground = function (e) {
			this.data.bg.active = e, this.setAllInactive()
		}, e.prototype.hasBackground = function (e) {
			return Util.inArray(this.data.bg.own, e)
		}, e.prototype.getData = function (e) {
			return this.data.items[e]
		}, e.prototype.getOwned = function (e) {
			var t = this.getData(e);
			return Util.isDefined(t) && Util.isDefined(t.N) ? t.N : 0
		}, e.prototype.hasMax = function (e) {
			return this.getOwned(e) >= 9
		}, e.prototype.getActive = function (e) {
			var t = this.getData(e);
			return Util.isDefined(t) && Util.isDefined(t.A) ? t.A.length : 0
		}, e
	}(),
	Player = function () {
		function e() {
			Creature.call(this), this.init(null), this.saveEnabled = !1
		}
		return e.prototype = Object.create(Creature.prototype), e.prototype.createRandom = function () {
			this.equipment.data.hat = Items.getRandomItem("hat"), this.equipment.data.weapon = Items.getRandomItem("weapon"), this.equipment.data.outfit = Items.getRandomItem("outfit")
		}, e.prototype.getUpdatedData = function (e) {
			var t = {};
			(this.equipment.updated || e) && (t.equipment = this.equipment.getDataAndClear()), (this.tutorial.updated || e) && (t.tutorial = this.tutorial.getDataAndClear()), (this.appearance.updated || e) && (t.appearance = this.appearance.getDataAndClear()), (this.kennel.updated || e) && (t.pets = this.kennel.getDataAndClear()), (this.quests.updated || e) && (t.quests = this.quests.getDataAndClear()), (this.house.updated || e) && (t.house = this.house.getDataAndClear()), (this.updated || e) && (t.data = this.getDataAndClear()), (this.backpack.updated || e) && (t.inventory = this.backpack.getDataAndClear()), (this.state.updated || e) && (t.state = this.state.getDataAndClear());
			for (var i in t) t[i] = JSON.stringify(t[i]);
			return t
		}, e.prototype.init = function (e) {
			if (this.isMember = !1, this.backpack = new Backpack, this.equipment = new Equipment, this.appearance = new Appearance, this.kennel = new Kennel(this), this.quests = new Quests, this.state = new State, this.house = new House, this.tutorial = new Tutorial, !Util.isDefined(e)) return !1;
			if (console.log(JSON.stringify(e)), Util.isDefined(e.userID) && (this.userID = parseInt(e.userID)), Util.isDefined(e.data) && (this.data = Util.getObject(e.data)), Util.isDefined(e.pets) && this.kennel.setPets(Util.getObject(e.pets)), Util.isDefined(e.tutorial) && this.tutorial.setData(Util.getObject(e.tutorial)), Util.isDefined(e.state) && this.state.setData(Util.getObject(e.state)), Util.isDefined(e.house) && this.house.setItems(Util.getObject(e.house)), Util.isDefined(e.inventory) && this.backpack.setItems(Util.getObject(e.inventory)), Util.isDefined(e.equipment) && this.equipment.setEquipment(Util.getObject(e.equipment)), Util.isDefined(e.quests) && this.quests.setQuests(Util.getObject(e.quests)), Util.isDefined(e.appearance) && this.appearance.setAppearance(Util.getObject(e.appearance)), Util.isDefined(e.isMember) && 1 == e.isMember && this.setMembership(), Util.isDefined(e.classIDs)) {
				this.owners = e.classIDs, this.classIDs = [];
				for (var t = 0; t < e.classIDs.length; t++) this.classIDs.push(e.classIDs[t].ownerID)
			}
			Util.isDefined(e.dataloss) && (this.dataloss = e.dataloss)
		}, e.prototype.getBountyScore = function () {
			return this.data.bountyScore || 0
		}, e.prototype.addBountyScore = function (e) {
			this.data.bountyScore = this.getBountyScore() + e, this.updated = !0
		}, e.prototype.getMods = function () {
			var e = this.data.mods || {};
			return e
		}, e.prototype.getAffixes = function () {
			var e = [];
			for (var t in this.equipment.data)
				if (Util.isDefined(Items.getItemData(t, this.equipment.data[t])))
					for (var i = Items.getItemData(t, this.equipment.data[t]).effects, a = 0; a < i.length; a++) e.push(i[a]);
			return e
		}, e.prototype.setMod = function (e, t) {
			Util.isDefined(this.data.mods[e]) ? this.data.mods[e] += t : (this.data.mods[e] = t, this.updated = !0)
		}, e.prototype.hasMod = function (e) {
			return !Util.isDefined(this.data.mods[e])
		}, e.prototype.setMembership = function () {
			Util.isDefined(this.data.nm) ? this.data.nm = 2 : (this.data.nm = 1, this.updated = !0), this.isMember = !0, this.backpack.unlockAllItems()
		}, e.prototype.isUnranked = function () {
			return !Util.isDefined(this.data.arenaRank)
		}, e.prototype.getArenaRank = function () {
			return Util.isDefined(this.data.arenaRank) ? this.data.arenaRank : 0
		}, e.prototype.getArenaScore = function () {
			return Util.isDefined(this.data.arenaScore) ? this.data.arenaScore : 0
		}, e.prototype.fx = function (e, t) {
			this[e] = !0;
			var i = {
				action: "emit",
				data: {
					userID: this.userID,
					type: e
				}
			};
			t && (this[e] = i)
		}, e.prototype.heal = function () {
			this.changeCurrentHearts(200);
			for (var e = this.kennel.getPets(), t = 0; t < e.length; t++) delete e[t].hp;
			this.kennel.updated = !0
		}, e.prototype.healTeam = function (e) {
			this.changeCurrentHearts(e);
			for (var t = this.kennel.getPets(), i = 0; i < t.length; i++) {
				var a = new Monster(t[i]);
				Util.isDefined(t[i].hp) && (t[i].hp + e > a.getMaxHearts() ? delete t[i].hp : t[i].hp = t[i].hp + e)
			}
			this.kennel.updated = !0
		}, e.prototype.setZone = function (e) {
			this.data.zone = e, this.updated = !0
		}, e.prototype.transform = function (e, t) {
			this.transformID = e, Util.isDefined(this.timer) && window.clearInterval(this.timer), this.timer = setInterval(this.transform.bind(this), t)
		}, e.prototype.getAttacks = function (e) {
			var t = this.data.spellbook || this.getAllAttacks();
			return t.length > 6 && (t = t.splice(0, 6)), Util.isDefined(e) ? Creature.getAttacksOfType(t, e) : t
		}, e.prototype.getAllAttacks = function () {
			var t = Creature.getAttacksFromCurve(e.LEVEL_CURVE, 1, this.getLevel());
			if (Util.isDefined(this.data.spells))
				for (var i = 0; i < this.data.spells.length; i++) Util.inArray(t, this.data.spells[i]) || t.push(this.data.spells[i]);
			return t
		}, e.prototype.getName = function () {
			return this.appearance.getName()
		}, e.prototype.getMaxHearts = function (e) {
			return Math.min(Math.floor(20 + Creature.prototype.getMaxHearts.call(this, e) + this.getHeartBonus()), Creature.MAX_HEARTS)
		}, e.prototype.getHeartBonus = function () {
			return this.equipment.getHeartBonuses()
		}, e.prototype.getGold = function (e) {
			var t = 0;
			return Util.isDefined(this.data.gold) && (t = this.data.gold), e && (t = Util.numberToString(t)), t
		}, e.prototype.changeGold = function (e) {
			this.data.gold = this.getGold() + e, this.data.gold < 0 && delete this.data.gold, this.updated = !0
		}, e.prototype.equip = function (e, t) {
			if ("pet" === t) {
				this.kennel.remove(e)
			}
			return this.equipment.equip(e, t)
		}, e.prototype.unEquip = function (e) {
			var t = this.equipment.unEquip(e);
			return "pet" === e && this.kennel.add(t), t
		}, e.prototype.setDefault = function (e) {
			"male" === e ? this.appearance.setHairStyle(4) : this.appearance.setHairStyle(5), this.appearance.setGender(e), this.appearance.setHairColor(Math.floor(5 * Math.random() + 1)), this.appearance.setEyeColor(Math.floor(5 * Math.random() + 1)), this.appearance.setSkinColor(Math.floor(5 * Math.random() + 1)), this.equipment.unEquip("hat")
		}, e.prototype.getLevelingCurve = function (t) {
			Creature.prototype.getLevelingCurve.call(this, t);
			for (var i = [], a = 0; a < e.LEVEL_CURVE.length; a++) {
				var s = e.LEVEL_CURVE[a];
				s.lvl === t && i.push(s)
			}
			return i
		}, e.prototype.setSpinDate = function () {
			var e = new Date;
			this.data.spinDate = {
				d: e.getUTCDate(),
				m: e.getUTCMonth(),
				y: e.getUTCFullYear()
			}, this.updated = !0
		}, e.prototype.canSpin = function () {
			if (Util.isDefined(this.data.numSpins) && Util.isDefined(this.data.spinDate.d) && Util.isDefined(this.data.spinDate.m) && Util.isDefined(this.data.spinDate.y)) {
				var e = new Date;
				return (this.data.spinDate.d !== e.getUTCDate() || this.data.spinDate.m !== e.getUTCMonth() || this.data.spinDate.y !== e.getUTCFullYear()) && (this.setSpinDate(), this.data.numSpins = 0), 0 === this.data.numSpins || 1 === this.data.numSpins && this.isMember
			}
			return this.setSpinDate(), this.data.numSpins = 0, !0
		}, e.prototype.spinWheel = function () {
			this.data.numSpins++, this.updated = !0
		}, e.prototype.setSchool = function (e) {
			this.data.school = e, this.updated = !0
		}, e.prototype.getSchool = function () {
			return this.data.school
		}, e.prototype.setColiseum = function (e) {
			this.data.arena = e
		}, e.prototype.getColiseum = function () {
			return Util.isDefined(this.data.arena) ? this.data.arena : 0
		}, e.prototype.getTeamScore = function () {
			return this.kennel.getTeamScore()
		}, e.prototype.getWins = function () {
			return this.data.win || 0
		}, e.prototype.getLosses = function () {
			return this.data.loss || 0
		}, e.prototype.addArenaScore = function (e, t) {
			var i = this.getArenaScore();
			this.data.arenaScore = this.getArenaScore() + e, this.data.arenaScore < 0 && (this.data.arenaScore = 0), this.data.arenaScore > 5e3 && (this.data.arenaScore = 5e3), t ? this.data.win = (this.data.win || 0) + 1 : this.data.loss = (this.data.loss || 0) + 1;
			var a = 500 + Math.max(0, 1e3 * this.getArenaRank()),
				s = a - 1e3 - 200;
			t && a > i && this.getArenaScore() >= a && this.getArenaRank() < 4 ? this.data.arenaRank = this.getArenaRank() + 1 : !t && i >= s && this.getArenaScore() < s && this.getArenaRank() > 0 && (this.data.arenaRank = this.getArenaRank() - 1), this.getArenaScore() >= 100 && this.isUnranked() && (this.data.arenaRank = 0), this.updated = !0
		}, e.prototype.processDeserter = function () {
			return Util.isDefined(this.data.deserter) ? (delete this.data.deserter, this.addArenaScore(-50, !1), this.updated = !0, !0) : !1
		}, e.prototype.getTowerProgress = function () {
			return Util.isDefined(this.data.tower) ? this.data.tower : 0
		}, e.prototype.completeTower = function (e) {
			var t = this.getTowerProgress();
			e > t && (this.data.tower = e), this.updated = !0
		}, e.prototype.getLeaderboard = function () {
			return Util.isDefined(this.data.lb) ? this.data.lb : 31
		}, e.prototype.setLeaderboard = function (e) {
			this.data.lb = e, this.updated = !0
		}, e.prototype.addSpell = function (e) {
			Util.isDefined(this.data.spells) || (this.data.spells = []), Util.inArray(this.data.spells, e) || (this.data.spells.push(e), Util.isDefined(this.data.spellbook) && !Util.inArray(this.data.spellbook) && this.data.spellbook.length < 6 && this.data.spellbook.push(e)), this.updated = !0
		}, e.prototype.swapSpells = function (e, t) {
			if (Util.isDefined(e) && Util.isDefined(t)) {
				if (!Util.isDefined(this.data.spellbook)) {
					this.data.spellbook = [];
					for (var i = this.getAllAttacks(), a = 0; 6 > a && a < i.length; a++) this.data.spellbook[a] = i[a]
				}
				console.log(this.data.spellbook);
				for (var a = 0; a < this.data.spellbook.length; a++) this.data.spellbook[a] !== e ? this.data.spellbook[a] !== t || (this.data.spellbook[a] = e) : this.data.spellbook[a] = t;
				this.updated = !0
			}
		}, e
	}();
Player.LEVEL_CURVE = [{
	lvl: 1,
	a: 31
	}, {
	lvl: 5,
	a: 32
	}, {
	lvl: 12,
	a: 33
	}, {
	lvl: 22,
	a: 34
	}, {
	lvl: 38,
	a: 35
	}, {
	lvl: 52,
	a: 36
	}];
var Tutorial = function () {
	function e() {
		this.setData({
			zones: {},
			menus: {}
		})
	}
	return e.prototype.getDataAndClear = function () {
		return this.updated = !1, this.data
	}, e.prototype.setData = function (e) {
		this.data = e
	}, e.prototype.getMenuValue = function (e, t) {
		return this.getValue("menus", e, t)
	}, e.prototype.getZoneValue = function (e, t) {
		return this.getValue("zones", e, t)
	}, e.prototype.getValue = function (e, t, i) {
		if (!Util.isDefined(this.data[e][t])) return 0;
		var a = this.data[e][t];
		return i = i || 0, Util.isDefined(a[i]) ? a[i] : 0
	}, e.prototype.setMenuValue = function (e, t, i) {
		return this.setValue("menus", e, t, i)
	}, e.prototype.setZoneValue = function (e, t, i) {
		return this.setValue("zones", e, t, i)
	}, e.prototype.setValue = function (e, t, i, a) {
	}, e
}();
Prodigy.Menu.Backpack = function (e, t, i) {
	constructor: Prodigy.Menu.Backpack,
			bot: "Hats"

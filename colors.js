/*
	lets you modify the colors and use / add your own presets on Google's Minesweeper game.
	author: wuilly
*/

(() => {
	window.minesweeper = {}

	window.minesweeper.colors = {
		GRASS_DARK: "#AAD751",
		GRASS_LIGHT: "#A2D149",
		DUG_DARK: "#D7B899",
		DUG_LIGHT: "#E5C29F",
		WATER_DARK: "#83C4F7",
		WATER_LIGHT: "#90CAF9",
		NAVBAR_BG_COLOR: "#4A752C",
		TRY_AGAIN_BG_COLOR: "#4A752C"
	}

	window.minesweeper.presets = {}
	window.minesweeper.presets.presets = {}

	window.minesweeper.presets.vaildPreset = (json) => {
		if (typeof json === "undefined" || !json || json.length < 1) throw new Error("No preset JSON found.")

	    try {
	        let preset = JSON.parse(json)
	        if (typeof preset === "object" && !Array.isArray(preset)) return true
	    } catch(err) {
	        if (err) throw new Error("Not a vaild preset.")
	    }
	}
	window.minesweeper.presets.addPreset = (name, json) => {
		if (typeof name === "undefined" || !name || name.length < 1) throw new Error("No name found.")
		if (typeof json === "undefined" || !json || json.length < 1) throw new Error("No preset JSON found.")
		if (typeof name !== "string") throw new Error("Name isn't a string.")

		if (window.minesweeper.presets.presets.hasOwnProperty(name)) throw new Error("You already added this preset.")

	    if (typeof json === "object" && !Array.isArray(json)) {
	        Object.defineProperty(window.minesweeper.presets.presets, name, {value: json})
	    } else if (typeof json === "string") {
	        if (window.minesweeper.presets.vaildPreset(json)) {
	            Object.defineProperty(window.minesweeper.presets.presets, name, {value: JSON.parse(json)})
	        } else {
	            throw new Error("Not a vaild preset.")
	        }
	    } else {
	        throw new Error("Not a vaild preset.")
	    }
	}
	window.minesweeper.presets.applyPreset = (name) => {
		if (typeof name === "undefined" || !name || name.length < 1) throw new Error("No name found.")

	    if (window.minesweeper.presets.presets.hasOwnProperty(name)) {
	        window.minesweeper.colors = window.minesweeper.presets.presets[name]
	        window.minesweeper.setColors()
	    } else {
	        throw new Error("That preset doesn't exist. Maybe try adding it first?")
	    }
	}

	// an alias for using / applying presets
	window.minesweeper.presets.usePreset = window.minesweeper.presets.applyPreset

	window.minesweeper.restore = () => {
		window.minesweeper.colors = {
			GRASS_DARK: "#AAD751",
			GRASS_LIGHT: "#A2D149",
			DUG_DARK: "#D7B899",
			DUG_LIGHT: "#E5C29F",
			WATER_DARK: "#83C4F7",
			WATER_LIGHT: "#90CAF9",
			NAVBAR_BG_COLOR: "#4A752C",
			TRY_AGAIN_BG_COLOR: "#4A752C"
		}

		window.minesweeper.setColors()
	}

	window.minesweeper.setColors = () => {
		s_7pd = function(a, b, c) {
			document.getElementById("NWJp1d").style.backgroundColor = window.minesweeper.colors.NAVBAR_BG_COLOR
			document.getElementsByClassName("HhuoRb")[0].style.backgroundColor = window.minesweeper.colors.TRY_AGAIN_BG_COLOR

	        switch (c) {
	        case "GRASS":
	            a.context.fillStyle = 0 === (b.x + b.y) % 2 ? window.minesweeper.colors.GRASS_DARK : window.minesweeper.colors.GRASS_LIGHT;
	            s_9pd(a, b);
	            break;
	        case "DUG":
	            a.context.fillStyle = 0 === (b.x + b.y) % 2 ? s_$pd(a, window.minesweeper.colors.DUG_LIGHT, window.minesweeper.colors.WATER_LIGHT, b) : s_$pd(a, window.minesweeper.colors.DUG_DARK, window.minesweeper.colors.WATER_DARK, b);
	            s_9pd(a, b);
	            break;
	        case "ADJACENT":
	            s_7pd(a, b, "DUG");
	            c = .62 * a.cellSize;
	            a.context.font = "bold " + c + "pt Roboto";
	            a.context.textAlign = "center";
	            var d = a.oa[b.x][b.y].DI;
	            a.context.fillStyle = s_$pd(a, s_aqd[d - 1], 0 === (b.x + b.y) % 2 ? "#90CAF9" : "#83C4F7", b);
	            a.context.fillText(d.toString(), b.x * a.cellSize + a.cellSize / 2, b.y * a.cellSize + c + (a.cellSize - c) / 2.1);
	            break;
	        case "FLAG":
	            s_7pd(a, b, "GRASS");
	            a.Ps.render(Math.min(Math.floor(a.oa[b.x][b.y].JGa), 9), new s_hg(b.x * a.cellSize,b.y * a.cellSize), new s_hg(0,0), 0, a.cellSize / a.Us.Qd());
	            break;
	        case "BAD_FLAG":
	            s_7pd(a, b, "GRASS");
	            a.context.drawImage(a.Ht, b.x * a.cellSize, b.y * a.cellSize, a.cellSize, a.cellSize);
	            break;
	        case "DETONATED_MINE":
	            a.context.fillStyle = a.oa[b.x][b.y].color;
	            s_9pd(a, b);
	            s_7pd(a, b, "MINE");
	            break;
	        case "MINE":
	            a.context.fillStyle = s_IC(a.oa[b.x][b.y].color, .35),
	            a.context.beginPath(),
	            a.context.arc(b.x * a.cellSize + a.cellSize / 2, b.y * a.cellSize + a.cellSize / 2, a.cellSize / 4, 0, 2 * Math.PI, !1),
	            a.context.fill()
	        }
	        a.Aa && a.Aa.equals(b) && (a.context.strokeStyle = "#578A34",
	        a.context.lineWidth = a.cellSize / 10,
	        a.context.beginPath(),
	        a.context.rect(b.x * a.cellSize, b.y * a.cellSize, a.cellSize, a.cellSize),
	        a.context.stroke(),
	        a.context.setTransform(1, 0, 0, 1, 0, 0),
	        null !== a.Ha && (a.context.fillStyle = "#578A34",
	        a.context.beginPath(),
	        a.context.arc(a.Ha.x, a.Ha.y, a.wb, 0, 2 * Math.PI, !1),
	        a.context.fill(),
	        b = 2.4 * a.wb,
	        a.context.drawImage(a.Hw, a.Ha.x - b / 2, a.Ha.y - b / 2, b, b)),
	        null !== a.Ma && (a.context.fillStyle = "#578A34",
	        a.context.beginPath(),
	        a.context.arc(a.Ma.x, a.Ma.y, a.wb, 0, 2 * Math.PI, !1),
	        a.context.fill(),
	        b = 2.25 * a.wb,
	        a.context.drawImage(a.ul, a.Ma.x - b / 2.25, a.Ma.y - b / 2, b, b)),
	        null !== a.Ga && (b = .75 * a.wb,
	        a.context.fillStyle = "#578A34",
	        a.context.beginPath(),
	        a.context.arc(a.Ga.x, a.Ga.y, b, 0, 2 * Math.PI, !1),
	        a.context.fill(),
	        b *= 1.5,
	        a.context.drawImage(a.Tr, a.Ga.x - b / 2, a.Ga.y - b / 2, b, b)),
	        a.context.setTransform(1, 0, 0, 1, a.Ba.width, a.Ba.height))
	    }

	    if (!Object.keys(Array.prototype).includes("_push")) {
	    	Array.prototype._push = Array.prototype.push
		}

		Array.prototype.push = function() {
			if (typeof arguments[0] === "object" && !arguments[0]["tagName"]) {
				if (arguments[0]["color"]) {
					if (arguments[0]["color"] === "#AAD751" || arguments[0]["color"] === "#A2D149") {
						if (Math.random() > .25) {
							arguments[0]["color"] = minesweeper.colors.GRASS_LIGHT
						} else {
							arguments[0]["color"] = minesweeper.colors.GRASS_DARK
						}
					}
				}
			}
			Array.prototype._push.apply(this, arguments)
		}
	}

	// default presets

	window.minesweeper.presets.addPreset("dark", {
		GRASS_DARK: "#242730",
		GRASS_LIGHT: "#313742",
		DUG_DARK: "#D7B899",
		DUG_LIGHT: "#E5C29F",
		WATER_DARK: "#83C4F7",
		WATER_LIGHT: "#90CAF9",
		NAVBAR_BG_COLOR: "#343843",
		TRY_AGAIN_BG_COLOR: "#343843"
	})

	window.minesweeper.presets.addPreset("dark2", {
	    GRASS_DARK: "#555555",
	    GRASS_LIGHT: "#333333",
	    DUG_DARK: "#D7B899",
		DUG_LIGHT: "#E5C29F",
		WATER_DARK: "#83C4F7",
		WATER_LIGHT: "#90CAF9",
	    NAVBAR_BG_COLOR: "#333333",
	    TRY_AGAIN_BG_COLOR: "#333333"
	})

	window.minesweeper.presets.addPreset("desert", {
		GRASS_DARK: "#D7BF51",
		GRASS_LIGHT: "#D1B849",
		DUG_DARK: "#D7B899",
		DUG_LIGHT: "#E5C29F",
		WATER_DARK: "#83C4F7",
		WATER_LIGHT: "#90CAF9",
		NAVBAR_BG_COLOR: "#D1B849",
		TRY_AGAIN_BG_COLOR: "#D1B849"
	})
})()
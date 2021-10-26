const Emojis = {
	custom: {
		":O": "open_mouth",
		":D": "grinning",
		"&lt;3": "heart",
		":)": "smile",
		":/": "confused",
		";)": "wink",
		":(": "frowning",
		":P": "stuck_out_tongue",
		"(lama)": "lama",
		":B": "grimacing",
		"(lucky)": "clover"
	} as { [key: string]: string },
	categories: [
		{ icon: "😃", emojis: [":O", ":D", "&lt;3", ":)",":/", ";)",":(", ":P","(lama)",":B","(lucky)","😀", "😬", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😉", "😊", "🙂", "😋", "😌", "😍", "😘", "😗", "😙", "😚", "😜", "😝", "😛", "😎", "😏", "😶", "😐", "😑", "😒", "😳", "😞", "😟", "😠", "😡", "😔", "😕", "😣", "😖", "😫", "😩", "😤", "😮", "😱", "😨", "😰", "😯", "😦", "😧", "😢", "😥", "😪", "😓", "😭", "😵", "😲", "😷", "🤔", "😴", "💤", "💩", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "✌", "👌", "✋", "👐", "💪", "🙏", "☝", "👆", "👇", "👈", "👉", "💅", "👄", "👅", "👂", "👃", "👀", "👤", "👥", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👲", "👳", "👮", "👷", "💂", "🎅", "👼", "👸", "👰", "🚶", "🏃", "💃", "👯", "👫", "👬", "👭", "🙇", "💁", "🙅", "🙆", "🙋", "🙎", "🙍", "💇", "💆", "💑", "👩‍❤️‍👩", "👨‍❤️‍👨", "💏", "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "👪", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👚", "👕", "👖", "👔", "👗", "👙", "👘", "💄", "💋", "👣", "👠", "👡", "👢", "👞", "👟", "👒", "🎩", "🎓", "👑", "🎒", "👝", "👛", "👜", "💼", "👓", "💍", "🌂"] },
		{ icon: "🐳", emojis: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨", "🐯", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🐺", "🐗", "🐴", "🐝", "🐛", "🐌", "🐞", "🐜", "🐍", "🐢", "🐠", "🐟", "🐡", "🐬", "🐳", "🐋", "🐊", "🐆", "🐅", "🐃", "🐂", "🐄", "🐪", "🐫", "🐘", "🐐", "🐏", "🐑", "🐎", "🐖", "🐀", "🐁", "🐓", "🐕", "🐩", "🐈", "🐇", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🌾", "🌺", "🌻", "🌹", "🌷", "🌼", "🌸", "💐", "🍄", "🌰", "🎃", "🐚", "🌎", "🌍", "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌚", "🌝", "🌛", "🌜", "🌞", "🌙", "⭐", "🌟", "💫", "✨", "☀", "⛅", "☁", "⚡", "💥", "❄", "⛄", "💨", "☔", "💧", "💦", "🌊"] },
		{ icon: "🍎", emojis: ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍅", "🍆", "🌽", "🍠", "🍯", "🍞", "🍗", "🍖", "🍤", "🍳", "🍔", "🍟", "🍕", "🍝", "🍜", "🍲", "🍥", "🍣", "🍱", "🍛", "🍙", "🍚", "🍘", "🍢", "🍡", "🍧", "🍨", "🍦", "🍰", "🎂", "🍮", "🍬", "🍭", "🍫", "🍩", "🍪", "🍺", "🍻", "🍷", "🍸", "🍹", "🍶", "🍵", "☕", "🍼", "🍴"] },
		{ icon: "⚽", emojis: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏉", "🎱", "⛳", "🎿", "🏂", "🎣", "🚣", "🏊", "🏄", "🛀", "🚴", "🚵", "🏇", "🏆", "🎽", "🎫", "🎭", "🎨", "🎪", "🎤", "🎧", "🎼", "🎹", "🎷", "🎺", "🎸", "🎻", "🎬", "🎮", "👾", "🎯", "🎲", "🎰", "🎳"] },
		{ icon: "🚗", "emojis": ["🚗", "🚕", "🚙", "🚌", "🚎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🚲", "🚨", "🚔", "🚍", "🚘", "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚝", "🚄", "🚅", "🚈", "🚞", "🚂", "🚆", "🚇", "🚊", "🚉", "🚁", "✈", "⛵", "🚤", "🚀", "💺", "⚓", "🚧", "⛽", "🚏", "🚦", "🚥", "🏁", "🚢", "🎡", "🎢", "🎠", "🌁", "🗼", "🏭", "⛲", "🎑", "🗻", "🌋", "🗾", "⛺", "🌅", "🌄", "🌠", "🌆", "🌃", "🌉", "🌌", "🌠", "🎇", "🎆", "🌈", "🏰", "🏯", "🗽", "🏠", "🏡", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "⛪"] },
		{ icon: "📱", emojis: ["⌚", "📱", "📲", "💻", "💽", "💾", "💿", "📀", "📼", "📷", "📹", "🎥", "📞", "☎", "📟", "📠", "📺", "📻", "⏰", "⏳", "⌛", "📡", "🔋", "🔌", "💡", "🔦", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "🔧", "🔨", "🔩", "🔫", "💣", "🔪", "🚬", "🔮", "💈", "🔭", "🔬", "💊", "💉", "🔖", "🚽", "🚿", "🛁", "🔑", "🚪", "🗿", "🎈", "🎏", "🎀", "🎁", "🎊", "🎉", "🎎", "🎐", "🎌", "🏮", "✉", "📩", "📨", "📧", "💌", "📮", "📪", "📫", "📬", "📭", "📦", "📯", "📥", "📤", "📜", "📃", "📑", "📊", "📈", "📉", "📄", "📅", "📆", "📇", "📋", "📁", "📂", "📰", "📓", "📕", "📗", "📘", "📙", "📔", "📒", "📚", "📖", "🔗", "📎", "✂", "📐", "📏", "📌", "📍", "🚩", "🔐", "🔒", "🔓", "🔏", "✒", "📝", "✏", "🔍", "🔎"] },
		{ icon: "🔢", emojis: ["💯", "🔢", "❤", "💛", "💚", "💙", "💜", "💔", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "🔯", "⛎", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "🆔", "🈳", "🈹", "📴", "📳", "🈶", "🈚", "🈸", "🈺", "🈷", "✴", "🆚", "🉑", "💮", "🉐", "㊙", "㊗", "🈴", "🈵", "🈲", "🅰", "🅱", "🆎", "🆑", "🅾", "🆘", "⛔", "📛", "🚫", "❌", "⭕", "💢", "♨", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "❗", "❕", "❓", "❔", "‼", "⁉", "🔅", "🔆", "🔱", "〽", "⚠", "🚸", "🔰", "♻", "🈯", "💹", "❇", "✳", "❎", "✅", "💠", "🌀", "➿", "🌐", "Ⓜ", "🏧", "🈂", "🛂", "🛃", "🛄", "🛅", "♿", "🚭", "🚾", "🅿", "🚰", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "🔟", "▶", "⏩", "⏪", "🔀", "🔁", "🔂", "◀", "🔼", "🔽", "⏫", "⏬", "➡", "⬅", "⬆", "⬇", "↗", "↘", "↙", "↖", "↕", "↔", "🔄", "↪", "↩", "⤴", "⤵", "#⃣", "ℹ", "🔤", "🔡", "🔠", "🔣", "🎵", "🎶", "〰", "➰", "✔", "🔃", "➕", "➖", "➗", "✖", "💲", "💱", "©", "®", "™", "🔚", "🔙", "🔛", "🔝", "🔜", "☑", "🔘", "⚪", "⚫", "🔴", "🔵", "🔸", "🔹", "🔶", "🔷", "🔺", "▪", "▫", "⬛", "⬜", "🔻", "◼", "◻", "◾", "◽", "🔲", "🔳", "🔈", "🔉", "🔊", "🔇", "📣", "📢", "🔔", "🔕", "🃏", "🀄", "♠", "♣", "♥", "♦", "🎴", "💭", "💬", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🇿", "🇾", "🇽", "🇼", "🇻", "🇺", "🇹", "🇸", "🇷", "🇶", "🇵", "🇴", "🇳", "🇲", "🇱", "🇰", "🇯", "🇮", "🇭", "🇬", "🇫", "🇪", "🇩", "🇨", "🇧", "🇦"] },
		{ icon: "🇫🇷", "emojis": ["🇦🇨", "🇦🇫", "🇦🇱", "🇩🇿", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇨🇻", "🇰🇭", "🇨🇲", "🇨🇦", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇷", "🇭🇷", "🇨🇺", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇵🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇺", "🇬🇹", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇱", "🇮🇹", "🇨🇮", "🇯🇲", "🇯🇵", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇷", "🇲🇺", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇰🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇴", "🇷🇺", "🇷🇼", "🇸🇭", "🇰🇳", "🇱🇨", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇰🇷", "🇪🇸", "🇱🇰", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇻", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇻🇮", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼", "🇷🇪", "🇦🇽", "🇹🇦", "🇮🇴", "🇧🇶", "🇨🇽", "🇨🇨", "🇬🇬", "🇮🇲", "🇾🇹", "🇳🇫", "🇵🇳", "🇧🇱", "🇵🇲", "🇬🇸", "🇹🇰", "🇧🇻", "🇭🇲", "🇸🇯", "🇺🇲", "🇮🇨", "🇪🇦", "🇨🇵", "🇩🇬", "🇦🇸", "🇦🇶", "🇻🇬", "🇨🇰", "🇨🇼", "🇪🇺", "🇬🇫", "🇹🇫", "🇬🇵", "🇲🇶", "🇲🇵", "🇸🇽", "🇸🇸", "🇹🇨", "🇲🇫", "🏳️‍🌈"] }
	]
}

export { Emojis }
export const oneColumnIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20"
		width="20"
		viewBox="0 0 110 110"
	>
		{[...Array(6).keys()].map((a) => (
			<rect width="110" height="10" x="0" y={a * 20} />
		))}
	</svg>
);

export const twoColumnsIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20"
		width="20"
		viewBox="0 0 110 110"
	>
		{[...Array(6).keys()].map((a) => (
			<>
				<rect width="50" height="10" x="0" y={a * 20} />
				<rect width="50" height="10" x="60" y={a * 20} />
			</>
		))}
	</svg>
);

export const threeColumnsIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20"
		width="20"
		viewBox="0 0 110 110"
	>
		{[...Array(6).keys()].map((a) => (
			<>
				<rect width="30" height="10" x="0" y={a * 20} />
				<rect width="30" height="10" x="40" y={a * 20} />
				<rect width="30" height="10" x="80" y={a * 20} />
			</>
		))}
	</svg>
);

export const error = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="20px"
		height="20px"
	>
		<path
			d="M256,0C114.508,0,0,114.497,0,256c0,141.493,114.497,256,256,256c141.492,0,256-114.497,256-256	C512,114.507,397.503,0,256,0z M256,472c-119.384,0-216-96.607-216-216c0-119.385,96.607-216,216-216 c119.384,0,216,96.607,216,216C472,375.385,375.393,472,256,472z"
			fill="#D80027"
		/>
		<path
			d="M343.586,315.302L284.284,256l59.302-59.302c7.81-7.81,7.811-20.473,0.001-28.284c-7.812-7.811-20.475-7.81-28.284,0	L256,227.716l-59.303-59.302c-7.809-7.811-20.474-7.811-28.284,0c-7.81,7.811-7.81,20.474,0.001,28.284L227.716,256	l-59.302,59.302c-7.811,7.811-7.812,20.474-0.001,28.284c7.813,7.812,20.476,7.809,28.284,0L256,284.284l59.303,59.302 c7.808,7.81,20.473,7.811,28.284,0C351.398,335.775,351.397,323.112,343.586,315.302z"
			fill="#D80027"
		/>
	</svg>
);

export const warning = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="20px"
		height="20px"
	>
		<path
			d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256 C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216 c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"
			fill="#DCA100"
		/>
		<path
			d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877 C276,137.831,267.046,128.877,256,128.877z"
			fill="#DCA100"
		/>
		<circle cx="256" cy="349.16" r="27" fill="#DCA100" />
	</svg>
);

export const success = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 426.667 426.667"
		width="20px"
		height="20px"
	>
		<polygon
			points="293.333,135.04 190.08,240.213 137.173,187.093 108.8,215.467 192.213,298.667 326.187,168.747"
			fill="#4f8a10"
		/>
		<path
			d="M213.333,0C95.513,0,0,95.513,0,213.333s95.513,213.333,213.333,213.333s213.333-95.513,213.333-213.333 S331.154,0,213.333,0z M213.333,388.053c-96.495,0-174.72-78.225-174.72-174.72s78.225-174.72,174.72-174.72 c96.446,0.117,174.602,78.273,174.72,174.72C388.053,309.829,309.829,388.053,213.333,388.053z"
			fill="#4f8a10"
		/>
	</svg>
);

export const info = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 437.6 437.6"
		width="20px"
		height="20px"
	>
		<g fill="#00529b">
			<path d="M194,142.8c0.8,1.6,1.6,3.2,2.4,4.4c0.8,1.2,2,2.4,2.8,3.6c1.2,1.2,2.4,2.4,4,3.6c1.2,0.8,2.8,2,4.8,2.4 c1.6,0.8,3.2,1.2,5.2,1.6c2,0.4,3.6,0.4,5.2,0.4c1.6,0,3.6,0,5.2-0.4c1.6-0.4,3.2-0.8,4.4-1.6h0.4c1.6-0.8,3.2-1.6,4.8-2.8 c1.2-0.8,2.4-2,3.6-3.2l0.4-0.4c1.2-1.2,2-2.4,2.8-3.6s1.6-2.4,2-4c0-0.4,0-0.4,0.4-0.8c0.8-1.6,1.2-3.6,1.6-5.2 c0.4-1.6,0.4-3.6,0.4-5.2s0-3.6-0.4-5.2c-0.4-1.6-0.8-3.2-1.6-5.2c-1.2-2.8-2.8-5.2-4.8-7.2c-0.4-0.4-0.4-0.4-0.8-0.8 c-1.2-1.2-2.4-2-4-3.2c-1.6-0.8-2.8-1.6-4.4-2.4c-1.6-0.8-3.2-1.2-4.8-1.6c-2-0.4-3.6-0.4-5.2-0.4c-1.6,0-3.6,0-5.2,0.4 c-1.6,0.4-3.2,0.8-4.8,1.6H208c-1.6,0.8-3.2,1.6-4.4,2.4c-1.6,1.2-2.8,2-4,3.2c-1.2,1.2-2.4,2.4-3.2,3.6 c-0.8,1.2-1.6,2.8-2.4,4.4c-0.8,1.6-1.2,3.2-1.6,4.8c-0.4,2-0.4,3.6-0.4,5.2c0,1.6,0,3.6,0.4,5.2 C192.8,139.6,193.6,141.2,194,142.8z" />
			<path d="M249.6,289.2h-9.2v-98c0-5.6-4.4-10.4-10.4-10.4h-42c-5.6,0-10.4,4.4-10.4,10.4v21.6c0,5.6,4.4,10.4,10.4,10.4h8.4v66.4 H188c-5.6,0-10.4,4.4-10.4,10.4v21.6c0,5.6,4.4,10.4,10.4,10.4h61.6c5.6,0,10.4-4.4,10.4-10.4V300 C260,294,255.2,289.2,249.6,289.2z" />
			<path d="M218.8,0C98,0,0,98,0,218.8s98,218.8,218.8,218.8s218.8-98,218.8-218.8S339.6,0,218.8,0z M218.8,408.8 c-104.8,0-190-85.2-190-190s85.2-190,190-190s190,85.2,190,190S323.6,408.8,218.8,408.8z" />
		</g>
	</svg>
);

export const remove_icon = (
	<svg
		width="20px"
		height="20px"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="m50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z"
			fill="#B70000"
		/>
	</svg>
);

const icon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		width="20px"
		viewBox="0 0 444.816 444.816"
	>
		<path
			d="M162.871 374.489l-18.688-18.687 56.661-56.734-13.475-18.392-59.127 59.186-18.937-18.936h-.015l62.093-62.078-2.716-3.699c-9.352-.896-18.011-4.784-25.116-10.98l-68.168 68.155c-1.307 1.306-2.933 3.327-3.988 7.103-7.47 26.702-29.848 104.268-29.848 104.268a15.01 15.01 0 003.816 14.767 15.005 15.005 0 0010.627 4.404c1.38 0 2.775-.191 4.14-.588l104.853-30.063a15.025 15.025 0 006.487-3.816l63.18-63.178-17.967-24.528-53.812 53.796zm-60.405 24.381l-17.541-17.512 11.787-41.145 46.886 46.871-41.132 11.786zM254.673 169.011l3.788 2.775 35.728-35.715 18.804 18.805-32.794 32.837 18.409 13.476 30.325-30.371 18.819 18.818-27.45 27.45 24.528 17.967 58.526-57.395c26.76-26.759 26.774-70.151.015-96.925l-.03-.03a68.586 68.586 0 00-48.439-20.08 68.544 68.544 0 00-48.457 20.067l-62.679 63.281c6.299 7.249 10.07 15.969 10.907 25.04zM162.416 220.887a14.98 14.98 0 0010.627 4.404c3.112 0 6.092-1.219 8.72-3.142l21.416 29.225 47.78-47.809-29.21-21.403c4.3-5.871 4.051-14.033-1.263-19.347a14.982 14.982 0 00-10.628-4.403 14.982 14.982 0 00-10.628 4.403l-36.814 36.816c-5.872 5.873-5.872 15.385 0 21.256zM417.405 325.49L275.502 221.534l-54.356 54.385 103.943 141.888a66.088 66.088 0 0048.235 26.819c1.688.132 3.361.191 5.034.191a66.02 66.02 0 0046.708-19.347 66.042 66.042 0 0019.158-51.744 66.085 66.085 0 00-26.819-48.236zM117.19 187.919a30.58 30.58 0 0019.802-4.434 30.36 30.36 0 005.372-4.27s29.661-29.723 39.59-39.589c9.957-9.895 10.158-19.583 8.221-28.257-4.463-19.846-14.43-39.076-27.112-51.113-36.874-35.053-57.527-8.763-93.726-19.949C46.29 33.172 25.93 14.25 14.819 2.286 12.968.29 10.15-.471 7.553.29a7.136 7.136 0 00-5.006 5.637C-2.298 33.833-4.484 99.155 59.75 163.389c13.007 12.992 35.069 21.873 57.44 24.53z"
			fill="#34495E"
		/>
	</svg>
);

export const notificationBoxIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 23.625 23.625"
		width="100"
		height="100"
	>
		<path
			d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813 S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189 c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759 l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717 c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828 c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53 c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68 c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728 c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193 c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497 c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"
			fill="#34495E"
		/>
	</svg>
);

export const numberBoxIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 496.158 496.158"
		width="100"
		height="100"
	>
		<path
			d="M248.082,0.003C111.07,0.003,0,111.061,0,248.085c0,137,111.07,248.07,248.082,248.07	c137.006,0,248.076-111.07,248.076-248.07C496.158,111.061,385.088,0.003,248.082,0.003z"
			fill="#34495E"
		/>
		<path
			d="M278.767,145.419c-3.126-4.003-7.276-6.006-12.451-6.006c-4.591,0-7.716,0.879-9.375,2.637	c-1.662,1.758-5.226,6.445-10.693,14.063c-5.47,7.617-11.744,14.502-18.823,20.654c-7.082,6.152-16.53,12.012-28.345,17.578	c-7.91,3.712-13.429,6.738-16.553,9.082c-3.126,2.344-4.688,6.006-4.688,10.986c0,4.298,1.586,8.082,4.761,11.353	c3.172,3.273,6.812,4.907,10.913,4.907c8.592,0,25.292-9.521,50.098-28.564V335.41c0,7.814,1.806,13.722,5.42,17.725	c3.612,4.003,8.397,6.006,14.355,6.006c13.378,0,20.068-9.814,20.068-29.443V161.972	C283.455,154.941,281.892,149.425,278.767,145.419z"
			fill="#fff"
		/>
	</svg>
);

export const featureBoxIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="100"
		height="100"
	>
		<path
			d="M469.331,42.666H277.333V21.333C277.333,9.552,267.781,0,256,0s-21.333,9.552-21.333,21.333v21.333H42.669 c-11.782,0-21.333,9.552-21.333,21.333v341.328c0,11.78,9.551,21.333,21.333,21.333h93.482l-27.23,54.461 c-5.269,10.539-0.998,23.353,9.54,28.622c10.54,5.269,23.353,0.997,28.62-9.542l36.771-73.541h144.296l36.77,73.541 c3.738,7.477,11.271,11.799,19.097,11.799c3.206,0,6.461-0.727,9.523-2.257c10.539-5.269,14.809-18.083,9.54-28.622l-27.23-54.461 h93.482c11.782,0,21.333-9.553,21.333-21.333V63.999C490.664,52.218,481.112,42.666,469.331,42.666z M401.819,179.354 L301.253,279.919c-4.001,4.001-9.428,6.248-15.084,6.248c-5.659,0-11.085-2.249-15.085-6.251l-45.253-45.255l-85.48,85.48 c-4.166,4.167-9.625,6.251-15.084,6.251c-5.46,0-10.92-2.084-15.084-6.251c-8.334-8.33-8.334-21.837-0.001-30.168l100.566-100.566 c4.001-4.001,9.426-6.248,15.084-6.248s11.085,2.247,15.085,6.248l45.253,45.256l85.48-85.48c8.331-8.33,21.839-8.33,30.169,0 C410.15,157.515,410.15,171.022,401.819,179.354z"
			fill="#34495E"
		/>
	</svg>
);

export const borderedBoxIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100"
		height="100"
		x="0"
		y="0"
		enableBackground="new 0 0 107.597 107.597"
		version="1.1"
		viewBox="0 0 107.597 107.597"
		xmlSpace="preserve"
	>
		<path
			d="M106.983 39.152c0-2.949-1.896-5.434-4.524-6.368v-2.991c2.627-.931 4.524-3.414 4.524-6.363 0-2.949-1.896-5.434-4.524-6.364v-4.182c2.196-1.137 3.711-3.403 3.711-6.047A6.835 6.835 0 0099.334 0c-3.179 0-5.822 2.175-6.59 5.112h-1.56c-1.015-2.461-3.435-4.2-6.261-4.2a6.78 6.78 0 00-6.266 4.2h-2.834c-1.015-2.461-3.434-4.2-6.261-4.2a6.778 6.778 0 00-6.265 4.2H60.25c-1.015-2.461-3.43-4.2-6.261-4.2s-5.246 1.739-6.261 4.2h-2.774c-1.015-2.461-3.434-4.2-6.261-4.2a6.778 6.778 0 00-6.265 4.2h-3.197c-1.015-2.461-3.43-4.2-6.261-4.2s-5.246 1.739-6.261 4.2h-2.674C13.138 2.381 10.601.396 7.568.396A6.836 6.836 0 00.731 7.233c0 3.029 1.98 5.563 4.705 6.464v3.276c-2.781.844-4.823 3.396-4.823 6.456s2.042 5.612 4.823 6.455v2.808c-2.781.844-4.823 3.399-4.823 6.46 0 3.056 2.042 5.612 4.823 6.455v2.385c-2.781.843-4.823 3.396-4.823 6.456 0 3.059 2.042 5.612 4.823 6.455v2.66C2.655 64.405.613 66.96.613 70.022c0 3.057 2.042 5.611 4.823 6.454v2.445C2.655 79.765.613 82.32.613 85.38c0 3.058 2.042 5.612 4.823 6.457v2.485a6.83 6.83 0 00-4.292 6.338 6.836 6.836 0 006.837 6.837c3.27 0 5.994-2.298 6.669-5.363h1.087c.878 2.724 3.407 4.711 6.421 4.711 3.018 0 5.547-1.987 6.425-4.711h2.514c.877 2.724 3.407 4.711 6.421 4.711 3.018 0 5.547-1.987 6.425-4.711h2.728c.877 2.724 3.403 4.711 6.421 4.711s5.544-1.987 6.421-4.711h2.453c.877 2.724 3.406 4.711 6.42 4.711 3.019 0 5.548-1.987 6.426-4.711h2.877c.877 2.724 3.402 4.711 6.421 4.711s5.543-1.987 6.421-4.711h2.385a6.84 6.84 0 006.7 5.463 6.837 6.837 0 006.837-6.836c0-2.76-1.641-5.121-3.994-6.205v-2.811c2.627-.937 4.524-3.421 4.524-6.365 0-2.948-1.896-5.433-4.524-6.367v-2.629c2.627-.935 4.524-3.418 4.524-6.362 0-2.949-1.896-5.435-4.524-6.367v-2.844c2.627-.931 4.524-3.414 4.524-6.363s-1.896-5.434-4.524-6.363v-2.568c2.627-.937 4.524-3.42 4.524-6.365zM90.737 90.413H17.156V16.832h73.581v73.581z"
			fill="#34495E"
		/>
	</svg>
);

export default icon;

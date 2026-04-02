export default function Home() {

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-50 px-4">
			<div className="text-center space-y-6">
				<h1 className="text-5xl md:text-7xl font-bold tracking-tight">Eugenio Felix</h1>
				<p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto">Graphic Designer & Software Engineer</p>

				<div className="pt-12">
					<p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">New Portfolio Coming Soon</p>

					<div className="h-1 w-24 bg-gradient-to-r from-zinc-600 to-zinc-400 mx-auto rounded-full animate-pulse"></div>
				</div>
			</div>
		</main>
	);

}
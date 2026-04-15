import CoverParticles from "./Components/cover-particles";
import Introduction from "./Components/introduction";
import TransitionPage from "./Components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>

    
  );
}

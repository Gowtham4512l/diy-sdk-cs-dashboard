
import { Presentation } from './components/Presentation';
import { PdfSlide1_Cover } from './slides/PdfSlide1_Cover';
import { PdfSlide2_SDKHighlights } from './slides/PdfSlide2_SDKHighlights';
import { PdfSlide3_DashHighlights } from './slides/PdfSlide3_DashHighlights';
import { PdfSlide4_Retrospective } from './slides/PdfSlide4_Retrospective';
import { PdfSlide5_Process } from './slides/PdfSlide5_Process';
import { PdfSlide6_TechStack } from './slides/PdfSlide6_TechStack';
import { PdfSlide7_Refactors } from './slides/PdfSlide7_Refactors';
import { PdfSlide8_PathForward } from './slides/PdfSlide8_PathForward';
import { PdfSlide9_BigIdea } from './slides/PdfSlide9_BigIdea';

function App() {
    return (
        <Presentation>
            <PdfSlide1_Cover />
            <PdfSlide2_SDKHighlights />
            <PdfSlide3_DashHighlights />
            <PdfSlide4_Retrospective />
            <PdfSlide5_Process />
            <PdfSlide6_TechStack />
            <PdfSlide7_Refactors />
            <PdfSlide8_PathForward />
            <PdfSlide9_BigIdea />
        </Presentation>
    );
}

export default App;

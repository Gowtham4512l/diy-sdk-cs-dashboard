
import { Presentation } from './components/Presentation';
import { Cover } from './slides/Cover';
import { SDKHighlights } from './slides/SDKHighlights';
import { DashHighlights } from './slides/DashHighlights';
import { Retrospective } from './slides/Retrospective';
import { Process } from './slides/Process';
import { TechStack } from './slides/TechStack';
import { Refactors } from './slides/Refactors';
import { PathForward } from './slides/PathForward';
import { BigIdea } from './slides/BigIdea';

function App() {
    return (
        <Presentation>
            <Cover />
            <SDKHighlights />
            <DashHighlights />
            <Retrospective />
            <Process />
            <TechStack />
            <Refactors />
            <PathForward />
            <BigIdea />
        </Presentation>
    );
}

export default App;

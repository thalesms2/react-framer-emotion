import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import './App.css';

const App: React.FC = () => {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [rotate, setRotate] = React.useState(0);
	const animated = (x: number, y: number, rotate: number) => {
		setX(x)
		setY(y)
		setRotate(rotate)
	}
    return (
        <div className="example">
            <div>
                <motion.div
                    drag
                    className="box"
                    animate={{ x, y, rotate }}
                    transition={{ type: "spring" }}
                />
				<button onClick={() => animated(200, 200, 190)}>Teste</button>
				<button onClick={() => animated(0, 0, 0)}>Reset</button>
            </div>
        </div>
    );
};

export default App;

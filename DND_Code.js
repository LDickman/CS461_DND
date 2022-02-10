import { setupPage1 } from './race_code.js';
import { setupPage7 } from './equiment_code.js';
import { setupPage6 } from './spell_code.js';
import { setupPage3 } from './background.js';
import { setupPage4 } from './ability_score_code.js';
import { setupPage2 } from './class_code.js';

window.addEventListener('load', (event) => {
    setupPage1();
    setupPage2();
    setupPage3();
    setupPage4();
    setupPage6();
    setupPage7();
});

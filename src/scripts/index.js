import { throttle } from 'lodash';
import * as myModal from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = myModal.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();

//===================================

/* import * as data from './product';
import { x, t1, t2 } from './product';
import hello from './product';
import './test';

console.log(x, t1, t2);
console.log(data);
console.log(hello); */

// import Message from './message';

/* import { q, y, x } from './message';
import { t1, t2, t3 } from './user';
import { loadFromLS } from './helpers';

console.log(x, y, q);
console.log(t1, t2, t3);

loadFromLS();

saveToLS();
 */

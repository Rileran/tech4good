// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import {registerRoot} from 'remotion';
import {RemotionVideo} from './Video';

dayjs.locale('fr');
registerRoot(RemotionVideo);

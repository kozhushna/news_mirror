import {
    fetchPopularArticles,
    fetchSearchArticles,
    fetchCategoryArticles,
} from './js/fetch';
import { refs } from './js/refs';
import { onToglerClick } from './js/togler';
import { onTabsClick } from './js/on-tabs-click';
import * as weatherBanner from './js/weather-banner';

refs.togler.addEventListener('click', onToglerClick);

refs.tabs.addEventListener('click', onTabsClick);

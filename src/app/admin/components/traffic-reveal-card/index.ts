import { TrafficBackCardComponent } from './back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './back-side/traffic-bar-chart.component';
import { TrafficBarComponent } from './front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-cards-header/traffic-cards-header.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card.component';

export const TRAFFIC_REVEAL_CARD_COMPONENTS = [
    TrafficCardsHeaderComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarChartComponent,
    TrafficBarComponent,
    TrafficRevealCardComponent
];
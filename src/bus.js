import Vue from 'vue';

export const EventBus = new Vue();

EventBus.CHANGE_NAV_DEFAULT = "changeNavDefault";
EventBus.CHANGE_NAV_WHITE = "changeNavWhite";

EventBus.SCROLL_EVENT = "scrollEvent";
EventBus.SCROLL_X_EVENT = "scrollXEvent";

EventBus.RESIZE_EVENT = "resizeEvent";
EventBus.RESIZE_COMPLETE_EVENT = "resizeCompleteEvent";

EventBus.LOAD_COMPLETE_EVENT = "loadCompleteEvent";


EventBus.DECO_CIRCLE_PLAY = "decoCirclePlay";
EventBus.DECO_CIRCLE_BACK = "decoCircleBack";
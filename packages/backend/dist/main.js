/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var global_agent_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global-agent/bootstrap */ \"global-agent/bootstrap\");\n/* harmony import */ var global_agent_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global_agent_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var proxy_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-agent */ \"proxy-agent\");\n/* harmony import */ var proxy_agent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proxy_agent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _plugins_kubernetes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/kubernetes */ \"./src/plugins/kubernetes.ts\");\n/* harmony import */ var _plugins_adr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/adr */ \"./src/plugins/adr.ts\");\n/* harmony import */ var _plugins_kafka__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/kafka */ \"./src/plugins/kafka.ts\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @backstage/plugin-permission-node */ \"@backstage/plugin-permission-node\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _plugins_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/app */ \"./src/plugins/app.ts\");\n/* harmony import */ var _plugins_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/auth */ \"./src/plugins/auth.ts\");\n/* harmony import */ var _plugins_catalog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/catalog */ \"./src/plugins/catalog.ts\");\n/* harmony import */ var _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/scaffolder */ \"./src/plugins/scaffolder.ts\");\n/* harmony import */ var _plugins_proxy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/proxy */ \"./src/plugins/proxy.ts\");\n/* harmony import */ var _plugins_techdocs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plugins/techdocs */ \"./src/plugins/techdocs.ts\");\n/* harmony import */ var _plugins_toolkit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/toolkit */ \"./src/plugins/toolkit.ts\");\n/* harmony import */ var _plugins_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plugins/search */ \"./src/plugins/search.ts\");\n/* harmony import */ var _plugins_uptl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/uptl */ \"./src/plugins/uptl.ts\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @backstage/backend-tasks */ \"@backstage/backend-tasks\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _plugins_glossary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./plugins/glossary */ \"./src/plugins/glossary.ts\");\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @backstage/plugin-auth-node */ \"@backstage/plugin-auth-node\");\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _plugins_playlist__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./plugins/playlist */ \"./src/plugins/playlist.ts\");\n/* harmony import */ var _plugins_announcements__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./plugins/announcements */ \"./src/plugins/announcements.ts\");\n/* harmony import */ var _plugins_todo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./plugins/todo */ \"./src/plugins/todo.ts\");\n/* harmony import */ var _plugins_onboarding_poc__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./plugins/onboarding-poc */ \"./src/plugins/onboarding-poc.ts\");\n/* harmony import */ var _plugins_qeta__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./plugins/qeta */ \"./src/plugins/qeta.ts\");\n/* harmony import */ var _plugins_zipAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./plugins/zipAction */ \"./src/plugins/zipAction.ts\");\n/* harmony import */ var _plugins_grpc_playground__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plugins/grpc-playground */ \"./src/plugins/grpc-playground.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _module_hot;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nif (process.env.HTTP_PROXY) {\n    (http__WEBPACK_IMPORTED_MODULE_2___default().globalAgent) = new (proxy_agent__WEBPACK_IMPORTED_MODULE_1___default())(process.env.HTTP_PROXY);\n}\nif (process.env.HTTPS_PROXY) {\n    (https__WEBPACK_IMPORTED_MODULE_3___default().globalAgent) = new (proxy_agent__WEBPACK_IMPORTED_MODULE_1___default())(process.env.HTTPS_PROXY);\n}\n\n\nfunction makeCreateEnv(config) {\n    const root = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.getRootLogger)();\n    const reader = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.UrlReaders[\"default\"]({\n        logger: root,\n        config\n    });\n    const discovery = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.SingleHostDiscovery.fromConfig(config);\n    const cacheManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.CacheManager.fromConfig(config);\n    const databaseManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.DatabaseManager.fromConfig(config, {\n        logger: root\n    });\n    const tokenManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.ServerTokenManager.noop();\n    const taskScheduler = _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_19__.TaskScheduler.fromConfig(config);\n    const identity = _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_21__.DefaultIdentityClient.create({\n        discovery\n    });\n    const permissions = _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_7__.ServerPermissionClient.fromConfig(config, {\n        discovery,\n        tokenManager\n    });\n    root.info(`Created UrlReader ${reader}`);\n    return (plugin)=>{\n        const logger = root.child({\n            type: 'plugin',\n            plugin\n        });\n        const database = databaseManager.forPlugin(plugin);\n        const cache = cacheManager.forPlugin(plugin);\n        const scheduler = taskScheduler.forPlugin(plugin);\n        return {\n            logger,\n            database,\n            cache,\n            config,\n            reader,\n            discovery,\n            tokenManager,\n            scheduler,\n            permissions,\n            identity\n        };\n    };\n}\nasync function main() {\n    const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.loadBackendConfig)({\n        argv: process.argv,\n        logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.getRootLogger)()\n    });\n    const createEnv = makeCreateEnv(config);\n    const toolkitEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('toolkit'));\n    const catalogEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('catalog'));\n    const scaffolderEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('scaffolder'));\n    const authEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('auth'));\n    const proxyEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('proxy'));\n    const techdocsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('techdocs'));\n    const searchEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('search'));\n    const appEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('app'));\n    const kubernetesEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('kubernetes'));\n    const kafkaEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('kafka'));\n    const zipActionEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('zipAction'));\n    const glossaryEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('glossary'));\n    const playlistEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('playlist'));\n    const grpcPlaygroundEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('grpc-playground'));\n    const announcementsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('announcements'));\n    const uptlEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('uptl'));\n    const todoEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('todo'));\n    const onboaridngPocEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('onboardingPoc'));\n    const adrEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('adr'));\n    const qetaEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.useHotMemoize)(module, ()=>createEnv('qeta'));\n    const apiRouter = express_promise_router__WEBPACK_IMPORTED_MODULE_8___default()();\n    apiRouter.use('/catalog', await (0,_plugins_catalog__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(catalogEnv));\n    apiRouter.use('/adr', await (0,_plugins_adr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(adrEnv));\n    apiRouter.use('/scaffolder', await (0,_plugins_scaffolder__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(scaffolderEnv));\n    apiRouter.use('/auth', await (0,_plugins_auth__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(authEnv));\n    apiRouter.use('/techdocs', await (0,_plugins_techdocs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(techdocsEnv));\n    apiRouter.use('/proxy', await (0,_plugins_proxy__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(proxyEnv));\n    apiRouter.use('/search', await (0,_plugins_search__WEBPACK_IMPORTED_MODULE_17__[\"default\"])(searchEnv));\n    apiRouter.use('/kubernetes', await (0,_plugins_kubernetes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(kubernetesEnv));\n    apiRouter.use('/kafka', await (0,_plugins_kafka__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(kafkaEnv));\n    apiRouter.use('/glossary', await (0,_plugins_glossary__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(glossaryEnv));\n    apiRouter.use('/grpc-playground', await (0,_plugins_grpc_playground__WEBPACK_IMPORTED_MODULE_28__[\"default\"])(grpcPlaygroundEnv));\n    apiRouter.use('/playlist', await (0,_plugins_playlist__WEBPACK_IMPORTED_MODULE_22__[\"default\"])(playlistEnv));\n    apiRouter.use('/announcements', await (0,_plugins_announcements__WEBPACK_IMPORTED_MODULE_23__[\"default\"])(announcementsEnv));\n    apiRouter.use('/toolkit', await (0,_plugins_toolkit__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(toolkitEnv));\n    apiRouter.use('/uptl', await (0,_plugins_uptl__WEBPACK_IMPORTED_MODULE_18__[\"default\"])(uptlEnv));\n    apiRouter.use('/todo', await (0,_plugins_todo__WEBPACK_IMPORTED_MODULE_24__[\"default\"])(todoEnv));\n    apiRouter.use('/onboaridngPoc', await (0,_plugins_onboarding_poc__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(onboaridngPocEnv));\n    apiRouter.use('/qeta', await (0,_plugins_qeta__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(qetaEnv));\n    apiRouter.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.notFoundHandler)());\n    const service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_9__.createServiceBuilder)(module).loadConfig(config).addRouter('/api', apiRouter).addRouter('', await (0,_plugins_zipAction__WEBPACK_IMPORTED_MODULE_27__[\"default\"])(zipActionEnv)).addRouter('', await (0,_plugins_app__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(appEnv));\n    await service.start().catch((err)=>{\n        console.log(err);\n        process.exit(1);\n    });\n}\n(_module_hot = module.hot) === null || _module_hot === void 0 ? void 0 : _module_hot.accept();\nmain().catch((error)=>{\n    console.error('Backend failed to start up', error);\n    process.exit(1);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVKQTtBQXZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZ2xvYmFsLWFnZW50L2Jvb3RzdHJhcCc7XG5pbXBvcnQgUHJveHlBZ2VudCBmcm9tICdwcm94eS1hZ2VudCc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQga3ViZXJuZXRlcyBmcm9tICcuL3BsdWdpbnMva3ViZXJuZXRlcyc7XG5pbXBvcnQgYWRyIGZyb20gJy4vcGx1Z2lucy9hZHInO1xuaW1wb3J0IGthZmthIGZyb20gJy4vcGx1Z2lucy9rYWZrYSc7XG5pbXBvcnQgeyBTZXJ2ZXJQZXJtaXNzaW9uQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tcGVybWlzc2lvbi1ub2RlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQge1xuICBjcmVhdGVTZXJ2aWNlQnVpbGRlcixcbiAgbG9hZEJhY2tlbmRDb25maWcsXG4gIGdldFJvb3RMb2dnZXIsXG4gIHVzZUhvdE1lbW9pemUsXG4gIG5vdEZvdW5kSGFuZGxlcixcbiAgQ2FjaGVNYW5hZ2VyLFxuICBEYXRhYmFzZU1hbmFnZXIsXG4gIFNpbmdsZUhvc3REaXNjb3ZlcnksXG4gIFVybFJlYWRlcnMsXG4gIFNlcnZlclRva2VuTWFuYWdlcixcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2NvbmZpZyc7XG5pbXBvcnQgYXBwIGZyb20gJy4vcGx1Z2lucy9hcHAnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9wbHVnaW5zL2F1dGgnO1xuaW1wb3J0IGNhdGFsb2cgZnJvbSAnLi9wbHVnaW5zL2NhdGFsb2cnO1xuaW1wb3J0IHNjYWZmb2xkZXIgZnJvbSAnLi9wbHVnaW5zL3NjYWZmb2xkZXInO1xuaW1wb3J0IHByb3h5IGZyb20gJy4vcGx1Z2lucy9wcm94eSc7XG5pbXBvcnQgdGVjaGRvY3MgZnJvbSAnLi9wbHVnaW5zL3RlY2hkb2NzJztcbmltcG9ydCB0b29sa2l0IGZyb20gJy4vcGx1Z2lucy90b29sa2l0JztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9wbHVnaW5zL3NlYXJjaCc7XG5pbXBvcnQgdXB0bCBmcm9tICcuL3BsdWdpbnMvdXB0bCc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVGFza1NjaGVkdWxlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC10YXNrcyc7XG5pbXBvcnQgZ2xvc3NhcnkgZnJvbSAnLi9wbHVnaW5zL2dsb3NzYXJ5JztcbmltcG9ydCB7IERlZmF1bHRJZGVudGl0eUNsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWF1dGgtbm9kZSc7XG5pbXBvcnQgcGxheWxpc3QgZnJvbSAnLi9wbHVnaW5zL3BsYXlsaXN0JztcbmltcG9ydCBhbm5vdW5jZW1lbnRzIGZyb20gJy4vcGx1Z2lucy9hbm5vdW5jZW1lbnRzJztcbmltcG9ydCB0b2RvIGZyb20gJy4vcGx1Z2lucy90b2RvJztcbmltcG9ydCBvbmJvYXJkaW5nUG9jIGZyb20gJy4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYyc7XG5cbmltcG9ydCBxZXRhIGZyb20gJy4vcGx1Z2lucy9xZXRhJztcblxuaWYgKHByb2Nlc3MuZW52LkhUVFBfUFJPWFkpIHtcbiAgaHR0cC5nbG9iYWxBZ2VudCA9IG5ldyBQcm94eUFnZW50KHByb2Nlc3MuZW52LkhUVFBfUFJPWFkpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuSFRUUFNfUFJPWFkpIHtcbiAgaHR0cHMuZ2xvYmFsQWdlbnQgPSBuZXcgUHJveHlBZ2VudChwcm9jZXNzLmVudi5IVFRQU19QUk9YWSk7XG59XG5pbXBvcnQgY3JlYXRlWmlwQWN0aW9uUm91dGVyIGZyb20gJy4vcGx1Z2lucy96aXBBY3Rpb24nO1xuaW1wb3J0IGdycGNQbGF5Z3JvdW5kIGZyb20gJy4vcGx1Z2lucy9ncnBjLXBsYXlncm91bmQnO1xuXG5mdW5jdGlvbiBtYWtlQ3JlYXRlRW52KGNvbmZpZzogQ29uZmlnKSB7XG4gIGNvbnN0IHJvb3QgPSBnZXRSb290TG9nZ2VyKCk7XG4gIGNvbnN0IHJlYWRlciA9IFVybFJlYWRlcnMuZGVmYXVsdCh7IGxvZ2dlcjogcm9vdCwgY29uZmlnIH0pO1xuICBjb25zdCBkaXNjb3ZlcnkgPSBTaW5nbGVIb3N0RGlzY292ZXJ5LmZyb21Db25maWcoY29uZmlnKTtcbiAgY29uc3QgY2FjaGVNYW5hZ2VyID0gQ2FjaGVNYW5hZ2VyLmZyb21Db25maWcoY29uZmlnKTtcbiAgY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyLmZyb21Db25maWcoY29uZmlnLCB7IGxvZ2dlcjogcm9vdCB9KTtcbiAgY29uc3QgdG9rZW5NYW5hZ2VyID0gU2VydmVyVG9rZW5NYW5hZ2VyLm5vb3AoKTtcbiAgY29uc3QgdGFza1NjaGVkdWxlciA9IFRhc2tTY2hlZHVsZXIuZnJvbUNvbmZpZyhjb25maWcpO1xuICBjb25zdCBpZGVudGl0eSA9IERlZmF1bHRJZGVudGl0eUNsaWVudC5jcmVhdGUoe1xuICAgIGRpc2NvdmVyeSxcbiAgfSk7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gU2VydmVyUGVybWlzc2lvbkNsaWVudC5mcm9tQ29uZmlnKGNvbmZpZywge1xuICAgIGRpc2NvdmVyeSxcbiAgICB0b2tlbk1hbmFnZXIsXG4gIH0pO1xuXG4gIHJvb3QuaW5mbyhgQ3JlYXRlZCBVcmxSZWFkZXIgJHtyZWFkZXJ9YCk7XG5cbiAgcmV0dXJuIChwbHVnaW46IHN0cmluZyk6IFBsdWdpbkVudmlyb25tZW50ID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSByb290LmNoaWxkKHsgdHlwZTogJ3BsdWdpbicsIHBsdWdpbiB9KTtcbiAgICBjb25zdCBkYXRhYmFzZSA9IGRhdGFiYXNlTWFuYWdlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICBjb25zdCBjYWNoZSA9IGNhY2hlTWFuYWdlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0YXNrU2NoZWR1bGVyLmZvclBsdWdpbihwbHVnaW4pO1xuICAgIHJldHVybiB7XG4gICAgICBsb2dnZXIsXG4gICAgICBkYXRhYmFzZSxcbiAgICAgIGNhY2hlLFxuICAgICAgY29uZmlnLFxuICAgICAgcmVhZGVyLFxuICAgICAgZGlzY292ZXJ5LFxuICAgICAgdG9rZW5NYW5hZ2VyLFxuICAgICAgc2NoZWR1bGVyLFxuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICBpZGVudGl0eSxcbiAgICB9O1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkQmFja2VuZENvbmZpZyh7XG4gICAgYXJndjogcHJvY2Vzcy5hcmd2LFxuICAgIGxvZ2dlcjogZ2V0Um9vdExvZ2dlcigpLFxuICB9KTtcbiAgY29uc3QgY3JlYXRlRW52ID0gbWFrZUNyZWF0ZUVudihjb25maWcpO1xuICBjb25zdCB0b29sa2l0RW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudigndG9vbGtpdCcpKTtcbiAgY29uc3QgY2F0YWxvZ0VudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2NhdGFsb2cnKSk7XG4gIGNvbnN0IHNjYWZmb2xkZXJFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdzY2FmZm9sZGVyJykpO1xuICBjb25zdCBhdXRoRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignYXV0aCcpKTtcbiAgY29uc3QgcHJveHlFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdwcm94eScpKTtcbiAgY29uc3QgdGVjaGRvY3NFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCd0ZWNoZG9jcycpKTtcbiAgY29uc3Qgc2VhcmNoRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignc2VhcmNoJykpO1xuICBjb25zdCBhcHBFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdhcHAnKSk7XG4gIGNvbnN0IGt1YmVybmV0ZXNFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdrdWJlcm5ldGVzJykpO1xuICBjb25zdCBrYWZrYUVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2thZmthJykpO1xuICBjb25zdCB6aXBBY3Rpb25FbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCd6aXBBY3Rpb24nKSk7XG4gIGNvbnN0IGdsb3NzYXJ5RW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignZ2xvc3NhcnknKSk7XG4gIGNvbnN0IHBsYXlsaXN0RW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudigncGxheWxpc3QnKSk7XG4gIGNvbnN0IGdycGNQbGF5Z3JvdW5kRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignZ3JwYy1wbGF5Z3JvdW5kJykpO1xuICBjb25zdCBhbm5vdW5jZW1lbnRzRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignYW5ub3VuY2VtZW50cycpKTtcbiAgY29uc3QgdXB0bEVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3VwdGwnKSk7XG4gIGNvbnN0IHRvZG9FbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCd0b2RvJykpO1xuICBjb25zdCBvbmJvYXJpZG5nUG9jRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignb25ib2FyZGluZ1BvYycpKTtcbiAgXG4gIGNvbnN0IGFkckVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2FkcicpKTtcbiAgY29uc3QgcWV0YUVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3FldGEnKSk7XG5cbiAgY29uc3QgYXBpUm91dGVyID0gUm91dGVyKCk7XG4gIGFwaVJvdXRlci51c2UoJy9jYXRhbG9nJywgYXdhaXQgY2F0YWxvZyhjYXRhbG9nRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9hZHInLCBhd2FpdCBhZHIoYWRyRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9zY2FmZm9sZGVyJywgYXdhaXQgc2NhZmZvbGRlcihzY2FmZm9sZGVyRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9hdXRoJywgYXdhaXQgYXV0aChhdXRoRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy90ZWNoZG9jcycsIGF3YWl0IHRlY2hkb2NzKHRlY2hkb2NzRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9wcm94eScsIGF3YWl0IHByb3h5KHByb3h5RW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9zZWFyY2gnLCBhd2FpdCBzZWFyY2goc2VhcmNoRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9rdWJlcm5ldGVzJywgYXdhaXQga3ViZXJuZXRlcyhrdWJlcm5ldGVzRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9rYWZrYScsIGF3YWl0IGthZmthKGthZmthRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9nbG9zc2FyeScsIGF3YWl0IGdsb3NzYXJ5KGdsb3NzYXJ5RW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9ncnBjLXBsYXlncm91bmQnLCBhd2FpdCBncnBjUGxheWdyb3VuZChncnBjUGxheWdyb3VuZEVudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvcGxheWxpc3QnLCBhd2FpdCBwbGF5bGlzdChwbGF5bGlzdEVudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvYW5ub3VuY2VtZW50cycsIGF3YWl0IGFubm91bmNlbWVudHMoYW5ub3VuY2VtZW50c0VudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvdG9vbGtpdCcsIGF3YWl0IHRvb2xraXQodG9vbGtpdEVudikpXG4gIGFwaVJvdXRlci51c2UoJy91cHRsJywgYXdhaXQgdXB0bCh1cHRsRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy90b2RvJywgYXdhaXQgdG9kbyh0b2RvRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9vbmJvYXJpZG5nUG9jJywgYXdhaXQgb25ib2FyZGluZ1BvYyhvbmJvYXJpZG5nUG9jRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9xZXRhJywgYXdhaXQgcWV0YShxZXRhRW52KSk7XG5cbiAgYXBpUm91dGVyLnVzZShub3RGb3VuZEhhbmRsZXIoKSk7XG4gIGNvbnN0IHNlcnZpY2UgPSBjcmVhdGVTZXJ2aWNlQnVpbGRlcihtb2R1bGUpXG4gICAgLmxvYWRDb25maWcoY29uZmlnKVxuICAgIC5hZGRSb3V0ZXIoJy9hcGknLCBhcGlSb3V0ZXIpXG4gICAgLmFkZFJvdXRlcignJywgYXdhaXQgY3JlYXRlWmlwQWN0aW9uUm91dGVyKHppcEFjdGlvbkVudikpXG4gICAgLmFkZFJvdXRlcignJywgYXdhaXQgYXBwKGFwcEVudikpO1xuXG4gIGF3YWl0IHNlcnZpY2Uuc3RhcnQoKS5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9KTtcbn1cblxubW9kdWxlLmhvdD8uYWNjZXB0KCk7XG5tYWluKCkuY2F0Y2goZXJyb3IgPT4ge1xuICBjb25zb2xlLmVycm9yKCdCYWNrZW5kIGZhaWxlZCB0byBzdGFydCB1cCcsIGVycm9yKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/plugins/actions/checkAndRegister.ts":
/*!*************************************************!*\
  !*** ./src/plugins/actions/checkAndRegister.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCatalogCheckAndRegister\": () => (/* binding */ createCatalogCheckAndRegister)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-model */ \"@backstage/catalog-model\");\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * Copyright 2021 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n/**\n * Registers entities from a catalog descriptor file in the workspace into the software catalog.\n * @public\n */ function createCatalogCheckAndRegister(options) {\n    const { catalogClient , integrations  } = options;\n    return (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__.createTemplateAction)({\n        id: 'catalog:checkAndRegister',\n        description: 'Registers entities from a catalog descriptor file in the workspace into the software catalog.',\n        schema: {\n            input: {\n                oneOf: [\n                    {\n                        type: 'object',\n                        required: [\n                            'catalogInfoUrl'\n                        ],\n                        properties: {\n                            catalogInfoUrl: {\n                                title: 'Catalog Info URL',\n                                description: 'An absolute URL pointing to the catalog info file location',\n                                type: 'string'\n                            },\n                            optional: {\n                                title: 'Optional',\n                                description: 'Permit the registered location to optionally exist. Default: false',\n                                type: 'boolean'\n                            }\n                        }\n                    },\n                    {\n                        type: 'object',\n                        required: [\n                            'repoContentsUrl'\n                        ],\n                        properties: {\n                            repoContentsUrl: {\n                                title: 'Repository Contents URL',\n                                description: 'An absolute URL pointing to the root of a repository directory tree',\n                                type: 'string'\n                            },\n                            catalogInfoPath: {\n                                title: 'Fetch URL',\n                                description: 'A relative path from the repo root pointing to the catalog info file, defaults to /catalog-info.yaml',\n                                type: 'string'\n                            },\n                            optional: {\n                                title: 'Optional',\n                                description: 'Permit the registered location to optionally exist. Default: false',\n                                type: 'boolean'\n                            }\n                        }\n                    }\n                ]\n            },\n            output: {\n                type: 'object',\n                required: [\n                    'catalogInfoUrl'\n                ],\n                properties: {\n                    entityRef: {\n                        type: 'string'\n                    },\n                    catalogInfoUrl: {\n                        type: 'string'\n                    }\n                }\n            }\n        },\n        async handler (ctx) {\n            const { input  } = ctx;\n            let catalogInfoUrl;\n            console.log('======+++++++++++===============================+++++++++++++++++++==++++++++++');\n            console.log(input, ctx);\n            if ('catalogInfoUrl' in input) {\n                catalogInfoUrl = input.catalogInfoUrl;\n            } else {\n                const { repoContentsUrl , catalogInfoPath ='/catalog-info.yaml'  } = input;\n                const integration = integrations.byUrl(repoContentsUrl);\n                if (!integration) {\n                    console.log('integration  not found');\n                    throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`No integration found for host ${repoContentsUrl}`);\n                }\n                catalogInfoUrl = integration.resolveUrl({\n                    base: repoContentsUrl,\n                    url: catalogInfoPath\n                });\n            }\n            ctx.logger.info(`Registering ${catalogInfoUrl} in the catalog`);\n            try {\n                var _ctx_secrets;\n                await catalogClient.addLocation({\n                    type: 'url',\n                    target: catalogInfoUrl\n                }, ((_ctx_secrets = ctx.secrets) === null || _ctx_secrets === void 0 ? void 0 : _ctx_secrets.backstageToken) ? {\n                    token: ctx.secrets.backstageToken\n                } : {});\n            } catch (e) {\n                ctx.logger.info(`${e}`);\n            }\n            try {\n                var _ctx_secrets1;\n                const result = await catalogClient.addLocation({\n                    dryRun: true,\n                    type: 'url',\n                    target: catalogInfoUrl\n                }, ((_ctx_secrets1 = ctx.secrets) === null || _ctx_secrets1 === void 0 ? void 0 : _ctx_secrets1.backstageToken) ? {\n                    token: ctx.secrets.backstageToken\n                } : {});\n                if (result.entities.length > 0) {\n                    const { entities  } = result;\n                    let entity;\n                    // prioritise 'Component' type as it is the most central kind of entity\n                    entity = entities.find((e)=>!e.metadata.name.startsWith('generated-') && e.kind === 'Component');\n                    if (!entity) {\n                        entity = entities.find((e)=>!e.metadata.name.startsWith('generated-'));\n                    }\n                    if (!entity) {\n                        entity = entities[0];\n                    }\n                    ctx.output('entityRef', (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_0__.stringifyEntityRef)(entity));\n                }\n            } catch (e) {\n                if (!input.optional) {\n                    throw e;\n                }\n            }\n            ctx.output('catalogInfoUrl', catalogInfoUrl);\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL2NoZWNrQW5kUmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBSUE7QUFFQTtBQUVBOzs7QUFHQTtBQUtBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUxBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FjdGlvbnMvY2hlY2tBbmRSZWdpc3Rlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjEgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENhdGFsb2dBcGkgfSBmcm9tICdAYmFja3N0YWdlL2NhdGFsb2ctY2xpZW50JztcbmltcG9ydCB7IHN0cmluZ2lmeUVudGl0eVJlZiB9IGZyb20gJ0BiYWNrc3RhZ2UvY2F0YWxvZy1tb2RlbCc7XG5pbXBvcnQgeyBJbnB1dEVycm9yIH0gZnJvbSAnQGJhY2tzdGFnZS9lcnJvcnMnO1xuaW1wb3J0IHsgU2NtSW50ZWdyYXRpb25zIH0gZnJvbSAnQGJhY2tzdGFnZS9pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVUZW1wbGF0ZUFjdGlvbiB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNjYWZmb2xkZXItYmFja2VuZCc7XG5cbi8qKlxuICogUmVnaXN0ZXJzIGVudGl0aWVzIGZyb20gYSBjYXRhbG9nIGRlc2NyaXB0b3IgZmlsZSBpbiB0aGUgd29ya3NwYWNlIGludG8gdGhlIHNvZnR3YXJlIGNhdGFsb2cuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRhbG9nQ2hlY2tBbmRSZWdpc3RlcihvcHRpb25zOiB7XG4gIGNhdGFsb2dDbGllbnQ6IENhdGFsb2dBcGk7XG4gIGludGVncmF0aW9uczogU2NtSW50ZWdyYXRpb25zO1xufSkge1xuICBjb25zdCB7IGNhdGFsb2dDbGllbnQsIGludGVncmF0aW9ucyB9ID0gb3B0aW9ucztcblxuICByZXR1cm4gY3JlYXRlVGVtcGxhdGVBY3Rpb248XG4gICAgfCB7IGNhdGFsb2dJbmZvVXJsOiBzdHJpbmc7IG9wdGlvbmFsPzogYm9vbGVhbiB9XG4gICAgfCB7IHJlcG9Db250ZW50c1VybDogc3RyaW5nOyBjYXRhbG9nSW5mb1BhdGg/OiBzdHJpbmc7IG9wdGlvbmFsPzogYm9vbGVhbiB9XG4gID4oe1xuICAgIGlkOiAnY2F0YWxvZzpjaGVja0FuZFJlZ2lzdGVyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdSZWdpc3RlcnMgZW50aXRpZXMgZnJvbSBhIGNhdGFsb2cgZGVzY3JpcHRvciBmaWxlIGluIHRoZSB3b3Jrc3BhY2UgaW50byB0aGUgc29mdHdhcmUgY2F0YWxvZy4nLFxuICAgIHNjaGVtYToge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBbJ2NhdGFsb2dJbmZvVXJsJ10sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGNhdGFsb2dJbmZvVXJsOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDYXRhbG9nIEluZm8gVVJMJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdBbiBhYnNvbHV0ZSBVUkwgcG9pbnRpbmcgdG8gdGhlIGNhdGFsb2cgaW5mbyBmaWxlIGxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3B0aW9uYWw6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ09wdGlvbmFsJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdQZXJtaXQgdGhlIHJlZ2lzdGVyZWQgbG9jYXRpb24gdG8gb3B0aW9uYWxseSBleGlzdC4gRGVmYXVsdDogZmFsc2UnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBbJ3JlcG9Db250ZW50c1VybCddLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICByZXBvQ29udGVudHNVcmw6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcG9zaXRvcnkgQ29udGVudHMgVVJMJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdBbiBhYnNvbHV0ZSBVUkwgcG9pbnRpbmcgdG8gdGhlIHJvb3Qgb2YgYSByZXBvc2l0b3J5IGRpcmVjdG9yeSB0cmVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2F0YWxvZ0luZm9QYXRoOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZXRjaCBVUkwnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ0EgcmVsYXRpdmUgcGF0aCBmcm9tIHRoZSByZXBvIHJvb3QgcG9pbnRpbmcgdG8gdGhlIGNhdGFsb2cgaW5mbyBmaWxlLCBkZWZhdWx0cyB0byAvY2F0YWxvZy1pbmZvLnlhbWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcHRpb25hbDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnT3B0aW9uYWwnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgJ1Blcm1pdCB0aGUgcmVnaXN0ZXJlZCBsb2NhdGlvbiB0byBvcHRpb25hbGx5IGV4aXN0LiBEZWZhdWx0OiBmYWxzZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcmVxdWlyZWQ6IFsnY2F0YWxvZ0luZm9VcmwnXSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGVudGl0eVJlZjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRhbG9nSW5mb1VybDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVyKGN0eCkge1xuICAgICAgY29uc3QgeyBpbnB1dCB9ID0gY3R4O1xuICAgICAgbGV0IGNhdGFsb2dJbmZvVXJsO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJz09PT09PSsrKysrKysrKysrPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSsrKysrKysrKysrKysrKysrKys9PSsrKysrKysrKysnLFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0LCBjdHgpO1xuXG4gICAgICBpZiAoJ2NhdGFsb2dJbmZvVXJsJyBpbiBpbnB1dCkge1xuICAgICAgICBjYXRhbG9nSW5mb1VybCA9IGlucHV0LmNhdGFsb2dJbmZvVXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyByZXBvQ29udGVudHNVcmwsIGNhdGFsb2dJbmZvUGF0aCA9ICcvY2F0YWxvZy1pbmZvLnlhbWwnIH0gPVxuICAgICAgICAgIGlucHV0O1xuICAgICAgICBjb25zdCBpbnRlZ3JhdGlvbiA9IGludGVncmF0aW9ucy5ieVVybChyZXBvQ29udGVudHNVcmwpO1xuXG4gICAgICAgIGlmICghaW50ZWdyYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnaW50ZWdyYXRpb24gIG5vdCBmb3VuZCcpO1xuICAgICAgICAgIHRocm93IG5ldyBJbnB1dEVycm9yKFxuICAgICAgICAgICAgYE5vIGludGVncmF0aW9uIGZvdW5kIGZvciBob3N0ICR7cmVwb0NvbnRlbnRzVXJsfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhdGFsb2dJbmZvVXJsID0gaW50ZWdyYXRpb24ucmVzb2x2ZVVybCh7XG4gICAgICAgICAgYmFzZTogcmVwb0NvbnRlbnRzVXJsLFxuICAgICAgICAgIHVybDogY2F0YWxvZ0luZm9QYXRoLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY3R4LmxvZ2dlci5pbmZvKGBSZWdpc3RlcmluZyAke2NhdGFsb2dJbmZvVXJsfSBpbiB0aGUgY2F0YWxvZ2ApO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjYXRhbG9nQ2xpZW50LmFkZExvY2F0aW9uKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd1cmwnLFxuICAgICAgICAgICAgdGFyZ2V0OiBjYXRhbG9nSW5mb1VybCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN0eC5zZWNyZXRzPy5iYWNrc3RhZ2VUb2tlblxuICAgICAgICAgICAgPyB7IHRva2VuOiBjdHguc2VjcmV0cy5iYWNrc3RhZ2VUb2tlbiB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjdHgubG9nZ2VyLmluZm8oYCR7ZX1gKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2F0YWxvZ0NsaWVudC5hZGRMb2NhdGlvbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkcnlSdW46IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndXJsJyxcbiAgICAgICAgICAgIHRhcmdldDogY2F0YWxvZ0luZm9VcmwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdHguc2VjcmV0cz8uYmFja3N0YWdlVG9rZW5cbiAgICAgICAgICAgID8geyB0b2tlbjogY3R4LnNlY3JldHMuYmFja3N0YWdlVG9rZW4gfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAocmVzdWx0LmVudGl0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB7IGVudGl0aWVzIH0gPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IGVudGl0eTogYW55O1xuICAgICAgICAgIC8vIHByaW9yaXRpc2UgJ0NvbXBvbmVudCcgdHlwZSBhcyBpdCBpcyB0aGUgbW9zdCBjZW50cmFsIGtpbmQgb2YgZW50aXR5XG4gICAgICAgICAgZW50aXR5ID0gZW50aXRpZXMuZmluZChcbiAgICAgICAgICAgIChlOiBhbnkpID0+XG4gICAgICAgICAgICAgICFlLm1ldGFkYXRhLm5hbWUuc3RhcnRzV2l0aCgnZ2VuZXJhdGVkLScpICYmXG4gICAgICAgICAgICAgIGUua2luZCA9PT0gJ0NvbXBvbmVudCcsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICghZW50aXR5KSB7XG4gICAgICAgICAgICBlbnRpdHkgPSBlbnRpdGllcy5maW5kKFxuICAgICAgICAgICAgICAoZTogYW55KSA9PiAhZS5tZXRhZGF0YS5uYW1lLnN0YXJ0c1dpdGgoJ2dlbmVyYXRlZC0nKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgICAgIGVudGl0eSA9IGVudGl0aWVzWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN0eC5vdXRwdXQoJ2VudGl0eVJlZicsIHN0cmluZ2lmeUVudGl0eVJlZihlbnRpdHkpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIWlucHV0Lm9wdGlvbmFsKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdHgub3V0cHV0KCdjYXRhbG9nSW5mb1VybCcsIGNhdGFsb2dJbmZvVXJsKTtcbiAgICB9LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/actions/checkAndRegister.ts\n");

/***/ }),

/***/ "./src/plugins/actions/custom.ts":
/*!***************************************!*\
  !*** ./src/plugins/actions/custom.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewFileAction\": () => (/* binding */ createNewFileAction)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ \"./src/utils.ts\");\n\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst createNewFileAction = ()=>{\n    return (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_0__.createTemplateAction)({\n        id: 'zip:download',\n        schema: {\n            input: {\n                // required: ['contents', 'filename'],\n                type: 'object',\n                properties: {\n                    contents: {\n                        type: 'string',\n                        title: 'Contents',\n                        description: 'The contents of the file'\n                    },\n                    filename: {\n                        type: 'string',\n                        title: 'Filename',\n                        description: 'The filename of the file that will be created'\n                    },\n                    zipAvailability: {\n                        type: 'string',\n                        title: 'zipAvailability',\n                        description: 'Time upto which your zip file can live in the system'\n                    }\n                }\n            }\n        },\n        async handler (ctx) {\n            var _ctx_input;\n            // await fs.outputFile(\n            //   `${ctx.workspacePath}/${ctx.input.filename}`,\n            //   ctx.input.contents,\n            // );\n            const timeToLiveRecords = {\n                '5 mins': 1000 * 60 * 5,\n                '10 mins': 1000 * 60 * 10,\n                '15 mins': 1000 * 60 * 15,\n                '30 mins': 1000 * 60 * 30,\n                '1 hour': 1000 * 60 * 60\n            };\n            const mainDirectory = './achieves';\n            // if archieves directory doesn't exist create one\n            if (!fs_extra__WEBPACK_IMPORTED_MODULE_1___default().existsSync('achieves')) {\n                fs_extra__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(mainDirectory, {\n                    recursive: true\n                });\n            }\n            // removing existing files and directories from archieves directory\n            // removeDir(path.join('./achieves'), false);\n            const taskIdArray = ctx.workspacePath.split('/');\n            const taskId = taskIdArray[taskIdArray.length - 1];\n            const destination = `${mainDirectory}/${taskId}`;\n            const calculatedTTL = timeToLiveRecords.hasOwnProperty((_ctx_input = ctx.input) === null || _ctx_input === void 0 ? void 0 : _ctx_input.zipAvailability) ? timeToLiveRecords[ctx === null || ctx === void 0 ? void 0 : ctx.input.zipAvailability] : 1000 * 60 * 60;\n            fs_extra__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(destination, {\n                recursive: true\n            });\n            fs_extra__WEBPACK_IMPORTED_MODULE_1___default().copySync(`${ctx.workspacePath}`, destination);\n            ctx.logger.info(`${ctx.workspacePath}`);\n            setTimeout((function() {\n                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeDir)(path.join(`./achieves/${taskId}`), true);\n            }).bind(this), calculatedTTL);\n            ctx.output('code', 'ddddddddd');\n            ctx.logger.info(`To download your Files, open this link in new tab, ${process.env.DOMAIN_BACKEND}/zipAction?taskId=${taskId}`);\n        // alert('r');\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL2N1c3RvbS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FjdGlvbnMvY3VzdG9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRlbXBsYXRlQWN0aW9uIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2NhZmZvbGRlci1iYWNrZW5kJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHsgcmVtb3ZlRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3RmlsZUFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVRlbXBsYXRlQWN0aW9uPHtcbiAgICBjb250ZW50czogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgemlwQXZhaWxhYmlsaXR5OiBzdHJpbmc7XG4gIH0+KHtcbiAgICBpZDogJ3ppcDpkb3dubG9hZCcsXG4gICAgc2NoZW1hOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICAvLyByZXF1aXJlZDogWydjb250ZW50cycsICdmaWxlbmFtZSddLFxuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGNvbnRlbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGVudHMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY29udGVudHMgb2YgdGhlIGZpbGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmlsZW5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICdGaWxlbmFtZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaWxlbmFtZSBvZiB0aGUgZmlsZSB0aGF0IHdpbGwgYmUgY3JlYXRlZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB6aXBBdmFpbGFiaWxpdHk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICd6aXBBdmFpbGFiaWxpdHknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaW1lIHVwdG8gd2hpY2ggeW91ciB6aXAgZmlsZSBjYW4gbGl2ZSBpbiB0aGUgc3lzdGVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZXIoY3R4KSB7XG4gICAgICAvLyBhd2FpdCBmcy5vdXRwdXRGaWxlKFxuICAgICAgLy8gICBgJHtjdHgud29ya3NwYWNlUGF0aH0vJHtjdHguaW5wdXQuZmlsZW5hbWV9YCxcbiAgICAgIC8vICAgY3R4LmlucHV0LmNvbnRlbnRzLFxuICAgICAgLy8gKTtcbiAgICAgIGNvbnN0IHRpbWVUb0xpdmVSZWNvcmRzOiBhbnkgPSB7XG4gICAgICAgICc1IG1pbnMnOiAxMDAwICogNjAgKiA1LFxuICAgICAgICAnMTAgbWlucyc6IDEwMDAgKiA2MCAqIDEwLFxuICAgICAgICAnMTUgbWlucyc6IDEwMDAgKiA2MCAqIDE1LFxuICAgICAgICAnMzAgbWlucyc6IDEwMDAgKiA2MCAqIDMwLFxuICAgICAgICAnMSBob3VyJzogMTAwMCAqIDYwICogNjAsXG4gICAgICB9O1xuICAgICAgY29uc3QgbWFpbkRpcmVjdG9yeSA9ICcuL2FjaGlldmVzJztcbiAgICAgIC8vIGlmIGFyY2hpZXZlcyBkaXJlY3RvcnkgZG9lc24ndCBleGlzdCBjcmVhdGUgb25lXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoJ2FjaGlldmVzJykpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKG1haW5EaXJlY3RvcnksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZpbmcgZXhpc3RpbmcgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGZyb20gYXJjaGlldmVzIGRpcmVjdG9yeVxuICAgICAgLy8gcmVtb3ZlRGlyKHBhdGguam9pbignLi9hY2hpZXZlcycpLCBmYWxzZSk7XG4gICAgICBjb25zdCB0YXNrSWRBcnJheSA9IGN0eC53b3Jrc3BhY2VQYXRoLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCB0YXNrSWQgPSB0YXNrSWRBcnJheVt0YXNrSWRBcnJheS5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gYCR7bWFpbkRpcmVjdG9yeX0vJHt0YXNrSWR9YDtcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRUVEwgPSB0aW1lVG9MaXZlUmVjb3Jkcy5oYXNPd25Qcm9wZXJ0eShcbiAgICAgICAgY3R4LmlucHV0Py56aXBBdmFpbGFiaWxpdHksXG4gICAgICApXG4gICAgICAgID8gdGltZVRvTGl2ZVJlY29yZHNbY3R4Py5pbnB1dC56aXBBdmFpbGFiaWxpdHldXG4gICAgICAgIDogMTAwMCAqIDYwICogNjA7XG4gICAgICBmcy5ta2RpclN5bmMoZGVzdGluYXRpb24sIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgZnMuY29weVN5bmMoYCR7Y3R4LndvcmtzcGFjZVBhdGh9YCwgZGVzdGluYXRpb24pO1xuICAgICAgY3R4LmxvZ2dlci5pbmZvKGAke2N0eC53b3Jrc3BhY2VQYXRofWApO1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlbW92ZURpcihwYXRoLmpvaW4oYC4vYWNoaWV2ZXMvJHt0YXNrSWR9YCksIHRydWUpO1xuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgIGNhbGN1bGF0ZWRUVEwsXG4gICAgICApO1xuICAgICAgY3R4Lm91dHB1dCgnY29kZScsICdkZGRkZGRkZGQnKTtcbiAgICAgIGN0eC5sb2dnZXIuaW5mbyhcbiAgICAgICAgYFRvIGRvd25sb2FkIHlvdXIgRmlsZXMsIG9wZW4gdGhpcyBsaW5rIGluIG5ldyB0YWIsICR7cHJvY2Vzcy5lbnYuRE9NQUlOX0JBQ0tFTkR9L3ppcEFjdGlvbj90YXNrSWQ9JHt0YXNrSWR9YCxcbiAgICAgICk7XG4gICAgICAvLyBhbGVydCgncicpO1xuICAgIH0sXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/actions/custom.ts\n");

/***/ }),

/***/ "./src/plugins/actions/gitlabCreateOrMerge.ts":
/*!****************************************************!*\
  !*** ./src/plugins/actions/gitlabCreateOrMerge.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGitlabCreateOrMergeAction\": () => (/* binding */ createGitlabCreateOrMergeAction)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gitbeaker_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gitbeaker/node */ \"@gitbeaker/node\");\n/* harmony import */ var _gitbeaker_node__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gitbeaker_node__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ \"./src/plugins/actions/helpers.ts\");\n/* harmony import */ var _serializeDirectoryContents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serializeDirectoryContents */ \"./src/plugins/actions/serializeDirectoryContents.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ \"./src/plugins/actions/util.ts\");\n/*\n * Copyright 2021 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n\n\n\n\n/**\n * Creates a new action that initializes a git repository of the content in the workspace\n * and publishes it to GitLab.\n *\n * @public\n */ function createGitlabCreateOrMergeAction(options) {\n    const { integrations , config  } = options;\n    return (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__.createTemplateAction)({\n        id: 'publish:gitlab:createOrMerge',\n        description: 'Initializes a git repository of the content in the workspace, and publishes it to GitLab.',\n        schema: {\n            input: {\n                type: 'object',\n                required: [\n                    'repoUrl'\n                ],\n                properties: {\n                    repoUrl: {\n                        title: 'Repository Location',\n                        type: 'string'\n                    },\n                    repoVisibility: {\n                        title: 'Repository Visibility',\n                        type: 'string',\n                        enum: [\n                            'private',\n                            'public',\n                            'internal'\n                        ]\n                    },\n                    defaultBranch: {\n                        title: 'Default Branch',\n                        type: 'string',\n                        description: `Sets the default branch on the repository. The default value is 'master'`\n                    },\n                    gitCommitMessage: {\n                        title: 'Git Commit Message',\n                        type: 'string',\n                        description: `Sets the commit message on the repository. The default value is 'initial commit'`\n                    },\n                    gitAuthorName: {\n                        title: 'Default Author Name',\n                        type: 'string',\n                        description: `Sets the default author name for the commit. The default value is 'Scaffolder'`\n                    },\n                    gitAuthorEmail: {\n                        title: 'Default Author Email',\n                        type: 'string',\n                        description: `Sets the default author email for the commit.`\n                    },\n                    sourcePath: {\n                        title: 'Source Path',\n                        description: 'Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published as the repository.',\n                        type: 'string'\n                    },\n                    token: {\n                        title: 'Authentication Token',\n                        type: 'string',\n                        description: 'The token to use for authorization to GitLab'\n                    },\n                    setUserAsOwner: {\n                        title: 'Set User As Owner',\n                        type: 'boolean',\n                        description: 'Set the token user as owner of the newly created repository. Requires a token authorized to do the edit in the integration configuration for the matching host'\n                    }\n                }\n            },\n            output: {\n                type: 'object',\n                properties: {\n                    remoteUrl: {\n                        title: 'A URL to the repository with the provider',\n                        type: 'string'\n                    },\n                    repoContentsUrl: {\n                        title: 'A URL to the root of the repository',\n                        type: 'string'\n                    },\n                    projectId: {\n                        title: 'The ID of the project',\n                        type: 'string'\n                    }\n                }\n            }\n        },\n        async handler (ctx) {\n            const { repoUrl , repoVisibility ='private' , defaultBranch ='master' , gitCommitMessage ='initial commit' , gitAuthorName , gitAuthorEmail , setUserAsOwner =false  } = ctx.input;\n            const { owner , repo , host  } = (0,_util__WEBPACK_IMPORTED_MODULE_7__.parseRepoUrl)(repoUrl, integrations);\n            if (!owner) {\n                throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`No owner provided for host: ${host}, and repo ${repo}`);\n            }\n            const integrationConfig = integrations.gitlab.byHost(host);\n            if (!integrationConfig) {\n                throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`No matching integration configuration for host ${host}, please check your integrations config`);\n            }\n            if (!integrationConfig.config.token && !ctx.input.token) {\n                throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`No token available for host ${host}`);\n            }\n            const token = ctx.input.token || integrationConfig.config.token;\n            const tokenType = ctx.input.token ? 'oauthToken' : 'token';\n            const client = new _gitbeaker_node__WEBPACK_IMPORTED_MODULE_3__.Gitlab({\n                host: integrationConfig.config.baseUrl,\n                [tokenType]: token\n            });\n            let { id: targetNamespace  } = await client.Namespaces.show(owner);\n            const { id: userId  } = await client.Users.current();\n            if (!targetNamespace) {\n                targetNamespace = userId;\n            }\n            const searchResult = await client.Projects.search(`${repo}`);\n            const doesRepoWithSameNameAlreadyExists = Boolean(searchResult.length);\n            if (!doesRepoWithSameNameAlreadyExists) {\n                // when repo with same name does not exists\n                const { id: projectId , http_url_to_repo  } = await client.Projects.create({\n                    namespace_id: targetNamespace,\n                    name: repo,\n                    visibility: repoVisibility\n                });\n                // When setUserAsOwner is true the input token is expected to come from an unprivileged user GitLab\n                // OAuth flow. In this case GitLab works in a way that allows the unprivileged user to\n                // create the repository, but not to push the default protected branch (e.g. master).\n                // In order to set the user as owner of the newly created repository we need to check that the\n                // GitLab integration configuration for the matching host contains a token and use\n                // such token to bootstrap a new privileged client.\n                if (setUserAsOwner && integrationConfig.config.token) {\n                    const adminClient = new _gitbeaker_node__WEBPACK_IMPORTED_MODULE_3__.Gitlab({\n                        host: integrationConfig.config.baseUrl,\n                        token: integrationConfig.config.token\n                    });\n                    await adminClient.ProjectMembers.add(projectId, userId, 50);\n                }\n                const remoteUrl = http_url_to_repo.replace(/\\.git$/, '');\n                const repoContentsUrl = `${remoteUrl}/-/blob/${defaultBranch}`;\n                const gitAuthorInfo = {\n                    name: gitAuthorName ? gitAuthorName : config.getOptionalString('scaffolder.defaultAuthor.name'),\n                    email: gitAuthorEmail ? gitAuthorEmail : config.getOptionalString('scaffolder.defaultAuthor.email')\n                };\n                await (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.initRepoAndPush)({\n                    dir: (0,_util__WEBPACK_IMPORTED_MODULE_7__.getRepoSourceDirectory)(ctx.workspacePath, ctx.input.sourcePath),\n                    remoteUrl: http_url_to_repo,\n                    defaultBranch,\n                    auth: {\n                        username: 'oauth2',\n                        password: token\n                    },\n                    logger: ctx.logger,\n                    commitMessage: gitCommitMessage ? gitCommitMessage : config.getOptionalString('scaffolder.defaultCommitMessage'),\n                    gitAuthorInfo\n                });\n                ctx.output('remoteUrl', remoteUrl);\n                ctx.output('repoContentsUrl', repoContentsUrl);\n                ctx.output('projectId', projectId);\n            } else {\n                // when repo with same name already exists, create a merge request\n                const api = client;\n                const projectPath = `${owner}/${repo}`;\n                const destinationBranch = 'new-template';\n                const targetPath = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.resolveSafeChildPath)(ctx.workspacePath, '');\n                const fileContents = await (0,_serializeDirectoryContents__WEBPACK_IMPORTED_MODULE_6__.serializeDirectoryContents)(targetPath, {\n                    gitignore: true\n                });\n                ctx.logger.info(`Creating new Merge request :: Branch name :: ${destinationBranch}`);\n                const actions = fileContents.map((file)=>({\n                        action: 'update',\n                        filePath: path__WEBPACK_IMPORTED_MODULE_4___default().posix.join(file.path),\n                        encoding: 'base64',\n                        content: file.content.toString('base64'),\n                        execute_filemode: file.executable\n                    }));\n                const projects = await api.Projects.show(projectPath);\n                const { default_branch: projectDefaultBranch , id: projectId , http_url_to_repo  } = projects;\n                const remoteUrl = http_url_to_repo.replace(/\\.git$/, '');\n                const repoContentsUrl = `${remoteUrl}/-/blob/${defaultBranch}`;\n                try {\n                    await api.Branches.create(projectPath, destinationBranch, String(projectDefaultBranch));\n                } catch (e) {\n                    throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`The branch creation failed ${e}`);\n                }\n                try {\n                    await api.Commits.create(projectPath, destinationBranch, 'new template commit', actions);\n                } catch (e) {\n                    throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`Committing the changes to ${destinationBranch} failed ${e}`);\n                }\n                try {\n                    await api.MergeRequests.create(projectPath, destinationBranch, String(projectDefaultBranch), 'new template', {\n                        description: 'new template',\n                        removeSourceBranch: false\n                    }).then((mergeRequest)=>{\n                        return mergeRequest.web_url;\n                    });\n                    ctx.output('repoContentsUrl', repoContentsUrl);\n                    ctx.output('remoteUrl', remoteUrl);\n                    ctx.output('projectId', projectId);\n                } catch (e) {\n                    throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_1__.InputError(`Merge request creation failed${e}`);\n                }\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL2dpdGxhYkNyZWF0ZU9yTWVyZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFLQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FjdGlvbnMvZ2l0bGFiQ3JlYXRlT3JNZXJnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjEgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHJlc29sdmVTYWZlQ2hpbGRQYXRoIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2NvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dEVycm9yIH0gZnJvbSAnQGJhY2tzdGFnZS9lcnJvcnMnO1xuaW1wb3J0IHsgU2NtSW50ZWdyYXRpb25SZWdpc3RyeSB9IGZyb20gJ0BiYWNrc3RhZ2UvaW50ZWdyYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlVGVtcGxhdGVBY3Rpb24gfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zY2FmZm9sZGVyLWJhY2tlbmQnO1xuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdAZ2l0YmVha2VyL2NvcmUnO1xuaW1wb3J0IHsgR2l0bGFiIH0gZnJvbSAnQGdpdGJlYWtlci9ub2RlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaW5pdFJlcG9BbmRQdXNoIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHNlcmlhbGl6ZURpcmVjdG9yeUNvbnRlbnRzIH0gZnJvbSAnLi9zZXJpYWxpemVEaXJlY3RvcnlDb250ZW50cyc7XG5pbXBvcnQgeyBnZXRSZXBvU291cmNlRGlyZWN0b3J5LCBwYXJzZVJlcG9VcmwgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYWN0aW9uIHRoYXQgaW5pdGlhbGl6ZXMgYSBnaXQgcmVwb3NpdG9yeSBvZiB0aGUgY29udGVudCBpbiB0aGUgd29ya3NwYWNlXG4gKiBhbmQgcHVibGlzaGVzIGl0IHRvIEdpdExhYi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHaXRsYWJDcmVhdGVPck1lcmdlQWN0aW9uKG9wdGlvbnM6IHtcbiAgaW50ZWdyYXRpb25zOiBTY21JbnRlZ3JhdGlvblJlZ2lzdHJ5O1xuICBjb25maWc6IENvbmZpZztcbn0pIHtcbiAgY29uc3QgeyBpbnRlZ3JhdGlvbnMsIGNvbmZpZyB9ID0gb3B0aW9ucztcblxuICByZXR1cm4gY3JlYXRlVGVtcGxhdGVBY3Rpb248e1xuICAgIHJlcG9Vcmw6IHN0cmluZztcbiAgICBkZWZhdWx0QnJhbmNoPzogc3RyaW5nO1xuICAgIHJlcG9WaXNpYmlsaXR5PzogJ3ByaXZhdGUnIHwgJ2ludGVybmFsJyB8ICdwdWJsaWMnO1xuICAgIHNvdXJjZVBhdGg/OiBzdHJpbmc7XG4gICAgdG9rZW4/OiBzdHJpbmc7XG4gICAgZ2l0Q29tbWl0TWVzc2FnZT86IHN0cmluZztcbiAgICBnaXRBdXRob3JOYW1lPzogc3RyaW5nO1xuICAgIGdpdEF1dGhvckVtYWlsPzogc3RyaW5nO1xuICAgIHNldFVzZXJBc093bmVyPzogYm9vbGVhbjtcbiAgfT4oe1xuICAgIGlkOiAncHVibGlzaDpnaXRsYWI6Y3JlYXRlT3JNZXJnZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnSW5pdGlhbGl6ZXMgYSBnaXQgcmVwb3NpdG9yeSBvZiB0aGUgY29udGVudCBpbiB0aGUgd29ya3NwYWNlLCBhbmQgcHVibGlzaGVzIGl0IHRvIEdpdExhYi4nLFxuICAgIHNjaGVtYToge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlcXVpcmVkOiBbJ3JlcG9VcmwnXSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHJlcG9Vcmw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVwb3NpdG9yeSBMb2NhdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcG9WaXNpYmlsaXR5OiB7XG4gICAgICAgICAgICB0aXRsZTogJ1JlcG9zaXRvcnkgVmlzaWJpbGl0eScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGVudW06IFsncHJpdmF0ZScsICdwdWJsaWMnLCAnaW50ZXJuYWwnXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmF1bHRCcmFuY2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVmYXVsdCBCcmFuY2gnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNldHMgdGhlIGRlZmF1bHQgYnJhbmNoIG9uIHRoZSByZXBvc2l0b3J5LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAnbWFzdGVyJ2AsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnaXRDb21taXRNZXNzYWdlOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0dpdCBDb21taXQgTWVzc2FnZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgU2V0cyB0aGUgY29tbWl0IG1lc3NhZ2Ugb24gdGhlIHJlcG9zaXRvcnkuIFRoZSBkZWZhdWx0IHZhbHVlIGlzICdpbml0aWFsIGNvbW1pdCdgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2l0QXV0aG9yTmFtZToge1xuICAgICAgICAgICAgdGl0bGU6ICdEZWZhdWx0IEF1dGhvciBOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBTZXRzIHRoZSBkZWZhdWx0IGF1dGhvciBuYW1lIGZvciB0aGUgY29tbWl0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAnU2NhZmZvbGRlcidgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2l0QXV0aG9yRW1haWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVmYXVsdCBBdXRob3IgRW1haWwnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNldHMgdGhlIGRlZmF1bHQgYXV0aG9yIGVtYWlsIGZvciB0aGUgY29tbWl0LmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2VQYXRoOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1NvdXJjZSBQYXRoJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnUGF0aCB3aXRoaW4gdGhlIHdvcmtzcGFjZSB0aGF0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcmVwb3NpdG9yeSByb290LiBJZiBvbWl0dGVkLCB0aGUgZW50aXJlIHdvcmtzcGFjZSB3aWxsIGJlIHB1Ymxpc2hlZCBhcyB0aGUgcmVwb3NpdG9yeS4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgdGl0bGU6ICdBdXRoZW50aWNhdGlvbiBUb2tlbicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHRva2VuIHRvIHVzZSBmb3IgYXV0aG9yaXphdGlvbiB0byBHaXRMYWInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0VXNlckFzT3duZXI6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2V0IFVzZXIgQXMgT3duZXInLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICdTZXQgdGhlIHRva2VuIHVzZXIgYXMgb3duZXIgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgcmVwb3NpdG9yeS4gUmVxdWlyZXMgYSB0b2tlbiBhdXRob3JpemVkIHRvIGRvIHRoZSBlZGl0IGluIHRoZSBpbnRlZ3JhdGlvbiBjb25maWd1cmF0aW9uIGZvciB0aGUgbWF0Y2hpbmcgaG9zdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICByZW1vdGVVcmw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQSBVUkwgdG8gdGhlIHJlcG9zaXRvcnkgd2l0aCB0aGUgcHJvdmlkZXInLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXBvQ29udGVudHNVcmw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQSBVUkwgdG8gdGhlIHJvb3Qgb2YgdGhlIHJlcG9zaXRvcnknLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9qZWN0SWQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGhlIElEIG9mIHRoZSBwcm9qZWN0JyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlcihjdHgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVwb1VybCxcbiAgICAgICAgcmVwb1Zpc2liaWxpdHkgPSAncHJpdmF0ZScsXG4gICAgICAgIGRlZmF1bHRCcmFuY2ggPSAnbWFzdGVyJyxcbiAgICAgICAgZ2l0Q29tbWl0TWVzc2FnZSA9ICdpbml0aWFsIGNvbW1pdCcsXG4gICAgICAgIGdpdEF1dGhvck5hbWUsXG4gICAgICAgIGdpdEF1dGhvckVtYWlsLFxuICAgICAgICBzZXRVc2VyQXNPd25lciA9IGZhbHNlLFxuICAgICAgfSA9IGN0eC5pbnB1dDtcblxuICAgICAgY29uc3QgeyBvd25lciwgcmVwbywgaG9zdCB9ID0gcGFyc2VSZXBvVXJsKHJlcG9VcmwsIGludGVncmF0aW9ucyk7XG5cbiAgICAgIGlmICghb3duZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IElucHV0RXJyb3IoXG4gICAgICAgICAgYE5vIG93bmVyIHByb3ZpZGVkIGZvciBob3N0OiAke2hvc3R9LCBhbmQgcmVwbyAke3JlcG99YCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW50ZWdyYXRpb25Db25maWcgPSBpbnRlZ3JhdGlvbnMuZ2l0bGFiLmJ5SG9zdChob3N0KTtcblxuICAgICAgaWYgKCFpbnRlZ3JhdGlvbkNvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgSW5wdXRFcnJvcihcbiAgICAgICAgICBgTm8gbWF0Y2hpbmcgaW50ZWdyYXRpb24gY29uZmlndXJhdGlvbiBmb3IgaG9zdCAke2hvc3R9LCBwbGVhc2UgY2hlY2sgeW91ciBpbnRlZ3JhdGlvbnMgY29uZmlnYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpbnRlZ3JhdGlvbkNvbmZpZy5jb25maWcudG9rZW4gJiYgIWN0eC5pbnB1dC50b2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgSW5wdXRFcnJvcihgTm8gdG9rZW4gYXZhaWxhYmxlIGZvciBob3N0ICR7aG9zdH1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9rZW4gPSBjdHguaW5wdXQudG9rZW4gfHwgaW50ZWdyYXRpb25Db25maWcuY29uZmlnLnRva2VuITtcbiAgICAgIGNvbnN0IHRva2VuVHlwZSA9IGN0eC5pbnB1dC50b2tlbiA/ICdvYXV0aFRva2VuJyA6ICd0b2tlbic7XG5cbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBHaXRsYWIoe1xuICAgICAgICBob3N0OiBpbnRlZ3JhdGlvbkNvbmZpZy5jb25maWcuYmFzZVVybCxcbiAgICAgICAgW3Rva2VuVHlwZV06IHRva2VuLFxuICAgICAgfSk7XG5cbiAgICAgIGxldCB7IGlkOiB0YXJnZXROYW1lc3BhY2UgfSA9IChhd2FpdCBjbGllbnQuTmFtZXNwYWNlcy5zaG93KG93bmVyKSkgYXMge1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgeyBpZDogdXNlcklkIH0gPSAoYXdhaXQgY2xpZW50LlVzZXJzLmN1cnJlbnQoKSkgYXMge1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgfTtcblxuICAgICAgaWYgKCF0YXJnZXROYW1lc3BhY2UpIHtcbiAgICAgICAgdGFyZ2V0TmFtZXNwYWNlID0gdXNlcklkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBhd2FpdCBjbGllbnQuUHJvamVjdHMuc2VhcmNoKGAke3JlcG99YCk7XG4gICAgICBjb25zdCBkb2VzUmVwb1dpdGhTYW1lTmFtZUFscmVhZHlFeGlzdHMgPSBCb29sZWFuKHNlYXJjaFJlc3VsdC5sZW5ndGgpO1xuXG4gICAgICBpZiAoIWRvZXNSZXBvV2l0aFNhbWVOYW1lQWxyZWFkeUV4aXN0cykge1xuICAgICAgICAvLyB3aGVuIHJlcG8gd2l0aCBzYW1lIG5hbWUgZG9lcyBub3QgZXhpc3RzXG5cbiAgICAgICAgY29uc3QgeyBpZDogcHJvamVjdElkLCBodHRwX3VybF90b19yZXBvIH0gPVxuICAgICAgICAgIGF3YWl0IGNsaWVudC5Qcm9qZWN0cy5jcmVhdGUoe1xuICAgICAgICAgICAgbmFtZXNwYWNlX2lkOiB0YXJnZXROYW1lc3BhY2UsXG4gICAgICAgICAgICBuYW1lOiByZXBvLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogcmVwb1Zpc2liaWxpdHksXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiBzZXRVc2VyQXNPd25lciBpcyB0cnVlIHRoZSBpbnB1dCB0b2tlbiBpcyBleHBlY3RlZCB0byBjb21lIGZyb20gYW4gdW5wcml2aWxlZ2VkIHVzZXIgR2l0TGFiXG4gICAgICAgIC8vIE9BdXRoIGZsb3cuIEluIHRoaXMgY2FzZSBHaXRMYWIgd29ya3MgaW4gYSB3YXkgdGhhdCBhbGxvd3MgdGhlIHVucHJpdmlsZWdlZCB1c2VyIHRvXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcmVwb3NpdG9yeSwgYnV0IG5vdCB0byBwdXNoIHRoZSBkZWZhdWx0IHByb3RlY3RlZCBicmFuY2ggKGUuZy4gbWFzdGVyKS5cbiAgICAgICAgLy8gSW4gb3JkZXIgdG8gc2V0IHRoZSB1c2VyIGFzIG93bmVyIG9mIHRoZSBuZXdseSBjcmVhdGVkIHJlcG9zaXRvcnkgd2UgbmVlZCB0byBjaGVjayB0aGF0IHRoZVxuICAgICAgICAvLyBHaXRMYWIgaW50ZWdyYXRpb24gY29uZmlndXJhdGlvbiBmb3IgdGhlIG1hdGNoaW5nIGhvc3QgY29udGFpbnMgYSB0b2tlbiBhbmQgdXNlXG4gICAgICAgIC8vIHN1Y2ggdG9rZW4gdG8gYm9vdHN0cmFwIGEgbmV3IHByaXZpbGVnZWQgY2xpZW50LlxuICAgICAgICBpZiAoc2V0VXNlckFzT3duZXIgJiYgaW50ZWdyYXRpb25Db25maWcuY29uZmlnLnRva2VuKSB7XG4gICAgICAgICAgY29uc3QgYWRtaW5DbGllbnQgPSBuZXcgR2l0bGFiKHtcbiAgICAgICAgICAgIGhvc3Q6IGludGVncmF0aW9uQ29uZmlnLmNvbmZpZy5iYXNlVXJsLFxuICAgICAgICAgICAgdG9rZW46IGludGVncmF0aW9uQ29uZmlnLmNvbmZpZy50b2tlbixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IGFkbWluQ2xpZW50LlByb2plY3RNZW1iZXJzLmFkZChwcm9qZWN0SWQsIHVzZXJJZCwgNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3RlVXJsID0gKGh0dHBfdXJsX3RvX3JlcG8gYXMgc3RyaW5nKS5yZXBsYWNlKC9cXC5naXQkLywgJycpO1xuICAgICAgICBjb25zdCByZXBvQ29udGVudHNVcmwgPSBgJHtyZW1vdGVVcmx9Ly0vYmxvYi8ke2RlZmF1bHRCcmFuY2h9YDtcblxuICAgICAgICBjb25zdCBnaXRBdXRob3JJbmZvID0ge1xuICAgICAgICAgIG5hbWU6IGdpdEF1dGhvck5hbWVcbiAgICAgICAgICAgID8gZ2l0QXV0aG9yTmFtZVxuICAgICAgICAgICAgOiBjb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ3NjYWZmb2xkZXIuZGVmYXVsdEF1dGhvci5uYW1lJyksXG4gICAgICAgICAgZW1haWw6IGdpdEF1dGhvckVtYWlsXG4gICAgICAgICAgICA/IGdpdEF1dGhvckVtYWlsXG4gICAgICAgICAgICA6IGNvbmZpZy5nZXRPcHRpb25hbFN0cmluZygnc2NhZmZvbGRlci5kZWZhdWx0QXV0aG9yLmVtYWlsJyksXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgaW5pdFJlcG9BbmRQdXNoKHtcbiAgICAgICAgICBkaXI6IGdldFJlcG9Tb3VyY2VEaXJlY3RvcnkoY3R4LndvcmtzcGFjZVBhdGgsIGN0eC5pbnB1dC5zb3VyY2VQYXRoKSxcbiAgICAgICAgICByZW1vdGVVcmw6IGh0dHBfdXJsX3RvX3JlcG8gYXMgc3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHRCcmFuY2gsXG4gICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICdvYXV0aDInLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9nZ2VyOiBjdHgubG9nZ2VyLFxuICAgICAgICAgIGNvbW1pdE1lc3NhZ2U6IGdpdENvbW1pdE1lc3NhZ2VcbiAgICAgICAgICAgID8gZ2l0Q29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgOiBjb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ3NjYWZmb2xkZXIuZGVmYXVsdENvbW1pdE1lc3NhZ2UnKSxcbiAgICAgICAgICBnaXRBdXRob3JJbmZvLFxuICAgICAgICB9KTtcblxuICAgICAgICBjdHgub3V0cHV0KCdyZW1vdGVVcmwnLCByZW1vdGVVcmwpO1xuICAgICAgICBjdHgub3V0cHV0KCdyZXBvQ29udGVudHNVcmwnLCByZXBvQ29udGVudHNVcmwpO1xuICAgICAgICBjdHgub3V0cHV0KCdwcm9qZWN0SWQnLCBwcm9qZWN0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2hlbiByZXBvIHdpdGggc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzLCBjcmVhdGUgYSBtZXJnZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGFwaSA9IGNsaWVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdFBhdGggPSBgJHtvd25lcn0vJHtyZXBvfWA7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uQnJhbmNoID0gJ25ldy10ZW1wbGF0ZSc7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IHJlc29sdmVTYWZlQ2hpbGRQYXRoKGN0eC53b3Jrc3BhY2VQYXRoLCAnJyk7XG5cbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgc2VyaWFsaXplRGlyZWN0b3J5Q29udGVudHModGFyZ2V0UGF0aCwge1xuICAgICAgICAgIGdpdGlnbm9yZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3R4LmxvZ2dlci5pbmZvKFxuICAgICAgICAgIGBDcmVhdGluZyBuZXcgTWVyZ2UgcmVxdWVzdCA6OiBCcmFuY2ggbmFtZSA6OiAke2Rlc3RpbmF0aW9uQnJhbmNofWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uczogVHlwZXMuQ29tbWl0QWN0aW9uW10gPSBmaWxlQ29udGVudHMubWFwKGZpbGUgPT4gKHtcbiAgICAgICAgICBhY3Rpb246ICd1cGRhdGUnLFxuICAgICAgICAgIGZpbGVQYXRoOiBwYXRoLnBvc2l4LmpvaW4oZmlsZS5wYXRoKSxcbiAgICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsXG4gICAgICAgICAgY29udGVudDogZmlsZS5jb250ZW50LnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgICBleGVjdXRlX2ZpbGVtb2RlOiBmaWxlLmV4ZWN1dGFibGUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IGFwaS5Qcm9qZWN0cy5zaG93KHByb2plY3RQYXRoKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRlZmF1bHRfYnJhbmNoOiBwcm9qZWN0RGVmYXVsdEJyYW5jaCxcbiAgICAgICAgICBpZDogcHJvamVjdElkLFxuICAgICAgICAgIGh0dHBfdXJsX3RvX3JlcG8sXG4gICAgICAgIH0gPSBwcm9qZWN0cztcbiAgICAgICAgY29uc3QgcmVtb3RlVXJsID0gKGh0dHBfdXJsX3RvX3JlcG8gYXMgc3RyaW5nKS5yZXBsYWNlKC9cXC5naXQkLywgJycpO1xuICAgICAgICBjb25zdCByZXBvQ29udGVudHNVcmwgPSBgJHtyZW1vdGVVcmx9Ly0vYmxvYi8ke2RlZmF1bHRCcmFuY2h9YDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwaS5CcmFuY2hlcy5jcmVhdGUoXG4gICAgICAgICAgICBwcm9qZWN0UGF0aCxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uQnJhbmNoLFxuICAgICAgICAgICAgU3RyaW5nKHByb2plY3REZWZhdWx0QnJhbmNoKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IElucHV0RXJyb3IoYFRoZSBicmFuY2ggY3JlYXRpb24gZmFpbGVkICR7ZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgYXBpLkNvbW1pdHMuY3JlYXRlKFxuICAgICAgICAgICAgcHJvamVjdFBhdGgsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkJyYW5jaCxcbiAgICAgICAgICAgICduZXcgdGVtcGxhdGUgY29tbWl0JyxcbiAgICAgICAgICAgIGFjdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IG5ldyBJbnB1dEVycm9yKFxuICAgICAgICAgICAgYENvbW1pdHRpbmcgdGhlIGNoYW5nZXMgdG8gJHtkZXN0aW5hdGlvbkJyYW5jaH0gZmFpbGVkICR7ZX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGFwaS5NZXJnZVJlcXVlc3RzLmNyZWF0ZShcbiAgICAgICAgICAgIHByb2plY3RQYXRoLFxuICAgICAgICAgICAgZGVzdGluYXRpb25CcmFuY2gsXG4gICAgICAgICAgICBTdHJpbmcocHJvamVjdERlZmF1bHRCcmFuY2gpLFxuICAgICAgICAgICAgJ25ldyB0ZW1wbGF0ZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbmV3IHRlbXBsYXRlJyxcbiAgICAgICAgICAgICAgcmVtb3ZlU291cmNlQnJhbmNoOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKS50aGVuKChtZXJnZVJlcXVlc3Q6IHsgd2ViX3VybDogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZVJlcXVlc3Qud2ViX3VybDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGN0eC5vdXRwdXQoJ3JlcG9Db250ZW50c1VybCcsIHJlcG9Db250ZW50c1VybCk7XG4gICAgICAgICAgY3R4Lm91dHB1dCgncmVtb3RlVXJsJywgcmVtb3RlVXJsKTtcbiAgICAgICAgICBjdHgub3V0cHV0KCdwcm9qZWN0SWQnLCBwcm9qZWN0SWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IElucHV0RXJyb3IoYE1lcmdlIHJlcXVlc3QgY3JlYXRpb24gZmFpbGVkJHtlfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/actions/gitlabCreateOrMerge.ts\n");

/***/ }),

/***/ "./src/plugins/actions/helpers.ts":
/*!****************************************!*\
  !*** ./src/plugins/actions/helpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commitAndPushRepo\": () => (/* binding */ commitAndPushRepo),\n/* harmony export */   \"enableBranchProtectionOnDefaultRepoBranch\": () => (/* binding */ enableBranchProtectionOnDefaultRepoBranch),\n/* harmony export */   \"executeShellCommand\": () => (/* binding */ executeShellCommand),\n/* harmony export */   \"getGitCommitMessage\": () => (/* binding */ getGitCommitMessage),\n/* harmony export */   \"initRepoAndPush\": () => (/* binding */ initRepoAndPush)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * Copyright 2021 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n/**\n * Run a command in a sub-process, normally a shell command.\n *\n * @public\n */ const executeShellCommand = async (options)=>{\n    const { command , args , options: spawnOptions , logStream =new stream__WEBPACK_IMPORTED_MODULE_3__.PassThrough()  } = options;\n    await new Promise((resolve, reject)=>{\n        const process = (0,child_process__WEBPACK_IMPORTED_MODULE_2__.spawn)(command, args, spawnOptions);\n        process.stdout.on('data', (stream)=>{\n            logStream.write(stream);\n        });\n        process.stderr.on('data', (stream)=>{\n            logStream.write(stream);\n        });\n        process.on('error', (error)=>{\n            return reject(error);\n        });\n        process.on('close', (code)=>{\n            if (code !== 0) {\n                return reject(new Error(`Command ${command} failed, exit code: ${code}`));\n            }\n            return resolve();\n        });\n    });\n};\nasync function initRepoAndPush({ dir , remoteUrl , auth , logger , defaultBranch ='master' , commitMessage ='Initial commit' , gitAuthorInfo  }) {\n    const git = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.Git.fromAuth({\n        ...auth,\n        logger\n    });\n    await git.init({\n        dir,\n        defaultBranch\n    });\n    await git.add({\n        dir,\n        filepath: '.'\n    });\n    var _gitAuthorInfo_name, _gitAuthorInfo_email;\n    // use provided info if possible, otherwise use fallbacks\n    const authorInfo = {\n        name: (_gitAuthorInfo_name = gitAuthorInfo === null || gitAuthorInfo === void 0 ? void 0 : gitAuthorInfo.name) !== null && _gitAuthorInfo_name !== void 0 ? _gitAuthorInfo_name : 'Scaffolder',\n        email: (_gitAuthorInfo_email = gitAuthorInfo === null || gitAuthorInfo === void 0 ? void 0 : gitAuthorInfo.email) !== null && _gitAuthorInfo_email !== void 0 ? _gitAuthorInfo_email : 'scaffolder@backstage.io'\n    };\n    await git.commit({\n        dir,\n        message: commitMessage,\n        author: authorInfo,\n        committer: authorInfo\n    });\n    await git.addRemote({\n        dir,\n        url: remoteUrl,\n        remote: 'origin'\n    });\n    await git.push({\n        dir,\n        remote: 'origin'\n    });\n}\nasync function commitAndPushRepo({ dir , auth , logger , commitMessage , gitAuthorInfo , branch ='master' , remoteRef  }) {\n    const git = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.Git.fromAuth({\n        ...auth,\n        logger\n    });\n    await git.fetch({\n        dir\n    });\n    await git.checkout({\n        dir,\n        ref: branch\n    });\n    await git.add({\n        dir,\n        filepath: '.'\n    });\n    var _gitAuthorInfo_name, _gitAuthorInfo_email;\n    // use provided info if possible, otherwise use fallbacks\n    const authorInfo = {\n        name: (_gitAuthorInfo_name = gitAuthorInfo === null || gitAuthorInfo === void 0 ? void 0 : gitAuthorInfo.name) !== null && _gitAuthorInfo_name !== void 0 ? _gitAuthorInfo_name : 'Scaffolder',\n        email: (_gitAuthorInfo_email = gitAuthorInfo === null || gitAuthorInfo === void 0 ? void 0 : gitAuthorInfo.email) !== null && _gitAuthorInfo_email !== void 0 ? _gitAuthorInfo_email : 'scaffolder@backstage.io'\n    };\n    await git.commit({\n        dir,\n        message: commitMessage,\n        author: authorInfo,\n        committer: authorInfo\n    });\n    await git.push({\n        dir,\n        remote: 'origin',\n        remoteRef: remoteRef !== null && remoteRef !== void 0 ? remoteRef : `refs/heads/${branch}`\n    });\n}\nconst enableBranchProtectionOnDefaultRepoBranch = async ({ repoName , client , owner , logger , requireCodeOwnerReviews , requiredStatusCheckContexts =[] , defaultBranch ='master' , enforceAdmins =true  })=>{\n    const tryOnce = async ()=>{\n        try {\n            await client.rest.repos.updateBranchProtection({\n                mediaType: {\n                    /**\n           * 👇 we need this preview because allowing a custom\n           * reviewer count on branch protection is a preview\n           * feature\n           *\n           * More here: https://docs.github.com/en/rest/overview/api-previews#require-multiple-approving-reviews\n           */ previews: [\n                        'luke-cage-preview'\n                    ]\n                },\n                owner,\n                repo: repoName,\n                branch: defaultBranch,\n                required_status_checks: {\n                    strict: true,\n                    contexts: requiredStatusCheckContexts\n                },\n                restrictions: null,\n                enforce_admins: enforceAdmins,\n                required_pull_request_reviews: {\n                    required_approving_review_count: 1,\n                    require_code_owner_reviews: requireCodeOwnerReviews\n                }\n            });\n        } catch (e) {\n            (0,_backstage_errors__WEBPACK_IMPORTED_MODULE_1__.assertError)(e);\n            if (e.message.includes('Upgrade to GitHub Pro or make this repository public to enable this feature')) {\n                logger.warn('Branch protection was not enabled as it requires GitHub Pro for private repositories');\n            } else {\n                throw e;\n            }\n        }\n    };\n    try {\n        await tryOnce();\n    } catch (e) {\n        // @ts-ignore\n        if (!e.message.includes('Branch not found')) {\n            throw e;\n        }\n        // GitHub has eventual consistency. Fail silently, wait, and try again.\n        await new Promise((resolve)=>setTimeout(resolve, 600));\n        await tryOnce();\n    }\n};\nfunction getGitCommitMessage(gitCommitMessage, config) {\n    return gitCommitMessage ? gitCommitMessage : config.getOptionalString('scaffolder.defaultCommitMessage');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL2hlbHBlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBSUE7QUFDQTtBQUVBO0FBZUE7Ozs7QUFJQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUdBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FjdGlvbnMvaGVscGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjEgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEdpdCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGJhY2tzdGFnZS9jb25maWcnO1xuaW1wb3J0IHsgYXNzZXJ0RXJyb3IgfSBmcm9tICdAYmFja3N0YWdlL2Vycm9ycyc7XG5pbXBvcnQgeyBzcGF3biwgU3Bhd25PcHRpb25zV2l0aG91dFN0ZGlvIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSAnb2N0b2tpdCc7XG5pbXBvcnQgeyBQYXNzVGhyb3VnaCwgV3JpdGFibGUgfSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5cbi8qKiBAcHVibGljICovXG5leHBvcnQgdHlwZSBSdW5Db21tYW5kT3B0aW9ucyA9IHtcbiAgLyoqIGNvbW1hbmQgdG8gcnVuICovXG4gIGNvbW1hbmQ6IHN0cmluZztcbiAgLyoqIGFyZ3VtZW50cyB0byBwYXNzIHRoZSBjb21tYW5kICovXG4gIGFyZ3M6IHN0cmluZ1tdO1xuICAvKiogb3B0aW9ucyB0byBwYXNzIHRvIHNwYXduICovXG4gIG9wdGlvbnM/OiBTcGF3bk9wdGlvbnNXaXRob3V0U3RkaW87XG4gIC8qKiBzdHJlYW0gdG8gY2FwdHVyZSBzdGRvdXQgYW5kIHN0ZGVyciBvdXRwdXQgKi9cbiAgbG9nU3RyZWFtPzogV3JpdGFibGU7XG59O1xuXG4vKipcbiAqIFJ1biBhIGNvbW1hbmQgaW4gYSBzdWItcHJvY2Vzcywgbm9ybWFsbHkgYSBzaGVsbCBjb21tYW5kLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGV4ZWN1dGVTaGVsbENvbW1hbmQgPSBhc3luYyAob3B0aW9uczogUnVuQ29tbWFuZE9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbW1hbmQsXG4gICAgYXJncyxcbiAgICBvcHRpb25zOiBzcGF3bk9wdGlvbnMsXG4gICAgbG9nU3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCksXG4gIH0gPSBvcHRpb25zO1xuICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvY2VzcyA9IHNwYXduKGNvbW1hbmQsIGFyZ3MsIHNwYXduT3B0aW9ucyk7XG5cbiAgICBwcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIHN0cmVhbSA9PiB7XG4gICAgICBsb2dTdHJlYW0ud3JpdGUoc3RyZWFtKTtcbiAgICB9KTtcblxuICAgIHByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgc3RyZWFtID0+IHtcbiAgICAgIGxvZ1N0cmVhbS53cml0ZShzdHJlYW0pO1xuICAgIH0pO1xuXG4gICAgcHJvY2Vzcy5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICB9KTtcblxuICAgIHByb2Nlc3Mub24oJ2Nsb3NlJywgY29kZSA9PiB7XG4gICAgICBpZiAoY29kZSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgIG5ldyBFcnJvcihgQ29tbWFuZCAke2NvbW1hbmR9IGZhaWxlZCwgZXhpdCBjb2RlOiAke2NvZGV9YCksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0UmVwb0FuZFB1c2goe1xuICBkaXIsXG4gIHJlbW90ZVVybCxcbiAgYXV0aCxcbiAgbG9nZ2VyLFxuICBkZWZhdWx0QnJhbmNoID0gJ21hc3RlcicsXG4gIGNvbW1pdE1lc3NhZ2UgPSAnSW5pdGlhbCBjb21taXQnLFxuICBnaXRBdXRob3JJbmZvLFxufToge1xuICBkaXI6IHN0cmluZztcbiAgcmVtb3RlVXJsOiBzdHJpbmc7XG4gIC8vIEZvciB1c2UgY2FzZXMgd2hlcmUgdG9rZW4gaGFzIHRvIGJlIHVzZWQgd2l0aCBCYXNpYyBBdXRoXG4gIC8vIGl0IGhhcyB0byBiZSBwcm92aWRlZCBhcyBwYXNzd29yZCB0b2dldGhlciB3aXRoIGEgdXNlcm5hbWVcbiAgLy8gd2hpY2ggbWF5IGJlIGEgZml4ZWQgdmFsdWUgZGVmaW5lZCBieSB0aGUgcHJvdmlkZXIuXG4gIGF1dGg6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9IHwgeyB0b2tlbjogc3RyaW5nIH07XG4gIGxvZ2dlcjogTG9nZ2VyO1xuICBkZWZhdWx0QnJhbmNoPzogc3RyaW5nO1xuICBjb21taXRNZXNzYWdlPzogc3RyaW5nO1xuICBnaXRBdXRob3JJbmZvPzogeyBuYW1lPzogc3RyaW5nOyBlbWFpbD86IHN0cmluZyB9O1xufSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBnaXQgPSBHaXQuZnJvbUF1dGgoe1xuICAgIC4uLmF1dGgsXG4gICAgbG9nZ2VyLFxuICB9KTtcblxuICBhd2FpdCBnaXQuaW5pdCh7XG4gICAgZGlyLFxuICAgIGRlZmF1bHRCcmFuY2gsXG4gIH0pO1xuXG4gIGF3YWl0IGdpdC5hZGQoeyBkaXIsIGZpbGVwYXRoOiAnLicgfSk7XG5cbiAgLy8gdXNlIHByb3ZpZGVkIGluZm8gaWYgcG9zc2libGUsIG90aGVyd2lzZSB1c2UgZmFsbGJhY2tzXG4gIGNvbnN0IGF1dGhvckluZm8gPSB7XG4gICAgbmFtZTogZ2l0QXV0aG9ySW5mbz8ubmFtZSA/PyAnU2NhZmZvbGRlcicsXG4gICAgZW1haWw6IGdpdEF1dGhvckluZm8/LmVtYWlsID8/ICdzY2FmZm9sZGVyQGJhY2tzdGFnZS5pbycsXG4gIH07XG5cbiAgYXdhaXQgZ2l0LmNvbW1pdCh7XG4gICAgZGlyLFxuICAgIG1lc3NhZ2U6IGNvbW1pdE1lc3NhZ2UsXG4gICAgYXV0aG9yOiBhdXRob3JJbmZvLFxuICAgIGNvbW1pdHRlcjogYXV0aG9ySW5mbyxcbiAgfSk7XG5cbiAgYXdhaXQgZ2l0LmFkZFJlbW90ZSh7XG4gICAgZGlyLFxuICAgIHVybDogcmVtb3RlVXJsLFxuICAgIHJlbW90ZTogJ29yaWdpbicsXG4gIH0pO1xuXG4gIGF3YWl0IGdpdC5wdXNoKHtcbiAgICBkaXIsXG4gICAgcmVtb3RlOiAnb3JpZ2luJyxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21taXRBbmRQdXNoUmVwbyh7XG4gIGRpcixcbiAgYXV0aCxcbiAgbG9nZ2VyLFxuICBjb21taXRNZXNzYWdlLFxuICBnaXRBdXRob3JJbmZvLFxuICBicmFuY2ggPSAnbWFzdGVyJyxcbiAgcmVtb3RlUmVmLFxufToge1xuICBkaXI6IHN0cmluZztcbiAgLy8gRm9yIHVzZSBjYXNlcyB3aGVyZSB0b2tlbiBoYXMgdG8gYmUgdXNlZCB3aXRoIEJhc2ljIEF1dGhcbiAgLy8gaXQgaGFzIHRvIGJlIHByb3ZpZGVkIGFzIHBhc3N3b3JkIHRvZ2V0aGVyIHdpdGggYSB1c2VybmFtZVxuICAvLyB3aGljaCBtYXkgYmUgYSBmaXhlZCB2YWx1ZSBkZWZpbmVkIGJ5IHRoZSBwcm92aWRlci5cbiAgYXV0aDogeyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0gfCB7IHRva2VuOiBzdHJpbmcgfTtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIGNvbW1pdE1lc3NhZ2U6IHN0cmluZztcbiAgZ2l0QXV0aG9ySW5mbz86IHsgbmFtZT86IHN0cmluZzsgZW1haWw/OiBzdHJpbmcgfTtcbiAgYnJhbmNoPzogc3RyaW5nO1xuICByZW1vdGVSZWY/OiBzdHJpbmc7XG59KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGdpdCA9IEdpdC5mcm9tQXV0aCh7XG4gICAgLi4uYXV0aCxcbiAgICBsb2dnZXIsXG4gIH0pO1xuXG4gIGF3YWl0IGdpdC5mZXRjaCh7IGRpciB9KTtcbiAgYXdhaXQgZ2l0LmNoZWNrb3V0KHsgZGlyLCByZWY6IGJyYW5jaCB9KTtcbiAgYXdhaXQgZ2l0LmFkZCh7IGRpciwgZmlsZXBhdGg6ICcuJyB9KTtcblxuICAvLyB1c2UgcHJvdmlkZWQgaW5mbyBpZiBwb3NzaWJsZSwgb3RoZXJ3aXNlIHVzZSBmYWxsYmFja3NcbiAgY29uc3QgYXV0aG9ySW5mbyA9IHtcbiAgICBuYW1lOiBnaXRBdXRob3JJbmZvPy5uYW1lID8/ICdTY2FmZm9sZGVyJyxcbiAgICBlbWFpbDogZ2l0QXV0aG9ySW5mbz8uZW1haWwgPz8gJ3NjYWZmb2xkZXJAYmFja3N0YWdlLmlvJyxcbiAgfTtcblxuICBhd2FpdCBnaXQuY29tbWl0KHtcbiAgICBkaXIsXG4gICAgbWVzc2FnZTogY29tbWl0TWVzc2FnZSxcbiAgICBhdXRob3I6IGF1dGhvckluZm8sXG4gICAgY29tbWl0dGVyOiBhdXRob3JJbmZvLFxuICB9KTtcblxuICBhd2FpdCBnaXQucHVzaCh7XG4gICAgZGlyLFxuICAgIHJlbW90ZTogJ29yaWdpbicsXG4gICAgcmVtb3RlUmVmOiByZW1vdGVSZWYgPz8gYHJlZnMvaGVhZHMvJHticmFuY2h9YCxcbiAgfSk7XG59XG5cbnR5cGUgQnJhbmNoUHJvdGVjdGlvbk9wdGlvbnMgPSB7XG4gIGNsaWVudDogT2N0b2tpdDtcbiAgb3duZXI6IHN0cmluZztcbiAgcmVwb05hbWU6IHN0cmluZztcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIHJlcXVpcmVDb2RlT3duZXJSZXZpZXdzOiBib29sZWFuO1xuICByZXF1aXJlZFN0YXR1c0NoZWNrQ29udGV4dHM/OiBzdHJpbmdbXTtcbiAgZGVmYXVsdEJyYW5jaD86IHN0cmluZztcbiAgZW5mb3JjZUFkbWlucz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlQnJhbmNoUHJvdGVjdGlvbk9uRGVmYXVsdFJlcG9CcmFuY2ggPSBhc3luYyAoe1xuICByZXBvTmFtZSxcbiAgY2xpZW50LFxuICBvd25lcixcbiAgbG9nZ2VyLFxuICByZXF1aXJlQ29kZU93bmVyUmV2aWV3cyxcbiAgcmVxdWlyZWRTdGF0dXNDaGVja0NvbnRleHRzID0gW10sXG4gIGRlZmF1bHRCcmFuY2ggPSAnbWFzdGVyJyxcbiAgZW5mb3JjZUFkbWlucyA9IHRydWUsXG59OiBCcmFuY2hQcm90ZWN0aW9uT3B0aW9ucyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCB0cnlPbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjbGllbnQucmVzdC5yZXBvcy51cGRhdGVCcmFuY2hQcm90ZWN0aW9uKHtcbiAgICAgICAgbWVkaWFUeXBlOiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICog8J+RhyB3ZSBuZWVkIHRoaXMgcHJldmlldyBiZWNhdXNlIGFsbG93aW5nIGEgY3VzdG9tXG4gICAgICAgICAgICogcmV2aWV3ZXIgY291bnQgb24gYnJhbmNoIHByb3RlY3Rpb24gaXMgYSBwcmV2aWV3XG4gICAgICAgICAgICogZmVhdHVyZVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogTW9yZSBoZXJlOiBodHRwczovL2RvY3MuZ2l0aHViLmNvbS9lbi9yZXN0L292ZXJ2aWV3L2FwaS1wcmV2aWV3cyNyZXF1aXJlLW11bHRpcGxlLWFwcHJvdmluZy1yZXZpZXdzXG4gICAgICAgICAgICovXG4gICAgICAgICAgcHJldmlld3M6IFsnbHVrZS1jYWdlLXByZXZpZXcnXSxcbiAgICAgICAgfSxcbiAgICAgICAgb3duZXIsXG4gICAgICAgIHJlcG86IHJlcG9OYW1lLFxuICAgICAgICBicmFuY2g6IGRlZmF1bHRCcmFuY2gsXG4gICAgICAgIHJlcXVpcmVkX3N0YXR1c19jaGVja3M6IHtcbiAgICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgICAgY29udGV4dHM6IHJlcXVpcmVkU3RhdHVzQ2hlY2tDb250ZXh0cyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdHJpY3Rpb25zOiBudWxsLFxuICAgICAgICBlbmZvcmNlX2FkbWluczogZW5mb3JjZUFkbWlucyxcbiAgICAgICAgcmVxdWlyZWRfcHVsbF9yZXF1ZXN0X3Jldmlld3M6IHtcbiAgICAgICAgICByZXF1aXJlZF9hcHByb3ZpbmdfcmV2aWV3X2NvdW50OiAxLFxuICAgICAgICAgIHJlcXVpcmVfY29kZV9vd25lcl9yZXZpZXdzOiByZXF1aXJlQ29kZU93bmVyUmV2aWV3cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFzc2VydEVycm9yKGUpO1xuICAgICAgaWYgKFxuICAgICAgICBlLm1lc3NhZ2UuaW5jbHVkZXMoXG4gICAgICAgICAgJ1VwZ3JhZGUgdG8gR2l0SHViIFBybyBvciBtYWtlIHRoaXMgcmVwb3NpdG9yeSBwdWJsaWMgdG8gZW5hYmxlIHRoaXMgZmVhdHVyZScsXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICAnQnJhbmNoIHByb3RlY3Rpb24gd2FzIG5vdCBlbmFibGVkIGFzIGl0IHJlcXVpcmVzIEdpdEh1YiBQcm8gZm9yIHByaXZhdGUgcmVwb3NpdG9yaWVzJyxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgdHJ5T25jZSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghZS5tZXNzYWdlLmluY2x1ZGVzKCdCcmFuY2ggbm90IGZvdW5kJykpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgLy8gR2l0SHViIGhhcyBldmVudHVhbCBjb25zaXN0ZW5jeS4gRmFpbCBzaWxlbnRseSwgd2FpdCwgYW5kIHRyeSBhZ2Fpbi5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNjAwKSk7XG4gICAgYXdhaXQgdHJ5T25jZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2l0Q29tbWl0TWVzc2FnZShcbiAgZ2l0Q29tbWl0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBjb25maWc6IENvbmZpZyxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBnaXRDb21taXRNZXNzYWdlXG4gICAgPyBnaXRDb21taXRNZXNzYWdlXG4gICAgOiBjb25maWcuZ2V0T3B0aW9uYWxTdHJpbmcoJ3NjYWZmb2xkZXIuZGVmYXVsdENvbW1pdE1lc3NhZ2UnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/actions/helpers.ts\n");

/***/ }),

/***/ "./src/plugins/actions/index.ts":
/*!**************************************!*\
  !*** ./src/plugins/actions/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCatalogCheckAndRegister\": () => (/* reexport safe */ _checkAndRegister__WEBPACK_IMPORTED_MODULE_1__.createCatalogCheckAndRegister),\n/* harmony export */   \"createGitlabCreateOrMergeAction\": () => (/* reexport safe */ _gitlabCreateOrMerge__WEBPACK_IMPORTED_MODULE_2__.createGitlabCreateOrMergeAction),\n/* harmony export */   \"createNewFileAction\": () => (/* reexport safe */ _custom__WEBPACK_IMPORTED_MODULE_0__.createNewFileAction)\n/* harmony export */ });\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom */ \"./src/plugins/actions/custom.ts\");\n/* harmony import */ var _checkAndRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkAndRegister */ \"./src/plugins/actions/checkAndRegister.ts\");\n/* harmony import */ var _gitlabCreateOrMerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gitlabCreateOrMerge */ \"./src/plugins/actions/gitlabCreateOrMerge.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9hY3Rpb25zL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGNyZWF0ZU5ld0ZpbGVBY3Rpb24gfSBmcm9tICcuL2N1c3RvbSc7XG5leHBvcnQgeyBjcmVhdGVDYXRhbG9nQ2hlY2tBbmRSZWdpc3RlciB9IGZyb20gJy4vY2hlY2tBbmRSZWdpc3Rlcic7XG5leHBvcnQgeyBjcmVhdGVHaXRsYWJDcmVhdGVPck1lcmdlQWN0aW9uIH0gZnJvbSAnLi9naXRsYWJDcmVhdGVPck1lcmdlJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/actions/index.ts\n");

/***/ }),

/***/ "./src/plugins/actions/serializeDirectoryContents.ts":
/*!***********************************************************!*\
  !*** ./src/plugins/actions/serializeDirectoryContents.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isExecutable\": () => (/* binding */ isExecutable),\n/* harmony export */   \"serializeDirectoryContents\": () => (/* binding */ serializeDirectoryContents)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! globby */ \"globby\");\n/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(globby__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var p_limit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! p-limit */ \"p-limit\");\n/* harmony import */ var p_limit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(p_limit__WEBPACK_IMPORTED_MODULE_4__);\n/*\n * Copyright 2022 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n\nconst DEFAULT_GLOB_PATTERNS = [\n    './**',\n    '!.git'\n];\nconst isExecutable = (fileMode)=>{\n    if (!fileMode) {\n        return false;\n    }\n    const executeBitMask = 0o000111;\n    const res = fileMode & executeBitMask;\n    return res > 0;\n};\nasync function asyncFilter(array, callback) {\n    const filterMap = await Promise.all(array.map(callback));\n    return array.filter((_value, index)=>filterMap[index]);\n}\nasync function serializeDirectoryContents(sourcePath, options) {\n    var _options_globPatterns;\n    const paths = await globby__WEBPACK_IMPORTED_MODULE_3___default()((_options_globPatterns = options === null || options === void 0 ? void 0 : options.globPatterns) !== null && _options_globPatterns !== void 0 ? _options_globPatterns : DEFAULT_GLOB_PATTERNS, {\n        cwd: sourcePath,\n        dot: true,\n        gitignore: options === null || options === void 0 ? void 0 : options.gitignore,\n        followSymbolicLinks: false,\n        // In order to pick up 'broken' symlinks, we oxymoronically request files AND folders yet we filter out folders\n        // This is because broken symlinks aren't classed as files so we need to glob everything\n        onlyFiles: false,\n        objectMode: true,\n        stats: true\n    });\n    const limiter = p_limit__WEBPACK_IMPORTED_MODULE_4___default()(10);\n    // @ts-ignore\n    const valid = await asyncFilter(paths, async ({ dirent , path  })=>{\n        if (dirent.isDirectory()) return false;\n        if (!dirent.isSymbolicLink()) return true;\n        const safePath = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.resolveSafeChildPath)(sourcePath, path);\n        // we only want files that don't exist\n        try {\n            await fs__WEBPACK_IMPORTED_MODULE_2__.promises.stat(safePath);\n            return false;\n        } catch (e) {\n            return (0,_backstage_errors__WEBPACK_IMPORTED_MODULE_1__.isError)(e) && e.code === 'ENOENT';\n        }\n    });\n    return Promise.all(// @ts-ignore\n    valid.map(async ({ dirent , path , stats  })=>{\n        return {\n            path,\n            content: await limiter(async ()=>{\n                const absFilePath = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.resolveSafeChildPath)(sourcePath, path);\n                if (dirent.isSymbolicLink()) {\n                    return fs__WEBPACK_IMPORTED_MODULE_2__.promises.readlink(absFilePath, 'buffer');\n                }\n                return fs__WEBPACK_IMPORTED_MODULE_2__.promises.readFile(absFilePath);\n            }),\n            executable: isExecutable(stats === null || stats === void 0 ? void 0 : stats.mode),\n            symlink: dirent.isSymbolicLink()\n        };\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL3NlcmlhbGl6ZURpcmVjdG9yeUNvbnRlbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYWN0aW9ucy9zZXJpYWxpemVEaXJlY3RvcnlDb250ZW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjIgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHJlc29sdmVTYWZlQ2hpbGRQYXRoIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSAnQGJhY2tzdGFnZS9lcnJvcnMnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5pbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgbGltaXRlckZhY3RvcnkgZnJvbSAncC1saW1pdCc7XG5cbmNvbnN0IERFRkFVTFRfR0xPQl9QQVRURVJOUyA9IFsnLi8qKicsICchLmdpdCddO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZWRGaWxlIHtcbiAgcGF0aDogc3RyaW5nO1xuICBjb250ZW50OiBCdWZmZXI7XG4gIGV4ZWN1dGFibGU/OiBib29sZWFuO1xuICBzeW1saW5rPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGlzRXhlY3V0YWJsZSA9IChmaWxlTW9kZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmICghZmlsZU1vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBleGVjdXRlQml0TWFzayA9IDBvMDAwMTExO1xuICBjb25zdCByZXMgPSBmaWxlTW9kZSAmIGV4ZWN1dGVCaXRNYXNrO1xuICByZXR1cm4gcmVzID4gMDtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGFzeW5jRmlsdGVyPFQ+KFxuICBhcnJheTogVFtdLFxuICBjYWxsYmFjazogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBQcm9taXNlPGJvb2xlYW4+LFxuKTogUHJvbWlzZTxUW10+IHtcbiAgY29uc3QgZmlsdGVyTWFwID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyYXkubWFwKGNhbGxiYWNrKSk7XG4gIHJldHVybiBhcnJheS5maWx0ZXIoKF92YWx1ZSwgaW5kZXgpID0+IGZpbHRlck1hcFtpbmRleF0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VyaWFsaXplRGlyZWN0b3J5Q29udGVudHMoXG4gIHNvdXJjZVBhdGg6IHN0cmluZyxcbiAgb3B0aW9ucz86IHtcbiAgICBnaXRpZ25vcmU/OiBib29sZWFuO1xuICAgIGdsb2JQYXR0ZXJucz86IHN0cmluZ1tdO1xuICB9LFxuKTogUHJvbWlzZTxTZXJpYWxpemVkRmlsZVtdPiB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2xvYmJ5KG9wdGlvbnM/Lmdsb2JQYXR0ZXJucyA/PyBERUZBVUxUX0dMT0JfUEFUVEVSTlMsIHtcbiAgICBjd2Q6IHNvdXJjZVBhdGgsXG4gICAgZG90OiB0cnVlLFxuICAgIGdpdGlnbm9yZTogb3B0aW9ucz8uZ2l0aWdub3JlLFxuICAgIGZvbGxvd1N5bWJvbGljTGlua3M6IGZhbHNlLFxuICAgIC8vIEluIG9yZGVyIHRvIHBpY2sgdXAgJ2Jyb2tlbicgc3ltbGlua3MsIHdlIG94eW1vcm9uaWNhbGx5IHJlcXVlc3QgZmlsZXMgQU5EIGZvbGRlcnMgeWV0IHdlIGZpbHRlciBvdXQgZm9sZGVyc1xuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSBicm9rZW4gc3ltbGlua3MgYXJlbid0IGNsYXNzZWQgYXMgZmlsZXMgc28gd2UgbmVlZCB0byBnbG9iIGV2ZXJ5dGhpbmdcbiAgICBvbmx5RmlsZXM6IGZhbHNlLFxuICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgc3RhdHM6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IGxpbWl0ZXIgPSBsaW1pdGVyRmFjdG9yeSgxMCk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCB2YWxpZCA9IGF3YWl0IGFzeW5jRmlsdGVyKHBhdGhzLCBhc3luYyAoeyBkaXJlbnQsIHBhdGggfSkgPT4ge1xuICAgIGlmIChkaXJlbnQuaXNEaXJlY3RvcnkoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghZGlyZW50LmlzU3ltYm9saWNMaW5rKCkpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3Qgc2FmZVBhdGggPSByZXNvbHZlU2FmZUNoaWxkUGF0aChzb3VyY2VQYXRoLCBwYXRoKTtcblxuICAgIC8vIHdlIG9ubHkgd2FudCBmaWxlcyB0aGF0IGRvbid0IGV4aXN0XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZzLnN0YXQoc2FmZVBhdGgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBpc0Vycm9yKGUpICYmIGUuY29kZSA9PT0gJ0VOT0VOVCc7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhbGlkLm1hcChhc3luYyAoeyBkaXJlbnQsIHBhdGgsIHN0YXRzIH0pID0+ICh7XG4gICAgICBwYXRoLFxuICAgICAgY29udGVudDogYXdhaXQgbGltaXRlcihhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFic0ZpbGVQYXRoID0gcmVzb2x2ZVNhZmVDaGlsZFBhdGgoc291cmNlUGF0aCwgcGF0aCk7XG4gICAgICAgIGlmIChkaXJlbnQuaXNTeW1ib2xpY0xpbmsoKSkge1xuICAgICAgICAgIHJldHVybiBmcy5yZWFkbGluayhhYnNGaWxlUGF0aCwgJ2J1ZmZlcicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcy5yZWFkRmlsZShhYnNGaWxlUGF0aCk7XG4gICAgICB9KSxcbiAgICAgIGV4ZWN1dGFibGU6IGlzRXhlY3V0YWJsZShzdGF0cz8ubW9kZSksXG4gICAgICBzeW1saW5rOiBkaXJlbnQuaXNTeW1ib2xpY0xpbmsoKSxcbiAgICB9KSksXG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/actions/serializeDirectoryContents.ts\n");

/***/ }),

/***/ "./src/plugins/actions/util.ts":
/*!*************************************!*\
  !*** ./src/plugins/actions/util.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRepoSourceDirectory\": () => (/* binding */ getRepoSourceDirectory),\n/* harmony export */   \"isExecutable\": () => (/* binding */ isExecutable),\n/* harmony export */   \"parseRepoUrl\": () => (/* binding */ parseRepoUrl)\n/* harmony export */ });\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * Copyright 2021 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\nconst getRepoSourceDirectory = (workspacePath, sourcePath)=>{\n    if (sourcePath) {\n        const safeSuffix = (0,path__WEBPACK_IMPORTED_MODULE_2__.normalize)(sourcePath).replace(/^(\\.\\.(\\/|\\\\|$))+/, '');\n        const path = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(workspacePath, safeSuffix);\n        if (!(0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.isChildPath)(workspacePath, path)) {\n            throw new Error('Invalid source path');\n        }\n        return path;\n    }\n    return workspacePath;\n};\nconst parseRepoUrl = (repoUrl, integrations)=>{\n    var _integrations_byHost;\n    let parsed;\n    try {\n        parsed = new URL(`https://${repoUrl}`);\n    } catch (error) {\n        throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_0__.InputError(`Invalid repo URL passed to publisher, got ${repoUrl}, ${error}`);\n    }\n    const host = parsed.host;\n    var _parsed_searchParams_get;\n    const owner = (_parsed_searchParams_get = parsed.searchParams.get('owner')) !== null && _parsed_searchParams_get !== void 0 ? _parsed_searchParams_get : undefined;\n    var _parsed_searchParams_get1;\n    const organization = (_parsed_searchParams_get1 = parsed.searchParams.get('organization')) !== null && _parsed_searchParams_get1 !== void 0 ? _parsed_searchParams_get1 : undefined;\n    var _parsed_searchParams_get2;\n    const workspace = (_parsed_searchParams_get2 = parsed.searchParams.get('workspace')) !== null && _parsed_searchParams_get2 !== void 0 ? _parsed_searchParams_get2 : undefined;\n    var _parsed_searchParams_get3;\n    const project = (_parsed_searchParams_get3 = parsed.searchParams.get('project')) !== null && _parsed_searchParams_get3 !== void 0 ? _parsed_searchParams_get3 : undefined;\n    const type = (_integrations_byHost = integrations.byHost(host)) === null || _integrations_byHost === void 0 ? void 0 : _integrations_byHost.type;\n    if (!type) {\n        throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_0__.InputError(`No matching integration configuration for host ${host}, please check your integrations config`);\n    }\n    if (type === 'bitbucket') {\n        if (host === 'bitbucket.org') {\n            if (!workspace) {\n                throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_0__.InputError(`Invalid repo URL passed to publisher: ${repoUrl}, missing workspace`);\n            }\n        }\n        if (!project) {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_0__.InputError(`Invalid repo URL passed to publisher: ${repoUrl}, missing project`);\n        }\n    } else {\n        if (!owner && type !== 'gerrit') {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_0__.InputError(`Invalid repo URL passed to publisher: ${repoUrl}, missing owner`);\n        }\n    }\n    const repo = parsed.searchParams.get('repo');\n    if (!repo) {\n        throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_0__.InputError(`Invalid repo URL passed to publisher: ${repoUrl}, missing repo`);\n    }\n    return {\n        host,\n        owner,\n        repo,\n        organization,\n        workspace,\n        project\n    };\n};\nconst isExecutable = (fileMode)=>{\n    const executeBitMask = 0o000111;\n    const res = fileMode & executeBitMask;\n    return res > 0;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hY3Rpb25zL3V0aWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFHQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBa0JBO0FBZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FjdGlvbnMvdXRpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjEgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICdAYmFja3N0YWdlL2Vycm9ycyc7XG5pbXBvcnQgeyBpc0NoaWxkUGF0aCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgam9pbiBhcyBqb2luUGF0aCwgbm9ybWFsaXplIGFzIG5vcm1hbGl6ZVBhdGggfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IFNjbUludGVncmF0aW9uUmVnaXN0cnkgfSBmcm9tICdAYmFja3N0YWdlL2ludGVncmF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGdldFJlcG9Tb3VyY2VEaXJlY3RvcnkgPSAoXG4gIHdvcmtzcGFjZVBhdGg6IHN0cmluZyxcbiAgc291cmNlUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuKSA9PiB7XG4gIGlmIChzb3VyY2VQYXRoKSB7XG4gICAgY29uc3Qgc2FmZVN1ZmZpeCA9IG5vcm1hbGl6ZVBhdGgoc291cmNlUGF0aCkucmVwbGFjZShcbiAgICAgIC9eKFxcLlxcLihcXC98XFxcXHwkKSkrLyxcbiAgICAgICcnLFxuICAgICk7XG4gICAgY29uc3QgcGF0aCA9IGpvaW5QYXRoKHdvcmtzcGFjZVBhdGgsIHNhZmVTdWZmaXgpO1xuICAgIGlmICghaXNDaGlsZFBhdGgod29ya3NwYWNlUGF0aCwgcGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzb3VyY2UgcGF0aCcpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICByZXR1cm4gd29ya3NwYWNlUGF0aDtcbn07XG5leHBvcnQgdHlwZSBSZXBvU3BlYyA9IHtcbiAgcmVwbzogc3RyaW5nO1xuICBob3N0OiBzdHJpbmc7XG4gIG93bmVyPzogc3RyaW5nO1xuICBvcmdhbml6YXRpb24/OiBzdHJpbmc7XG4gIHdvcmtzcGFjZT86IHN0cmluZztcbiAgcHJvamVjdD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZVJlcG9VcmwgPSAoXG4gIHJlcG9Vcmw6IHN0cmluZyxcbiAgaW50ZWdyYXRpb25zOiBTY21JbnRlZ3JhdGlvblJlZ2lzdHJ5LFxuKTogUmVwb1NwZWMgPT4ge1xuICBsZXQgcGFyc2VkO1xuICB0cnkge1xuICAgIHBhcnNlZCA9IG5ldyBVUkwoYGh0dHBzOi8vJHtyZXBvVXJsfWApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBJbnB1dEVycm9yKFxuICAgICAgYEludmFsaWQgcmVwbyBVUkwgcGFzc2VkIHRvIHB1Ymxpc2hlciwgZ290ICR7cmVwb1VybH0sICR7ZXJyb3J9YCxcbiAgICApO1xuICB9XG4gIGNvbnN0IGhvc3QgPSBwYXJzZWQuaG9zdDtcbiAgY29uc3Qgb3duZXIgPSBwYXJzZWQuc2VhcmNoUGFyYW1zLmdldCgnb3duZXInKSA/PyB1bmRlZmluZWQ7XG4gIGNvbnN0IG9yZ2FuaXphdGlvbiA9IHBhcnNlZC5zZWFyY2hQYXJhbXMuZ2V0KCdvcmdhbml6YXRpb24nKSA/PyB1bmRlZmluZWQ7XG4gIGNvbnN0IHdvcmtzcGFjZSA9IHBhcnNlZC5zZWFyY2hQYXJhbXMuZ2V0KCd3b3Jrc3BhY2UnKSA/PyB1bmRlZmluZWQ7XG4gIGNvbnN0IHByb2plY3QgPSBwYXJzZWQuc2VhcmNoUGFyYW1zLmdldCgncHJvamVjdCcpID8/IHVuZGVmaW5lZDtcblxuICBjb25zdCB0eXBlID0gaW50ZWdyYXRpb25zLmJ5SG9zdChob3N0KT8udHlwZTtcblxuICBpZiAoIXR5cGUpIHtcbiAgICB0aHJvdyBuZXcgSW5wdXRFcnJvcihcbiAgICAgIGBObyBtYXRjaGluZyBpbnRlZ3JhdGlvbiBjb25maWd1cmF0aW9uIGZvciBob3N0ICR7aG9zdH0sIHBsZWFzZSBjaGVjayB5b3VyIGludGVncmF0aW9ucyBjb25maWdgLFxuICAgICk7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2JpdGJ1Y2tldCcpIHtcbiAgICBpZiAoaG9zdCA9PT0gJ2JpdGJ1Y2tldC5vcmcnKSB7XG4gICAgICBpZiAoIXdvcmtzcGFjZSkge1xuICAgICAgICB0aHJvdyBuZXcgSW5wdXRFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCByZXBvIFVSTCBwYXNzZWQgdG8gcHVibGlzaGVyOiAke3JlcG9Vcmx9LCBtaXNzaW5nIHdvcmtzcGFjZWAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgdGhyb3cgbmV3IElucHV0RXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIHJlcG8gVVJMIHBhc3NlZCB0byBwdWJsaXNoZXI6ICR7cmVwb1VybH0sIG1pc3NpbmcgcHJvamVjdGAsXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoIW93bmVyICYmIHR5cGUgIT09ICdnZXJyaXQnKSB7XG4gICAgICB0aHJvdyBuZXcgSW5wdXRFcnJvcihcbiAgICAgICAgYEludmFsaWQgcmVwbyBVUkwgcGFzc2VkIHRvIHB1Ymxpc2hlcjogJHtyZXBvVXJsfSwgbWlzc2luZyBvd25lcmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlcG8gPSBwYXJzZWQuc2VhcmNoUGFyYW1zLmdldCgncmVwbycpO1xuICBpZiAoIXJlcG8pIHtcbiAgICB0aHJvdyBuZXcgSW5wdXRFcnJvcihcbiAgICAgIGBJbnZhbGlkIHJlcG8gVVJMIHBhc3NlZCB0byBwdWJsaXNoZXI6ICR7cmVwb1VybH0sIG1pc3NpbmcgcmVwb2AsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7IGhvc3QsIG93bmVyLCByZXBvLCBvcmdhbml6YXRpb24sIHdvcmtzcGFjZSwgcHJvamVjdCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRXhlY3V0YWJsZSA9IChmaWxlTW9kZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGV4ZWN1dGVCaXRNYXNrID0gMG8wMDAxMTE7XG4gIGNvbnN0IHJlcyA9IGZpbGVNb2RlICYgZXhlY3V0ZUJpdE1hc2s7XG4gIHJldHVybiByZXMgPiAwO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/actions/util.ts\n");

/***/ }),

/***/ "./src/plugins/adr.ts":
/*!****************************!*\
  !*** ./src/plugins/adr.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-adr-backend */ \"@backstage/plugin-adr-backend\");\n/* harmony import */ var _backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        reader: env.reader,\n        cacheClient: env.cache.getClient(),\n        logger: env.logger\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hZHIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9hZHIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYWRyLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgcmVhZGVyOiBlbnYucmVhZGVyLFxuICAgIGNhY2hlQ2xpZW50OiBlbnYuY2FjaGUuZ2V0Q2xpZW50KCksXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/adr.ts\n");

/***/ }),

/***/ "./src/plugins/announcements.ts":
/*!**************************************!*\
  !*** ./src/plugins/announcements.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _k_phoen_backstage_plugin_announcements_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @k-phoen/backstage-plugin-announcements-backend */ \"@k-phoen/backstage-plugin-announcements-backend\");\n/* harmony import */ var _k_phoen_backstage_plugin_announcements_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_k_phoen_backstage_plugin_announcements_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin({ logger , database  }) {\n    const announcementsContext = await (0,_k_phoen_backstage_plugin_announcements_backend__WEBPACK_IMPORTED_MODULE_0__.buildAnnouncementsContext)({\n        logger: logger,\n        database: database\n    });\n    return await (0,_k_phoen_backstage_plugin_announcements_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)(announcementsContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hbm5vdW5jZW1lbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYW5ub3VuY2VtZW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWlsZEFubm91bmNlbWVudHNDb250ZXh0LCBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAay1waG9lbi9iYWNrc3RhZ2UtcGx1Z2luLWFubm91bmNlbWVudHMtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oe1xuICBsb2dnZXIsXG4gIGRhdGFiYXNlLFxufTogUGx1Z2luRW52aXJvbm1lbnQpOiBQcm9taXNlPFJvdXRlcj4ge1xuICBjb25zdCBhbm5vdW5jZW1lbnRzQ29udGV4dCA9IGF3YWl0IGJ1aWxkQW5ub3VuY2VtZW50c0NvbnRleHQoe1xuICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgIGRhdGFiYXNlOiBkYXRhYmFzZVxuICB9KTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKGFubm91bmNlbWVudHNDb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/announcements.ts\n");

/***/ }),

/***/ "./src/plugins/app.ts":
/*!****************************!*\
  !*** ./src/plugins/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-app-backend */ \"@backstage/plugin-app-backend\");\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        appPackageName: 'app'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hcHAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hcHAtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRhdGFiYXNlOiBlbnYuZGF0YWJhc2UsXG4gICAgYXBwUGFja2FnZU5hbWU6ICdhcHAnLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/app.ts\n");

/***/ }),

/***/ "./src/plugins/auth.ts":
/*!*****************************!*\
  !*** ./src/plugins/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-auth-backend */ \"@backstage/plugin-auth-backend\");\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/catalog-model */ \"@backstage/catalog-model\");\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        ...env,\n        providerFactories: {\n            ..._backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.defaultAuthProviderFactories,\n            gitlab: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.gitlab.create({\n                signIn: {\n                    resolver: async ({ profile: { email  }  }, ctx)=>{\n                        var _email_split;\n                        const [id] = (_email_split = email === null || email === void 0 ? void 0 : email.split('@')) !== null && _email_split !== void 0 ? _email_split : '';\n                        const entityRef = {\n                            kind: 'User',\n                            namespace: _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_NAMESPACE,\n                            name: id\n                        };\n                        try {\n                            await ctx.findCatalogUser({\n                                entityRef\n                            });\n                        } catch (error) {\n                            if (error instanceof _backstage_errors__WEBPACK_IMPORTED_MODULE_2__.NotFoundError) {\n                                // findCatalogUser will throw a NotFoundError if the User is not found in the Catalog\n                                const userEntityRef = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.stringifyEntityRef)(entityRef);\n                                return ctx.issueToken({\n                                    claims: {\n                                        sub: userEntityRef,\n                                        ent: [\n                                            userEntityRef\n                                        ]\n                                    }\n                                });\n                            }\n                        }\n                        // User exists sign them in with their Catalog User\n                        return ctx.signInWithCatalogUser({\n                            entityRef\n                        });\n                    }\n                }\n            }),\n            github: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.create({\n                signIn: {\n                    async resolver ({ result: { fullProfile  }  }, ctx) {\n                        const id = fullProfile.username;\n                        if (!id) {\n                            throw new Error(`GitHub user profile does not contain a username`);\n                        }\n                        const entityRef = {\n                            kind: 'User',\n                            namespace: _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_NAMESPACE,\n                            name: id.toLocaleLowerCase('en-US')\n                        };\n                        try {\n                            await ctx.findCatalogUser({\n                                entityRef\n                            });\n                        } catch (error) {\n                            if (error instanceof _backstage_errors__WEBPACK_IMPORTED_MODULE_2__.NotFoundError) {\n                                // findCatalogUser will throw a NotFoundError if the User is not found in the Catalog\n                                const userEntityRef = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.stringifyEntityRef)(entityRef);\n                                return ctx.issueToken({\n                                    claims: {\n                                        sub: userEntityRef,\n                                        ent: [\n                                            userEntityRef\n                                        ]\n                                    }\n                                });\n                            }\n                        }\n                        // User exists sign them in with their Catalog User\n                        return ctx.signInWithCatalogUser({\n                            entityRef\n                        });\n                    }\n                }\n            }),\n            microsoft: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.microsoft.create({\n                signIn: {\n                    resolver: async ({ profile: { email  }  }, ctx)=>{\n                        var _email_split;\n                        const [id] = (_email_split = email === null || email === void 0 ? void 0 : email.split('@')) !== null && _email_split !== void 0 ? _email_split : '';\n                        const entityRef = {\n                            kind: 'User',\n                            namespace: _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_NAMESPACE,\n                            name: id\n                        };\n                        try {\n                            await ctx.findCatalogUser({\n                                entityRef\n                            });\n                        } catch (error) {\n                            if (error instanceof _backstage_errors__WEBPACK_IMPORTED_MODULE_2__.NotFoundError) {\n                                // findCatalogUser will throw a NotFoundError if the User is not found in the Catalog\n                                const userEntityRef = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.stringifyEntityRef)(entityRef);\n                                return ctx.issueToken({\n                                    claims: {\n                                        sub: userEntityRef,\n                                        ent: [\n                                            userEntityRef\n                                        ]\n                                    }\n                                });\n                            }\n                        }\n                        // User exists sign them in with their Catalog User\n                        return ctx.signInWithCatalogUser({\n                            entityRef\n                        });\n                    }\n                }\n            }),\n            oidc: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.oidc.create({\n                signIn: {\n                    resolver: async ({ profile: { email  }  }, ctx)=>{\n                        var _email_split;\n                        const [id] = (_email_split = email === null || email === void 0 ? void 0 : email.split('@')) !== null && _email_split !== void 0 ? _email_split : '';\n                        const entityRef = {\n                            kind: 'User',\n                            namespace: _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_NAMESPACE,\n                            name: id\n                        };\n                        try {\n                            await ctx.findCatalogUser({\n                                entityRef\n                            });\n                        } catch (error) {\n                            if (error instanceof _backstage_errors__WEBPACK_IMPORTED_MODULE_2__.NotFoundError) {\n                                // findCatalogUser will throw a NotFoundError if the User is not found in the Catalog\n                                const userEntityRef = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.stringifyEntityRef)(entityRef);\n                                return ctx.issueToken({\n                                    claims: {\n                                        sub: userEntityRef,\n                                        ent: [\n                                            userEntityRef\n                                        ]\n                                    }\n                                });\n                            }\n                        }\n                        // User exists sign them in with their Catalog User\n                        return ctx.signInWithCatalogUser({\n                            entityRef\n                        });\n                    }\n                }\n            })\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVSb3V0ZXIsXG4gIHByb3ZpZGVycyxcbiAgZGVmYXVsdEF1dGhQcm92aWRlckZhY3Rvcmllcyxcbn0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYXV0aC1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBERUZBVUxUX05BTUVTUEFDRSxcbiAgc3RyaW5naWZ5RW50aXR5UmVmLFxufSBmcm9tICdAYmFja3N0YWdlL2NhdGFsb2ctbW9kZWwnO1xuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJ0BiYWNrc3RhZ2UvZXJyb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgLi4uZW52LFxuICAgIHByb3ZpZGVyRmFjdG9yaWVzOiB7XG4gICAgICAuLi5kZWZhdWx0QXV0aFByb3ZpZGVyRmFjdG9yaWVzLFxuXG4gICAgICBnaXRsYWI6IHByb3ZpZGVycy5naXRsYWIuY3JlYXRlKHtcbiAgICAgICAgc2lnbkluOiB7XG4gICAgICAgICAgcmVzb2x2ZXI6IGFzeW5jICh7IHByb2ZpbGU6IHsgZW1haWwgfSB9LCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtpZF0gPSBlbWFpbD8uc3BsaXQoJ0AnKSA/PyAnJztcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eVJlZiA9IHtcbiAgICAgICAgICAgICAga2luZDogJ1VzZXInLFxuICAgICAgICAgICAgICBuYW1lc3BhY2U6IERFRkFVTFRfTkFNRVNQQUNFLFxuICAgICAgICAgICAgICBuYW1lOiBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBjdHguZmluZENhdGFsb2dVc2VyKHsgZW50aXR5UmVmIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm90Rm91bmRFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGZpbmRDYXRhbG9nVXNlciB3aWxsIHRocm93IGEgTm90Rm91bmRFcnJvciBpZiB0aGUgVXNlciBpcyBub3QgZm91bmQgaW4gdGhlIENhdGFsb2dcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRW50aXR5UmVmID0gc3RyaW5naWZ5RW50aXR5UmVmKGVudGl0eVJlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5pc3N1ZVRva2VuKHtcbiAgICAgICAgICAgICAgICAgIGNsYWltczoge1xuICAgICAgICAgICAgICAgICAgICBzdWI6IHVzZXJFbnRpdHlSZWYsXG4gICAgICAgICAgICAgICAgICAgIGVudDogW3VzZXJFbnRpdHlSZWZdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlciBleGlzdHMgc2lnbiB0aGVtIGluIHdpdGggdGhlaXIgQ2F0YWxvZyBVc2VyXG4gICAgICAgICAgICByZXR1cm4gY3R4LnNpZ25JbldpdGhDYXRhbG9nVXNlcih7IGVudGl0eVJlZiB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG5cbiAgICAgIGdpdGh1YjogcHJvdmlkZXJzLmdpdGh1Yi5jcmVhdGUoe1xuICAgICAgICBzaWduSW46IHtcbiAgICAgICAgICBhc3luYyByZXNvbHZlcih7IHJlc3VsdDogeyBmdWxsUHJvZmlsZSB9IH0sIGN0eCkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBmdWxsUHJvZmlsZS51c2VybmFtZTtcbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBHaXRIdWIgdXNlciBwcm9maWxlIGRvZXMgbm90IGNvbnRhaW4gYSB1c2VybmFtZWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbnRpdHlSZWYgPSB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdVc2VyJyxcbiAgICAgICAgICAgICAgbmFtZXNwYWNlOiBERUZBVUxUX05BTUVTUEFDRSxcbiAgICAgICAgICAgICAgbmFtZTogaWQudG9Mb2NhbGVMb3dlckNhc2UoJ2VuLVVTJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgY3R4LmZpbmRDYXRhbG9nVXNlcih7IGVudGl0eVJlZiB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vdEZvdW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kQ2F0YWxvZ1VzZXIgd2lsbCB0aHJvdyBhIE5vdEZvdW5kRXJyb3IgaWYgdGhlIFVzZXIgaXMgbm90IGZvdW5kIGluIHRoZSBDYXRhbG9nXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckVudGl0eVJlZiA9IHN0cmluZ2lmeUVudGl0eVJlZihlbnRpdHlSZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHguaXNzdWVUb2tlbih7XG4gICAgICAgICAgICAgICAgICBjbGFpbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3ViOiB1c2VyRW50aXR5UmVmLFxuICAgICAgICAgICAgICAgICAgICBlbnQ6IFt1c2VyRW50aXR5UmVmXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZXIgZXhpc3RzIHNpZ24gdGhlbSBpbiB3aXRoIHRoZWlyIENhdGFsb2cgVXNlclxuICAgICAgICAgICAgcmV0dXJuIGN0eC5zaWduSW5XaXRoQ2F0YWxvZ1VzZXIoeyBlbnRpdHlSZWYgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuXG4gICAgICBtaWNyb3NvZnQ6IHByb3ZpZGVycy5taWNyb3NvZnQuY3JlYXRlKHtcbiAgICAgICAgc2lnbkluOiB7XG4gICAgICAgICAgcmVzb2x2ZXI6IGFzeW5jICh7IHByb2ZpbGU6IHsgZW1haWwgfSB9LCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtpZF0gPSBlbWFpbD8uc3BsaXQoJ0AnKSA/PyAnJztcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eVJlZiA9IHtcbiAgICAgICAgICAgICAga2luZDogJ1VzZXInLFxuICAgICAgICAgICAgICBuYW1lc3BhY2U6IERFRkFVTFRfTkFNRVNQQUNFLFxuICAgICAgICAgICAgICBuYW1lOiBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBjdHguZmluZENhdGFsb2dVc2VyKHsgZW50aXR5UmVmIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm90Rm91bmRFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGZpbmRDYXRhbG9nVXNlciB3aWxsIHRocm93IGEgTm90Rm91bmRFcnJvciBpZiB0aGUgVXNlciBpcyBub3QgZm91bmQgaW4gdGhlIENhdGFsb2dcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRW50aXR5UmVmID0gc3RyaW5naWZ5RW50aXR5UmVmKGVudGl0eVJlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC5pc3N1ZVRva2VuKHtcbiAgICAgICAgICAgICAgICAgIGNsYWltczoge1xuICAgICAgICAgICAgICAgICAgICBzdWI6IHVzZXJFbnRpdHlSZWYsXG4gICAgICAgICAgICAgICAgICAgIGVudDogW3VzZXJFbnRpdHlSZWZdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlciBleGlzdHMgc2lnbiB0aGVtIGluIHdpdGggdGhlaXIgQ2F0YWxvZyBVc2VyXG4gICAgICAgICAgICByZXR1cm4gY3R4LnNpZ25JbldpdGhDYXRhbG9nVXNlcih7IGVudGl0eVJlZiB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG5cbiAgICAgIG9pZGM6IHByb3ZpZGVycy5vaWRjLmNyZWF0ZSh7XG4gICAgICAgIHNpZ25Jbjoge1xuICAgICAgICAgIHJlc29sdmVyOiBhc3luYyAoeyBwcm9maWxlOiB7IGVtYWlsIH0gfSwgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbaWRdID0gZW1haWw/LnNwbGl0KCdAJykgPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBlbnRpdHlSZWYgPSB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdVc2VyJyxcbiAgICAgICAgICAgICAgbmFtZXNwYWNlOiBERUZBVUxUX05BTUVTUEFDRSxcbiAgICAgICAgICAgICAgbmFtZTogaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgY3R4LmZpbmRDYXRhbG9nVXNlcih7IGVudGl0eVJlZiB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vdEZvdW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kQ2F0YWxvZ1VzZXIgd2lsbCB0aHJvdyBhIE5vdEZvdW5kRXJyb3IgaWYgdGhlIFVzZXIgaXMgbm90IGZvdW5kIGluIHRoZSBDYXRhbG9nXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckVudGl0eVJlZiA9IHN0cmluZ2lmeUVudGl0eVJlZihlbnRpdHlSZWYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHguaXNzdWVUb2tlbih7XG4gICAgICAgICAgICAgICAgICBjbGFpbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3ViOiB1c2VyRW50aXR5UmVmLFxuICAgICAgICAgICAgICAgICAgICBlbnQ6IFt1c2VyRW50aXR5UmVmXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZXIgZXhpc3RzIHNpZ24gdGhlbSBpbiB3aXRoIHRoZWlyIENhdGFsb2cgVXNlclxuICAgICAgICAgICAgcmV0dXJuIGN0eC5zaWduSW5XaXRoQ2F0YWxvZ1VzZXIoeyBlbnRpdHlSZWYgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/auth.ts\n");

/***/ }),

/***/ "./src/plugins/catalog.ts":
/*!********************************!*\
  !*** ./src/plugins/catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_catalog_backend_module_gitlab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-catalog-backend-module-gitlab */ \"@backstage/plugin-catalog-backend-module-gitlab\");\n/* harmony import */ var _backstage_plugin_catalog_backend_module_gitlab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend_module_gitlab__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend-module-openapi */ \"@backstage/plugin-catalog-backend-module-openapi\");\n/* harmony import */ var _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import { GitlabDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';\nasync function createPlugin(env) {\n    const builder = await _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__.CatalogBuilder.create(env);\n    // Default Polling Time is set to 2 minutes (120 seconds) - passing 80 as seconds given interval is 1.5 times the polling time\n    builder.setProcessingIntervalSeconds(80);\n    // builder.addEntityProvider(\n    //   ...GitlabDiscoveryEntityProvider.fromConfig(env.config, {\n    //     logger: env.logger,\n    //     schedule: env.scheduler.createScheduledTaskRunner({\n    //       frequency: { minutes: 30 },\n    //       timeout: { minutes: 3 },\n    //     }),\n    //   }),\n    // );\n    builder.addProcessor(_backstage_plugin_catalog_backend_module_gitlab__WEBPACK_IMPORTED_MODULE_2__.GitLabDiscoveryProcessor.fromConfig(env.config, {\n        logger: env.logger,\n        skipReposWithoutExactFileMatch: true\n    }), _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_3__.OpenApiRefProcessor.fromConfig(env.config, {\n        logger: env.logger,\n        reader: env.reader\n    }));\n    builder.addProcessor(new _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.ScaffolderEntitiesProcessor());\n    const { processingEngine , router  } = await builder.build();\n    await processingEngine.start();\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGFsb2dCdWlsZGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kJztcbmltcG9ydCB7IFNjYWZmb2xkZXJFbnRpdGllc1Byb2Nlc3NvciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNjYWZmb2xkZXItYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgR2l0TGFiRGlzY292ZXJ5UHJvY2Vzc29yIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kLW1vZHVsZS1naXRsYWInO1xuaW1wb3J0IHsgT3BlbkFwaVJlZlByb2Nlc3NvciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZC1tb2R1bGUtb3BlbmFwaSc7XG4vLyBpbXBvcnQgeyBHaXRsYWJEaXNjb3ZlcnlFbnRpdHlQcm92aWRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZC1tb2R1bGUtZ2l0bGFiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgY29uc3QgYnVpbGRlciA9IGF3YWl0IENhdGFsb2dCdWlsZGVyLmNyZWF0ZShlbnYpO1xuXG4gIC8vIERlZmF1bHQgUG9sbGluZyBUaW1lIGlzIHNldCB0byAyIG1pbnV0ZXMgKDEyMCBzZWNvbmRzKSAtIHBhc3NpbmcgODAgYXMgc2Vjb25kcyBnaXZlbiBpbnRlcnZhbCBpcyAxLjUgdGltZXMgdGhlIHBvbGxpbmcgdGltZVxuICBidWlsZGVyLnNldFByb2Nlc3NpbmdJbnRlcnZhbFNlY29uZHMoODApO1xuICAvLyBidWlsZGVyLmFkZEVudGl0eVByb3ZpZGVyKFxuICAvLyAgIC4uLkdpdGxhYkRpc2NvdmVyeUVudGl0eVByb3ZpZGVyLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAvLyAgICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAvLyAgICAgc2NoZWR1bGU6IGVudi5zY2hlZHVsZXIuY3JlYXRlU2NoZWR1bGVkVGFza1J1bm5lcih7XG4gIC8vICAgICAgIGZyZXF1ZW5jeTogeyBtaW51dGVzOiAzMCB9LFxuICAvLyAgICAgICB0aW1lb3V0OiB7IG1pbnV0ZXM6IDMgfSxcbiAgLy8gICAgIH0pLFxuICAvLyAgIH0pLFxuICAvLyApO1xuXG4gIGJ1aWxkZXIuYWRkUHJvY2Vzc29yKFxuICAgIEdpdExhYkRpc2NvdmVyeVByb2Nlc3Nvci5mcm9tQ29uZmlnKGVudi5jb25maWcsIHsgbG9nZ2VyOiBlbnYubG9nZ2VyLCBza2lwUmVwb3NXaXRob3V0RXhhY3RGaWxlTWF0Y2g6IHRydWUgfSksXG4gICAgT3BlbkFwaVJlZlByb2Nlc3Nvci5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgICAgIH1cbiAgICApXG4gICk7XG4gIGJ1aWxkZXIuYWRkUHJvY2Vzc29yKG5ldyBTY2FmZm9sZGVyRW50aXRpZXNQcm9jZXNzb3IoKSk7XG4gIGNvbnN0IHsgcHJvY2Vzc2luZ0VuZ2luZSwgcm91dGVyIH0gPSBhd2FpdCBidWlsZGVyLmJ1aWxkKCk7XG4gIGF3YWl0IHByb2Nlc3NpbmdFbmdpbmUuc3RhcnQoKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/catalog.ts\n");

/***/ }),

/***/ "./src/plugins/glossary.ts":
/*!*********************************!*\
  !*** ./src/plugins/glossary.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _internal_plugin_glossary_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internal/plugin-glossary-backend */ \"../../plugins/glossary-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    return await (0,_internal_plugin_glossary_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9nbG9zc2FyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvZ2xvc3NhcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGludGVybmFsL3BsdWdpbi1nbG9zc2FyeS1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/glossary.ts\n");

/***/ }),

/***/ "./src/plugins/grpc-playground.ts":
/*!****************************************!*\
  !*** ./src/plugins/grpc-playground.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/integration */ \"@backstage/integration\");\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_integration__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var backstage_grpc_playground_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! backstage-grpc-playground-backend */ \"backstage-grpc-playground-backend\");\n/* harmony import */ var backstage_grpc_playground_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(backstage_grpc_playground_backend__WEBPACK_IMPORTED_MODULE_1__);\n// packages/backend/src/plugins/grpc-playground.ts\n\n\nasync function createPlugin(env) {\n    const { config , reader  } = env;\n    const integrations = _backstage_integration__WEBPACK_IMPORTED_MODULE_0__.ScmIntegrations.fromConfig(config);\n    return await (0,backstage_grpc_playground_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        logger: env.logger,\n        // @ts-ignore\n        reader,\n        // @ts-ignore\n        integrations\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9ncnBjLXBsYXlncm91bmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2dycGMtcGxheWdyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2dycGMtcGxheWdyb3VuZC50c1xuaW1wb3J0IHsgU2NtSW50ZWdyYXRpb25zIH0gZnJvbSAnQGJhY2tzdGFnZS9pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdiYWNrc3RhZ2UtZ3JwYy1wbGF5Z3JvdW5kLWJhY2tlbmQnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICBjb25zdCB7IGNvbmZpZywgcmVhZGVyIH0gPSBlbnY7XG5cbiAgY29uc3QgaW50ZWdyYXRpb25zID0gU2NtSW50ZWdyYXRpb25zLmZyb21Db25maWcoY29uZmlnKTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJlYWRlcixcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaW50ZWdyYXRpb25zLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/grpc-playground.ts\n");

/***/ }),

/***/ "./src/plugins/kafka.ts":
/*!******************************!*\
  !*** ./src/plugins/kafka.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_kafka_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-kafka-backend */ \"@backstage/plugin-kafka-backend\");\n/* harmony import */ var _backstage_plugin_kafka_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_kafka_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin({ logger , config  }) {\n    return await (0,_backstage_plugin_kafka_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger,\n        config\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9rYWZrYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9rYWZrYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1rYWZrYS1iYWNrZW5kJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oe1xuICBsb2dnZXIsXG4gIGNvbmZpZyxcbn06IFBsdWdpbkVudmlyb25tZW50KSB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoeyBsb2dnZXIsIGNvbmZpZyB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/kafka.ts\n");

/***/ }),

/***/ "./src/plugins/kubernetes.ts":
/*!***********************************!*\
  !*** ./src/plugins/kubernetes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_kubernetes_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-kubernetes-backend */ \"@backstage/plugin-kubernetes-backend\");\n/* harmony import */ var _backstage_plugin_kubernetes_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_kubernetes_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const catalogApi = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    const { router  } = await _backstage_plugin_kubernetes_backend__WEBPACK_IMPORTED_MODULE_1__.KubernetesBuilder.createBuilder({\n        logger: env.logger,\n        config: env.config,\n        catalogApi\n    }).build();\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9rdWJlcm5ldGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMva3ViZXJuZXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRhbG9nQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9jYXRhbG9nLWNsaWVudCc7XG5pbXBvcnQgeyBLdWJlcm5ldGVzQnVpbGRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWt1YmVybmV0ZXMtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICBjb25zdCBjYXRhbG9nQXBpID0gbmV3IENhdGFsb2dDbGllbnQoeyBkaXNjb3ZlcnlBcGk6IGVudi5kaXNjb3ZlcnkgfSk7XG4gIGNvbnN0IHsgcm91dGVyIH0gPSBhd2FpdCBLdWJlcm5ldGVzQnVpbGRlci5jcmVhdGVCdWlsZGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGNhdGFsb2dBcGksXG4gIH0pLmJ1aWxkKCk7XG4gIHJldHVybiByb3V0ZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/kubernetes.ts\n");

/***/ }),

/***/ "./src/plugins/onboarding-poc.ts":
/*!***************************************!*\
  !*** ./src/plugins/onboarding-poc.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _internal_plugin_onboarding_poc_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internal/plugin-onboarding-poc-backend */ \"../../plugins/onboarding-poc-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    // Here is where you will add all of the required initialization code that\n    // your backend plugin needs to be able to start!\n    // The env contains a lot of goodies, but our router currently only\n    // needs a logger\n    return await (0,_internal_plugin_onboarding_poc_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        database: env.database,\n        logger: env.logger,\n        config: env.config,\n        identity: env.identity\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL29uYm9hcmRpbmctcG9jLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gXCJAaW50ZXJuYWwvcGx1Z2luLW9uYm9hcmRpbmctcG9jLWJhY2tlbmRcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgLy8gSGVyZSBpcyB3aGVyZSB5b3Ugd2lsbCBhZGQgYWxsIG9mIHRoZSByZXF1aXJlZCBpbml0aWFsaXphdGlvbiBjb2RlIHRoYXRcbiAgLy8geW91ciBiYWNrZW5kIHBsdWdpbiBuZWVkcyB0byBiZSBhYmxlIHRvIHN0YXJ0IVxuXG4gIC8vIFRoZSBlbnYgY29udGFpbnMgYSBsb3Qgb2YgZ29vZGllcywgYnV0IG91ciByb3V0ZXIgY3VycmVudGx5IG9ubHlcbiAgLy8gbmVlZHMgYSBsb2dnZXJcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGlkZW50aXR5OiBlbnYuaWRlbnRpdHlcbn0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/onboarding-poc.ts\n");

/***/ }),

/***/ "./src/plugins/playlist.ts":
/*!*********************************!*\
  !*** ./src/plugins/playlist.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_playlist_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-playlist-backend */ \"@backstage/plugin-playlist-backend\");\n/* harmony import */ var _backstage_plugin_playlist_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_playlist_backend__WEBPACK_IMPORTED_MODULE_0__);\n// import { IdentityClient } from '@backstage/plugin-auth-node';\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_playlist_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        database: env.database,\n        discovery: env.discovery,\n        identity: env.identity,\n        logger: env.logger,\n        permissions: env.permissions\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wbGF5bGlzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3BsYXlsaXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IElkZW50aXR5Q2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYXV0aC1ub2RlJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXBsYXlsaXN0LWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgaWRlbnRpdHk6IGVudi5pZGVudGl0eSxcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/playlist.ts\n");

/***/ }),

/***/ "./src/plugins/proxy.ts":
/*!******************************!*\
  !*** ./src/plugins/proxy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-proxy-backend */ \"@backstage/plugin-proxy-backend\");\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wcm94eS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3Byb3h5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXByb3h5LWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/proxy.ts\n");

/***/ }),

/***/ "./src/plugins/qeta.ts":
/*!*****************************!*\
  !*** ./src/plugins/qeta.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _drodil_backstage_plugin_qeta_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @drodil/backstage-plugin-qeta-backend */ \"@drodil/backstage-plugin-qeta-backend\");\n/* harmony import */ var _drodil_backstage_plugin_qeta_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drodil_backstage_plugin_qeta_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin({ logger , database , identity , config  }) {\n    const db = await _drodil_backstage_plugin_qeta_backend__WEBPACK_IMPORTED_MODULE_0__.DatabaseQetaStore.create({\n        database: database\n    });\n    return (0,_drodil_backstage_plugin_qeta_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger,\n        database: db,\n        identity,\n        config\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9xZXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9xZXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgY3JlYXRlUm91dGVyLFxuICAgIERhdGFiYXNlUWV0YVN0b3JlLFxuICB9IGZyb20gJ0Bkcm9kaWwvYmFja3N0YWdlLXBsdWdpbi1xZXRhLWJhY2tlbmQnO1xuICBpbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuICBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oe1xuICAgIGxvZ2dlcixcbiAgICBkYXRhYmFzZSxcbiAgICBpZGVudGl0eSxcbiAgICBjb25maWcsXG4gIH06IFBsdWdpbkVudmlyb25tZW50KSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYXRhYmFzZVFldGFTdG9yZS5jcmVhdGUoe1xuICAgICAgZGF0YWJhc2U6IGRhdGFiYXNlLFxuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgICAgbG9nZ2VyLFxuICAgICAgZGF0YWJhc2U6IGRiLFxuICAgICAgaWRlbnRpdHksXG4gICAgICBjb25maWcsXG4gICAgfSk7XG4gIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/qeta.ts\n");

/***/ }),

/***/ "./src/plugins/scaffolder.ts":
/*!***********************************!*\
  !*** ./src/plugins/scaffolder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/integration */ \"@backstage/integration\");\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_integration__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ \"luxon\");\n/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ \"./src/plugins/actions/index.ts\");\n\n\n\n\n\nasync function createPlugin(env) {\n    const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    const integrations = _backstage_integration__WEBPACK_IMPORTED_MODULE_1__.ScmIntegrations.fromConfig(env.config);\n    const builtInActions = (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_3__.createBuiltinActions)({\n        integrations,\n        catalogClient,\n        config: env.config,\n        reader: env.reader\n    });\n    const actions = [\n        ...builtInActions,\n        (0,_actions__WEBPACK_IMPORTED_MODULE_4__.createGitlabCreateOrMergeAction)({\n            integrations,\n            config: env.config\n        }),\n        (0,_actions__WEBPACK_IMPORTED_MODULE_4__.createCatalogCheckAndRegister)({\n            catalogClient,\n            integrations\n        })\n    ];\n    return (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_3__.createRouter)({\n        additionalTemplateGlobals: {\n            now: ()=>{\n                return luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime.now().toMillis();\n            }\n        },\n        actions,\n        catalogClient: catalogClient,\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        reader: env.reader\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBS0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3NjYWZmb2xkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0YWxvZ0NsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvY2F0YWxvZy1jbGllbnQnO1xuaW1wb3J0IHsgU2NtSW50ZWdyYXRpb25zIH0gZnJvbSAnQGJhY2tzdGFnZS9pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcbmltcG9ydCB7XG4gIGNyZWF0ZUJ1aWx0aW5BY3Rpb25zLFxuICBjcmVhdGVSb3V0ZXIsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNjYWZmb2xkZXItYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBjcmVhdGVDYXRhbG9nQ2hlY2tBbmRSZWdpc3RlcixcbiAgY3JlYXRlR2l0bGFiQ3JlYXRlT3JNZXJnZUFjdGlvbixcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgY29uc3QgY2F0YWxvZ0NsaWVudCA9IG5ldyBDYXRhbG9nQ2xpZW50KHsgZGlzY292ZXJ5QXBpOiBlbnYuZGlzY292ZXJ5IH0pO1xuICBjb25zdCBpbnRlZ3JhdGlvbnMgPSBTY21JbnRlZ3JhdGlvbnMuZnJvbUNvbmZpZyhlbnYuY29uZmlnKTtcblxuICBjb25zdCBidWlsdEluQWN0aW9ucyA9IGNyZWF0ZUJ1aWx0aW5BY3Rpb25zKHtcbiAgICBpbnRlZ3JhdGlvbnMsXG4gICAgY2F0YWxvZ0NsaWVudCxcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgcmVhZGVyOiBlbnYucmVhZGVyLFxuICB9KTtcblxuICBjb25zdCBhY3Rpb25zID0gW1xuICAgIC4uLmJ1aWx0SW5BY3Rpb25zLFxuICAgIGNyZWF0ZUdpdGxhYkNyZWF0ZU9yTWVyZ2VBY3Rpb24oe1xuICAgICAgaW50ZWdyYXRpb25zLFxuICAgICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIH0pLFxuICAgIGNyZWF0ZUNhdGFsb2dDaGVja0FuZFJlZ2lzdGVyKHsgY2F0YWxvZ0NsaWVudCwgaW50ZWdyYXRpb25zIH0pLFxuICBdO1xuXG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGFkZGl0aW9uYWxUZW1wbGF0ZUdsb2JhbHM6IHtcbiAgICAgIG5vdzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gRGF0ZVRpbWUubm93KCkudG9NaWxsaXMoKVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9ucyxcbiAgICBjYXRhbG9nQ2xpZW50OiBjYXRhbG9nQ2xpZW50LFxuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICByZWFkZXI6IGVudi5yZWFkZXIsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/scaffolder.ts\n");

/***/ }),

/***/ "./src/plugins/search.ts":
/*!*******************************!*\
  !*** ./src/plugins/search.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-search-backend */ \"@backstage/plugin-search-backend\");\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-search-backend-node */ \"@backstage/plugin-search-backend-node\");\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _backstage_plugin_stack_overflow_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @backstage/plugin-stack-overflow-backend */ \"@backstage/plugin-stack-overflow-backend\");\n/* harmony import */ var _backstage_plugin_stack_overflow_backend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_stack_overflow_backend__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @backstage/plugin-adr-backend */ \"@backstage/plugin-adr-backend\");\n/* harmony import */ var _backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nasync function createPlugin(env) {\n    // Initialize a connection to a search engine.\n    const searchEngine = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.LunrSearchEngine({\n        logger: env.logger\n    });\n    const indexBuilder = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.IndexBuilder({\n        logger: env.logger,\n        searchEngine\n    });\n    const schedule = env.scheduler.createScheduledTaskRunner({\n        frequency: {\n            minutes: 10\n        },\n        timeout: {\n            minutes: 15\n        },\n        // A 3 second delay gives the backend server a chance to initialize before\n        // any collators are executed, which may attempt requests against the API.\n        initialDelay: {\n            seconds: 3\n        }\n    });\n    // Collators are responsible for gathering documents known to plugins. This\n    // collator gathers entities from the software catalog.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__.DefaultCatalogCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            tokenManager: env.tokenManager\n        })\n    });\n    // ADR\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_adr_backend__WEBPACK_IMPORTED_MODULE_6__.DefaultAdrCollatorFactory.fromConfig({\n            cache: env.cache,\n            config: env.config,\n            discovery: env.discovery,\n            logger: env.logger,\n            reader: env.reader,\n            tokenManager: env.tokenManager\n        })\n    });\n    // collator gathers entities from techdocs.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__.DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            logger: env.logger,\n            tokenManager: env.tokenManager\n        })\n    });\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_stack_overflow_backend__WEBPACK_IMPORTED_MODULE_5__.StackOverflowQuestionsCollatorFactory.fromConfig(env.config, {\n            logger: env.logger,\n            requestParams: {\n                tagged: [\n                    'backstage'\n                ],\n                site: 'stackoverflow',\n                pagesize: 100\n            }\n        })\n    });\n    // The scheduler controls when documents are gathered from collators and sent\n    // to the search engine for indexing.\n    const { scheduler  } = await indexBuilder.build();\n    scheduler.start();\n    (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, ()=>scheduler.stop());\n    return await (0,_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        engine: indexBuilder.getSearchEngine(),\n        types: indexBuilder.getDocumentTypes(),\n        permissions: env.permissions,\n        config: env.config,\n        logger: env.logger\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zZWFyY2gudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3NlYXJjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VIb3RDbGVhbnVwIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zZWFyY2gtYmFja2VuZCc7XG5pbXBvcnQge1xuICBJbmRleEJ1aWxkZXIsXG4gIEx1bnJTZWFyY2hFbmdpbmUsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNlYXJjaC1iYWNrZW5kLW5vZGUnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEZWZhdWx0Q2F0YWxvZ0NvbGxhdG9yRmFjdG9yeSB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZCc7XG5pbXBvcnQgeyBEZWZhdWx0VGVjaERvY3NDb2xsYXRvckZhY3RvcnkgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi10ZWNoZG9jcy1iYWNrZW5kJztcbmltcG9ydCB7IFN0YWNrT3ZlcmZsb3dRdWVzdGlvbnNDb2xsYXRvckZhY3RvcnkgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zdGFjay1vdmVyZmxvdy1iYWNrZW5kJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBEZWZhdWx0QWRyQ29sbGF0b3JGYWN0b3J5IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYWRyLWJhY2tlbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICAvLyBJbml0aWFsaXplIGEgY29ubmVjdGlvbiB0byBhIHNlYXJjaCBlbmdpbmUuXG4gIGNvbnN0IHNlYXJjaEVuZ2luZSA9IG5ldyBMdW5yU2VhcmNoRW5naW5lKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gIH0pO1xuICBjb25zdCBpbmRleEJ1aWxkZXIgPSBuZXcgSW5kZXhCdWlsZGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgc2VhcmNoRW5naW5lLFxuICB9KTtcblxuICBjb25zdCBzY2hlZHVsZSA9IGVudi5zY2hlZHVsZXIuY3JlYXRlU2NoZWR1bGVkVGFza1J1bm5lcih7XG4gICAgZnJlcXVlbmN5OiB7IG1pbnV0ZXM6IDEwIH0sXG4gICAgdGltZW91dDogeyBtaW51dGVzOiAxNSB9LFxuICAgIC8vIEEgMyBzZWNvbmQgZGVsYXkgZ2l2ZXMgdGhlIGJhY2tlbmQgc2VydmVyIGEgY2hhbmNlIHRvIGluaXRpYWxpemUgYmVmb3JlXG4gICAgLy8gYW55IGNvbGxhdG9ycyBhcmUgZXhlY3V0ZWQsIHdoaWNoIG1heSBhdHRlbXB0IHJlcXVlc3RzIGFnYWluc3QgdGhlIEFQSS5cbiAgICBpbml0aWFsRGVsYXk6IHsgc2Vjb25kczogMyB9LFxuICB9KTtcblxuICAvLyBDb2xsYXRvcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBnYXRoZXJpbmcgZG9jdW1lbnRzIGtub3duIHRvIHBsdWdpbnMuIFRoaXNcbiAgLy8gY29sbGF0b3IgZ2F0aGVycyBlbnRpdGllcyBmcm9tIHRoZSBzb2Z0d2FyZSBjYXRhbG9nLlxuICBpbmRleEJ1aWxkZXIuYWRkQ29sbGF0b3Ioe1xuICAgIHNjaGVkdWxlLFxuICAgIGZhY3Rvcnk6IERlZmF1bHRDYXRhbG9nQ29sbGF0b3JGYWN0b3J5LmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICAgICAgdG9rZW5NYW5hZ2VyOiBlbnYudG9rZW5NYW5hZ2VyLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBBRFJcbiAgaW5kZXhCdWlsZGVyLmFkZENvbGxhdG9yKHtcbiAgICBzY2hlZHVsZSxcbiAgICBmYWN0b3J5OiBEZWZhdWx0QWRyQ29sbGF0b3JGYWN0b3J5LmZyb21Db25maWcoe1xuICAgICAgY2FjaGU6IGVudi5jYWNoZSxcbiAgICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgICAgIHRva2VuTWFuYWdlcjogZW52LnRva2VuTWFuYWdlcixcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29sbGF0b3IgZ2F0aGVycyBlbnRpdGllcyBmcm9tIHRlY2hkb2NzLlxuICBpbmRleEJ1aWxkZXIuYWRkQ29sbGF0b3Ioe1xuICAgIHNjaGVkdWxlLFxuICAgIGZhY3Rvcnk6IERlZmF1bHRUZWNoRG9jc0NvbGxhdG9yRmFjdG9yeS5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICAgIHRva2VuTWFuYWdlcjogZW52LnRva2VuTWFuYWdlcixcbiAgICB9KSxcbiAgfSk7XG5cbiAgaW5kZXhCdWlsZGVyLmFkZENvbGxhdG9yKHtcbiAgICBzY2hlZHVsZSxcbiAgICBmYWN0b3J5OiBTdGFja092ZXJmbG93UXVlc3Rpb25zQ29sbGF0b3JGYWN0b3J5LmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgICAgcmVxdWVzdFBhcmFtczoge1xuICAgICAgICB0YWdnZWQ6IFsnYmFja3N0YWdlJ10sXG4gICAgICAgIHNpdGU6ICdzdGFja292ZXJmbG93JyxcbiAgICAgICAgcGFnZXNpemU6IDEwMCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIFRoZSBzY2hlZHVsZXIgY29udHJvbHMgd2hlbiBkb2N1bWVudHMgYXJlIGdhdGhlcmVkIGZyb20gY29sbGF0b3JzIGFuZCBzZW50XG4gIC8vIHRvIHRoZSBzZWFyY2ggZW5naW5lIGZvciBpbmRleGluZy5cbiAgY29uc3QgeyBzY2hlZHVsZXIgfSA9IGF3YWl0IGluZGV4QnVpbGRlci5idWlsZCgpO1xuICBzY2hlZHVsZXIuc3RhcnQoKTtcblxuICB1c2VIb3RDbGVhbnVwKG1vZHVsZSwgKCkgPT4gc2NoZWR1bGVyLnN0b3AoKSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgZW5naW5lOiBpbmRleEJ1aWxkZXIuZ2V0U2VhcmNoRW5naW5lKCksXG4gICAgdHlwZXM6IGluZGV4QnVpbGRlci5nZXREb2N1bWVudFR5cGVzKCksXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/search.ts\n");

/***/ }),

/***/ "./src/plugins/techdocs.ts":
/*!*********************************!*\
  !*** ./src/plugins/techdocs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dockerode */ \"dockerode\");\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dockerode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function createPlugin(env) {\n    // Preparers are responsible for fetching source files for documentation.\n    const preparers = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Preparers.fromConfig(env.config, {\n        logger: env.logger,\n        reader: env.reader\n    });\n    // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n    const dockerClient = new (dockerode__WEBPACK_IMPORTED_MODULE_2___default())();\n    const containerRunner = new _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.DockerContainerRunner({\n        dockerClient\n    });\n    // Generators are used for generating documentation sites.\n    const generators = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Generators.fromConfig(env.config, {\n        logger: env.logger,\n        containerRunner\n    });\n    // Publisher is used for\n    // 1. Publishing generated files to storage\n    // 2. Fetching files from storage and passing them to TechDocs frontend.\n    const publisher = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Publisher.fromConfig(env.config, {\n        logger: env.logger,\n        discovery: env.discovery\n    });\n    // checks if the publisher is working and logs the result\n    await publisher.getReadiness();\n    return await (0,_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        preparers,\n        generators,\n        publisher,\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery,\n        cache: env.cache\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2NrZXJDb250YWluZXJSdW5uZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7XG4gIGNyZWF0ZVJvdXRlcixcbiAgR2VuZXJhdG9ycyxcbiAgUHJlcGFyZXJzLFxuICBQdWJsaXNoZXIsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXRlY2hkb2NzLWJhY2tlbmQnO1xuaW1wb3J0IERvY2tlciBmcm9tICdkb2NrZXJvZGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgLy8gUHJlcGFyZXJzIGFyZSByZXNwb25zaWJsZSBmb3IgZmV0Y2hpbmcgc291cmNlIGZpbGVzIGZvciBkb2N1bWVudGF0aW9uLlxuICBjb25zdCBwcmVwYXJlcnMgPSBhd2FpdCBQcmVwYXJlcnMuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgfSk7XG5cbiAgLy8gRG9ja2VyIGNsaWVudCAoY29uZGl0aW9uYWxseSkgdXNlZCBieSB0aGUgZ2VuZXJhdG9ycywgYmFzZWQgb24gdGVjaGRvY3MuZ2VuZXJhdG9ycyBjb25maWcuXG4gIGNvbnN0IGRvY2tlckNsaWVudCA9IG5ldyBEb2NrZXIoKTtcbiAgY29uc3QgY29udGFpbmVyUnVubmVyID0gbmV3IERvY2tlckNvbnRhaW5lclJ1bm5lcih7IGRvY2tlckNsaWVudCB9KTtcblxuICAvLyBHZW5lcmF0b3JzIGFyZSB1c2VkIGZvciBnZW5lcmF0aW5nIGRvY3VtZW50YXRpb24gc2l0ZXMuXG4gIGNvbnN0IGdlbmVyYXRvcnMgPSBhd2FpdCBHZW5lcmF0b3JzLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb250YWluZXJSdW5uZXIsXG4gIH0pO1xuXG4gIC8vIFB1Ymxpc2hlciBpcyB1c2VkIGZvclxuICAvLyAxLiBQdWJsaXNoaW5nIGdlbmVyYXRlZCBmaWxlcyB0byBzdG9yYWdlXG4gIC8vIDIuIEZldGNoaW5nIGZpbGVzIGZyb20gc3RvcmFnZSBhbmQgcGFzc2luZyB0aGVtIHRvIFRlY2hEb2NzIGZyb250ZW5kLlxuICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCBQdWJsaXNoZXIuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG5cbiAgLy8gY2hlY2tzIGlmIHRoZSBwdWJsaXNoZXIgaXMgd29ya2luZyBhbmQgbG9ncyB0aGUgcmVzdWx0XG4gIGF3YWl0IHB1Ymxpc2hlci5nZXRSZWFkaW5lc3MoKTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBwcmVwYXJlcnMsXG4gICAgZ2VuZXJhdG9ycyxcbiAgICBwdWJsaXNoZXIsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgY2FjaGU6IGVudi5jYWNoZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/techdocs.ts\n");

/***/ }),

/***/ "./src/plugins/todo.ts":
/*!*****************************!*\
  !*** ./src/plugins/todo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_todo_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-todo-backend */ \"@backstage/plugin-todo-backend\");\n/* harmony import */ var _backstage_plugin_todo_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_todo_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const todoReader = _backstage_plugin_todo_backend__WEBPACK_IMPORTED_MODULE_1__.TodoScmReader.fromConfig(env.config, {\n        logger: env.logger,\n        reader: env.reader\n    });\n    const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    const todoService = new _backstage_plugin_todo_backend__WEBPACK_IMPORTED_MODULE_1__.TodoReaderService({\n        todoReader,\n        catalogClient\n    });\n    return await (0,_backstage_plugin_todo_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        todoService\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3RvZG8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDYXRhbG9nQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9jYXRhbG9nLWNsaWVudCc7XG5pbXBvcnQge1xuICBjcmVhdGVSb3V0ZXIsXG4gIFRvZG9SZWFkZXJTZXJ2aWNlLFxuICBUb2RvU2NtUmVhZGVyLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi10b2RvLWJhY2tlbmQnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIGNvbnN0IHRvZG9SZWFkZXIgPSBUb2RvU2NtUmVhZGVyLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICByZWFkZXI6IGVudi5yZWFkZXIsXG4gIH0pO1xuXG4gIGNvbnN0IGNhdGFsb2dDbGllbnQgPSBuZXcgQ2F0YWxvZ0NsaWVudCh7XG4gICAgZGlzY292ZXJ5QXBpOiBlbnYuZGlzY292ZXJ5LFxuICB9KTtcblxuICBjb25zdCB0b2RvU2VydmljZSA9IG5ldyBUb2RvUmVhZGVyU2VydmljZSh7XG4gICAgdG9kb1JlYWRlcixcbiAgICBjYXRhbG9nQ2xpZW50LFxuICB9KTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHsgdG9kb1NlcnZpY2UgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/todo.ts\n");

/***/ }),

/***/ "./src/plugins/toolkit.ts":
/*!********************************!*\
  !*** ./src/plugins/toolkit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _internal_plugin_toolkit_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internal/plugin-toolkit-backend */ \"../../plugins/toolkit-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    // Here is where you will add all of the required initialization code that\n    // your backend plugin needs to be able to start!\n    // The env contains a lot of goodies, but our router currently only\n    // needs a logger\n    return await (0,_internal_plugin_toolkit_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        database: env.database,\n        logger: env.logger,\n        config: env.config,\n        identity: env.identity\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90b29sa2l0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvdG9vbGtpdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAaW50ZXJuYWwvcGx1Z2luLXRvb2xraXQtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gICAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gICAgLy8gSGVyZSBpcyB3aGVyZSB5b3Ugd2lsbCBhZGQgYWxsIG9mIHRoZSByZXF1aXJlZCBpbml0aWFsaXphdGlvbiBjb2RlIHRoYXRcbiAgICAvLyB5b3VyIGJhY2tlbmQgcGx1Z2luIG5lZWRzIHRvIGJlIGFibGUgdG8gc3RhcnQhXG5cbiAgICAvLyBUaGUgZW52IGNvbnRhaW5zIGEgbG90IG9mIGdvb2RpZXMsIGJ1dCBvdXIgcm91dGVyIGN1cnJlbnRseSBvbmx5XG4gICAgLy8gbmVlZHMgYSBsb2dnZXJcblxuICAgIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgICAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgICAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICAgICAgaWRlbnRpdHk6IGVudi5pZGVudGl0eVxuXG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/toolkit.ts\n");

/***/ }),

/***/ "./src/plugins/uptl.ts":
/*!*****************************!*\
  !*** ./src/plugins/uptl.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _internal_plugin_uptl_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internal/plugin-uptl-backend */ \"../../plugins/uptl-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    return await (0,_internal_plugin_uptl_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy91cHRsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy91cHRsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BpbnRlcm5hbC9wbHVnaW4tdXB0bC1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/uptl.ts\n");

/***/ }),

/***/ "./src/plugins/zipAction.ts":
/*!**********************************!*\
  !*** ./src/plugins/zipAction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __dirname = \"src/plugins\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createZipActionRouter\": () => (/* binding */ createZipActionRouter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\nconst path = __webpack_require__(/*! path */ \"path\");\nconst archiver = __webpack_require__(/*! archiver */ \"archiver\");\nasync function createZipActionRouter({ logger , config  }) {\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    const readonlyEnabled = config.getOptionalBoolean('catalog.readonly') || false;\n    if (readonlyEnabled) {\n        logger.info('Catalog is running in readonly mode');\n    }\n    router.get('/zipAction', async (req, res)=>{\n        var _req_query, _req_query1, _req_query2;\n        const archive = archiver('zip');\n        archive.on('error', function(err) {\n            res.status(500).send({\n                error: err.message\n            });\n        });\n        //on stream closed we can end the request\n        archive.on('end', function() {\n            console.log('Archive wrote %d bytes', archive.pointer());\n        });\n        archive.pipe(res);\n        if (!((_req_query = req.query) === null || _req_query === void 0 ? void 0 : _req_query.taskId)) {\n            return res.status(400).send({\n                message: 'taskId is required!'\n            });\n        }\n        if (!fs_extra__WEBPACK_IMPORTED_MODULE_3___default().existsSync(path.join('achieves', (_req_query1 = req.query) === null || _req_query1 === void 0 ? void 0 : _req_query1.taskId))) {\n            return res.status(400).send({\n                message: 'No such archieve exist!'\n            });\n        }\n        //set the archive name\n        res.attachment(`${String((_req_query2 = req.query) === null || _req_query2 === void 0 ? void 0 : _req_query2.taskId)}.zip`);\n        //this is the streaming magic\n        let directories = [\n            __dirname + '/achieves',\n            './achieves'\n        ];\n        for(let i in directories){\n            archive.directory(directories[i], false);\n        }\n        await archive.finalize();\n        return;\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createZipActionRouter);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy96aXBBY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFPQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFaQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3ppcEFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGVycm9ySGFuZGxlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2NvbmZpZyc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBhcmNoaXZlciA9IHJlcXVpcmUoJ2FyY2hpdmVyJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFJvdXRlck9wdGlvbnMge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgY29uZmlnOiBDb25maWc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVaaXBBY3Rpb25Sb3V0ZXIoe1xuICBsb2dnZXIsXG4gIGNvbmZpZyxcbn06IFBsdWdpbkVudmlyb25tZW50KSB7XG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuICByb3V0ZXIudXNlKGV4cHJlc3MuanNvbigpKTtcblxuICBjb25zdCByZWFkb25seUVuYWJsZWQgPVxuICAgIGNvbmZpZy5nZXRPcHRpb25hbEJvb2xlYW4oJ2NhdGFsb2cucmVhZG9ubHknKSB8fCBmYWxzZTtcbiAgaWYgKHJlYWRvbmx5RW5hYmxlZCkge1xuICAgIGxvZ2dlci5pbmZvKCdDYXRhbG9nIGlzIHJ1bm5pbmcgaW4gcmVhZG9ubHkgbW9kZScpO1xuICB9XG5cbiAgcm91dGVyLmdldCgnL3ppcEFjdGlvbicsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGFyY2hpdmUgPSBhcmNoaXZlcignemlwJyk7XG5cbiAgICBhcmNoaXZlLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnI6IHsgbWVzc2FnZTogYW55IH0pIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIH0pO1xuXG4gICAgLy9vbiBzdHJlYW0gY2xvc2VkIHdlIGNhbiBlbmQgdGhlIHJlcXVlc3RcbiAgICBhcmNoaXZlLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXJjaGl2ZSB3cm90ZSAlZCBieXRlcycsIGFyY2hpdmUucG9pbnRlcigpKTtcbiAgICB9KTtcblxuICAgIGFyY2hpdmUucGlwZShyZXMpO1xuICAgIGlmICghcmVxLnF1ZXJ5Py50YXNrSWQpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6ICd0YXNrSWQgaXMgcmVxdWlyZWQhJyB9KTtcbiAgICB9XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhdGguam9pbignYWNoaWV2ZXMnLCByZXEucXVlcnk/LnRhc2tJZCkpKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiAnTm8gc3VjaCBhcmNoaWV2ZSBleGlzdCEnIH0pO1xuICAgIH1cbiAgICAvL3NldCB0aGUgYXJjaGl2ZSBuYW1lXG4gICAgcmVzLmF0dGFjaG1lbnQoYCR7U3RyaW5nKHJlcS5xdWVyeT8udGFza0lkKX0uemlwYCk7XG4gICAgLy90aGlzIGlzIHRoZSBzdHJlYW1pbmcgbWFnaWNcbiAgICBsZXQgZGlyZWN0b3JpZXMgPSBbX19kaXJuYW1lICsgJy9hY2hpZXZlcycsICcuL2FjaGlldmVzJ107XG4gICAgZm9yIChsZXQgaSBpbiBkaXJlY3Rvcmllcykge1xuICAgICAgYXJjaGl2ZS5kaXJlY3RvcnkoZGlyZWN0b3JpZXNbaV0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBhd2FpdCBhcmNoaXZlLmZpbmFsaXplKCk7XG4gICAgcmV0dXJuO1xuICB9KTtcbiAgcm91dGVyLnVzZShlcnJvckhhbmRsZXIoKSk7XG4gIHJldHVybiByb3V0ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVppcEFjdGlvblJvdXRlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/zipAction.ts\n");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeDir\": () => (/* binding */ removeDir)\n/* harmony export */ });\nconst path = __webpack_require__(/*! path */ \"path\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst removeDir = function(dirPath, removeSelf) {\n    if (removeSelf === undefined || false) removeSelf = true;\n    try {\n        var files = fs.readdirSync(dirPath);\n    } catch (e) {\n        return;\n    }\n    if (files.length > 0) for(var i = 0; i < files.length; i++){\n        var filePath = path.join(dirPath, files[i]);\n        if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);\n        else removeDir(filePath, undefined);\n    }\n    if (removeSelf) fs.rmdirSync(dirPath);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wYWNrYWdlcy9iYWNrZW5kL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRGlyID0gZnVuY3Rpb24gKGRpclBhdGg6IHN0cmluZywgcmVtb3ZlU2VsZj86IGJvb2xlYW4pIHtcbiAgaWYgKHJlbW92ZVNlbGYgPT09IHVuZGVmaW5lZCB8fCBmYWxzZSkgcmVtb3ZlU2VsZiA9IHRydWU7XG4gIHRyeSB7XG4gICAgdmFyIGZpbGVzID0gZnMucmVhZGRpclN5bmMoZGlyUGF0aCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZpbGVzLmxlbmd0aCA+IDApXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZpbGVQYXRoID0gcGF0aC5qb2luKGRpclBhdGgsIGZpbGVzW2ldKTtcbiAgICAgIGlmIChmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIGZzLnVubGlua1N5bmMoZmlsZVBhdGgpO1xuICAgICAgZWxzZSByZW1vdmVEaXIoZmlsZVBhdGgsIHVuZGVmaW5lZCk7XG4gICAgfVxuICBpZiAocmVtb3ZlU2VsZikgZnMucm1kaXJTeW5jKGRpclBhdGgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils.ts\n");

/***/ }),

/***/ "../../plugins/glossary-backend/src/index.ts":
/*!***************************************************!*\
  !*** ../../plugins/glossary-backend/src/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/glossary-backend/src/service/router.ts\");\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9nbG9zc2FyeS1iYWNrZW5kL3NyYy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL2dsb3NzYXJ5LWJhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgQmFja3N0YWdlIEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnLi9zZXJ2aWNlL3JvdXRlcic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/glossary-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/glossary-backend/src/service/DatabaseHandler.ts":
/*!*********************************************************************!*\
  !*** ../../plugins/glossary-backend/src/service/DatabaseHandler.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DatabaseHandler\": () => (/* binding */ DatabaseHandler)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2021 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \nconst migrationsDir = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.resolvePackagePath)('@internal/plugin-glossary-backend', 'migrations');\nclass DatabaseHandler {\n    static async create(options) {\n        const { database  } = options;\n        await database.migrate.latest({\n            directory: migrationsDir\n        });\n        return new DatabaseHandler(options);\n    }\n    // private columns = [\n    //   'glossary.id',\n    //   'glossary.entity_ref',\n    //   'glossary.term',\n    //   'glossary.definition',\n    //   'glossary.isActive',\n    //   'glossary.isApproved',\n    //   'glossary.updated_at',\n    // ];\n    async getGlossary() {\n        return await this.database('glossary_items').select('*').where({\n            'glossary_items.isActive': '1'\n        });\n    }\n    async getGlossaryByRef(entityRef) {\n        return await this.database('glossary_items').select('*').where({\n            'glossary_items.entity_ref': entityRef,\n            'glossary_items.isActive': '1'\n        });\n    }\n    async getGlossaryBySearch(searchText) {\n        return await this.database('glossary_items').select('*').whereRaw('LOWER(glossary_items.term) LIKE ?', searchText.toLowerCase())// .where('glossary_items.term', 'like', `%${searchText[0]}%`)\n        .where({\n            'glossary_items.isActive': '1'\n        });\n    }\n    async getGlossaryBySearchAndRef(searchText, entityRef) {\n        return await this.database('glossary_items').select('*').whereRaw('LOWER(glossary_items.term) LIKE ?', searchText.toLowerCase()).modify((queryBuilder)=>{\n            if (entityRef) {\n                queryBuilder.where('glossary_items.entity_ref', entityRef);\n            }\n        }).where({\n            'glossary_items.isActive': '1'\n        });\n    }\n    async insertGlossary(glossary) {\n        const { entityRef , term , definition , isActive , isApproved , created_by  } = glossary;\n        await this.database.insert({\n            entity_ref: entityRef,\n            term,\n            definition,\n            created_by,\n            isActive,\n            isApproved,\n            updated_at: new Date().toISOString()\n        }).into('glossary_items');\n    }\n    async updateGlossary(glossary) {\n        const { id , entityRef , term , definition , isActive , isApproved , created_by  } = glossary;\n        return await this.database('glossary_items').where({\n            id: id\n        }).update({\n            entity_ref: entityRef,\n            term,\n            definition,\n            isActive,\n            isApproved,\n            updated_at: new Date().toISOString(),\n            created_by\n        });\n    }\n    constructor(options){\n        this.database = options.database;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9nbG9zc2FyeS1iYWNrZW5kL3NyYy9zZXJ2aWNlL0RhdGFiYXNlSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUtBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEZBO0FBQ0E7QUFDQTtBQW1GQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGx1Z2lucy9nbG9zc2FyeS1iYWNrZW5kL3NyYy9zZXJ2aWNlL0RhdGFiYXNlSGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjEgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHJlc29sdmVQYWNrYWdlUGF0aCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgS25leCB9IGZyb20gJ2tuZXgnO1xuXG5jb25zdCBtaWdyYXRpb25zRGlyID0gcmVzb2x2ZVBhY2thZ2VQYXRoKFxuICAnQGludGVybmFsL3BsdWdpbi1nbG9zc2FyeS1iYWNrZW5kJyxcbiAgJ21pZ3JhdGlvbnMnLFxuKTtcblxudHlwZSBPcHRpb25zID0ge1xuICBkYXRhYmFzZTogS25leDtcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUhhbmRsZXIge1xuICBzdGF0aWMgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPERhdGFiYXNlSGFuZGxlcj4ge1xuICAgIGNvbnN0IHsgZGF0YWJhc2UgfSA9IG9wdGlvbnM7XG5cbiAgICBhd2FpdCBkYXRhYmFzZS5taWdyYXRlLmxhdGVzdCh7XG4gICAgICBkaXJlY3Rvcnk6IG1pZ3JhdGlvbnNEaXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IERhdGFiYXNlSGFuZGxlcihvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YWJhc2U6IEtuZXg7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5kYXRhYmFzZSA9IG9wdGlvbnMuZGF0YWJhc2U7XG4gIH1cblxuICAvLyBwcml2YXRlIGNvbHVtbnMgPSBbXG4gIC8vICAgJ2dsb3NzYXJ5LmlkJyxcbiAgLy8gICAnZ2xvc3NhcnkuZW50aXR5X3JlZicsXG4gIC8vICAgJ2dsb3NzYXJ5LnRlcm0nLFxuICAvLyAgICdnbG9zc2FyeS5kZWZpbml0aW9uJyxcbiAgLy8gICAnZ2xvc3NhcnkuaXNBY3RpdmUnLFxuICAvLyAgICdnbG9zc2FyeS5pc0FwcHJvdmVkJyxcbiAgLy8gICAnZ2xvc3NhcnkudXBkYXRlZF9hdCcsXG4gIC8vIF07XG5cbiAgYXN5bmMgZ2V0R2xvc3NhcnkoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF0YWJhc2UoJ2dsb3NzYXJ5X2l0ZW1zJylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLndoZXJlKHsgJ2dsb3NzYXJ5X2l0ZW1zLmlzQWN0aXZlJzogJzEnIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0R2xvc3NhcnlCeVJlZihlbnRpdHlSZWY6IHN0cmluZykge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmRhdGFiYXNlKCdnbG9zc2FyeV9pdGVtcycpLnNlbGVjdCgnKicpLndoZXJlKHtcbiAgICAgICdnbG9zc2FyeV9pdGVtcy5lbnRpdHlfcmVmJzogZW50aXR5UmVmLFxuICAgICAgJ2dsb3NzYXJ5X2l0ZW1zLmlzQWN0aXZlJzogJzEnLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0R2xvc3NhcnlCeVNlYXJjaChzZWFyY2hUZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZSgnZ2xvc3NhcnlfaXRlbXMnKVxuICAgICAgLnNlbGVjdCgnKicpXG4gICAgICAud2hlcmVSYXcoJ0xPV0VSKGdsb3NzYXJ5X2l0ZW1zLnRlcm0pIExJS0UgPycsIHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSlcbiAgICAgIC8vIC53aGVyZSgnZ2xvc3NhcnlfaXRlbXMudGVybScsICdsaWtlJywgYCUke3NlYXJjaFRleHRbMF19JWApXG4gICAgICAud2hlcmUoeyAnZ2xvc3NhcnlfaXRlbXMuaXNBY3RpdmUnOiAnMScgfSk7XG4gIH1cbiAgYXN5bmMgZ2V0R2xvc3NhcnlCeVNlYXJjaEFuZFJlZihzZWFyY2hUZXh0OiBzdHJpbmcsIGVudGl0eVJlZjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF0YWJhc2UoJ2dsb3NzYXJ5X2l0ZW1zJylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLndoZXJlUmF3KCdMT1dFUihnbG9zc2FyeV9pdGVtcy50ZXJtKSBMSUtFID8nLCBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpXG4gICAgICAubW9kaWZ5KHF1ZXJ5QnVpbGRlciA9PiB7XG4gICAgICAgIGlmIChlbnRpdHlSZWYpIHtcbiAgICAgICAgICBxdWVyeUJ1aWxkZXIud2hlcmUoJ2dsb3NzYXJ5X2l0ZW1zLmVudGl0eV9yZWYnLCBlbnRpdHlSZWYpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLndoZXJlKHtcbiAgICAgICAgJ2dsb3NzYXJ5X2l0ZW1zLmlzQWN0aXZlJzogJzEnLFxuICAgICAgfSk7XG4gIH1cbiAgYXN5bmMgaW5zZXJ0R2xvc3NhcnkoZ2xvc3Nhcnk6IGFueSkge1xuICAgIGNvbnN0IHsgZW50aXR5UmVmLCB0ZXJtLCBkZWZpbml0aW9uLCBpc0FjdGl2ZSwgaXNBcHByb3ZlZCwgY3JlYXRlZF9ieSB9ID1cbiAgICAgIGdsb3NzYXJ5O1xuXG4gICAgYXdhaXQgdGhpcy5kYXRhYmFzZVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIGVudGl0eV9yZWY6IGVudGl0eVJlZixcbiAgICAgICAgdGVybSxcbiAgICAgICAgZGVmaW5pdGlvbixcbiAgICAgICAgY3JlYXRlZF9ieSxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIGlzQXBwcm92ZWQsXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pXG4gICAgICAuaW50bygnZ2xvc3NhcnlfaXRlbXMnKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUdsb3NzYXJ5KGdsb3NzYXJ5OiBhbnkpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGVudGl0eVJlZixcbiAgICAgIHRlcm0sXG4gICAgICBkZWZpbml0aW9uLFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc0FwcHJvdmVkLFxuICAgICAgY3JlYXRlZF9ieSxcbiAgICB9ID0gZ2xvc3Nhcnk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZSgnZ2xvc3NhcnlfaXRlbXMnKS53aGVyZSh7IGlkOiBpZCB9KS51cGRhdGUoe1xuICAgICAgZW50aXR5X3JlZjogZW50aXR5UmVmLFxuICAgICAgdGVybSxcbiAgICAgIGRlZmluaXRpb24sXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGlzQXBwcm92ZWQsXG4gICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkX2J5LFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/glossary-backend/src/service/DatabaseHandler.ts\n");

/***/ }),

/***/ "../../plugins/glossary-backend/src/service/router.ts":
/*!************************************************************!*\
  !*** ../../plugins/glossary-backend/src/service/router.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DatabaseHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DatabaseHandler */ \"../../plugins/glossary-backend/src/service/DatabaseHandler.ts\");\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\nasync function createRouter(options) {\n    const { logger , database  } = options;\n    const db = await database.getClient();\n    const dbHandler = await _DatabaseHandler__WEBPACK_IMPORTED_MODULE_3__.DatabaseHandler.create({\n        database: db\n    });\n    logger.info('Initializing Bazaar backend');\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    router.get('/health', (_, response)=>{\n        logger.info('PONG!');\n        response.send({\n            status: 'ok'\n        });\n    });\n    router.get('/all', async (_request, response)=>{\n        const list = await dbHandler.getGlossary();\n        if (list === null || list === void 0 ? void 0 : list.length) {\n            response.json({\n                status: 'ok',\n                data: list\n            });\n        } else {\n            response.json({\n                status: 'ok',\n                data: []\n            });\n        }\n    });\n    router.get('/:id', async (request, response)=>{\n        const list = await dbHandler.getGlossaryByRef(request.params.id);\n        if (list === null || list === void 0 ? void 0 : list.length) {\n            response.json({\n                status: 'ok',\n                data: list\n            });\n        } else {\n            response.json({\n                status: 'ok',\n                data: []\n            });\n        }\n    });\n    router.post('/filter', async (request, response)=>{\n        const list = await dbHandler.getGlossaryBySearchAndRef(request.body.text, request.body.entityRef);\n        if (list === null || list === void 0 ? void 0 : list.length) {\n            response.json({\n                status: 'ok',\n                data: list\n            });\n        } else {\n            response.json({\n                status: 'ok',\n                data: []\n            });\n        }\n    });\n    router.get('/search/:text', async (request, response)=>{\n        const list = await dbHandler.getGlossaryBySearch(request.params.text);\n        if (list === null || list === void 0 ? void 0 : list.length) {\n            response.json({\n                status: 'ok',\n                data: list\n            });\n        } else {\n            response.json({\n                status: 'ok',\n                data: []\n            });\n        }\n    });\n    router.post('/add', async (request, response)=>{\n        const gloassary = {\n            term: request.body.term,\n            entityRef: request.body.entityRef,\n            definition: request.body.definition,\n            isActive: request.body.isActive,\n            isApproved: request.body.isApproved,\n            created_by: request.body.created_by\n        };\n        await dbHandler.insertGlossary(gloassary);\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.post('/update', async (request, response)=>{\n        const gloassary = {\n            id: request.body.id,\n            term: request.body.term,\n            entityRef: request.body.entityRef,\n            definition: request.body.definition,\n            isActive: request.body.isActive,\n            isApproved: request.body.isApproved,\n            created_by: request.body.created_by\n        };\n        await dbHandler.updateGlossary(gloassary);\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9nbG9zc2FyeS1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBSUE7QUFDQTtBQUVBO0FBUUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvZ2xvc3NhcnktYmFja2VuZC9zcmMvc2VydmljZS9yb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBCYWNrc3RhZ2UgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIsIFBsdWdpbkRhdGFiYXNlTWFuYWdlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGJhY2tzdGFnZS9jb25maWcnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ2V4cHJlc3MtcHJvbWlzZS1yb3V0ZXInO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBEYXRhYmFzZUhhbmRsZXIgfSBmcm9tICcuL0RhdGFiYXNlSGFuZGxlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyT3B0aW9ucyB7XG4gIGxvZ2dlcjogTG9nZ2VyO1xuICBkYXRhYmFzZTogUGx1Z2luRGF0YWJhc2VNYW5hZ2VyO1xuICBjb25maWc6IENvbmZpZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihcbiAgb3B0aW9uczogUm91dGVyT3B0aW9ucyxcbik6IFByb21pc2U8ZXhwcmVzcy5Sb3V0ZXI+IHtcbiAgY29uc3QgeyBsb2dnZXIsIGRhdGFiYXNlIH0gPSBvcHRpb25zO1xuICBjb25zdCBkYiA9IGF3YWl0IGRhdGFiYXNlLmdldENsaWVudCgpO1xuXG4gIGNvbnN0IGRiSGFuZGxlciA9IGF3YWl0IERhdGFiYXNlSGFuZGxlci5jcmVhdGUoeyBkYXRhYmFzZTogZGIgfSk7XG5cbiAgbG9nZ2VyLmluZm8oJ0luaXRpYWxpemluZyBCYXphYXIgYmFja2VuZCcpO1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuICByb3V0ZXIudXNlKGV4cHJlc3MuanNvbigpKTtcblxuICByb3V0ZXIuZ2V0KCcvaGVhbHRoJywgKF8sIHJlc3BvbnNlKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oJ1BPTkchJyk7XG4gICAgcmVzcG9uc2Uuc2VuZCh7IHN0YXR1czogJ29rJyB9KTtcbiAgfSk7XG4gIHJvdXRlci5nZXQoJy9hbGwnLCBhc3luYyAoX3JlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGRiSGFuZGxlci5nZXRHbG9zc2FyeSgpO1xuXG4gICAgaWYgKGxpc3Q/Lmxlbmd0aCkge1xuICAgICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJywgZGF0YTogbGlzdCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJywgZGF0YTogW10gfSk7XG4gICAgfVxuICB9KTtcbiAgcm91dGVyLmdldCgnLzppZCcsIGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBkYkhhbmRsZXIuZ2V0R2xvc3NhcnlCeVJlZihyZXF1ZXN0LnBhcmFtcy5pZCk7XG5cbiAgICBpZiAobGlzdD8ubGVuZ3RoKSB7XG4gICAgICByZXNwb25zZS5qc29uKHsgc3RhdHVzOiAnb2snLCBkYXRhOiBsaXN0IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5qc29uKHsgc3RhdHVzOiAnb2snLCBkYXRhOiBbXSB9KTtcbiAgICB9XG4gIH0pO1xuICByb3V0ZXIucG9zdCgnL2ZpbHRlcicsIGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBkYkhhbmRsZXIuZ2V0R2xvc3NhcnlCeVNlYXJjaEFuZFJlZihcbiAgICAgIHJlcXVlc3QuYm9keS50ZXh0LFxuICAgICAgcmVxdWVzdC5ib2R5LmVudGl0eVJlZixcbiAgICApO1xuXG4gICAgaWYgKGxpc3Q/Lmxlbmd0aCkge1xuICAgICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJywgZGF0YTogbGlzdCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJywgZGF0YTogW10gfSk7XG4gICAgfVxuICB9KTtcbiAgcm91dGVyLmdldCgnL3NlYXJjaC86dGV4dCcsIGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBkYkhhbmRsZXIuZ2V0R2xvc3NhcnlCeVNlYXJjaChyZXF1ZXN0LnBhcmFtcy50ZXh0KTtcblxuICAgIGlmIChsaXN0Py5sZW5ndGgpIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdvaycsIGRhdGE6IGxpc3QgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdvaycsIGRhdGE6IFtdIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcm91dGVyLnBvc3QoJy9hZGQnLCBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBnbG9hc3NhcnkgPSB7XG4gICAgICB0ZXJtOiByZXF1ZXN0LmJvZHkudGVybSxcbiAgICAgIGVudGl0eVJlZjogcmVxdWVzdC5ib2R5LmVudGl0eVJlZixcbiAgICAgIGRlZmluaXRpb246IHJlcXVlc3QuYm9keS5kZWZpbml0aW9uLFxuICAgICAgaXNBY3RpdmU6IHJlcXVlc3QuYm9keS5pc0FjdGl2ZSxcbiAgICAgIGlzQXBwcm92ZWQ6IHJlcXVlc3QuYm9keS5pc0FwcHJvdmVkLFxuICAgICAgY3JlYXRlZF9ieTogcmVxdWVzdC5ib2R5LmNyZWF0ZWRfYnksXG4gICAgfTtcblxuICAgIGF3YWl0IGRiSGFuZGxlci5pbnNlcnRHbG9zc2FyeShnbG9hc3NhcnkpO1xuXG4gICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJyB9KTtcbiAgfSk7XG4gIHJvdXRlci5wb3N0KCcvdXBkYXRlJywgYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgZ2xvYXNzYXJ5ID0ge1xuICAgICAgaWQ6IHJlcXVlc3QuYm9keS5pZCxcbiAgICAgIHRlcm06IHJlcXVlc3QuYm9keS50ZXJtLFxuICAgICAgZW50aXR5UmVmOiByZXF1ZXN0LmJvZHkuZW50aXR5UmVmLFxuICAgICAgZGVmaW5pdGlvbjogcmVxdWVzdC5ib2R5LmRlZmluaXRpb24sXG4gICAgICBpc0FjdGl2ZTogcmVxdWVzdC5ib2R5LmlzQWN0aXZlLFxuICAgICAgaXNBcHByb3ZlZDogcmVxdWVzdC5ib2R5LmlzQXBwcm92ZWQsXG4gICAgICBjcmVhdGVkX2J5OiByZXF1ZXN0LmJvZHkuY3JlYXRlZF9ieSxcbiAgICB9O1xuXG4gICAgYXdhaXQgZGJIYW5kbGVyLnVwZGF0ZUdsb3NzYXJ5KGdsb2Fzc2FyeSk7XG5cbiAgICByZXNwb25zZS5qc29uKHsgc3RhdHVzOiAnb2snIH0pO1xuICB9KTtcbiAgcm91dGVyLnVzZShlcnJvckhhbmRsZXIoKSk7XG4gIHJldHVybiByb3V0ZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/glossary-backend/src/service/router.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/index.ts":
/*!*********************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/onboarding-poc-backend/src/service/router/index.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL29uYm9hcmRpbmctcG9jLWJhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc2VydmljZS9yb3V0ZXInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/DatabaseHandler.ts":
/*!***************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/DatabaseHandler.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"databaseConnection\": () => (/* binding */ databaseConnection)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?0dc5\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n\nconst migrationsDir = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.resolvePackagePath)('@internal/plugin-onboarding-poc-backend', 'migrations');\nconst databaseConnection = async (options)=>{\n    var _database_migrations;\n    const { database  } = options;\n    console.log(\"🚀 ~ file: DatabaseHandler.ts:15 ~ databaseConnection ~ database\", database);\n    const client = await database.getClient();\n    console.log(\"🚀 ~ file: DatabaseHandler.ts:17 ~ databaseConnection ~ database.migrations?.skip\", client.connectionSettings);\n    if (!((_database_migrations = database.migrations) === null || _database_migrations === void 0 ? void 0 : _database_migrations.skip)) {\n        const res = await client.migrate.latest({\n            directory: migrationsDir\n        });\n        console.log(\"🚀 ~ file: DatabaseHandler.ts:24 ~ databaseConnection ~ res\", res);\n    }\n    return client;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL0RhdGFiYXNlSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBU0E7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL0RhdGFiYXNlSGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW5EYXRhYmFzZU1hbmFnZXIsIHJlc29sdmVQYWNrYWdlUGF0aCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuXG5jb25zdCBtaWdyYXRpb25zRGlyID0gcmVzb2x2ZVBhY2thZ2VQYXRoKFxuICAgICdAaW50ZXJuYWwvcGx1Z2luLW9uYm9hcmRpbmctcG9jLWJhY2tlbmQnLFxuICAgICdtaWdyYXRpb25zJyxcbik7XG5cbnR5cGUgT3B0aW9ucyA9IHtcbiAgICBkYXRhYmFzZTogUGx1Z2luRGF0YWJhc2VNYW5hZ2VyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlQ29ubmVjdGlvbiA9IGFzeW5jIChvcHRpb25zOiBPcHRpb25zKSA9PiB7XG5cbiAgICBjb25zdCB7IGRhdGFiYXNlIH0gPSBvcHRpb25zO1xuICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IERhdGFiYXNlSGFuZGxlci50czoxNSB+IGRhdGFiYXNlQ29ubmVjdGlvbiB+IGRhdGFiYXNlXCIsIGRhdGFiYXNlKVxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGRhdGFiYXNlLmdldENsaWVudCgpO1xuICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IERhdGFiYXNlSGFuZGxlci50czoxNyB+IGRhdGFiYXNlQ29ubmVjdGlvbiB+IGRhdGFiYXNlLm1pZ3JhdGlvbnM/LnNraXBcIiwgY2xpZW50LmNvbm5lY3Rpb25TZXR0aW5ncylcblxuICAgIGlmICghZGF0YWJhc2UubWlncmF0aW9ucz8uc2tpcCkge1xuXG4gICAgY29uc3QgcmVzPSAgICBhd2FpdCBjbGllbnQubWlncmF0ZS5sYXRlc3Qoe1xuICAgICAgICAgICAgZGlyZWN0b3J5OiBtaWdyYXRpb25zRGlyLFxuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBEYXRhYmFzZUhhbmRsZXIudHM6MjQgfiBkYXRhYmFzZUNvbm5lY3Rpb24gfiByZXNcIiwgcmVzKVxuICAgIH1cbiAgICByZXR1cm4gY2xpZW50XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/DatabaseHandler.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/controller/index.ts":
/*!****************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/controller/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getChecklists\": () => (/* reexport safe */ _onboarding_controller__WEBPACK_IMPORTED_MODULE_0__.getChecklists),\n/* harmony export */   \"syncChecklist\": () => (/* reexport safe */ _onboarding_controller__WEBPACK_IMPORTED_MODULE_0__.syncChecklist)\n/* harmony export */ });\n/* harmony import */ var _onboarding_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.controller */ \"../../plugins/onboarding-poc-backend/src/service/controller/onboarding.controller.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL2NvbnRyb2xsZXIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvb25ib2FyZGluZy1wb2MtYmFja2VuZC9zcmMvc2VydmljZS9jb250cm9sbGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL29uYm9hcmRpbmcuY29udHJvbGxlclwiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/controller/index.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/controller/onboarding.controller.ts":
/*!********************************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/controller/onboarding.controller.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getChecklists\": () => (/* binding */ getChecklists),\n/* harmony export */   \"syncChecklist\": () => (/* binding */ syncChecklist)\n/* harmony export */ });\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ \"js-yaml\");\n/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"../../plugins/onboarding-poc-backend/src/service/services/index.ts\");\n\n\n\nconst GitService = new _services__WEBPACK_IMPORTED_MODULE_2__.GithubService();\nconst getChecklists = async (req, res)=>{\n    try {\n        const data = await fetch('https://api.github.com/repos/NishkarshRaj/rearportal-org-catalogs/git/blobs/0620c070d5de6f74cccbb17164c088168ea0d733', {\n            method: \"GET\",\n            headers: {\n                Accept: \"application/vnd.github+json\",\n                Authorization: \"Bearer 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\"\n            }\n        }).then((response)=>{\n            return response.json();\n        }).then((ress)=>{\n            return ress;\n        }).catch((err)=>{\n            return err;\n        });\n        // const contents:any = Buffer.from(data.content, 'base64')\n        const d = js_yaml__WEBPACK_IMPORTED_MODULE_0__.loadAll(Buffer.from(data.content, 'base64'));\n        res.send(d[0]).status(200);\n    } catch (error) {\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst syncChecklist = async (req, res)=>{\n    try {\n        const data = await GitService.GetUserAndChecklistBlob();\n        const client = req.dbClient;\n        const salt = 10;\n        data === null || data === void 0 ? void 0 : data.forEach(async (res_data)=>{\n            const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_1__.hash(res_data.formSchema, salt);\n            res_data.checklistHash = hash;\n            const prevData = await client.select().from('checklists').where({\n                checklist_uid: res_data.checklist_uid\n            }).first();\n            if (prevData) {\n                if (prevData.groupHash !== res_data.groupHash) {\n                    await client('checklists').where({\n                        checklist_uid: prevData.checklist_uid\n                    }).update({\n                        groupHash: res_data.groupHash,\n                        forRoles: res_data.forRoles,\n                        title: res_data.title,\n                        formSchema: res_data.formSchema,\n                        updated_at: client.fn.now(),\n                        checklistHash: res_data.checklistHash\n                    });\n                }\n            } else {\n                await client('checklists').insert(res_data);\n            }\n        });\n        res.json('Sync is on progress...').status(200);\n    } catch (error) {\n        res.status(500).send(\"Internal server error!\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL2NvbnRyb2xsZXIvb25ib2FyZGluZy5jb250cm9sbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL29uYm9hcmRpbmctcG9jLWJhY2tlbmQvc3JjL3NlcnZpY2UvY29udHJvbGxlci9vbmJvYXJkaW5nLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMganNZYW1sIGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuaW1wb3J0IHsgR2l0aHViU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuXG5jb25zdCBHaXRTZXJ2aWNlID0gbmV3IEdpdGh1YlNlcnZpY2UoKTtcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrbGlzdHMgPSBhc3luYyAocmVxOiBhbnksIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9OaXNoa2Fyc2hSYWovcmVhcnBvcnRhbC1vcmctY2F0YWxvZ3MvZ2l0L2Jsb2JzLzA2MjBjMDcwZDVkZTZmNzRjY2NiYjE3MTY0YzA4ODE2OGVhMGQ3MzMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIGdocF83amJ2U20zd2FqQkZFb0swRWhiODlHYWpQM2dMSUozd240S2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbihyZXNzID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNzXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZXJyXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnN0IGNvbnRlbnRzOmFueSA9IEJ1ZmZlci5mcm9tKGRhdGEuY29udGVudCwgJ2Jhc2U2NCcpXG4gICAgICAgIGNvbnN0IGQgPSBqc1lhbWwubG9hZEFsbChCdWZmZXIuZnJvbShkYXRhLmNvbnRlbnQsICdiYXNlNjQnKSBhcyBhbnkpXG4gICAgICAgIHJlcy5zZW5kKGRbMF0pLnN0YXR1cygyMDApXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkludGVybmFsIHNlcnZlciBlcnJvciFcIilcbiAgICB9XG59XG5leHBvcnQgY29uc3Qgc3luY0NoZWNrbGlzdCA9IGFzeW5jIChyZXE6IGFueSwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGE6IGFueVtdID0gYXdhaXQgR2l0U2VydmljZS5HZXRVc2VyQW5kQ2hlY2tsaXN0QmxvYigpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSByZXEuZGJDbGllbnRcbiAgICAgICAgY29uc3Qgc2FsdCA9IDEwXG4gICAgICAgIGRhdGE/LmZvckVhY2goYXN5bmMgKHJlc19kYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocmVzX2RhdGEuZm9ybVNjaGVtYSwgc2FsdClcbiAgICAgICAgICAgIHJlc19kYXRhLmNoZWNrbGlzdEhhc2ggPSBoYXNoXG4gICAgICAgICAgICBjb25zdCBwcmV2RGF0YSA9IGF3YWl0IGNsaWVudC5zZWxlY3QoKS5mcm9tKCdjaGVja2xpc3RzJykud2hlcmUoeyBjaGVja2xpc3RfdWlkOiByZXNfZGF0YS5jaGVja2xpc3RfdWlkIH0pLmZpcnN0KClcbiAgICAgICAgICAgIGlmIChwcmV2RGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2RGF0YS5ncm91cEhhc2ggIT09IHJlc19kYXRhLmdyb3VwSGFzaCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjbGllbnQoJ2NoZWNrbGlzdHMnKS53aGVyZSh7IGNoZWNrbGlzdF91aWQ6IHByZXZEYXRhLmNoZWNrbGlzdF91aWQgfSkudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSGFzaDogcmVzX2RhdGEuZ3JvdXBIYXNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yUm9sZXM6IHJlc19kYXRhLmZvclJvbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc19kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVNjaGVtYTogcmVzX2RhdGEuZm9ybVNjaGVtYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGNsaWVudC5mbi5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhhc2g6IHJlc19kYXRhLmNoZWNrbGlzdEhhc2hcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50KCdjaGVja2xpc3RzJykuaW5zZXJ0KHJlc19kYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5qc29uKCdTeW5jIGlzIG9uIHByb2dyZXNzLi4uJykuc3RhdHVzKDIwMClcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yIVwiKVxuXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/controller/onboarding.controller.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/router/index.ts":
/*!************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/router/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?0dc5\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DatabaseHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DatabaseHandler */ \"../../plugins/onboarding-poc-backend/src/service/DatabaseHandler.ts\");\n/* harmony import */ var _onboarding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding */ \"../../plugins/onboarding-poc-backend/src/service/router/onboarding.ts\");\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n\nasync function createRouter(options) {\n    const { logger , identity , database  } = options;\n    const dbClient = await (0,_DatabaseHandler__WEBPACK_IMPORTED_MODULE_3__.databaseConnection)({\n        database\n    });\n    dbClient.raw('select 1+1 as result').then(()=>{\n        console.log('------Onboarding Database connected------');\n    }).catch((err)=>{\n        console.log(\"DB error-----\", err);\n        process.exit(1);\n    });\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()({\n        mergeParams: true\n    });\n    router.use(async (req, _, next)=>{\n        const user = identity && await identity.getIdentity({\n            request: req\n        });\n        req.user = user || {\n            identity: {\n                type: 'guest',\n                userEntityRef: 'user:default/guest',\n                ownershipEntityRefs: [\n                    'user:default/guest'\n                ]\n            }\n        };\n        req.dbClient = dbClient;\n        next();\n    });\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    router.use('/onboarding', _onboarding__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    router.get('*', async (_, response)=>{\n        logger.info('404!');\n        response.status(404).json({\n            message: \"Page Not Found!\"\n        });\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBU0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGVycm9ySGFuZGxlciwgUGx1Z2luRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2NvbmZpZyc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IElkZW50aXR5QXBpIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYXV0aC1ub2RlJztcblxuaW1wb3J0IHsgZGF0YWJhc2VDb25uZWN0aW9uIH0gZnJvbSAnLi4vRGF0YWJhc2VIYW5kbGVyJztcbmltcG9ydCBPbmJvYXJpZG5nUm91dGUgZnJvbSBcIi4vb25ib2FyZGluZ1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyT3B0aW9ucyB7XG4gIGxvZ2dlcjogTG9nZ2VyO1xuICBkYXRhYmFzZT86IFBsdWdpbkRhdGFiYXNlTWFuYWdlcjtcbiAgY29uZmlnPzogQ29uZmlnO1xuICBpZGVudGl0eT86IElkZW50aXR5QXBpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUm91dGVyKFxuICBvcHRpb25zOiBSb3V0ZXJPcHRpb25zLFxuKTogUHJvbWlzZTxleHByZXNzLlJvdXRlcj4ge1xuICBjb25zdCB7IGxvZ2dlciwgaWRlbnRpdHksIGRhdGFiYXNlIH0gPSBvcHRpb25zO1xuICBjb25zdCBkYkNsaWVudCA9IGF3YWl0IGRhdGFiYXNlQ29ubmVjdGlvbih7IGRhdGFiYXNlIH0gYXMgYW55KVxuXG4gIGRiQ2xpZW50LnJhdygnc2VsZWN0IDErMSBhcyByZXN1bHQnKS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tT25ib2FyZGluZyBEYXRhYmFzZSBjb25uZWN0ZWQtLS0tLS0nKTtcblxuICB9KS5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiREIgZXJyb3ItLS0tLVwiLCBlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gUm91dGVyKHsgbWVyZ2VQYXJhbXM6IHRydWUgfSk7XG4gIHJvdXRlci51c2UoYXN5bmMgKHJlcTogYW55LCBfLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGlkZW50aXR5ICYmIGF3YWl0IGlkZW50aXR5LmdldElkZW50aXR5KHsgcmVxdWVzdDogcmVxIH0pO1xuICAgIHJlcS51c2VyID0gdXNlciB8fCB7XG4gICAgICBpZGVudGl0eToge1xuICAgICAgICB0eXBlOiAnZ3Vlc3QnLFxuICAgICAgICB1c2VyRW50aXR5UmVmOiAndXNlcjpkZWZhdWx0L2d1ZXN0Jywgb3duZXJzaGlwRW50aXR5UmVmczogWyd1c2VyOmRlZmF1bHQvZ3Vlc3QnXVxuICAgICAgfVxuICAgIH1cbiAgICByZXEuZGJDbGllbnQgPSBkYkNsaWVudDtcbiAgICBuZXh0KClcbiAgfSlcbiAgcm91dGVyLnVzZShleHByZXNzLmpzb24oKSk7XG4gIHJvdXRlci51c2UoJy9vbmJvYXJkaW5nJywgT25ib2FyaWRuZ1JvdXRlKVxuXG4gIHJvdXRlci5nZXQoJyonLCBhc3luYyAoXywgcmVzcG9uc2UpID0+IHtcbiAgICBsb2dnZXIuaW5mbygnNDA0IScpO1xuICAgIHJlc3BvbnNlLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIlBhZ2UgTm90IEZvdW5kIVwiIH0pXG4gIH0pO1xuXG4gIHJvdXRlci51c2UoZXJyb3JIYW5kbGVyKCkpO1xuICByZXR1cm4gcm91dGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/router/index.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/router/onboarding.ts":
/*!*****************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/router/onboarding.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ \"../../plugins/onboarding-poc-backend/src/service/controller/index.ts\");\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/getChecklists', _controller__WEBPACK_IMPORTED_MODULE_1__.getChecklists);\nrouter.get('/syncYaml', _controller__WEBPACK_IMPORTED_MODULE_1__.syncChecklist);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci9vbmJvYXJkaW5nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvb25ib2FyZGluZy1wb2MtYmFja2VuZC9zcmMvc2VydmljZS9yb3V0ZXIvb25ib2FyZGluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBnZXRDaGVja2xpc3RzLCBzeW5jQ2hlY2tsaXN0IH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJcIjtcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9nZXRDaGVja2xpc3RzJywgZ2V0Q2hlY2tsaXN0cylcbnJvdXRlci5nZXQoJy9zeW5jWWFtbCcsc3luY0NoZWNrbGlzdClcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/router/onboarding.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/services/Github.service.ts":
/*!***********************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/services/Github.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GithubService\": () => (/* binding */ GithubService)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"../../plugins/onboarding-poc-backend/src/service/util.ts\");\n\nclass GithubService {\n    async getGithubData() {\n        try {\n            const response = await fetch(`${this.baseRepo}/trees/testing?recursive=1`, {\n                headers: {\n                    \"Accept\": \"application/vnd.github+json\",\n                    \"Authorization\": `Bearer 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`,\n                    \"X-GitHub-Api-Version\": \"2022-11-28\"\n                }\n            });\n            if (response.status === 200) {\n                return await response.json();\n            }\n            return [];\n        } catch (error) {\n            console.log(\"🚀 ~ file: GithubHandler.ts:42 ~ GithubHandler ~ getGithubData ~ error\", error.message);\n            return [];\n        }\n    }\n    async GetUserAndChecklistBlob() {\n        try {\n            var _response_tree;\n            const response = await this.getGithubData();\n            const finalResponse = [];\n            const checklistBlobUrl = [];\n            if (response === null || response === void 0 ? void 0 : (_response_tree = response.tree) === null || _response_tree === void 0 ? void 0 : _response_tree.length) {\n                response.tree.forEach(({ path , url  })=>{\n                    if (path) {\n                        const checklist = path.split('/')[1];\n                        if (checklist === 'checklist.yaml') {\n                            checklistBlobUrl.push(url);\n                        }\n                    }\n                });\n            }\n            if (checklistBlobUrl === null || checklistBlobUrl === void 0 ? void 0 : checklistBlobUrl.length) {\n                const resData = await Promise.all(checklistBlobUrl.map(async (url)=>{\n                    const resApi = await fetch(url, {\n                        headers: {\n                            \"Accept\": \"application/vnd.github+json\",\n                            \"Authorization\": `Bearer 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`,\n                            \"X-GitHub-Api-Version\": \"2022-11-28\"\n                        }\n                    });\n                    return await resApi.json();\n                }));\n                resData.forEach(({ sha: groupHash , content , encoding  })=>{\n                    const checklists = (0,_util__WEBPACK_IMPORTED_MODULE_0__.base64YamlToJSON)(content, encoding);\n                    checklists.forEach((val)=>{\n                        let finalGroup = \"\";\n                        finalGroup = val.metadata.group;\n                        val.checklists.forEach((res_data)=>{\n                            const finalRes = {\n                                group: finalGroup,\n                                title: res_data.title,\n                                checklist_uid: res_data.id,\n                                formSchema: JSON.stringify(res_data.checklistItems),\n                                forRoles: res_data.forRoles.join(','),\n                                groupHash\n                            };\n                            finalResponse.push(finalRes);\n                        });\n                    });\n                });\n            }\n            return finalResponse;\n        } catch (error) {\n            console.log(\"🚀 ~ file: Github.service.ts:64 ~ GithubService ~ GetUserAndChecklistBlob ~ error\", error);\n            return [];\n        }\n    }\n    constructor(){\n        this.baseRepo = 'https://api.github.com/repos/NishkarshRaj/rearportal-org-catalogs/git';\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3NlcnZpY2VzL0dpdGh1Yi5zZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBGQTs7QUFzRkEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvb25ib2FyZGluZy1wb2MtYmFja2VuZC9zcmMvc2VydmljZS9zZXJ2aWNlcy9HaXRodWIuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNlNjRZYW1sVG9KU09OIH0gZnJvbSBcIi4uL3V0aWxcIjtcblxuZXhwb3J0IGNsYXNzIEdpdGh1YlNlcnZpY2Uge1xuICAgIGJhc2VSZXBvID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvTmlzaGthcnNoUmFqL3JlYXJwb3J0YWwtb3JnLWNhdGFsb2dzL2dpdCdcblxuICAgIGFzeW5jIGdldEdpdGh1YkRhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuYmFzZVJlcG99L3RyZWVzL3Rlc3Rpbmc/cmVjdXJzaXZlPTFgLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciBnaHBfN2pidlNtM3dhakJGRW9LMEVoYjg5R2FqUDNnTElKM3duNEtlYCxcbiAgICAgICAgICAgICAgICAgICAgXCJYLUdpdEh1Yi1BcGktVmVyc2lvblwiOiBcIjIwMjItMTEtMjhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhd2FpdCByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBHaXRodWJIYW5kbGVyLnRzOjQyIH4gR2l0aHViSGFuZGxlciB+IGdldEdpdGh1YkRhdGEgfiBlcnJvclwiLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIEdldFVzZXJBbmRDaGVja2xpc3RCbG9iKCkge1xuICAgICAgICB0cnkge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRHaXRodWJEYXRhKClcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVzcG9uc2U6IHsgZ3JvdXA6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgY2hlY2tsaXN0X3VpZDogc3RyaW5nOyBmb3JtU2NoZW1hOiBzdHJpbmc7IGZvclJvbGVzOiBzdHJpbmc7IGNoZWNrbGlzdEhhc2g6IHN0cmluZzsgfVtdID0gW11cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdEJsb2JVcmw6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBpZiAocmVzcG9uc2U/LnRyZWU/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRyZWUuZm9yRWFjaCgoeyBwYXRoLCB1cmwgfTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBwYXRoLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0ID09PSAnY2hlY2tsaXN0LnlhbWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0QmxvYlVybC5wdXNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoZWNrbGlzdEJsb2JVcmw/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChjaGVja2xpc3RCbG9iVXJsLm1hcCgoYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc0FwaSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgZ2hwXzdqYnZTbTN3YWpCRkVvSzBFaGI4OUdhalAzZ0xJSjN3bjRLZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYLUdpdEh1Yi1BcGktVmVyc2lvblwiOiBcIjIwMjItMTEtMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhd2FpdCByZXNBcGkuanNvbigpKVxuICAgICAgICAgICAgICAgIH0pKSlcblxuICAgICAgICAgICAgICAgIHJlc0RhdGEuZm9yRWFjaCgoeyBzaGE6IGdyb3VwSGFzaCwgY29udGVudCwgZW5jb2RpbmcgfSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdHMgPSBiYXNlNjRZYW1sVG9KU09OKGNvbnRlbnQsIGVuY29kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0cy5mb3JFYWNoKCh2YWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7IGdyb3VwOiBzdHJpbmc7IH07IGNoZWNrbGlzdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nOyBpZDogc3RyaW5nOyBjaGVja2xpc3RJdGVtczogYW55W107IGZvclJvbGVzIC8vIGFwaS5naXRodWIuY29tL3JlcG9zL05pc2hrYXJzaFJhai9yZWFycG9ydGFsLW9yZy1jYXRhbG9ncy9naXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1bXTtcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmFsR3JvdXA6IHN0cmluZyA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsR3JvdXAgPSB2YWwubWV0YWRhdGEuZ3JvdXBcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmNoZWNrbGlzdHMuZm9yRWFjaCgocmVzX2RhdGE6IHsgdGl0bGU6IHN0cmluZzsgaWQ6IHN0cmluZzsgY2hlY2tsaXN0SXRlbXM6IGFueVtdOyBmb3JSb2xlczogc3RyaW5nW107IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaW5hbFJlczogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cDogZmluYWxHcm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc19kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RfdWlkOiByZXNfZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVNjaGVtYTogSlNPTi5zdHJpbmdpZnkocmVzX2RhdGEuY2hlY2tsaXN0SXRlbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JSb2xlczogcmVzX2RhdGEuZm9yUm9sZXMuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxSZXNwb25zZS5wdXNoKGZpbmFsUmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsUmVzcG9uc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBHaXRodWIuc2VydmljZS50czo2NCB+IEdpdGh1YlNlcnZpY2UgfiBHZXRVc2VyQW5kQ2hlY2tsaXN0QmxvYiB+IGVycm9yXCIsIGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/services/Github.service.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/services/index.ts":
/*!**************************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/services/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GithubService\": () => (/* reexport safe */ _Github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService)\n/* harmony export */ });\n/* harmony import */ var _Github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Github.service */ \"../../plugins/onboarding-poc-backend/src/service/services/Github.service.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3NlcnZpY2VzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvb25ib2FyZGluZy1wb2MtYmFja2VuZC9zcmMvc2VydmljZS9zZXJ2aWNlcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9HaXRodWIuc2VydmljZVwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/services/index.ts\n");

/***/ }),

/***/ "../../plugins/onboarding-poc-backend/src/service/util.ts":
/*!****************************************************************!*\
  !*** ../../plugins/onboarding-poc-backend/src/service/util.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"base64YamlToJSON\": () => (/* binding */ base64YamlToJSON)\n/* harmony export */ });\nconst yaml = __webpack_require__(/*! js-yaml */ \"js-yaml\");\nconst base64YamlToJSON = (raw, encoding)=>{\n    const rawYaml = Buffer.from(raw, encoding).toString();\n    const rawJson = yaml.loadAll(rawYaml);\n    return rawJson;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3V0aWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGx1Z2lucy9vbmJvYXJkaW5nLXBvYy1iYWNrZW5kL3NyYy9zZXJ2aWNlL3V0aWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeWFtbCA9IHJlcXVpcmUoJ2pzLXlhbWwnKTtcblxuZXhwb3J0IGNvbnN0IGJhc2U2NFlhbWxUb0pTT04gPSAocmF3OiBzdHJpbmcsIGVuY29kaW5nOidiYXNlNjQnKSA9PiB7XG4gICAgY29uc3QgcmF3WWFtbCA9IEJ1ZmZlci5mcm9tKHJhdywgZW5jb2RpbmcpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcmF3SnNvbj0geWFtbC5sb2FkQWxsKHJhd1lhbWwpXG4gICAgcmV0dXJuIHJhd0pzb247XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/onboarding-poc-backend/src/service/util.ts\n");

/***/ }),

/***/ "../../plugins/toolkit-backend/src/index.ts":
/*!**************************************************!*\
  !*** ../../plugins/toolkit-backend/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/toolkit-backend/src/service/router/index.ts\");\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvdG9vbGtpdC1iYWNrZW5kL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS9yb3V0ZXInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/toolkit-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/toolkit-backend/src/service/DatabaseHandler.ts":
/*!********************************************************************!*\
  !*** ../../plugins/toolkit-backend/src/service/DatabaseHandler.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"databaseConnection\": () => (/* binding */ databaseConnection)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n\nconst migrationsDir = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.resolvePackagePath)('@internal/plugin-toolkit-backend', 'migrations');\nconst databaseConnection = async (options)=>{\n    var _database_migrations;\n    const { database  } = options;\n    const client = await database.getClient();\n    if (!((_database_migrations = database.migrations) === null || _database_migrations === void 0 ? void 0 : _database_migrations.skip)) {\n        await client.migrate.latest({\n            directory: migrationsDir\n        });\n    }\n    return client;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2UvRGF0YWJhc2VIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBS0E7QUFRQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL3Rvb2xraXQtYmFja2VuZC9zcmMvc2VydmljZS9EYXRhYmFzZUhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBQbHVnaW5EYXRhYmFzZU1hbmFnZXIsXG4gICAgcmVzb2x2ZVBhY2thZ2VQYXRoLFxufSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcblxuY29uc3QgbWlncmF0aW9uc0RpciA9IHJlc29sdmVQYWNrYWdlUGF0aChcbiAgICAnQGludGVybmFsL3BsdWdpbi10b29sa2l0LWJhY2tlbmQnLFxuICAgICdtaWdyYXRpb25zJyxcbik7XG5cbnR5cGUgT3B0aW9ucyA9IHtcbiAgICBkYXRhYmFzZTogUGx1Z2luRGF0YWJhc2VNYW5hZ2VyO1xufTtcbmV4cG9ydCBjb25zdCBkYXRhYmFzZUNvbm5lY3Rpb24gPSBhc3luYyAob3B0aW9uczogT3B0aW9ucykgPT4ge1xuXG4gICAgY29uc3QgeyBkYXRhYmFzZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBkYXRhYmFzZS5nZXRDbGllbnQoKTtcbiAgICBpZiAoIWRhdGFiYXNlLm1pZ3JhdGlvbnM/LnNraXApIHtcblxuICAgICAgICBhd2FpdCBjbGllbnQubWlncmF0ZS5sYXRlc3Qoe1xuICAgICAgICAgICAgZGlyZWN0b3J5OiBtaWdyYXRpb25zRGlyLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/toolkit-backend/src/service/DatabaseHandler.ts\n");

/***/ }),

/***/ "../../plugins/toolkit-backend/src/service/controller/index.ts":
/*!*********************************************************************!*\
  !*** ../../plugins/toolkit-backend/src/service/controller/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToolkit\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.addToolkit),\n/* harmony export */   \"createUpdateToolkit\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.createUpdateToolkit),\n/* harmony export */   \"deleteToolkitById\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.deleteToolkitById),\n/* harmony export */   \"getToolkits\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.getToolkits),\n/* harmony export */   \"myToolkits\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.myToolkits),\n/* harmony export */   \"removeToolkit\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.removeToolkit),\n/* harmony export */   \"toolkitById\": () => (/* reexport safe */ _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__.toolkitById)\n/* harmony export */ });\n/* harmony import */ var _toolkit_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolkit.controller */ \"../../plugins/toolkit-backend/src/service/controller/toolkit.controller.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2UvY29udHJvbGxlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL3Rvb2xraXQtYmFja2VuZC9zcmMvc2VydmljZS9jb250cm9sbGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3Rvb2xraXQuY29udHJvbGxlclwiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/toolkit-backend/src/service/controller/index.ts\n");

/***/ }),

/***/ "../../plugins/toolkit-backend/src/service/controller/toolkit.controller.ts":
/*!**********************************************************************************!*\
  !*** ../../plugins/toolkit-backend/src/service/controller/toolkit.controller.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToolkit\": () => (/* binding */ addToolkit),\n/* harmony export */   \"createUpdateToolkit\": () => (/* binding */ createUpdateToolkit),\n/* harmony export */   \"deleteToolkitById\": () => (/* binding */ deleteToolkitById),\n/* harmony export */   \"getToolkits\": () => (/* binding */ getToolkits),\n/* harmony export */   \"myToolkits\": () => (/* binding */ myToolkits),\n/* harmony export */   \"removeToolkit\": () => (/* binding */ removeToolkit),\n/* harmony export */   \"toolkitById\": () => (/* binding */ toolkitById)\n/* harmony export */ });\nconst createUpdateToolkit = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const user = req.user;\n        req.body.owner = user.identity.userEntityRef;\n        if (req.params.id) {\n            const { logo , title , url , type  } = req.body;\n            const toolkit = await client('toolkit').update({\n                title,\n                logo,\n                url,\n                type\n            }).where({\n                id: req.params.id\n            });\n            if (toolkit) {\n                if (type === 'private') {\n                    await client('toolkit_item').where({\n                        toolkit: req.params.id\n                    }).whereNot({\n                        user: user.identity.userEntityRef\n                    }).delete();\n                }\n                res.status(200).send(\"Updated\");\n            } else {\n                res.status(400).send(\"Something went wrong\");\n            }\n        } else {\n            const toolkit = await client.insert(req.body).into('toolkit').returning('id');\n            if (toolkit.length) {\n                const { id  } = toolkit[0];\n                await client.insert({\n                    toolkit: id,\n                    isPrivate: req.body.type === 'private',\n                    user: req.body.owner\n                }).into(\"toolkit_item\");\n                res.status(200).send(\"Created\");\n            } else {\n                res.status(400).send(\"Something went wrong\");\n            }\n        }\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:11 ~ createToolkit ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst addToolkit = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const { toolkits  } = req.body;\n        const user = req.user.identity.userEntityRef;\n        const toolkitData = [];\n        const previousData = await client('toolkit_item').where({\n            user\n        }).select('toolkit');\n        const checkIsExists = await client('toolkit').whereIn('id', toolkits).where({\n            type: 'public'\n        });\n        toolkits.forEach((_id)=>{\n            const checkPrev = previousData.find(({ toolkit  })=>toolkit === _id);\n            const checkExists = checkIsExists.find(({ id  })=>id === _id);\n            if (!checkPrev && checkExists) {\n                toolkitData.push({\n                    toolkit: checkExists.id,\n                    isPrivate: false,\n                    user: user\n                });\n            }\n        });\n        if (toolkitData === null || toolkitData === void 0 ? void 0 : toolkitData.length) {\n            await client.insert([\n                ...toolkitData\n            ]).into(\"toolkit_item\");\n            res.send(\"Toolkits added successfully\");\n        } else {\n            res.send(\"No Toolkits founded or already exists\");\n        }\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:31 ~ addToolkit= ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst myToolkits = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const user = req.user;\n        const userId = user.identity.userEntityRef;\n        const condition = {\n            'toolkit_item.user': userId\n        };\n        const data = await client('toolkit_item').where(condition).innerJoin('toolkit', 'toolkit.id', 'toolkit_item.toolkit');\n        res.status(200).json(data);\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:31 ~ addTookit= ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst toolkitById = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const data = await client('toolkit').where({\n            'id': req.params.id\n        }).first();\n        res.status(200).json(data);\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:31 ~ addTookit= ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst getToolkits = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const user = req.user.identity.userEntityRef;\n        /**\n         * Get the list of og the user\n         */ let toolOfUser = await client('toolkit_item').where({\n            'toolkit_item.user': user\n        }).select('toolkit');\n        toolOfUser = toolOfUser.map(({ toolkit  })=>toolkit);\n        const data = await client('toolkit_item').whereNot({\n            'toolkit_item.user': user,\n            'toolkit.type': 'private'\n        }).whereNotIn('toolkit.id', toolOfUser).innerJoin('toolkit', 'toolkit.id', 'toolkit_item.toolkit');\n        res.status(200).json(data);\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:31 ~ addTookit= ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst deleteToolkitById = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const user = req.user;\n        const { id  } = req.params;\n        const data = await client('toolkit').where({\n            id,\n            owner: user.identity.userEntityRef\n        }).delete();\n        if (data) {\n            res.status(200).send(\"Deleted Successfully\");\n        } else {\n            res.status(400).send(\"Invalid request\");\n        }\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:95 ~ deleteToolkitById ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\nconst removeToolkit = async (req, res)=>{\n    try {\n        const client = req.dbClient;\n        const user = req.user.identity.userEntityRef;\n        const { toolkit  } = req.params;\n        const data = await client('toolkit_item').where({\n            toolkit,\n            user\n        }).delete();\n        if (data) {\n            res.status(200).send(\"Removed Successfully\");\n        } else {\n            res.status(400).send(\"Invalid request\");\n        }\n    } catch (error) {\n        console.log(\"🚀 ~ file: toolkit.controller.ts:95 ~ deleteToolkitById ~ error\", error);\n        res.status(500).send(\"Internal server error!\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2UvY29udHJvbGxlci90b29sa2l0LmNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2UvY29udHJvbGxlci90b29sa2l0LmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgS25leCB9IGZyb20gXCJrbmV4XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVUb29sa2l0ID0gYXN5bmMgKHJlcTogYW55LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gcmVxLmRiQ2xpZW50IGFzIEtuZXg8YW55LCBhbnlbXT47XG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlclxuICAgICAgICByZXEuYm9keS5vd25lciA9IHVzZXIuaWRlbnRpdHkudXNlckVudGl0eVJlZjtcbiAgICAgICAgaWYgKHJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbG9nbywgdGl0bGUsIHVybCwgdHlwZSB9ID0gcmVxLmJvZHlcbiAgICAgICAgICAgIGNvbnN0IHRvb2xraXQgPSBhd2FpdCBjbGllbnQoJ3Rvb2xraXQnKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgIHRpdGxlLCBsb2dvLCB1cmwsIHR5cGVcbiAgICAgICAgICAgIH0pLndoZXJlKHsgaWQ6IHJlcS5wYXJhbXMuaWQgfSk7XG4gICAgICAgICAgICBpZiAodG9vbGtpdCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncHJpdmF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY2xpZW50KCd0b29sa2l0X2l0ZW0nKS53aGVyZSh7IHRvb2xraXQ6IHJlcS5wYXJhbXMuaWQgfSkud2hlcmVOb3QoeyB1c2VyOiB1c2VyLmlkZW50aXR5LnVzZXJFbnRpdHlSZWYgfSkuZGVsZXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXCJVcGRhdGVkXCIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b29sa2l0ID0gYXdhaXQgY2xpZW50Lmluc2VydChyZXEuYm9keSkuaW50bygndG9vbGtpdCcpLnJldHVybmluZygnaWQnKVxuICAgICAgICAgICAgaWYgKHRvb2xraXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gdG9vbGtpdFswXVxuICAgICAgICAgICAgICAgIGF3YWl0IGNsaWVudC5pbnNlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0b29sa2l0OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgaXNQcml2YXRlOiByZXEuYm9keS50eXBlID09PSAncHJpdmF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlcS5ib2R5Lm93bmVyXG4gICAgICAgICAgICAgICAgfSkuaW50byhcInRvb2xraXRfaXRlbVwiKVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiQ3JlYXRlZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiB0b29sa2l0LmNvbnRyb2xsZXIudHM6MTEgfiBjcmVhdGVUb29sa2l0IH4gZXJyb3JcIiwgZXJyb3IpXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yIVwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvb2xraXQgPSBhc3luYyAocmVxOiBhbnksIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSByZXEuZGJDbGllbnQgYXMgS25leDxhbnksIGFueVtdPjtcbiAgICAgICAgY29uc3QgeyB0b29sa2l0cyB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyLmlkZW50aXR5LnVzZXJFbnRpdHlSZWZcbiAgICAgICAgY29uc3QgdG9vbGtpdERhdGE6IGFueVtdID0gW11cbiAgICAgICAgY29uc3QgcHJldmlvdXNEYXRhID0gYXdhaXQgY2xpZW50KCd0b29sa2l0X2l0ZW0nKS53aGVyZSh7IHVzZXIgfSkuc2VsZWN0KCd0b29sa2l0JylcbiAgICAgICAgY29uc3QgY2hlY2tJc0V4aXN0cyA9IGF3YWl0IGNsaWVudCgndG9vbGtpdCcpLndoZXJlSW4oJ2lkJywgdG9vbGtpdHMpLndoZXJlKHsgdHlwZTogJ3B1YmxpYycgfSlcbiAgICAgICAgdG9vbGtpdHMuZm9yRWFjaCgoX2lkOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUHJldiA9IHByZXZpb3VzRGF0YS5maW5kKCh7IHRvb2xraXQgfSkgPT4gdG9vbGtpdCA9PT0gX2lkKVxuICAgICAgICAgICAgY29uc3QgY2hlY2tFeGlzdHMgPSBjaGVja0lzRXhpc3RzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IF9pZClcbiAgICAgICAgICAgIGlmICghY2hlY2tQcmV2ICYmIGNoZWNrRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgdG9vbGtpdERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRvb2xraXQ6IGNoZWNrRXhpc3RzLmlkLFxuICAgICAgICAgICAgICAgICAgICBpc1ByaXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHRvb2xraXREYXRhPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudC5pbnNlcnQoWy4uLnRvb2xraXREYXRhXSkuaW50byhcInRvb2xraXRfaXRlbVwiKVxuICAgICAgICAgICAgcmVzLnNlbmQoXCJUb29sa2l0cyBhZGRlZCBzdWNjZXNzZnVsbHlcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKFwiTm8gVG9vbGtpdHMgZm91bmRlZCBvciBhbHJlYWR5IGV4aXN0c1wiKVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IHRvb2xraXQuY29udHJvbGxlci50czozMSB+IGFkZFRvb2xraXQ9IH4gZXJyb3JcIiwgZXJyb3IpXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yIVwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG15VG9vbGtpdHMgPSBhc3luYyAocmVxOiBhbnksIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSByZXEuZGJDbGllbnQgYXMgS25leDxhbnksIGFueVtdPjtcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyXG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIuaWRlbnRpdHkudXNlckVudGl0eVJlZlxuICAgICAgICBjb25zdCBjb25kaXRpb246IGFueSA9IHtcbiAgICAgICAgICAgICd0b29sa2l0X2l0ZW0udXNlcic6IHVzZXJJZCxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQoJ3Rvb2xraXRfaXRlbScpLndoZXJlKGNvbmRpdGlvbikuaW5uZXJKb2luKCd0b29sa2l0JywgJ3Rvb2xraXQuaWQnLCAndG9vbGtpdF9pdGVtLnRvb2xraXQnKVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogdG9vbGtpdC5jb250cm9sbGVyLnRzOjMxIH4gYWRkVG9va2l0PSB+IGVycm9yXCIsIGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkludGVybmFsIHNlcnZlciBlcnJvciFcIilcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b29sa2l0QnlJZCA9IGFzeW5jIChyZXE6IGFueSwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHJlcS5kYkNsaWVudCBhcyBLbmV4PGFueSwgYW55W10+O1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50KCd0b29sa2l0Jykud2hlcmUoeyAnaWQnOiByZXEucGFyYW1zLmlkIH0pLmZpcnN0KClcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IHRvb2xraXQuY29udHJvbGxlci50czozMSB+IGFkZFRvb2tpdD0gfiBlcnJvclwiLCBlcnJvcilcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IhXCIpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9vbGtpdHMgPSBhc3luYyAocmVxOiBhbnksIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSByZXEuZGJDbGllbnQgYXMgS25leDxhbnksIGFueVtdPjtcbiAgICAgICAgY29uc3QgdXNlciA9IHJlcS51c2VyLmlkZW50aXR5LnVzZXJFbnRpdHlSZWZcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBsaXN0IG9mIG9nIHRoZSB1c2VyXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgdG9vbE9mVXNlciA9IGF3YWl0IGNsaWVudCgndG9vbGtpdF9pdGVtJykud2hlcmUoeyAndG9vbGtpdF9pdGVtLnVzZXInOiB1c2VyIH0pLnNlbGVjdCgndG9vbGtpdCcpXG4gICAgICAgIHRvb2xPZlVzZXIgPSB0b29sT2ZVc2VyLm1hcCgoeyB0b29sa2l0IH0pID0+IHRvb2xraXQpXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudCgndG9vbGtpdF9pdGVtJykud2hlcmVOb3QoeyAndG9vbGtpdF9pdGVtLnVzZXInOiB1c2VyLCAndG9vbGtpdC50eXBlJzogJ3ByaXZhdGUnIH0pLndoZXJlTm90SW4oJ3Rvb2xraXQuaWQnLCB0b29sT2ZVc2VyKS5pbm5lckpvaW4oJ3Rvb2xraXQnLCAndG9vbGtpdC5pZCcsICd0b29sa2l0X2l0ZW0udG9vbGtpdCcpXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiB0b29sa2l0LmNvbnRyb2xsZXIudHM6MzEgfiBhZGRUb29raXQ9IH4gZXJyb3JcIiwgZXJyb3IpXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yIVwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvb2xraXRCeUlkID0gYXN5bmMgKHJlcTogYW55LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gcmVxLmRiQ2xpZW50IGFzIEtuZXg8YW55LCBhbnlbXT47XG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXEudXNlclxuICAgICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudCgndG9vbGtpdCcpLndoZXJlKHsgaWQsIG93bmVyOiB1c2VyLmlkZW50aXR5LnVzZXJFbnRpdHlSZWYgfSkuZGVsZXRlKClcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiRGVsZXRlZCBTdWNjZXNzZnVsbHlcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiSW52YWxpZCByZXF1ZXN0XCIpXG5cbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogdG9vbGtpdC5jb250cm9sbGVyLnRzOjk1IH4gZGVsZXRlVG9vbGtpdEJ5SWQgfiBlcnJvclwiLCBlcnJvcilcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IhXCIpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9vbGtpdCA9IGFzeW5jIChyZXE6IGFueSwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHJlcS5kYkNsaWVudCBhcyBLbmV4PGFueSwgYW55W10+O1xuICAgICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXIuaWRlbnRpdHkudXNlckVudGl0eVJlZlxuICAgICAgICBjb25zdCB7IHRvb2xraXQgfSA9IHJlcS5wYXJhbXNcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50KCd0b29sa2l0X2l0ZW0nKS53aGVyZSh7IHRvb2xraXQsIHVzZXIgfSkuZGVsZXRlKClcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiUmVtb3ZlZCBTdWNjZXNzZnVsbHlcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiSW52YWxpZCByZXF1ZXN0XCIpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiB0b29sa2l0LmNvbnRyb2xsZXIudHM6OTUgfiBkZWxldGVUb29sa2l0QnlJZCB+IGVycm9yXCIsIGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkludGVybmFsIHNlcnZlciBlcnJvciFcIilcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/toolkit-backend/src/service/controller/toolkit.controller.ts\n");

/***/ }),

/***/ "../../plugins/toolkit-backend/src/service/router/index.ts":
/*!*****************************************************************!*\
  !*** ../../plugins/toolkit-backend/src/service/router/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DatabaseHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DatabaseHandler */ \"../../plugins/toolkit-backend/src/service/DatabaseHandler.ts\");\n/* harmony import */ var _toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolkit */ \"../../plugins/toolkit-backend/src/service/router/toolkit.ts\");\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n\nasync function createRouter(options) {\n    const { logger , identity , database  } = options;\n    const dbClient = await (0,_DatabaseHandler__WEBPACK_IMPORTED_MODULE_3__.databaseConnection)({\n        database\n    });\n    dbClient.raw('select 1+1 as result').then(()=>{\n        console.log('------Database connected------');\n    }).catch((err)=>{\n        console.log(\"DB error-----\", err);\n        process.exit(1);\n    });\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()({\n        mergeParams: true\n    });\n    router.use(async (req, _, next)=>{\n        const user = identity && await identity.getIdentity({\n            request: req\n        });\n        req.user = user || {\n            identity: {\n                type: 'guest',\n                userEntityRef: 'user:default/guest',\n                ownershipEntityRefs: [\n                    'user:default/guest'\n                ]\n            }\n        };\n        req.dbClient = dbClient;\n        next();\n    });\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    router.use('/', _toolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    router.get('/health', (_, response)=>{\n        logger.info('PONG!');\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.get('*', async (_, response)=>{\n        logger.info('404!');\n        response.status(404).json({\n            message: \"Page Not Found!\"\n        });\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2Uvcm91dGVyL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFTQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL3Rvb2xraXQtYmFja2VuZC9zcmMvc2VydmljZS9yb3V0ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBCYWNrc3RhZ2UgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIsIFBsdWdpbkRhdGFiYXNlTWFuYWdlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGJhY2tzdGFnZS9jb25maWcnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ2V4cHJlc3MtcHJvbWlzZS1yb3V0ZXInO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBJZGVudGl0eUFwaSB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWF1dGgtbm9kZSc7XG5pbXBvcnQgeyBkYXRhYmFzZUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vRGF0YWJhc2VIYW5kbGVyXCI7XG5pbXBvcnQgVG9vbGtpdFJvdXRlIGZyb20gXCIuL3Rvb2xraXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlck9wdGlvbnMge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgZGF0YWJhc2U/OiBQbHVnaW5EYXRhYmFzZU1hbmFnZXI7XG4gIGNvbmZpZz86IENvbmZpZztcbiAgaWRlbnRpdHk/OiBJZGVudGl0eUFwaTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihcbiAgb3B0aW9uczogUm91dGVyT3B0aW9ucyxcbik6IFByb21pc2U8ZXhwcmVzcy5Sb3V0ZXI+IHtcbiAgY29uc3QgeyBsb2dnZXIsIGlkZW50aXR5LCBkYXRhYmFzZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgZGJDbGllbnQgPSBhd2FpdCBkYXRhYmFzZUNvbm5lY3Rpb24oeyBkYXRhYmFzZSB9IGFzIGFueSlcblxuICBkYkNsaWVudC5yYXcoJ3NlbGVjdCAxKzEgYXMgcmVzdWx0JykudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLURhdGFiYXNlIGNvbm5lY3RlZC0tLS0tLScpO1xuXG4gIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEQiBlcnJvci0tLS0tXCIsIGVycik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9KTtcblxuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcih7IG1lcmdlUGFyYW1zOiB0cnVlIH0pO1xuICByb3V0ZXIudXNlKGFzeW5jIChyZXE6IGFueSwgXywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBpZGVudGl0eSAmJiBhd2FpdCBpZGVudGl0eS5nZXRJZGVudGl0eSh7IHJlcXVlc3Q6IHJlcSB9KTtcbiAgICByZXEudXNlciA9IHVzZXIgfHwge1xuICAgICAgaWRlbnRpdHk6IHtcbiAgICAgICAgdHlwZTogJ2d1ZXN0JyxcbiAgICAgICAgdXNlckVudGl0eVJlZjogJ3VzZXI6ZGVmYXVsdC9ndWVzdCcsIG93bmVyc2hpcEVudGl0eVJlZnM6IFsndXNlcjpkZWZhdWx0L2d1ZXN0J11cbiAgICAgIH1cbiAgICB9XG4gICAgcmVxLmRiQ2xpZW50ID0gZGJDbGllbnQ7XG4gICAgbmV4dCgpXG4gIH0pXG4gIHJvdXRlci51c2UoZXhwcmVzcy5qc29uKCkpO1xuICByb3V0ZXIudXNlKCcvJywgVG9vbGtpdFJvdXRlKVxuXG4gIHJvdXRlci5nZXQoJy9oZWFsdGgnLCAoXywgcmVzcG9uc2UpID0+IHtcbiAgICBsb2dnZXIuaW5mbygnUE9ORyEnKTtcbiAgICByZXNwb25zZS5qc29uKHsgc3RhdHVzOiAnb2snIH0pO1xuICB9KTtcblxuICByb3V0ZXIuZ2V0KCcqJywgYXN5bmMgKF8sIHJlc3BvbnNlKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oJzQwNCEnKTtcbiAgICByZXNwb25zZS5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJQYWdlIE5vdCBGb3VuZCFcIiB9KVxuICB9KTtcblxuICByb3V0ZXIudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/toolkit-backend/src/service/router/index.ts\n");

/***/ }),

/***/ "../../plugins/toolkit-backend/src/service/router/toolkit.ts":
/*!*******************************************************************!*\
  !*** ../../plugins/toolkit-backend/src/service/router/toolkit.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ \"../../plugins/toolkit-backend/src/service/controller/index.ts\");\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/myToolkits', _controller__WEBPACK_IMPORTED_MODULE_1__.myToolkits);\nrouter.get('/getToolkits', _controller__WEBPACK_IMPORTED_MODULE_1__.getToolkits);\nrouter.get('/:id', _controller__WEBPACK_IMPORTED_MODULE_1__.toolkitById);\nrouter.post('/create', _controller__WEBPACK_IMPORTED_MODULE_1__.createUpdateToolkit);\nrouter.put('/update/:id', _controller__WEBPACK_IMPORTED_MODULE_1__.createUpdateToolkit);\nrouter.post('/add', _controller__WEBPACK_IMPORTED_MODULE_1__.addToolkit);\nrouter.delete('/delete/:id', _controller__WEBPACK_IMPORTED_MODULE_1__.deleteToolkitById);\nrouter.delete('/remove/:toolkit', _controller__WEBPACK_IMPORTED_MODULE_1__.removeToolkit);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2Uvcm91dGVyL3Rvb2xraXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvcGx1Z2lucy90b29sa2l0LWJhY2tlbmQvc3JjL3NlcnZpY2Uvcm91dGVyL3Rvb2xraXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IGFkZFRvb2xraXQsIGNyZWF0ZVVwZGF0ZVRvb2xraXQsIGRlbGV0ZVRvb2xraXRCeUlkLCB0b29sa2l0QnlJZCwgbXlUb29sa2l0cywgZ2V0VG9vbGtpdHMsIHJlbW92ZVRvb2xraXQgfSBmcm9tIFwiLi4vY29udHJvbGxlclwiXG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xucm91dGVyLmdldCgnL215VG9vbGtpdHMnLCBteVRvb2xraXRzKVxucm91dGVyLmdldCgnL2dldFRvb2xraXRzJywgZ2V0VG9vbGtpdHMpXG5yb3V0ZXIuZ2V0KCcvOmlkJywgdG9vbGtpdEJ5SWQpXG5yb3V0ZXIucG9zdCgnL2NyZWF0ZScsIGNyZWF0ZVVwZGF0ZVRvb2xraXQpXG5yb3V0ZXIucHV0KCcvdXBkYXRlLzppZCcsIGNyZWF0ZVVwZGF0ZVRvb2xraXQpXG5yb3V0ZXIucG9zdCgnL2FkZCcsIGFkZFRvb2xraXQpXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlLzppZCcsIGRlbGV0ZVRvb2xraXRCeUlkKVxucm91dGVyLmRlbGV0ZSgnL3JlbW92ZS86dG9vbGtpdCcsIHJlbW92ZVRvb2xraXQpXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/toolkit-backend/src/service/router/toolkit.ts\n");

/***/ }),

/***/ "../../plugins/uptl-backend/src/index.ts":
/*!***********************************************!*\
  !*** ../../plugins/uptl-backend/src/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/uptl-backend/src/service/router.ts\");\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy91cHRsLWJhY2tlbmQvc3JjL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvUHJvamVjdC93aC12YXVsdC9wb3J0YWwtYXBwL3BsdWdpbnMvdXB0bC1iYWNrZW5kL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIEJhY2tzdGFnZSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS9yb3V0ZXInO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../plugins/uptl-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/uptl-backend/src/service/router.ts":
/*!********************************************************!*\
  !*** ../../plugins/uptl-backend/src/service/router.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRouter\": () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common?95f9\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * Copyright 2020 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\nasync function createRouter(options) {\n    const { logger , config  } = options;\n    const proxyOptions = {\n        ignorePath: true,\n        changeOrigin: true,\n        logLevel: 'debug',\n        target: config.getOptionalString('uptl.target'),\n        ...config.getOptional(`uptl`)\n    };\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    router.get('/health', (_, response)=>{\n        logger.info('PONG!');\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.get('/', (0,http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__.createProxyMiddleware)(proxyOptions));\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy91cHRsLWJhY2tlbmQvc3JjL3NlcnZpY2Uvcm91dGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBR0E7QUFDQTtBQUlBO0FBV0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9wbHVnaW5zL3VwdGwtYmFja2VuZC9zcmMvc2VydmljZS9yb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBCYWNrc3RhZ2UgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdleHByZXNzLXByb21pc2Utcm91dGVyJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnQGJhY2tzdGFnZS9jb25maWcnO1xuaW1wb3J0IHsgUGx1Z2luRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQge1xuICBjcmVhdGVQcm94eU1pZGRsZXdhcmUsXG4gIE9wdGlvbnNcbn0gZnJvbSAnaHR0cC1wcm94eS1taWRkbGV3YXJlJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJPcHRpb25zIHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIGNvbmZpZzogQ29uZmlnO1xuICBkYXRhYmFzZTogUGx1Z2luRGF0YWJhc2VNYW5hZ2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUm91dGVyKFxuICBvcHRpb25zOiBSb3V0ZXJPcHRpb25zLFxuKTogUHJvbWlzZTxleHByZXNzLlJvdXRlcj4ge1xuICBjb25zdCB7IGxvZ2dlciwgY29uZmlnIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHByb3h5T3B0aW9uczogT3B0aW9ucyA9IHtcbiAgICBpZ25vcmVQYXRoOiB0cnVlLFxuICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICBsb2dMZXZlbDogJ2RlYnVnJyxcbiAgICB0YXJnZXQ6IGNvbmZpZy5nZXRPcHRpb25hbFN0cmluZygndXB0bC50YXJnZXQnKSxcbiAgICAuLi5jb25maWcuZ2V0T3B0aW9uYWwoYHVwdGxgKVxuICB9O1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuICByb3V0ZXIudXNlKGV4cHJlc3MuanNvbigpKTtcblxuICByb3V0ZXIuZ2V0KCcvaGVhbHRoJywgKF8sIHJlc3BvbnNlKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oJ1BPTkchJyk7XG4gICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJyB9KTtcbiAgfSk7XG5cbiAgcm91dGVyLmdldCgnLycsIGNyZWF0ZVByb3h5TWlkZGxld2FyZShwcm94eU9wdGlvbnMpKTtcblxuICByb3V0ZXIudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/uptl-backend/src/service/router.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvYXBwbGUvRGVza3RvcC9Qcm9qZWN0L3doLXZhdWx0L3BvcnRhbC1hcHAvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0cmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcblx0fSk7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0aWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcblx0XHRsb2coXG5cdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiAoVGhleSB3b3VsZCBuZWVkIGEgZnVsbCByZWxvYWQhKVwiXG5cdFx0KTtcblx0XHR1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG5cdH0gZWxzZSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG5cdFx0cmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJudW1iZXJcIjtcblx0XHR9KTtcblx0XHRpZiAobnVtYmVySWRzKVxuXHRcdFx0bG9nKFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0J1tITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBvcHRpbWl6YXRpb24ubW9kdWxlSWRzOiBcIm5hbWVkXCIgZm9yIG1vZHVsZSBuYW1lcy4nXG5cdFx0XHQpO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBsb2dMZXZlbCA9IFwiaW5mb1wiO1xuXG5mdW5jdGlvbiBkdW1teSgpIHt9XG5cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdGlmIChzaG91bGRMb2cobGV2ZWwpKSB7XG5cdFx0aWYgKGxldmVsID09PSBcImluZm9cIikge1xuXHRcdFx0Y29uc29sZS5sb2cobXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcIndhcm5pbmdcIikge1xuXHRcdFx0Y29uc29sZS53YXJuKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKG1zZyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cbnZhciBncm91cCA9IGNvbnNvbGUuZ3JvdXAgfHwgZHVtbXk7XG52YXIgZ3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkIHx8IGR1bW15O1xudmFyIGdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZCB8fCBkdW1teTtcbi8qIGVzbGludC1lbmFibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwID0gbG9nR3JvdXAoZ3JvdXApO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cENvbGxhcHNlZCA9IGxvZ0dyb3VwKGdyb3VwQ29sbGFwc2VkKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBFbmQgPSBsb2dHcm91cChncm91cEVuZCk7XG5cbm1vZHVsZS5leHBvcnRzLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG5cdGxvZ0xldmVsID0gbGV2ZWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Byb2plY3Qvd2gtdmF1bHQvcG9ydGFsLWFwcC9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvcG9sbC5qcz8xMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyBfX3Jlc291cmNlUXVlcnkgKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdHZhciBob3RQb2xsSW50ZXJ2YWwgPSArX19yZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpIHx8IDEwICogNjAgKiAxMDAwO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdHZhciBjaGVja0ZvclVwZGF0ZSA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlKGZyb21VcGRhdGUpIHtcblx0XHRpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdG1vZHVsZS5ob3Rcblx0XHRcdFx0LmNoZWNrKHRydWUpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRcdGlmIChmcm9tVXBkYXRlKSBsb2coXCJpbmZvXCIsIFwiW0hNUl0gVXBkYXRlIGFwcGxpZWQuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdFx0Y2hlY2tGb3JVcGRhdGUodHJ1ZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuXCIpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFlvdSBuZWVkIHRvIHJlc3RhcnQgdGhlIGFwcGxpY2F0aW9uIVwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRzZXRJbnRlcnZhbChjaGVja0ZvclVwZGF0ZSwgaG90UG9sbEludGVydmFsKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common?95f9":
/*!****************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-tasks":
/*!***************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/backend-tasks/dist/index.cjs.js" ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/backend-tasks/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-client":
/*!****************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/catalog-client/dist/index.cjs.js" ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/catalog-client/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-model":
/*!***************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/catalog-model/dist/index.cjs.js" ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/catalog-model/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/errors":
/*!********************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/errors/dist/index.cjs.js" ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/errors/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/integration":
/*!*************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/integration/dist/index.cjs.js" ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/integration/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-adr-backend":
/*!********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-adr-backend/dist/index.cjs.js" ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-adr-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-app-backend":
/*!********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js" ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-backend":
/*!*********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-node":
/*!******************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js" ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend-module-gitlab":
/*!**************************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-catalog-backend-module-gitlab/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-catalog-backend-module-gitlab/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend-module-openapi":
/*!***************************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-catalog-backend-module-openapi/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-catalog-backend-module-openapi/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend":
/*!************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js" ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-kafka-backend":
/*!**********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-kafka-backend/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-kafka-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-kubernetes-backend":
/*!***************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-kubernetes-backend/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-kubernetes-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-permission-node":
/*!************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js" ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-playlist-backend":
/*!*************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-playlist-backend/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-playlist-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-proxy-backend":
/*!**********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-scaffolder-backend":
/*!***************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend-node":
/*!****************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js" ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend":
/*!***********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js" ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-stack-overflow-backend":
/*!*******************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-stack-overflow-backend/dist/index.cjs.js" ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-stack-overflow-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-techdocs-backend":
/*!*************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-todo-backend":
/*!*********************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-todo-backend/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@backstage/plugin-todo-backend/dist/index.cjs.js");

/***/ }),

/***/ "@drodil/backstage-plugin-qeta-backend":
/*!****************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@drodil/backstage-plugin-qeta-backend/dist/index.cjs.js" ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@drodil/backstage-plugin-qeta-backend/dist/index.cjs.js");

/***/ }),

/***/ "@gitbeaker/node":
/*!**************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@gitbeaker/node/dist/index.js" ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@gitbeaker/node/dist/index.js");

/***/ }),

/***/ "@k-phoen/backstage-plugin-announcements-backend":
/*!**************************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@k-phoen/backstage-plugin-announcements-backend/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/@k-phoen/backstage-plugin-announcements-backend/dist/index.cjs.js");

/***/ }),

/***/ "archiver":
/*!**************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/archiver/index.js" ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/archiver/index.js");

/***/ }),

/***/ "backstage-grpc-playground-backend":
/*!************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/backstage-grpc-playground-backend/dist/index.cjs.js" ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/backstage-grpc-playground-backend/dist/index.cjs.js");

/***/ }),

/***/ "bcrypt":
/*!*************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/bcrypt/bcrypt.js" ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/bcrypt/bcrypt.js");

/***/ }),

/***/ "dockerode":
/*!********************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/dockerode/lib/docker.js" ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/dockerode/lib/docker.js");

/***/ }),

/***/ "express-promise-router":
/*!*************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "express":
/*!*************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/express/index.js" ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/express/index.js");

/***/ }),

/***/ "fs-extra":
/*!******************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/fs-extra/lib/index.js" ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/fs-extra/lib/index.js");

/***/ }),

/***/ "global-agent/bootstrap":
/*!**********************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/global-agent/bootstrap.js" ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/global-agent/bootstrap.js");

/***/ }),

/***/ "globby":
/*!************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/globby/index.js" ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/globby/index.js");

/***/ }),

/***/ "http-proxy-middleware":
/*!********************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/http-proxy-middleware/dist/index.js" ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/http-proxy-middleware/dist/index.js");

/***/ }),

/***/ "js-yaml":
/*!*************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/js-yaml/index.js" ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/js-yaml/index.js");

/***/ }),

/***/ "luxon":
/*!**********************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/luxon/build/node/luxon.js" ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/luxon/build/node/luxon.js");

/***/ }),

/***/ "p-limit":
/*!*************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/p-limit/index.js" ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/p-limit/index.js");

/***/ }),

/***/ "proxy-agent":
/*!*****************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/proxy-agent/index.js" ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/node_modules/proxy-agent/index.js");

/***/ }),

/***/ "@backstage/backend-common?0dc5":
/*!***********************************************************************************************************************************************************!*\
  !*** external "/Users/apple/Desktop/Project/wh-vault/portal-app/plugins/onboarding-poc-backend/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \***********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/apple/Desktop/Project/wh-vault/portal-app/plugins/onboarding-poc-backend/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3a2596dcdf179dd162fd")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
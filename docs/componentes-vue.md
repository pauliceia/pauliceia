**Idioma:** [🇺🇸 English](./vue-components.md) | 🇧🇷 Português

# Componentes Vue

Total de componentes mapeados: **51**.

## Pastas
- `src` (1)
- `src/views/components` (2)
- `src/views/components/application` (3)
- `src/views/components/aside-right` (1)
- `src/views/components/dashboard` (4)
- `src/views/components/map` (10)
- `src/views/components/map/sidebar-edit` (4)
- `src/views/components/map/sidebar-edit/func` (3)
- `src/views/components/map/sidebar-layer` (6)
- `src/views/layouts` (2)
- `src/views/pages` (9)
- `src/views/pages/dashboard` (6)

## `src`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **app** | `App.vue` | — | — | — |

## `src/views/components`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **HowToCite** | `HowToCite.vue` | — | — | — |
| **Terms** | `Terms.vue` | — | — | — |

## `src/views/components/application`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **p-dropLanguage** | `DropLanguage.vue` | — | — | `modifyLanguage` |
| **Header** | `Header.vue` | — | — | — |
| **p-logAvatar** | `LogAvatar.vue` | `name`, `photo` | — | `logout` |

## `src/views/components/aside-right`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **Main** | `Main.vue` | — | — | `actInfoVector` |

## `src/views/components/dashboard`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **Links** | `Links.vue` | — | — | — |
| **ModalNotification** | `ModalNotification.vue` | `notification_id` | — | `showModal2` |
| **Notifications** | `Notifications.vue` | `showInput` | — | `canUserRemoveIt`, `return` |
| **PopoverLabels** | `PopoverLabels.vue` | `text` | — | — |

## `src/views/components/map`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **BoxInfoLayer** | `BoxInfoLayer.vue` | — | — | `changeFollow`, `Api`, `if` |
| **BoxInfoVector** | `BoxInfoVector.vue` | — | — | `closeBox` |
| **BoxNotifications** | `BoxNotifications.vue` | — | — | `closeBox` |
| **placesSearchMultiple** | `Geocoding.vue` | — | `input` | `setting` |
| **OlMap** | `Ol-map.vue` | `center` | — | — |
| **SidebarEdit** | `SidebarEdit.vue` | — | — | `sidebarActive` |
| **SidebarLayer** | `SidebarLayer.vue` | — | — | `sidebarActive` |
| **SubtitleMap** | `SubtitleMap.vue` | `subShow` | — | `closeBox` |
| **Timeline** | `Timeline.vue` | — | — | `getTemporalColumns`, `if` |
| **mapAlert** | `mapAlert.vue` | — | — | `closeBox` |

## `src/views/components/map/sidebar-edit`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **Attributes** | `Attributes.vue` | — | — | `insertFeature`, `if`, `if` |
| **Functions** | `Functions.vue` | — | — | `_getLayer`, `if` |
| **Layers** | `Layers.vue` | — | — | `_alterLayer`, `if`, `if` |
| **LayersItem** | `LayersItem.vue` | `id` | `finishEdit` | `_getStatus` |

## `src/views/components/map/sidebar-edit/func`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **Line** | `Line.vue` | `source` | — | `add`, `if` |
| **Point** | `Point.vue` | `source` | — | `add`, `if` |
| **Polygon** | `Polygon.vue` | — | — | — |

## `src/views/components/map/sidebar-layer`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **AddLayers** | `AddLayers.vue` | — | — | `getKeywordById` |
| **Layers** | `Layers.vue` | — | — | `reorder`, `if` |
| **LayersItem** | `LayersItem.vue` | `status`, `color`, `titleInit` | — | `getColor`, `for`, `if`, `if`, `if` |
| **LayersItemOther** | `LayersItemOther.vue` | `color` | — | `modifyLayer`, `if`, `if`, `for`, `if` |
| **LayersItemRasters** | `LayersItemRasters.vue` | `color` | — | `modifyLayer`, `if`, `if`, `for`, `if` |
| **LayersItemStatic** | `LayersItemStatic.vue` | `group`, `color` | — | `modifyLayer`, `if`, `for`, `if` |

## `src/views/layouts`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **application** | `application.vue` | — | — | — |
| **Dashboard** | `dashboard.vue` | `title` | — | `toggleMenu` |

## `src/views/pages`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **about** | `about.vue` | — | — | — |
| **contact** | `contact.vue` | — | — | — |
| **explore** | `explore.vue` | — | — | — |
| **home** | `home.vue` | — | — | — |
| **login** | `login.vue` | — | — | `loginSocial` |
| **register** | `register.vue` | — | — | `registerSubmit`, `if` |
| **tutorial** | `tutorial.vue` | — | — | — |
| **validEmail** | `validEmail.vue` | — | — | — |
| **validSocial** | `validSocial.vue` | — | — | — |

## `src/views/pages/dashboard`
| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |
| --- | --- | --- | --- | --- |
| **denunciations** | `denunciations.vue` | — | — | `clearNot`, `Api` |
| **editLayer** | `editLayer.vue` | — | — | `newKeyword` |
| **EditLayer** | `home.vue` | — | — | `deleteLayer`, `if`, `Api` |
| **keywords** | `keywords.vue` | — | — | `back`, `if`, `if` |
| **newLayer** | `newLayer.vue` | — | — | `newKeyword` |
| **profile** | `profile.vue` | — | — | `submitInfo`, `Api` |


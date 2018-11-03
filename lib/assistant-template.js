class AssistantTemplate {
  constructor(configuration) {
    this.key = configuration.key
  }

  init(plugins) {
    this.plugins = plugins
    if (!this.key) {
      return Promise.reject('[assistant-template] Erreur : vous devez configurer ce plugin !')
    }
    return Promise.resolve(this)
  }

  action(commande) {
    switch (commande) {
      case '':
        break;
      default:
        break;
    }
  }
}

exports.init = (configuration, plugins) => {
  return new AssistantTemplate(configuration).init(plugins)
    .then(resource => {
      console.log('[assistant-template] Plugin chargé et prêt.')
      return resource
    })
}

/**
 * À noter qu'il est également possible de sauvegarder des informations supplémentaires dans le fichier configuration.json général
 * Pour cela on appellera this.plugins.assistant.saveConfig('nom-du-plugin', {configuration_en_json_complète}) (exemple dans le plugin freebox)
 */
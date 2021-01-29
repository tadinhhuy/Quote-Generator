// git: https://github.com/spatie/form-backend-validation

/**
 * @desc convert given object to FormData
 *
 * @param {FormData|Object} object
 * @returns {FormData}
 */
const objectToFormData = (object, formData = new FormData(), parent = null) => {
    // already a FormData, just return it
    if (object instanceof FormData) {
      return object
    }
  
    if (object === null || object === 'undefined' || object.length === 0) {
      return formData.append(parent, object)
    }
  
    for (const property in object) {
      if (property in object) {
        appendToFormData(formData, getKey(parent, property), object[property])
      }
    }
  
    return formData
  }
  
  const getKey = (parent, property) => {
    return parent ? parent + '[' + property + ']' : property
  }
  
  const appendToFormData = (formData, key, value) => {
    if (value instanceof Date) {
      return formData.append(key, value.toISOString())
    }
  
    if (value instanceof File) {
      return formData.append(key, value, value.name)
    }
  
    if (typeof value === 'boolean') {
      return formData.append(key, value ? '1' : '0')
    }
  
    if (value === null) {
      return formData.append(key, '')
    }
  
    if (typeof value !== 'object') {
      return formData.append(key, value)
    }
  
    objectToFormData(value, formData, key)
  }
  
  /**
   * @desc check if given object has any upload file
   *
   * @param {Object} object
   * @returns {boolean}
   */
  const hasFiles = object => {
    for (const property in object) {
      if (hasFilesDeep(object[property])) {
        return true
      }
    }
  
    return false
  }
  
  /**
   * @desc check if given object has any upload file
   *
   * @param {Object|Array} object
   * @returns {boolean}
   */
  const hasFilesDeep = object => {
    if (object === null) {
      return false
    }
  
    if (typeof object === 'object') {
      for (const key in object) {
        if (key in object) {
          if (hasFilesDeep(object[key])) {
            return true
          }
        }
      }
    }
  
    if (Array.isArray(object)) {
      object.forEach(x => {
        if (hasFilesDeep(x)) {
          return true
        }
      })
    }
  
    return object instanceof File || object instanceof FileList
  }
  
  export { objectToFormData, hasFiles }
  
```js
  async #update(instance, prior) {
    if (Array.isArray(instance)) {
      assert(!prior || Array.isArray(prior))
      return await Promise.all(
        instance.map((_, i) => this.#update(i, prior?.[i]))
      )
    }
    if (!(instance instanceof IpldInterface)) {
      return
    }
    assert(!prior || prior instanceof IpldInterface)
    if (instance instanceof HistoricalPulseLink) {
      return
    }
    if (instance instanceof PulseLink) {
      if (instance.bakedPulse) {
        return
      }
      const pulse = await this.#pulseResolver(instance)
      instance.bake(pulse)
      return await this.#update(instance.bakedPulse, prior?.bakedPulse)
    }
    if (instance instanceof Hamt) {
      return await this.#updateHamt(instance, prior)
    }
    // walk the classmap
    const { classMap = {} } = instance.constructor
    await Promise.all(
      Object.keys(classMap).map(async (key) => {
        const value = instance[key]
        debug('classMap', key, value)
        await this.#update(value, prior?.[key])
      })
    )
  }
```
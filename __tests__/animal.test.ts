import { Lion } from '../src/Lion'
import { Tiger } from '../src/Tiger'
import { describe, it, expect } from '@jest/globals'

describe('Lion and Tiger', () => {
    it('should speak correctly', () => {
        const lion = new Lion()
        const tiger = new Tiger()

        expect(lion.speak("I'm a lion")).toBe("I'm roar a roar lion roar")
        expect(tiger.speak("Lions suck")).toBe("Lions grrr suck grrr")
    })
})

export class Animal {
    sound: string

    constructor (sound: string) {
        this.sound = sound
    }

    speak (message: string): string {
        const words = message.split(' ')
        const interspersedWords = words.map(word => `${word} ${this.sound}`)
        return interspersedWords.join(' ')
    }
}
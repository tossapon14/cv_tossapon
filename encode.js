class Encode {
    constructor() {
        this.AlphaNumericString = "ABCDabcd!@$%^efghijkEFGH01234lmnopqr*()_+stuvxyz56789IJKLMNOPQR.STUVWXYZ";
        this.AlphaLength = 72;
        this.listSwap = [100, 23, 35, 45, 5, 11, 88, 77, 45, 21, 220, 87, 14, 68, 311];
        this.listSwapLength = 15
    }
    encode(str) {
        const n = str.length;
        const arrChar = str.split('');
        const codeKey = Math.floor(Math.random() * 15);
        var newChar = "t";
        for (let i = 0; i < n; i++) {
            const indexSwap = (codeKey+i)%this.listSwapLength;

            const code = Math.abs((this.AlphaNumericString.indexOf(arrChar[i]) + this.listSwap[indexSwap]) % this.AlphaLength);
            newChar += this.AlphaNumericString[code];
        }
        newChar += `0${codeKey}`.slice(-2);

        return newChar;
    }
    decode(str) {
        const n = str.length-3;
        const r = Math.floor(Math.random() * 15);
        const codeKey = parseInt(str.slice(-2));
        const arrChar = str.slice(1).split('');
        var decodeChar = "";
        for (let i = 0; i < n; i++) {
            const indexSwap = (codeKey+i)%this.listSwapLength;        
            const codeindex = (this.AlphaLength-(this.listSwap[indexSwap]-this.AlphaNumericString.indexOf(arrChar[i])) % this.AlphaLength)%this.AlphaLength;
            decodeChar += this.AlphaNumericString[codeindex];
        }
        return decodeChar;
    }

}
// export default Encode;
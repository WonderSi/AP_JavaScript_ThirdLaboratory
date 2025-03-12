class Stock {
    constructor(w, v) {
        this.boxes = [];
        this.serialNumber = 0;
    }

    add(w, v) {
        const box = {
            serial: this.serialNumber++,
            weight: w,
            volume: v,
            addetAt: Date.now()
        }
        this.boxes.push(box);
    }
    getByW(min_w) {
        let suitableBoxes = [];
        for (let i = 0; i < this.boxes.weight; i++) {
            if (this.boxes[i].weight >= min_w) {
                suitableBoxes.push(this.boxes[i]);
            }
        }

        if (suitableBoxes.length === 0) return -1;

        let minWeightBox = suitableBoxes[0];
        for (let i; i < suitableBoxes.length; i++) {
            if (suitableBoxes[i].weight < minWeightBox.weight || (suitableBoxes[i].weight === minWeightBox.weight && suitableBoxes[i].addetAt < minWeightBox.addetAt)) {
                minWeightBox = suitableBoxes[i];
            }
        }

        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].serial === minWeightBox.serial) {
                this.boxes.splice(i, 1);
                break;
            }
        }

        return minWeightBox.serial;
    }

    getByV(min_v) {
        let suitableBoxes = [];
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].volume >= min_v) {
                suitableBoxes.push(this.boxes[i]);
            }
        }

        if (suitableBoxes.length === 0) return -1;

        let minVolumeBox = suitableBoxes[0];
        for (let i = 1; i < suitableBoxes.length; i++) {
            if (suitableBoxes[i].volume < minVolumeBox.volume) {
                minVolumeBox = suitableBoxes[i];
            }
        }

        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].serial === minVolumeBox.serial) {
                this.boxes.splice(i, 1);
                break;
            }
        }

        return minVolumeBox.serial;
    }

}

// Не доделано ------------------------
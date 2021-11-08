
    function studentsCategoryDataOutput(data) {
        const graphics = Array.from(document.querySelectorAll('.students__graphic svg'));


        function sumData(...data) {
            const result = data;
            const sum = result.reduce((a, b) => a + b);

            return sum;
        } 

        const categoryRatio = (category, sum) => Math.ceil((category / sum) * 100);

        const occupationSum = sumData(data.occupation.fullTime, data.occupation.distance, data.occupation.extramural);
        const paymentSum = sumData(data.payment.public, data.payment.nonBudget);

        graphics[0].setAttribute('width', categoryRatio(data.occupation.fullTime, occupationSum));
        graphics[1].setAttribute('width', categoryRatio(data.occupation.distance, occupationSum));
        graphics[2].setAttribute('width', categoryRatio(data.occupation.extramural, occupationSum));
        graphics[3].setAttribute('width', categoryRatio(data.payment.public, paymentSum));
        graphics[4].setAttribute('width', categoryRatio(data.payment.nonBudget, paymentSum));
    }

export default studentsCategoryDataOutput
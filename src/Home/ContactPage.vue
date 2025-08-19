<template>
    <div class="container-contact-page">
        <div class="card-location">
            <img :src="mapLocation" alt="location map"/>
            <div class="card-text">
                <h3>Vue Barber Shop</h3>
                <br/>
                <p>404 Nont Fond St.
                    <br/>
                    Gateway City
                    <br/>
                    Province, P1M P1N
                </p>
                <br/>
                <h4>Hours of Operation</h4>
                <br/>
                <h5>Monday to Fridays</h5>
                <p>11:00 AM to 07:00 PM</p>
                <br/>
                <h5>Weekends and Holidays</h5>
                <p>10:00 AM to 06:00 PM</p>

            </div>
        </div>
    </div>
</template>

<script setup>
import mapLocation from '../images/map-location.png'
</script>

<style scoped>
.container-contact-page{
    margin: 1em;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}

.card-location{
    display: flex;
    flex-direction: row;

    gap: 1em;
}

img{
    max-width: 300px;
    height: auto;

    border-radius: 8px;
}

.card-text {
    margin-top: 1em;
    color: #36454F;
}

@media screen and (max-width: 768px) {
    .card-location {
        flex-direction: column;
        gap: 0;
    }

    .card-text {
        text-align: center;
    }
}
</style>
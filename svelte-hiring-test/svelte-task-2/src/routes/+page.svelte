<script lang="ts">
    import Carousel from '$lib/components/Carousel.svelte';
    
    const items = [
        { id: '1', src: '/cat1.jpg', alt: 'Cat 1' },
        { id: '2', src: '/cat2.jpg', alt: 'Cat 2' },
        { id: '3', src: '/cat3.jpg', alt: 'Cat 3' },
        { id: '4', src: '/cat4.jpg', alt: 'Cat 4' },
        { id: '5', src: '/cat5.jpg', alt: 'Cat 5' },
        { id: '6', src: '/cat6.jpg', alt: 'Cat 6' }
    ];
</script>

<main class="container">
    <header>
        <h1>Image Carousel Implementation</h1>
        <p class="description">
            Implement an image carousel with navigation controls and indicators.
        </p>
    </header>

    <section class="demo-section">
        <Carousel {items} />
    </section>
</main>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    header {
        text-align: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
    }

    .description {
        color: #666;
        max-width: 600px;
        margin: 0 auto;
    }

    .demo-section {
        margin: 2rem 0;
    }

    @media (max-width: 768px) {
        .container {
            padding: 1rem;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
</style>

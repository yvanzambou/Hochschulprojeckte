<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomepageController extends AbstractController {

    private array $entries;
    private array $items;

    public function __construct()
    {
        $this->entries = [
            'Alle Kategorien', 'Alexa Skills', 'Amazon Geräte', 'Amazon Global Store',
            'Amazon Retourenkauf', 'Angebote', 'Apps & Spiele', 'Audible Hörbücher',
            'Auto & Motorrad', 'Baby', 'Baumarkt', 'Beleuchtung', 'Bücher', 'Computer & Zubehör',
            'Andere'
        ];

        $this->items = [
            'Bestseller', 'Amazon Basics' , 'Neuerscheinungen' , 'Angebote', 'Prime Video',
            'Musik', 'Prime', 'Bücher', 'Shopping-Tipps', 'Mode', 'Gutscheine', 'Lebensmittel', 'Küche, Haushalt & Wohnen'
        ];
    }

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('pages/home.html.twig', [
            'entries' => $this->entries,
            'items' => $this->items
        ]);
    }
}
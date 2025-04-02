---
layout: project.njk
title: PWr_Count
startDate: 2-11-2024
endDate: NotYet
description: Pomiar Wykorzystania Przestrzeni Publicznych z Wykorzystaniem Pomiaru Urządzeń Bluetooth
projectCordinator: Daamioo
funding: 10zł
progress: 50
color: FF00FF
---
**Projekt: PWR_Count**

Projekt ma na celu opracowanie i wdrożenie rozproszonej sieci IoT do monitorowania i analizy zatłoczenia w przestrzeniach publicznych. Wykorzystuje się w tym celu sieć sensorów Bluetooth Low Energy (BLE), które zliczają obecność urządzeń Bluetooth (np. smartfonów) jako wskaźnik obecności ludzi. 

**Główne Cele i Funkcje:**

* **Pomiar Zatłoczenia:** System mierzy poziom zatłoczenia poprzez zliczanie sygnałów Bluetooth emitowanych przez urządzenia w danym obszarze. 
* **Wizualizacja Danych:** Dane o zatłoczeniu są przetwarzane i wizualizowane, aby umożliwić łatwe zrozumienie i analizę sytuacji w czasie rzeczywistym. 
* **Skalowalność:** Architektura systemu jest zaprojektowana tak, aby umożliwić łatwe rozszerzanie sieci sensorów na większe obszary. 
* **Niskie Koszty:** Wykorzystanie tanich sensorów BLE pozwala na wdrożenie systemu przy relatywnie niskich kosztach.

**Architektura Systemu:**

System składa się z trzech warstw:

1.  **Warstwa Sensorów:** Rozproszona sieć węzłów sensorowych BLE  zbiera dane o obecności urządzeń Bluetooth. 
2.  **Warstwa Agregacji Danych:** Centralny serwer  gromadzi dane zebrane przez sensory w bazie danych InfluxDB. 
3.  **Warstwa Przetwarzania i Wizualizacji Danych:** Ten sam serwer przetwarza dane i wizualizuje je za pomocą platformy Grafana. 

**Podsumowanie:**

Projekt "PWr_Count" dostarcza elastyczne rozwiązanie do analizy ruchu i wykorzystania przestrzeni, mające potencjał do zastosowań w różnych obszarach, od zarządzania ruchem po inteligentne budynki.


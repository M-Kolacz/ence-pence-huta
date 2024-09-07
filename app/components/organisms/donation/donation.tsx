import { Section } from '#app/components/templates'

export const Donation = () => {
	return (
		<Section className="flex flex-col items-center gap-base">
			<h2 className="max-w-prose text-center font-headings text-h2 text-text">
				Dotacje Gminy Miejskiej Kraków do opieki nad dziećmi w wieku do lat 3 w
				2023 roku
			</h2>
			<img src="/img/news/logo-krakow.png" alt="" />
			<p className="max-w-prose text-center text-p1 text-text-subtle">
				W roku 2023 od 1 stycznia 2023 roku Gmina Miejska Kraków udzielać będzie
				dotacji(dofinansowania) do dzieci objętych opieką.Podstawowa kwota
				dotacji(dofinansowania) udzielanej przez Gminę Miejską Kraków wynosi
				3.50zł za godzinę opieki nad dzieckiem. Zgodnie z podpisaną z Gminą
				Miejską Kraków umową, w okresie otrzymania dotacji zobowiązani jesteśmy
				do pomniejszania wysokości miesięcznych opłat za objęcie opieką
				dziecka(tzw.,,Czesne") o kwotę niższą niż kwota uzyskanej od Gminy
				dotacji. Miesięczna kwota o jaką obniżone zostaną opłaty za opiekę
				wyliczona zostanie według wzoru: liczba godzin, w czasie których
				zapewniona jest dziecku opieka w danym miesiącu(liczona na podstawie
				zawartej z rodzicami lub opiekunami prawnymi umowy) x 3.50zł.W przypadku
				objęcia opieką dziecka z orzeczeniem o niepełnosprawności Gmina Miejska
				Kraków udzielać będzie podmiotowi świadczącemu opiekę dodatkowej
				dotacji(dofinansowania) w wysokości 6,00zł za każdą godzinę opieki nad
				dzieckiem. Powyższa kwota nie będzie miała wpływu na wysokość opłat
				ponoszonych przez rodzica lub opiekuna prawnego.Jednocześnie
				informujemy, że dotacja(dofinansowanie) dotyczy wyłącznie dzieci
				zamieszkałych na terenie miasta Krakowa.Ewentualne uwagi dotyczące
				udzielanych dotacji należy kierować na adresWydział Polityki Społecznej
				i Zdrowia Urzędu Miasta Krakowa,ul. Dekerta 24, 30-703 Krakówtel. 12 616
				92 84, e-mail: sz.umk@um.krakow.pl
			</p>
		</Section>
	)
}

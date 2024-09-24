import { EquipaList } from './EquipaList'
import Text from '@/components/Text'
import { Filter, Miembro } from './types'

function EquipaSection() {
  const filters: Filter[] = [
    {
      label: (
        <Text from="Nosotras" as="span" variant="sm">
          fundadoras
        </Text>
      ),
      value: 'fundadora',
    },
    {
      label: (
        <Text from="Nosotras" as="span" variant="sm">
          aliadas
        </Text>
      ),
      value: 'aliada',
    },
    {
      label: (
        <Text from="Nosotras" as="span" variant="sm">
          voluntarias
        </Text>
      ),
      value: 'voluntaria',
    },
  ]

  const miembros: Miembro[] = [
    {
      name: 'Sophia Arrazola',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_sophia
        </Text>
      ),
      country: 'Guatemala',
      url: '/nosotras/sophia-arrazola',
      tag: 'fundadora',
      img: '/img/equipa/Sophia.jpg',
    },
    {
      name: 'Jesica Bastidas',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_jes
        </Text>
      ),
      country: 'México',
      url: '/nosotras/jesica-bastidas',
      tag: 'fundadora',
      img: '/img/equipa/Jesica.jpg',
    },
    {
      name: 'Rosi Álvarez',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_rosi
        </Text>
      ),
      country: 'México',
      url: 'https://www.linkedin.com/in/rosi-alvarez-7221462b/',
      tag: 'aliada',
      img: '/img/equipa/Rosi.jpg',
    },
    {
      name: 'Monserrat Padilla',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_monserrat
        </Text>
      ),
      country: 'México',
      url: 'https://esdd.mx',
      tag: 'aliada',
      img: '/img/equipa/Monse.jpg',
    },
    {
      name: 'Luciana Renner',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_luciana
        </Text>
      ),
      country: 'México',
      url: 'https://mx.linkedin.com/in/luciana-renner-2190837a',
      tag: 'aliada',
      img: '/img/equipa/Luciana.jpg',
    },
    {
      name: 'Carolina González',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_carolina
        </Text>
      ),
      country: 'Argentina',
      url: 'https://www.linkedin.com/in/carolagonz%C3%A1lez',
      tag: 'aliada',
      img: '/img/equipa/Caro.jpg',
    },
    {
      name: 'Diana Rivadeneira',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_diana
        </Text>
      ),
      country: 'Ecuador',
      url: 'https://www.linkedin.com/in/diana-rivadeneira',
      tag: 'aliada',
      img: '/img/equipa/Diana.jpg',
    },
    {
      name: 'Marce Bulla Montoya',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_marce
        </Text>
      ),
      country: 'Costa Rica',
      url: 'https://www.facebook.com/sandra.marcela.96?mibextid=kFxxJD',
      tag: 'voluntaria',
      img: '/img/equipa/Marce.jpg',
    },
    {
      name: 'Chris Van Balen',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_chris
        </Text>
      ),
      country: 'Holanda',
      url: 'https://www.linkedin.com/in/chrisvbalen/',
      tag: 'voluntaria',
      img: '/img/equipa/Chris.jpg',
    },
    {
      name: 'Sophie Greenspan',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_sophie
        </Text>
      ),
      country: 'EEUU',
      url: 'https://www.instagram.com/_sophiegreenspan/',
      tag: 'voluntaria',
      img: '/img/equipa/Sophie.jpg',
    },
    {
      name: 'Paulina Garzaro',
      position: (
        <Text from="Nosotras" variant="sm">
          posicion_paulina
        </Text>
      ),
      country: 'Guatemala',
      url: 'https://www.linkedin.com/in/paulina-garzaro-a46ab6197/',
      tag: 'voluntaria',
      img: '/img/equipa/Paulina.jpg',
    },
  ]
  return (
    <EquipaList
      header={
        <Text from="Nosotras" variant="xl" as="h2">
          equipa
        </Text>
      }
      filters={filters}
      miembros={miembros}
      conectar={
        <Text from="Nosotras" as="span" variant="sm">
          conectar
        </Text>
      }
    />
  )
}

export default EquipaSection

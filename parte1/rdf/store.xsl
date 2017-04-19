<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
                xmlns:foaf="http://xmlns.com/foaf/spec/"
                xmlns:sch="http://schema.org/"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:ex="http://www.example.org/store"
                >

  <xsl:variable name="base">http://quena-mti.bastian.info/rdf</xsl:variable>

  <xsl:template match="/">
    <rdf:RDF>
      <rdf:Description rdf:about="{$base}">
        <xsl:apply-templates/>
      </rdf:Description>
    </rdf:RDF>
  </xsl:template>

  <xsl:template match="ex:direccion">
    <xsl:variable name="_id"><xsl:value-of select="@id"/></xsl:variable>
    <sch:PostalAddress>
      <rdf:Description rdf:about="{$base}/direccion/{$_id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>
        <sch:addressCountry><xsl:value-of select="ex:pais"/></sch:addressCountry>
        <sch:addressRegion><xsl:value-of select="ex:region"/></sch:addressRegion>
        <sch:addressLocality><xsl:value-of select="ex:ciudad"/></sch:addressLocality>
        <sch:streetAddress><xsl:value-of select="ex:descripcion"/></sch:streetAddress>
        <sch:postalCode><xsl:value-of select="ex:zipcode"/></sch:postalCode>
        <sch:GeoCoordinates>
          <rdf:Description rdf:about="http://schema.org/GeoCoordinates">
            <sch:longitude><xsl:value-of select="ex:geo/@lat"/></sch:longitude>
            <sch:latitude><xsl:value-of select="ex:geo/@lon"/></sch:latitude>
          </rdf:Description>
        </sch:GeoCoordinates>
      </rdf:Description>
    </sch:PostalAddress>
  </xsl:template>

  <xsl:template match="ex:establecimiento">
    <xsl:variable name="_id"><xsl:value-of select="@id"/></xsl:variable>
    <xsl:variable name="dir_id"><xsl:value-of select="ex:direccion/@ref"/></xsl:variable>
    <sch:Place>
      <rdf:Description rdf:about="{$base}/establecimiento/{$_id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>
        <sch:name><xsl:value-of select="ex:nombre"/></sch:name>
        <sch:PostalAddress>
          <rdf:Description rdf:about="{$base}/direccion/{$dir_id}">
          </rdf:Description>
        </sch:PostalAddress>
      </rdf:Description>
    </sch:Place>
  </xsl:template>

  <xsl:template match="ex:categoria">
    <xsl:variable name="_id"><xsl:value-of select="@id"/></xsl:variable>
    <xsl:variable name="padre_id"><xsl:value-of select="ex:categoriaPadre/@ref"/></xsl:variable>
    <sch:category>
      <rdf:Description rdf:about="{$base}/categoria/{$_id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>
        <sch:name><xsl:value-of select="ex:nombre"/></sch:name>
        <sch:description><xsl:value-of select="ex:descripcion"/></sch:description>
        <sch:category>
          <rdf:Description rdf:about="{$base}/categoria/{$padre_id}">
          </rdf:Description>
        </sch:category>
      </rdf:Description>
    </sch:category>
  </xsl:template>

  <xsl:template match="ex:producto">
    <xsl:variable name="id"><xsl:value-of select="@id"/></xsl:variable>
    <xsl:variable name="cat_id"><xsl:value-of select="ex:categoria/@ref"/></xsl:variable>
    <sch:Product>
      <rdf:Description rdf:about="{$base}/producto/{$id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>
        <sch:productID><xsl:value-of select="ex:codigo"/></sch:productID>
        <sch:name><xsl:value-of select="ex:nombre"/></sch:name>
        <sch:brand><xsl:value-of select="ex:marca"/></sch:brand>
        <sch:model><xsl:value-of select="ex:modelo"/></sch:model>
        <sch:description><xsl:value-of select="ex:descripcion"/></sch:description>

        <sch:additionalProperty>
          <rdf:Description rdf:about="http://schema.org/additionalProperty">
            <sch:name>origen</sch:name>
            <sch:value><xsl:value-of select="ex:origen"/></sch:value>
          </rdf:Description>
        </sch:additionalProperty>

        <sch:additionalProperty>
          <rdf:Description rdf:about="http://schema.org/additionalProperty">
            <sch:name><xsl:value-of select="//ex:caracteristica[1]/@nombre"/></sch:name>
            <sch:value><xsl:value-of select="string(//ex:caracteristica[1])"/></sch:value>
          </rdf:Description>
        </sch:additionalProperty>
        <sch:additionalProperty>
          <rdf:Description rdf:about="http://schema.org/additionalProperty">
            <sch:name><xsl:value-of select="//ex:caracteristica[2]/@nombre"/></sch:name>
            <sch:value><xsl:value-of select="string(//ex:caracteristica[2])"/></sch:value>
          </rdf:Description>
        </sch:additionalProperty>
        <sch:additionalProperty>
          <rdf:Description rdf:about="http://schema.org/additionalProperty">
            <sch:name><xsl:value-of select="//ex:caracteristica[3]/@nombre"/></sch:name>
            <sch:value><xsl:value-of select="string(//ex:caracteristica[3])"/></sch:value>
          </rdf:Description>
        </sch:additionalProperty>

      </rdf:Description>
    </sch:Product>
  </xsl:template>

  <xsl:template match="ex:inventario">
    <xsl:variable name="id"><xsl:value-of select="@id"/></xsl:variable>
    <xsl:variable name="prod_id"><xsl:value-of select="ex:producto/@ref"/></xsl:variable>
    <xsl:variable name="est_id"><xsl:value-of select="ex:establecimiento/@ref"/></xsl:variable>
    
    <sch:IndividualProduct>
      <rdf:Description rdf:about="{$base}/inventario/{$prod_id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>
        <sch:serialNumber><xsl:value-of select="ex:codigo"/></sch:serialNumber>
        <sch:price><xsl:value-of select="ex:precio"/></sch:price>
        <sch:priceCurrency><xsl:value-of select="ex:precio/@moneda"/></sch:priceCurrency>
        <sch:status><xsl:value-of select="ex:estado"/></sch:status>
        <sch:dateModified><xsl:value-of select="ex:fecha_actualizado"/></sch:dateModified>

        <sch:Product>
          <rdf:Description rdf:about="{$base}/producto/{$prod_id}">
          </rdf:Description>
        </sch:Product>
        <sch:Place>
          <rdf:Description rdf:about="{$base}/establecimiento/{$est_id}">
          </rdf:Description>
        </sch:Place>
      </rdf:Description>
    </sch:IndividualProduct>
  </xsl:template>

  <xsl:template match="ex:cliente">
    <xsl:variable name="id"><xsl:value-of select="@id"/></xsl:variable>
    <sch:Person>
      <rdf:Description rdf:about="{$base}/categoria/{$id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>
        <sch:name><xsl:value-of select="ex:nombre"/></sch:name>
        <sch:familyName><xsl:value-of select="ex:apellido"/></sch:familyName>
        <sch:email><xsl:value-of select="ex:email"/></sch:email>
        <sch:startDate><xsl:value-of select="ex:fecha_registro"/></sch:startDate>
        <sch:status><xsl:value-of select="ex:estado"/></sch:status>
      </rdf:Description>
    </sch:Person>
  </xsl:template>

  <xsl:template match="ex:venta">
    <xsl:variable name="id"><xsl:value-of select="@id"/></xsl:variable>
    <xsl:variable name="est_id"><xsl:value-of select="ex:establecimiento/@ref"/></xsl:variable>
    <xsl:variable name="cli_id"><xsl:value-of select="ex:cliente/@ref"/></xsl:variable>
    <xsl:variable name="prod_id"><xsl:value-of select="//ex:itemVenta[1]/ex:inventario/@ref"/></xsl:variable>
    <sch:Order>
      <rdf:Description rdf:about="{$base}/categoria/{$id}">
        <ex:class><xsl:value-of select="@class"/></ex:class>

        <sch:orderNumber><xsl:value-of select="@id"/></sch:orderNumber>
        <sch:orderDate><xsl:value-of select="ex:fecha_venta"/></sch:orderDate>
        <sch:orderStatus><xsl:value-of select="ex:estado"/></sch:orderStatus>

        <sch:Place>
          <rdf:Description rdf:about="{$base}/establecimiento/{$est_id}">
          </rdf:Description>
        </sch:Place>
        <sch:customer>
          <rdf:Description rdf:about="{$base}/cliente/{$cli_id}">
          </rdf:Description>
        </sch:customer>
        <sch:acceptedOffer>
          <rdf:Description rdf:about="{$base}/categoria/{$id}">
            <sch:itemOffered>
              <rdf:Description rdf:about="{$base}/producto/{$prod_id}">
          </rdf:Description>
            </sch:itemOffered>
          <sch:price><xsl:value-of select="string(//ex:itemVenta[1]/ex:precio)"/></sch:price>
          <sch:priceCurrency><xsl:value-of select="//ex:itemVenta[1]/ex:precio/@moneda"/></sch:priceCurrency>
          </rdf:Description>
        </sch:acceptedOffer>

      </rdf:Description>
    </sch:Order>
  </xsl:template>

</xsl:stylesheet>
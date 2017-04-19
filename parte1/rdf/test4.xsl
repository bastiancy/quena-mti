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

  <xsl:template match="/">
    <rdf:RDF>
      <rdf:Description rdf:about="http://www.example.com/xml">
        <xsl:apply-templates/>
      </rdf:Description>
    </rdf:RDF>
  </xsl:template>

  <xsl:template match="ex:direccion">
    <xsl:variable name="dir_id"><xsl:value-of select="@id"/></xsl:variable>
    <sch:Product>
      <rdf:Description rdf:about="http://www.example.com/direccion/{$dir_id}">
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
    </sch:Product>
  </xsl:template>

</xsl:stylesheet>
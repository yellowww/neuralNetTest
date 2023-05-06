using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;

namespace neuralNetTest.data
{
    public static class dataImporter
    {
        public static DataEntry[] xmlImporter(string url)
        {
            XmlDocument xmlData = new XmlDocument();
            xmlData.Load(url);
            XmlNodeList allEntries = xmlData.GetElementsByTagName("entry");
            int inputCount = Int32.Parse(xmlData.GetElementsByTagName("schema")[0].InnerText);
            DataEntry[] parsedEntries = new DataEntry[allEntries.Count];
            for(int i=0;i<allEntries.Count;i++)
            {
                double[] allInputs = new double[inputCount];
                for(int j=0;j<inputCount;j++)
                {
                    allInputs[j] = double.Parse(allEntries[i].ChildNodes[j].InnerText, System.Globalization.CultureInfo.InvariantCulture);
                }
                parsedEntries[i] = new DataEntry(allInputs, double.Parse(allEntries[i].ChildNodes[inputCount].InnerText, System.Globalization.CultureInfo.InvariantCulture));
            }
            return parsedEntries;
        }
    }
}

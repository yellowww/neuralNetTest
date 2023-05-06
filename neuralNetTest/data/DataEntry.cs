using System;
using System.Collections.Generic;
using System.Text;

namespace neuralNetTest.data
{
    public class DataEntry
    {
        public double[] inputs;
        public double output;

        public DataEntry(double[] _inputs, double _output)
        {
            inputs = _inputs;
            output = _output;
        }
    }
}

python train.py --train_data_pattern="C:\GitRepositories\youtube-8m\yt8m\v2\video\train*.tfrecord" --train_dir="C:\GitRepositories\youtube-8m\yt8m\v2\models\logistic"

tensorboard --logdir="C:\GitRepositories\youtube-8m\yt8m\v2\models\logistic"

python eval.py --eval_data_pattern="C:\GitRepositories\youtube-8m\yt8m\v2\video\validate*.tfrecord" --train_dir="C:\GitRepositories\youtube-8m\yt8m\v2\models\logistic" --run_once=True

python inference.py --output_file="C:\GitRepositories\youtube-8m\yt8m\v2\models\logistic\predictions.csv" --input_data_pattern="C:\GitRepositories\youtube-8m\yt8m\v2\video\test*.tfrecord" --train_dir="C:\GitRepositories\youtube-8m\yt8m\v2\models\logistic"

You will be given an predictions.csv file that will contain the id for the record files

To get the youtube url you can do the following

The ID field in the TensorFlow record files is a 4-character string (e.g. ABCD). To get the YouTubeID, you can construct a URI like /AB/ABCD.js (note: first 2 characters are repeated!), and append it to the URL data.yt8m.org/2/j/i. As a real example, the ID nXSc can be converted to a video ID via the URL data.yt8m.org/2/j/i/nX/nXSc.js. The format of the file is JSONP, and should be self-explainatory.
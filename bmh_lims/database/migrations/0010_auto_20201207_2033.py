# Generated by Django 3.0.10 on 2020-12-07 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0009_auto_20201204_1835'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalsample',
            name='sample_type',
            field=models.CharField(blank=True, choices=[('CELLS', 'Cells (in DNA/RNA shield)'), ('DNA', 'DNA'), ('AMPLICON', 'Amplicon'), ('OTHER', 'Other')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='sample',
            name='sample_type',
            field=models.CharField(blank=True, choices=[('CELLS', 'Cells (in DNA/RNA shield)'), ('DNA', 'DNA'), ('AMPLICON', 'Amplicon'), ('OTHER', 'Other')], max_length=50, null=True),
        ),
    ]
